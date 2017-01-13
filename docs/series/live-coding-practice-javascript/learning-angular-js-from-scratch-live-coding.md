---
layout: default
nav: series
title: Live Coding Practice - JavaScript
---

<div class="container">
    <div class="row mt grid">
        <div class="mt"></div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-push-1 col-sm-10 col-md-push-2 col-md-8">
                <div class="video-container">
                    <iframe width="100%" src="https://www.youtube.com/embed/iZd6UImTP0g" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Live Coding Practice: JavaScript</h1>
                <h4>Published on Tuesday, July 30, 2013</h4>
                <h3>Description</h3>
                <p>This was my very first coding experience with Angular.js. What I wanted to accomplish in this first session was more or less the following:

1. Write something that uses Angular.js functionality
2. Get acquainted with some of the most basic and fundamental concepts of this JavaScript library
3. Have fun

What I learned from this exercise was:

1. Angular uses JavaScript constructor functions to create objects that drive HTML templates. These objects (called ngControllers) can have properties that can be rendered into the template (aka. ngView - if that's what they'd call the template).

2. The variable placeholder used in the view can contain some simple expressions (such as {{name + " !! "}} or other simple math operations and so forth. Not any arbitrary operation is accepted inside those curlies.

3. You can use some inherited properties from your ngController (model data), such as .length

4. You can use native JavaScript expressions/constructs inside Angular's template placeholders

5. When you use a controller property inside an HTML attribute, don't include the curly braces, as you would when printing that value as part of the view.

What I'd like to learn next:

1. How to functions inside the controller
2. How to load data into controller (and from there into the view) using Ajax (XHR)
3. How to register event listeners
4. How to access data through event listeners (example: how would I get the id attribute of a button after it gets clicked)

Copyright (c) 2013 Rodrigo Silveira http://www.easylearntutorial.com</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/live-coding-practice-javascript">Live Coding Practice: JavaScript</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/live-coding-practice-javascript/learning-mongodb-from-scratch-with-php-live-coding">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/RQcQ5tvb5E8/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/live-coding-practice-javascript/learning-mongodb-from-scratch-with-php-live-coding">Learning MongoDB from scratch with PHP - Live Coding</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/live-coding-practice-javascript/to-do-app-in-javascript-live-coding">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/dHtyDron5ik/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/live-coding-practice-javascript/to-do-app-in-javascript-live-coding">To-do app in JavaScript - Live Coding</a>
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
