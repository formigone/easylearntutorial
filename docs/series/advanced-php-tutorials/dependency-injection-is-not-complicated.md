---
layout: default
nav: series
title: Advanced PHP Tutorials
---

<div class="container">
    <div class="row mt grid">
        <div class="mt"></div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-push-1 col-sm-10 col-md-push-2 col-md-8">
                <div class="video-container">
                    <iframe width="100%" src="https://www.youtube.com/embed/fKDxVx1nO2w" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Dependency Injection is not complicated</h1>
                <h4>Published on Tuesday, November 27, 2012</h4>
                <h3>Description</h3>
                <p>No, you don't need a full-feature Dependency Injection framework or huge XML configuration files to have dependency injection. Annotations are nice, and having an automated container makes life easier, but that's not what makes this design pattern what it is. The principle behind inversion of control is as simple as a constructor or method call.

 Dependency injection, sometimes referred to as DI, is a technique used in software development in order to simplify code and decouple components it uses.

Some of the benefits of dependency injection are code that's easier to test, code that fails independently, flexibility, and maintainability.

Generally speaking, any time you have a new statement inside one of your structures, where a new object is instantiated, you have a great candidate for dependency injection.

Someone in the comments brought up the idea of using factories instead of dependency injection, so that the dependencies are outside the client (through the factory class). Remember, though, that at the end of the day, someone, somewhere needs to specify the concrete detail that will make the application run. One approach is to use a factory class that uses dependency injection. The 2 principles are not mutually exclusive. Keep in mind that one of the key benefits to using DI, though, is that it makes testing much easier (or looking at the way some PHP developers write their code -- it makes testing possible). 

Imagine unit testing a class that depends on a factory whose dependencies are hard coded... through dependency injection, you can inject a mock factory inside your unit test, or configure the factory to return mocks.

Dependency Injection is not only a good subject for an "advanced PHP tutorial", but is an important concept in good software design (or object-oriented design and analysis). Think of it in terms of writing quality, maintainable, and testable code.

Copyright (c) 2013 Rodrigo Silveira http://www.easylearntutorial.com</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/advanced-php-tutorials">Advanced PHP Tutorials</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/advanced-php-tutorials/advanced-php-tutorial-2-what-is-polymorphism">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/4WK-Q0d2o48/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/advanced-php-tutorials/advanced-php-tutorial-2-what-is-polymorphism">Advanced PHP tutorial 2: what is polymorphism</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/advanced-php-tutorials/advanced-php-tutorial-3-exception-handling">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/sPHuhQOxisg/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/advanced-php-tutorials/advanced-php-tutorial-3-exception-handling">Advanced PHP Tutorial 3: Exception Handling</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/advanced-php-tutorials/advanced-php-tutorial-4-exception-handling-error-reporting">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/SGrZaGMTZRA/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/advanced-php-tutorials/advanced-php-tutorial-4-exception-handling-error-reporting">Advanced PHP Tutorial 4: Exception Handling & Error Reporting</a>
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
