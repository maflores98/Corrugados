<?php

class Application_Model_DbTable_vAcumulados extends Zend_Db_Table_Abstract
{
	protected $_name = 'v_acum_detalleprocesos';
	protected $_primary='id_orden';

	public function consultaracumulados($id_orden,$vista){
		$select = $this->select();
		$select->where("id_orden = ?", $id_orden);
		$select->where("nombre_maquina IN (?)",$vista);
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