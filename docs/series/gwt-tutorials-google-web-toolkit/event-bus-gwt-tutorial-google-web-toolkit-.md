---
layout: default
nav: series
title: GWT Tutorials - Google Web Toolkit
---

<div class="container">
    <div class="row mt grid">
        <div class="mt"></div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-push-1 col-sm-10 col-md-push-2 col-md-8">
                <div class="video-container">
                    <iframe width="100%" src="https://www.youtube.com/embed/2939gdrNymg" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>GWT Tutorials: Google Web Toolkit</h1>
                <h4>Published on Thursday, February 13, 2014</h4>
                <h3>Description</h3>
                <p>Why use an event bus: allow components to communicate throughout the app in a decoupled way.

This Google Web Toolkit tutorial explains the event bus pattern. Behind the scenes, if you squint your eyes, you can see the subscriber, pub/sub design pattern going on. The purpose and goal of the event bus is to decouple your application, and allow for inter-component communication. Instead, for example, of having some widget take a reference to some other widget, and manually modify that widget when it needs to (perhaps as a result of some user interaction), we could instead use the GWTEvent class to fire or broadcast an event saying that said user interaction has taken place somewhere. Then, any widgets, components, modules, views, presenters, etc., that would like to take action as a result, will be notified about it, and will be allowed to do their thing.

The example in the tutorial users a button, whose click handler fires the event (a Decline event). There is a label widget that wants to know when the button is clicked, so it registers a Decline handler with the event bus. Whenever that event is fired, the label can update itself, according to the business logic that it follows.

The steps to using an event bus are simple:

#1. Create an event - some class that extends GwtEvent, and is typed with the event handler associated with it. Unfortunately, there are some boilerplate code in this class that is tedious, but is not a big deal.

#2. Create an event handler - some interface that extends EventHandler. Here you can define the methods that a handler for the event can/must implement.

#3 Instantiate an event bus - either create your own event bus by extending Event, or use one of the ready, out of the box kinds. Using SimpleEventBus is fine for most cases.

#4 Pass the event bus object around so anyone can register events on it, as well as tell it to fire events as they occur.


Programming tutorials by Easy Learn Tutorial - because anyone can learn how to become an expert software and web developer!

Copyright (c) 2013 Rodrigo Silveira - http://www.easylearntutorial.com</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/gwt-tutorials-google-web-toolkit">GWT Tutorials: Google Web Toolkit</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/gwt-tutorials-google-web-toolkit/google-web-toolkit-2014-gwt-tutorial">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/WTJ4w-J81oE/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/gwt-tutorials-google-web-toolkit/google-web-toolkit-2014-gwt-tutorial">Google Web Toolkit 2014 - GWT Tutorial</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/gwt-tutorials-google-web-toolkit/what-is-google-web-toolkit-gwt-tutorial">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/6t09EhCFOtk/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/gwt-tutorials-google-web-toolkit/what-is-google-web-toolkit-gwt-tutorial">What is Google Web Toolkit - GWT Tutorial</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/gwt-tutorials-google-web-toolkit/installing-sdk-eclipse-plugin-gwt-tutorial-google-web-toolkit-">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/B7wYUnBRWBU/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/gwt-tutorials-google-web-toolkit/installing-sdk-eclipse-plugin-gwt-tutorial-google-web-toolkit-">Installing SDK & Eclipse Plugin - GWT Tutorial (Google Web Toolkit)</a>
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
