<?php

class OrdenesController extends Zend_Controller_Action
{
	public function init()
	{
		$auth = Zend_Auth::getInstance(); 
		if (!$auth->hasIdentity())
		{ 
			$this->_redirect('login'); 
		}
		
	}

	public function showAction(){
		
		$this->view->titulo="** Orden de produccion **";
	}

	public function guardaordenproduccionAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		@$OrdProduccion = array(

			'id_ordenproduccion' => $_POST['id_ordenproduccion'],
			'id_ordenmaterial' => $_POST['id_ordenmaterial'],
			'id_cliente' => $_POST['id_cliente'],
			'id_usuario' => $_POST['id_usuario'],
			'id_ordencompra' => $_POST['id_ordencompra'],
			'fecha_emision' => $_POST['fecha_emision'],
			'nombre_trabajo' => $_POST['nombre_trabajo'],
			'id_cotizacion' => $_POST['id_cotizacion'],
			'fecha_requeridaentrega' => $_POST['fecha_requeridaentrega'],
			'id_estatusorden' => 1,
			'tipo_orden' => $_POST['tipo_orden'],
			'notas' => $_POST['notas']

		);

		@$datos=array(

			'id_ordenproduccion' => $_POST['id_ordenproduccion'],
			'cant_requerida' => $_POST['cant_requerida'],
			'tipo_medida' => $_POST['tipo_medida'],
			'articulo' => $_POST['articulo'],
			'tipo_producto' => $_POST['tipo_producto'],
			'selector_material' => $_POST['selector_material'],
			'tipo_material' => $_POST['tipo_material'],
			'carton' => $_POST['carton'],
			'med_frente' => $_POST['med_frente'],
			'med_fondo' => $_POST['med_fondo'],
			'med_alto' => $_POST['med_alto'],
			'med_largo' => $_POST['med_largo'],
			'med_ancho' => $_POST['med_ancho'],
			'tipo_impresion' => $_POST['tipo_impresion'],
			'num_tintas' => $_POST['num_tintas'],
			'sel_color' => $_POST['sel_color'],
			'largo_tinta1' => $_POST['largo_tinta1'],
			'ancho_tinta1' => $_POST['ancho_tinta1'],
			'largo_tinta2' => $_POST['largo_tinta2'],
			'ancho_tinta2' => $_POST['ancho_tinta2'],
			'largo_tinta3' => $_POST['largo_tinta3'],
			'ancho_tinta3' => $_POST['ancho_tinta3'],
			'largo_tinta4' => $_POST['largo_tinta4'],
			'ancho_tinta4' => $_POST['ancho_tinta4'],
			'maquina_suajado' => $_POST['maquina_suajado'],
			'med_suaje' => $_POST['med_suaje'],
			'med_cito' => $_POST['med_cito'],
			'tipo_desbarbe' => $_POST['tipo_desbarbe'],
			'tipo_pegado' => $_POST['tipo_pegado'],
			'predoblado' => $_POST['predoblado'],
			'clave_pegamento' => $_POST['clave_pegamento'],
			'pegado_con' => $_POST['pegado_con'],
			'num_grapas' => $_POST['num_grapas'],
			'maquina_ranurado' => $_POST['maquina_ranurado'],
			'proceso_refilado' => $_POST['proceso_refilado'],
			'maquina_empalme' => $_POST['maquina_empalme'],
			'num_ligas' => $_POST['num_ligas'],
			'num_fajillas' => $_POST['num_fajillas'],
			'cant_granel' => $_POST['cant_granel'],
			'cant_xpaquete' => $_POST['cant_xpaquete'],
			'cant_xcorrugado' => $_POST['cant_xcorrugado'],
			'cant_xtarima' => $_POST['cant_xtarima'],
			'esquineros' => $_POST['esquineros'],
			'emplayado' => $_POST['emplayado'],
			'impresion' => $_POST['impresion'],
			'tiempo_arreglo_impresion' => $_POST['tiempo_arreglo_impresion'],
			'tiempo_tiro_impresion' => $_POST['tiempo_tiro_impresion'],
			'tiempo_arreglo_refilado' => $_POST['tiempo_arreglo_refilado'],
			'tiempo_tiro_refilado' => $_POST['tiempo_tiro_refilado'],
			'rayado' => $_POST['rayado'],
			'tiempo_arreglo_rayado' => $_POST['tiempo_arreglo_rayado'],
			'tiempo_tiro_rayado' => $_POST['tiempo_tiro_rayado'],
			'flexo' => $_POST['flexo'],
			'tiempo_arreglo_flexo' => $_POST['tiempo_arreglo_flexo'],
			'tiempo_tiro_flexo' => $_POST['tiempo_tiro_flexo'],
			'caiman' => $_POST['caiman'],
			'tiempo_arreglo_caiman' => $_POST['tiempo_arreglo_caiman'],
			'tiempo_tiro_caiman' => $_POST['tiempo_tiro_caiman'],
			'pegado' => $_POST['pegado'],
			'tiempo_arreglo_pegado' => $_POST['tiempo_arreglo_pegado'],
			'tiempo_tiro_arreglo' => $_POST['tiempo_tiro_arreglo'],
			'grapado' => $_POST['grapado'],
			'tiempo_arreglo_grapado' => $_POST['tiempo_arreglo_grapado'],
			'tiempo_tiro_grapado' => $_POST['tiempo_tiro_grapado'],
			'suajado' => $_POST['suajado'],
			'tiempo_arreglo_suajado' => $_POST['tiempo_arreglo_suajado'],
			'tiempo_tiro_suajado' => $_POST['tiempo_tiro_suajado'],
			'flejado' => $_POST['flejado'],
			'tiempo_arreglo_flejado' => $_POST['tiempo_arreglo_flejado'],
			'tiempo_tiro_flejado' => $_POST['tiempo_tiro_flejado'],
			'entarimado' => $_POST['entarimado'],
			'tiempo_arreglo_entarimado' => $_POST['tiempo_arreglo_entarimado'],
			'tiempo_tiro_entarimado' => $_POST['tiempo_tiro_entarimado'],
			'id_camion1' => $_POST['id_camion1'],
			'id_camion2' => $_POST['id_camion2'],
			'id_camion3' => $_POST['id_camion3'],
			'cantidad_envio1' => $_POST['cantidad_envio1'],
			'cantidad_envio2' => $_POST['cantidad_envio2'],
			'cantidad_envio3' => $_POST['cantidad_envio3'],

		);

		$OrdenProd = new Application_Model_DbTable_DetalleOrdenProduccion();
		$orden = $OrdenProd->addOrden($datos, $OrdProduccion);

		echo Zend_Json::encode($orden);

	}

	public function liberaordenproduccionAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$OrdenProd = new Application_Model_DbTable_ProcesosPendientes();
		$orden = $OrdenProd->addLibera($datos);

		echo Zend_Json::encode($orden);

	}

	public function vendedoresselectAction()
	{
		$response=new stdClass();
		$objRegistro = new Application_Model_DbTable_Usuarios();
		$result=$objRegistro->vendedoresSelect();

		if($result)
		{
			$response->validacion="true";
		}
		else
		{
			$response->validacion="false";
		}

		echo json_encode($response);
	}

	public function activasAction(){		
		$this->view->titulo="** Ordenes Activas **"; 
	}        

	public function canceladasAction(){		
		$this->view->titulo="** Ordenes Canceladas **"; 
	}  	

	public function finalizadasAction(){		
		$this->view->titulo="** Ordenes Finalizadas **"; 
	}

	public function testAction(){		
		$this->view->titulo="** Ordenes Finalizadas **"; 
	} 

	public function selarticuloAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$ListaArticulos = new Application_Model_DbTable_Articulos();
		$articulos = $ListaArticulos->selarticulos();

		echo Zend_Json::encode($articulos);

	}

	public function selproductoAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$Clasificacion = $_POST['Clasificacion'];

		$ListaArticulos = new Application_Model_DbTable_Tiposcajas();
		$articulos = $ListaArticulos->selproducto($Clasificacion);

		echo Zend_Json::encode($articulos);

	}

	public function buscaclientesAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$ListaClientes = new Application_Model_DbTable_Clientes();
		$Clientes = $ListaClientes->listaclientes();

		echo Zend_Json::encode($Clientes);

	}

	public function tipomaterialAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$idTipo = $_POST['tipoMaterial'];

		$ListaMateriales = new Application_Model_DbTable_TiposMateriales();
		$Materiales = $ListaMateriales->selTipoMateriales($idTipo);

		echo Zend_Json::encode($Materiales);

	}

	public function selmaterialAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$idMaterial = $_POST['Material'];

		$ListaMateriales = new Application_Model_DbTable_Materiales();
		$Materiales = $ListaMateriales->selMateriales($idMaterial);

		echo Zend_Json::encode($Materiales);

	}

	public function consultaractivasAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_vListaOrdenes();
		$consultar = $consulta->consultaractivas();

		echo Zend_Json::encode($consultar);		
	}	

	public function consultarfinalizadasAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_vListaOrdenes();
		$consultar = $consulta->consultarfinalizadas();

		echo Zend_Json::encode($consultar);		
	}	

	public function consultarcanceladasAction(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$consulta = new Application_Model_DbTable_vListaOrdenes();
		$consultar = $consulta->consultarcanceladas();

		echo Zend_Json::encode($consultar);		
	}

	public function ordenproduccionAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id = $_POST['id_ordenproduccion'];

		$consulta = new Application_Model_DbTable_OrdenesProduccion();
		$consultar = $consulta->show($id);

		echo Zend_Json::encode($consultar);		
	}

	public function detalleordenproduccionAction(){
		
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id = $_POST['id_ordenproduccion'];

		$consulta = new Application_Model_DbTable_DetalleOrdenProduccion();
		$consultar = $consulta->show($id);

		echo Zend_Json::encode($consultar);		
	}

	public function updateordenAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		@$OrdProduccion = array(

			'id_ordenproduccion' => $_POST['id_ordenproduccion'],
			'id_ordenmaterial' => $_POST['id_ordenmaterial'],
			'id_cliente' => $_POST['id_cliente'],
			'id_ordencompra' => $_POST['id_ordencompra'],
			'fecha_emision' => $_POST['fecha_emision'],
			'nombre_trabajo' => $_POST['nombre_trabajo'],
			'id_cotizacion' => $_POST['id_cotizacion'],
			'fecha_requeridaentrega' => $_POST['fecha_requeridaentrega'],
			'id_estatusorden' => 1,
			'notas' => $_POST['notas']

		);

		@$datos=array(

			'id_ordenproduccion' => $_POST['id_ordenproduccion'],
			'cant_requerida' => $_POST['cant_requerida'],
			'tipo_medida' => $_POST['tipo_medida'],
			'articulo' => $_POST['articulo'],
			'tipo_producto' => $_POST['tipo_producto'],
			'selector_material' => $_POST['selector_material'],
			'tipo_material' => $_POST['tipo_material'],
			'carton' => $_POST['carton'],
			'med_frente' => $_POST['med_frente'],
			'med_fondo' => $_POST['med_fondo'],
			'med_alto' => $_POST['med_alto'],
			'med_largo' => $_POST['med_largo'],
			'med_ancho' => $_POST['med_ancho'],
			'tipo_impresion' => $_POST['tipo_impresion'],
			'num_tintas' => $_POST['num_tintas'],
			'largo_tinta1' => $_POST['largo_tinta1'],
			'ancho_tinta1' => $_POST['ancho_tinta1'],
			'largo_tinta2' => $_POST['largo_tinta2'],
			'ancho_tinta2' => $_POST['ancho_tinta2'],
			'largo_tinta3' => $_POST['largo_tinta3'],
			'ancho_tinta3' => $_POST['ancho_tinta3'],
			'largo_tinta4' => $_POST['largo_tinta4'],
			'ancho_tinta4' => $_POST['ancho_tinta4'],
			'maquina_suajado' => $_POST['maquina_suajado'],
			'med_suaje' => $_POST['med_suaje'],
			'med_cito' => $_POST['med_cito'],
			'tipo_desbarbe' => $_POST['tipo_desbarbe'],
			'tipo_pegado' => $_POST['tipo_pegado'],
			'predoblado' => $_POST['predoblado'],
			'clave_pegamento' => $_POST['clave_pegamento'],
			'pegado_con' => $_POST['pegado_con'],
			'num_grapas' => $_POST['num_grapas'],
			'maquina_ranurado' => $_POST['maquina_ranurado'],
			'proceso_refilado' => $_POST['proceso_refilado'],
			'maquina_empalme' => $_POST['maquina_empalme'],
			'num_ligas' => $_POST['num_ligas'],
			'num_fajillas' => $_POST['num_fajillas'],
			'cant_granel' => $_POST['cant_granel'],
			'cant_xpaquete' => $_POST['cant_xpaquete'],
			'cant_xcorrugado' => $_POST['cant_xcorrugado'],
			'cant_xtarima' => $_POST['cant_xtarima'],
			'esquineros' => $_POST['esquineros'],
			'emplayado' => $_POST['emplayado'],
			'impresion' => $_POST['impresion'],
			'tiempo_arreglo_impresion' => $_POST['tiempo_arreglo_impresion'],
			'tiempo_tiro_impresion' => $_POST['tiempo_tiro_impresion'],
			'tiempo_arreglo_refilado' => $_POST['tiempo_arreglo_refilado'],
			'tiempo_tiro_refilado' => $_POST['tiempo_tiro_refilado'],
			'rayado' => $_POST['rayado'],
			'tiempo_arreglo_rayado' => $_POST['tiempo_arreglo_rayado'],
			'tiempo_tiro_rayado' => $_POST['tiempo_tiro_rayado'],
			'flexo' => $_POST['flexo'],
			'tiempo_arreglo_flexo' => $_POST['tiempo_arreglo_flexo'],
			'tiempo_tiro_flexo' => $_POST['tiempo_tiro_flexo'],
			'caiman' => $_POST['caiman'],
			'tiempo_arreglo_caiman' => $_POST['tiempo_arreglo_caiman'],
			'tiempo_tiro_caiman' => $_POST['tiempo_tiro_caiman'],
			'pegado' => $_POST['pegado'],
			'tiempo_arreglo_pegado' => $_POST['tiempo_arreglo_pegado'],
			'tiempo_tiro_arreglo' => $_POST['tiempo_tiro_arreglo'],
			'grapado' => $_POST['grapado'],
			'tiempo_arreglo_grapado' => $_POST['tiempo_arreglo_grapado'],
			'tiempo_tiro_grapado' => $_POST['tiempo_tiro_grapado'],
			'suajado' => $_POST['suajado'],
			'tiempo_arreglo_suajado' => $_POST['tiempo_arreglo_suajado'],
			'tiempo_tiro_suajado' => $_POST['tiempo_tiro_suajado'],
			'flejado' => $_POST['flejado'],
			'tiempo_arreglo_flejado' => $_POST['tiempo_arreglo_flejado'],
			'tiempo_tiro_flejado' => $_POST['tiempo_tiro_flejado'],
			'entarimado' => $_POST['entarimado'],
			'tiempo_arreglo_entarimado' => $_POST['tiempo_arreglo_entarimado'],
			'tiempo_tiro_entarimado' => $_POST['tiempo_tiro_entarimado'],
			'id_camion1' => $_POST['id_camion1'],
			'id_camion2' => $_POST['id_camion2'],
			'id_camion3' => $_POST['id_camion3'],
			'cantidad_envio1' => $_POST['cantidad_envio1'],
			'cantidad_envio2' => $_POST['cantidad_envio2'],
			'cantidad_envio3' => $_POST['cantidad_envio3'],

		);

		$OrdenProd = new Application_Model_DbTable_DetalleOrdenProduccion();
		$orden = $OrdenProd->updateOrden($datos, $OrdProduccion, $Id);

		echo Zend_Json::encode($orden);

	}



}