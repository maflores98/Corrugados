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

      public function extraerproveedor($idproveedor)
      {
       $select = $this->select();
       $select->where("id_proveedores = ?", $idproveedor);
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

    public function actualizarproveedor($id_proveedor, $rcomercial, $rfc, $telefono, $pagweb, $calle, $colonia, $municipio, $ciudad, $estado, $cp, $categoria, $estatus, $cpago, $drevision,
                                                    $contacto1, $mailcontacto1, $referencia1, $contacto2, $mailcontacto2, $referencia2, $contacto3,
                                                    $mailcontacto3, $referencia3)
    {
        $where[] = "id_proveedores = '$id_proveedor'";
        $update = $this->update(array(
            "rcomercial" => $rcomercial, 
            "rfc" => $rfc, 
            "telefono" => $telefono, 
            "pagweb" => $pagweb,
            "calle" => $calle,
            "colonia" => $colonia,
            "municipio" => $municipio,
            "ciudad" => $ciudad,
            "estado" => $estado,
            "cp" => $cp,             
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
            "refcont3" => $referencia3
        ), $where);

        $response = new stdClass();
        $response->validacion = true;
        return $response;
        echo $set;
    }

    public function insertarproveedor($rcomercial, $rfc, $telefono, $pagweb, $calle, $colonia, $municipio, $ciudad, $estado, $cp, $categoria, $estatus, $cpago, $drevision,
                                                    $contacto1, $mailcontacto1, $referencia1, $contacto2, $mailcontacto2, $referencia2, $contacto3,
                                                    $mailcontacto3, $referencia3)
    {
        $insert = $this->insert(array(
            "rcomercial" => $rcomercial, 
            "rfc" => $rfc, 
            "telefono" => $telefono, 
            "pagweb" => $pagweb,
            "calle" => $calle,
            "colonia" => $colonia,
            "municipio" => $municipio,
            "ciudad" => $ciudad,
            "estado" => $estado,
            "cp" => $cp,             
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
            "refcont3" => $referencia3
            ));
        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }  

      public function consultardireccionproveedor($id_proveedor){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('direcciones_proveedores')
        ->where("id_proveedor = '$id_proveedor'");
            //$consulta = $select->__toString();
            //echo $consulta;
            //exit();
        $sql = $db->query($select);
        $rows = $sql->fetchAll();
        
       $proveedor = array();
       foreach ($rows as $row) {
        $proveedor[] = array(
        "id_direccion"=>$row["id_direccion"],
        "calle"=>utf8_encode($row["calle"]),
        "colonia" => utf8_encode($row['colonia']),
        "ciudad" => utf8_encode($row['ciudad']),
        "municipio" => utf8_encode($row['municipio']),
        "estado"=>utf8_encode($row['estado']),
        "cp" => $row['cp'],       
        "estatus" => $row['id_estatus'],   
        "nota"=> utf8_encode($row["nota"])
        //"detalle" => "<a class='btn btn-default btn-xs btn-detalles' data-id='".$row['id_proveedor']."'> <span class='glyphicon glyphicon-pencil'></a>",
          );
       }

       $response = new stdClass();
        $response->data = $proveedor;
        return $response; 
     }  

      public function extraerdireccionproveedor($id_direccion){
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('direcciones_proveedores')
        ->where("id_direccion = '$id_direccion'");
            //$consulta = $select->__toString();
            //echo $consulta;
            //exit();
        $sql = $db->query($select);
        $rows = $sql->fetchAll();
        
       $proveedor = array();
       foreach ($rows as $row) {
        $proveedor[] = array(
        "id_direccion"=>$row["id_direccion"],
        "calle"=>utf8_encode($row["calle"]),
        "colonia" => utf8_encode($row['colonia']),
        "ciudad" => utf8_encode($row['ciudad']),
        "municipio" => utf8_encode($row['municipio']),
        "estado"=>utf8_encode($row['estado']),
        "cp" => $row['cp'],       
        "estatus" => $row['id_estatus'], 
        //"tipo_direccion"=> $row['id_tipodireccion']  ,
        "nota"=> utf8_encode($row["nota"])
          );
       }

       $response = new stdClass();
        $response->data = $proveedor;
        return $response; 
     }       

    public function actualizardireccionproveedor($id_direccion, $calle, $colonia, $ciudad, $municipio, $estado, $cp, $estatus, $nota)
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();      
        $where[] = "id_direccion = '$id_direccion'";
        $update = $db->update("direcciones_proveedores", array(
            "calle" => strtoupper(utf8_decode($calle)), 
            "colonia" => strtoupper(utf8_decode($colonia)), 
            "ciudad" => strtoupper(utf8_decode($ciudad)), 
            "municipio" => strtoupper(utf8_decode($municipio)), 
            "estado" => strtoupper(utf8_decode($estado)), 
            "cp" => $cp, 
            "id_estatus" => $estatus,
            "nota" => strtoupper(utf8_decode($nota))
        ), $where);

        $response = new stdClass();
        $response->validacion = true;
        return $response;
        echo $set;
    }      

    public function insertardireccionproveedor($id_proveedor, $calle, $colonia, $ciudad, $municipio, $estado, $cp, $estatus, $nota)
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $insert = $db->insert("direcciones_proveedores", array(
            "id_proveedor" => $id_proveedor,
            "calle" => $calle, 
            "colonia" => $colonia, 
            "ciudad" => $ciudad, 
            "municipio" => $municipio, 
            "estado" => $estado, 
            "cp" => $cp, 
            "id_estatus" => $estatus,
            "nota" => $nota
          ));
        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }       
    
}