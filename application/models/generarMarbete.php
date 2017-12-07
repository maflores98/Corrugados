<?php 

use setasign\Fpdi\Fpdi;
use setasign\Fpdi\PdfReader;

require_once('../../public/pdf/fpdf/fpdf.php');
require_once('../../public/pdf/fpdi/src/autoload.php');	
require "conexion.php";

$idorden = $_GET['orden'];
$response = new stdClass();
$impMarbete = array();

$sql="SELECT id_orden,nombre_trabajo,nombre_maquina,nombre_proceso FROM detalle_procesos WHERE id_orden = $idorden";
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

		//No. Orden
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(145, 36);
		$pdf->Write(0, $impMarbete[0]["id_orden"]);

		//Trabajo
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(27, 65);
		$pdf->Write(0, $impMarbete[0]["nombre_trabajo"]);

		//Cliente
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(27, 93);
		$pdf->Write(0, 'Cliente');

		//Proceso 1
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 132);
		$pdf->Write(0, "Refilado");

		//Proceso 2
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 141);
		$pdf->Write(0, "Rayado");

		//Proceso 3
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 151);
		$pdf->Write(0, utf8_decode("Impresión"));

		//Proceso 4
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 160);
		$pdf->Write(0, "Ranuradao");

		//Proceso 5
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 169);
		$pdf->Write(0, "Suajado");

		//Proceso 6
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 179);
		$pdf->Write(0, "Pegado");

		//Proceso 7
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 188);
		$pdf->Write(0, "Grapado");

		//Proceso 8
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 198);
		$pdf->Write(0, "Empalme");

		//Maquina 1
		//$pdf->SetFont('Arial','B','12');
		//$pdf->SetTextColor(0, 0, 0);
		//$pdf->SetXY(50, 132);
		//$pdf->Write(0, $impMarbete[0]["nombre_maquina"]);	

		//Proceso 2
		//$pdf->SetFont('Arial','B','12');
		//$pdf->SetTextColor(0, 0, 0);
		//$pdf->SetXY(23, 141);
		//$pdf->Write(0, $impMarbete[$i]["nombre_proceso"]);

		//Maquina 2
		//$pdf->SetFont('Arial','B','12');
		//$pdf->SetTextColor(0, 0, 0);
		//$pdf->SetXY(50, 141);
		//$pdf->Write(0, $impMarbete[$i]["nombre_maquina"]);
		$pdf->Output();
	}

?>