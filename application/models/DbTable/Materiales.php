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

  public function selMateriales($idMaterial){

    $datos = $this->fetchAll(
        $this->select()
        ->where('id_estatus = ?', '1')
        ->where('id_tipomaterial = ?', $idMaterial)
    );

    $UTF8 = new Application_Model_Utf8EncodeArray();
    $tiposMovi = $UTF8->encode($datos);

    $response = new stdClass();

    $data = "";

    foreach ($tiposMovi as $row) {

        $data .= '<option value="'.$row['id_material'].'" data-descripcion="'.$row['descripcion'].'">'.$row['descripcion'].'</option>';          
    }

    $response = $data;

    return $data;

}

public function getArticulo($Codigo){

    $row = $this->fetchRow($this->select()->where('clave = ?', $Codigo));

    $count = count($row);

    $response = new stdClass();

    $response->validacion = false;

    if($count>0){

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $articulo = $UTF8->encode($row->descripcion);

        $response->validacion = true;

        $response->id_material = $row->id_material;

        $response->unidad = $row->unidad;

        $response->articulo = $articulo;

    }

    return $response;    

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