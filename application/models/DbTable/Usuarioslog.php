<?php
    class Application_Model_DbTable_Usuarioslog extends Zend_Db_Table_Abstract
    {
        protected $_name = 'usuarios';
        protected $_primary='id_usuario';

        public function consultar($letra){
    
        $db = Zend_Db_Table_Abstract::getDefaultAdapter();
        $select = $db->select()
            ->from ("usuarios")
            ->where("nombre LIKE '$letra%'")
            ->order('id_usuario DESC');
        $sql = $db->query($select);
        
        return  $row = $sql->fetchAll();

    }


    }