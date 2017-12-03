<?php

class Application_Model_DbTable_Operadores extends Zend_Db_Table_Abstract
{
        protected $_name = 'usuarios';
        //protected $_primary='id_usuario';

	public function consultaroperador($operador)
	{
   $select = $this->select();
   $select->where("usuario = ?", $operador);
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$operador = array();
		foreach ($rows as $row) {

			$operador[] = array(
				"usuario"=> $row["usuario"],
				"nombreoperador" => $row['nombre']
				); 
		}
		$response->data = $operador;
		return $response;
	}

}