<?php

class Application_Model_DbTable_vTiposCamiones extends Zend_Db_Table_Abstract
{
    protected $_name = 'tipos_camiones';
    protected $_primary='id';

    public function consultar(){

        $select = $this->select()
        ->from(array('p' => 'tipos_camiones'),
                    array('descripcion','id'));
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
        $rowset = $this->fetchAll($select);
        
        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = "";

        foreach ($tiposcorrugados as $row) {

            $data .= '<option value="'.$row['descripcion'].'" data-descripcion="'.$row['descripcion'].'">'.$row['descripcion'].'</option>';          
        }

        $response = $data;

        return $data;

    }

    public function detallecamiones($tipo_camion){

        $select = $this->select()
            ->where("descripcion = ?", $tipo_camion);
        $rowset = $this->fetchAll($select);
        
        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = array();

        foreach ($tiposcorrugados as $row) {

            $data[]= array("id" => $row['id'],
                            "capacidad" => $row['capacidad'],
                            "costo_viaje" => $row['costo_viaje']
                            );
        }

        $response->data = $data;

        return $response;

    }
}