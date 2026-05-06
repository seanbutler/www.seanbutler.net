---
layout: post
title: "VO: Core Syntax"
date: 2026-05-04
categories: programming languages compilers
tags: programming-languages interpreters prototype-based minimalism internationalization vo decolonialism
---

Could we fit this on a postcard? Is that even a goal worth having?

## Core Syntax

**Literals:**
- 42, 3.14 - integer float 
- "hello\nworld" // string (\n \t \" \\ escapes)  

**Identifiers:**
- Any sequence of ASCII letters/digits/_ or UTF-8 bytes

**Declarations:**
- name = expr - immutable, untyped
- name : type = expr - immutable, typed
- name : type := expr - mutable, typed
- expr := expr - reassignment

**Hash literal:** 
- { key = val  key : type = val  () = callable } - () is the constructor slot; _ prefix marks a slot private

**Member Access:**
- expr.name - static
- expr.(expr) - dynamic (key computed at runtime)

**Operators:**
Its possible in a future version all these will be reordered from function calls via builtin infix/postfix AST manipulation operators.
- Arithmetic: + - * / % 
- Comparison: == != < <= > >=
- Unary: -expr, !expr (logical NOT)


**Conditional:**
- ? expr { then } { else } - else branch optional; returns the taken branch's last value, or nil

**Loop / Break:**
- ~{ body } - infinite loop block
- \ - break out of the nearest enclosing ~{ } (parse-time enforced)


**Callable:**
- \@ (p, p : type) { body } - produces a closure; last expression is the return value


**Call:**
- expr(args) - if callee is a hash, clones it and invokes its () slot; self is bound inside


## Hash Manipulation

**Prototype Delegation:**
- _ slot - member lookup falls through to the parent hash when a name isn't found directly

**Hash Member Iteration:**
- expr >> (k, v) { body } - iterate over hash members; skips _-prefixed and () slots


## Reaching Outside

**Import:**
- \# "path" - load and execute another .vo file once

**Foreign Function Interface:**
- \$$ hash_spec - bind and call a C function described by a hash descriptor

