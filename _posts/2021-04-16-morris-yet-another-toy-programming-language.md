---
layout: post
title:  "morris : yet another toy programming language"
excerpt_separator: <!--more-->
---

Morris is a simple programming language for making games. An experiment in minimalism while still being accessible and suitable for a purpose.<!--more-->
 Wherever possible if we could do without it then it has been left out. Or maybe its really just a toy for me to hack on.


![](https://github.com/seanbutler/Morris/blob/main/screenshots/anim6.gif?raw=true)


[Here](https://github.com/seanbutler/Morris) you can access the source code build it yourself and see examples of minimal feature set and understand why even though its small the choices made are expressive.

### specialisation

Comes with SFML integration, Morris is a system "with bells on" so its alreay integrated and you cant link with other things. Morris is a work in progress, its still very early stages. Its likely some things will break and change.

Once we specialise in 2d sprite games, its arguable how extensive a feature set we really need. Also, search based automatic and generative programming is significantly helped by having a more limited set of types. Basically its just a toy.

We have userland threads which each run in their own little virtual machine. All data inside a thread is private each thread has a sprite and a position and velocity. Because threads are structured this way, they currently act like simple procedures and objects.

### small

- Currently there is only one type, integers. Also one main encapsulation threads. In addition, there are no functions, no procedures, no classes etc. Though to be honest im not certain we really need those things one we have threads.

- Communication between the threads is done via message passing. Currently all messages are broadcast to all threads and disappear immediately, they carry no data except themselves so in a sense they are like semaphores. This may change in future.

- Compiler and runtime are integrated together. Sources are compiled to bytecode at runtime.

Did i mention its really just a toy? However, it is a toy you can make toys with!


### plans

- perhaps allowing messages to be passed to specific types of threads, 
- more general parameters for spawning
- spawn returns a handle to the offspring which can then be accessed 
- perhaps parent child access of some kind

### links 

- [https://github.com/seanbutler/Morris](https://github.com/seanbutler/Morris)
