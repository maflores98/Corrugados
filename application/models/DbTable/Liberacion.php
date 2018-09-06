<?php

class Application_Model_DbTable_Liberacion extends Zend_Db_Table_Abstract
{
  protected $_name = 'liberacion';
  protected $_primary='id_remision';

 public function acumuladolibera($id_orden)
 {
    $select = $this->select();
    $select->from('liberacion', new Zend_Db_Expr('IFNULL(SUM(cant_liberar),0) AS Acumulado'));
    $select->where("id_ordenproduccion = ?", $id_orden);
    $response=new stdClass();
    $rows = $this->fetchAll($select);
    //$consulta = $select->__toString();
    //echo $consulta;
    //exit();
    $acumulado = array();
    foreach ($rows as $row) {

      $acumulado[] = array(
        "acumulado"=>$row['Acumulado']
        ); 
    }
    $response->data = $acumulado;
    return $response;      
 }

 public function cantidadliberar($datos){
  date_default_timezone_set('America/Mexico_City');
  $today = new Zend_Date();
  $insert = $this->insert(array(
        "id_ordenproduccion"=>$datos["orden"],
        "cant_producir"=>$datos["cantidad"],
        "cant_liberar"=>$datos["cant_liberar"],
        "fecha_liberacion" => $today->get('YYYY-MM-dd HH:mm:ss')
  ));

    $db = Zend_Db_Table_Abstract::getDefaultAdapter();
    $row = $db->fetchrow(
        $db->select()
        ->from('liberacion',array(new Zend_Db_Expr('max(id_remision) as MaxId')))
    );

    $id_remision = $row['MaxId'];  

  $response = new stdClass();
  $response->id_remision = $id_remision;
    $response->validacion = true;
    return $response;
 } 

}