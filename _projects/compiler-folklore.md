---
layout: project
title: Investigating Compiler Folklore
slug: lang
tags: investigate compiler language orthodoxy folklore
---


<em>I’m building a series of small languages and editors to test which parts of compiler and VPL folklore are actually necessary - and which are just inherited folklore.</em>

### Motivations

Modern language tooling carries a large amount of received wisdom:
- You need an AST for any serious language
- Must have semicolons at the end of each statement?
- Bytecode execution is always faster than AST walking
- Visual languages don’t scale
- Multiple Intermediate Representations (IRs) are inevitable
- Abstraction requires call stacks
- etc

While certainly much of this (and lots more) wisdom is useful in the majority of cases, everyones experience is unique, we all have different use cases, YMMV etc. So its not all been examined thoroughly. 

### Intent

To design and implement a sequence of small, constrained programming languages and visual systems. Each one is built to test a specific claim about compilers, interpreters, execution models, or visual programming.

They are not product launches. They are not attempts to “win” language design. They are experiments, which hopefully we can learn from by being:

- runnable
- minimal
- publicly available

and accompanied by measurements or clear observations (including failures)


