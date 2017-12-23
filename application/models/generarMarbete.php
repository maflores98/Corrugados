<?php 

use setasign\Fpdi\Fpdi;
use setasign\Fpdi\PdfReader;

require_once('../../public/pdf/fpdf/fpdf.php');
require_once('../../public/pdf/fpdi/src/autoload.php');	
require "conexion.php";

$idorden = $_GET['orden'];
$response = new stdClass();
$impMarbete = array();

$sql="SELECT id_ordenproduccion,cliente,nombre_trabajo,cant_requerida,tipo_envio FROM v_orden_impresa WHERE id_ordenproduccion = $idorden";
$stmt=mysql_query($sql);
$rows= mysql_num_rows($stmt);
$fields = mysql_num_fields($stmt);

	while($row = mysql_fetch_array($stmt, MYSQL_ASSOC))
	{

		$impMarbete[] = $row;	

	

		// initiate FPDI
		$pdf = new Fpdi();
		// add a page
		$pdf->AddPage();
		// set the source file
		$pdf->setSourceFile('../../public/pdf/MembreteCorrugados.pdf');
		// import page 1
		$tplIdx = $pdf->importPage(1);
		// use the imported page and place it at position 10,10 with a width of 100 mm
		$pdf->useTemplate($tplIdx, 10, 10, 200);

		// now write some text above the imported page

		$pdf->SetFont('Arial','B','22');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 16);
		$pdf->Write(0, "MARBETE DE PRODUCCION");

		//No. Orden
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(145, 36);
		$pdf->Write(0, $impMarbete[0]["id_ordenproduccion"]);

		//Trabajo
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(27, 65);
		$pdf->Write(0, $impMarbete[0]["nombre_trabajo"]);

		//Cliente
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(27, 93);
		$pdf->Write(0, $impMarbete[0]["cliente"]);


		//Proceso 1
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 132);
		$pdf->Write(0, "Refilado");

		//Maquina 1
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 132);
		//$pdf->Write(0, "x");		

		//Proceso 2
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 141);
		$pdf->Write(0, "Rayado");

		//Maquina 2
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 141);
		//$pdf->Write(0, "x");		

		//Proceso 3
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 151);
		$pdf->Write(0, utf8_decode("Impresión"));

		//Maquina 3
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 151);
		//$pdf->Write(0, "x");		

		//Proceso 4
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 160);
		$pdf->Write(0, "Ranuradao");

		//Maquina 4
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 160);
		//$pdf->Write(0, "x");		

		//Proceso 5
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 169);
		$pdf->Write(0, "Suajado");

		//Maquina 5
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 169);
		//$pdf->Write(0, "x");		

		//Proceso 6
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 179);
		$pdf->Write(0, "Pegado");

		//Maquina 6
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 179);
		//$pdf->Write(0, "x");		

		//Proceso 7
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 188);
		$pdf->Write(0, "Grapado");

		//Maquina 7
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 188);
		//$pdf->Write(0, "x");		

		//Proceso 8
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 198);
		$pdf->Write(0, "Empalme");

		//Maquina 8
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 198);
		//$pdf->Write(0, "x");		

		//Cantidad requerida
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(54, 242);
		$pdf->Write(0, $impMarbete[0]["cant_requerida"]);

		//Metodo de envio
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(136, 242);
		$pdf->Write(0, $impMarbete[0]["tipo_envio"]);		

		$pdf->Output();
	}

?> 