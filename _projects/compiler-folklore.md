---
layout: project
title: Investigating Compiler Folklore
slug: lang
tags: investigate compiler language orthodoxy folklore
---


<em>This year I’m building a series of small languages and editors to test which parts of compiler and VPL folklore are actually necessary — and which are just inherited folklore.</em>

### Motivations

Modern language tooling carries a large amount of received wisdom:
- ASTs are mandatory.
- Bytecode is faster.
- Multiple IRs are inevitable.
- Visual languages don’t scale.
- Abstraction requires call stacks.

While certainly much of this wisdom is useful in the majority of cases, everyones experience is unique, we all have different use cases, YMMV etc. So its not all been examined thoroughly. 

### Intent

Over roughly a year, I plan to design and implement a sequence of small, constrained programming languages and visual systems. Each one is built to test a specific claim about compilers, interpreters, execution models, or visual programming.

They are not product launches. They are not attempts to “win” language design. They are experiments. Each artefact will be:

- runnable
- minimal
- publicly available

and accompanied by measurements or clear observations (including failures)
