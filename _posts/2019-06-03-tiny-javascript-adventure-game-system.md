---
layout: post
title:  "tiny javascript adventure engine"
tags: teaching
---

to create [text adventure](https://fentlewoodlewix.itch.io/bantum) games, simply [edit some JSON](https://github.com/seanbutler/TinyJavascriptAdventureEngine/blob/master/SimpleAdventureGame/gamedata.js) which contains descriptions of places and some options for what the player might do or in what direction they might go. 

<!--more-->

a simple way might be to have states as descriptions of locations and the buttons as movement. though there is no reason to limit yourself to that.

![](/images/tiny-js-advent-eng-01.png)

technically its a finite state machine i believe, so you can pretty much have states for anything not just places and buttons for any kind of event not just movement. 

overall the javascript is about 40 lines of code. the intersting work is what you do in defining the states and events. 

because its js its trivial to embed in a webpage and you can use css to style it to set the mood.

feel free to use it, if you want extensions development, drop me an email. its super simple to build on.

###  links

https://github.com/seanbutler/TinyJavascriptAdventureEngine

https://fentlewoodlewix.itch.io/bantum


