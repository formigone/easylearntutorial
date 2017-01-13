---
layout: default
nav: series
title: Nintendo Game Development Tutorials
---

<div class="container">
    <div class="row mt grid">
        <div class="mt"></div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-push-1 col-sm-10 col-md-push-2 col-md-8">
                <div class="video-container">
                    <iframe width="100%" src="https://www.youtube.com/embed/hLDFho-g7bc" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Nintendo Game Development Tutorials</h1>
                <h4>Published on Friday, September 27, 2013</h4>
                <h3>Description</h3>
                <p>In this Nintendo Web Framework game development tutorial, we'll look at the draw component. In Rokko.js, the Draw component class is an abstraction over HTML5 canvas so we can draw to the screen. The execute method of this component takes an entity, a timestamp, and renders it to its CanvasRenderingContext2D. Since every entity has an (x, y) position in game space, as well as a Sprite object that graphically represents it, the draw component extracts this information from the entity, and performs the rendering of the entity object.

Before we have a sprite class in place, we will simply draw each entity as a rectangle rooted at the entity's position, using its width and height to determine its dimensions. Later we will stop using the entity's size, and will instead use the width and height of the sprite that represents the image. Because of this, we're able to dynamically change the entity's size in case each sprite in the animation loop has a slightly different size.</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/nintendo-game-development-tutorials">Nintendo Game Development Tutorials</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/nintendo-game-development-tutorials/renderer-component-nintendo-game-development">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/niCC7lo0sTU/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/nintendo-game-development-tutorials/renderer-component-nintendo-game-development">Renderer Component - Nintendo Game Development</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/nintendo-game-development-tutorials/image-component-nintendo-game-development">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/89PvuaFDYCg/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/nintendo-game-development-tutorials/image-component-nintendo-game-development">Image Component - Nintendo Game Development</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/nintendo-game-development-tutorials/nintendo-web-framework-nintendo-game-development">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/dPEsL7U2fSw/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/nintendo-game-development-tutorials/nintendo-web-framework-nintendo-game-development">Nintendo Web Framework - Nintendo Game Development</a>
                </h4>
            </div>
        </div>
            </div>
            <div class="col-md-8">
                {% include disqus.html %}
            </div>
        </div>
    </div>
    <div class="row mt grid"></div>
</div>
