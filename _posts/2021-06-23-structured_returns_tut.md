---
layout: post
title:  "structured bindings in c++"
date:   2021-06-23 09:00:00 -0100
keywords: a minor part of modern c++
---


<em>td;dr: quick example of structured bindings and how you can use it with auto to return and fill complex variables from functions. link to code at bottom.</em>


## introduction

modern (js/python if you call them modern) dynamic languages give the programmer the ability to return multiple values from a function with straightforward syntax. c++ has been maturing a lot in recent years and has syntax to do the same. given a function which fills and returns a tuple.

```cpp

std::tuple<double, double, double, std::string> init_entity(std::string name) {
    return std::make_tuple(0.0, 0.0, 0.0, name);
}

```

you may already know that with the 'auto' keyword we can let the compiler determine the type of a return value, presumably by looking at the signature of the function. its super useful and should be used where possible to reduce cognitive load and allow the compiler to optimise things you might not have considered.

well the auto keyword can be used to determine the type of a group of variables inside a tuple when used with '[' square brackets ']'. 

```cpp

    auto [x, y, z, name] = init_entity("avatar");
    std::cout << name << " at (" << x << ", " << y << ", " << z << ")" <<std::endl;

```

the innovation here is the 'structured binding' the square brackets after auto specify some auto variables which the compiler unpacks the tuple.

to make this work you must have the apropriate flags set in your compiler, via cmake you would do the following:

```cmake

    set(CMAKE_CXX_STANDARD 20)
    set(CMAKE_CXX_STANDARD_REQUIRED ON)

```

## Conclusion

Specific types like the kind in class hierarchies may make code specific and brittle. When we use this kind of looser typing of base types in containers it can make our code more reusable. 

We have become so well trained into returning single values over the years that this may seem weird, but give it a go and see how your code adjusts. i bet it will become more generic.

The full code for this tutorial is available here [https://github.com/seanbutler/return_tuple_tut](https://github.com/seanbutler/return_tuple_tut)


Good Luck.
Any questions, message me. Am happy to help.