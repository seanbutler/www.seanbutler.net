---
layout: post
title: "VO: Decolonising Programming"
date: 2026-05-03
categories: programming languages compilers
tags: programming-languages interpreters prototype-based minimalism internationalization vo decolonialism
---

*On [VO](https://github.com/seanbutler/vo), a dynamic programming language with an interesting set of features.*

Could programming languages be more inclusive? Should they? I think its become clear to most rational thinkers that its inapropriate to platform one group and not another or to disadvantage one group and not others.

Most programming languages embed English deeply into their syntax and in doing so they advantage English speaking learners. For everyone else it adds an extra burden: they must memorise foreign vocabulary before they can even express a computational idea. Those English words also carry concept baggage that can further confuse learners.


### hello world

At its core vo isnt radically different to current programming languages, and because its easy to bind with external c libraries, familiar functions can be called.  

```
@ "./lib/stdio.vo"                   // Bring in the standard io library

Main = () {                          // Define a function
    printf_s("%s", "Hello World\n")  // Print a string
}

Main()                               // Call the Function
```

even shorter

```
@ "./lib/stdio.vo"               // Bring in the standard io library

printf_s("%s", "Hello World\n")  // Print a string
```

However, in [VO](https://github.com/seanbutler/vo) the non english speaking learner isnt disadvantaged because wherever possible [VO](https://github.com/seanbutler/vo):

1. Uses symbols as the core language constructs
2. Provides features within the language for any group of users to customise it to their liking

The name comes from "lingvo" — Esperanto for language — and it takes an internationalist approach by replacing keywords with symbols.

## Symbols as Universal Syntax

VO uses symbols that programmers already know from mathematics or that appear across many languages: `{ }` for scope, `?` for conditionals, `~` for loop, `\` for break, `!` for logical NOT, `>>` for iteration, `@` for imports, and `$$` for FFI.

A developer in Beijing writes the same `? x > 0 { ... }` as a developer in Paris or Cairo. There's no English vocabulary to memorise before writing your first program. The symbols carry meaning through their mathematical heritage, not through any particular natural language.

VO doesn't forbid natural language — it just removes it from the core syntax.

## Vocabulary Libraries in Any Language

Instead, VO lets developers build vocabulary libraries using its core data structure, the hash. These libraries are simple hashes of callables (nothing is baked in) which allow people to map even the core functionality of the language onto new symbols. 

Here's a Spanish vocabulary library and a French one:

```
// español.vo
español = {
    si = (condición, entonces, sino) { ? condición { entonces() } { sino() } }
    mientras = (condición, cuerpo) { ~ { ? condición() { cuerpo() } { \ } } }
}
```

```
// français.vo
français = {
    si = (condition, alors, sinon) { ? condition { alors() } { sinon() } }
    tantque = (condition, corps) { ~ { ? condition() { corps() } { \ } } }
}
```

Spanish speakers can use `si` and `mientras`. French speakers can use `si` and `tantque`. English speakers write their own English library. None are privileged, they're all the same mechanism.

This is different from simply translating keywords. The core syntax never changes: `?`, `~`, `\`, `{ }`. What changes is the vocabulary layer built on top, and that layer belongs to the community using it.

That's the core promise of VO: a level playing field, where the language speaks (mathematical?) symbols first, and any human language thereafter.

## UTF-8

Because the VO parser accepts utf-8, there is a more. Each of these communities can assign local symbols as well as or instead of local words for our language.

```
// español.vo
español = {
    ¿   = (condición, entonces, sino) { ? condición { entonces() } { sino() } }
    ∞   = (condición, cuerpo) { ~ { ? condición() { cuerpo() } { \ } } }
}
```

```
// 𓀀.vo
 𓀁 = {
    𓀂   = (F) { ? C { T() } { F() } }
    𓁨   = (C, W) { ~ { ? C() { W() } { \ } } }
}
```

## A Level Playing Field

The prevalence of English in programming is historical accident, not technical necessity. VO shows that symbol-based core syntax is feasible - you can have conditionals without `if`, loops without `while`, and scope without `begin`/`end`. The core language stays the same everywhere. The vocabulary layer belongs to whoever is using it.

English speakers aren't asked to give anything up. Other language speakers are brough up to the same starting line.

*The next post in this series covers VO's expression-oriented design — every construct produces a value, and there is no `return` keyword.*
