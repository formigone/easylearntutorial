<?php

namespace Fict\Controller;

use Fict\Request;
use Fict\Response;
use Fict\View\View;

abstract class AbstractController {
   /** @var View */
   protected $view;
   protected $req;
   protected $resp;

   /**
    * @param Request $req
    * @param Response $resp
    */
   public function __construct(Request $req, Response $resp) {
      $this->req = $req;
      $this->resp = $resp;
   }

   /**
    *
    */
   public function exec() {
      $action = $this->req->getAction();
      $this->view = new View(APP_ROOT . "/Views/index/{$action}.phtml");

      $action .= "Action";
      $this->$action();

      $this->dispatch();
   }

   /**
    * @param $view
    */
   protected function setView($view) {
      $this->view = $view;
   }

   /**
    *
    */
   protected function dispatch() {
      $this->resp->setContent($this->view->render());
      echo $this->resp;
   }

   /**
    * @param $key
    * @param $value
    */
   protected function setData($key, $value) {
      $this->view->setData($key, $value);
   }
}
