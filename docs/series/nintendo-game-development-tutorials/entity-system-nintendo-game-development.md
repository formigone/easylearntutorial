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
                    <iframe width="100%" src="https://www.youtube.com/embed/aKhVilAlWrE" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Nintendo Game Development Tutorials</h1>
                <h4>Published on Friday, September 27, 2013</h4>
                <h3>Description</h3>
                <p>Hello, Nintendo Web Framework game developers! In this 2D JavaScript game tutorial, I'll explain the concept of an entity system. In modern object-oriented game development, the idea behind the entity system is that an entity is a very simple JavaScript class that represent things in the game world that can act or be interacted with. For example, in Nintendo's Super Mario Brothers, Mario, Luigi, a mushroom, and Bowser are all examples of entities. All the entity represents is something, somewhere in the game. Some people have the base entity class know how to do a few things on its own such as render itself or move, but normally, an entity class simply represents a location within the game space, and allows you to add and remove components to/from it. An entity is also able to update itself, which normally means it delegates control to all of its components, in act in its behalf in some way or another.

Some entity classes also include some sort of query system so you can get specific components that belong to the entity, but normally each component runs only when the entity object tells them to during its update stage. As in any good object-oriented design, each component should have little to no knowledge of other components.</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/nintendo-game-development-tutorials">Nintendo Game Development Tutorials</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/nintendo-game-development-tutorials/component-interface-nintendo-game-development">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/lTQcJ6ogwj8/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/nintendo-game-development-tutorials/component-interface-nintendo-game-development">Component Interface - Nintendo Game Development</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
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
        </div>
            </div>
            <div class="col-md-8">
                {% include disqus.html %}
            </div>
        </div>
    </div>
    <div class="row mt grid"></div>
</div>
