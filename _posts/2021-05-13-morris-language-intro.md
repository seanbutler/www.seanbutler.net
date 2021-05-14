---
layout: post
title:  "Small Programming Language"
date:   2021-05-05 12:00:00 -0600
---

Morris is a minor Programming Language for games and other realtime or reactive systems. Everything runs in parallel on lots of little virtual machines. Also integrated is SFML for sprites and windows etc.

![](/images/anim6.gif)

Morris is still a work in progress, the complete [Morris Source Code](https://github.com/seanbutler/Morris) is available online, under a permissive license.


Once we specialise just a little then its arguable how extensive a feature set we really need. Also, as a side note program synthesis and generative programming is significantly helped by having a more limited but still general programming langauge.

Currently there are are only two types, **integers** and **threads**. In addition, there are no functions, no procedures, no classes etc. Instead we have threads which each run in their own little virtual machine. All data inside a thread is private. Communication between the threads is done via a kind of message passing. All messages are broadcast to all threads and disappear immediately, they carry no data except themselves so in a sense they are like semaphores.

While all this may sound restrictive it turns out to be focussing, because games are highly parallel systems with lots of interacting agents and as developers we want to quash bugs due to shared or stale data and avoid race conditions and other snafoos.



