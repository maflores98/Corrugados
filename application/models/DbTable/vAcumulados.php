<?php

class Application_Model_DbTable_vAcumulados extends Zend_Db_Table_Abstract
{
	protected $_name = 'v_acum_detalleprocesos';
	protected $_primary='id_orden';

	public function acumuladoajuste($id_orden){
		$select = $this->select();
		$select->where("id_orden = ?", $id_orden);
		$select->where("nombre_proceso LIKE '%AJUSTE%'");
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$acumulados = array();
		foreach ($rows as $row) {

			$acumulados[] = array(
				"acumulado"=> $row["Acumulado"],
				"acumuladomerma" => $row['MermaAcumulado']
				); 
		}
		$response->data = $acumulados;
		return $response;		
	}

	public function acumuladotiro($id_orden){
		$select = $this->select();
		$select->where("id_orden = ?", $id_orden);
		$select->where("nombre_proceso NOT LIKE '%AJUSTE%'");
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$acumulados = array();
		foreach ($rows as $row) {

			$acumulados[] = array(
				"acumulado"=> $row["Acumulado"],
				"acumuladomerma" => $row['MermaAcumulado']
				); 
		}
		$response->data = $acumulados;
		return $response;		
	}	
}