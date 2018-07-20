<?php

class Application_Model_DbTable_CotizadorCarton extends Zend_Db_Table_Abstract
{
	protected $_name = 'cot_carton';
	protected $_primary='id_cotizacion';

	public function guardarcotizacion($datos){
        $insert = $this->insert($datos);
        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }	
}
