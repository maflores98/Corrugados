<?php

class Application_Model_DbTable_vOrdenImpresa extends Zend_Db_Table_Abstract{

    protected $_name = 'v_orden_impresa';
    protected $_primary='id_ordenproduccion';

    public function consultar($Id){

    	$select = $this->select()->where('id_ordenproduccion = ?', $Id);

		$row = $this->fetchRow($select);

		$UTF8 = new Application_Model_Utf8EncodeArray();
        $data = $UTF8->encode($row);

        return $data;
    }

    public function consultar_remision($Id,$cant_entregar,$id_remision){

    	$response = new stdClass();
    	$select = $this->select()->where('id_ordenproduccion = ?', $Id);

		$row = $this->fetchRow($select);

		$UTF8 = new Application_Model_Utf8EncodeArray();
        $data = $UTF8->encode($row);

        $response->data= $data;
        $response->cant_entregar =$cant_entregar;
        $response->id_remision =$id_remision;


        return $response;
    }

}