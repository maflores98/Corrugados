<?php

class Application_Model_DbTable_direccionesProveedores extends Zend_Db_Table_Abstract
{
    protected $_name = 'direcciones_proveedores';
    protected $_primary='id_direccion';
    
    /*public function consultar($letra)
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("direcciones_clientes")
            ->where("Nombre LIKE '$letra%'")
            ->order('id_cliente DESC');

        $sql = $db->query($select);



        return  $row = $sql->fetchAll();
    }*/
    public function consultarDireccion($id){
     
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("direcciones_proveedores")
            ->where("id_direccion=?",$id);
        $sql = $db->query($select);
    return  $row = $sql->fetchAll();

    }
    public function TodasDireccion($prov,$letra){
     
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("direcciones_proveedores")
            ->where("id_proveedor=?",$prov)
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
    
    
}