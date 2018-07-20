<?php
    class CotizadorController extends Zend_Controller_Action
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
            $front =Zend_Controller_Front :: getInstance ();  
            $baseUrl = $front -> getBaseUrl ();
            $this->view->titulo="**Cotizador**";
            $this->view->grid="Gridclientes";
            $this->view->guardarCliente="Clientes/guardar";
            $this->view->actualizaCliente="Clientes/actualiza";
            $this->view->actualizaDir="Clientes/actualizadir";
            $this->view->tituloModal="Cotizador cajas corrugadas de cartón";
            $this->view->nomForm="clientesG";
            $this->view->identificador="cliente";
            $this->view->redireccionar=$baseUrl."/index";
            $this->view->urlGrid=$baseUrl."/Clientes/consultar";
            $this->view->consultaCliente=$baseUrl."/Clientes/consultacliente";
            $this->view->baseUrl=$baseUrl."/index";
            $this->view->consultaDireccion=$baseUrl."/Clientes/consultadireccion";
        }

        public function altasAction()
        {

        }
        
        public function proveedoresAction()
        {
            $front =Zend_Controller_Front :: getInstance ();  
            $baseUrl = $front -> getBaseUrl ();
            $this->view->titulo="**Proveedores**";
            $this->view->grid="Gridproveedores";
            $this->view->guardarCliente="../Proveedores/guardar";
            $this->view->actualizaCliente="../Proveedores/actualiza";
            $this->view->actualizaDir="../Proveedores/actualizadir";
            $this->view->tituloModal="Nuevo Proveedor";
            $this->view->nomForm="proveedorG";
            $this->view->identificador="proveedor";
            $this->view->redireccionar=$baseUrl."/index/proveedores";
            $this->view->urlGrid=$baseUrl."/Proveedores/consultar";
            $this->view->consultaCliente=$baseUrl."/Proveedores/consultaproveedor";
            $this->view->consultaDireccion=$baseUrl."/Proveedores/consultadireccion";
            $this->renderScript("index/index.phtml");
        }

        public function articulosAction()
        {
            $front =Zend_Controller_Front :: getInstance ();  
            $baseUrl = $front -> getBaseUrl ();
            $this->view->titulo="**Articulos**";
            $this->view->grid="Gridproveedores";
            $this->view->guardarArticulo="../articulos/guardar";
            $this->view->actualizaCliente="../articulos/actualiza";
            $this->view->tituloModal="Nuevo Artículo";
            $this->view->nomForm="articulosG";
            $this->view->identificador="articulo";
            $this->view->urlGrid=$baseUrl."/Articulos/consultar";
            $this->view->consultaarticulo=$baseUrl."/Articulos/consultaarticulo";
            $this->renderScript("index/articulos.phtml");
        }

        public function materialesAction()
        {
            $front =Zend_Controller_Front :: getInstance ();  
            $baseUrl = $front -> getBaseUrl ();
            $this->view->titulo="**Materiales**";
            $this->view->grid="Gridmateriales";
            $this->view->guardarMaterial="../Materiales/guardar";
            $this->view->actualizaMaterial="../Materiales/actualiza";
            $this->view->tituloModal="Nuevo Material";
            $this->view->nomForm="materialG";
            $this->view->identificador="material";
            $this->view->urlGrid=$baseUrl."/Materiales/consultar";
            $this->view->consultaMaterial=$baseUrl."/Materiales/consultamaterial";
            $this->renderScript("index/materiales.phtml");
        }

        public function maquinasAction()
        {
            $front =Zend_Controller_Front :: getInstance ();  
            $baseUrl = $front -> getBaseUrl ();
            $this->view->titulo="**Maquinas**";
            $this->view->grid="Gridmaquinas";
            $this->view->guardarCliente="Clientes/guardar";
            $this->view->tituloModal="Nueva Máquina";
            $this->view->nomForm="maquinaG";
            $this->view->identificador="maquina";
            $this->view->urlGrid=$baseUrl."/Clientes/consultar";
            $this->view->consultaCliente=$baseUrl."/Clientes/consultacliente";
            $this->renderScript("index/index.phtml");
        }
        
        public function consultarAction()
        {

        }

        public function usuarioAction()
        {
            $front =Zend_Controller_Front :: getInstance ();  
            $baseUrl = $front -> getBaseUrl ();
            $this->view->titulo="**Usuarios**";
            $this->view->grid="GridUsuarios";
            $this->view->guardarArticulo="../Usuarios/guardar";
            $this->view->actualizaCliente="../Usuarioss/actualiza";
            $this->view->tituloModal="Nuevo Artículo";
            $this->view->nomForm="articulosG";
            $this->view->identificador="articulo";
            $this->view->urlGrid=$baseUrl."/Usuarios/consultar";
            $this->view->consultaarticulo=$baseUrl."/Usuarios/consultaarticulo";
            $this->renderScript("index/usuarios.phtml");
        }
        
        public function comboarticulosinimpresionAction()
        {
            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $response=new stdClass();
            $model=new Application_Model_DbTable_Tiposcajas();
            $sinImpresion=$model->consultarSinImpresion();

            $response->articulo=$sinImpresion;
            echo json_encode($response);
        }

        public function maquilasAction()
        {
            $this->view->titulo="**Cotizador Maquilas**";
        }

        public function abrirmaquilasAction()
        {
            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();
            
            $id = $this->_request->getParam('id');
            
            $response=new stdClass();
            $objRegistro=new Application_Model_DbTable_Maquilas();
            
            $result=$objRegistro->abrir($id);
            
            if($result)
            {
                $response->rows=$result;
                $response->validacion="true";
            }
            else
            {
                $response->validacion="false";
            }

            echo json_encode($response);
        }

        public function guardarmaquilasAction()
        {
            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();
            
            $response=new stdClass();
            $objRegistro=new Application_Model_DbTable_Maquilas();
            
            foreach($_POST as $nombre_campo => $valor)
            {
                $asignacion = "\$" . $nombre_campo . "='" . $valor . "';"; 
                eval($asignacion);
            }
            //obtenemos las variables
            
            $datos=array(
                    "cantidad_cotizada"=>$cantidad_cotizada,
                    "largo"=>$largo,
                    "ancho"=>$ancho,
                    "tipo_producto"=>$tipo_producto,
                    "checkbox_empalme"=>$checkbox_empalme=isset($checkbox_empalme)?($checkbox_empalme="on")?1:0:0,
                    "checkbox_suaje_automatico"=>$checkbox_suaje_automatico=isset($checkbox_suaje_automatico)?($checkbox_suaje_automatico="on")?1:0:0,
                    "checkbox_suaje_automatico_arreglo"=>$checkbox_suaje_automatico_arreglo=isset($checkbox_suaje_automatico_arreglo)?($checkbox_suaje_automatico_arreglo="on")?1:0:0,
                    "checkbox_suaje_manual"=>$checkbox_suaje_manual=isset($checkbox_suaje_manual)?($checkbox_suaje_manual="on")?1:0:0,
                    "checkbox_suaje_manual_arreglo"=>$checkbox_suaje_manual_arreglo=isset($checkbox_suaje_manual_arreglo)?($checkbox_suaje_manual_arreglo="on")?1:0:0,
                    "checkbox_pegado_lineal_maquina"=>$checkbox_pegado_lineal_maquina=isset($checkbox_pegado_lineal_maquina)?($checkbox_pegado_lineal_maquina="on")?1:0:0,
                    "checkbox_pegado_lineal_maquina_arreglo"=>$checkbox_pegado_lineal_maquina_arreglo=isset($checkbox_pegado_lineal_maquina_arreglo)?($checkbox_pegado_lineal_maquina_arreglo="on")?1:0:0,
                    "pegado_lineal_maquina_med_min_acabado"=>$pegado_lineal_maquina_med_min_acabado,
                    "checkbox_pegado_fondo_auto_maquina"=>$checkbox_pegado_fondo_auto_maquina=isset($checkbox_pegado_fondo_auto_maquina)?($checkbox_pegado_fondo_auto_maquina="on")?1:0:0,
                    "checkbox_pegado_fondo_auto_maquina_arreglo"=>$checkbox_pegado_fondo_auto_maquina_arreglo=isset($checkbox_pegado_fondo_auto_maquina_arreglo)?($checkbox_pegado_fondo_auto_maquina_arreglo="on")?1:0:0,
                    "pegado_fondo_auto_maquina_med_min_acabado"=>$pegado_fondo_auto_maquina_med_min_acabado,
                    "checkbox_pegue_manual"=>$checkbox_pegue_manual=isset($checkbox_pegue_manual)?($checkbox_pegue_manual="on")?1:0:0,
                    "checkbox_predoblez_manual"=>$checkbox_predoblez_manual=isset($checkbox_predoblez_manual)?($checkbox_predoblez_manual="on")?1:0:0,
                    "checkbox_desbarbe"=>$checkbox_desbarbe=isset($checkbox_desbarbe)?($checkbox_desbarbe="on")?1:0:0,
                    "checkbox_empaque"=>$checkbox_empaque=isset($checkbox_empaque)?($checkbox_empaque="on")?1:0:0,
                    "total"=>$total
                );
            //print_r($datos);
            
            $result=$objRegistro->guardar($datos);
            
            if($result)
            {
                $response->id=$result;
                $response->validacion="true";
            }
            else
            {
                $response->validacion="false";
            }

            echo json_encode($response);
        }

  //////////////////////////////////////////////////////////////////////////////
  ///                                                                        ///
  ///                           COTIZADOR DE CARTON                          ///
  ///                                                                        ///
  //////////////////////////////////////////////////////////////////////////////


    public function cartonAction(){
        
        $this->view->titulo="** Cotizador de Cartón **";
    }

    public function carton2Action(){
        
        $this->view->titulo="** Cotizador de Cartón 2**";
    }    

    public function carton3Action(){
        
        $this->view->titulo="** Cotizador de Cartón 3**";
    }   

        public function buscaclientesAction(){

            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $ListaClientes = new Application_Model_DbTable_Clientes();
            $Clientes = $ListaClientes->listaclientes();

            echo Zend_Json::encode($Clientes);
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

        public function tipomaterialAction(){

            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $idTipo = $_POST['tipoMaterial'];

            $ListaMateriales = new Application_Model_DbTable_vSeleccionaMateriales();
            $Materiales = $ListaMateriales->tipos_materiales($idTipo);

            echo Zend_Json::encode($Materiales);

        }            

        public function selmatcorrugadosAction(){

            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $idMaterial = $_POST['Material'];

            $ListaMateriales = new Application_Model_DbTable_vSeleccionaMateriales();
            $Materiales = $ListaMateriales->tipos_carton($idMaterial);

            echo Zend_Json::encode($Materiales);

        }      

        public function seltamcorrugadosAction(){

            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $descripcion = $_POST['Descripcion'];

            $ListaMateriales = new Application_Model_DbTable_vSeleccionaMateriales();
            $Materiales = $ListaMateriales->tipos_tamano($descripcion);

            echo Zend_Json::encode($Materiales);

        }        

        public function seltiposcamionesAction(){

            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $ListaMateriales = new Application_Model_DbTable_vTiposCamiones();
            $Materiales = $ListaMateriales->consultar();

            echo Zend_Json::encode($Materiales);

        }       

        public function margenAction(){
            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $cant_requerida = $_POST['cant_requerida'];
            $margen = new Application_Model_DbTable_Margen();
            $porcentaje = $margen->consultar($cant_requerida);

            echo Zend_Json::encode($porcentaje);            
        }   

        public function selectproductoAction(){

            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $clasificacion = $_POST['clasificacion'];
            $clasificacion2 = $_POST['clasificacion2'];

            $ListaArticulos = new Application_Model_DbTable_Tiposcajas();
            $articulos = $ListaArticulos->selectproducto($clasificacion, $clasificacion2);

            echo Zend_Json::encode($articulos);

        }

        public function cotizadorprocesosAction(){

            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $clasificacion = $_POST['clasificacion'];
            $clasificacion2 = $_POST['clasificacion2'];
            $tipoproducto = $_POST['tipoproducto'];

            $ListaProcesos = new Application_Model_DbTable_Tiposcajas();
            $procesos = $ListaProcesos->cotizadorprocesos($clasificacion, $clasificacion2, $tipoproducto);

            echo Zend_Json::encode($procesos);
        }  

        public function detallecamionesAction(){

            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            $tipo_camion = $_POST['tipo_camion'];

            $ListaArticulos = new Application_Model_DbTable_vTiposCamiones();
            $articulos = $ListaArticulos->detallecamiones($tipo_camion);

            echo Zend_Json::encode($articulos);
        }                         

        public function guardarcotizacionAction(){
            $this->_helper->layout->disableLayout();
            $this->_helper->viewRenderer->setNoRender();

            @$datos = array(

                'fecha_emision'=>$_POST['fecha_emision'],
                'id_cotizacion'=>$_POST['id_cotizacion'],
                'nombre_cliente'=>$_POST['nombre_cliente'],
                'nombre_trabajo'=>$_POST['nombre_trabajo'],                
                'cant_requerida'=>$_POST['cant_requerida'],
                'med_frente'=>$_POST['med_frente'],
                'med_fondo'=>$_POST['med_fondo'],
                'med_alto'=>$_POST['med_alto'],
                'med_lamina'=>$_POST['med_lamina'],
                'm2_requeridos'=>$_POST['m2_requeridos'],
                'med_largo'=>$_POST['med_largo'],
                'med_ancho'=>$_POST['med_ancho'],
                'm2_xcaja'=>$_POST['m2_xcaja'],
                'tipo_medida'=>$_POST['tipo_medida'],
                'no_tintas'=>$_POST['no_tintas'],
                't1_largo'=>$_POST['t1_largo'],
                't1_ancho'=>$_POST['t1_ancho'],
                't1_res'=>$_POST['t1_res'],
                't2_largo'=>$_POST['t2_largo'],
                't2_ancho'=>$_POST['t2_ancho'],
                't2_res'=>$_POST['t1_res'],
                't3_largo'=>$_POST['t3_largo'],
                't3_ancho'=>$_POST['t3_ancho'],
                't3_res'=>$_POST['t1_res'],
                't4_largo'=>$_POST['t4_largo'],
                't4_ancho'=>$_POST['t4_ancho'],
                't4_res'=>$_POST['t1_res'],
                'total_tinta'=>$_POST['total_tinta'],
                'tipo_suajado'=>$_POST['tipo_suajado'],
                'cm_suaje'=>$_POST['cm_suaje'],
                'articulo'=>$_POST['articulo'],
                'selector_material'=>$_POST['selector_material'],
                'tipo_material'=>$_POST['tipo_material'],
                'tipo_producto'=>$_POST['tipo_producto'],
                'carton'=>$_POST['carton'],
                'tam_carton'=>$_POST['tam_carton'],
                'imp_merma'=>$_POST['imp_merma'],
                'imp_arreglo'=>$_POST['imp_arreglo'],
                'imp_tiro'=>$_POST['imp_tiro'],
                'imp_cunit'=>$_POST['imp_cunit'],
                'refilado_merma'=>$_POST['refilado_merma'],
                'refilado_arreglo'=>$_POST['refilado_arreglo'],
                'refilado_tiro'=>$_POST['refilado_tiro'],
                'refilado_cunit'=>$_POST['refilado_cunit'],
                'rayado_merma'=>$_POST['rayado_merma'],
                'rayado_arreglo'=>$_POST['rayado_arreglo'],
                'rayado_tiro'=>$_POST['rayado_tiro'],
                'rayado_cunit'=>$_POST['rayado_cunit'],
                'flexo_merma'=>$_POST['flexo_merma'],
                'flexo_arreglo'=>$_POST['flexo_arreglo'],
                'flexo_tiro'=>$_POST['flexo_tiro'],
                'flexo_cunit'=>$_POST['flexo_cunit'],
                'caiman_merma'=>$_POST['caiman_merma'],
                'caiman_arreglo'=>$_POST['caiman_arreglo'],
                'caiman_tiro'=>$_POST['caiman_tiro'],
                'caiman_cunit'=>$_POST['caiman_cunit'],
                'pegado_merma'=>$_POST['pegado_merma'],
                'pegado_arreglo'=>$_POST['pegado_arreglo'],
                'pegado_tiro'=>$_POST['pegado_tiro'],
                'pegado_cunit'=>$_POST['pegado_cunit'],
                'grapado_merma'=>$_POST['grapado_merma'],
                'grapado_arreglo'=>$_POST['grapado_arreglo'],
                'grapado_tiro'=>$_POST['grapado_tiro'],
                'grapado_cunit'=>$_POST['grapado_cunit'],
                'suajado_merma'=>$_POST['suajado_merma'],
                'suajado_arreglo'=>$_POST['suajado_arreglo'],
                'suajado_tiro'=>$_POST['suajado_tiro'],
                'suajado_cunit'=>$_POST['suajado_cunit'],
                'flejado_merma'=>$_POST['flejado_merma'],
                'flejado_arreglo'=>$_POST['flejado_arreglo'],
                'flejado_tiro'=>$_POST['flejado_tiro'],
                'flejado_cunit'=>$_POST['flejado_cunit'],
                'entarimado_merma'=>$_POST['entarimado_merma'],
                'entarimado_arreglo'=>$_POST['entarimado_arreglo'],
                'entarimado_tiro'=>$_POST['entarimado_tiro'],
                'entarimado_cunit'=>$_POST['entarimado_cunit'],
                'total_merma'=>$_POST['total_merma'],
                'total_arreglo'=>$_POST['total_arreglo'],
                'total_tiro'=>$_POST['total_tiro'],
                'total_cunit'=>$_POST['total_cunit'],
                'cant_producir'=>$_POST['cant_producir'],
                'm2_req'=>$_POST['m2_req'],
                'costo_m2'=>$_POST['costo_m2'],
                'consumo_tinta'=>$_POST['consumo_tinta'],
                'costo_carton'=>$_POST['costo_carton'],
                'costo_tinta'=>$_POST['costo_tinta'],
                'costo_cirel'=>$_POST['costo_cirel'],
                'costo_suaje'=>$_POST['costo_suaje'],
                'total_material'=>$_POST['total_material'],
                'tipo_camion1'=>$_POST['tipo_camion1'],
                'tipo_camion2'=>$_POST['tipo_camion2'],
                'tipo_camion3'=>$_POST['tipo_camion3'],
                'capacidad1'=>$_POST['capacidad1'],
                'capacidad2'=>$_POST['capacidad2'],
                'capacidad3'=>$_POST['capacidad3'],
                'costo_viaje1'=>$_POST['costo_viaje1'],
                'costo_viaje2'=>$_POST['costo_viaje2'],
                'costo_viaje3'=>$_POST['costo_viaje3'],
                'num_viajes1'=>$_POST['num_viajes1'],
                'num_viajes2'=>$_POST['num_viajes2'],
                'num_viajes3'=>$_POST['num_viajes3'],
                'costo_envio1'=>$_POST['costo_envio1'],
                'costo_envio2'=>$_POST['costo_envio2'],
                'costo_envio3'=>$_POST['costo_envio3'],
                'total_enviado'=>$_POST['total_enviado'],
                'difvs_pedido'=>$_POST['difvs_pedido'],
                'total_envio'=>$_POST['total_envio'],              
                'importe'=>$_POST['importe'],
                'margen'=>$_POST['margen'],
                'por_margen'=>$_POST['por_margen'],
                'punitario'=>$_POST['punitario'],
                'total'=>$_POST['total']

            );

            $guarda = new Application_Model_DbTable_CotizadorCarton();
            $guardar = $guarda->guardarcotizacion($datos);

            echo Zend_Json::encode($guardar);                                      
        }

    }