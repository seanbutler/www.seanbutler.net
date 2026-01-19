---
layout: writing
title: Visual Programming Languages
projects:
  - supervision
---


> First please make sure you have read the [supervision notes](https://www.seanbutler.net/projects/supervision/) on expectations of learning at different levels 


## Masters Level Considerations

As a MSc students you will not reach new ground by implementing a visual programming system. There are many well documented capable open and industrially proven systems already out there. Instead you must consider the internals or user in a more nuanced way.


### Formal vs Informal

Most VPLs dont have any formal semantics, theyre basically boxes as functions and links as values/calls.  Types are often external to the lang. Side effects are ignored / necessary.


### The Scaling Problem

Almost all VPLs become a problem to use once the number of nodes reaches some large value. How can this be addressed?
- Zooming
- Folding


### Alternative Domains

What alternative domains can be represented visually other than Control Flow (Flowcharts, Statecharts) and Data flow (Blueprints, Nodegraph).
Processes?

- Time
- Inter graph communication
- Parallel Execution


### Compilation and Lowering of VPLs

Target your project less abuot the visuals of the VPL and more on either the lowering or the execution.

What transformation opportunities exist once our code requirements are a graph?
- Graph grammars?
- Graph rewriting?

If we have a graph at the beginning, is there a relationship with a CFG which can be exploited for early optimisation?

### Visual programming for non-programmers can be weak

Unless you redefine “non-programmer”. Claiming accessibility is not research: You should determine a precise cognitive model and test it rigorously. 

Instead we might target domain experts, not beginners. Or perhaps target specific areas within game development?
- game economics
- narrative designers
- gameplay programming / technical designers
- level design
- etc


### Avoid
- Visual programming for non-programmers. Unless we are very careful about what we mean by 'non-programmer' 
- Making a system similar to scratch
- Visual Wrapper around Python or similar
- Claims about your language that arent backed up with quantifiable data. This can be challengeing to obtain with small sample size of users.



## BSc Considerations

The target here is lower, you can get some success with an implementation though for higher marks consider what aspects from the MSc section above you might like to work towards.




## Practical Code Links for Engineering

Here are some professional level scripting languages used in video games.

- https://www.lua.org/
- https://github.com/anjo76/angelscript


Here is a book which is a crash course in how to make a simple programming language which is interpreted by a bytecode virtual cpu.

- https://craftinginterpreters.com/

Here is the code to a visual node graph editor written in c++ using the popular open source library [dear imgui](https://github.com/ocornut/imgui
)

- https://github.com/thedmd/imgui-node-editor

These two together and you should be able to make your own VPL. 

