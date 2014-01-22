<?php

ini_set("display_errors", "on");
define("APP_ROOT", realpath(__DIR__)."/application/MyModule");

require "vendor/autoload.php";

$req = new Fict\Request($_REQUEST);
$resp = new Fict\Response();

$ctr = ucfirst($req->getAction());
$ctr = "MyModule\\Controllers\\{$ctr}";
$controller = new $ctr($req, $resp);

$controller->exec();
