<?php

class Application_Model_DbTable_Tiposcajas extends Zend_Db_Table_Abstract
{
    protected $_name = 'tipos_cajas';
    protected $_primary='Id';
    
    public function consultarSinImpresion()
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("tiposcajas")
            ->where("Clasificacion='CAJAS SIN IMPRESION'");
          $sql = $db->query($select);
        
        return  $row = $sql->fetchAll();

    }
    
    public function consultarConImpresion()
    {
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("tiposcajas")
            ->where("Clasificacion='CAJAS CON IMPRESION'");
          $sql = $db->query($select);
        
        return  $row = $sql->fetchAll();

    }



    public function guardar($datos)
    {
        return $this->insert($datos);
    }
    
    public function actualizar($datos,$id){
      //$datos=array("Id_stComponente"=>20, "Fecha_Inicio"=>date("Y-m-d H:i:S"));
      $where = "id_articulo=$id";
      return $this->update($datos, $where);
    }

    public function selproducto($Clasificacion){

        $datos = $this->fetchAll(
            $this->select()
            ->where('id_estatus = ?', '1')
            ->where('Clasificacion = ?', $Clasificacion)
        );

        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposMovi = $UTF8->encode($datos);

        $response = new stdClass();

        $data = "";

        foreach ($tiposMovi as $row) {

            $data .= '<option value="'.$row['Id'].'" data-val="'.$row['Descripcion'].'">'.$row['Descripcion'].'</option>';          
        }

        $response = $data;

        return $data;

    }
    
    
}