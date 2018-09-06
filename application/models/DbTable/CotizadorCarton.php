<?php

class Application_Model_DbTable_CotizadorCarton extends Zend_Db_Table_Abstract
{
	protected $_name = 'cot_carton';
	protected $_primary='id_cotizacion';

	public function guardarcotizacion($datos){
        $insert = $this->insert($datos);
        $lastInsertId = $this->_db->lastInsertId();
        $response = new stdClass();
        $response->validacion = true;
        $response->Id = $lastInsertId;
        return $response;
    }	

        public function consultarcotizaciones(){

        $db = Zend_Db_Table::getDefaultAdapter(); 
        $select = $db->select()
        //->from('cot_carton');
        ->from(array('c' => 'cot_carton'), array('c.id_cotizacion','c.nombre_trabajo','c.fecha_emision'))
        ->joinLeft(array('c2' => 'clientes'), 'c2.id_cliente = c.id_cliente', array('c2.rcomercial'));     
        $sql = $db->query($select);       
        $rows = $sql->fetchAll();

		$response=new stdClass();
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
		$cotizaciones = array();
		foreach ($rows as $row) {

		Zend_Date::setOptions(array('format_type' => 'php'));
		$date = new Zend_Date($row['fecha_emision']);

		$date=new Zend_Date($row['fecha_emision'], 'dd.MM.yyyy');
			$cotizaciones[] = array(
				"id_cotizacion"=> $row['id_cotizacion'],
				"nombre_trabajo" => $row['nombre_trabajo'],
				"nombre_cliente" => $row['rcomercial'],
				"fecha_emision"=> $date->toString('d-m-Y')
				); 
		}
		$response->data = $cotizaciones;
		return $response;		
	}

    public function extraercotizacion($id){

        $select = $this->select()
        ->where("id_cotizacion = $id");

        $rowset = $this->fetchAll($select);

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $Datos = $UTF8->encode($rowset);

        return $rowset[0];
    }

    public function actualizarcotizacion($datos){

        $id_cotizacion = $datos['id_cotizacion'];

        $where = $this->getAdapter()->quoteInto('id_cotizacion = ?', $id_cotizacion);

        $update = $this->update($datos, $where);     
        
        $response = new stdClass();
        $response->validacion = true;
        return $response;

    }     

}
