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

		$id_cliente = $_POST['id_cliente'];
		$rcomercial = $_POST['rcomercial'];
		$rfc = $_POST['rfc'];
		$telefono = $_POST['telefono'];
		$pagweb = $_POST['pagweb'];
		$categoria = $_POST['categoria'];
		$estatus = $_POST['estatus'];
		$cpago = $_POST['cpago'];
		$drevision = $_POST['drevision'];
		$contacto1 = $_POST['contacto1'];
		$mailcontacto1 = $_POST['mailcontacto1'];
		$referencia1 = $_POST['referencia1'];
		$contacto2 = $_POST['contacto2'];
		$mailcontacto2 = $_POST['mailcontacto2'];
		$referencia2 = $_POST['referencia2'];		
		$contacto3 = $_POST['contacto3'];
		$mailcontacto3 = $_POST['mailcontacto3'];
		$referencia3 = $_POST['referencia3'];
		$vendedor = $_POST['vendedor'];

		$actualizar = new Application_Model_DbTable_Clientes();
		$actualizar = $actualizar->actualizarcliente($id_cliente, $rcomercial, $rfc, $telefono, $pagweb, $categoria, $estatus, $cpago, $drevision, 
													$contacto1, $mailcontacto1, $referencia1, $contacto2, $mailcontacto2, $referencia2, $contacto3,
													$mailcontacto3, $referencia3,$vendedor);
		echo Zend_Json::encode($actualizar);
	}	

	public function insertarclienteAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$rcomercial = $_POST['rcomercial'];
		$rfc = $_POST['rfc'];
		$telefono = $_POST['telefono'];
		$pagweb = $_POST['pagweb'];
		$categoria = $_POST['categoria'];
		$estatus = $_POST['estatus'];
		$cpago = $_POST['cpago'];
		$drevision = $_POST['drevision'];
		$contacto1 = $_POST['contacto1'];
		$mailcontacto1 = $_POST['mailcontacto1'];
		$referencia1 = $_POST['referencia1'];
		$contacto2 = $_POST['contacto2'];
		$mailcontacto2 = $_POST['mailcontacto2'];
		$referencia2 = $_POST['referencia2'];		
		$contacto3 = $_POST['contacto3'];
		$mailcontacto3 = $_POST['mailcontacto3'];
		$referencia3 = $_POST['referencia3'];
		$vendedor = $_POST['vendedor'];

		$insertar = new Application_Model_DbTable_Clientes();
		$insertar = $insertar->insertarcliente($rcomercial, $rfc, $telefono, $pagweb, $categoria, $estatus, $cpago, $drevision, 
													$contacto1, $mailcontacto1, $referencia1, $contacto2, $mailcontacto2, $referencia2, $contacto3,
													$mailcontacto3, $referencia3,$vendedor);
		echo Zend_Json::encode($insertar);
	}	

///////////////////////////////////////////////////////
///						PROVEEDORES					///
///////////////////////////////////////////////////////	

	public function proveedoresAction(){
		
		$this->view->titulo="** Proveedores **";
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

		$consulta = new Application_Model_DbTable_Proveedores();
		$consultar = $consulta->consultarproveedores();

		echo Zend_Json::encode($consultar);		
	}	

	public function extraerproveedorAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$idproveedor = $_POST["idproveedor"];

		$extrae = new Application_Model_DbTable_Proveedores();
		$extraer = $extrae->extraerproveedor($idproveedor);

		echo Zend_Json::encode($extraer);			
	}

	public function actualizarproveedorAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_proveedor = $_POST['id_proveedor'];
		$rcomercial = $_POST['rcomercial'];
		$rfc = $_POST['rfc'];
		$telefono = $_POST['telefono'];
		$pagweb = $_POST['pagweb'];
		$calle = $_POST['calle'];
		$colonia = $_POST['colonia'];
		$municipio = $_POST['municipio'];
		$ciudad = $_POST['ciudad'];
		$estado = $_POST['estado'];
		$cp = $_POST['cp'];
		$categoria = $_POST['categoria'];
		$estatus = $_POST['estatus'];
		$cpago = $_POST['cpago'];
		$drevision = $_POST['drevision'];
		$contacto1 = $_POST['contacto1'];
		$mailcontacto1 = $_POST['mailcontacto1'];
		$referencia1 = $_POST['referencia1'];
		$contacto2 = $_POST['contacto2'];
		$mailcontacto2 = $_POST['mailcontacto2'];
		$referencia2 = $_POST['referencia2'];		
		$contacto3 = $_POST['contacto3'];
		$mailcontacto3 = $_POST['mailcontacto3'];
		$referencia3 = $_POST['referencia3'];

		$actualizar = new Application_Model_DbTable_Proveedores();
		$actualizar = $actualizar->actualizarproveedor($id_proveedor, $rcomercial, $rfc, $telefono, $pagweb, $calle, $colonia, $municipio, $ciudad, $estado, $cp, $categoria, $estatus, $cpago, $drevision,
                                                    $contacto1, $mailcontacto1, $referencia1, $contacto2, $mailcontacto2, $referencia2, $contacto3,
                                                    $mailcontacto3, $referencia3);
		echo Zend_Json::encode($actualizar);
	}	

	public function insertarproveedorAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$rcomercial = $_POST['rcomercial'];
		$rfc = $_POST['rfc'];
		$telefono = $_POST['telefono'];
		$pagweb = $_POST['pagweb'];
		$calle = $_POST['calle'];
		$colonia = $_POST['colonia'];
		$municipio = $_POST['municipio'];
		$ciudad = $_POST['ciudad'];
		$estado = $_POST['estado'];
		$cp = $_POST['cp'];
		$categoria = $_POST['categoria'];
		$estatus = $_POST['estatus'];
		$cpago = $_POST['cpago'];
		$drevision = $_POST['drevision'];
		$contacto1 = $_POST['contacto1'];
		$mailcontacto1 = $_POST['mailcontacto1'];
		$referencia1 = $_POST['referencia1'];
		$contacto2 = $_POST['contacto2'];
		$mailcontacto2 = $_POST['mailcontacto2'];
		$referencia2 = $_POST['referencia2'];		
		$contacto3 = $_POST['contacto3'];
		$mailcontacto3 = $_POST['mailcontacto3'];
		$referencia3 = $_POST['referencia3'];

		$insertar = new Application_Model_DbTable_Proveedores();
		$insertar = $insertar->insertarproveedor($rcomercial, $rfc, $telefono, $pagweb, $calle, $colonia, $municipio, $ciudad, $estado, $cp, $categoria, $estatus, $cpago, $drevision,
                                                    $contacto1, $mailcontacto1, $referencia1, $contacto2, $mailcontacto2, $referencia2, $contacto3,
                                                    $mailcontacto3, $referencia3);
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

		$id_material = $_POST['id_material'];
		$clave = $_POST['clave'];
		$descripcion = $_POST['descripcion'];
		$proveedor = $_POST['proveedor'];
		$categoria = $_POST['categoria'];
		$costo = $_POST['costo'];
		$unidad = $_POST['unidad'];
		$estatus = $_POST['estatus'];		

		$actualizar = new Application_Model_DbTable_Materiales();
		$actualizar = $actualizar->actualizarmaterial($id_material, $clave, $descripcion, $proveedor, $categoria, $costo, $unidad, $estatus);
		echo Zend_Json::encode($actualizar);
	}	

	public function insertarmaterialAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$clave = $_POST['clave'];
		$descripcion = $_POST['descripcion'];
		$proveedor = $_POST['proveedor'];
		$categoria = $_POST['categoria'];
		$costo = $_POST['costo'];
		$unidad = $_POST['unidad'];
		$estatus = $_POST['estatus'];

		$insertar = new Application_Model_DbTable_Materiales();
		$insertar = $insertar->insertarmaterial($clave, $descripcion, $proveedor, $categoria, $costo, $unidad, $estatus);
		echo Zend_Json::encode($insertar);
	}


///////////////////////////////////////////////////////
///						USUARIOS					///
///////////////////////////////////////////////////////	

	public function usuariosAction(){
		
		$this->view->titulo="** Usuarios **";
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
		$idusuario = $_POST["idusuario"];

		$extrae = new Application_Model_DbTable_Usuarios();
		$extraer = $extrae->extraerusuario($idusuario);

		echo Zend_Json::encode($extraer);			
	}

	public function actualizarusuarioAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_usuario = $_POST['id_usuario'];
		$usuario = $_POST['usuario'];
		$nombre = $_POST['nombre'];
		$correo = $_POST['correo'];
		$password = $_POST['password'];
		$tipousuario = $_POST['tipousuario'];
		$estatus = $_POST['estatus'];		

		$actualizar = new Application_Model_DbTable_Usuarios();
		$actualizar = $actualizar->actualizarusuario($id_usuario, $usuario, $nombre, $correo, $password, $tipousuario, $estatus);
		echo Zend_Json::encode($actualizar);
	}	

	public function insertarusuarioAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$usuario = $_POST['usuario'];
		$nombre = $_POST['nombre'];
		$correo = $_POST['correo'];
		$password = $_POST['password'];
		$tipousuario = $_POST['tipousuario'];
		$estatus = $_POST['estatus'];

		$insertar = new Application_Model_DbTable_Usuarios();
		$insertar = $insertar->insertarusuario($usuario, $nombre, $correo, $password, $tipousuario, $estatus);
		echo Zend_Json::encode($insertar);
	}

}

?>