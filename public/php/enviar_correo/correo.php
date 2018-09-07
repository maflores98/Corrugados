<?php 

date_default_timezone_set('Etc/UTC');
require 'PHPMailerAutoload.php';

$orden = $_POST['orden'];
$trabajo = $_POST['trabajo'];
$cliente = $_POST['cliente'];
$piezas = $_POST['piezas'];
$id_remision = $_POST['id_remision'];
if($_POST['tipoliberacion'] === "total"){
	$tipo = "un total de: ";	
}
else{
	$tipo = "un parcial de: ";
}

$message = "Te informamos que en Corrugados Coatitla se acaban de liberar para entrega " . $tipo . "<br><br>" .
$piezas . "</b>". " piezas" . "<br>" . 
"de la orden: #" . $orden . "<br>" . 
"del trabajo: " . $trabajo  . "<br>" . 
"del cliente: " . $cliente  . "<br>" .
"No.Remisión: " . $id_remision  . "<br><br>" .
"Favor de tramitar y enviar la factura correspondiente. <br><br>" .  	
"GRACIAS" . "<br>" .
"<b>Logistica</b>" . "<br>" .
"<b>Corrugados Coatitla, S.A de C.V.</b>" . "<br>";


	$mail = new PHPMailer;
	$mail->isSMTP();

	$mail->SMTPDebug = 0;
	$mail->Debugoutput = 'html';
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 587;
	$mail->SMTPSecure = 'tsl';
	$mail->SMTPAuth = true;
	$mail->Username = "infocorrugadosc@gmail.com";
	$mail->Password = "corcoa77";
	$mail->setFrom('infocorrugadosc@gmail.com', 'Corrugados Coatitla');
	$mail->CharSet = 'UTF-8';

	$mail->addAddress("sgarcia@litoprocess.com","Sergio Garcia");
	$mail->addAddress("maflores@litoprocess.com","Alejandro Flores");
	$mail->Subject = 'Notificación de Remisión';
	$mensaje=$message;

	$mail->msgHTML("$mensaje");
	$mail->AltBody = 'Notificación de Remisión';

	if (!$mail->send()) {
	  echo "no se envió";
	  
	} else {

	  echo "enviado";
	}


?>