$(document).ready(function(){
  //En todas las vistas
  var vista, operador, nombreoperador, orden, trabajo, proceso, maquina, diferencia=0, cantidadreal=0, cantreq=0, control, tiempodeejec=0, idinicio = 0,
  idajuste=0, horainicio, horaregistro, centesimas = 0, segundos = 0, minutos = 0, horas = 0, acumulado=0, mermaacumulado=0, cantidadrep=0, 
  diferenciaacum=0, cantidadmerma=0, diferenciamerma=0;
  vista= $("#vista").val();
  $("#orden").focus();
  //Ranurado
  var idranurado=0, idcaiman=0;
  //Refilado
  var idrefilado=0, idrefiladora=0, idrefiladorayado=0, idrayado=0;
  //FlexoRanurado
  var idimpresion=0, idranurado=0, idflexografica=0;
  //Pegado de Corrugado
  var idpegado=0, idpegadora=0;
  //Empalmado
  var idempalme=0, idautomatica=0, idsemiautomatica=0;
  //Suajado
  var idsuajado=0, idautomatica=0, idquijada1=0, idquijada2=0, idplana=0;
  //Pegado
  var idpegado=0, idlinealg=0, idlinealch=0;      

//==================================== RANURADO ===============================================
$("#ranurado").click(function(){
	$("#ranurado").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	idranurado = this.value;
	idajuste = 0;
});

$("#caiman").click(function(){
	$('#caiman').attr("disabled", true);
	idcaiman = this.value;
});
//==================================== REFILADO ===============================================
$("#refilado").click(function(){
	$("#refilado").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	$("#rayado").attr("disabled", false);
	$("#refilado-rayado").attr("disabled", false);        
	idrefilado = this.value;        
	idajuste = 0;
	idrayado = 0;
	idrefiladorayado = 0;
});

$("#rayado").click(function(){
	$("#rayado").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	$("#refilado").attr("disabled", false);
	$("#refilado-rayado").attr("disabled", false);
	idrayado = this.value;
	idajuste = 0;
	idrefilado = 0;
	idrefiladorayado = 0;
});

$("#refilado-rayado").click(function(){
	$("#refilado-rayado").attr("disabled", true);
	$("#rayado").attr("disabled", false);
	$('#ajuste').attr("disabled", false);
	$("#refilado").attr("disabled", false);
	idrefiladorayado = this.value;
	idajuste = 0;
	idrefilado = 0;
	idrayado = 0;
});            

$("#refiladora").click(function(){
	$('#refiladora').attr("disabled", true);
	idrefiladora = this.value;
});

//==================================== FLEXORANURADO ==========================================
$("#impresion").click(function(){
	$("#impresion").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	$("#ranurado").attr("disabled", false);
	idimpresion = this.value;        
	idajuste = 0;
	idranurado = 0;
});

$("#ranurado").click(function(){
	$("#ranurado").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	$("#impresion").attr("disabled", false);
	idranurado = this.value;
	idajuste = 0;
	idimpresion = 0;
});      

$("#flexografica").click(function(){
	$('#flexografica').attr("disabled", true);
	idflexografica = this.value;
});

//==================================== PEGADO DE CORRUGADO ====================================
$("#pegado").click(function(){
	$("#pegado").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	idpegado = this.value;
	idajuste = 0;
});

$("#pegadora").click(function(){
	$('#pegadora').attr("disabled", true);
	idpegadora = this.value;
});

//==================================== EMPALMADO ==============================================  
$("#empalme").click(function(){
	$("#empalme").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	idempalme = this.value;
	idajuste = 0;
});

$("#automatica").click(function(){
	$('#automatica').attr("disabled", true);
	$('#semiautomatica').attr("disabled", false);
	idautomatica = this.value;
	semiautomatica = 0;
});

$("#semiautomatica").click(function(){
	$('#semiautomatica').attr("disabled", true);
	$('#automatica').attr("disabled", false);
	idsemiautomatica = this.value;
	idautomatica = 0;
});

//==================================== SUAJADO ================================================  
$("#suajado").click(function(){
	$("#suajado").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	idsuajado = this.value;
	idajuste = 0;
});

$("#automatica").click(function(){
	$('#automatica').attr("disabled", true);
	$('#quijada1').attr("disabled", false);
	$('#quijada2').attr("disabled", false);
	$('#plana').attr("disabled", false);
	idautomatica = this.value;
	idquijada1 = 0;
	idquijada2 = 0;
	idplana = 0;
});

$("#quijada1").click(function(){
	$('#quijada1').attr("disabled", true);
	$('#automatica').attr("disabled", false);
	$('#quijada2').attr("disabled", false);
	$('#plana').attr("disabled", false);
	idquijada1 = this.value;
	idautomatica = 0;
	idquijada2 = 0;
	idplana = 0;
});

$("#quijada2").click(function(){
	$('#quijada2').attr("disabled", true);
	$('#automatica').attr("disabled", false);
	$('#quijada1').attr("disabled", false);
	$('#plana').attr("disabled", false);
	idquijada2 = this.value;
	idautomatica = 0;
	idquijada1 = 0;
	idplana = 0;
});

$("#plana").click(function(){
	$('#plana').attr("disabled", true);
	$('#automatica').attr("disabled", false);
	$('#quijada1').attr("disabled", false);
	$('#quijada2').attr("disabled", false);
	idplana = this.value;
	idautomatica = 0;
	idquijada1 = 0;
	idquijada2 = 0;
});      
//==================================== PEGADO ====================================      
$("#pegado").click(function(){
	$("#pegado").attr("disabled", true);
	$('#ajuste').attr("disabled", false);
	idpegado = this.value;
	idajuste = 0;
});

$("#lineal-grande").click(function(){
	$('#lineal-grande').attr("disabled", true);
	$('#lineal-chica').attr("disabled", false);
	idlinealg = this.value;
	idlinealch = 0;
});

$("#lineal-chica").click(function(){
	$('#lineal-chica').attr("disabled", true);
	$('#lineal-grande').attr("disabled", false);
	idlinealch = this.value;
	idlinealg = 0;
});

//==================================== EN TODAS LAS VISTAS ====================================
//Tablas en Proceso
var enProceso = $('#enProceso').DataTable({
	ajax:{
		url: 'consultarenproceso',
		data: {vista: vista}
	}, 
	"columns":[
	{data:"id", 
	width: "7%"},

	{data:"trabajo", 
	width: "10%"}
	],	
	//"info" : false,
	"searching": false,
	"paging":    false,
	"scrollY":   '10vh',
	"scrollX": true			
});

$('#enProceso tbody').on( 'click', 'tr', function () {
	if ( $(this).hasClass('selected') ) {
		$(this).removeClass('selected');
	}
	else {
		enProceso.$('tr.selected').removeClass('selected');
		$(this).addClass('selected');
	}
	limpiar();
	reinicio();
	orden = $(this).find('td').eq(0).html();
	extraerDatosEnProceso(orden);          
});

//Tablas en Pendiente
var enPendiente = $('#enPendiente').DataTable({
	ajax:{
		url: 'consultarenpendiente',
		"data": {vista: vista}
	}, 
	"columns":[
	{"data":"id", 
	width: "7%"},

	{"data":"trabajo", 
	width: "10%"},

	{"data":"cantreq"}	
	],
	"columnDefs": [ {
		"visible": false,
		"targets": 2
	}],		
	//"info" : false,
	"searching": false,
	"paging":    false,
	"scrollY":   '15vh',
	"scrollX": true			
});

//datos_enpendiente("#enPendiente tbody", enPendiente);

//function datos_enpendiente(tbody, table) {
	$("#enPendiente tbody").on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
		}
		else {
			enPendiente.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
		}
		limpiar();
		reinicio();
		orden = $(this).find('td').eq(0).html();
		extraerDatosEnPendiente(orden); 			
	});
//}

$("#ajuste").click(function(){
	$("#ajuste").attr("disabled", true);
	idajuste = this.value;
	//Ranurado
	$("#ranurado").attr("disabled", false);
	idranurado=0;  
	//Refilado
	$("#refilado").attr("disabled", false);
	$("#rayado").attr("disabled", false);
	$("#refilado-rayado").attr("disabled", false);
	idrefilado = 0;
	idrayado = 0;
	idrefiladorayado = 0;
	//Flexoranurado
	$("#impresion").attr("disabled", false);
	$("#ranurado").attr("disabled", false);	
	idimpresion=0;
	idranurado=0;
	//Pegado de Corrugado
	$("#pegado").attr("disabled", false);
	idpegado=0;
	//Empalme
	$("#empalme").attr("disabled", false);
	idempalme=0;
	//Suajado	 
	$("#suajado").attr("disabled", false);
	idsuajado = 0;    
	//Pegado
	$("#pegado").attr("disabled", false);  
	idpegado = 0;
});

$("#operador").change(function(){
	operador = $("#operador").val();
	obtenerOperador(operador);
});

$("#inicio").click(function(){
	if( ($("#orden").val() == "") && ($("#operador").val() == "" ) || ($("#orden").val() == "") || ($("#operador").val() == "" ) ){
		swal("Oops","Completa todos los campos","error");
	} else {
		definirProceso();
		definirMaquina();
		iniciarProceso(orden,trabajo,maquina,proceso,operador,nombreoperador);
	}
});

$("#parar").click(function(){
	if( idinicio != 1 )
	{
		swal("Oops","No puedes Parar si el proceso no ha iniciado","error");
	} else {
		parar();
		obtenerAcumulados(orden);
		$('#myModal').modal('show');
		$("#parar").attr("disabled", true);
		$("#ordenrep").val(orden);
		$("#trabajorep").val(trabajo);
		$("#tiemporep").val(tiempodeejec);
		$("#cantidadreq").val(cantreq);
		$("#cantidadreq").attr("disabled", true);
		$("#acumuladorep").attr("disabled", true);
		$("#acumuladomerma").attr("disabled", true);		
		definirProceso();
		definirMaquina();

		if( proceso == "ajuste" ){
			$("#cantidadrep").val("1");
			$("#cantidadrep").attr("disabled", true);
			$("#cantmerma").val("0");
			$("#cantmerma").attr("disabled", true);				
		}
	}
});

$("#cantidadrep").keyup(function()
{
	cantidadrep = $("#cantidadrep").val();
	if(cantidadrep != ""){
		diferenciaacum = parseInt(cantidadrep) + parseInt(acumulado);
		$("#acumuladorep").val(diferenciaacum);                
	}   
});

$("#cantmerma").keyup(function()
{
	cantidadmerma = $("#cantmerma").val();
	if(cantidadmerma != ""){
		diferenciamerma = parseInt(cantidadmerma) + parseInt(acumuladomerma);
		$("#acumuladomerma").val(diferenciamerma);      
	}
});

$("#guardar").click(function(){
	var cantidadok = $("#cantidadrep").val();
	var cantidadmerma = $("#cantmerma").val();
	var notas = $("#notas").val();
	guardarProceso(orden,tiempodeejec,cantidadok,notas,cantidadmerma);
});

$("#cancelar").click(function(){
	limpiar();
	reinicio();
});

//==================================== FUNCIONES ====================================

/*Cronometro*/
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function inicio () {
	control = setInterval(cronometro,10);
}
function parar () {
	clearInterval(control);
	tiempodeejec = horas + ":" + minutos + ":" + segundos;

}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
	}
if (centesimas == 99) {
	centesimas = -1;
}
if (centesimas == 0) {
	segundos ++;
	if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
}
if (segundos == 59) {
	segundos = -1;
}
if ( (centesimas == 0)&&(segundos == 0) ) {
	minutos++;
	if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
}
if (minutos == 59) {
	minutos = -1;
}
if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
	horas ++;
	if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
}
}

function limpiar (){
//En todas las vistas	
$('#myModal').modal('hide');
$("input[type=text]").val("");
$('#inicio').attr("disabled", false);
$('#parar').attr("disabled", false);
$("#orden").attr("disabled", false);  
$("#operador").attr("disabled", false);
$('#ajuste').attr("disabled", false);
//Ranurado y Flexoranurado
$("#ranurado").attr("disabled", false);
$("#caiman").attr("disabled", false);
//Refilado
$("#refilado").attr("disabled", false);
$("#rayado").attr("disabled", false);
$("#refilado-rayado").attr("disabled", false);
$("#refiladora").attr("disabled", false);
//Flexoranurado
$("#impresion").attr("disabled", false);
$("#flexografica").attr("disabled", false); 
//Pegado de Corrugado
$("#pegadora").attr("disabled", false);
//Empalmado
$("#empalme").attr("disabled", false);
$('#automatica').attr("disabled", false);
$('#semiautomatica').attr("disabled", false);	
//Suajado
$('#suajado').attr("disabled", false);
$('#quijada1').attr("disabled", false);
$('#quijada2').attr("disabled", false);
$('#automatica').attr("disabled", false);
$('#plana').attr("disabled", false);
//Pegado y Pegado de Corrugado
$("#pegado").attr("disabled", false);  
$('#lineal-grande').attr("disabled", false);
$('#lineal-chica').attr("disabled", false);
diferencia=0; 
cantidadreal=0; 
cantidad=0; 
tiempodeejec=0;
acumulado=0;
mermaacumulado=0;
cantreq=0;

centesimas = 0;
segundos = 0;
minutos = 0;
horas = 0;

idranurado=0; 
idcaiman=0;

idrefilado=0; 
idrefiladora=0; 
idrefiladorayado=0; 
idrayado=0;

idimpresion=0; 
idranurado=0; 
idflexografica=0;

idpegado=0; 
idpegadora=0;

idempalme=0; 
idautomatica=0; 
idsemiautomatica=0;

idsuajado=0;
idautomatica=0; 
idquijada1=0; 
idquijada2=0; 
idplana=0;

idpegado=0; 
idlinealg=0; 
idlinealch=0;
}

function extraerDatosEnProceso(){
	$.post('extraerenproceso', {orden:orden},
		function(result){
			if(result.data.length>0)
			{
      //orden = result.data[0].id_orden;
      trabajo = result.data[0].trabajo;
      maquina = result.data[0].maquina;
      proceso = result.data[0].proceso;
      operador = result.data[0].operador;
      nombreoperador = result.data[0].nombreoperador;
      horainicio = result.data[0].horainicio;
      cantreq = result.data[0].cantidadreq;           
      $("#orden").val(orden);
      $("#trabajo").val(trabajo);
      $("#operador").val(operador);
      $("#horainicio").val(horainicio);
      $("#nombreoperador").val(nombreoperador);         
      $('#orden').attr("disabled", true);
      $('#operador').attr("disabled", true);
      $('#trabajo').attr("disabled", true);
      $('#nombreoperador').attr("disabled", true);
      $('#horainicio').attr("disabled", true);
      $("#" + maquina +"").attr("disabled", true);
      $("#" + proceso + "").attr("disabled", true);
      $('#inicio').attr("disabled", true);
      idinicio = 1;
      obtenerProceso(proceso);
      obtenerMaquina(maquina);                                       
      // asignar el valor de las unidades en milisegundos
      var msecPerMinute = 1000 * 60;
      var msecPerHour = msecPerMinute * 60;
      var msecPerDay = msecPerHour * 24;
      // asignar la fecha actual en milisegundos
      var date = new Date();
      var dateMsec = date.getTime();
      // Asignar la fecha de la base de datos
      var date2 = new Date(horainicio);
      date2.getMonth();
      date2.getDate();
      date2.getHours();
      date2.getMinutes();
      date2.getSeconds();

      // Obtener la diferencia en milisegundos
      var interval = dateMsec - date2.getTime();            
      // Calcular las horas
      var hours = Math.floor(interval / msecPerHour );
      interval = interval - (hours * msecPerHour );
      // Calcular los minutos
      var minutes = Math.floor(interval / msecPerMinute );
      interval = interval - (minutes * msecPerMinute );
      // Calcular los segundos
      var seconds = Math.floor(interval / 1000 );
      //cronometro
      centesimas = 99;
      segundos = seconds;
      minutos = minutes;
      horas = hours;

      if (segundos < 10) { segundos = "0"+segundos }
      	Segundos.innerHTML = ":"+segundos;
      if (minutos < 10) { minutos = "0"+minutos }
      	Minutos.innerHTML = ":"+minutos;
      if (horas < 10) { horas = "0"+horas }
      	Horas.innerHTML = horas;          
      return inicio();

  }else{        
  	swal("Ouch","Algo sucedio","error");  
  }
},'json');            	
} 

function extraerDatosEnPendiente(){
	$.post('extraerenpendiente', {orden:orden},
		function(result){
			if(result.data.length>0)
			{
      //orden = result.data[0].id_orden;
      trabajo = result.data[0].trabajo;
      maquina = result.data[0].maquina;
      proceso = result.data[0].proceso;
      //cantreq = result.data[0].cantidadreq;
      //horaregistro = result.data[0].horaregistro;     
      $("#orden").val(orden);
      $("#trabajo").val(trabajo);
      $('#orden').attr("disabled", true);
      $('#trabajo').attr("disabled", true);
      $('#horainicio').attr("disabled", true);
      $("#" + maquina +"").attr("disabled", true);
      $("#" + proceso + "").attr("disabled", true);
      obtenerProceso(proceso);
      obtenerMaquina(maquina);                                       

  }else{        
  	swal("Ouch","Algo sucedio","error");  
  }
},'json');            	
} 

function obtenerOperador(operador){
	$.post('consultaroperador', {operador:operador},
		function(result){
			if(result.data.length>0)
			{
				nombreoperador = result.data[0].nombreoperador;
				$("#nombreoperador").val(nombreoperador);
			}else{        
				swal("Ouch","Algo sucedio","error");  
			}
		},'json'); 	
}

function definirProceso(){
//En todas las vistas
if( idajuste == 1 ){
	proceso = "ajuste";
	$("#procesorep").val(proceso);
}
	//Ranurado y Flexoranurado
	if( idranurado == 1 ){
		proceso = "ranurado";
		$("#procesorep").val(proceso);
	}  	
//Refilado
if( idrefilado == 1 ){
	proceso = "refilado";
	$("#procesorep").val(proceso);
}
if( idrayado == 1 ){
	proceso = "rayado";
	$("#procesorep").val(proceso);
}
if( idrefiladorayado == 1 ){
	proceso = "refilado-rayado";
	$("#procesorep").val(proceso);
}
//Flexoranurado
if( idimpresion == 1 ){
	proceso = "impresion";
	$("#procesorep").val(proceso);
}
if( idranurado == 1 ){
	proceso = "ranurado";
	$("#procesorep").val(proceso);
}
//Empalme
if( idempalme == 1 ){
	proceso = "empalme";
	$("#procesorep").val(proceso);
}     	  
//Suajado
if( idsuajado == 1 ){
	proceso = "suajado";
	$("#procesorep").val(proceso);    
}  
//Pegado y Pegado de Corrugado
if( idpegado == 1 ){
	proceso = "pegado";
	$("#procesorep").val(proceso);
}
}

function definirMaquina(){
//Ranurado
if( idcaiman == 1 ){
	maquina = "caiman";
	$("#maquinarep").val(maquina);
}	
if( idlinealch == 1 ){
	maquina = "lineal-chica";
	$("#maquinarep").val(maquina);
}
  //Refilado
  if( idrefiladora == 1 ){
  	maquina = "refiladora";
  	$("#maquinarep").val(maquina);
  }      
  //Flexoranurado
  if( idflexografica == 1 ){
  	maquina = "flexografica";
  	$("#maquinarep").val(maquina);
  }
  //Pegado de Corrugado
  if( idpegadora == 1 ){
  	maquina = "pegadora";
  	$("#maquinarep").val(maquina);
  }
  //Empalmado
  if( idautomatica == 1 ){
  	maquina = "automatica";
  	$("#maquinarep").val(maquina);
  }
  if( idsemiautomatica ==1 ){
  	maquina = "semiautomatica";
  	$("#maquinarep").val(maquina);
  }                  
  //Suajado
  if( idautomatica == 1 ){
  	maquina = "automatica";
  	$("#maquinarep").val(maquina);
  }
  if( idquijada1 == 1 ){
  	maquina = "quijada1";
  	$("#maquinarep").val(maquina);
  }                      
  if( idquijada2 == 1 ){
  	maquina = "quijada2";
  	$("#maquinarep").val(maquina);
  }
  if( idplana == 1 ){
  	maquina = "plana";
  	$("#maquinarep").val(maquina);
  }	
//Pegado
if( idlinealg == 1 ){
	maquina = "lineal-grande";
	$("#maquinarep").val(maquina);
}                 
}

function iniciarProceso(orden,trabajo,maquina,proceso,operador,nombreoperador){

	$.post('copiarprocesoacaptura', {orden:orden},
		function(data){
			if (data.validacion == true) {

				$.post('eliminarprocesoenpendiente', {orden:orden},
					function(result){
						if (result.validacion == true) {

							$.post('iniciarproceso', {orden:orden,trabajo:trabajo,maquina:maquina,proceso:proceso,operador:operador,nombreoperador:nombreoperador},
								function(data){
									if (data.validacion==true) {																
										inicio();
										$("#inicio").attr("disabled", true);
										$("#orden").attr("disabled", true);
										$("#operador").attr("disabled", true);
										swal("Correcto","success");
										idinicio = 1;
										var strDate = new Date();
										horainicio = strDate.getFullYear() + "-" + (strDate.getMonth()+1) + "-" + strDate.getDate() + " " + strDate.getHours() + ":" + strDate.getMinutes() + ":" + strDate.getSeconds();
										$("#horainicio").val(horainicio);
										enProceso.ajax.reload();
										enPendiente.ajax.reload();										
									}else{        
										swal("Error","error");  
									}
								},'json');						

						}else{        
							swal("Error","error");  
						}         
					},'json');
}else{        
	swal("Error","error");  
}  		
},'json');				
}

function obtenerProceso(){
//En todas las vistas
if( proceso == "ajuste" ){
	idajuste=1;
	idranurado=0;
	idrefilado=0;
	idrayado=0;
	idrefiladorayado=0;
	idimpresion=0;
	idempalme=0;
	idsuajado=0;     
	idpegado=0;
}		
//Ranurado y Flexoranurado
if( proceso == "ranurado"){
	idajuste=0;
	idimpresion = 0;
	idranurado=1;
}	
//Refilado
if(proceso == "refilado"){
	idajuste = 0;
	idrefilado = 1;
	idrayado=0;
	idrefiladorayado=0;           
}
if(proceso == "rayado"){
	idajuste = 0;
	idrefilado = 0;
	idrayado=1;
	idrefiladorayado=0;           
}
if(proceso == "refilado-rayado"){
	idajuste = 0;
	idrefilado = 0;
	idrayado=0;
	idrefiladorayado=1;            
}
//Flexoranurado
if(proceso == "impresion"){
	idajuste = 0;
	idimpresion = 1;
	idranurado=0;
}
//Empalmado
if(proceso == "empalme"){
	idajuste = 0;
	idempalme = 1;
}      
//Suajado
if( proceso == "suajado" ){
	idajuste=0;
	idsuajado=1;
}  
//Pegado y pegado de Corrugado
if( proceso == "pegado" ){
	idajuste = 0;
	idpegado = 1;
}  
}

function obtenerMaquina(){
//Ranurado
if( maquina == "caiman"){
	idcaiman=1;
}
//Refilado
if(maquina == "refiladora"){
	idrefiladora = 1;
}
//Flexoranurado
if(maquina == "flexografica"){
	idflexografica = 1;
}	
//Pegado de Corrugado
if(maquina == "pegadora"){
	idpegadora = 1;
} 
//Empalmado
if(maquina == "automatica"){
	idautomatica = 1;
	idsemiautomatica=0;
}                  
if(maquina == "semiautomatica"){
	idautomatica = 0;
	idsemiautomatica = 1;
}  	 
//Suajado
if( maquina == "automatica" ){
	idautomatica=1;
	idquijada1=0;
	idquijada2=0;
	idplana=0;
} 
if( maquina == "quijada1" ){
	idautomatica=0;
	idquijada1=1;
	idquijada2=0;
	idplana=0;
} 
if( maquina == "quijada2" ){
	idautomatica=0;
	idquijada1=0;
	idquijada2=1;
	idplana=0;
} 
if( maquina == "plana" ){
	idautomatica=0;
	idquijada1=0;
	idquijada2=0;
	idplana=1;
}  	
//Pegado
if( maquina == "lineal-grande" ){
	idlinealg = 1;
	idlinealch = 0;    
} 
if( maquina == "lineal-chica" ){
	idlinealg = 0;
	idlinealch = 1;    
}  
}

function guardarProceso(orden,tiempodeejec,cantidadok,notas,cantidadmerma){


	$.post('copiaradetalleprocesos', {orden:orden},
		function(data){
			if (data.validacion == true) {

				$.post('eliminarprocesoenproceso', {orden:orden},
					function(result){
						if (result.validacion == true) {

							$.post('reportarproceso', {orden:orden,tiempodeejec:tiempodeejec,cantidadok:cantidadok,cantidadmerma:cantidadmerma,notas:notas},
								function(result){
									if (result.validacion == true) {
										swal("Correcto","success");
										limpiar();
										reinicio();
										enProceso.ajax.reload();
									}    
								},'json');

						}          
					},'json');

			}          
		},'json');			
}

function obtenerAcumulados(orden){

	$.post('consultaracumulados', {orden:orden},
		function(result){
			if(result.data.length>0)
			{
				acumulado = result.data[0].acumulado;
				$("#acumuladorep").val(acumulado);
				acumuladomerma = result.data[0].acumuladomerma;
				$("#acumuladomerma").val(acumuladomerma);
			}else{        
				swal("Ouch","Algo sucedio","error");  
			}
		},'json'); 
}

});  