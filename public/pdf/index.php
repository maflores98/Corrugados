<?php
use setasign\Fpdi\Fpdi;
use setasign\Fpdi\PdfReader;

require_once('fpdf/fpdf.php');
require_once('fpdi/src/autoload.php');

// initiate FPDI
$pdf = new Fpdi();
// add a page
$pdf->AddPage();
// set the source file
$pdf->setSourceFile('MembreteCorrugados.pdf');
// import page 1
$tplIdx = $pdf->importPage(1);
// use the imported page and place it at position 10,10 with a width of 100 mm
$pdf->useTemplate($tplIdx, 10, 10, 200);

// now write some text above the imported page

//No. Orden
$pdf->SetFont('Arial','B','20');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(145, 36);
$pdf->Write(0, '1001');

//Trabajo
$pdf->SetFont('Arial','B','20');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(27, 65);
$pdf->Write(0, 'This is just a simple text');

//Cliente
$pdf->SetFont('Arial','B','20');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(27, 93);
$pdf->Write(0, 'This is just a simple text');

//Proceso 1
$pdf->SetFont('Arial','B','12');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(23, 132);
$pdf->Write(0, 'Refiladora');

//Maquina 1
$pdf->SetFont('Arial','B','12');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(50, 132);
$pdf->Write(0, 'Caiman');

//Buenos 1
$pdf->SetFont('Arial','B','12');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(82, 132);
$pdf->Write(0, '1');

//Merma 1
$pdf->SetFont('Arial','B','12');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(110, 132);
$pdf->Write(0, '1');

//Operador
$pdf->SetFont('Arial','B','12');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(137, 132);
$pdf->Write(0, 'Sergio Garcia');

//Fecha Hora
$pdf->SetFont('Arial','B','12');
$pdf->SetTextColor(0, 0, 0);
$pdf->SetXY(169, 132);
$pdf->Write(0, '2017-12-03');

$pdf->Output();