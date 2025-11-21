---
layout: post
title:  "neural network in c++"
date: 2025-10-23
tags: neural-network ANN NN c++ ML
---


### Learning, Programming and Explanation

There are lots of sources for the maxim, that if you cant explain something in simple terms then you dont understand it [via Kottke](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it).


What better way to show that you understand a complex topic like Neural Networks than explaining it to a machine? Its common to learn about Artificial Neural Networks using Python there are lots of reasons why this is a good approach. One being because of the support this language provides which is derived in part through years of focus from AI researchers. There is a downside to this support though. Its possible to leap forward in achievement with so much support that the journey doesnt impart as much understanding.

### A C++ Neural Network

The [linked](https://github.com/seanbutler/NeuralNetwork_In_Cpp) repo contains a from scratch implementaiton of a ANN Classifier for the MNIST data set. It could easily be applied to other datasets if you wish. 

#### Features  
- CMake build scripts
- Bash and Powershell wrapper scripts for Linux annd Windows
- automatic downloading of MNIST data via python scripts 

- json parsing of config data

~~~ json
{
  "network": {
    "layers": [784, 64, 32, 10],
    "learning_rate": 0.001,
    "activation": "relu"
  },
  "training": {
    "epochs": 2,
    "shuffle": true
  }
}

~~~

#### giving you easy configuration of 

- **layers:** Network architecture (input → hidden → output)
- **learning_rate:** How fast the network learns (0.001 - 0.01 typical)
- **epochs:** Number of training iterations
- **activation:** Activation function ("sigmoid" or "relu")



#### take a look here

https://github.com/seanbutler/NeuralNetwork_In_Cpp







## 
