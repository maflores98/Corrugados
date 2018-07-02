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
			"fechahora_inicio"=>$copiardecaptura[0]["fechahora_inicio"],
			"situacion"=>$copiardecaptura[0]["situacion"],
			"cant_producir"=>$copiardecaptura[0]["cant_producir"]
			));

        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $row = $db->fetchrow(
            $db->select()
            ->from('detalle_procesos',array(new Zend_Db_Expr('max(id) as MaxId')))
        );

        $id_detalle = $row['MaxId'];		
		$response = new stdClass();
		$response->id_detalle = $id_detalle;
		$response->validacion = true;
		return $response;
	}	

	public function reportarproceso($id_detalle,$idmaquina,$maquina,$idproceso,$proceso,$cantidadok,$cantidadmerma,$tiempo,$notas,$parcial,$situacion)
	{
		$where[] = "id = '$id_detalle'";
		$update = $this->update(array(
			"id_maquina" => $idmaquina,
			"nombre_maquina" => $maquina,
			"id_proceso" => $idproceso,
			"nombre_proceso" => $proceso,
			"cantidad_ok"=>$cantidadok,
			"cantidad_merma"=>$cantidadmerma,
			"tiempo"=>$tiempo,
			"notas"=>$notas,
			"parcial"=>$parcial,
			"situacion"=>$situacion
			), $where);

		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}

	public function reportarajuste($id_detalle,$idmaquina,$maquina,$idproceso,$proceso,$cantidadok,$cantidadmerma,$tiempo,$notas,$parcial,$situacion)
	{
		$where[] = "id = '$id_detalle'";
		$update = $this->update(array(			
			"id_maquina" => $idmaquina,
			"nombre_maquina" => $maquina,
			"id_proceso" => $idproceso,
			"nombre_proceso" => $proceso,
			"cantidad_ok"=>$cantidadok,
			"cantidad_merma"=>$cantidadmerma,
			"tiempo"=>$tiempo,
			"notas"=>$notas,
			"parcial"=>$parcial,
			"situacion"=>$situacion
			), $where);

		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}		

 public function copiardedetalleprocesos($id_detalle)
 {

   $select = $this->select();
   $select->where("id = ?",$id_detalle);

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
       "cant_requerida"=>$row["cant_requerida"],
		"id_operador" => $row["id_operador"],
		"nombre_operador" => $row["nombre_operador"],       
       "fechahora_registro"=>$row["fechahora_registro"],
       "situacion"=>$row["situacion"],
       "cant_producir"=>$row["cant_producir"]
     );
   }
   return $copiar;
 }

	public function copiardedetalleprocesos2($id_detalle)
	{

		$select = $this->select();
		$select->where("id = ?",$id_detalle);
	
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
				"cant_requerida"=>$row["cant_requerida"],
				"fechahora_registro"=>$row["fechahora_registro"],
				"situacion"=>$row["situacion"],
				"cant_producir"=>$row["cant_producir"]
				); 
		}

		return $copiar;
	}	

	public function acumuladoajuste($id_orden){
		$select = $this->select();
		$select->from('detalle_procesos', new Zend_Db_Expr('SUM(cantidad_ok) AS Acumulado, SUM(cantidad_merma) AS MermaAcumulado'));
		$select->where("id_orden = ?", $id_orden);
		$select->where("nombre_proceso LIKE '%AJUSTE%'");
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$acumulados = array();
		foreach ($rows as $row) {

			if( is_null($row['Acumulado']) )
			{
				$row['Acumulado'] = '0';
			}
			if( is_null($row['MermaAcumulado']) )
			{
				$row['MermaAcumulado'] = '0';
			}			

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
		$select->from('detalle_procesos', new Zend_Db_Expr('SUM(cantidad_ok) AS Acumulado, SUM(cantidad_merma) AS MermaAcumulado'));
		$select->where("id_orden = ?", $id_orden);
		$select->where("nombre_proceso NOT LIKE '%AJUSTE%'");
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$acumulados = array();
		foreach ($rows as $row) {

			if( is_null($row['Acumulado']) )
			{
				$row['Acumulado'] = '0';
			}
			if( is_null($row['MermaAcumulado']) )
			{
				$row['MermaAcumulado'] = '0';
			}

			$acumulados[] = array(
				"acumulado"=> $row["Acumulado"],
				"acumuladomerma" => $row['MermaAcumulado']
				); 
		}
		$response->data = $acumulados;
		return $response;		
	}	 

	public function finalizaradetalleprocesos($copiadependientes){
		date_default_timezone_set('America/Mexico_City');
		$today = new Zend_Date();
		foreach ($copiadependientes as $copiar) {		
			$insert = $this->insert(array(
				"id_orden"=>$copiar["id_orden"],
				"nombre_trabajo"=>$copiar["nombre_trabajo"],
				"id_maquina"=>$copiar["id_maquina"],
				"nombre_maquina"=>$copiar["nombre_maquina"],
				"id_proceso"=>$copiar["id_proceso"],
				"nombre_proceso"=>$copiar["nombre_proceso"],
				"cant_requerida"=>$copiar["cant_requerida"],
				"fechahora_registro"=>$copiar["fechahora_registro"],
				"fechahora_inicio"=> $today->get('YYYY-MM-dd HH:mm:ss'),
				"fechahora_fin"=> $today->get('YYYY-MM-dd HH:mm:ss'),
				"cantidad_ok"=> 0,
				"cantidad_ok"=> 0,
				"cantidad_merma"=> 0,
				"tiempo"=> 0,
				"notas" => "",
				"parcial"=> "no",
				"situacion"=>$copiar["situacion"],
				"cant_producir"=>$copiar["cant_producir"]
				));
		}

        //$db = Zend_Db_Table_Abstract::getDefaultAdapter();
        //$row = $db->fetchrow(
        //    $db->select()
        //    ->from('detalle_procesos',array(new Zend_Db_Expr('max(id) as MaxId')))
        //);
        //$id_detalle = $row['MaxId'];

		$response = new stdClass();
		//$response->id_detalle = $id_detalle;
		$response->validacion = true;
		return $response;
	}	

	public function finalizaradetalleprocesos2($copiardecaptura){
		date_default_timezone_set('America/Mexico_City');
		$today = new Zend_Date();
		foreach ($copiardecaptura as $copiar) {		
			$insert = $this->insert(array(
				"id_orden"=>$copiar["id_orden"],
				"nombre_trabajo"=>$copiar["nombre_trabajo"],
				"id_maquina"=>$copiar["id_maquina"],
				"nombre_maquina"=>$copiar["nombre_maquina"],
				"id_proceso"=>$copiar["id_proceso"],
				"nombre_proceso"=>$copiar["nombre_proceso"],
				"id_operador"=>$copiar["id_operador"],
				"nombre_operador"=>$copiar["nombre_operador"],
				"cant_requerida"=>$copiar["cant_requerida"],
				"fechahora_registro"=>$copiar["fechahora_registro"],
				"fechahora_inicio"=> $copiar["fechahora_inicio"],
				"fechahora_fin"=> $today->get('YYYY-MM-dd HH:mm:ss'),
				"cantidad_ok"=> 0,
				"cantidad_ok"=> 0,
				"cantidad_merma"=> 0,
				"tiempo"=> 0,
				"notas" => "",
				"parcial"=> "no",
				"situacion"=>$copiar["situacion"],
				"cant_producir"=>$copiar["cant_producir"]
				));
		}

		$response = new stdClass();
		$response->validacion = true;
		return $response;
	}		

}