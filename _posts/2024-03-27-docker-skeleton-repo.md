---
  layout:   post
  title :   docker skeleton repo
  date  :   2024-03-27  
  tags  :   docker cmake cpp repo skeleton
---

I dont know about you, but ive often found that starting with new tech can be problematic. Not because the tech itself is too complicated but configuring your machine to kick off the project is a poorly documented part of the process. Generally repos are getting better at it and there are some good examples. But its not the reponsability of the team developing a virtual machine or graphics library to explain how to set it up with your particular build system.

So  when im starting out using a said tech the first thing I am often looking for is a skeleton github repo with a minimal conficguration that lets me get started without wrangling some weird build syste.

I hope this is useful to you if you are starting out with a github CMake docker project. Its is a absolute minimal skeleton repo for a [docker project](https://github.com/seanbutler/minimal_docker_cmake_cpp) providing the absolute bare minimum to get docker working with the a very popular most popular build configuration system cmake and and c++.


This follows an [earlier post]({% post_url 2024-03-22-v8-sfml-skeleton-repo %}) I made for getting started working with v8 and c++ by integrating with sfml. 