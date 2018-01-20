<?php
class Application_Model_DbTable_DetalleOrdenProduccion extends Zend_Db_Table_Abstract
{
	protected $_name = 'detalle_ordenes_produccion';

	public function addOrden($array, $OrdProduccion){

        $db = Zend_Db_Table_Abstract::getDefaultAdapter();

        $db->insert('ordenes_produccion', $OrdProduccion);

        $row = $db->fetchrow(
            $db->select()
            ->from('ordenes_produccion',array(new Zend_Db_Expr('max(id_ordenproduccion) as MaxId')))
        );

        $Id_Orden = $row['MaxId'];

        $array['id_ordenproduccion'] = $Id_Orden;

        $this->insert($array);

        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }



    public function materialesDigitalSelect()
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('detalle_ordenes_produccion')
        ->where("id_ordenproduccion=1");

        $sql = $db->query($select);
        return  $rows = $sql->fetchAll();
    }

    public function show($id){

        $select = $this->select()->where("id_ordenproduccion = $id");

        $rowset = $this->fetchRow($select);

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $Datos = $UTF8->encode($rowset);

        return $rowset;

    }

    public function updateOrden($datos, $OrdProduccion){

        $Id = $datos['id_ordenproduccion'];

        $where = $this->getAdapter()->quoteInto('id_ordenproduccion = ?', $Id);

        $this->update($datos, $where);
        
        $response = new stdClass();
        $response->validacion = true;
        return $response;

    }
}