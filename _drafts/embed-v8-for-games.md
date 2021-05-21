---
layout: post
title:  "embedding v8 in games: a tutorial introduction"
date:   2021-05-10 12:00:00 -0600
keywords: because games, we do things a little bit different
---


## introduction

Some common architectures for building gameplay in video game engines involve integrating an external scripting language into the engine. Its a repeating pattern that exists across many industries. What separates the games from other situations are two respects. Firstly speed is a factor, secondly games are realtime reactive suimulations so they work by going around a loop.

## why js, why v8?

Google v8 is an astounding piece of technology. Incredibly fast interpreter that compiles code on the fly and caches the results to achieve near native speed. Whats more it implements what is effectivly the defacto standard of the most well known and most widely understood programming language on the planet.  Javascript is a modern multi paradigm language, with flexible dynamic features and more recently fast static typing. If you were to choose a scripting language for your application there are a lot worse choices you could make. One downside I could think of is that your builds will be about 10M bigger.

## the current situation

Having looked over the internet for documentation I can tell you there isnt a good explanation of how to integrate V8 following a pattern that supports the use cases we have in games.

The current documentation for v8 is challenging. This is no doubt in part because v8 is a moving target, its hard to write tutorials for codebases that are constantly changing. Much easier to say look at the sources.

Beyond the initial hello world, two examples come with v8 for you to look at. one implements a javascript shell that allows you to interactivly type an execute js a bit like the python repl. the second example is related to a webserver with js being called in responce to c++ objects instantiated with data passed. neither of these two scenarios is in line with what we want when we make games, both are complicated and opaque making use of multiple embedded template types necessary for specific contexts, without a helpful explanation or discussion.

## follow this bit...

From a purely feature perspective we are at least going to need code that can do the following:

* Load Up JS/Text Files into Memory
* Compile the JS Text
* Keep hold of compiled JS Bytecode
* Execute the JS Bytecode
* Present a set of unified global functions which scripts can use 
* Store and Manage a set of classe which scripts can instantiate and interact with
* Execute/Call Update Function of JS Bytecode 
* Execute/Call Other Specific Functions of JS Bytecode at different Phases 

To keep our lives simple and to mimic a game-like architecture the code will be split over the following classes:

 - Script Class 
   - Encases a Script for Sake of Management inside the Engine
 - Script System Class 
   - Handles creating, loading and compiling scripts also calls to script functions
 - Main Loop Class
   - Running and Tracking the engine cycles
 - Global Wrapper
   - keeps stateless global functions, like frame() deltatime() etc 
 - Library Wrapper
   - more complicated, keeps access classes for library functions windows, sprites, etc 



## important v8 internals

js is a memory managed environment with every entity that occupies memory being kept track of so it can be freed once it is no longer needed. this is a bit slower than the stack based approach we are used to in c++ but it is more convenient. however to interface between a managed environment like js and an unmanaged envirnment like c++ requires we jump through hoops. in effect whenever you use a garbage collected (GC) object from the js side you must also keep track of that objects execution environment its context. so, if we intend to have objects accessible from c++ then we must also have live references managing their existance so that if they are GC'd by v8 it doesnt crash your native code too.

to this end v8 maintains its own templates for the major standard types, numbers, string, etc if you are going to access these kinds of variables then you must use them. it also provides several templates to express the lifetime and scope of these entities.


- func 1
  - func 1
- func 1
  - func 1
  - func 1
- func 1
  - func 1
  
## the process

1. initialise the game engine
1. initialise the v8 system
1. enter the main loop
   1. first time only 
      1. load a script if not loaded
      1. compile a script if not compiled
      1. run the script bytecode from the top
   1. first and successive times
      1. run the specific script bytecode functions 
1. shut down the v8 system
1. shut down the engine

## initialise the v8 system

to initialise v8 you have to call some static functions for their global side effects. also call some which produce pointers for the execution environment which you can keep track of so that you can supply it to other functions. this means the work will all happen within the same virtual machine. 

``` cpp
    // ScriptSystem.cpp
 
    v8::V8::InitializeICUDefaultLocation(argv0);
    v8::V8::InitializeExternalStartupData(argv0);
    _current_platform_ptr = v8::platform::NewDefaultPlatform();
    v8::V8::InitializePlatform(_current_platform_ptr.get());
    v8::V8::Initialize();

    v8::Isolate::CreateParams create_params;
    create_params.array_buffer_allocator = 
            v8::ArrayBuffer::Allocator::NewDefaultAllocator();
    _isolate_ptr = v8::Isolate::New(create_params);

    if (_isolate_ptr == nullptr) {
        std::cout << "ERROR " << std::endl;
    }
    _isolate_ptr->Enter();

```
_isolate_ptr is a member of the ScriptSystem class for which we provide a getter function. Its accessed again and again by the system, keep it handy. its the context for all execution that happens within the system.

This way means if we instantiate multiple ScriptSystem classes the each has its own v8::isolate and is therefore full independant of the other.



## enter the main loop

this part of our system isnt authentic, instead its a simple round robin event loop of the kind provided by SFML. in a production situation i would expect a thread pool or something more sophisticated.

```cpp

    ScriptSystem scriptSystem(argv[0]);
    scriptSystem.Start();

    while (window.get().isOpen())
    {
        sf::Event event;
        while (window.get().pollEvent(event))
        {
            // process the necessary top level events
        }

        scriptSystem.Continue();

        window.Clear();
        scriptSystem.Render();
        window.Display();
    }
```

as you can see we use the ScriptSystem to hide all the v8 gubbins away from our other code. Also notice there is a Start() which is called before the main loop, a Continue() called before the Render(). These are interleaved with sfml framework calls which handle the window and double buffering etc.


## first time, is special

as noted above, compile the code, store the result then run the code. we dont actually call any of our functions accessed from the c++.

```cpp
    // add a c++ function to the global context
	v8::Local<v8::ObjectTemplate> global_template = 
            v8::ObjectTemplate::New(GetIsolate());

    global_template->Set(GetIsolate(), 
                    "log", 
                    v8::FunctionTemplate::New(
                            GetIsolate(), 
                            LogCallback));
 ```

```cpp
    // Compile the source code
    v8::Local<v8::Script> compiledScript = 
        v8::Script::Compile(context, source_code).ToLocalChecked();
```

```cpp
    // Run the script to get the result.
    v8::Local<v8::Value> result;

    if (!compiledScript->Run(context).ToLocal(&result)) {
        v8::String::Utf8Value error(GetIsolate(), 
                                        try_catch.Exception());
        printf("ERROR %s\n", *error);
        return false;
    }
```

## successive runs just call the functions

Now that its been compiled and run once, we can get access to the functions within and keep them for later access. they have access to the context so they see any globals or other functions declared in the same file.

```cpp

    v8::Local<v8::Value> func_val;
    v8::Local<v8::String> func_name = 
        v8::String::NewFromUtf8Literal(GetIsolate(), "Continue");

    if (!context->Global()->Get(context, 
                                func_name).ToLocal(&func_val) 
        || !func_val->IsFunction()) 
    {
        return false;
    }

    v8::Local<v8::Function> func_fun = func_val.As<v8::Function>();
    mContinueFunc.Reset(GetIsolate(), func_fun);

```

## shutting down the v8 system

to do this you must call Exit on the v8::isolate. so inside the destructor of the Script System class access the member _isolate_ptr and call Exit() and then Dispose(), you may or may not reset it depending on your use then Dispose and Shutdown on the v8 library.

```cpp
    _isolate_ptr->Exit();
    _isolate_ptr->Dispose();
    _isolate_ptr = 0;

    v8::V8::Dispose();
    v8::V8::ShutdownPlatform();
```

shut down the engine

## overview


```javascript

    // script.js

    // globals and initialisation

    function Start() {
        // i am called when the object is 
        // instantiated in a scene
        // there may be some housekeeping 
        return;
    }

    function Continue(deltaTime) {
        // i am called every frame, inside 
        // that tight loop mentioned above
        // this is where gameplay might be implemented
        return;
    }

    function Render() {
        // i am also called every frame, inside 
        // that tight loop mentioned above
        // this is for code related to drawing
        return;
    }

    function Finish() {
        // i am called when the object is destroyed, 
        // perhaps on scene end
        return;
    }

```

For the purposes of this tutorial we are going to have a main loop as follows...

```cpp

while (window.get().isOpen())
{
    // check all the window's events that were 
    // triggered since the last iteration of 
    // the loop

    sf::Event event;
    while (window.get().pollEvent(event))
    {
        processEvents();
    }

    scriptSystem.Continue();

    window.Clear();

    scriptSystem.Render();

    window.Display();
}

```

Given a script system which is basically a container for scripts and a simple interface. in practice it would be more, but hey. This one has three methods, when you call one on the script system it then calls the same method on all the scripts in its container.

```cpp

//
// script.hpp
//
#pragma once
#include <iostream>

class Script;

class ScriptSystem {

public:

    ScriptSystem(char* argv0) { }
    virtual ~ScriptSystem() { }

    void NewScript(std::string source);
    
    void Start();
    void Continue();
    void Render();

protected:
    std::vector<Script*> _script_vector;
};

```


```cpp

//
// script.cpp
//
void ScriptSystem::Continue() {

    for(auto S : _script_vector){
        S->Continue();
    }
}

```


```cpp

class Script;

class ScriptSystem {
public:
	ScriptSystem(char* argv0)
    :   _isolate_ptr(nullptr)
    {
        v8::V8::InitializeICUDefaultLocation(argv0);
        v8::V8::InitializeExternalStartupData(argv0);
        _current_platform_ptr = v8::platform::NewDefaultPlatform();
        v8::V8::InitializePlatform(_current_platform_ptr.get());
        v8::V8::Initialize();

        v8::Isolate::CreateParams create_params;
        create_params.array_buffer_allocator = 
                v8::ArrayBuffer::Allocator::NewDefaultAllocator();

        _isolate_ptr = v8::Isolate::New(create_params);

        if (_isolate_ptr == nullptr) {
            std::cout << "ERROR " << std::endl;
        }
        _isolate_ptr->Enter();
    }


    virtual ~ScriptSystem() {
        if (_isolate_ptr) {
            _isolate_ptr->Exit();
            _isolate_ptr->Dispose();
            _isolate_ptr = 0;
        }

        v8::V8::Dispose();
        v8::V8::ShutdownPlatform();
    }

    void NewScript(std::string source);
    
    void Start();
    void Continue();
    void Render();

    v8::Isolate* GetIsolate()     {   return _isolate_ptr;   }

protected:
    v8::Isolate * _isolate_ptr;
	std::unique_ptr<v8::Platform> _current_platform_ptr;    
    std::vector<Script*> _script_vector;
};
```