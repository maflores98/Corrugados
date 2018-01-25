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
				'id_cotizacion' => $_POST['id_cotizacion'], 
				'id_cliente' => $_POST['id_cliente'], 
				'id_usuario' => $_POST['id_usuario'], 
				'id_ordencompra' => $_POST['id_ordencompra'], 
				'id_ordenmaterial' => $_POST['id_ordenmaterial'], 
				'nombre_trabajo' => $_POST['nombre_trabajo'], 
				'fecha_emision' => $_POST['fecha_emision'], 
				'fecha_requeridaentrega' => $_POST['fecha_requeridaentrega'], 
				'fecha_ultactualizacion' => $_POST['fecha_ultactualizacion'], 
				'id_estatusorden' => 1, 
				'tipo_orden' => $_POST['tipo_orden'], 
				'notas' => $_POST['notas']

			);

			@$datos=array(

				'id_partida' => $_POST['id_partida'],
				'id_ordenproduccion' => $_POST['id_ordenproduccion'],
				'cant_requerida' => $_POST['cant_requerida'],
				'cant_cmerma' => $_POST['cant_cmerma'],
				'id_material' => $_POST['id_material'],
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
				'sel_color' => $_POST['sel_color'],
				'num_tintas' => $_POST['num_tintas'],
				'largo_tinta1' => $_POST['largo_tinta1'],
				'ancho_tinta1' => $_POST['ancho_tinta1'],
				'largo_tinta2' => $_POST['largo_tinta2'],
				'ancho_tinta2' => $_POST['ancho_tinta2'],
				'largo_tinta3' => $_POST['largo_tinta3'],
				'ancho_tinta3' => $_POST['ancho_tinta3'],
				'largo_tinta4' => $_POST['largo_tinta4'],
				'ancho_tinta4' => $_POST['ancho_tinta4'],
				'color_tinta1' => $_POST['color_tinta1'],
				'color_tinta2' => $_POST['color_tinta2'],
				'color_tinta3' => $_POST['color_tinta3'],
				'color_tinta4' => $_POST['color_tinta4'],
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
				'ligas' => $_POST['ligas'],
				'num_ligas' => $_POST['num_ligas'],
				'fajillas' => $_POST['fajillas'],
				'num_fajillas' => $_POST['num_fajillas'],
				'granel' => $_POST['granel'],
				'paquetes' => $_POST['paquetes'],
				'cant_xpaquete' => $_POST['cant_xpaquete'],
				'corrugado' => $_POST['corrugado'],
				'cant_xcorrugado' => $_POST['cant_xcorrugado'],
				'tarima' => $_POST['tarima'],
				'cant_xtarima' => $_POST['cant_xtarima'],
				'esquineros' => $_POST['esquineros'],
				'emplayado' => $_POST['emplayado'],
				'impresion' => $_POST['impresion'],
				'rayado' => $_POST['rayado'],
				'flexo' => $_POST['flexo'],
				'caiman' => $_POST['caiman'],
				'pegado' => $_POST['pegado'],
				'grapado' => $_POST['grapado'],
				'suajado' => $_POST['suajado'],
				'flejado' => $_POST['flejado'],
				'cant_flejado' => $_POST['cant_flejado'],
				'entarimado' => $_POST['entarimado'],
				'tipo_envio' => $_POST['tipo_envio'],
				'tipo_entrega' => $_POST['tipo_entrega'],
				'id_camion1' => $_POST['id_camion1'],
				'id_camion2' => $_POST['id_camion2'],
				'id_camion3' => $_POST['id_camion3'],
				'cantidad_envio1' => $_POST['cantidad_envio1'],
				'cantidad_envio2' => $_POST['cantidad_envio2'],
				'cantidad_envio3' => $_POST['cantidad_envio3'],
				'cant_parc1' => $_POST['cant_parc1'],
				'cant_parc2' => $_POST['cant_parc2'],
				'cant_parc3' => $_POST['cant_parc3'],
				'cant_parc4' => $_POST['cant_parc4'],
				'cant_parc5' => $_POST['cant_parc5'],
				'cant_parc6' => $_POST['cant_parc6'],
				'cant_parc7' => $_POST['cant_parc7'],
				'cant_parc8' => $_POST['cant_parc8'],
				'fec_parc1' => $_POST['fec_parc1'],
				'fec_parc2' => $_POST['fec_parc2'],
				'fec_parc3' => $_POST['fec_parc3'],
				'fec_parc4' => $_POST['fec_parc4'],
				'fec_parc5' => $_POST['fec_parc5'],
				'fec_parc6' => $_POST['fec_parc6'],
				'fec_parc7' => $_POST['fec_parc7'],
				'fec_parc8' => $_POST['fec_parc8']

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

		/*public function selmaterialAction(){

			$this->_helper->layout->disableLayout();
			$this->_helper->viewRenderer->setNoRender();

			$idMaterial = $_POST['Material'];

			$ListaMateriales = new Application_Model_DbTable_Materiales();
			$Materiales = $ListaMateriales->selMateriales($idMaterial);

			echo Zend_Json::encode($Materiales);

		}*/

		public function selmatcorrugadosAction(){

			$this->_helper->layout->disableLayout();
			$this->_helper->viewRenderer->setNoRender();

			$idMaterial = $_POST['Material'];

			$ListaMateriales = new Application_Model_DbTable_vClasifCartones();
			$Materiales = $ListaMateriales->consultar($idMaterial);

			echo Zend_Json::encode($Materiales);

		}

		public function seltamcorrugadosAction(){

			$this->_helper->layout->disableLayout();
			$this->_helper->viewRenderer->setNoRender();

			$id = $_POST['Id'];

			$ListaMateriales = new Application_Model_DbTable_Materiales();
			$Materiales = $ListaMateriales->consultadescripcion($id);

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
				'cant_cmerma' => $_POST['cant_cmerma'],
				'id_material' => $_POST['id_material'],
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
				'med_ext_largo' => $_POST['med_ext_largo'],
				'med_ext_ancho' => $_POST['med_ext_ancho'],
				'tipo_impresion' => $_POST['tipo_impresion'],
				'sel_color' => $_POST['sel_color'],
				'num_tintas' => $_POST['num_tintas'],
				'largo_tinta1' => $_POST['largo_tinta1'],
				'ancho_tinta1' => $_POST['ancho_tinta1'],
				'largo_tinta2' => $_POST['largo_tinta2'],
				'ancho_tinta2' => $_POST['ancho_tinta2'],
				'largo_tinta3' => $_POST['largo_tinta3'],
				'ancho_tinta3' => $_POST['ancho_tinta3'],
				'largo_tinta4' => $_POST['largo_tinta4'],
				'ancho_tinta4' => $_POST['ancho_tinta4'],
				'color_tinta1' => $_POST['color_tinta1'],
				'color_tinta2' => $_POST['color_tinta2'],
				'color_tinta3' => $_POST['color_tinta3'],
				'color_tinta4' => $_POST['color_tinta4'],
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
				'ligas' => $_POST['ligas'],
				'num_ligas' => $_POST['num_ligas'],
				'fajillas' => $_POST['fajillas'],
				'num_fajillas' => $_POST['num_fajillas'],
				'granel' => $_POST['granel'],
				'paquetes' => $_POST['paquetes'],
				'cant_xpaquete' => $_POST['cant_xpaquete'],
				'corrugado' => $_POST['corrugado'],
				'cant_xcorrugado' => $_POST['cant_xcorrugado'],
				'tarima' => $_POST['tarima'],
				'cant_xtarima' => $_POST['cant_xtarima'],
				'esquineros' => $_POST['esquineros'],
				'emplayado' => $_POST['emplayado'],
				'impresion' => $_POST['impresion'],
				'rayado' => $_POST['rayado'],
				'flexo' => $_POST['flexo'],
				'caiman' => $_POST['caiman'],
				'pegado' => $_POST['pegado'],
				'grapado' => $_POST['grapado'],
				'suajado' => $_POST['suajado'],
				'flejado' => $_POST['flejado'],
				'cant_flejado' => $_POST['cant_flejado'],
				'entarimado' => $_POST['entarimado'],
				'tipo_envio' => $_POST['tipo_envio'],
				'tipo_entrega' => $_POST['tipo_entrega'],
				'id_direccionentrega' => $_POST['id_direccionentrega'],
				'id_camion1' => $_POST['id_camion1'],
				'id_camion2' => $_POST['id_camion2'],
				'id_camion3' => $_POST['id_camion3'],
				'cantidad_envio1' => $_POST['cantidad_envio1'],
				'cantidad_envio2' => $_POST['cantidad_envio2'],
				'cantidad_envio3' => $_POST['cantidad_envio3'],
				'cant_parc1' => $_POST['cant_parc1'],
				'cant_parc2' => $_POST['cant_parc2'],
				'cant_parc3' => $_POST['cant_parc3'],
				'cant_parc4' => $_POST['cant_parc4'],
				'cant_parc5' => $_POST['cant_parc5'],
				'cant_parc6' => $_POST['cant_parc6'],
				'cant_parc7' => $_POST['cant_parc7'],
				'cant_parc8' => $_POST['cant_parc8'],
				'fec_parc1' => $_POST['fec_parc1'],
				'fec_parc2' => $_POST['fec_parc2'],
				'fec_parc3' => $_POST['fec_parc3'],
				'fec_parc4' => $_POST['fec_parc4'],
				'fec_parc5' => $_POST['fec_parc5'],
				'fec_parc6' => $_POST['fec_parc6'],
				'fec_parc7' => $_POST['fec_parc7'],
				'fec_parc8' => $_POST['fec_parc8'],


			);

	$OrdenProd = new Application_Model_DbTable_DetalleOrdenProduccion();
	$orden = $OrdenProd->updateOrden($datos, $OrdProduccion);

	echo Zend_Json::encode($orden);

}

public function orderpdfAction(){

	$this->_helper->layout()->disableLayout();

	$Id = $_GET['Id'];

	$valores = new Application_Model_DbTable_vOrdenImpresa();
	$data = $valores->consultar($Id);

	$this->view->data = $data;
}

		public function marbetepdfAction(){

			$this->_helper->layout()->disableLayout();

			$Id = $_GET['Id'];

			$valores = new Application_Model_DbTable_vOrdenImpresa();
			$data = $valores->consultar($Id);

			$this->view->data = $data;
		}


}