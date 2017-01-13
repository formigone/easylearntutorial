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
                    <iframe width="100%" src="https://www.youtube.com/embed/dHtyDron5ik" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Live Coding Practice: JavaScript</h1>
                <h4>Published on Thursday, August 7, 2014</h4>
                <h3>Description</h3>
                <p>This tutorial codes a to-do app in JavaScript, written in response to a viewer request. 

Live demo: http://www.easylearntutorial.com/live-demo/todo-list-javascript.php

There were six requirements that this JavaScript application was to satisfy:

1. Create a new to do item from an input field
2. New item is displayed on an "uncompleted" list with a checkbox next to it
3. After a new item is created, the input field is cleared, but retains focus
4. By clicking the checkbox next to an uncompleted item, that item is moved to the "completed" list
5. By clicking the checkbox next to a completed item, that item is moved back to the  uncompleted list
6. When an item is moved between lists, it is removed from the list is was moved from, so a given item only shows on one list at a time

My goal was to be brief and write clean code. It's easy to search for code online, then use it in your app without fully understanding the code. What I wanted to do here was to provide a simple solution, but also to explain every decision I made.

The first design decision I made was to keep all my variables in a self-invoking, anonymous function. That way I wouldn't add anything to the global namespace. Next, I decided to have the basic HTML markup for the app all declared as HTML right on the document, as opposed to creating the application skeleton dynamically through JavaScript. 

From there, I created 4 functions; one that creates the HTML for each task, another function to create the task from user input, a method to handle click events on a task's checkbox, and finally I wrote a function to handle user input.

Programming tutorials by Easy Learn Tutorial - because anyone can learn how to become an expert software and web developer!

Copyright (c) 2013 Rodrigo Silveira - http://www.easylearntutorial.com</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/live-coding-practice-javascript">Live Coding Practice: JavaScript</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/live-coding-practice-javascript/learning-angular-js-from-scratch-live-coding">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/iZd6UImTP0g/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/live-coding-practice-javascript/learning-angular-js-from-scratch-live-coding">Learning Angular.js from scratch - Live Coding</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
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
        </div>
            </div>
            <div class="col-md-8">
                {% include disqus.html %}
            </div>
        </div>
    </div>
    <div class="row mt grid"></div>
</div>
