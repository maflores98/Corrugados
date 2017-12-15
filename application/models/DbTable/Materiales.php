<?php

class Application_Model_DbTable_Materiales extends Zend_Db_Table_Abstract
{
    protected $_name = 'materiales';
    protected $_primary='id_material';
    
    public function consultar($letra)
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("materiales")
            ->where("descripcion LIKE '$letra%'")
            ->order('id_material DESC');
        $sql = $db->query($select);
                
        return  $row = $sql->fetchAll();
    }
    
    public function consultarMaterial($id){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("materiales")
            ->where("id_material=?",$id);
        $sql = $db->query($select);
    return  $row = $sql->fetchAll();

    }



    public function guardar($datos)
    {
        return $this->insert($datos);
    }
    
    public function actualizar($datos,$id){
      //$datos=array("Id_stComponente"=>20, "Fecha_Inicio"=>date("Y-m-d H:i:S"));
      $where = "id_material=$id";
      return $this->update($datos, $where);
    }
    
    
}