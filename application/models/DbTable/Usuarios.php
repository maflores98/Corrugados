<?php

class Application_Model_DbTable_Usuarios extends Zend_Db_Table_Abstract
{
    protected $_name = 'usuarios';
    protected $_primary='id_usuario';
  
      public function llenarcombousuarios()
      {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db ->select()
        ->from('tipos_usuario');
        $sql = $db->query($select);
        $rows = $sql->fetchAll();

       $data = "";
       foreach ($rows as $row) {        
           $data .= '<option value="'.$row['id_tipousuario'].'" data-descripcion="'.$row['descripcion'].'">'.$row['descripcion'].'</option>';                            
       }

        $response = $data;
        return $data;
    }

      public function consultarusuarios()
      {
       $select = $this->select();
       $response=new stdClass();
       $rows = $this->fetchAll($select);
                            //$consulta = $select->__toString();
                            //echo $consulta;
                            //exit();
       $usuarios = array();
       foreach ($rows as $row) {

         $usuarios[] = array(
         "id_usuario"=>$row["id_usuario"],
          "usuario"=>$row["usuario"],
          "password" => $row['password'],
          "correo" => $row['correo'],
          "nombre" => $row['nombre'],
          "id_estatus" => $row['id_estatus'], 
          "id_tipo_usuario" => $row['id_tipo_usuario'],               
          "detalle"=>"<a class='btn btn-default btn-xs btn-detalles' data-id='".$row['id_usuario']."'> <span class='glyphicon glyphicon-pencil'></a>"                            
          );
       }
       $response->data = $usuarios;
       return $response;
     }

      public function extraerusuario($idusuario)
      {
       $select = $this->select();
       $select->where("id_usuario = ?", $idusuario);
       $response=new stdClass();
       $rows = $this->fetchAll($select)->toArray();
                            //$consulta = $select->__toString();
                            //echo $consulta;
                            //exit();
       $usuario = array();
       foreach ($rows as $row) {
         $usuario[] = array(
          "usuario"=>$row["usuario"],
          "password" => $row['password'],
          "correo" => $row['correo'],
          "nombre" => $row['nombre'],
          "id_estatus" => $row['id_estatus'], 
          "id_tipo_usuario" => $row['id_tipo_usuario'],     
          );
       }

       $response->data = $usuario;
       return $rows[0];
     }     

    public function actualizarusuario($id_usuario, $usuario, $nombre, $correo, $password, $tipousuario, $estatus)
    {
        $where[] = "id_usuario = '$id_usuario'";
        $update = $this->update(array(
            "usuario" => $usuario, 
            "nombre" => $nombre, 
            "correo" => $correo, 
            "password" => $password,
            "id_tipo_usuario" => $tipousuario,
            "id_estatus" => $estatus
        ), $where);

        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }

    public function insertarusuario($usuario, $nombre, $correo, $password, $tipousuario, $estatus)
    {
        $insert = $this->insert(array(
            "usuario" => $usuario, 
            "nombre" => $nombre, 
            "correo" => $correo, 
            "password" => $password,
            "id_tipo_usuario" => $tipousuario,
            "id_estatus" => $estatus
            ));
        $response = new stdClass();
        $response->validacion = true;
        return $response;
    }

}