<?php

class Application_Model_DbTable_CapturaProcesos extends Zend_Db_Table_Abstract
{
	protected $_name = 'captura_procesos';
	protected $_primary='id_orden';

	public function consultarenproceso($vista)
	{	
		$select = $this->select();
		$select->where("nombre_maquina IN (?)",$vista);
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$enproceso = array();
		foreach ($rows as $row) {

			$enproceso[] = array(
				"id"=>"<button id='". $row["id_orden"] . "' data-fila='". $row["id_orden"] . "' type='button' class='btn  btn-preview btn-primary'>". $row["id_orden"] . "</button>",
				"trabajo" => $row['nombre_trabajo']				
				); 
		}
		$response->data = $enproceso;
		return $response;
	}

	public function extraerenproceso($orden,$vista)
	{		
		$select = $this->select();
		$select->where("id_orden = ?",$orden);
		$select->where("nombre_maquina IN (?)",$vista);
		$response=new stdClass();					
		$rows = $this->fetchAll($select);

		$enproceso = array();
		foreach ($rows as $row) {

			$enproceso[] = array(
				"id_orden"=> $row["id_orden"],
				"trabajo" => $row['nombre_trabajo'],
				"id_maquina"=>$row["id_maquina"],
				"maquina" => $row['nombre_maquina'],
				"id_proceso"=>$row["id_proceso"],
				"proceso" => $row['nombre_proceso'],
				"operador" => $row['id_operador'],
				"nombreoperador" => $row['nombre_operador'],
				"cantidadreq" => $row['cant_requerida'],
				"horainicio" => $row['fechahora_inicio']
				); 		
		}
		$response->data = $enproceso;
		return $response;
	}

	public function copiaracapturaprocesos($copiardependientes){
		$insert = $this->insert(array(
									"id_orden"=>$copiardependientes[0]["id_orden"],
									"nombre_trabajo"=>$copiardependientes[0]["nombre_trabajo"],
									"id_maquina"=>$copiardependientes[0]["id_maquina"],
									"nombre_maquina"=>$copiardependientes[0]["nombre_maquina"],
									"id_proceso"=>$copiardependientes[0]["id_proceso"],
									"nombre_proceso"=>$copiardependientes[0]["nombre_proceso"],
									"cant_requerida"=>$copiardependientes[0]["cant_requerida"],
									"fechahora_registro"=>$copiardependientes[0]["fechahora_registro"]
									));
		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}

	public function iniciarproceso($id_orden,$idmaquina,$maquina,$idproceso,$proceso,$id_operador,$nombre_operador,$fechainicio)
	{		
		//$where = array("nombre_maquina" => $maquina, "nombre_proceso" => $proceso);
		//$where = "proceso = $proceso";
		$where[] = "id_orden = '$id_orden'";
		$where[] = "nombre_maquina = '$maquina'";
		//$where[] = "nombre_proceso = '$proceso'";
		$update = $this->update(array(
									"id_maquina"=>$idmaquina,			
									"nombre_maquina"=>$maquina,
									"id_proceso"=>$idproceso,
									"nombre_proceso"=>$proceso,									
									"id_operador"=>$id_operador,
									"nombre_operador"=>$nombre_operador,
									"fechahora_inicio"=>$fechainicio
									), $where);		
		//$update->where("id_orden = ?",$id_orden);
		//die($select->__toString());
		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}

	public function copiardecapturaprocesos($maquina,$proceso)
	{

		$select = $this->select();
		$select->where("nombre_maquina = ?",$maquina);
		//$select->where("nombre_proceso = ?",$proceso);		
		$response=new stdClass();
		$rows = $this->fetchAll($select);

		$copiar = array();
		foreach ($rows as $row) {

			$copiar[] = array(
				"id_orden"=> $row["id_orden"],
				"nombre_trabajo"=>$row["nombre_trabajo"],
				"id_maquina"=>$row['id_maquina'],
				"nombre_maquina"=>$row["nombre_maquina"],
				"id_proceso"=>$row["id_proceso"],
				"nombre_proceso"=>$row["nombre_proceso"],
				"id_operador" => $row["id_operador"],
				"nombre_operador" => $row["nombre_operador"],
				"cant_requerida"=>$row["cant_requerida"],
				"fechahora_registro"=>$row["fechahora_registro"],
				"fechahora_inicio" => $row["fechahora_inicio"]
				); 
		}

		return $copiar;
	}	

	public function eliminarprocesoenproceso($maquina,$proceso)
	{
		$where = array();
        $where[] = $this->getAdapter()->quoteInto('nombre_maquina = ?', $maquina);	
        //$where[] = $this->getAdapter()->quoteInto('nombre_proceso = ?', $proceso);		
		$delete = $this->delete($where);
		//$delete->where("id_orden =?", $orden);		
		//$delete = $this->delete(where('id_orden = ?',$orden));
		//->where('id_orden = ?',$orden);
		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}

	public function actualizarfechainicio($id_orden,$idoperador,$nombreoperador,$fechainicio)
	{		
		//$where = array("nombre_maquina" => $maquina, "nombre_proceso" => $proceso);
		//$where = "proceso = $proceso";
		$where[] = "id_orden = '$id_orden'";
		//$where[] = "nombre_proceso = '$proceso'";
		//$where[] = "nombre_proceso = '$proceso'";
		$update = $this->update(array(
			"fechahora_inicio"=>$fechainicio,
			"id_operador"=>$idoperador,
			"nombre_operador"=>$nombreoperador		
			), $where);		
		//$update->where("id_orden = ?",$id_orden);
		//die($select->__toString());
		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}	

}