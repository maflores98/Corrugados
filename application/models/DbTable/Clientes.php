<?php

class Application_Model_DbTable_Clientes extends Zend_Db_Table_Abstract
{
    protected $_name = 'clientes';
    protected $_primary='id_cliente';
    
    public function consultar($letra)
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
        ->from ("clientes")
        ->where("rcomercial LIKE '$letra%'")
        ->order('id_cliente DESC');
        $sql = $db->query($select);
        
        return  $row = $sql->fetchAll();

    }
    
    public function consultarCliente($id){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
        ->from ("clientes")
        ->where("id_cliente=?",$id);
        $sql = $db->query($select);
        return  $row = $sql->fetchAll();

    }

    public function listaclientes(){

        $rows = $this->fetchAll(
            $this->select('id_cliente', 'rcomercial')
        );

        $option = "<option value=''>SELECCIONAR";

        foreach ($rows as $row) {

            $option.= "<option value=".$row['id_cliente'].">".$row['rcomercial'];
            
        }

        return $option;
    }

    public function guardar($datos)
    {
        return $this->insert($datos);
    }
    
    public function actualizar($datos,$id){
      //$datos=array("Id_stComponente"=>20, "Fecha_Inicio"=>date("Y-m-d H:i:S"));
      $where = "id_cliente=$id";
      return $this->update($datos, $where);
  }
  
  //////////////////////////////////////////////////////////////////////////////
  ///                                                                        ///
  ///                                 SERGIO                                 ///
  ///                                                                        ///
  //////////////////////////////////////////////////////////////////////////////
      public function llenarcombocategorias(){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('tipos_clientes');
        $sql = $db->query($select);
        $rows = $sql->fetchAll();
        
      $response = new stdClass();        
       $data = "";
       foreach ($rows as $row) {
           $data .= '<option value="'.$row['id_tipocliente'].'" data-descripcion="'.$row['descripcion'].'">'.$row['descripcion'].'</option>';                            
       }

        $response = $data;
        return $data;
    }   

    public function llenarcombotiposestatus(){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('tipos_estatus');
        $sql = $db->query($select);
        $rows = $sql->fetchAll();

      $response = new stdClass();
       $data = "";
       foreach ($rows as $row) {        
           $data .= '<option value="'.$row['id_estatus'].'" data-descripcion="'.$row['descripcion'].'">'.$row['descripcion'].'</option>';                           
       }

        $response = $data;
        return $data;
    }

    public function llenarcombovendedores(){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('vendedores');
        $sql = $db->query($select);
        $rows = $sql->fetchAll();
        
       $data = "";
       foreach ($rows as $row) {        
           $data .= '<option value="'.$row['id_vendedor'].'" data-descripcion="'.$row['nombre'].'">'.$row['nombre'].'</option>';                            
       }

        $response = $data;
        return $data;
    }    

      public function consultarclientes()
      {
       $select = $this->select();
       $response=new stdClass();
       $rows = $this->fetchAll($select);
                            //$consulta = $select->__toString();
                            //echo $consulta;
                            //exit();
       $clientes = array();
       foreach ($rows as $row) {

         $clientes[] = array(
         "id_cliente"=>$row["id_cliente"],
          "rcomercial"=>$row["rcomercial"],
          "rfc" => $row['rfc'],
          "telefono" => $row['telefono'],
          "pagweb" => $row['pagweb'],
          "id_estatus" => $row['id_estatus'],       
          "detalle"=>"<a class='btn btn-default btn-xs btn-detalles' data-id='".$row['id_cliente']."'> <span class='glyphicon glyphicon-pencil'></a>",
          "direccion"=>"<a class='btn btn-default btn-xs btn-direccioncliente' data-id='".$row['id_cliente']."'> <span class='glyphicon glyphicon-road'></a>"
          );
       }
       $response->data = $clientes;
       return $response;
     }

      public function extraercliente($idcliente)
      {
       $select = $this->select();
       $select->where("id_cliente = ?", $idcliente);
       $response=new stdClass();
       $rows = $this->fetchAll($select)->toArray();
                            //$consulta = $select->__toString();
                            //echo $consulta;
                            //exit();
       $cliente = array();
       foreach ($rows as $row) {
         $cliente[] = array(
        "id_cliente"=>$row["id_cliente"],
        "rcomercial"=>$row["rcomercial"],
        "rfc" => $row['rfc'],
        "telefono" => $row['telefono'],
        "pagweb" => $row['pagweb'],
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
        "refcont3"=>$row["refcont3"],        
        "id_vendedor"=>$row["id_vendedor"]
          );
       }

       $response->data = $cliente;
       return $rows[0];
     }     

    public function actualizarcliente($datos)
    {
        $where =$datos["id_cliente"];
        $update = $this->update(array(
            "rcomercial" => $datos["rcomercial"], 
            "rfc" => $datos["rfc"], 
            "telefono" => $datos["telefono"], 
            "pagweb" => $datos["pagweb"], 
            "id_categoria" => $datos["categoria"], 
            "id_estatus" => $datos["estatus"], 
            "factura" => $datos["factura"],
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
            "refcont3" => $datos["referencia3"],
            "id_vendedor"=>$datos["vendedor"]
        ), $where);

        $response = new stdClass();
        $response->validacion = true;
        return $response;
        echo $set;
    }

    public function insertarcliente($datos)
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
            "refcont3" => $datos["referencia3"],
            "id_vendedor"=>$datos["vendedor"]
            ));
        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }              

      public function tiposdireccion(){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('tipos_direcciones');
        $sql = $db->query($select);
        $rows = $sql->fetchAll();
        
      $response = new stdClass();        
       $data = "";
       foreach ($rows as $row) {
           $data .= '<option value="'.$row['id_direccion'].'" data-descripcion="'.$row['descripcion'].'">'.$row['descripcion'].'</option>';                            
       }

        $response = $data;
        return $data;
    }    

}