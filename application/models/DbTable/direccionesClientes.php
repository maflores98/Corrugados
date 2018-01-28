<?php

class Application_Model_DbTable_direccionesClientes extends Zend_Db_Table_Abstract
{
    protected $_name = 'direcciones_clientes';
    protected $_primary='id_direccion';
    
    public function consultar($letra)
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
        ->from ("direcciones_clientes")
        ->where("estado LIKE '$letra%'")
        ->order('id_cliente DESC');

        $sql = $db->query($select);



        return  $row = $sql->fetchAll();
    }
    public function consultarDireccionCliente($id){

        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
        ->from ("direcciones_clientes")
        ->where("id_cliente=?",$id);
        $sql = $db->query($select);
        return  $row = $sql->fetchAll();

    }
    public function consultarDireccion($id){

        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
        ->from ("direcciones_clientes")
        ->where("id_direccion=?",$id);
        $sql = $db->query($select);
        return  $row = $sql->fetchAll();

    }
    public function TodasDireccion($cliente,$letra){

        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
        ->from ("direcciones_clientes")
        ->where("id_cliente=?",$cliente)
        ->where("estado LIKE '$letra%'");
        $sql = $db->query($select);
        return  $row = $sql->fetchAll();

    }



    public function guardar($datos)
    {
        return $this->insert($datos);
    }
    
    public function actualizar($datos,$id)
    {   
      $where = "id_direccion=$id";
      return $this->update($datos, $where);

  }

  public function seldireccion($IdCliente){

    $datos = $this->fetchAll(
        $this->select()
        ->where('id_cliente = ?', $IdCliente)
        ->where('id_estatus = ?', 1)
    );

    $UTF8 = new Application_Model_Utf8EncodeArray();
    $tiposMovi = $UTF8->encode($datos);

    $response = new stdClass();

    $data = "";

    foreach ($tiposMovi as $row) {

        $data .= '<option value="'.$row['id_direccion'].'" data-val="'.$row['calle'].", ".$row['colonia'].'">'.$row['calle'].", ".$row['colonia'].'</option>';          
    }

    $response = $data;

    return $data;

}




}