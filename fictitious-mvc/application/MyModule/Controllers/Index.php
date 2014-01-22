<?php

namespace MyModule\Controllers;

use \Fict\Controller\AbstractController;

class Index extends AbstractController {

   public function indexAction() {
      $this->setData("msg", "Hello, world");
   }
}
