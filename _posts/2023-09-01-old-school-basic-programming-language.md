---
  layout: post
  title :   old school basic programming language
  date  :   2023-09-01
  tags  :   basic interpreter cpp
---


Just for fun some more hobby coding. An old fashioned basic interpreter written in c++. Wherever possible using stl datastructures instead of mimicing a low level machine to maintain the exection status. Scanner and Interpreter tokenise the basic code which is then directly executed.


Working from the definition of basic outlined in the wikipedia page on BASIC and BASIC interpreters.




~~~ basic
10 print "hello world"
20 goto 10
~~~

~~~ basic
50 print "please enter your age..."
100 let age = 0
110 input age
120 let age = age + 1
150 print "you are ..."
160 print age
170 print "years old"
180 print "(computers never make mistakes, lol)"
~~~

~~~ basic
5000 print "repeat until loop"
5010 let counter = 10
5020 repeat 
5030 let counter = counter - 1
5040 print counter
5050 until counter <= 0
~~~

[repo here](https://github.com/seanbutler/vanilla-basic)


