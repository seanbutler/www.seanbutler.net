---
layout: post
title:  "genetic programming experiment by combining syntax trees"
excerpt_separator: <!--more-->
---

Written for generation of simple video games, but generally usable for any realtime simulation where you want to investigate evolution of agents with movement and avoidance.

<!--more-->


![](https://github.com/seanbutler/Glynth/blob/master/Media/Screenshot_1.png?raw=true)


Pretty awesome graphics eh?! Thats not the point though, each box represents an agent in the world which can evolve through genetic programming.

### architecture / method

- The simple c-like programming language compiles (via an ast tree structure) to bytecode.
- Genetic Algorithms which operate on the tree combining two trees by swapping branches and mutating.
- A simple assembler compiles tree into bytecode. Then a simulation which executes the bytecode of the various entities in a shared virtual world.
- Evaluation Loop and Fitness determination to see who exists for next generation. Some further work is needed on the idea of fitness. If we are going to reproduce based on survivng then the world needs to be a little more dangerous.

### tree

the tree phase of compilation generates something like the following

![](https://github.com/seanbutler/Glynth/blob/master/Media/Screenshot_4.png?raw=true)

these trees can be combined and mutated so they can grow and evolve.


###  code

the code you can write yourself to build an intial entity looks like this.

![](https://github.com/seanbutler/Glynth/blob/master/Media/Screenshot_3.png?raw=true)

its somewhat c-like with some special restrictions to support the genetic programming. for example all functions take 1 parameter and return 1 parameter. this requires some flexability on the part of someone who builds an eve agent, but not insurmountable.

### links

- [https://github.com/seanbutler/Glynth](https://github.com/seanbutler/Glynth)