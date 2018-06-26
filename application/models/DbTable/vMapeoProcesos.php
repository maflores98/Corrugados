<?php

class Application_Model_DbTable_vMapeoProcesos extends Zend_Db_Table_Abstract
{
	protected $_name = 'v_mapeo_procesos';
	protected $_primary='NumOrden';

	public function consultarestatusordenes(){
		//$condicion = array("PRODUCCION");
		$select = $this->select();
		//$select->where("NumOrden IN (?)", '912');
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$estatusordenes = array();
		foreach ($rows as $row) {

		Zend_Date::setOptions(array('format_type' => 'php'));
		//$date = new Zend_Date($row['Fec_Entrega']);

		$fentrega=new Zend_Date($row['Fec_Entrega'], 'dd.MM.yyyy');
		$femision=new Zend_Date($row['Fec_Emision'], 'dd.MM.yyyy');

		$estatusordenes[] = array(
			"numorden"=> $row['NumOrden'],
			"trabajo" => $row['Trabajo'],
			"cliente" => $row['Cliente'],
			"femision"=> $femision->toString('d-m-Y'),
			"fentrega"=> $fentrega->toString('d-m-Y'),
			"dias" => $row['Dias'],
			"refilado"=> $row['REFILADO'],
			"rayado" => $row['RAYADO'],
			"refiladorayado" => $row['REFILADORAYADO'],
			"impresion"=> $row['IMPRESION'],
			"ranurado" => $row['RANURADO'],
			"suajado" => $row['SUAJADO'],
			"grapado"=> $row['GRAPADO'],
			"peglineal" => $row['PEGADO_LINEAL'],
			"pegcajas" => $row['PEGADO_CAJAS'],
			"empalme" => $row['EMPALME']
			); 
		}
		$response->data = $estatusordenes;
		return $response;		
	}
}