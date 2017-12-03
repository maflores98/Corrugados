<?php

class DireccionesController extends Zend_Controller_Action
{

    public function init()
    {
        $auth = Zend_Auth::getInstance(); 
        if (!$auth->hasIdentity())
        { 
            $this->_redirect('login'); 
        }
    }

    public function indexAction()
    {

      //$model = new Application_Model_DbTable_Menu();
      //$crearmenu  = new Zend_Session_Namespace('crearmenu');
      //$crearmenu->menu = $model->Buscar();


    }
    
    public function consultarAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();

        $letra=($_REQUEST['valor'] != 'null') ? $_REQUEST['valor'] : ''; 
       

        $model=new Application_Model_DbTable_direccionesClientes();
        $clientes=$model->TodasDireccion($_REQUEST['cliente'],$letra);

       // print_r($clientes);
        $datos=array();
        $response=new stdClass();

        foreach ($clientes as $valor) {
$datos[]=array($valor['id_direccion'],$valor['calle'],$valor['colonia'],$valor['ciudad'],$valor['municipio'],$valor['estado'],$valor['cp'],"<textarea rows='2' cols='40'>".$valor['nota']."</textarea>",$valor['id_estatus'] );
         
        }

        
        $response->data=$datos;
        echo json_encode($response);

      
    }
    public function consultarproveedoresAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();

        $letra=($_REQUEST['valor'] != 'null') ? $_REQUEST['valor'] : ''; 
       

        $model=new Application_Model_DbTable_direccionesProveedores();
        $clientes=$model->TodasDireccion($_REQUEST['proveedor'],$letra);

       // print_r($clientes);
        $datos=array();
        $response=new stdClass();

        foreach ($clientes as $valor) {
$datos[]=array($valor['id_direccion'],$valor['calle'],$valor['colonia'],$valor['ciudad'],$valor['municipio'],$valor['estado'],$valor['cp'],"<textarea rows='2' cols='40'>".$valor['nota']."</textarea>",$valor['id_estatus'] );
         
        }

        
        $response->data=$datos;
        echo json_encode($response);

      
    }

    public function consultadirecciondetalleAction(){
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $model=new Application_Model_DbTable_direccionesClientes();
        $post=$this->getRequest()->getPost();
        $datos=array();
        $response=new stdClass();

        $post=$this->getRequest()->getPost();
        $direcciones=$model->consultarDireccion($post['direccion']);

        foreach ($direcciones as $valor) {
         $datos[]=array(
            "id_direccion"=>$valor['id_direccion'],
            "id_cliente"=>$valor['id_cliente'],
            "id_tipodireccion"=>$valor['id_tipodireccion'],
            "estatusDir"=>$valor['id_estatus'],
            "calle"=>$valor['calle'],
            "colonia"=>$valor['colonia'],
            "ciudad"=>$valor['ciudad'],
            "municipio"=>$valor['municipio'],
            "estado"=>$valor['estado'],
            "cp"=>$valor['cp'],
            "nota"=>$valor['nota']


            );
        }



  
        $response->datos=$direcciones;
        echo json_encode($response);

    }

    public function consultadireccionAction(){
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $model=new Application_Model_DbTable_direccionesClientes();
        $post=$this->getRequest()->getPost();


        $clientes=$model->consultarDireccionCliente($post['idCliente']);

        $datos=array();
        $response=new stdClass();

        foreach ($clientes as $valor) {
         $datos[]=array(
            "id_direccion"=>$valor['id_direccion'],
            "id_tipodireccion"=>$valor['id_tipodireccion'],
            "estatusDir"=>$valor['id_estatus'],
            "calle"=>$valor['calle'],
            "colonia"=>$valor['colonia'],
            "ciudad"=>$valor['ciudad'],
            "municipio"=>$valor['municipio'],
            "estado"=>$valor['estado'],
            "cp"=>$valor['cp'],
            "nota"=>$valor['nota']


            );
        }
         $response->datos=$datos;
        echo json_encode($response);

        
    }
     public function todasdireccionAction(){
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $model=new Application_Model_DbTable_direccionesClientes();
        $post=$this->getRequest()->getPost();

        
        $clientes=$model->TodasDireccion();

        $datos=array();
        $response=new stdClass();

        foreach ($clientes as $valor) {
$datos[]=array($valor['id_direccion'],$valor['id_estatus'],$valor['calle'],$valor['colonia'],$valor['ciudad'],$valor['municipio'],$valor['estado'],$valor['cp'],$valor['nota']


            );


        }
         $response->datos=$datos;
        echo json_encode($response);

        
    }


    public function guardarAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $datos=$this->getRequest()->getPost();


        //print_r($datos);
        $model=new Application_Model_DbTable_Clientes();
        $clientes=$model->guardar($datos);

       // echo $clientes;


        $response=new stdClass();
        $response->idCliente=$clientes;
        $response->insert="true";

        echo json_encode($response);


    }
    public function actualizaAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $datos=$this->getRequest()->getPost();
        $id=$datos['id_cliente'];

        $model=new Application_Model_DbTable_Clientes();
        $clientes=$model->actualizar($datos,$id);

      
        $response=new stdClass();
        //$response->idCliente=$clientes;
        $response->insert="true";

        echo json_encode($response);


    }

    public function actualizadirAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $datos=$this->getRequest()->getPost();

        

        $id=$datos['id_cliente'];

        $model=new Application_Model_DbTable_direccionesClientes();
        //consultar si existe dirección
        $existe=$model->consultarDireccion($id);
        if(count($existe)>0){
             $clientes=$model->actualizar($datos,$id);
        }
        else{
           
            $clientes=$model->guardar($datos);
        }
       
      

      
        $response=new stdClass();
       // $response->idCliente=$clientes;
        $response->insert="true";

        echo json_encode($response);

    }
     public function guardardireccionAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
       
        $datos=$this->getRequest()->getPost();
        $model=new Application_Model_DbTable_direccionesClientes();
        $clientes=$model->guardar($datos);


        echo json_encode("true");

        //print_r($datos);


    }

   

    
   
    

}