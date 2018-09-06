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
        ->where('id_material = ?', $descripcion);

        $rowset = $this->fetchAll($select);

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposcorrugados = $UTF8->encode($rowset);

        $response = new stdClass();

        $data = "";

        foreach ($tiposcorrugados as $row) {

            $data .= "<option value='".$row['id_material']."'>".$row['clave']."</option>";          
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

  //////////////////////////////////////////////////////////////////////////////
  ///                                                                        ///
  ///                                 SERGIO                                 ///
  ///                                                                        ///
  //////////////////////////////////////////////////////////////////////////////
  
      public function llenarcombocategoriasmateriales(){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('categorias_materiales');
        $sql = $db->query($select);
        $rows = $sql->fetchAll();
        
       $data = "";
       foreach ($rows as $row) {
           $data .= '<option value="'.$row['id_categoria'].'" data-descripcion="'.$row['descripcion'].'">'.$row['descripcion'].'</option>';                            
       }

        $response = $data;
        return $data;
    } 

      public function consultarmateriales()
      {
       $select = $this->select();
       $response=new stdClass();
       $rows = $this->fetchAll($select);
                            //$consulta = $select->__toString();
                            //echo $consulta;
                            //exit();
       $materiales = array();
       foreach ($rows as $row) {

         $materiales[] = array(
         "id_material"=>$row["id_material"],
          "clave"=>$row["clave"],
          "descripcion" => $row['descripcion'],
          "id_cli-prov" => $row['id_cli-prov'],
          "id_categoria" => $row['id_categoria'],
          "costo" => $row['costo'], 
          "unidad" => $row['unidad'],
          "id_estatus" => $row['id_estatus'],                 
          "detalle"=>"<a class='btn btn-default btn-xs btn-detalles' data-id='".$row['id_material']."'> <span class='glyphicon glyphicon-pencil'></a>"                            
          );
       }
       $response->data = $materiales;
       return $response;
     }

      public function extraermaterial($idmaterial)
      {
       $select = $this->select();
       $select->where("id_material = ?", $idmaterial);
       $response=new stdClass();
       $rows = $this->fetchAll($select)->toArray();
       
       $material = array();
       foreach ($rows as $row) {
         $material[] = array(
        "clave"=>$row["clave"],
        "descripcion"=>$row["descripcion"],
        "id_cliprov" => $row['id_cli-prov'],
        "id_categoria" => $row['id_categoria'],
        "costo" => $row['costo'],
        "unidad" => $row['unidad'],
        "id_estatus" => $row['id_estatus']     
          );
       }

       $response->data = $material;
       return $rows[0];
     }     

    public function actualizarmaterial($datos)
    {
        $id_material = $datos["id_material"];
        $where = $this->getAdapter()->quoteInto('id_material = ?', $id_material);

        $update = $this->update($datos, $where); 

        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }

    public function insertarmaterial($datos)
    {
        $insert = $this->insert($datos);

        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }

}