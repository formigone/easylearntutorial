---
layout: default
nav: series
title: Algorithms & Data Structures
---

<div class="container">
    <div class="row mt grid">
        <div class="mt"></div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-push-1 col-sm-10 col-md-push-2 col-md-8">
                <div class="video-container">
                    <iframe width="100%" src="https://www.youtube.com/embed/elMXlO28Q1U" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Algorithms & Data Structures</h1>
                <h4>Published on Sunday, July 13, 2014</h4>
                <h3>Description</h3>
                <p>How to generate random mazes using the Recursive Backtracker algorithm. This tutorial describes the simplest maze generator algorithm using a stack and depth-first searching. I show an implementation using JavaScript.

Keep in mind that this algorithm, although it is very easy to code and understand, results in very complex mazes (the maze will be more difficult to solve as it gets bigger), you can create much more complicated labyrinths using other algorithms. Depending on your requirements, this should be enough, however.

LIVE DEMO: http://easylearntutorial.com/live-demo/recursive-backtracker-maze-generation.php

The algorithm (source: WikiPedia)

The depth-first search algorithm of maze generation is frequently implemented using backtracking:

1. Make the initial cell the current cell and mark it as visited
2. While there are unvisited cells

2.1. If the current cell has any neighbors which have not been visited

2.1.1. Choose randomly one of the unvisited neighbors
2.1.2. Push the current cell to the stack
2.1.3. Remove the wall between the current cell and the chosen cell
2.1.4. Make the chosen cell the current cell and mark it as visited

2.2. Else if stack is not empty
2.2.1. Pop a cell from the stack
2.2.2. Make it the current cell

2.3. Else
2.3.1. Pick a random unvisited cell, make it the current cell and mark it as visited

Programming tutorials by Easy Learn Tutorial - because anyone can learn how to become an expert software and web developer!

Copyright (c) 2013 Rodrigo Silveira - http://www.easylearntutorial.com</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/algorithms-data-structures">Algorithms & Data Structures</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/algorithms-data-structures/gaussian-blur-image-processing-algorithm">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/7LW_75E3A1Q/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/algorithms-data-structures/gaussian-blur-image-processing-algorithm">Gaussian Blur - Image Processing Algorithm</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/algorithms-data-structures/pathfinding-algorithms-in-javascript-maze-solving">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/F6oYjQc_tNM/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/algorithms-data-structures/pathfinding-algorithms-in-javascript-maze-solving">Pathfinding Algorithms in JavaScript - Maze solving</a>
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
