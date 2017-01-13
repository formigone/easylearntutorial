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
                    <iframe width="100%" src="https://www.youtube.com/embed/d1mIhDdSn54" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-8">
                <h1>Advanced PHP tutorial 9: Autoload your classes PSR-0</h1>
                <h4>Published on Tuesday, January 21, 2014</h4>
                <h3>Description</h3>
                <p>In PHP the most common way to load a class from a different file is to require_once or include_once. The problem with this approach is that you need to manually add each file. What if a file is not used? You still added it, which takes up time and memory. What if the order of your includes change? More manual work for you...

The solution is to use composer and its handy autoloader feature. You can autoload classes and namespaces using the PSR-0 or PSR-4 standards, and structure your modules in a way similar to how Java does it (directory structure matches namespace/package structure).

The result is simple, easy, and elegant: at the top of your PHP scripts/application, simply include the vendor/autoload.php file, and anything you reference at run time is lazily loaded into memory, and subsequent objects are then loaded and instantiated.

Any time you add/remove a namespace to your modules, re-run the command "composer install" or "composer update" so that the autoload files are created again.

Programming tutorials by Easy Learn Tutorial - because anyone can learn how to become an expert software and web developer!

Copyright (c) 2013 Rodrigo Silveira - http://www.easylearntutorial.com</p>
            </div>
            <div class="col-md-4">
                <h4>Next on <a href="/series/advanced-php-tutorials">Advanced PHP Tutorials</a></h4><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/advanced-php-tutorials/php-command-line-how-to-run-php-from-command-line-in-windows">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/neBVQBL_2P0/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/advanced-php-tutorials/php-command-line-how-to-run-php-from-command-line-in-windows">PHP Command line: how to run PHP from command line in Windows</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
            <div class="col-md-6">
                <a href="/series/advanced-php-tutorials/dependency-injection-is-not-complicated">
                    <img src="/img/blank.gif" data-echo="https://i.ytimg.com/vi/fKDxVx1nO2w/hqdefault.jpg" class="img-responsive" />
                </a>
            </div>
            <div class="col-md-6">
                <h4>
                    <a href="/series/advanced-php-tutorials/dependency-injection-is-not-complicated">Dependency Injection is not complicated</a>
                </h4>
            </div>
        </div><div class="row" style="margin-bottom: 20px">
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
        </div>
            </div>
            <div class="col-md-8">
                {% include disqus.html %}
            </div>
        </div>
    </div>
    <div class="row mt grid"></div>
</div>
