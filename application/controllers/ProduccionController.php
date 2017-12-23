<?php
	use setasign\Fpdi\Fpdi;
	use setasign\Fpdi\PdfReader;

	require_once('pdf/fpdf/fpdf.php');
	require_once('pdf/fpdi/src/autoload.php');	
	
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

	public function extraerenpendienteAction(){		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$orden = $_POST['orden'];
		$vista = $_POST['vista'];
		$extrae = new Application_Model_DbTable_ProcesosPendientes();
		$extraer = $extrae->extraerenpendiente($orden,$vista);

		echo Zend_Json::encode($extraer);

	}

	public function extraerenprocesoAction(){		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$orden = $_POST['orden'];
		$vista = $_POST['vista'];
		$extrae = new Application_Model_DbTable_CapturaProcesos();
		$extraer = $extrae->extraerenproceso($orden,$vista);

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

	public function copiarprocesoacapturaAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		
		$maquina = $_POST['maquina'];
		$proceso = $_POST['proceso'];

		$copiadependientes = new Application_Model_DbTable_ProcesosPendientes();
		$copiardependientes = $copiadependientes->copiardeprocesospendientes($maquina,$proceso);
		
		$copiaacaptura = new Application_Model_DbTable_CapturaProcesos();
		$copiaracaptura = $copiaacaptura->copiaracapturaprocesos($copiardependientes);	

		echo Zend_Json::encode($copiaracaptura);	
	}

	public function iniciarprocesoAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		

		$id_orden = $_POST['orden'];
		$nombre_trabajo = $_POST['trabajo'];
		$idmaquina = $_POST['idmaquina'];
		$maquina = $_POST['maquina'];
		$idproceso = $_POST['idproceso'];
		$proceso = $_POST['proceso'];	
		$id_operador = $_POST['idoperador'];
		$nombre_operador = $_POST['nombreoperador'];
		$fechainicio = new Zend_Db_Expr('NOW()');


		$inicia = new Application_Model_DbTable_CapturaProcesos();
		$iniciar = $inicia->iniciarproceso($id_orden,$idmaquina,$maquina,$idproceso,$proceso,$id_operador,$nombre_operador,$fechainicio);
		echo Zend_Json::encode($iniciar);
	}

	public function copiaradetalleprocesosAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		
		$maquina = $_POST['maquina'];
		$proceso = $_POST['proceso'];

		$copiadecaptura = new Application_Model_DbTable_CapturaProcesos();
		$copiardecaptura = $copiadecaptura->copiardecapturaprocesos($maquina,$proceso);
		
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

		$idorden = $_POST['orden'];
		$maquina = $_POST['maquina'];
		$proceso = $_POST['proceso'];
		$cantidadok = $_POST['cantidadok'];
		$cantidadmerma = $_POST['cantidadmerma'];
		$tiempo = $_POST['tiempodeejec'];
		$notas = $_POST['notas'];
		$fechafin = new Zend_Db_Expr('NOW()');

		$reporta = new Application_Model_DbTable_DetalleProcesos();
		$reportar = $reporta->reportarproceso($idorden,$maquina,$proceso,$cantidadok,$cantidadmerma,$tiempo,$notas,$fechafin);
		echo Zend_Json::encode($reportar);
	}

	public function eliminarprocesoenprocesoAction(){		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$maquina = $_POST['maquina'];
		$proceso = $_POST['proceso'];

		$elimina = new Application_Model_DbTable_CapturaProcesos();
		$eliminar = $elimina->eliminarprocesoenproceso($maquina,$proceso);

		echo Zend_Json::encode($eliminar);

	}

	public function eliminarprocesoenpendienteAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$maquina = $_POST['maquina'];
		$proceso = $_POST['proceso'];

		$elimina = new Application_Model_DbTable_ProcesosPendientes();
		$eliminar = $elimina->eliminarprocesoenpendiente($maquina,$proceso);

		echo Zend_Json::encode($eliminar);
	}

	public function iniciarajusteAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		

		$id_orden = $_POST['orden'];
		$nombre_trabajo = $_POST['trabajo'];
		$idmaquina = $_POST['idmaquina'];
		$maquina = $_POST['maquina'];
		$idproceso = $_POST['idproceso'];
		$proceso = $_POST['proceso'];	
		$id_operador = $_POST['idoperador'];
		$nombre_operador = $_POST['nombreoperador'];
		$fechainicio = new Zend_Db_Expr('NOW()');


		$rep = new Application_Model_DbTable_DetalleProcesos();
		$repajuste = $rep->iniciarajuste($id_orden,$nombre_trabajo,$idmaquina,$maquina,$idproceso,$proceso,$id_operador,$nombre_operador,$fechainicio);
		echo Zend_Json::encode($repajuste);
	}

	public function existeajusteAction(){		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_orden = $_POST['orden'];
		$consulta = new Application_Model_DbTable_DetalleProcesos();
		$consultar = $consulta->existeajuste($id_orden);

		echo Zend_Json::encode($consultar);
	}

	public function reportarajusteAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$idorden = $_POST['orden'];
		$proceso = $_POST['proceso'];
		$cantreq = $_POST['cantreq'];
		$cantidadok = $_POST['cantidadok'];
		$cantidadmerma = $_POST['cantidadmerma'];
		$tiempo = $_POST['tiempodeejec'];
		$notas = $_POST['notas'];
		$fechafin = new Zend_Db_Expr('NOW()');

		$reporta = new Application_Model_DbTable_DetalleProcesos();
		$reportar = $reporta->reportarajuste($idorden,$proceso,$cantreq,$cantidadok,$cantidadmerma,$tiempo,$notas,$fechafin);
		echo Zend_Json::encode($reportar);
	}	

	public function actualizaroperadorAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		

		$id_orden = $_POST['orden'];
		$proceso = $_POST['proceso'];
		$id_operador = $_POST['idoperador'];
		$nombre_operador = $_POST['nombreoperador'];

		$actualiza = new Application_Model_DbTable_CapturaProcesos();
		$actualizar = $actualiza->actualizaroperador($id_orden,$proceso,$id_operador,$nombre_operador);
		echo Zend_Json::encode($actualizar);
	}

	public function actualizarfechainicioAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();		

		$id_orden = $_POST['orden'];
		//$proceso = $_POST['proceso'];
		$fechainicio = new Zend_Db_Expr('NOW()');

		$actualiza = new Application_Model_DbTable_CapturaProcesos();
		$actualizar = $actualiza->actualizarfechainicio($id_orden,$fechainicio);
		echo Zend_Json::encode($actualizar);
	}	

}