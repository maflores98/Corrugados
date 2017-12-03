<?php

class Application_Model_DbTable_vListaOrdenes extends Zend_Db_Table_Abstract
{
	protected $_name = 'v_listaOrdenes';
	protected $_primary='Num_Orden';

	public function consultaractivas(){
		$condicion = array("SIN LIBERAR", "PENDIENTE","PRODUCCION");
		$select = $this->select();
		$select->where("Estatus IN (?)", $condicion);
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$activas = array();
		foreach ($rows as $row) {

Zend_Date::setOptions(array('format_type' => 'php'));
$date = new Zend_Date($row['Fecha_Entrega']);

$date=new Zend_Date($row['Fecha_Entrega'], 'dd.MM.yyyy');
			$activas[] = array(
				"numorden"=> $row['Num_Orden'],
				"trabajo" => $row['Trabajo'],
				"estatus" => $row['Estatus'],
				"cantidad"=>$row['Cantidad'],
				"fecha_entrega"=> $date->toString('d-m-Y')
				); 
		}
		$response->data = $activas;
		return $response;		
	}

	public function consultarfinalizadas(){
		$select = $this->select();
		$select->where("Estatus IN (?)", "FINALIZADO");
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$finalizadas = array();
		foreach ($rows as $row) {

Zend_Date::setOptions(array('format_type' => 'php'));
$date = new Zend_Date($row['Fecha_Entrega']);			

			$finalizadas[] = array(
				"numorden"=> $row['Num_Orden'],
				"trabajo" => $row['Trabajo'],
				"estatus" => $row['Estatus'],
				"cantidad"=>$row['Cantidad'],
				"fecha_entrega"=>$date->toString('d-m-Y')
				); 
		}
		$response->data = $finalizadas;
		return $response;		
	}	
	public function consultarcanceladas(){
		$select = $this->select();
		$select->where("Estatus IN (?)", "CANCELADO");
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$canceladas = array();
		foreach ($rows as $row) {

Zend_Date::setOptions(array('format_type' => 'php'));
$date = new Zend_Date($row['Fecha_Entrega']);			

			$canceladas[] = array(
				"numorden"=> $row['Num_Orden'],
				"trabajo" => $row['Trabajo'],
				"estatus" => $row['Estatus'],
				"cantidad"=>$row['Cantidad'],
				"fecha_entrega"=>$date->toString('d-m-Y')
				); 
		}
		$response->data = $canceladas;
		return $response;		
	}		
}