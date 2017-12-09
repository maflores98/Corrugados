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
	
	public function clientesAction(){
		
		$this->view->titulo="** Kardex **";
	}


}

?>