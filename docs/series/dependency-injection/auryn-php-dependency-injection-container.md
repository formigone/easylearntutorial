---
layout: default
nav: series
title: Dependency Injection
---

<div class="container">
    <div class="row mt grid">
        <div class="mt"></div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-push-1 col-sm-10 col-md-push-2 col-md-8">
                <div class="video-container">
                    <iframe width="100%" src="https://www.youtube.com/embed/WKBZOtnYmHw" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Auryn: PHP Dependency Injection Container</h1>
                <h4>Published on Sunday, January 5, 2014</h4>
                <h3>Description</h3>
                <p>This PHP dependency injection container tutorial shows how to use Auryn dependency injector. Unlike Pimple DI container that we looked at in the last tutorial, Auryn is very robust, as well as highly performant. My very favorite feature is that it can auto-wire the entire dependency tree of a given object that you ask it to make through PHP reflection. If a dependency is specified as an interface or an abstract class, Auryn can be configured to instantiate any specific concrete implementation that you specify.

One of the weird things about the way Auryn injector is configured, is that parameters are specified by name. That is, if a class uses constructor injection, and one of the dependencies is an interface, you configure Auryn to satisfy that interface by mapping the name of the argument to the implementation. I haven't used Auryn that much, but I can only imagine how refactoring would interfere with injector configuration. On the other hand, how else could you configure how to inject your dependencies if more than one of the arguments were of the same interface/type?!

Auryn PHP dependency injection container GitHub repository https://github.com/rdlowrey/Auryn


Programming tutorials by Easy Learn Tutorial - because anyone can learn how to become an expert software and web developer!

Copyright (c) 2013 Rodrigo Silveira - http://www.easylearntutorial.com</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/dependency-injection">Dependency Injection</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/dependency-injection/dependency-injection-vs-service-locator-pattern">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/PniFqdDJfCg/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/dependency-injection/dependency-injection-vs-service-locator-pattern">Dependency Injection VS Service Locator Pattern</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/dependency-injection/pimple-php-dependency-injection-container">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/egONoRg_Gjg/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/dependency-injection/pimple-php-dependency-injection-container">Pimple: PHP Dependency Injection Container</a>
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
