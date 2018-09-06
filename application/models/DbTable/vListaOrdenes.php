<?php

class Application_Model_DbTable_vListaOrdenes extends Zend_Db_Table_Abstract
{
	protected $_name = 'v_listaOrdenes';
	protected $_primary='Num_Orden';

	public function consultaractivas(){
		$condicion = array("PRODUCCION");
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
				"cant_requerida"=>$row['cant_requerida'],
				"cant_liberada"=>$row['cant_liberada'],
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
				"cant_requerida"=>number_format($row['cant_requerida']),
				"cant_liberada"=>number_format($row['cant_liberada']),
				"cant_merma"=>number_format($row['cant_merma']),
				"cant_producida"=>number_format($row['cant_producida']),
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
		$date = new Zend_Date($row['fecha_cancelacion']);			

			$canceladas[] = array(
				"numorden"=> $row['Num_Orden'],
				"trabajo" => $row['Trabajo'],
				"estatus" => $row['Estatus'],
				"cantidad"=>$row['cant_requerida'],
				"fecha_cancelacion"=>$date->toString('d-m-Y'),
				"motivo_cancelacion"=>$row['motivo_cancelacion'],
				"usuario_cancelacion"=>$row['usuario_cancelacion']
				); 
		}
		$response->data = $canceladas;
		return $response;		
	}	

    public function consultarenesperadematerial(){
        $select = $this->select();
        $select->where("Estatus IN (?)", "ESPERA MATERIAL");
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
                "cliente" => $row['Cliente'],
                "estatus" => $row['Estatus'],
                "cantidad"=>$row['cant_requerida'],
                "fecha_entrega"=> $date->toString('d-m-Y'),
                "liberar" => "<a class='btn btn-default btn-xs btn-xliberar' data-id='".$row['Num_Orden']."'> <span class='glyphicon glyphicon-triangle-right'></a>"
                ); 
        }
        $response->data = $activas;
        return $response;       
    }

	public function consultarpendientes(){
		$condicion = array("SIN LIBERAR","PENDIENTE");
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
				"cantidad"=>$row['cant_requerida'],
				"fecha_entrega"=> $date->toString('d-m-Y')
				); 
		}
		$response->data = $activas;
		return $response;		
	}    

    public function consultarxliberar(){
        $select = $this->select();
        $select->where("Estatus IN (?)", "PRODUCCION");
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
                "cliente" => $row['Cliente'],
                "estatus" => $row['Estatus'],
                "cantidad"=>$row['cant_requerida'],
                "cant_liberar"=>$row['cant_liberar'],
                "fecha_entrega"=> $date->toString('d-m-Y'),
                "liberar" => "<a class='btn btn-default btn-xs btn-xliberar' data-id='".$row['Num_Orden']."'> <span class='glyphicon glyphicon-triangle-right'></a>"
                ); 
        }
        $response->data = $activas;
        return $response;       
    }	

	public function validaracumulado($id_orden){
		$select = $this->select();
		$select->where("Num_Orden = (?)", $id_orden);
		$response=new stdClass();
		$rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$acumulado = array();
		foreach ($rows as $row) {

			$acumulado[] = array(
				"acumulado"=>$row['cant_liberar']
				); 
		}
		$response->data = $acumulado;
		return $response;		
	}        

}