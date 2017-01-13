---
layout: default
nav: series
title: AngularJS Game Development Tutorials
---

<div class="container">
    <div class="row mt grid">
        <div class="mt"></div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-push-1 col-sm-10 col-md-push-2 col-md-8">
                <div class="video-container">
                    <iframe width="100%" src="https://www.youtube.com/embed/5y79fW208dI" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>AngularJS Game Development Tutorials</h1>
                <h4>Published on Thursday, October 24, 2013</h4>
                <h3>Description</h3>
                <p>In order to make our map editor app more dynamic, we'll replace the hard-coded menu links with a list of actions passed in from the controller. Using Angular's ng-repeat, we're able to achieve the same result as PHP's foreach loop. By programming this way, we can declaratively create a menu widget that can be configured from the outside of the app, or directly in the JavaScript code within the controller. That's the beauty of the MVC architecture, as well as the power of Angular.js.

To make the rest of the application do stuff when an action item is clicked on the main navigation menu, we'll hook up the click event using ng-click, and calling a function defined in the controller called dispatchMenu(). This method will take some key that corresponds to the menu item clicked. Inside the method we will call the $broadcast method of the $rootScope element that AngularJS provides through dependency injection. Then, any components or widgets that would like to be notified about the event, can simply register with the publisher object that's native to the framework (using the pub/sub design pattern), and when the user clicks that nav option, we'll have those modules be notified what actual option was selected.

Base description: Learn how to create 2D games using Angular.js and HTML5. The Tile-based map editor created in this tutorials is open-source, and is a built-in (but standalone) component of the RokkoJS game engine. Check out the JavaScript game framework Git repository at https://github.com/formigone/rokkojs

Copyright (c) 2013 Rodrigo Silveira http://www.easylearntutorial.com</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/angularjs-game-development-tutorials">AngularJS Game Development Tutorials</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/angularjs-game-development-tutorials/angularjs-game-development-1-2d-tile-map-editor">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/jt5a9aXn4lg/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/angularjs-game-development-tutorials/angularjs-game-development-1-2d-tile-map-editor">AngularJS Game Development 1: 2D Tile Map Editor</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/angularjs-game-development-tutorials/angularjs-game-tutorial-2-tile-map-bootstrap">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/bG-Z1b1YUPI/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/angularjs-game-development-tutorials/angularjs-game-tutorial-2-tile-map-bootstrap">AngularJS Game Tutorial 2: Tile Map - Bootstrap</a>
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
