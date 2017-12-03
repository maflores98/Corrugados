<?php

class Application_Model_DbTable_TiposMovAlmacen extends Zend_Db_Table_Abstract
{
    protected $_name = 'tipos_mov_almacen';
    protected $_primary='id_movimiento';
    
    public function movimientos(){

        //$select = $this->select();

        $datos = $this->fetchAll("id_estatus = 1");

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposMovi = $UTF8->encode($datos);

        $response = new stdClass();

        $data = "";

        foreach ($tiposMovi as $row) {

                $data .= '<option value="'.$row['id_movimiento'].'" data-val="'.$row['tipo_movimiento'].'">'.$row['movimiento'].'</option>';
                /*"id"=>$row['id_movimiento'],
                "movimiento"=>mb_strtoupper($row['movimiento']),
                "tipo"=>$row['tipo_movimiento']*/
          
        }

        $response = $data;

        return $data;

    }

}