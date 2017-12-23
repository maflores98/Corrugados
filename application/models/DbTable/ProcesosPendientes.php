<?php

class Application_Model_DbTable_ProcesosPendientes extends Zend_Db_Table_Abstract
{
  protected $_name = 'procesos_pendientes';
  protected $_primary='id';

  public function consultarenpendiente($vista)
  {
   $select = $this->select();
   $select->where("nombre_maquina IN (?)", $vista);
   $response=new stdClass();
   $rows = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
   $enproceso = array();
   foreach ($rows as $row) {

     $enproceso[] = array(
      "id"=>"<button  id='". $row["id_orden"] . "' value='". $row["id_orden"] . "' data-fila='". $row["id_orden"] . "' type='button' class='btn  btn-preview btn-primary'>". $row["id_orden"] . "</button>",
      "trabajo" => $row['nombre_trabajo'],
      "cantreq" => $row['cant_requerida'],
      "trabajo" => $row['nombre_trabajo']                                   
      );
   }
   $response->data = $enproceso;
   return $response;
 }
 
 public function extraerenpendiente($orden,$vista)
 {                             
   $select = $this->select();
   $select->where("id_orden = ?",$orden);
   $select->where("nombre_maquina IN (?)",$vista);
   $response=new stdClass();                                                                       
   $rows = $this->fetchAll($select);

   $enproceso = array();
   foreach ($rows as $row) {

     $enproceso[] = array(
       "id_orden"=> $row["id_orden"],
       "trabajo" => $row['nombre_trabajo'],
       "id_maquina" => $row['id_maquina'],
       "maquina" => $row['nombre_maquina'],
       "proceso" => $row['nombre_proceso'],
       "id_proceso" => $row['id_proceso'],
       "cantidadreq" => $row['cant_requerida'],
       "horaregistro" => $row['fechahora_registro']
       );                           
   }
   $response->data = $enproceso;
   return $response;
 }             
 
 public function copiardeprocesospendientes($maquina,$proceso)
 {

   $select = $this->select();
   $select->where("nombre_maquina = ?",$maquina);
   //$select->where("nombre_proceso = ?",$proceso);
                              //$consulta = $select->__toString();
                              //echo $consulta;
                              //exit();                               
   $response=new stdClass();
   $rows = $this->fetchAll($select);

   $copiar = array();
   foreach ($rows as $row) {

     $copiar[] = array(
       "id_orden"=> $row["id_orden"],
       "nombre_trabajo"=>$row["nombre_trabajo"],
       "id_maquina"=>$row['id_maquina'],
       "nombre_maquina"=>$row["nombre_maquina"],
       "id_proceso"=>$row["id_proceso"],
       "nombre_proceso"=>$row["nombre_proceso"],
       "cant_requerida"=>$row["cant_requerida"],
       "fechahora_registro"=>$row["fechahora_registro"]
       );
   }

   return $copiar;
 }             
 
 public function eliminarprocesoenpendiente($maquina,$proceso)
 {
   $where = array();
   $where[] = $this->getAdapter()->quoteInto('nombre_maquina = ?', $maquina);
   //$where[] = $this->getAdapter()->quoteInto('nombre_proceso = ?', $proceso);
   $delete = $this->delete($where);                                                          
                               //$delete->where("id_orden = ?", $orden);
                               //$delete = $this->delete(where('id_orden = ?',$orden));
                               //->where('id_orden = ?',$orden);
   $response = new stdClass();
   $response->validacion = true;
   return $response;
 }
 
 public function addSuajado($datos){

   return $this->insert($datos);

 }
 
 public function addPegado($datos){

   return $this->insert($datos);

 }
 
 public function addGrapado($datos){

   return $this->insert($datos);

 }
 
 public function addEnvio($datos){

   return $this->insert($datos);

 }
 
 public function addEntrega($datos){

   return $this->insert($datos);

 }
 
 public function addRanurado($datos){

   return $this->insert($datos);

 }
 
 public function addRefiladora($datos){

   return $this->insert($datos);

 }
 
 public function addEmpalme($datos){

   return $this->insert($datos);

 }
 
 public function addImpresion($datos){

   return $this->insert($datos);

 }
 
 public function addEmpaque($datos){

   return $this->insert($datos);

 }
 
 public function addLibera($datos){

   return $this->insert($datos);

 }
 
 
}