<?php

class UsuariosController extends Zend_Controller_Action
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
        $model=new Application_Model_Usuarios();
        //$letra=$_REQUEST['valor'];
        //$letra=($_REQUEST['valor'] != 'null') ? $_REQUEST['valor'] : ''; 
        $usuarios=$model->consultar();


        $datos=array();
        $response=new stdClass();

        foreach ($usuarios as $valor) {

$datos[]=array($valor['id_usuario'],$valor['usuario'],$valor['password'],$valor['correo'],$valor['nombre'],$valor['id_estatus'],$valor['id_tipo_usuario']);
        }

        
        $response->data=$datos;
        echo json_encode($response);

      
    }

    public function consultaclienteAction(){
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $model=new Application_Model_DbTable_Clientes();
        $post=$this->getRequest()->getPost();

        $clientes=$model->consultarCliente($post['idCliente']);

        $datos=array();
        $response=new stdClass();

        foreach ($clientes as $valor) {
         $datos[]=array(
            "id_cliente"=>$valor['id_cliente'],
            "rcomercial"=>$valor['rcomercial'],
            "rfc"=>$valor['rfc'],
            "telefono"=>$valor['telefono'],
            "pagweb"=>$valor['pagweb'],
            "id_categoria"=>$valor['id_categoria'],
            "id_estatus"=>$valor['id_estatus'],
            "condpago"=>$valor['condpago'],
            "diasrevision"=>$valor['diasrevision'],
            "contacto1"=>$valor['contacto1'],
            "mailcont1"=>$valor['mailcont1'],
            "refcont1"=>$valor['refcont1'],
            "contacto2"=>$valor['contacto2'],
            "mailcont2"=>$valor['mailcont2'],
            "refcont2"=>$valor['refcont2'],
            "contacto3"=>$valor['contacto3'],
            "mailcont3"=>$valor['mailcont3'],
            "refcont3"=>$valor['refcont3'],
            "id_vendedor"=>$valor['id_vendedor']
            

            );
        }

        
        $response->datos=$datos;
        echo json_encode($response);

    }

    public function consultadireccionAction(){
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $model=new Application_Model_DbTable_direccionesClientes();
        $post=$this->getRequest()->getPost();

        $clientes=$model->consultarDireccion($post['idCliente']);

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


    public function guardarAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $datos=$this->getRequest()->getPost();


        $model=new Application_Model_Usuarios();
        $insert=$model->guardar($datos);

       // echo $clientes;


        $response=new stdClass();
        $response->usuario=$insert;
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