<?php

class Application_Model_DbTable_vSeleccionaMateriales extends Zend_Db_Table_Abstract{

    protected $_name = 'v_seleccionamateriales';
    protected $_primary='selector';

       public function tipos_materiales($tipo){

        $select = $this->select()
        ->from(array('p' => 'v_seleccionamateriales'),
                    array('primercombo'))
        ->where('selector = ?', $tipo)
        ->group(array('primercombo')); 

        $rowset = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();        
        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = "";

        foreach ($tiposcorrugados as $row) {

            $data .= '<option value="'.$row['primercombo'].'">'.$row['primercombo'].'</option>';          
        }

        $response = $data;

        return $data;

    }

    public function tipos_carton($tipo){

    	$select = $this->select()
		->where('primercombo = ?', $tipo);

		$rowset = $this->fetchAll($select);

	    $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = "";

        foreach ($tiposcorrugados as $row) {

            $data .= '<option value="'.$row['segundocombo'].'">'.$row['segundocombo'].'</option>';          
        }

        $response = $data;

        return $data;

    }

    public function tipos_tamano($tipo){

        $select = $this->select()
        ->where('segundocombo = ?', $tipo);

        $rowset = $this->fetchAll($select);

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = "";

        foreach ($tiposcorrugados as $row) {

            $data .= '<option value="'.$row['tercercombo'].'">'.$row['tercercombo'].'</option>';
            $costo = $row['costo'];
        }

        $response->data = $data;
        $response->costo = $costo;

        return $response;

    }    
}