<?php

class CatalogosController extends Zend_Controller_Action{

		public function init()
	{
		$auth = Zend_Auth::getInstance(); 
		if (!$auth->hasIdentity())
		{ 
			$this->_redirect('login'); 
		}
		
	}

///////////////////////////////////////////////////////
///						CLIENTES					///
///////////////////////////////////////////////////////

	public function clientesAction(){
		
		$this->view->titulo="** Clientes **";
	}

	public function direccionclienteAction(){
		
		$this->view->titulo="** Direcciones **";
	}

    public function llenarcombocategoriasAction()
    {
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Clientes();
		$consultar = $consulta->llenarcombocategorias();

		echo Zend_Json::encode($consultar);	    	
    }

    public function llenarcombotiposestatusAction()
    {
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Clientes();
		$consultar = $consulta->llenarcombotiposestatus();

		echo Zend_Json::encode($consultar);	    	
    }

    public function llenarcombovendedoresAction()
    {
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Clientes();
		$consultar = $consulta->llenarcombovendedores();

		echo Zend_Json::encode($consultar);	    	
    }    

	public function consultarclientesAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Clientes();
		$consultar = $consulta->consultarclientes();

		echo Zend_Json::encode($consultar);		
	}	

	public function extraerclienteAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$idcliente = $_POST["idcliente"];

		$extrae = new Application_Model_DbTable_Clientes();
		$extraer = $extrae->extraercliente($idcliente);

		echo Zend_Json::encode($extraer);			
	}

	public function actualizarclienteAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$actualizar = new Application_Model_DbTable_Clientes();
		$actualizar = $actualizar->actualizarcliente($datos);
		echo Zend_Json::encode($actualizar);
	}	

	public function insertarclienteAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$insertar = new Application_Model_DbTable_Clientes();
		$insertar = $insertar->insertarcliente($datos);
		echo Zend_Json::encode($insertar);
	}	

	public function consultardireccionclienteAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$id_cliente = $_REQUEST["idcliente"];

		$extrae = new Application_Model_DbTable_ClientesDireccion();
		$extraer = $extrae->consultardireccioncliente($id_cliente);

		echo Zend_Json::encode($extraer);			
	}

	public function extraerdireccionclienteAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$id_direccion = $_POST["id_direccion"];

		$extrae = new Application_Model_DbTable_ClientesDireccion();
		$extraer = $extrae->extraerdireccioncliente($id_direccion);

		echo Zend_Json::encode($extraer);			
	}	

	public function actualizardireccionclienteAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();
	
		$actualizar = new Application_Model_DbTable_ClientesDireccion();
		$actualizar = $actualizar->actualizardireccioncliente($datos);
		echo Zend_Json::encode($actualizar);
	}

	public function insertardireccionclienteAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$insertar = new Application_Model_DbTable_ClientesDireccion();
		$insertar = $insertar->insertardireccioncliente($datos);
		echo Zend_Json::encode($insertar);
	}

    public function tiposdireccionAction()
    {
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Clientes();
		$consultar = $consulta->tiposdireccion();

		echo Zend_Json::encode($consultar);	    	
    }	

///////////////////////////////////////////////////////
///						PROVEEDORES					///
///////////////////////////////////////////////////////	

	public function proveedoresAction(){
		
		$this->view->titulo="** Proveedores **";
	}

	public function direccionproveedorAction(){
		
		$this->view->titulo="** Direcciones **";
	}	

    public function llenarcomboproveedoresAction()
    {
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_proveedores();
		$consultar = $consulta->llenarcomboproveedores();

		echo Zend_Json::encode($consultar);	    	
    }	

	public function consultarproveedoresAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_proveedores();
		$consultar = $consulta->consultarproveedores();

		echo Zend_Json::encode($consultar);		
	}	

	public function extraerproveedorAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$id_proveedor = $_POST["id_proveedor"];

		$extrae = new Application_Model_DbTable_proveedores();
		$extraer = $extrae->extraerproveedor($id_proveedor);

		echo Zend_Json::encode($extraer);			
	}

	public function actualizarproveedorAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$actualizar = new Application_Model_DbTable_proveedores();
		$actualizar = $actualizar->actualizarproveedor($datos);
		echo Zend_Json::encode($actualizar);
	}	

	public function insertarproveedorAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$insertar = new Application_Model_DbTable_proveedores();
		$insertar = $insertar->insertarproveedor($datos);
		echo Zend_Json::encode($insertar);
	}	

	public function consultardireccionproveedorAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$id_proveedor = $_REQUEST["id_proveedor"];

		$extrae = new Application_Model_DbTable_ProveedoresDireccion();
		$extraer = $extrae->consultardireccionproveedor($id_proveedor);

		echo Zend_Json::encode($extraer);			
	}

	public function extraerdireccionproveedorAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$id_direccion = $_POST["id_direccion"];

		$extrae = new Application_Model_DbTable_ProveedoresDireccion();
		$extraer = $extrae->extraerdireccionproveedor($id_direccion);

		echo Zend_Json::encode($extraer);			
	}	

	public function actualizardireccionproveedorAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();
	
		$actualizar = new Application_Model_DbTable_ProveedoresDireccion();
		$actualizar = $actualizar->actualizardireccionproveedor($datos);
		echo Zend_Json::encode($actualizar);
	}

	public function insertardireccionproveedorAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$insertar = new Application_Model_DbTable_ProveedoresDireccion();
		$insertar = $insertar->insertardireccionproveedor($datos);
		echo Zend_Json::encode($insertar);
	}	


///////////////////////////////////////////////////////
///						MATERIALES					///
///////////////////////////////////////////////////////	

	public function materialesAction(){
		
		$this->view->titulo="** Materiales **";
	}

    public function llenarcombocategoriasmaterialesAction()
    {
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Materiales();
		$consultar = $consulta->llenarcombocategoriasMateriales();

		echo Zend_Json::encode($consultar);	    	
    }

	public function consultarmaterialesAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Materiales();
		$consultar = $consulta->consultarmateriales();

		echo Zend_Json::encode($consultar);		
	}	

	public function extraermaterialAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$idmaterial = $_POST["idmaterial"];

		$extrae = new Application_Model_DbTable_Materiales();
		$extraer = $extrae->extraermaterial($idmaterial);

		echo Zend_Json::encode($extraer);			
	}

	public function actualizarmaterialAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();		

		$actualizar = new Application_Model_DbTable_Materiales();
		$actualizar = $actualizar->actualizarmaterial($datos);
		echo Zend_Json::encode($actualizar);
	}	

	public function insertarmaterialAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$insertar = new Application_Model_DbTable_Materiales();
		$insertar = $insertar->insertarmaterial($datos);
		echo Zend_Json::encode($insertar);
	}


///////////////////////////////////////////////////////
///						USUARIOS					///
///////////////////////////////////////////////////////	

	public function usuariosAction(){
		
		$this->view->titulo="** Usuarios **";
	}

    public function llenarcombousuariosAction()
    {
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Usuarios();
		$consultar = $consulta->llenarcombousuarios();

		echo Zend_Json::encode($consultar);	    	
    }	

	public function consultarusuariosAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_Usuarios();
		$consultar = $consulta->consultarusuarios();

		echo Zend_Json::encode($consultar);		
	}	

	public function extraerusuarioAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$id_usuario = $_POST["id_usuario"];

		$extrae = new Application_Model_DbTable_Usuarios();
		$extraer = $extrae->extraerusuario($id_usuario);

		echo Zend_Json::encode($extraer);			
	}

	public function actualizarusuarioAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$actualizar = new Application_Model_DbTable_Usuarios();
		$actualizar = $actualizar->actualizarusuario($datos);
		echo Zend_Json::encode($actualizar);
	}	

	public function insertarusuarioAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$insertar = new Application_Model_DbTable_Usuarios();
		$insertar = $insertar->insertarusuario($datos);
		echo Zend_Json::encode($insertar);
	}

}

?>