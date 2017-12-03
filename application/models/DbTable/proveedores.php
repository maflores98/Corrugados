<?php
class Application_Model_DbTable_Proveedores extends Zend_Db_Table_Abstract
{
    protected $_name = 'proveedores';
    protected $_primary='id_proveedores';
    
    public function consultar($letra)
    {


        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("proveedores")
            ->where("rcomercial LIKE '$letra%'")
            ->order('id_proveedores DESC');

        $sql = $db->query($select);



        return  $row = $sql->fetchAll();
    }
    public function consultarProveedor($id){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("proveedores")
            ->where("id_proveedores=?",$id);
        $sql = $db->query($select);
    return  $row = $sql->fetchAll();

    }
    
    public function guardar($datos)
    {
        return $this->insert($datos);
    }
    
    public function actualizar($datos,$id){
      //$datos=array("Id_stComponente"=>20, "Fecha_Inicio"=>date("Y-m-d H:i:S"));
      $where = "id_proveedores=$id";
      return $this->update($datos, $where);
    }
    
    
}