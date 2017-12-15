<?php

class Application_Model_DbTable_DetalleProcesos extends Zend_Db_Table_Abstract
{
	protected $_name = 'detalle_procesos';
	protected $_primary='id';

	public function consultarexisteajuste($orden,$ajuste){
		$select = $this->select();
		$select->from("detalle_procesos", array("existe"=>"COUNT(*)"));
		$select->where("id_orden = ?", $orden);
		$select->where("nombre_maquina = ?", $ajuste);

		
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$enproceso = array();
		foreach ($rows as $row) {

			$enproceso[] = array(
				"existe" => $row["existe"]
				); 
		}
		$response->data = $enproceso;
		return $response;		
	}

	public function copiaradetalleprocesos($copiardecaptura){
		$insert = $this->insert(array(
			"id_orden"=>$copiardecaptura[0]["id_orden"],
			"nombre_trabajo"=>$copiardecaptura[0]["nombre_trabajo"],
			"id_maquina"=>$copiardecaptura[0]["id_maquina"],
			"nombre_maquina"=>$copiardecaptura[0]["nombre_maquina"],
			"id_proceso"=>$copiardecaptura[0]["id_proceso"],
			"nombre_proceso"=>$copiardecaptura[0]["nombre_proceso"],
			"id_operador"=>$copiardecaptura[0]["id_operador"],
			"nombre_operador"=>$copiardecaptura[0]["nombre_operador"],
			"cant_requerida"=>$copiardecaptura[0]["cant_requerida"],
			"fechahora_registro"=>$copiardecaptura[0]["fechahora_registro"],
			"fechahora_inicio"=>$copiardecaptura[0]["fechahora_inicio"]
			));
		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}	

	public function reportarproceso($idorden,$maquina,$proceso,$cantidadok,$cantidadmerma,$tiempo,$notas,$fechafin)
	{
		//$where = array("nombre_maquina" => $maquina, "nombre_proceso" => $proceso);
		$where[] = "id_orden = '$idorden'";
		$where[] = "nombre_maquina = '$maquina'";
		//$where[] = "nombre_proceso = '$proceso'";
		$update = $this->update(array(
			"fechahora_fin"=>$fechafin,
			"cantidad_ok"=>$cantidadok,
			"cantidad_merma"=>$cantidadmerma,
			"tiempo"=>$tiempo,
			"notas"=>$notas
			), $where);
		//$update->where("id_orden = ?",$id_orden);
		//die($select->__toString());
		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}

}