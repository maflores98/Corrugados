<?php

class ArticulosController extends Zend_Controller_Action
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
        $model=new Application_Model_DbTable_Articulos();
        //$letra=$_REQUEST['valor'];
        $letra=($_REQUEST['valor'] != 'null') ? $_REQUEST['valor'] : ''; 
        $clientes=$model->consultar($letra);

       // print_r($clientes);
        $datos=array();
        $response=new stdClass();

        foreach ($clientes as $valor) {

$datos[]=array($valor['id_articulo'],$valor['clave'],$valor['descripcion'],$valor['id_categoria'],$valor['costo'],$valor['margen'],"$".$valor['precio'],"$".$valor['precio_anterior'],$valor['unidad'],$valor['id_estatus']);
        }

        
        $response->data=$datos;
        echo json_encode($response);

      
    }

    public function consultaarticuloAction(){
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $model=new Application_Model_DbTable_Articulos();
        $post=$this->getRequest()->getPost();

        $clientes=$model->consultarArticulo($post['id_articulo']);

        $datos=array();
        $response=new stdClass();

        foreach ($clientes as $valor) {
         $datos[]=array(
            "id_articulo"=>$valor['id_articulo'],
            "clave"=>$valor['clave'],
            "descripcion"=>$valor['descripcion'],
            "id_categoria"=>$valor['id_categoria'],
            "costo"=>$valor['costo'],
            "margen"=>$valor['margen'],
            "precio"=>$valor['precio'],
            "precio_anterior"=>$valor['precio_anterior'],
            "unidad"=>$valor['unidad'],
            "id_estatus"=>$valor['id_estatus']

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


        
        $model=new Application_Model_DbTable_Articulos();
        $clientes=$model->guardar($datos);
        $response=new stdClass();
        $response->idCliente=$clientes;
        $response->insert="true";

        echo json_encode($response);


    }
    public function actualizaAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $datos=$this->getRequest()->getPost();
        $id=$datos['id_articulo'];

        $model=new Application_Model_DbTable_Articulos();
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