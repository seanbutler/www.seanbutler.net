---
layout: post
title: "VO: Expression-Oriented Design"
date: 2026-05-04
categories: programming languages compilers
tags: programming-languages interpreters minimalism vo
---

*Part two of a series on [VO](https://github.com/seanbutler/vo), a symbol-based language for global programming.*

Most languages divide their syntax into two camps: statements that do things, and expressions that produce values. VO collapses that distinction. Every construct produces a value. There are no statements, only expressions.

## Everything Returns a Value

Blocks return their last expression automatically. There is no `return` keyword — another English word eliminated, and a source of confusion for learners ("why does this function need the word 'return' at the end?"):

```
double = (n : int) {
    n * 2
}
```

The block `{ n * 2 }` evaluates to `n * 2`, and that value becomes the result of the function call. Clean, consistent, and free of ceremony.

## Conditionals Are Expressions

In VO the conditional is `? condition { then } { else }`. The else branch is optional. The whole thing is an expression and evaluates to the value of whichever branch was taken, or `nil` if no branch ran:

```
? val > 0 
{ 
    "positive" 
} 
{ 
    "non-positive" 
}
```

You can use this directly — assign it, pass it to a function, or let it be the last expression in a block:

```
label = ? score > 50 { "pass" } { "fail" }
```

Compare this to a language where `if` is a statement: you need a temporary variable, a separate assignment inside each branch, and a `return` at the end. VO replaces all of that with one expression.

## Declarations Are Expressions

VO distinguishes mutable from immutable bindings explicitly, and all of them are expressions:

```
name = expr            // immutable, untyped
name : type = expr     // immutable, typed
name : type := expr    // mutable, typed
expr := expr           // reassignment
```

The `:=` operator for mutable assignment comes from Pascal and Ada, rooted in Algol — a language designed by an international committee to avoid English-language bias. Type annotations use `name : type`, familiar from mathematics and formal logic.

## Why It Matters

The expression-oriented model reduces the number of concepts a learner needs. There is no distinction between "things that produce values" and "things that don't". There is no special `return` syntax to memorise. Conditionals, blocks, and declarations all follow the same rule: evaluate, produce a value, move on.

A student anywhere in the world can grasp "everything is an expression" quickly. It's a single rule that covers most of the language.
