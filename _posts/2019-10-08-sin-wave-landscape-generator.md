---
layout: post
title:  "Sin Wave Landscape"
date:   2019-10-08 12:00:00 -0600
---

![](/images/sin-landscape.png)

Experimenting with layering sin waves of different wavelengths and amplitudes on top of each other so see what kind of landscapes we get.

Benefits of this approach is that the designer can completely control the curves with about 5-10 numbers. They represent the amplitude and wavelength of the layered sin waves. So you can choose the relative sizes of the lumps and their offsets.

Problems are that it can look a little wavey if you aren't too choosy about your numbers. The demo selects random numbers and outputs them on the browser console.

Clipped at y=0 as a kind of sea level. You can slip and slide around it using WASD.

You can [play](https://seanbutler.github.io/SinWaveLandscape/dist) with it or take a look at the [source code](https://www.github.com/seanbutler/SinWaveLandscape/).

Improvements would be to add in a predictable source of noise and allow randomised offset ranges in the parameters.

To make the scene more mountainous we should exaggerate the scale as the landscape gets higher. This would make it more alpine and less wavey.
