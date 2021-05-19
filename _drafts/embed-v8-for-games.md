---
layout: post
title:  "embedding v8 for games a tutorial introduction"
date:   2021-05-10 12:00:00 -0600
---


## introduction

some common architectures for building gameplay in video game engines involve integrating an external scripting language into the engine. Its a repeating pattern that exists across many industries. 

what separates the games from other situations are two respects. Firstly speed is a factor, secondly games are realtime reactive suimulations so they work by going around a loop.

Having looked over the internet for documentation I can tell you there isnt a good explanation of how to integrate V8 following a pattern that supports the use cases we have in games.


### why js, why v8?

Google v8 is an astounding piece of technology. Whats more implements what is effectivly the defacto standard of the most well known and most widely understood programming language on the planet.  Javascript is a modern multi paradigm language, with flexible dynamic features are more recently static typing. If you were to choose a scripting language for your application there are a lot worse choices you could make.


### the current situation

the current documentation for v8 is callenging. this is no doubt in part because v8 is a moving target, its hard to write tutorials for codebases that are constantly changing. much easier to say look at the sources.

beyond the initial hello world, two examples come with v8 for you to look at. one implements a javascript shell that allows you to interactivly type an execute js a bit like the python repl. the second example is related to a webserver with js being called in responce to c++ objects instantiated with data passed. neither of these two scenarios is in line with what we want when we make games, both are complicated and opaque making use of multiple embedded template types necessary for specific contexts, without a helpful explanation or discussion.


##


### a skeleton script

~~~

// globals and initialisation

function Start() {
    // i am called when the object is instantiated in a scene
    // there may be some housekeeping 
    return;
}

function Continue(deltaTime) {
    // i am called every frame, inside that tight loop mentioned above
    // this is where gameplay might be implemented
    return;
}

function Render() {
    // i am also called every frame, inside that tight loop mentioned above
    // this is for code related to drawing
    return;
}

function Finish() {
    // i am called when the object is destroyed, perhaps on scene end
    return;
}

~~~



