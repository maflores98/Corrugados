<?php

class Application_Model_DbTable_ClientesDireccion extends Zend_Db_Table_Abstract
{
    protected $_name = 'direcciones_clientes';
    protected $_primary='id_direccion';

      public function consultardireccioncliente($id_cliente){

        $select = $this->select()
        ->where("id_cliente = '$id_cliente'");
            //$consulta = $select->__toString();
            //echo $consulta;
            //exit();        
        $rows = $this->fetchAll($select);
        
       $cliente = array();
       foreach ($rows as $row) {
        $cliente[] = array(
        "id_direccion"=>$row["id_direccion"],
        "calle"=>utf8_encode($row["calle"]),
        "colonia" => utf8_encode($row['colonia']),
        "ciudad" => utf8_encode($row['ciudad']),
        "municipio" => utf8_encode($row['municipio']),
        "estado"=>utf8_encode($row['estado']),
        "cp" => $row['cp'],       
        "estatus" => $row['id_estatus'],   
        "nota"=> utf8_encode($row["nota"])
        //"detalle" => "<a class='btn btn-default btn-xs btn-detalles' data-id='".$row['id_cliente']."'> <span class='glyphicon glyphicon-pencil'></a>",
          );
       }

       $response = new stdClass();
        $response->data = $cliente;
        return $response; 
     }  

      public function extraerdireccioncliente($id_direccion){
        $select = $this->select()
        ->where("id_direccion = '$id_direccion'");
        $rows = $this->fetchAll($select);
        
       $cliente = array();
       foreach ($rows as $row) {
        $cliente[] = array(
        "id_direccion"=>$row["id_direccion"],
        "calle"=>utf8_encode($row["calle"]),
        "colonia" => utf8_encode($row['colonia']),
        "ciudad" => utf8_encode($row['ciudad']),
        "municipio" => utf8_encode($row['municipio']),
        "estado"=>utf8_encode($row['estado']),
        "cp" => $row['cp'],       
        "estatus" => $row['id_estatus'], 
        "tipo_direccion"=> $row['id_tipodireccion']  ,
        "nota"=> utf8_encode($row["nota"])
          );
       }

       $response = new stdClass();
        $response->data = $cliente;
        return $response; 
     }       

    public function actualizardireccioncliente($datos)
    {
        $id_direccion = $datos["id_direccion"];
        $where = $this->getAdapter()->quoteInto('id_direccion = ?', $id_direccion);

        $update = $this->update($datos, $where); 

        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }      

    public function insertardireccioncliente($datos)
    {
        $insert = $this->insert($datos);
        $response = new stdClass();
        $response->validacion = true;
        return $response;        
    }
}