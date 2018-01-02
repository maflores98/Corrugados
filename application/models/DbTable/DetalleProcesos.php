<?php

class Application_Model_DbTable_DetalleProcesos extends Zend_Db_Table_Abstract
{
	protected $_name = 'detalle_procesos';
	protected $_primary='id';

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
		$where[] = "nombre_proceso = '$proceso'";
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

	public function iniciarajuste($id_orden,$nombre_trabajo,$idmaquina,$maquina,$idproceso,$proceso,$id_operador,$nombre_operador,$fechainicio){
		$insert = $this->insert(array(
			"id_orden"=>$id_orden,
			"nombre_trabajo"=>$nombre_trabajo,
			"id_maquina"=>$idmaquina,
			"nombre_maquina"=>$maquina,
			"id_proceso"=>$idproceso,
			"nombre_proceso"=>$proceso,
			"id_operador"=>$id_operador,
			"nombre_operador"=>$nombre_operador,		
			"fechahora_inicio"=>$fechainicio
			));
		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}

	public function existeajuste($id_orden){
		$variable = "%AJUSTE%";
		$variable2 = NULL;
		$select = $this->select();
		$select->where("id_orden = ?",$id_orden);
		$select->where("nombre_proceso like ?", $variable);		
		$select->where("fechahora_fin is NULL");		
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$existe = array();
		foreach ($rows as $row) {

			$existe[] = array(
				"id_orden" => $row["id_orden"],
				"nombre_trabajo"=>$row["nombre_trabajo"],
				"id_maquina" => $row["id_maquina"],
				"nombre_maquina" => $row["nombre_maquina"],
				"id_proceso" => $row["id_proceso"],
				"nombre_proceso" => $row["nombre_proceso"],
				"id_operador" => $row["id_operador"],
				"nombre_operador" => $row["nombre_operador"],
				"fechahora_inicio" => $row["fechahora_inicio"]
				); 
		}
		$response->data = true;
		$response->data = $existe;
		return $response;		
	}	

	public function reportarajuste($idorden,$proceso,$cantreq,$cantidadok,$cantidadmerma,$tiempo,$notas,$fechafin)
	{
		//$where = array("nombre_maquina" => $maquina, "nombre_proceso" => $proceso);
		$where[] = "id_orden = '$idorden'";
		$where[] = "nombre_proceso = '$proceso'";
		//$where[] = "nombre_proceso = '$proceso'";
		$update = $this->update(array(
			"fechahora_fin"=>$fechafin,
			"cant_requerida"=>$cantreq,
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

	public function copiarfecharegistroadetalleprocesos($copiarfecharegistro,$maquina,$id_orden)
	{
		$where[] = "id_orden = '$id_orden'";
		$where[] = "nombre_maquina = '$maquina'";

		$update = $this->update(array(
			"fechahora_registro"=>$copiarfecharegistro[0]["fechahora_registro"]
			), $where);				
		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}	

}