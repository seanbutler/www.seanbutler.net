---
layout: writing
title: Procedural Content Generation for Video Game Landscapes
projects:
  - supervision
---


### Perlin Noise

Perlin noise is the goto approach for undergrads (and more generally) when developers want to build a nice large landscape algorithmically.

Its predicatable, well understood and has been extensivly  written about. 

![noise sample](/images/perlin.png)

https://en.wikipedia.org/wiki/Perlin_noise

Its due to this popularity that I really reccommend that you **dont use this as the central technology of your dissertation**. Complete tutorials exist online showing you how to build realistic-ish landscapes with very little effort in modern game engines. Indeed [Unity has a built in command](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Mathf.PerlinNoise.html) to generate it.


~~~

for (float y = 0.0F; y < noiseTex.height; y++)
{
    for (float x = 0.0F; x < noiseTex.width; x++)
    {
        float xCoord = xOrg + x / noiseTex.width * scale;
        float yCoord = yOrg + y / noiseTex.height * scale;
        float sample = Mathf.PerlinNoise(xCoord, yCoord);
        pix[(int)y * noiseTex.width + (int)x] = new Color(sample, sample, sample);
    }
}

~~~

So, to demonstrate sufficient learning at dissertation level you need to move your work far beyond this. Perhaps noise like this exists within your submission, its a great tool for naturalistic seeming textures, shapes and movement, but implementing it shouldnt be the main focus of your work (unless you have something really special in mind). 


### Model Synthesis (also Wave Function Collapse)

Model Synthesis more popularly known as Wave Function Collapse is rapidly going the way of Perlin noise in that there are so many materials on it online that the challenge is finding a way to demonstrate the apropriate level of learning.

![](/images/Screenshot%20of%20Model%20Synthesis%20-%20Paul%20Merrell.png)

- https://paulmerrell.org/research/
- https://paulmerrell.org/wp-content/uploads/2021/06/model_synthesis.pdf
- https://paulmerrell.org/wp-content/uploads/2021/06/thesis.pdf
- https://en.wikipedia.org/wiki/Model_synthesis
- https://github.com/mxgmn/WaveFunctionCollapse

Though I wonder if it can be done over 4d to include animated scenes?


### Generative Adversarial Neural Networks

Basically Deep Convoluted Generative Adversarial Networks can generate landscapes to match a sample set.

- https://github.com/liquidnode/neural_terrain_2
- https://cvanbattum.com/projects/heightmap-gen
- https://hal.science/hal-04266751/document
- https://eprints.whiterose.ac.uk/id/eprint/153088/1/Real_world_Textured_terrain_generation_using_GANs_1_.pdf
- https://arxiv.org/pdf/2403.08782v1




