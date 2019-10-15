---
layout: post
title:  "Simple Maze Generation"
date:   2019-10-15 12:00:00 -0600
---

![](/images/maze.png)

At the core of procedural level generation is often a maze generation algorithm. Often a semi-randomised path designed to fill the availab space.

In this case we do a randomised depth first search and when/if we reach a dead end, backtrack a bit and try again. This way our path branches when necessary and fills the entire space.

- [maze generator here](https://seanbutler.github.io/SimpleMazeGen/)
- [source code](https://github.com/seanbutler/SimpleMazeGen)


Some sliders let you adjust size and so on, the sourcecode is there if you want to know how it works.
