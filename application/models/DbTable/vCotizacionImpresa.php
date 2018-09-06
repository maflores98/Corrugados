<?php

class Application_Model_DbTable_vCotizacionImpresa extends Zend_Db_Table_Abstract{

    protected $_name = 'v_lista_cotcarton';
    protected $_primary='id_cotizacion';

    public function consultar($Id){

    	$select = $this->select()->where('id_cotizacion = ?', $Id);

		$row = $this->fetchRow($select);

		$UTF8 = new Application_Model_Utf8EncodeArray();
        $data = $UTF8->encode($row);

        return $data;
    }
}

?>