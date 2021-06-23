---
layout: post
title:  "turtles all the way down"
date:   2021-06-16 09:00:00 -0100
keywords:  simple objects and classes in c99
---


<em>td;dr: learn how classes work by implementing them in c.</em>


## introduction

one way to see how a machine works is to build your own. we can 'look inside' classes by building our own simple classes in c99 using function pointers and structs.

this will provide some insights into why they are built and behave the way they do in c++.

## simple class like object

classes don't exist in c99 but structs do, we can use a struct to make a simple object with all public members.

this one has a single integer member/field n.  

```c99

struct  Object {
    int n;
};

```

If you are familiar with Abstract Datatypes then you will recognise the following pattern or somehing very like it. A struct containing some data is used as a common parameter to all the methods that operate on it. 

```c99

void Object_Print(struct Object *p)
{
    printf("%d", p->n);
}

int Object_Get(struct Object *p)
{
    return p->n;
}

```

However the difference between an object and a struct is that objects contain methods as well as members. 

fortunately c99 has function pointers and they are typed on their signatures. so lets make a struct which contains the methods. if we make the parameter of each method the type of our class, then they can do work on variables of that type! sound familiar?

```c99

struct Methods {
    void (*print)(struct Object *p);
    int (*get)(struct Object *p);
};

struct  Object {
    int n;
};

```

In object oriented langauges there is a strong association between the methods and the members. they are both enclosed within a single class which acts as a type. 

In c++ the methods of a class are stored in a vtable. So create a member of the struct called vtab or vtable or similar and make it have the type of the Methods struct.

```c99

struct  Object {
    struct  Methods *vtab;
    int n;
};

```

In c++ all the objects of a given class have same methods available to them, we achieve the same thing by creating a single variable of the struct to represent the vtable of a given type.


```c99

struct  VTable  objVTable = {
    &Object_Print,
    &Object_Get
};

```

c++ has a special method called a constructor which reserves the memory and constructs the object.

```c99

Object *NewObject(int n)
{
    struct  Object *p=NULL;
    p = (Object*)malloc(sizeof(struct Object));
    
    p->n = n;
    p->vtab = &objVTable;
    return p;
}

```

NewObject takes a parameter for n and returns a constructed object with n set and a vtable  holding the methods for the Object class.

So below you can see NewObject acts as a constructor and then we access the contents of vtable to call methods.

```c99

int main(int, char**) {

    Object * myc = NewObject(7);
    myc->vtab->print(myc);
}

```

## Conclusion

So now we have built a simple class for a constant which can be set by its constructor to a value with two methods to get it or print it.

This is just the first step of course, modern c++ compilers do much more than this. I gope you get some insights into how classes are implemented. Perhaps I'll do another post later with more advance features of object orientations and classes.

A few macros or other simple constructs and we can provide additional semantic sugar to hide some of the cruft. Also, naturally there are other similar ways to achieve OO like structures in non OO languages this is just one simple approach. If you know any more ways, I'd love to hear it.

Good Luck.
Any questions, message me. Am happy to help.