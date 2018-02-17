<?php
	
class ProduccionController extends Zend_Controller_Action
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

    }	

	public function ranuradoAction(){
		
		$this->view->titulo="** Ranurado **";
	}

	public function refiladoAction(){
		
		$this->view->titulo="** Refilado **";
	}

	public function flexoranuradoAction(){
		
		$this->view->titulo="** FlexoRanurado **";
	}	

	public function pegadodecorrugadoAction(){
		
		$this->view->titulo="** Pegado de Corrugado**";
	}	

	public function empalmadoAction(){
		
		$this->view->titulo="** Empalmado **";
	}	

	public function suajadoAction(){
		
		$this->view->titulo="** Suajado **";
	}	

	public function pegadoAction(){
		
		$this->view->titulo="** Pegado **"; 
	}

	public function consultarenpendienteAction(){
		$vista = $_REQUEST['vista'];
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_ProcesosPendientes();
		$consultar = $consulta->consultarenpendiente($vista);

		echo Zend_Json::encode($consultar);		
	}

	public function consultarenprocesoAction(){		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$vista = $_REQUEST['vista'];
		$consulta = new Application_Model_DbTable_CapturaProcesos();
		$consultar = $consulta->consultarenproceso($vista);

		echo Zend_Json::encode($consultar);

	}

	public function extraerenpendienteAction(){//
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_pendiente = $_POST['id_pendiente'];
		//$vista = $_POST['vista'];
		$extrae = new Application_Model_DbTable_ProcesosPendientes();
		$extraer = $extrae->extraerenpendiente($id_pendiente);

		echo Zend_Json::encode($extraer);

	}

	public function extraerenprocesoAction(){		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_proceso = $_POST['id_proceso'];
		$vista = $_POST['vista'];
		$extrae = new Application_Model_DbTable_CapturaProcesos();
		$extraer = $extrae->extraerenproceso($id_proceso,$vista);

		echo Zend_Json::encode($extraer);

	}	

	public function consultaroperadorAction(){		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$operador = $_POST['idoperador'];
		$consulta = new Application_Model_DbTable_Operadores();
		$consultar = $consulta->consultaroperador($operador);

		echo Zend_Json::encode($consultar);

	}

	//1
	public function copiarprocesoacapturaAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		

		$id_pendiente = $_POST['id_pendiente'];

		$copiadependientes = new Application_Model_DbTable_ProcesosPendientes();
		$copiardependientes = $copiadependientes->copiardeprocesospendientes($id_pendiente);
		
		$copiaacaptura = new Application_Model_DbTable_CapturaProcesos();
		$copiaracaptura = $copiaacaptura->copiaracapturaprocesos($copiardependientes);	

		echo Zend_Json::encode($copiaracaptura);	
	}

	public function iniciarprocesoAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		

		$id_detalle = $_POST['id_detalle'];

		$copiadedetalle = new Application_Model_DbTable_DetalleProcesos();
		$copiardedetalle = $copiadedetalle->copiardedetalleprocesos($id_detalle);
		
		$copiaacaptura = new Application_Model_DbTable_CapturaProcesos();
		$copiaracaptura = $copiaacaptura->copiardedetalleacaptura($copiardedetalle);			

		echo Zend_Json::encode($copiaracaptura);
	}

	public function copiaradetalleprocesosAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		

		$id_proceso = $_POST['id_proceso'];

		$copiadecaptura = new Application_Model_DbTable_CapturaProcesos();
		$copiardecaptura = $copiadecaptura->copiardecapturaprocesos($id_proceso);
		
		$copiaadetalle = new Application_Model_DbTable_DetalleProcesos();
		$copiaradetalle = $copiaadetalle->copiaradetalleprocesos($copiardecaptura);			

		echo Zend_Json::encode($copiaradetalle);	
	}
	
	public function consultaracumuladosAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_orden = $_POST['orden'];

		$consulta = new Application_Model_DbTable_vAcumulados();
		$consultar = $consulta->consultaracumulados($id_orden);
		echo Zend_Json::encode($consultar);       	
	}

	public function reportarprocesoAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_detalle = $_POST['id_detalle'];
		$idmaquina = $_POST['idmaquina'];
		$maquina = $_POST['maquina'];
		$idproceso = $_POST['idproceso'];
		$proceso = $_POST['proceso'];
		$cantidadok = $_POST['cantidadok'];
		$cantidadmerma = $_POST['cantidadmerma'];
		$tiempo = $_POST['tiemporep'];
		$notas = $_POST['notas'];
		//$fechafin = new Zend_Db_Expr('NOW()');

		$reporta = new Application_Model_DbTable_DetalleProcesos();
		$reportar = $reporta->reportarproceso($id_detalle,$idmaquina,$maquina,$idproceso,$proceso,$cantidadok,$cantidadmerma,$tiempo,$notas);
		echo Zend_Json::encode($reportar);
	}

	public function eliminarprocesoenprocesoAction(){		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_proceso = $_POST['id_proceso'];

		$elimina = new Application_Model_DbTable_CapturaProcesos();
		$eliminar = $elimina->eliminarprocesoenproceso($id_proceso);

		echo Zend_Json::encode($eliminar);
	}

	//3
	public function eliminarprocesoenpendienteAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_pendiente = $_POST['id_pendiente'];

		$elimina = new Application_Model_DbTable_ProcesosPendientes();
		$eliminar = $elimina->eliminarprocesoenpendiente($id_pendiente);

		echo Zend_Json::encode($eliminar);
	}

	//2
	public function iniciarajusteAction()
	{
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_proceso = $_POST['id_proceso'];
		$idmaquina = $_POST['idmaquina'];
		$maquina = $_POST['maquina'];
		$idproceso = $_POST['idproceso'];
		$proceso = $_POST['proceso'];	
		$idoperador = $_POST['idoperador'];
		$nombreoperador = $_POST['nombreoperador'];

		$inicia = new Application_Model_DbTable_CapturaProcesos();
		$iniciar = $inicia->iniciarajuste($id_proceso,$idmaquina,$maquina,$idproceso,$proceso,$idoperador,$nombreoperador);

		echo Zend_Json::encode($iniciar);		
	}

	public function reportarajusteAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_detalle = $_POST['id_detalle'];
		$idmaquina = $_POST['idmaquina'];
		$maquina = $_POST['maquina'];
		$idproceso = $_POST['idproceso'];
		$proceso = $_POST['proceso'];
		$cantidadok = $_POST['cantidadok'];
		$cantidadmerma = $_POST['cantidadmerma'];
		$tiempo = $_POST['tiemporep'];
		$notas = $_POST['notas'];
		//$fechafin = new Zend_Db_Expr('NOW()');

		$reporta = new Application_Model_DbTable_DetalleProcesos();
		$reportar = $reporta->reportarajuste($id_detalle,$idmaquina,$maquina,$idproceso,$proceso,$cantidadok,$cantidadmerma,$tiempo,$notas);
		echo Zend_Json::encode($reportar);
	}	

	public function actualizarprocesoAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		

		$id_proceso = $_POST['id_proceso'];
		$idproceso = $_POST['idproceso'];
		$proceso = $_POST['proceso'];

		$actualiza = new Application_Model_DbTable_CapturaProcesos();
		$actualizar = $actualiza->actualizarproceso($id_proceso,$idproceso,$proceso);
		echo Zend_Json::encode($actualizar);
	}		

}