<?php

class KardexController extends Zend_Controller_Action
{

	public function showAction(){
		
		$this->view->titulo="** Kardex **";
	}

	public function ordenAction(){
		$this->view->titulo="** Orden de compra **";
	}

	public function existenciaAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$existencias = new Application_Model_DbTable_vExistencias();
		$articulos = $existencias->existencias();

		echo Zend_Json::encode($articulos);

	}

	public function tiposmovimientoAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$TiposMovimientos = new Application_Model_DbTable_TiposMovAlmacen();
		$movimientos = $TiposMovimientos->movimientos();

		echo Zend_Json::encode($movimientos);

	}

	public function getarticuloAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$clave = $_POST['clave'];

		$Articulos = new Application_Model_DbTable_Materiales();
		$articulo = $Articulos->getArticulo($clave);

		echo Zend_Json::encode($articulo);

	}

	public function getallarticuloAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$Articulos = new Application_Model_DbTable_Materiales();
		$articulo = $Articulos->getallArticulo();

		echo Zend_Json::encode($articulo);

	}

	public function addmovimientoAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$datos=$this->getRequest()->getPost();

		$movimientos = new Application_Model_DbTable_Kardex();
		$movimiento = $movimientos->addMovimiento($datos);

		echo Zend_Json::encode($movimiento);

	}

	public function getmovimientosAction(){

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();

		$id_articulo = $_POST['id_articulo'];

		$movimientos = new Application_Model_DbTable_Kardex();
		$movimiento = $movimientos->getMovimientos($id_articulo);

		echo Zend_Json::encode($movimiento);

	}

}