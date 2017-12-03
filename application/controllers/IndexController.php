<?php

class IndexController extends Zend_Controller_Action
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
            $this->view->titulo="**Clientes**";
            $this->view->grid="Gridclientes";
            $this->view->gridDirecciones="gridDirecciones";
            $this->view->guardarCliente="Clientes/guardar";
            $this->view->actualizaCliente="Clientes/actualiza";
            $this->view->actualizaDir="Clientes/actualizadir";
            $this->view->tituloModal="Nuevo Cliente";
            $this->view->nomForm="clientesG";
            $this->view->identificador="cliente";
            $this->view->redireccionar=$baseUrl."/index";
            $this->view->urlGrid=$baseUrl."/Clientes/consultar";
            $this->view->consultaCliente=$baseUrl."/Clientes/consultacliente";
            $this->view->baseUrl=$baseUrl."/index";
            $this->view->consultaDireccion=$baseUrl."/Clientes/consultadireccion";
            $this->view->urlDireccion=$baseUrl."/Clientes/todasdireccion";

            
            $this->renderScript("index/index.phtml");

    }
    public function altasAction(){
        
    }
    public function proveedoresAction(){
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

     public function articulosAction(){
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
    public function materialesAction(){
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

     public function maquinasAction(){
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
    public function consultarAction(){
      


      
    }

    public function usuarioAction(){

        $front =Zend_Controller_Front :: getInstance ();  
        $baseUrl = $front -> getBaseUrl ();
        $this->view->titulo="**Usuarios**";
        $this->view->grid="GridUsuarios";
        $this->view->guardarArticulo="../Usuarios/guardar";
        $this->view->actualizaCliente="../Usuarios/actualiza";
        $this->view->tituloModal="Nuevo Artículo";
        $this->view->nomForm="articulosG";
        $this->view->identificador="usuarios";
        $this->view->urlGrid=$baseUrl."/Usuarios/consultar";
        $this->view->consultaarticulo=$baseUrl."/Usuarios/consultaarticulo";
        $this->renderScript("index/usuarios.phtml");
      
    }


    public function consultadireccionesclienteAction()
    {
        $front =Zend_Controller_Front :: getInstance ();  
        $baseUrl = $front -> getBaseUrl ();

        $this->view->titulo="**Direcciones de Cliente**";

        //consultamos el nombre del cliente
        $model=new Application_Model_DbTable_Clientes();
        $clientes=$model->consultarCliente($_REQUEST['cliente']);

        $this->view->nombreCliente=$clientes[0]['rcomercial'];
        $this->view->grid="GridDireccionesClientes";
        $this->view->guardarArticulo="../Usuarios/guardar";
        $this->view->actualizaCliente="../Usuarioss/actualiza";
        $this->view->actualizaDir="../Clientes/actualizadir";
        $this->view->tituloModal="Nueva Dirección";
        $this->view->nomForm="direccionesG";
        $this->view->identificador="direccion";
        $this->view->baseUrl=$baseUrl."/index/consultadireccionescliente?cliente=".$_REQUEST['cliente'];
        $this->view->urlGrid=$baseUrl."/Direcciones/consultar?cliente=".$_REQUEST['cliente'];
        $this->view->consultaDireccion=$baseUrl."/Direcciones/consultadirecciondetalle";
        $this->view->cliente=$_REQUEST['cliente'];
        $this->view->redireccionar=$baseUrl."/index/consultadireccionescliente?cliente=".$_REQUEST['cliente'];
        $this->view->regresar=$baseUrl."/index";
        $this->renderScript("index/direccioncliente.phtml");


    }
    public function consultadireccionesproveedorAction()
    {
        $front =Zend_Controller_Front :: getInstance ();  
        $baseUrl = $front -> getBaseUrl ();

        $this->view->titulo="**Direcciones de Proveedor**";

        //consultamos el nombre del cliente
        $model=new Application_Model_DbTable_Proveedores();
        $clientes=$model->consultarProveedor($_REQUEST['proveedor']);
        $this->view->nombreCliente=$clientes[0]['rcomercial'];
        $this->view->grid="GridDireccionesProveedores";
        $this->view->guardarArticulo="../Usuarios/guardar";
        $this->view->actualizaCliente="../Usuarioss/actualiza";
        $this->view->actualizaDir="../Proveedores/actualizadir";
        $this->view->tituloModal="Nueva Dirección";
        $this->view->nomForm="direccionesG";
        $this->view->identificador="direccion";
        $this->view->baseUrl=$baseUrl."/index/consultadireccionesproveedor?proveedor=".$_REQUEST['proveedor'];
        $this->view->urlGrid=$baseUrl."/Direcciones/consultarproveedores?proveedor=".$_REQUEST['proveedor'];
        $this->view->consultaDireccion=$baseUrl."/Proveedores/consultadirecciondetalle";
        $this->view->cliente=$_REQUEST['proveedor'];
        $this->view->redireccionar=$baseUrl."/index/consultadireccionesproveedor?proveedor=".$_REQUEST['proveedor'];
        $this->view->regresar=$baseUrl."/index/proveedores";
        $this->renderScript("index/direccionproveedor.phtml");


        


    }

    public function cacheAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();

        include '../library/Zend/Cache/Backend/WinCache.php';

            $frontendOptions = array(
               'lifetime' => null,
               'automatic_serialization' => true
            );
            $backendOptions = array(
                'cache_dir' => 'temp/'
            );
            $cache = Zend_Cache::factory('Core', 'File', $frontendOptions, $backendOptions);

            //$idCompara =$_GET['tabla'];
            $id='rs';

           


            echo $id;
           //eliminar la variable de caché
            //$cache->remove($id);
             
            
            //echo $start_time =microtime(true);

           // echo $cache->load($id);

            if(!($data =$cache->load($id)))
            {
                echo "Sin Cache<br />";
                mysql_connect('localhost', 'root', '');
                mysql_select_db('viveros');
                $query = "select * from clientes";
                $rs = mysql_query($query);
                $data = array();
                while($row = mysql_fetch_assoc($rs))
                {
                    $data[] = $row;
                }
                $cache->save($data);
            }
            else
            {
                    $data = $cache->load($id);
                    echo "Corriendo con Cache<br />";
            }
            

            print_r($data);
          //  echo sprintf('%01.4f', microtime(true) – $start_time);


                }

         public function cachedosAction(){

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();

        include '../library/Zend/Cache/Backend/WinCache.php';

            $frontendOptions = array(
               'lifetime' => 1000,
               'automatic_serialization' => true
            );
            $backendOptions = array(
                'cache_dir' => 'temp/'
            );
            $cache = Zend_Cache::factory('Core', 'File', $frontendOptions, $backendOptions);

            //$idCompara =$_GET['tabla'];
            $id='rm';
            //$cache->remove($id);
           


           /*

            $cache->remove($CacheName);
        $cache->remove($CacheName);
Si desea limpiar los elementos de caché obsoletos, a continuación, llame al clean()método:

$cache->clean(Zend_Cache::CLEANING_MODE_OLD);
Para eliminar todos los elementos de la memoria caché:

$cache->clean(Zend_Cache::CLEANING_MODE_ALL);

           */


            echo $id;
           //eliminar la variable de caché
            //$cache->remove($id);
             
            
            //echo $start_time =microtime(true);

           // echo $cache->load($id);

            if(!($data =$cache->load($id)))
            {
                echo "Sin Cache<br />";
                mysql_connect('localhost', 'root', '');
                mysql_select_db('viveros');
                $query = "select * from ordenes";
                $rs = mysql_query($query);
                $data = array();
                while($row = mysql_fetch_assoc($rs))
                {
                    $data[] = $row;
                }
                $cache->save($data);
            }
            else
            {
                    $data = $cache->load($id);
                    echo "Corriendo con Cache<br />";
            }
            

            print_r($data);
          //  echo sprintf('%01.4f', microtime(true) – $start_time);


                } 

}