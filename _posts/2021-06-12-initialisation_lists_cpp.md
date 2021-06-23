---
layout: post
title:  "std::intitializer_list in c++"
date:   2021-06-23 09:00:00 -0100
keywords: a minor part of modern c++
---


<em>td;dr: quick example of std::initializer_list and what you might use it for. link to code at bottom.</em>


## introduction

most programmers are familiar with the importance of constructors and how they can be used to initialise classes in c++. in traditional c code you can use curly braces to initialise arrays and structs. until c++11 you couldnt use curly braces can fill other containers, etc.

std::intitializer_list allows us to use the same syntax of old containers with new containers.


In this example Lispish is a class which contains two fields, head and rest. Not to exciting, but its like a list with a little structure built in.

```cpp

    Lispish mylist = {"This", "Is", "A", "Phrase"};

    std::cout << "head: " << mylist.head << std::endl;
    std::cout << "rest: ";

    for (std::vector<std::string>::iterator it = mylist.body.begin(); 
            it != mylist.body.end(); 
            ++it) 
    {
        std::cout << *it << "..." ;
    }    
    std::cout << std::endl;

```


Notice you can fill a Lispish as if you were filling an array, or vector, using the curly braces '{' notation '}'. To achieve this there is a little bit of templating amd magic done by the compiler.

We use the (new since c++11) std::initializer_list<T> type. Whenever the compiler finds a curly braces in the right context it uses this type to construct the parameters for the object.


```cpp

class Lispish {
    public:
    
        std::string head;
        std::vector<std::string> body;

        Lispish(std::initializer_list<std::string> list) {

            head = *(list.begin());

            for (std::initializer_list<std::string>::iterator it = list.begin()+1;
                    it != list.end(); ++it) 
            {
                body.push_back(*it);
            }
        }
};
    
```

This affords us some interesting possabilities. Like operating on the list before we assign it to the values, which in the above example gives us a lisp-ish head and rest for our phrase.

## Conclusion

I kind of feel this is more of a user-interface or programmer-interface change to c++ rather than an fully fledged improvement to the langauge as the same thing can already be done in other ways.

The full code for this tutorial is available here [https://github.com/seanbutler/stdinitializer_list_tut](https://github.com/seanbutler/stdinitializer_list_tut)


Good Luck.
Any questions, message me. Am happy to help.