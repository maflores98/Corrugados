<?php

class Application_Model_DbTable_TiposMateriales extends Zend_Db_Table_Abstract
{
    protected $_name = 'tipos_materiales';
    protected $_primary='id_tipomaterial';

       public function selTipoMateriales($idTipo){

        //$select = $this->select();


        if($idTipo == 8){

        $datos = $this->fetchAll(
            $this->select()
            ->where('id_estatus = ?', '1')
            ->where('clasificacion = ?', '1')
        );

        }

        if($idTipo == 9){

        $datos = $this->fetchAll(
            $this->select()
            ->where('id_estatus = ?', '1')
            ->where('clasificacion = ?', '2')

        );

        }

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposMovi = $UTF8->encode($datos);

        $response = new stdClass();

        $data = "";

        foreach ($tiposMovi as $row) {

            $data .= '<option value="'.$row['id_tipomaterial'].'" data-descripcion="'.$row['descripcion'].'">'.$row['descripcion'].'</option>';          
        }

        $response = $data;

        return $data;

    }
}