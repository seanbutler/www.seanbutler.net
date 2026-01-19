# The Year of Languages

## Mini-Projects & Compiler Folklore Under Test

This document outlines a year-long sequence of small but serious language and tooling experiments. Each mini-project is designed to test a specific piece of received wisdom (“folklore”) in compilers, interpreters, and visual programming languages (VPLs).

The goal is not to build products, but to construct **executable arguments**.

---

## I. Representation & Execution

### 1. Expression + Control Flow Without an AST

**Folklore tested:** You need an AST for non-trivial control flow.

**Scope:**

* if / then / else
* while / for
* procedures
* single-pass or minimal patch-up compilation
* direct execution (no retained AST)

**Output:**

* interpreter or threaded execution engine
* comparison against an AST-based baseline

---

### 2. AST Walking vs Bytecode: Measured, Not Assumed

**Folklore tested:** Bytecode execution is always faster than AST walking.

**Scope:**

* identical language semantics
* two execution backends (AST walk vs bytecode)
* gameplay-shaped workloads

**Output:**

* benchmarks focused on frame-time impact
* analysis of dispatch cost and host call dominance

---

### 3. The One-Pass Language (MOUSE / BASIC Lineage)

**Folklore tested:** Single-pass compilers are toys.

**Scope:**

* labels and gotos
* forward-reference patch-up
* procedures
* no global analysis

**Output:**

* complete usable language
* discussion of constraints and benefits

---

### 4. Threaded Code as a First-Class IR

**Folklore tested:** Bytecode is the natural intermediate representation.

**Scope:**

* direct vs indirect threaded code
* minimal instruction set
* no AST retention

**Output:**

* interpreter variants
* dispatch and cache-behaviour analysis

---

## II. Extensibility & Abstraction

### 5. An Extensible Core (Forth-Like Without Forth Syntax)

**Folklore tested:** Abstraction and low-level access are opposed.

**Scope:**

* very small core language
* user-defined control constructs
* extensible semantics or syntax

**Output:**

* demonstrations of growth without loss of control

---

### 6. Abstraction Without Syntax Growth

**Folklore tested:** Serious languages inevitably accrete syntax.

**Scope:**

* macros, combinators, or graph patterns
* fixed keyword set

**Output:**

* examples of expressiveness increasing without grammar expansion

---

## III. Paradigms Under Constraint

### 7. A Strictly Minimal Functional Language

**Folklore tested:** Functional languages require heavy machinery.

**Scope:**

* expressions
* recursion
* closures or closure alternatives
* no optimiser

**Output:**

* clear operational semantics
* baseline performance observations

---

### 8. Hybrid Functional / Imperative Language

**Folklore tested:** Multiple paradigms make languages incoherent.

**Scope:**

* explicit effects
* controlled mutation
* simple, explicit execution model

**Output:**

* examples where hybridisation improves clarity

---

## IV. Visual Programming Languages

### 9. AST to DRAKON-Style Visual Projection

**Folklore tested:** Textual ASTs are the canonical representation.

**Scope:**

* traditional control flow
* deterministic visual layout rules
* no manual graph editing

**Output:**

* automatic visualisation tool
* critique of readability and navigation

---

### 10. Graph Grammar–Driven VPL Editor

**Folklore tested:** Free-form graphs are necessary for expressiveness.

**Scope:**

* constrained graph edits
* grammar-driven UI actions
* executable semantics

**Output:**

* editor prototype
* usability observations

---

### 11. Control-Flow-First vs Data-Flow-First VPL

**Folklore tested:** Control flow and data flow must be separated.

**Scope:**

* two visual encodings
* shared execution engine

**Output:**

* comparative examples
* cognitive-load discussion

---

### 12. Abstraction in VPLs via Context & Swim Lanes

**Folklore tested:** VPLs do not scale due to lack of abstraction.

**Scope:**

* swim lanes as execution context
* named control transfers
* vertical execution model

**Output:**

* medium-scale example
* comparison to existing VPLs

---

## V. Exploratory / Stress Tests

### 13. Befunge as a Control-Flow Stress Test

**Folklore tested:** Exotic languages are irrelevant.

**Scope:**

* two-dimensional instruction pointer
* non-linear control flow

**Output:**

* insights applicable to visual layout semantics

---

### 14. The Smallest Serious Language

**Folklore tested:** Seriousness correlates with size and complexity.

**Scope:**

* minimal syntax
* non-trivial control flow
* real embedding use-case

**Output:**

* capstone language
* synthesis essay tying the year together

---

## Notes

* Each mini-project should state the folklore under test explicitly.
* Code and benchmarks serve as evidence; blog posts serve as analysis.
* The sequence can be reordered or trimmed to fit a 12-month schedule.

The project’s unifying principle: **challenge folklore by building the smallest thing that could possibly disprove it.**
