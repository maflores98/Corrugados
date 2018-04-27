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

    public function selectproducto($clasificacion, $clasificacion2)
    {

        $select = $this->select()
            //->where('id_estatus = ?', '1')
            ->where('Clasificacion = ?', $clasificacion)
            ->where('Clasificacion2 = ?', $clasificacion2);
        $rowset = $this->fetchAll($select);
                        //$consulta = $select->__toString();
                        //echo $consulta;
                        //exit();
        $UTF8 = new Application_Model_Utf8EncodeArray();
        $tiposMovi = $UTF8->encode($rowset);

        $response = new stdClass();
        $data = "";

        foreach ($tiposMovi as $row) {
            $data .= '<option value="'.$row['Id'].'" data-val="'.$row['Descripcion'].'">'.$row['Descripcion'].'</option>';          
        }
        $response = $data;
        return $data;
    }     
    
    public function cotizadorprocesos($clasificacion, $clasificacion2, $tipoproducto)
    {
        if( $clasificacion2 <= 700 )
        {        
            $select = $this->select();
            $select->where('Clasificacion = ?', $clasificacion);
            $select->where('Clasificacion2 = ?', '<= 700');
            $select->where('Descripcion = ?', $tipoproducto);
        }
        else
        {
            $select = $this->select();
            $select->where('Clasificacion = ?', $clasificacion);
            $select->where('Clasificacion2 = ?', '> 700');
            $select->where('Descripcion = ?', $tipoproducto);
        }
        $response=new stdClass();
        $rows = $this->fetchAll($select);
        //$consulta = $select->__toString();
        //echo $consulta;
        //exit();            
        $procesos = array();
        foreach ($rows as $row) 
        {
            $procesos[] = array(
                "Refilado"=>$row['Refilado'],
                "Rayado" => $row['Rayado'],
                "FlexoRanurado"=>$row['FlexoRanurado'],
                "Caiman" => $row['Caiman'],
                "Pegado"=>$row['Pegado'],
                "Grapado" => $row['Grapado'],
                "Autoarmado"=>$row['Autoarmado'],
                "Flejado" => $row['Flejado'],
                "Entarimado"=>$row['Entarimado'],
                "Impresion" => $row['Impresion']
                ); 
        }
        $response->data = $procesos;
        return $response;           
    }
}