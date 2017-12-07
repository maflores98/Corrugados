<?php

	$connStr 	= "mysql:host=localhost;dbname=coatitla";
	$user 		= "root";
	$pass		= "";
	$conn		= "";
	
	function sql() 
        {
            try 
            {
                $this->conn = new PDO($this->connStr,$this->user,$this->pass);
                //print_r("conectado");
                //exit;
            }
            catch(PDOException $pe) 
            {
                die('No se pudo conectar a la base de datos.');
                $pe->getMessage();
            }
            return $this->conn;
	}

    $con=mysql_connect("localhost","root","");

    if($con)
    {
        mysql_select_db("coatitla",$con);
    }
    else
    {
        die("No se pudo conectar a la base de datos.");
    }