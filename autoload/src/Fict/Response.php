<?php

namespace Fict;

class Response {
   protected $output;

   /**
    * @param $content
    */
   public function setContent($content) {
      $this->output = $content;
   }

   /**
    * @return mixed
    */
   public function __toString() {
      return $this->output;
   }
}
