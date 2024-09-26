---
  layout:   post
  title :   a better way to integrate lua into your project with cmake 
  date  :   2024-08-26  
  tags  :   lua cmake cpp skeleton repo
---


[Some learning materials](https://github.com/PacktPublishing/Integrate-Lua-with-CPP) reccommend integrating [lua](https://www.lua.org/) into your project by manually download the code and unzip it into a subdir. Then use normal source code access and linking to combine its functions with your project.



## error prone

As project build and config tools have matured this way now feels wrong to me. 

This is an unreliable way to obtain source. Unreliable because of human error. Also not great at making sure the latest version of a library is pulled which is especially useful if bugs are found. 

Tutorials likely take this approach for a number of reasons, 
- perhaps being targeted on a topic and not being sidetracked with off topic info
- providing a clear place for learners to inspect the code

Though neither of these reasons is particularly compelling as the CMake code needed to automate the process is easy to understand and the source is still available in the build dir.


## automating with tools

[CMake](https://cmake.org/) is a very (the most?) widely used configuration and build tool. There are versions on all major operating systems and its integrated with many quality IDEs. Visual Studio, Code, CLion, etc

One of the great things about CMake is that it can be used to pull code from repos into a directory where your project is built without polluting your codebase with external code.

It has lots of commands to achive this with many build in scripts to find, pull and configure specific external code bases with your own.

## cmake details

many projects are distributed as gir or github repos and cmake has many well known commands to integrate these, including Fetch and Sub Repo.

The true source of lua is from the tar.gz file [on their download page](https://www.lua.org/download.html). Because its not a repo, in this case the ExternalProject family of commands is useful.

### ExternalProject_Add

This command "creates a custom target to drive download, update/patch, configure, build, install and test steps of an external project" [from the docs](https://cmake.org/cmake/help/latest/module/ExternalProject.html) 

In effect it allows you to pull and build an external project distributed in a variety of ways including git and cvs and usefully to us even a tar.gz archives.


### ExternalProject_Get_Property

Here we can setup a variable to hold the specific archive we want to acccess.  Remember to include the ExternalProject functions. Then call ExternalProject_Add(). The example below will pull the archive, extract it and call make. ExternalProject_Add is sufficiently clever to know where the extracted code is and so calls make in the correct place.

~~~
set(LUA_VERSION "lua-5.3.5")

include(ExternalProject)

ExternalProject_Add(lua_project
  PREFIX ${CMAKE_BINARY_DIR}/${LUA_VERSION}
  URL https://www.lua.org/ftp/${LUA_VERSION}.tar.gz
  CONFIGURE_COMMAND ""
  BUILD_COMMAND make generic
  INSTALL_COMMAND ""
  BUILD_IN_SOURCE true
  DOWNLOAD_EXTRACT_TIMESTAMP false
)
~~~

ExternalProject_Add works in directories within your build dir and you can access its work afterwards via exposed properties which you can get with ExternalProject_Get_Property().

Then it takes a few variables to cleanly make lib generated from the  project available to your code.

~~~
# Specify where to find Lua includes and libraries after building

ExternalProject_Get_Property(lua_project BINARY_DIR)
set(LUA_INCLUDE_DIR ${BINARY_DIR}/src)
set(LUA_LIBRARIES ${BINARY_DIR}/src/liblua.a)
~~~

Then you include and link in the traditional way.

~~~
# Add your C++ executable
add_executable(${TARGET}  ./src/main.cpp)

# Link your executable to the Lua library
add_dependencies(${TARGET} lua_project) # Ensure Lua is built before your project
target_include_directories(${TARGET} PRIVATE ${LUA_INCLUDE_DIR})
target_link_libraries(${TARGET} PRIVATE ${LUA_LIBRARIES})
~~~

You can access the complete cmake code and mini example project at [this github repo](https://github.com/seanbutler/lua-embed-in-cpp-with-cmake). 

Then from a build sub dir thus...

~~~
cd build
cmake ../
make
~~~

it will download, build locally and link lua into a trivial c++ executable, all while maintaing a specific version, being trivially updatable and keeping your local code base clean and uncluttered!
