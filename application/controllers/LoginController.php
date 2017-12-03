<?php

class LoginController extends Zend_Controller_Action
{

    public function init()
    {
         
    }

    public function indexAction()
    {
        $this->_helper->layout->setLayout('login');
    }

    public function sessionAction()
    {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();
        $usuario=$_POST['usuario'];
        $pass=$_POST['password'];
        $response = new stdClass();
        try
        {
            $login = new Application_Model_Sesion();
            $login->login($usuario,$pass);
            $response->exito="true";
        }
        catch (Exception $e)
        {
            $response->exito="false";
            $response->validacion=$e->getMessage();
        } 
        echo json_encode($response);
    }

//    public function sessionprocesosAction()
//    {
//        $this->_helper->layout->disableLayout();
//        $this->_helper->viewRenderer->setNoRender();
//        $usuario=$_POST['usuarioProceso'];
//        $pass=$_POST['passwordProceso'];
//        $response = new stdClass();
//        
//        $login = new Application_Model_SesionProcesos();
//        $result=$login->consultaSesionProceso($usuario,$pass);
//            
//        if(count($result) > 0)
//        {
//            $response->exito="true";
//            $response->usuario=$result[0]['Id_usuario'];
//        }
//        else
//        {
//            $response->exito="false";
//            $response->validacion="usuario y/o contraseña inválidos";
//        }
//        
//        echo json_encode($response);
//        exit();
//    }
    
    public function salirAction()
    {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender();

        // destroy de la sesion
        Zend_Auth::getInstance()->clearIdentity();
        //Zend_Session::namespaceUnset('mysession');
        Zend_Session::destroy();
        $front =Zend_Controller_Front :: getInstance (); 
        $baseUrl = $front -> getBaseUrl ();
        $this->render();
    }
}