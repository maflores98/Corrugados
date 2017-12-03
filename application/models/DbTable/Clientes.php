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

    public function guardar($datos)
    {
        return $this->insert($datos);
    }
    
    public function actualizar($datos,$id){
      //$datos=array("Id_stComponente"=>20, "Fecha_Inicio"=>date("Y-m-d H:i:S"));
      $where = "id_cliente=$id";
      return $this->update($datos, $where);
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
    
    
}