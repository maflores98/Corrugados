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

    public function consultadescripcion($descripcion){

        $select = $this->select()
        ->where('descripcion = ?', $descripcion);

        $rowset = $this->fetchAll($select);

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = "";

        foreach ($tiposcorrugados as $row) {

            $data .= "<option value='".$row['clave']."'>".$row['clave']."</option>";          
        }

        $response = $data;

        return $data;
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

  public function getallArticulo(){

    $select = $this->select()->where('id_estatus = 1');

    $result = $this->fetchAll($select);

    $UTF8 = new Application_Model_Utf8EncodeArray();
    $result = $UTF8->encode($result);

    $response = new stdClass();

    $data = "";

    foreach ($result as $row) {

        $clave = $row['clave'];
        $id_material = $row['id_material'];


        $data .= "<option value='".$id_material."' data-clave='".$clave."' data-id='".$id_material."'>".$row['descripcion'];          
    }

    $response = $data;

    return $data;

    
}


}