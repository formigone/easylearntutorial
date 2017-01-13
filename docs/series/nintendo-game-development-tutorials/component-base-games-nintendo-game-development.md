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
                    <iframe width="100%" src="https://www.youtube.com/embed/OlfEfHoUCCY" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Nintendo Game Development Tutorials</h1>
                <h4>Published on Friday, September 27, 2013</h4>
                <h3>Description</h3>
                <p>Let's begin developing our game for the Nintendo Wii U console system. Since the Nintendo Web Framework is all about developing in straight HTML5 and JavaScript for a WebKit environment, we'll write the entire game using Google Chrome to test and iterate. Once we have the game complete, and you have an indie game developer or studio license with Nintendo, we'll just need to compile the final code base so it can be sent to Nintendo. From there, the games will be available from the eStore either for free, or at some cost if you would like to make money from Nintendo games you program.

Component based game development is a way to write games in a very plug-and-play manner. Instead of gaming a very thick base class that everything in the game inherits from, and a super [poorly designed] object-oriented beast that does everything, we'll write very small and loose modules (components) that the various game entities can use freely. The idea is that a game entity object represents something within the game world, such as a player (the hero) or an enemy. Entities are composed of zero or more components, and each component is designed to do one thing, and one thing only. For example, an entity object can contain a render component that renders it to the screen, a movement component so we can move the entity around the game world, and a physics component so the entity follows the physics laws (logic) imposed by the component. The key point about components is that entities should be able to add and remove components at run time (as opposed to at compile time). This approach makes code easier to write, maintain, and test, since a component is isolated from everything else in the system.</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/nintendo-game-development-tutorials">Nintendo Game Development Tutorials</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/nintendo-game-development-tutorials/entity-system-nintendo-game-development">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/aKhVilAlWrE/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/nintendo-game-development-tutorials/entity-system-nintendo-game-development">Entity System - Nintendo Game Development</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
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
        </div>
            </div>
            <div class="col-md-8">
                {% include disqus.html %}
            </div>
        </div>
    </div>
    <div class="row mt grid"></div>
</div>
