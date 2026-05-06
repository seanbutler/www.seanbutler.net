---
layout: post
title: "VO: The Hash as Universal Building Block"
date: 2026-05-05
categories: programming languages compilers
tags: programming-languages interpreters prototype-based minimalism vo
---

*Part three of a series on [VO](https://github.com/seanbutler/vo), a symbol-based language for global programming.*

Most languages give you many distinct containers: structs, classes, modules, namespaces, arrays, dictionaries. Each has its own syntax, its own rules, its own mental model. VO takes a different path — everything is a hash.

## A Block is a Hash

The simplest hash is an empty pair of braces:

```
{ }
```

This is a valid expression. It creates a hash with no members. You can assign it, pass it, and use it anywhere a value is expected. As a standalone scope block it runs and returns `nil`.

## A Struct is a Hash

Add named slots and you have a data structure:

```
point = {
    x : int = 0
    y : int = 0
}
```

`point` is a hash with two typed slots. Access them with the dot operator: `point.x`, `point.y`. There is no separate `struct` keyword — it's just a hash with named fields.

## A Function is a Hash Slot

Assign a callable to a slot and you have a method:

```
counter = {
    value : int = 0
    increment = () { self.value := self.value + 1 }
    get       = () { self.value }
}
```

`self` inside a callable refers to the hash it belongs to. `counter.increment()` modifies `counter.value`. `counter.get()` returns it. No class syntax required.

## A Class is a Hash with a Constructor

Add a `()` slot and the hash becomes a constructor. Calling the hash clones it and invokes `()` on the clone — `self` inside the constructor refers to the new instance:

```
Animal = {
    sound : string = "..."
    speak  = () { self.sound }
    ()     = (s : string) { self.sound := s }
}

a = Animal("Grunt")
a.speak()               // "Grunt"
Animal.sound            // "..." — the template is unchanged
```

Calling `Animal("Grunt")` does not modify `Animal`. It creates a fresh copy and runs the constructor on it. The template stays intact for the next call.

## Inheritance is a Hash Chain

The `_` slot provides prototype delegation. When a member lookup fails on a hash, VO follows the `_` chain to the parent:

```
Dog = subtype(Animal, { sound : string = "Woof" })

d = Dog("Rex")
d.speak()               // "Rex" — speak() found on Animal via _
Dog.sound               // "Woof" — the Dog template
```

`subtype` is a stdlib helper written in VO itself — it wires up the `_` chain and sets up constructor delegation. Multi-level chains work the same way:

```
Poodle = subtype(Dog, { size : string = "small" })

pp = Poodle("Fifi")
pp.speak()              // "Fifi" — inherited from Animal through Dog
pp.size                 // "small" — own slot
```

## Namespaces and Modules are Hashes

An imported file returns a hash. Libraries are just hashes. Namespace organisation is just nesting hashes inside hashes:

```
@ "./español.vo"        // loads the español hash into scope
español.mientras(...)   // call a member of that hash
```

There is no module system separate from the data model. A module is a hash. A namespace is a hash. The same concept scales from a single field up to an entire library.

## One Concept, Many Uses

The power of this design is in what it removes. A learner does not need to understand classes, then structs, then modules, then namespaces as separate ideas with separate syntax. They learn hash once — then discover that objects, constructors, inheritance, and modules are all just hashes used in different ways.

Like Lua's tables, but taken further: in VO, the hash is not one of several containers. It is the only container.
