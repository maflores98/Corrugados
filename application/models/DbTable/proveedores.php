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
  public function consultarProveedor(){

    $db = Zend_Db_Table_Abstract::getDefaultAdapter();
    $select = $db->select()
    ->from ("proveedores");
    $sql = $db->query($select);

    $option = "<option value=''>SELECCIONAR";

    foreach ($sql as $row) {

      $option.= "<option value=".$row['id_proveedores'].">".$row['rcomercial'];

    }

    return $option;

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

  //////////////////////////////////////////////////////////////////////////////
  ///                                                                        ///
  ///                                 SERGIO                                 ///
  ///                                                                        ///
  //////////////////////////////////////////////////////////////////////////////
  
  public function llenarcomboproveedores()
  {
    $select = $this->select();
    $response=new stdClass();
    $rows = $this->fetchAll($select);
        //$consulta = $select->__toString();
        //echo $consulta;
        //exit();
    $data = "";
    foreach ($rows as $row)
    {
     $data .= '<option value="'.$row['id_proveedores'].'" data-descripcion="'.$row['rcomercial'].'">'.$row['rcomercial'].'</option>';                            
   }

   $response = $data;
   return $data;
 }  

 public function consultarproveedores()
 {
   $select = $this->select();
   $response=new stdClass();
   $rows = $this->fetchAll($select);
                            //$consulta = $select->__toString();
                            //echo $consulta;
                            //exit();
   $proveedores = array();
   foreach ($rows as $row) {

     $proveedores[] = array(
       "id_proveedor"=>$row["id_proveedores"],
       "rcomercial"=>$row["rcomercial"],
       "rfc" => $row['rfc'],
       "telefono" => $row['telefono'],
       "pagweb" => $row['pagweb'],
       "id_estatus" => $row['id_estatus'],       
       "detalle"=>"<a class='btn btn-default btn-xs btn-detalles' data-id='".$row['id_proveedores']."'> <span class='glyphicon glyphicon-pencil'></a>",
       "direccion"=>"<a class='btn btn-default btn-xs btn-direccionproveedor' data-id='".$row['id_proveedores']."'> <span class='glyphicon glyphicon-road'></a>"
     );
   }
   $response->data = $proveedores;
   return $response;
 }

 public function extraerproveedor($id_proveedor)
 {
   $select = $this->select();
   $select->where("id_proveedores = ?", $id_proveedor);
   $response=new stdClass();
   $rows = $this->fetchAll($select)->toArray();
                            //$consulta = $select->__toString();
                            //echo $consulta;
                            //exit();
   $proveedor = array();
   foreach ($rows as $row) {
     $proveedor[] = array(
      "id_proveedores"=>$row["id_proveedores"],
      "rcomercial"=>$row["rcomercial"],
      "rfc" => $row['rfc'],
      "telefono" => $row['telefono'],
      "pagweb" => $row['pagweb'],
      "calle" => $row['calle'],
      "colonia" => $row['colonia'],
      "municipio" => $row['municipio'],
      "ciudad" => $row['ciudad'],
      "estado" => $row['estado'],
      "cp" => $row['cp'],
      "id_categoria"=>$row["id_categoria"],
      "id_estatus" => $row['id_estatus'],       
      "condpago"=>$row["condpago"],
      "diasrevision"=>$row["diasrevision"],
      "contacto1"=>$row["contacto1"],
      "mailcont1"=>$row["mailcont1"],
      "refcont1"=>$row["refcont1"],
      "contacto2"=>$row["contacto2"],
      "mailcont2"=>$row["mailcont2"],
      "refcont2"=>$row["refcont2"],
      "contacto3"=>$row["contacto3"],
      "mailcont3"=>$row["mailcont3"],
      "refcont3"=>$row["refcont3"]        
    );
   }

   $response->data = $proveedor;
   return $rows[0];
 }     

 public function actualizarproveedor($datos)
 {
  $where =  $datos["id_proveedor"];
  $update = $this->update(array(
    "rcomercial" => $datos["rcomercial"], 
    "rfc" => $datos["rfc"], 
    "telefono" => $datos["telefono"], 
    "pagweb" => $datos["pagweb"],            
    "id_categoria" => $datos["categoria"], 
    "id_estatus" => $datos["estatus"], 
    "condpago" => $datos["cpago"], 
    "diasrevision" => $datos["drevision"], 
    "contacto1" => $datos["contacto1"], 
    "mailcont1" => $datos["mailcontacto1"],
    "refcont1" => $datos["referencia1"],
    "contacto2" => $datos["contacto2"],
    "mailcont2" => $datos["mailcontacto2"], 
    "refcont2" => $datos["referencia2"],
    "contacto3" => $datos["contacto3"],
    "mailcont3" => $datos["mailcontacto3"], 
    "refcont3" => $datos["referencia3"]
  ), $where);

  $response = new stdClass();
  $response->validacion = true;
  return $response;
  echo $set;
}

public function insertarproveedor($datos)
{
  $insert = $this->insert(array(
    "rcomercial" => $datos["rcomercial"], 
    "rfc" => $datos["rfc"], 
    "telefono" => $datos["telefono"], 
    "pagweb" => $datos["pagweb"],           
    "id_categoria" => $datos["categoria"], 
    "id_estatus" => $datos["estatus"], 
    "condpago" => $datos["cpago"], 
    "diasrevision" => $datos["drevision"], 
    "contacto1" => $datos["contacto1"], 
    "mailcont1" => $datos["mailcontacto1"],
    "refcont1" => $datos["referencia1"],
    "contacto2" => $datos["contacto2"],
    "mailcont2" => $datos["mailcontacto2"], 
    "refcont2" => $datos["referencia2"],
    "contacto3" => $datos["contacto3"],
    "mailcont3" => $datos["mailcontacto3"], 
    "refcont3" => $datos["referencia3"]
  ));
  $response = new stdClass();
  $response->validacion = true;
  return $response;
}         

}