<?php

class Application_Model_DbTable_Articulos extends Zend_Db_Table_Abstract
{
    protected $_name = 'articulos';
    protected $_primary='id_articulo';
    
    public function consultar($letra)
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("articulos")
            ->where("descripcion LIKE '$letra%'")
            ->order('id_articulo DESC');
        $sql = $db->query($select);
        
        return  $row = $sql->fetchAll();

    }
    
    public function consultarArticulo($id){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("articulos")
            ->where("id_articulo=?",$id);
        $sql = $db->query($select);
    return  $row = $sql->fetchAll();

    }



    public function guardar($datos)
    {
        return $this->insert($datos);
    }
    
    public function actualizar($datos,$id){
      //$datos=array("Id_stComponente"=>20, "Fecha_Inicio"=>date("Y-m-d H:i:S"));
      $where = "id_articulo=$id";
      return $this->update($datos, $where);
    }
    
    
}