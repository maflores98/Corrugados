<?php
    class Application_Model_DbTable_Maquilas extends Zend_Db_Table_Abstract
    {
        protected $_name = 'cot_maquilas';
        protected $_primary='id_cot_maq';

        public function guardar($datos)
        {
            return $this->insert($datos);
        }

        public function abrir($id)
        {
            $db = Zend_Db_Table_Abstract::getDefaultAdapter();
            $select = $db ->select()
                    ->from('cot_maquilas')
                    ->where("id_cot_maq=$id");
            
            //$sql = $select->__toString();
            //echo "$sql\n";
            
            $sql = $db->query($select);
            return  $rows = $sql->fetchAll();
        }
    }