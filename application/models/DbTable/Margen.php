<?php

class Application_Model_DbTable_margen extends Zend_Db_Table_Abstract{

    protected $_name = 'margen';
    protected $_primary='id';

      public function consultar($cant_requerida)
      {
       $select = $this->select();
    	$select->where('desde <= ?', $cant_requerida); 
    	$select->where('hasta >= ?', $cant_requerida);      
       $response=new stdClass();
       $rows = $this->fetchAll($select);
                            //$consulta = $select->__toString();
                            //echo $consulta;
                            //exit();
       $margen = array();
       foreach ($rows as $row) {

         $margen[] = array(
         "margen" => $row["margen"]
          );
       }
       $response->data = $margen;
       return $response;
     }    

}