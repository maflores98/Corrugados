<?php
use setasign\Fpdi\Fpdi;
use setasign\Fpdi\PdfReader;

require_once('fpdf/fpdf.php');
require_once('fpdi/src/autoload.php');

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
/*// initiate FPDI
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

$pdf->Output();*/

$idorden = $_POST['orden'];
$response = new stdClass();

$sql="SELECT id_orden,nombre_trabajo,nombre_maquina,nombre_proceso FROM detalle_procesos WHERE id_orden = $idorden";
$stmt=mysql_query($sql);
$num= mysql_num_rows($stmt);
                  
if ( $num >0) 
{
	for($i=0;$i<$num;$i++)
	{

		$impMarbete[] = array(
		"id_orden" => mysql_result($stmt,$i,"id_orden"),
		"trabajo" => mysql_result($stmt,$i,"nombre_trabajo"),
		"maquina" => mysql_result($stmt,$i,"nombre_maquina"),
		"proceso" => mysql_result($stmt,$i,"nombre_proceso")
		); 	

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
		$pdf->Write(0, $impMarbete[0]['id_orden']);

		//Trabajo
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(27, 65);
		$pdf->Write(0, $impMarbete[0]['trabajo']);

		//Cliente
		$pdf->SetFont('Arial','B','20');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(27, 93);
		$pdf->Write(0, 'Cliente');

		//Proceso 1
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(23, 132);
		$pdf->Write(0, $impMarbete[0]['proceso']);

		//Maquina 1
		$pdf->SetFont('Arial','B','12');
		$pdf->SetTextColor(0, 0, 0);
		$pdf->SetXY(50, 132);
		$pdf->Write(0, $impMarbete[0]['maquina']);

		//Buenos 1
		//$pdf->SetFont('Arial','B','12');
		//$pdf->SetTextColor(0, 0, 0);
		//$pdf->SetXY(82, 132);
		//$pdf->Write(0, '1');

		//Merma 1
		//$pdf->SetFont('Arial','B','12');
		//$pdf->SetTextColor(0, 0, 0);
		//$pdf->SetXY(110, 132);
		//$pdf->Write(0, '1');

		//Operador
		//$pdf->SetFont('Arial','B','12');
		//$pdf->SetTextColor(0, 0, 0);
		//$pdf->SetXY(137, 132);
		//$pdf->Write(0, 'Sergio Garcia');

		//Fecha Hora
		//$pdf->SetFont('Arial','B','12');
		//$pdf->SetTextColor(0, 0, 0);
		//$pdf->SetXY(169, 132);
		//$pdf->Write(0, '2017-12-03');

		$pdf->Output();		
	}

}

 ?>