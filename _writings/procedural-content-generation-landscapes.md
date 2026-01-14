---
layout: writing
title: Procedural Content Generation for Video Game Landscapes
projects:
  - supervision
---


> First please make sure you have read the [supervision notes](https://www.seanbutler.net/projects/supervision/) on expectations of learning at different levels 


### Perlin Noise

Perlin noise is the goto approach for undergrads (and more generally) when developers want to build a nice large landscape algorithmically. Its predicatable, well understood and has been extensivly written about. 

- https://en.wikipedia.org/wiki/Perlin_noise

Its due to this popularity that I really reccommend that you **dont use this as the central technology of your dissertation**. Complete tutorials exist online showing you how to build realistic-ish landscapes with very little effort in modern game engines. Indeed [Unity has a built in command](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Mathf.PerlinNoise.html) to generate it.

So, to demonstrate sufficient learning at dissertation level you need to move your work far beyond this. Perhaps noise like this exists within your submission, its a great tool for naturalistic seeming textures, shapes and movement, but implementing it shouldnt be the main focus of your work (unless you have something really special in mind). 



### Model Synthesis (also Wave Function Collapse)

Model Synthesis more popularly known as Wave Function Collapse is is a popular approach to generating large scale self similar landscapes from minimal data. Indeed there are so many materials on it online that the challenge for a Masters Student is to find a way to demonstrate the apropriate level of learning. If you are considering a dissertation making use of this at MSc level then you should degfinately either have it as a minor tool in a greater system or otherwise consider a way to innovate or extend in this area.  


#### Original Work

- https://paulmerrell.org/research/
- https://paulmerrell.org/wp-content/uploads/2021/06/model_synthesis.pdf
- https://paulmerrell.org/wp-content/uploads/2021/06/thesis.pdf

#### Easier to Grok

- https://en.wikipedia.org/wiki/Model_synthesis
- https://github.com/mxgmn/WaveFunctionCollapse


#### Successive Innovations and Applications

- **Using Wave Function Collapse and Other Algorithms** 
  - https://arxiv.org/abs/2308.07307
  - https://www.iccs-meeting.org/archive/iccs2025/papers/159090105.pdf
  - https://ouci.dntb.gov.ua/en/works/4zob5GKl/
- **For Navigation Rather than Generation**
  - https://www.jsr.org/index.php/path/article/view/1626
- **WFC Over Graphs rather than Grids**
  - https://www.jstage.jst.go.jp/article/transinf/E103.D/8/E103.D_2019EDP7295/_pdf
  - https://ieeexplore.ieee.org/document/8848019


### Generative Adversarial Neural Networks

Basically Deep Convoluted Generative Adversarial Networks can generate landscapes to match a sample set.

- https://github.com/liquidnode/neural_terrain_2
- https://cvanbattum.com/projects/heightmap-gen
- https://hal.science/hal-04266751/document
- https://eprints.whiterose.ac.uk/id/eprint/153088/1/Real_world_Textured_terrain_generation_using_GANs_1_.pdf
- https://arxiv.org/pdf/2403.08782v1



### Conferences on PGC

https://pcgworkshop.com/database.php




