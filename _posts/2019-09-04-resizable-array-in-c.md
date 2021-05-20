---
layout: post
title:  "Resizable Array in C"
date:   2020-01-12 12:00:00 -0600
keywords:   simple efficient c vector undergrads
---

Working on a compiler and virtual machine to get my hand back in language game. Compilers need list internally, list of symbols, instructions, memory etc. At the start of compilation we dont know how large they should be so its likely they will grow over the lifetime of the compilation. partly for portability and simplicity trying vanilla c only, also because this created an intimate understanding with the systems necessary. however, c has fixed length arrays, but no resizabe arrays or vectors.

the complete source code with an example use case can be found here... [https://github.com/seanbutler/Vector](https://github.com/seanbutler/Vector)

this is the simplest useful implementation of a resizable array in c i could come up with that is still reasonably efficient in the general case. if you add more items than it can currently handle then it resizes to double its current size. if you remove enough items so its half the size, then it resizes to half its current size.

## usage

 1. can vector_new() to create one, pass in an initial size.
 1. call vector_push() and vector_pop() to your hearts content.
 1. to do work on things use vector_do() with a callback pointer to a function taking a pointer as its argument
 1. when you are done cleanup all your left over items (todo, automate this)
 1. finally call vector_free()

implements the smallest possible interface

~~~ c
Vector * vector_new(unsigned int size);
void vector_push(Vector* vec, void *item);
void* vector_pop(Vector* vec);
void vector_do(Vector *vec, void (*callback)());
void vector_free(Vector* vec);
~~~


## internals

just a simple struct with top, size and pointer to a void pointer 

~~~ c
typedef struct
{
    int size;
    int top;
    void **data;
} Vector;
~~~

it calls vector_shrink() and vector_grow() internally whenever you reach the top or shrink to half way
 
~~~ c
void vector_shrink(Vector *vec);
void vector_grow(Vector *vec);
~~~

both these two call malloc again and memcpy, but lack necessary error checking for a fully robust library

## todo
 
 - vector_free should loop through and pop all its element too
 - maybe we separate new into new and init so we can reuse vectors more easily?
 - catch the errors if malloc fails
 - catch the errors if memcpy fails
 - what happens if you pop beyond the floor?
 
 
 