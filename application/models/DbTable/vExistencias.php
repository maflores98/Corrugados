<?php

class Application_Model_DbTable_vExistencias extends Zend_Db_Table_Abstract
{
    protected $_name = 'v_existencias';
    protected $_primary='id_material';
    
    public function existencias(){

        $existe = $this->fetchAll();

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $DatosExiste = $UTF8->encode($existe);

        $response = new stdClass();

        $data = array();

        foreach ($DatosExiste as $row) {

            $data[] = array(
                "Clave"=>$row['Clave'],
                "Descripcion"=>mb_strtoupper($row['Descripcion']),
                "Existencia"=>$row['Existencia'],
                "unidad"=>mb_strtoupper($row['unidad']),
                "detalle"=>"<a class='btn btn-default btn-xs btn-detalles' data-id='".$row['id_material']."'>
            <span class='glyphicon glyphicon-plus'></span>
            </a>"
            ); 

        }

        $response->data = $data;

        return $response;

    }

}