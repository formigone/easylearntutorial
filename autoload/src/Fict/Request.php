<?php

namespace Fict;

class Request {
   protected $params;
   protected $action;

   /**
    * @param array $params
    */
   public function __construct(array $params){
      $this->params = $params;

      if (isset($params["action"])) {
         $this->action = $params["action"];
      } else {
         $this->action = "index";
      }
   }

   /**
    * @return array
    */
   public function getParams() {
      return $this->params;
   }

   public function getAction() {
      return $this->action;
   }
}
