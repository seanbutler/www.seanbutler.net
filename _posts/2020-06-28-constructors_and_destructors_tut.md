---
layout: post
title:  "constructors and destructors in c++ part 1"
date:   2020-06-28 09:00:00 -0100
keywords: constructors and destructors in c++
---


<em>td;dr: quick example of constructors and destructors. the output shows the order in which they execute when objects are creatd in different contexts. link to code at bottom.</em>


## introduction

this is the first part of a tutorial which investigates three effects which come from the implementation of objects and classes in c++.

 1 the order which the constructors and destructors called in c++
 2 when are objects destroyed changes depending on where they are created
 3 creation and destruction of heap objects


```cpp

    class Core {
    public:
        Core()          {std::cout << "Core constructor" << std::endl;}
        virtual ~Core() {std::cout << "Core destructor" << std::endl;};
    };

    class Base : public Core {
    public:
        Base(): Core() { std::cout << "Base constructor" << std::endl; }
        virtual ~Base() { std::cout << "Base destructor" << std::endl; }
    };


    class Other : public Core {
    public:
        Other(): Core() { std::cout << "Other constructor" << std::endl; }
        virtual ~Other() { std::cout << "Other destructor" << std::endl; }
    };

    class Derived : public Base, public Other{
    public:
        Derived(std::string L ) : label(L) { std::cout << "Derived constructor " << label << std::endl; }
        virtual ~Derived() { std::cout << "Derived destructor " << label << std::endl; }

        std::string label;

    };


```

In the above example we have created a very small inheritanec hierarchy. Its also a lattice because there is a dual ineritance diamond. Take a look at this main function, which instantiates Derived.

```cpp

int main(int argc, const char * argv[])
{
    std::cout << "--- main is called" << std::endl;

    Derived d2("main stack");

    std::cout << "--- main returns" << std::endl;
}

```

Here is the output from the above code?


```

--- main is called
Core constructor
Base constructor
Core constructor
Other constructor
Derived constructor main stack
--- main returns
Derived destructor main stack
Other destructor
Core destructor
Base destructor
Core destructor

```

Here we make one instance of Derived within the main function and the output from running this code is below. Notice the flow enters main, then the constructors of the classes are called, starting with the Core and working towards the Derived. _Its super important to notice that Core is constructed twice!_

Then main returns _after which the destructors of the classes are called_. However the destructors execute in the reverse order. Again _Core is destructed twice!_


![/images/cpp_cons_dest_1.png](/images/cpp_cons_dest_1.png)


If you classes have no side effets then this may not be super important, but if they make any changes outside themselves those side effects are going to be duplicated. What would happen if the constructor of Core incremented a counter variable? Perhaps a counter of the number of entities in your game?


## Conclusion

Advice to new programmers is to avoid this kind of inheritance, and I'd generally agree. Though not to the extent that it is excluded from the language all together like java. Who knows what might happen in the future and how it might be useful to your situation.

I hope to put up a couple more tuts on issues related to constructors and destructors in cpp in the near future.

The full code for this tutorial is available here [https://github.com/seanbutler/destructors_tut](https://github.com/seanbutler/destructors_tut)


Good Luck.
Any questions, message me. Am happy to help.