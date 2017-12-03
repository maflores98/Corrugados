<?php

class Application_Model_DbTable_Kardex extends Zend_Db_Table_Abstract
{
	protected $_name = 'kardex';

	public function addMovimiento($data)
	{

		$insert = $this->insert($data);

		$response = new stdClass();

		$response->validacion = true;

		return $response;

	}

	public function getMovimientos($data)
	{

		$select = $this->select()
		->where('id_articulo = ?', $data);

		$rowset = $this->fetchAll($select);

		$count = count($rowset);

		$UTF8 = new Application_Model_Utf8EncodeArray();
		$Datos = $UTF8->encode($rowset);

		$response = new stdClass();

		$data = array();

		$response->validacion = false;

		if($count>0){

			foreach ($Datos as $row) {

				$data[] = array(
					"id_kardex"=>$row['id_kardex'],
					"id_articulo"=>mb_strtoupper($row['id_articulo']),
					"cantidad"=>$row['cantidad'],
					"unidad"=>mb_strtoupper($row['unidad']),
					"tipomovimiento"=>mb_strtoupper($row['tipomovimiento'])
				);

				$response->data = $data;
			}


			$response->validacion = true;

			return $response;

		}		

		return $response;

	}
}