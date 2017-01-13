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
                    <iframe width="100%" src="https://www.youtube.com/embed/bT-JkFCminw" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Google Closure Library - Nintendo Game Development</h1>
                <h4>Published on Thursday, September 26, 2013</h4>
                <h3>Description</h3>
                <p>Before we start writing our 2D game engine in JavaScript for the Nintendo Wii U, I need to explain how to use the closure library. This tutorial shows you how to use Google Closure Library, which makes jQuery, MooTools, Dojo, and other JavaScript libraries and frameworks look like... Q-Basic compared to C++. The first step is to actually download the library from its Google Code source at http://code.google.com/p/closure-library Then make sure you have access to this from your server (from the client). What you need to do is include .../closure/goog/base.js, which will bootstrap the rest of the application.

The backbone of closure library is the module system we can create using goog.provide and goog.require. Before the library can know how to import files that you goog.require, you will need to create a dependency file (deps.js be convention), which can be done using one of the Python scripts included in the library. With that in place, base.js can load each file synchronously as a goog.require is encountered, provided that the file is not yet loaded into the execution environment. After the application is ran through the closure compiler, all of the files required are compiled out into a single highly optimized output file.</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/nintendo-game-development-tutorials">Nintendo Game Development Tutorials</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/nintendo-game-development-tutorials/component-base-games-nintendo-game-development">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/OlfEfHoUCCY/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/nintendo-game-development-tutorials/component-base-games-nintendo-game-development">Component-base games - Nintendo Game Development</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
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
        </div>
            </div>
            <div class="col-md-8">
                {% include disqus.html %}
            </div>
        </div>
    </div>
    <div class="row mt grid"></div>
</div>
