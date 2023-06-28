---
layout: post
title:  "morris : yet another toy programming language"
excerpt_separator: <!--more-->
---

Morris is a simple programming language for making games. Wherever possible if we could do without it then it has been left out. Its really just a toy for me to hack on.

<!--more-->

![](https://github.com/seanbutler/Morris/blob/main/screenshots/anim6.gif?raw=true)


### specialisation

Comes with SFML integration, Morris is a system "with bells on". Morris is a work in progress, its still very early stages. Its likely some things will break and change.

Once we specialise in 2d sprite games, its arguable how extensive a feature set we really need. Also, search based automatic and generative programming is significantly helped by having a more limited set of types. Basically its just a toy.

We have userland threads which each run in their own little virtual machine. All data inside a thread is private each thread has a sprite and a position and velocity. 

### toy

- Currently there are is only two types, integers and threads. In addition, there are no functions, no procedures, no classes etc. Basically its just a toy.

- Communication between the threads is done via message passing. All messages are broadcast to all threads and disappear immediately, they carry no data except themselves so in a sense they are like semaphores.

- Compiler and runtime are integrated together. Sources and compiled bytecode are both executable


Did i mention its really just a toy? However, it is a toy you can make toys with!

### links 

https://github.com/seanbutler/Morris





