---
layout: post
title: "VO: FFI as a First-Class Feature"
date: 2026-05-06
categories: programming languages compilers
tags: programming-languages interpreters ffi minimalism vo
---

*Part four of a series on [VO](https://github.com/seanbutler/vo), a symbol-based language for global programming.*

Most languages treat their foreign function interface as an afterthought — a mechanism buried in compiler pragmas, linker flags, or special-purpose keywords. In C you write `extern`. In Rust you write `extern "C" { ... }`. In Python you drop into ctypes or write a C extension. These interfaces are workable, but they involve ceremony: English keywords, special syntax, and tooling that sits outside the language proper.

VO takes a different approach. The FFI is a first-class expression using the same data structure that powers everything else in the language — the hash.

## The `$$` Operator

The `$$` operator binds and calls a foreign function. It takes a hash that describes the call:

```
printf_s = $$ {
    lib    = "libc.so.6"
    abi    = "cdecl"
    symbol = "printf"
    params = { fmt : string  val : string }
    return = int
}
```

The hash describes everything needed to make the call: which shared library, which calling convention, the symbol name, the parameter types, and the return type. There are no compiler directives. No special import syntax. No English keywords like `extern` or `foreign`. Just a hash, assigned to a name.

## The Descriptor is a Value

Because the binding spec is a hash, it is a first-class value in VO. You can assign it to a variable, pass it to a function, store it in another hash, or build it dynamically at runtime. The FFI descriptor is not magic — it obeys the same rules as every other hash in the language.

This means FFI bindings can be generated, composed, and inspected like any other data. A library author can produce a hash of FFI descriptors and export them as a module. A user can inspect that hash, find the binding they need, and call it — without knowing in advance what symbols are available.

## Practical from Day One

VO is implemented in C++ as a tree-walking interpreter with CMake for building. Because the FFI lets you reach into any C shared library directly, VO has access to the full ecosystem of C libraries immediately — without writing wrapper code in a separate language or waiting for native bindings to be built.

The standard library itself is built this way. `stdio.vo` is a VO file that uses `$$` descriptors to bind to the C standard I/O functions. The mechanism that powers the standard library is the same mechanism available to any VO programmer.

## Why It Matters

FFI is often the point at which a language's minimalist principles break down. The special syntax, the English keywords, the toolchain complexity — these add friction precisely where a new programmer is likely to need help most: reaching the real world.

VO avoids that friction by making the FFI a hash. A programmer anywhere in the world can read `$$ { lib = ... symbol = ... }` and understand that it is describing a call to a foreign function. There is no English keyword to decode, no pragma to remember, no separate documentation for a separate tool.

The same concept — a hash — that describes a data structure, a module, a class, and an object also describes a foreign function binding. One idea, one syntax, applied consistently.
