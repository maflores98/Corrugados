<?php

class Application_Model_DbTable_vClasifCartones extends Zend_Db_Table_Abstract{

    protected $_name = 'v_clasif_cartones';
    protected $_primary='Descripcion';

    public function consultar($tipo){

    	$select = $this->select()
		->where('Tipo_Material = ?', $tipo);

		$rowset = $this->fetchAll($select);

	    $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = "";

        foreach ($tiposcorrugados as $row) {

            $data .= '<option value="'.$row['Descripcion'].'">'.$row['Descripcion'].'</option>';          
        }

        $response = $data;

        return $data;

    }
}