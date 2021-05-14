---
layout: post
title:  "Debugging Compiler Datastructures"
date:   2021-02-21 12:00:00 -0600
---


Students often come to me asking for help with their programming. Almost universally its not a question about how to subdivide the goal into smaller tasks, or about how to express their idea as code, mostly the questions are about debugging existing code.

Generally my advise starts from:

<i>"You have to make the system give you enough information about itself so you can diagnose it."</i>

Then work to something more specific for their situation.

Recently when working on a compiler I needed to debug the creation of the AST to understand easily exactly what the parser was generating. The compiler takes code as follows and goes through a series of staged before outputing an executable file.

![](/images/CODE1.png)

When debugging the code generation back end of a newly added rule to the grammar of the langauge it can be a challenge because the data goes through many stages before it reaches the part you are checking.

Parsers typically generate tree datastructures so there is some accessability advantage to be gained from a graphical visualisation of that tree rather than the standard textual output. These diagrams can make the error apparent at a glance.

![](/images/AST1.png)

GraphViz dot files are ascii text files with a simple syntax so they only take a few lines of code to generate. They require an entry for each node in your diagram and an entry for each link between nodes. The simplest way to go about this is to add a Diagram method to each node of your tree (or other datastructure), which outputs the text to a file as follows...

![](/images/DIAGCODE1.png)

When you call the diagram method wrap it in the following header and footer so the graphvis dot file can be parsed properly.

![](/images/DIAGCODE2.png)

 [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=joaompinto.vscode-graphviz) and other editors have plugins which can draw these diagrams, so if you save them out within the hierarchy of your project it becomes a simple double click to bring them up onscreen.

I've done similar more invoved code to visualise the relationships between parts of the Symbol Table and the AST and plan to do more for flowgraphs and perhaps some runtime too.