---
layout: post
title:  "multi language entity component system benchmark experiment"
date: 2021-09-20
tags: cpp rust ecs
---

Experimental Comparison of C++ Rust and Go and their most populat entity component systems.

![Histogram Results](/images/Final-Results-Avg.png)

Existing benchmarks of entity component sytems appear to use rather static loads (though with lots of components). For this experiment we wanted to examine:

 1 the differences between the three most popular c-like languages made 
 2 more dynamic loads with the creation and removal of components along with some additional operations


We forked and customised an existing benchmark system for gathering test results from code made in a range of programming languages that then compiling them into visualised graphs. The majority of the actual coding was done by my student [Cirtoyt](https://github.com/Cirtoyt) a graduate of UWE Games Tech. Thanks Conrad! 

# Results

- Overall c++ and rust were 2-100 faster than go, except Go/ByteArena had a faster startup time, 
- C++ was faster than Rust at spawning entities.
- Rust was faster than c++ on loads where Add and Remove components after some time.


[This repo](https://github.com/UWE-ECS-2021/) contains all the code and data and configuration files 
