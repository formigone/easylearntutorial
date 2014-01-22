<?php

ini_set("display_errors", "on");

require_once "vendor/autoload.php";

define("APP_ROOT", realpath(__DIR__)."/application/MyModule");

$req = new Fict\Request($_GET);
$resp = new Fict\Response();

$controller = new MyModule\Controllers\Index($req, $resp);

$controller->exec();
