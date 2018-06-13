<?php
class Application_Model_DbTable_OrdenesProduccion extends Zend_Db_Table_Abstract
{
	protected $_name = 'ordenes_produccion';

	public function addOrden($array, $OrdProduccion){
        $insert = $this->insert($array);
        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }

    public function materialesDigitalSelect(){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('detalle_ordenes_produccion')
        ->where("id_ordenproduccion=1");

        $sql = $db->query($select);
        return  $rows = $sql->fetchAll();
    }

    public function show($id){

        $select = $this->select()
        ->where("id_ordenproduccion = $id");

        $rowset = $this->fetchAll($select);

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $Datos = $UTF8->encode($rowset);

        return $rowset[0];
    }

    public function updateEstatus($idOrden, $estatus, $numordcompra, $cantproducir){

        $data = array(
            'id_estatusorden' => $estatus,
            'id_ordencompra' => $numordcompra,
            'cantidad_producir' => $cantproducir
        );

        $where = $this->getAdapter()->quoteInto('id_ordenproduccion = ?', $idOrden);

        $this->update($data, $where);

        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }

    public function updateOrden($OrdProduccion){

        $Id = $OrdProduccion['id_ordenproduccion'];

        $where = $this->getAdapter()->quoteInto('id_ordenproduccion = ?', $Id);

        $this->update($OrdProduccion, $where);
        
        $response = new stdClass();
        $response->validacion = true;
        return $response;

    }       
}