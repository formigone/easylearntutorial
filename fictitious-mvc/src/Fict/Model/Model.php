<?php

namespace Fict\Model;

abstract class AbstractModel {
   protected $db;

   /**
    * @param $db
    */
   public function __construct($db) {
      $this->db = $db;
   }

   /**
    * @param $query
    *
    * @return mixed
    */
   public function query($query) {
      return $query;
   }
}
