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
          "detalle"=>"<a class='btn btn-default btn-xs btn-detalles' data-id='".$row['id_cliente']."'> <span class='glyphicon glyphicon-plus'></a>"                            
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

    public function actualizarcliente($id_cliente, $rcomercial, $rfc, $telefono, $pagweb, $categoria, $estatus, $cpago, $drevision, 
                                                    $contacto1, $mailcontacto1, $referencia1, $contacto2, $mailcontacto2, $referencia2, $contacto3,
                                                    $mailcontacto3, $referencia3, $vendedor)
    {
        $where[] = "id_cliente = '$id_cliente'";
        $update = $this->update(array(
            "rcomercial" => $rcomercial, 
            "rfc" => $rfc, 
            "telefono" => $telefono, 
            "pagweb" => $pagweb, 
            "id_categoria" => $categoria, 
            "id_estatus" => $estatus, 
            "condpago" => $cpago, 
            "diasrevision" => $drevision, 
            "contacto1" => $contacto1, 
            "mailcont1" => $mailcontacto1,
            "refcont1" => $referencia1,
            "contacto2" => $contacto2,
            "mailcont2" => $mailcontacto2, 
            "refcont2" => $referencia2,
            "contacto3" => $contacto3,
            "mailcont3" => $mailcontacto3, 
            "refcont3" => $referencia3,
            "id_vendedor"=>$vendedor
        ), $where);

        $response = new stdClass();
        $response->validacion = true;
        return $response;
        echo $set;
    }

    public function insertarcliente($rcomercial, $rfc, $telefono, $pagweb, $categoria, $estatus, $cpago, $drevision, 
                                                    $contacto1, $mailcontacto1, $referencia1, $contacto2, $mailcontacto2, $referencia2, $contacto3,
                                                    $mailcontacto3, $referencia3, $vendedor)
    {
        $insert = $this->insert(array(
            "rcomercial" => $rcomercial, 
            "rfc" => $rfc, 
            "telefono" => $telefono, 
            "pagweb" => $pagweb, 
            "id_categoria" => $categoria, 
            "id_estatus" => $estatus, 
            "condpago" => $cpago, 
            "diasrevision" => $drevision, 
            "contacto1" => $contacto1, 
            "mailcont1" => $mailcontacto1,
            "refcont1" => $referencia1,
            "contacto2" => $contacto2,
            "mailcont2" => $mailcontacto2, 
            "refcont2" => $referencia2,
            "contacto3" => $contacto3,
            "mailcont3" => $mailcontacto3, 
            "refcont3" => $referencia3,
            "id_vendedor"=>$vendedor
            ));
        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }    

}