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
                    <iframe width="100%" src="https://www.youtube.com/embed/lTQcJ6ogwj8" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Nintendo Game Development Tutorials</h1>
                <h4>Published on Friday, September 27, 2013</h4>
                <h3>Description</h3>
                <p>In this JavaScript game development tutorial using the Nintendo Web Framework, we'll look at the component interface. In JavaScript game development, a component is a very simple interface that specifies that every component must be able to execute some common core method. In my game engine, every component will have a function execute(){} which, thanks to the way JavaScript method invocation works, can take whatever arguments it needs. In order to simplify things, every component in Rokko.js will take a single argument, which will be a reference to the entity that owns it. The logic behind this approach is that a component (for the most part) only exists to do something on behalf of the entity. There might be component objects that are an exception to this idea, which is totally fine. For example, the renderer component defines a timestamp parameter, which is needed by the Draw component so it is able to maintain a consistent time step. This timestamp is fed into these components by the main game loop, which is in turn a component.

Remember, entities hold a collection of components, but a component can also be composed of other instances of components.</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/nintendo-game-development-tutorials">Nintendo Game Development Tutorials</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/nintendo-game-development-tutorials/draw-component-nintendo-game-development">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/hLDFho-g7bc/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/nintendo-game-development-tutorials/draw-component-nintendo-game-development">Draw Component - Nintendo Game Development</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
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
        </div>
            </div>
            <div class="col-md-8">
                {% include disqus.html %}
            </div>
        </div>
    </div>
    <div class="row mt grid"></div>
</div>
