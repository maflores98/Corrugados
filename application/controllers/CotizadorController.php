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

            $ListaMateriales = new Application_Model_DbTable_TiposMateriales();
            $Materiales = $ListaMateriales->selTipoMateriales($idTipo);

            echo Zend_Json::encode($Materiales);

        }            

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

            $descripcion = $_POST['Descripcion'];

            $ListaMateriales = new Application_Model_DbTable_Materiales();
            $Materiales = $ListaMateriales->consultadescripcion($descripcion);

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

    }