<?php

class Application_Model_DbTable_vDetalleKardex extends Zend_Db_Table_Abstract
{
	protected $_name = 'v_detalle_kardex';
	protected $_primary='id_kardex';


	public function getMovimientos($material)
	{

		$select = $this->select()
		->where('Material = ?', $material);

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
					
					"material"=>$row['Material'],
					"movimiento"=>$row['Movimiento'],
					"tipomovimiento"=>$row['Tipomovimiento'],
					"estatus"=>$row['Estatus'],
					"usuario"=>$row['Usuario'],
					"cantidad"=>$row['Cantidad'],
					"unidad"=>$row['Unidad'],
					"fecha"=>$row['Fecha_Registro']
					
				);

				$response->data = $data;
			}


			$response->validacion = true;

			return $response;

		}		

		return $response;

	}
}