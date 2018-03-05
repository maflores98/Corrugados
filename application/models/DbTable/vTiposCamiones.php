<?php

class Application_Model_DbTable_vTiposCamiones extends Zend_Db_Table_Abstract
{
    protected $_name = 'tipos_camiones';
    protected $_primary='id';

    public function consultar(){

        $select = $this->select();

        $rowset = $this->fetchAll($select);

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = "";

        foreach ($tiposcorrugados as $row) {

            $data .= '<option value="'.$row['id'].'">'.$row['descripcion'].'</option>';          
        }

        $response = $data;

        return $data;

    }
}