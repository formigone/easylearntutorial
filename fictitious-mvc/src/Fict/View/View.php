<?php

namespace Fict\View;

class View {
   protected $data;
   protected $path;

   /**
    * @param $path
    */
   public function __construct($path) {
      $this->path = $path;
      $this->data = array();
   }

   /**
    * @param $key
    * @param $val
    */
   public function setData($key, $val) {
      $this->data[$key] = $val;
   }

   /**
    *
    * @return string
    */
   function render() {
      $data = $this->data;
      extract($data);

      ob_start();
      require($this->path);
      $html = ob_get_contents();
      ob_end_clean();

      return $html;
   }
}
