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
				"id_proceso" => $row['id'],
				"orden"=>"<button id='". $row["id_orden"] . "' data-id='". $row["id_orden"] . "' type='button' class='btn  btn-preview btn-primary'>". $row["id_orden"] . "</button>",
				"trabajo" => $row['nombre_trabajo']				
				); 
		}
		$response->data = $enproceso;
		return $response;
	}

	public function extraerenproceso($id_proceso,$vista)
	{		
		$select = $this->select();
		$select->where("id = ?",$id_proceso);

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

	//1
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

        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $row = $db->fetchrow(
            $db->select()
            ->from('captura_procesos',array(new Zend_Db_Expr('max(id) as MaxId')))
        );
        $id_proceso = $row['MaxId'];

		$response = new stdClass();
		$response->id_proceso = $id_proceso;
		$response->validacion = true;
		return $response;
	}

	public function copiardecapturaprocesos($id_proceso)
	{

		$select = $this->select();
		$select->where("id = ?",$id_proceso);
	
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

	public function eliminarprocesoenproceso($id_proceso)
	{
		$where = array();
        $where[] = $this->getAdapter()->quoteInto('id = ?', $id_proceso);			
		$delete = $this->delete($where);

		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}

	//2
	public function iniciarajuste($id_proceso,$idmaquina,$maquina,$idproceso,$proceso,$idoperador,$nombreoperador){
		
		$where[] = "id = '$id_proceso'";
		$update = $this->update(array(
									"id_maquina"=>$idmaquina,			
									"nombre_maquina"=>$maquina,
									"id_proceso"=>$idproceso,
									"nombre_proceso"=>$proceso,									
									"id_operador"=>$idoperador,
									"nombre_operador"=>$nombreoperador
									), $where);

		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}	

	public function actualizarproceso($id_proceso,$idproceso,$proceso)
	{		
		$where[] = "id = '$id_proceso'";
		$update = $this->update(array(
			"id_proceso"=>$idproceso,
			"nombre_proceso"=>$proceso	
			), $where);		

        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $row = $db->fetchrow(
            $db->select()
            ->from('captura_procesos',array(new Zend_Db_Expr('max(id) as MaxId')))
        );
        $id_proceso = $row['MaxId'];

		$response = new stdClass();		
		$response->validacion = true;
		$response->id_proceso = $id_proceso;
		return $response;
	}

	public function copiardedetalleacaptura($copiardedetalle){
		$insert = $this->insert(array(
									"id_orden"=>$copiardedetalle[0]["id_orden"],
									"nombre_trabajo"=>$copiardedetalle[0]["nombre_trabajo"],
									"id_maquina"=>$copiardedetalle[0]["id_maquina"],
									"nombre_maquina"=>$copiardedetalle[0]["nombre_maquina"],
									"id_proceso"=>$copiardedetalle[0]["id_proceso"],
									"nombre_proceso"=>$copiardedetalle[0]["nombre_proceso"],
									"id_operador"=>$copiardedetalle[0]["id_operador"],
									"nombre_operador"=>$copiardedetalle[0]["nombre_operador"],									
									"cant_requerida"=>$copiardedetalle[0]["cant_requerida"],
									"fechahora_registro"=>$copiardedetalle[0]["fechahora_registro"]
									));

        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $row = $db->fetchrow(
            $db->select()
            ->from('captura_procesos',array(new Zend_Db_Expr('max(id) as MaxId')))
        );
        $id_proceso = $row['MaxId'];

		$response = new stdClass();
		$response->id_proceso = $id_proceso;
		$response->validacion = true;
		return $response;
	}

  public function existenenproceso($id_orden){
   $select = $this->select();
   $select->where("id_orden = (?)", $id_orden);
   $response=new stdClass();
   $rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
   //$enproceso = array();
   $enproceso = "";
   foreach ($rows as $row) {
	$enproceso .= "<tr><td>" . $row['id_orden'] . "</td>" . "<td>" . $row['nombre_trabajo'] . "</td>" . "<td>" . $row['nombre_maquina'] . "</td></tr>";
     /*$enproceso[] = array(
      "id_proceso" => $row['id'],
      "orden" => $row["id_orden"],
      "trabajo" => $row['nombre_trabajo']
      );*/
   }
   $response->data = $enproceso;
   return $response;    
  }	

	public function finalizacalidadenpendiente($id_orden,$idoperador,$nombreoperador){
		
		$where[] = "id_orden = '$id_orden'";
		$update = $this->update(array(								
									"id_operador"=>$idoperador,
									"nombre_operador"=>$nombreoperador
									), $where);

		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}  

	public function calidadcopiardecapturaprocesos($id_orden)
	{

		$select = $this->select();
		$select->where("id_orden = ?",$id_orden);
	
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

	public function calidadcopiaracapturaprocesos($copiardependientes,$id_operador,$nombre_operador){
		foreach($copiardependientes AS $copiar){
		$insert = $this->insert(array(
									"id_orden"=>$copiar["id_orden"],
									"nombre_trabajo"=>$copiar["nombre_trabajo"],
									"id_maquina"=>$copiar["id_maquina"],
									"nombre_maquina"=>$copiar["nombre_maquina"],
									"id_proceso"=>$copiar["id_proceso"],
									"nombre_proceso"=>$copiar["nombre_proceso"],
									"cant_requerida"=>$copiar["cant_requerida"],
									"fechahora_registro"=>$copiar["fechahora_registro"],
									"id_operador"=>$id_operador,
									"nombre_operador"=>$nombre_operador
									));

		$response = new stdClass();
		$response->validacion = true;
		return $response;
		}
	}

}