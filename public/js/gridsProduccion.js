$(document).ready(function(){
	var vista, ajuste, existe;
	var idoperador, nombreoperador, id_pendiente=0, id_proceso=0, id_detalle=0, parcial='no', orden=0, trabajo, proceso, maquina, diferencia=0, cantidadreal=0, cantreq=0, cantproducir=0, control, tiempodeejec=0, tiemporep=0, idinicio = 0,
	horainicio, horaregistro, centesimas = 0, segundos = 0, minutos = 0, horas = 0, acumulado=0, mermaacumulado=0, cantidadrep=0, 
	diferenciaacum=0, cantidadmerma=0, diferenciamerma=0, idproceso=0, idmaquina=0; 
	switch (window.location.pathname) {
		case '/Corrugados/public/produccion/ranurado':
		vista = ["Caiman"];
		break;
		case '/Corrugados/public/produccion/refilado':
		vista = ["Refiladora"];
		break;
		case '/Corrugados/public/produccion/flexoranurado':
		vista = ["Flexografica"];
		break;    
		case '/Corrugados/public/produccion/pegadodecorrugado':
		vista = ["Pegadora Corrugados"];
		break;              
		case '/Corrugados/public/produccion/empalmado':
		vista = ["Empalmadora Automatica", "Empalmadora Semiautomatica"];
		break;        
		case '/Corrugados/public/produccion/suajado':
		vista = ["Suajadora Automatica", "Suajadora Quijada 1", "Suajadora Quijada 2", "Suajadora Plana"];
		break;        
		case '/Corrugados/public/produccion/pegado':
		vista = ["Pegadora Lineal Grande", "Pegado Manual", "Pegadora Lineal Chica"];
		break;        
		case '/Corrugados/public/produccion/engrapado':
		vista = ["Engrapadora"];
		break;		
	}
	$("#operador").focus();

$(".panel").attr('disabled','disabled');

//==================================== RANURADO ===============================================
$("#ajustecaiman").click(function(){
	if( idinicio != 1 && orden == 0)
	{
		$("#ajustecaiman").attr("disabled", false);
	} else {	
		$("#ajustecaiman").attr("disabled", true);
		$("#ranurado").attr("disabled", false);
		$("#impresion").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE CAIMAN";
	}
});
$("#ranurado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ranurado").attr("disabled", false);
	} else {	
		$("#ranurado").attr("disabled", true);
		$('#ajustecaiman').attr("disabled", false);
		$("#impresion").attr("disabled", false);
		idproceso = this.value;
		proceso = "RANURADO";
	}
});
$("#caiman").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#caiman").attr("disabled", false);
	} else {	
		$('#caiman').attr("disabled", true);
		idmaquina = this.value;
		maquina = "CAIMAN";
	}	
});
//==================================== REFILADO ===============================================
$("#ajusterefiladorarefilado").click(function(){
	if( idinicio != 1 && orden == 0)
	{
		$("#ajusterefiladorarefilado").attr("disabled", false);
	} else {	
		$("#ajusterefiladorarefilado").attr("disabled", true);
		$("#ajusterefiladorarayado").attr("disabled", false);
		$("#ajusterefiladorarefiladorayado").attr("disabled", false);
		$("#ranurado").attr("disabled", false);
		$("#impresion").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE REFILADORA REFILADO";
	}
});
$("#ajusterefiladorarayado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ajusterefiladorarayado").attr("disabled", false);
	} else {		
		$("#ajusterefiladorarayado").attr("disabled", true);
		$("#ajusterefiladorarefilado").attr("disabled", false);
		$("#ajusterefiladorarefiladorayado").attr("disabled", false);
		$("#ranurado").attr("disabled", false);
		$("#impresion").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE REFILADORA RAYADO";
	}
});
$("#ajusterefiladorarefiladorayado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ajusterefiladorarefiladorayado").attr("disabled", false);
	} else {		
		$("#ajusterefiladorarefiladorayado").attr("disabled", true);
		$("#ajusterefiladorarefilado").attr("disabled", false);
		$("#ajusterefiladorarayado").attr("disabled", false);	
		$("#ranurado").attr("disabled", false);
		$("#impresion").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE REFILADORA RAYADO";
	}
});
$("#refilado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#refilado").attr("disabled", false);
	} else {		
		$("#refilado").attr("disabled", true);
		$('#ajuste').attr("disabled", false);
		$("#rayado").attr("disabled", false);
		$("#refiladorayado").attr("disabled", false); 
		idproceso = this.value;
		proceso = "REFILADO";
	}
});
$("#rayado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#rayado").attr("disabled", false);
	} else {		
		$("#rayado").attr("disabled", true);
		$('#ajuste').attr("disabled", false);
		$("#refilado").attr("disabled", false);
		$("#refiladorayado").attr("disabled", false);
		idproceso = this.value;
		proceso = "RAYADO";
	}
});

$("#refiladorayado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#refiladorayado").attr("disabled", false);
	} else {	
		$("#refiladorayado").attr("disabled", true);
		$("#rayado").attr("disabled", false);
		$('#ajuste').attr("disabled", false);
		$("#refilado").attr("disabled", false);
		idproceso = this.value;
		proceso = "REFILADO/RAYADO";
	}
});            

$("#refiladora").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#rayado").attr("disabled", false);
	} else {	
		$('#refiladora').attr("disabled", true);
		idmaquina = this.value;
		maquina = "REFILADORA";
	}
});

//==================================== FLEXORANURADO ==========================================
$("#ajusteflexograficaimpresion").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ajusteflexograficaimpresion").attr("disabled", false);
	} else {	
		$("#ajusteflexograficaimpresion").attr("disabled", true);
		$("#ajusteflexograficaranurado").attr("disabled", false);
		$("#ranurado").attr("disabled", false);
		$("#impresion").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE FLEXOGRAFICA IMPRESION";
	}
});
$("#ajusteflexograficaranurado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ajusteflexograficaranurado").attr("disabled", false);
	} else {	
		$("#ajusteflexograficaranurado").attr("disabled", true);
		$("#ajusteflexograficaimpresion").attr("disabled", false);
		$("#ranurado").attr("disabled", false);
		$("#impresion").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE FLEXOGRAFICA RANURADO";
	}
});
$("#impresion").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#impresion").attr("disabled", false);
	} else {	
		$("#impresion").attr("disabled", true);
		$('#ajusteflexograficaimpresion').attr("disabled", false);
		$("#ranurado").attr("disabled", false);
		idproceso = this.value;
		proceso = "IMPRESION";
	}
});    

$("#flexografica").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#flexografica").attr("disabled", false);
	} else {	
		$('#flexografica').attr("disabled", true);
		idmaquina = this.value;
		maquina = "FLEXOGRAFICA";
	}
});

//==================================== PEGADO DE CORRUGADO ====================================
$("#ajustepegadoracorrugados").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ajustepegadoracorrugados").attr("disabled", false);
	} else {	
		$("#ajustepegadoracorrugados").attr("disabled", true);
		$("#pegadocajas").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE PEGADORA CORRUGADOS";
	}
});
$("#pegadocajas").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#pegadocajas").attr("disabled", false);
	} else {		
		$("#pegadocajas").attr("disabled", true);
		$('#ajustepegadoracorrugados').attr("disabled", false);
		idproceso = this.value;
		proceso = "PEGADO CAJAS";
	}
});

$("#pegadoracorrugados").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#pegadoracorrugados").attr("disabled", false);
	} else {	
		$("#pegadoracorrugados").attr("disabled", true);
		idmaquina = this.value;
		maquina = "PEGADORA CORRUGADOS";
	}
});

//==================================== EMPALMADO ==============================================  
$("#ajusteempalmadora").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ajusteempalmadora").attr("disabled", false);
	} else {		
		$("#ajusteempalmadora").attr("disabled", true);
		$("#empalme").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE EMPALMADORA";
	}
});

$("#empalme").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#empalme").attr("disabled", false);
	} 
	else if ( $("#ajusteempalmadora").attr("disabled",true) ) 
	{
		swal("","Primero inicia el ajuste","warning");
	}
	else{	
		$("#empalme").attr("disabled", true);
		$('#ajusteempalmadora').attr("disabled", false);
		idproceso = this.value;
		proceso = "EMPALME";
	}
});

$("#empalmadoraautomatica").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#empalmadoraautomatica").attr("disabled", false);
	} else {		
		$("#empalmadoraautomatica").attr("disabled", true);
		$("#empalmadorasemiautomatica").attr("disabled", false);
		idmaquina = this.value;
		maquina = "EMPALMADORA AUTOMATICA";
	}
});

$("#empalmadorasemiautomatica").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#empalmadorasemiautomatica").attr("disabled", false);
	} else {	
		$("#empalmadorasemiautomatica").attr("disabled", true);
		$("#empalmadoraautomatica").attr("disabled", false);
		idmaquina = this.value;
		maquina = "EMPALMADORA SEMIAUTOMATICA";
	}
});

//==================================== SUAJADO ================================================  
$("#ajustesuajadora").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ajustesuajadora").attr("disabled", false);
	} else {	
		$("#ajustesuajadora").attr("disabled", true);
		$("#suajado").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE SUAJADORA";
	}
});

$("#suajado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#suajado").attr("disabled", false);
	} else {	
		$("#suajado").attr("disabled", true);
		$('#ajustesuajadora').attr("disabled", false);
		idproceso = this.value;
		proceso = "SUAJADO";
	}	
});

$("#suajadoraautomatica").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#suajadoraautomatica").attr("disabled", false);
	} else {	
		$("#suajadoraautomatica").attr("disabled", true);
		$('#suajadoraquijada1').attr("disabled", false);
		$('#suajadoraquijada2').attr("disabled", false);
		$('#suajadoraplana').attr("disabled", false);
		//$('#suajadoraderodillo').attr("disabled", false);
		idmaquina = this.value;
		maquina = "SUAJADORA AUTOMATICA";
	}
});

$("#suajadoraquijada1").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#suajadoraquijada1").attr("disabled", false);
	} else {	
		$('#suajadoraquijada1').attr("disabled", true);
		$("#suajadoraautomatica").attr("disabled", false);
		$('#suajadoraquijada2').attr("disabled", false);
		$('#suajadoraplana').attr("disabled", false);
		//$('#suajadoraderodillo').attr("disabled", false);
		idmaquina = this.value;
		maquina = "SUAJADORA QUIJADA 1";
	}
});

$("#suajadoraquijada2").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#suajadoraquijada2").attr("disabled", false);
	} else {	
		$('#suajadoraquijada2').attr("disabled", true);
		$("#suajadoraautomatica").attr("disabled", false);
		$('#suajadoraquijada1').attr("disabled", false);
		$('#suajadoraplana').attr("disabled", false);
		//$('#suajadoraderodillo').attr("disabled", false);
		idmaquina = this.value;
		maquina = "SUAJADORA QUIJADA 2";
	}
});

$("#suajadoraplana").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#suajadoraplana").attr("disabled", false);
	} else {	
		$('#suajadoraplana').attr("disabled", true);
		$("#suajadoraautomatica").attr("disabled", false);
		$('#suajadoraquijada1').attr("disabled", false);
		$('#suajadoraquijada2').attr("disabled", false);
		//$('#suajadoraderodillo').attr("disabled", false);
		idmaquina = this.value;
		maquina = "SUAJADORA PLANA";
	}
});      

/*$("#suajadoraderodillo").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#suajadoraderodillo").attr("disabled", false);
	} else {		
		$('#suajadoraderodillo').attr("disabled", true);
		$("#suajadoraautomatica").attr("disabled", false);
		$('#suajadoraquijada1').attr("disabled", false);
		$('#suajadoraquijada2').attr("disabled", false);
		idmaquina = this.value;
		maquina = "SUAJADORA DE RODILLO";
	}
});*/ 
//==================================== PEGADO ====================================   
$("#ajustepegadora").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#ajustepegadora").attr("disabled", false);
	} else {	
		$("#ajustepegadora").attr("disabled", true);
		$("#pegado").attr("disabled", false);
		$('#pegadomanual').attr("disabled", false);
		//idproceso = this.value;
		proceso = "AJUSTE PEGADORA";
	}
});

$("#pegado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#pegado").attr("disabled", false);
	} else {		
		$("#pegado").attr("disabled", true);
		$('#ajustepegadora').attr("disabled", false);
		$('#pegadomanual').attr("disabled", false);
		idproceso = this.value;
		proceso = "PEGADO";
	}
});

$("#pegadomanual").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#pegadomanual").attr("disabled", false);
	} else {	
		$('#pegadomanual').attr("disabled", true);
		$('#ajustepegadora').attr("disabled", false);
		$('#pegado').attr("disabled", false);
		idproceso = this.value;
		proceso = "PEGADO MANUAL";
	}
});

$("#pegadoralinealgrande").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#pegadoralinealgrande").attr("disabled", false);
	} else {	
		$('#pegadoralinealgrande').attr("disabled", true);
		$('#pegadoralinealchica').attr("disabled", false);
		idmaquina = this.value;
		maquina = "PEGADORA LINEAL GRANDE";
	}
});

$("#pegadoralinealchica").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#pegadoralinealchica").attr("disabled", false);
	} else {	
		$('#pegadoralinealchica').attr("disabled", true);
		$('#pegadoralinealgrande').attr("disabled", false);
		idmaquina = this.value;
		maquina = "PEGADORA LINEAL CHICA";
	}
});

//==================================== RANURADO ===============================================
$("#ajusteengrapadora").click(function(){
	if( idinicio != 1 && orden == 0)
	{
		$("#ajusteengrapadora").attr("disabled", false);
	} else {	
		$("#ajusteengrapadora").attr("disabled", true);
		$("#grapado").attr("disabled", false);
		idproceso = this.value;
		proceso = "AJUSTE ENGRAPADORA";
	}
});
$("#grapado").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#grapado").attr("disabled", false);
	} else {	
		$("#grapado").attr("disabled", true);
		$('#ajusteengrapadora').attr("disabled", false);
		idproceso = this.value;
		proceso = "GRAPADO";
	}
});
$("#engrapadora").click(function(){
	if( idinicio != 1 && orden == 0 )
	{
		$("#engrapadora").attr("disabled", false);
	} else {	
		$('#engrapadora').attr("disabled", true);
		idmaquina = this.value;
		maquina = "ENGRAPADORA";
	}	
});

//==================================== EN TODAS LAS VISTAS ====================================
//Tablas en Proceso
var enProceso = $('#enProceso').DataTable({
	ajax:{
		url: 'consultarenproceso',
		data: {vista: vista}
	}, 	
	"columns":[

	{"data":"id_proceso"},
	{data:"orden", 
	width: "1%"},

	{data:"trabajo"}
	],
    "columnDefs": [
    {
      "targets": [ 0 ],
      "visible": false,
      "searchable": false
    }
    ],		
	//"info" : false,
	"searching": false,
	"paging":    false,
	"scrollY":   '5vh',
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
	//orden = $(this).find('td').eq(0).html();
	orden = $(this).find('button').data('fila');	 
	var data = enProceso.row( this ).data();
  	id_proceso = data.id_proceso;

	$.post('extraerenproceso', {id_proceso:id_proceso,vista:vista},
		function(result)
		{
			if(result.data.length>0)
			{
		      orden = result.data[0].id_orden;
		      trabajo = result.data[0].trabajo;
		      idmaquina = result.data[0].id_maquina;
		      maquina = result.data[0].maquina;
		      idproceso = result.data[0].id_proceso;
		      proceso = result.data[0].proceso;		      
		      idoperador = result.data[0].operador;
		      nombreoperador = result.data[0].nombreoperador;
		      horainicio = result.data[0].horainicio;
		      cantreq = result.data[0].cantidadreq;
		      cantproducir = result.data[0].cant_producir;           
		      $("#orden").val(orden);
		      $("#trabajo").val(trabajo);
		      $("#operador").val(idoperador);
		      $("#horainicio").val(horainicio);
		      $("#nombreoperador").val(nombreoperador);         
		      $('#orden').attr("disabled", true);
		      $('#operador').attr("disabled", true);
		      $('#trabajo').attr("disabled", true);
		      $('#nombreoperador').attr("disabled", true);
		      $('#horainicio').attr("disabled", true);
		      $("#" + maquina.toLowerCase().replace(/ /gi, '') +"").attr("disabled", true);
		      $("#" + proceso.toLowerCase().replace('/', '').replace(/ /gi,'') + "").attr("disabled", true);
		      $('#inicio').attr("disabled", true);
		      idinicio = 1;                                       
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
		      inicio();
  			}
  			else
  			{        
  				swal("Error","","error");  
  			}
		},'json'
	);  
});

//Tablas en Pendiente
var enPendiente = $('#enPendiente').DataTable({
	ajax:{
		url: 'consultarenpendiente',
		"data": {vista: vista}
	}, 
	"columns":[
	{"data":"id_pendiente"},
	{"data":"orden", 
	width: "1%"},
	{"data":"trabajo"}	
	],
    "columnDefs": [
    {
      "targets": [ 0 ],
      "visible": false,
      "searchable": false
    }
    ],		
	//"info" : false,
	"searching": true,
	"paging":    false,
	"scrollY":   '25vh',
	"scrollX": true			
});

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

	orden = $(this).find('button').data('fila');

	var data = enPendiente.row( this ).data();
  	id_pendiente = data.id_pendiente;

	$.post('extraerenpendiente', {id_pendiente:id_pendiente,vista:vista},
		function(result){
			if(result.data.length>0)
			{
				orden = result.data[0].id_orden;
				trabajo = result.data[0].trabajo;
				idproceso = result.data[0].id_proceso;
				maquina = result.data[0].maquina;
				idmaquina = result.data[0].id_maquina;
				proceso = result.data[0].proceso;

				$("#orden").val(orden);
				$("#trabajo").val(trabajo);
				$('#orden').attr("disabled", true);
				$('#trabajo').attr("disabled", true);
				$('#horainicio').attr("disabled", true);
				$("#" + maquina.toLowerCase().replace(/ /gi, '') +"").attr("disabled", true);

			      if(proceso == "EMPALME")
			      {
			      	$("#ajusteempalmadora").attr("disabled", true);
			      	idproceso = $("#ajusteempalmadora").val();						      	
			      	proceso = "AJUSTE EMPALMADORA";
			      }	
			      if(proceso == "RANURADO" && maquina == "CAIMAN")
			      {
			      	$("#ajustecaiman").attr("disabled", true);
			      	idproceso = $("#ajustecaiman").val();					      	
			      	proceso = "AJUSTE CAIMAN";
			      }	
			      if(proceso == "RANURADO" && maquina == "FLEXOGRAFICA")
			      {
			      	$("#ajusteflexograficaranurado").attr("disabled", true);
			      	idproceso = $("#ajusteflexograficaranurado").val();					      	
			      	proceso = "AJUSTE FLEXOGRAFICA RANURADO";
			      }		
			      if(proceso == "IMPRESION" && maquina == "FLEXOGRAFICA")
			      {
			      	$("#ajusteflexograficaimpresion").attr("disabled", true);
			      	idproceso = $("#ajusteflexograficaimpresion").val();					      	
			      	proceso = "AJUSTE FLEXOGRAFICA IMPRESION";
			      }	
			      if(proceso == "REFILADO RAYADO")
			      {
			      	$("#ajusterefiladorarefiladorayado").attr("disabled", true);
			      	idproceso = $("#ajusterefiladorarefiladorayado").val();					      	
			      	proceso = "AJUSTE REFILADORA REFILADO RAYADO";
			      }		
			      if(proceso == "RAYADO")
			      {
			      	$("#ajusterefiladorarayado").attr("disabled", true);
			      	idproceso = $("#ajusterefiladorarayado").val();					      	
			      	proceso = "AJUSTE REFILADORA RAYADO";
			      }	
			      if(proceso == "REFILADO")
			      {
			      	$("#ajusterefiladorarefilado").attr("disabled", true);
			      	idproceso = $("#ajusterefiladorarefilado").val();					      	
			      	proceso = "AJUSTE REFILADORA REFILADO";
			      }	
			      if(proceso == "PEGADO CAJAS")
			      {
			      	$("#ajustepegadoracorrugados").attr("disabled", true);
			      	idproceso = $("#ajustepegadoracorrugados").val();					      	
			      	proceso = "AJUSTE PEGADORA CORRUGADOS";
			      }		
			      if(proceso == "SUAJADO")
			      {
			      	$("#ajustesuajadora").attr("disabled", true);
			      	idproceso = $("#ajustesuajadora").val();					      	
			      	proceso = "AJUSTE SUAJADORA";
			      }						      				      					      					      				      						      				      					      						
			      if(proceso == "GRAPADO")
			      {
			      	$("#ajusteengrapadora").attr("disabled", true);
			      	idproceso = $("#ajusteengrapadora").val();					      	
			      	proceso = "AJUSTE ENGRAPADORA";
			      }			      
			}
			else
			{        
				swal("Error","","error");  
			}
		},'json'
	); 
});

$("#operador").change(function(){
	idoperador = $("#operador").val();	

	$.post('consultaroperador', {idoperador:idoperador},
		function(result){
			if(result.data.length>0)
			{
				nombreoperador = result.data[0].nombreoperador;
				idoperador = result.data[0].usuario;
				$("#nombreoperador").val(nombreoperador);
			}
			else
			{        
				swal("Error","","error");  
			}
		},'json'
	); 	
});

$("#inicio").click(function()
{
	if( ($("#orden").val() == "") && ($("#operador").val() == "" ) || ($("#orden").val() == "") || ($("#operador").val() == "" ) )
	{
		swal("Alto","Completa todos los campos","");
	} 
	else 
	{
		//validaAjustes();
		$.post('validarenproceso', {vista:vista},
			function(result)
			{
				if (result.validacion == 'false') 
				{
					$.post('copiarprocesoacaptura', {id_pendiente:id_pendiente},
						function(data)
						{
							if (data.validacion == true) 
							{
								id_proceso = data.id_proceso;
								$.post('iniciarajuste', 
									{
										id_proceso:id_proceso,
										idmaquina:idmaquina,
										maquina:maquina,
										idproceso:idproceso,
										proceso:proceso,
										idoperador:idoperador,
										nombreoperador:nombreoperador
									},
									function(data)
									{
										if (data.validacion==true) 
										{
											$.post('eliminarprocesoenpendiente', {id_pendiente:id_pendiente},
												function(result)
												{
													if (result.validacion == true) 
													{
														inicio();
														$("#inicio").attr("disabled", true);
														$("#orden").attr("disabled", true);
														//$("#operador").attr("disabled", true);
														$("#inicio").attr("disabled",true);
														//swal("Correcto","success");
														idinicio = 1;
														var strDate = new Date();
														horainicio = strDate.getFullYear() + "-" + (strDate.getMonth()+1) + "-" + strDate.getDate() + " " + strDate.getHours() + ":" + strDate.getMinutes() + ":" + strDate.getSeconds();
														$("#horainicio").val(horainicio);
														enProceso.ajax.reload();
														enPendiente.ajax.reload();
													}
													else
													{        
													swal("Error","error");  
													}         
												},'json'
											);								
										}
										else
										{        
											swal("Error","error");  
										}
									},'json'
								);																								
							}
							else
							{        
								swal("Error","error");  
							}  		
						},'json'
					);
				}
				else
				{
					swal("Alto","Ya existe un proceso en ejecución","");
					limpiar();
				}			
			},'json'
		);
	}
});

$("#parar").click(function(){

	if( idinicio != 1 && orden == 0 )
	{
		swal("Alto","No puedes parar si el proceso no ha iniciado","");
	} else {
		parar();

		if(cantreq == 0)
		{
			$.post('extraerenproceso', {orden:orden,vista:vista},
				function(result){
					if(result.data.length>0)
					{
						cantproducir = result.data[0].cant_producir; 	
						$("#cantidadproducir").val(cantproducir);						
						cantreq = result.data[0].cantidadreq; 	
						$("#cantidadreq").val(cantreq);						
					}
					else
					{
						$("#cantidadproducir").val("0");
						$("#cantidadreq").val("0");												
					}
				},'json');
		}	

		if( (proceso.substr(0,6) == 'AJUSTE') )			
		{

			$.post('acumuladoajuste', {orden:orden},
				function(result){
					if(result.data.length>0)
					{
						acumulado = result.data[0].acumulado;
						$("#acumuladorep").val(acumulado);
						mermaacumulado = result.data[0].acumuladomerma;
						$("#acumerma").val(mermaacumulado);
					}
					else
					{
						$("#acumuladorep").val("0");						
					}
				},'json'
			);

			$('#myModal').modal('show');
			$("#parar").attr("disabled", true);			
			$("#ordenrep").val(orden);
			$("#trabajorep").val(trabajo);
			$("#cantidadreq").val(cantreq);
			$("#cantidadproducir").val(cantproducir);			
			$("#tiemporep").val(tiempodeejec);	
			$("#procesorep").val(proceso);
			$("#maquinarep").val(maquina);								
			$("#cantidadrep").val("1");
			$("#cantidadrep").attr("disabled", true);
			$("#cantmerma").val("0");
			$("#cantmerma").attr("disabled", true);		
			$("#acumuladorep").val(acumulado);
			$("#acumerma").val(mermaacumulado);								
		} else {

			$.post('acumuladotiro', {orden:orden},
				function(result){
					alert(result.data);
					if(result.data.length>0)
					{
						acumulado = result.data[0].acumulado;
						$("#acumuladorep").val(acumulado);
						mermaacumulado = result.data[0].acumuladomerma;
						$("#acumerma").val(mermaacumulado);
					}
					else
					{
						$("#acumuladorep").val("0");						
					}
				},'json'
			);

			$('#myModal').modal('show');
			$("#parar").attr("disabled", true);
			$("#ordenrep").val(orden);
			$("#trabajorep").val(trabajo);
			$("#tiemporep").val(tiempodeejec);
			$("#cantidadreq").val(cantreq);
			$("#cantidadproducir").val(cantproducir);
			$("#cantidadrep").attr("disabled",false);
			$("#cantmerma").attr("disabled",false);
			$("#cantidadreq").attr("disabled", true);
			$("#cantidadproducir").attr("disabled", true);
			$("#acumuladorep").attr("disabled", true);
			$("#acumerma").attr("disabled", true);		
			$("#procesorep").val(proceso);
			$("#maquinarep").val(maquina);
			$("#acumuladorep").val(acumulado);
			$("#acumerma").val(mermaacumulado);			
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
		diferenciamerma = parseInt(cantidadmerma) + parseInt(mermaacumulado);
		$("#acumerma").val(diferenciamerma);      
	}
});

$("#guardar").click(function()
{
	var cantidadok = $("#cantidadrep").val();
	var cantidadmerma = $("#cantmerma").val();
	var notas = $("#notas").val();

	if( proceso.substr(0,6) == 'AJUSTE' )			
	{
		if( $("#parcial").is(':checked') )
		{
			//$("#cant_parcial").attr("disabled",false);
			//cantidadparcial = $("#cant_parcial").val();
			parcial = 'si';
			$.post('copiaradetalleprocesos', {id_proceso:id_proceso},
				function(data)
				{
					if (data.validacion == true) 
					{
						id_detalle = data.id_detalle;
						$.post('reportarajuste', 
							{
								id_detalle:id_detalle,
								idmaquina:idmaquina,
								maquina:maquina,
								idproceso:idproceso,
								proceso:proceso,
								tiemporep:tiemporep,
								cantidadok:cantidadok,
								cantidadmerma:cantidadmerma,
								notas:notas,
								parcial:parcial,
								situacion:"PRODUCCION"
							},
							function(result)
							{
								if (result.validacion == true) 
								{
									$.post('eliminarprocesoenproceso', {id_proceso:id_proceso},
										function(result)
										{
											if (result.validacion == true) 
											{												
												$.post('copiaraprocesospendientes', {id_detalle:id_detalle},
													function(result)
													{
														if (result.validacion == true) 
														{			
														  if(proceso == "AJUSTE EMPALMADORA")
														  {												  	
														  	idproceso = $("#empalme").val();						      	
														  	proceso = "EMPALME";
														  }	
														  if(proceso == "AJUSTE CAIMAN")
														  {
														  	idproceso = $("#ranurado").val();					      	
														  	proceso = "RANURADO";
														  }	
														  if(proceso == "AJUSTE FLEXOGRAFICA RANURADO")
														  {
														  	idproceso = $("#ranurado").val();					      	
														  	proceso = "RANURADO";
														  }		
														  if(proceso == "AJUSTE FLEXOGRAFICA IMPRESION")
														  {
														  	idproceso = $("#impresion").val();					      	
														  	proceso = "IMPRESION";
														  }	
														  if(proceso == "AJUSTE REFILADORA REFILADO RAYADO")
														  {
														  	idproceso = $("#refiladorayado").val();					      	
														  	proceso = "REFILADO RAYADO";
														  }		
														  if(proceso == "AJUSTE REFILADORA RAYADO")
														  {
														  	idproceso = $("#rayado").val();					      	
														  	proceso = "RAYADO";
														  }	
														  if(proceso == "AJUSTE REFILADORA REFILADO")
														  {
														  	idproceso = $("#refilado").val();					      	
														  	proceso = "REFILADO";
														  }	
														  if(proceso == "AJUSTE PEGADORA CORRUGADOS")
														  {
														  	idproceso = $("#pegadocajas").val();					      	
														  	proceso = "PEGADO CAJAS";
														  }		
														  if(proceso == "AJUSTE SUAJADORA")
														  {
														  	idproceso = $("#suajado").val();					      	
														  	proceso = "SUAJADO";
														  }	
														  if(proceso == "AJUSTE ENGRAPADORA")
														  {
														  	idproceso = $("#grapado").val();					      	
														  	proceso = "GRAPADO";
														  }														  																								
															id_pendiente = result.id_pendiente;
															$.post('actualizarproceso2',
																{
																	id_pendiente:id_pendiente,
																	idproceso:idproceso,
																	proceso:proceso
																},
																function(result)
																{
																	if(result.validacion == true)
																	{
																		$("#myModal").modal('hide');
																		enProceso.ajax.reload();
																		enPendiente.ajax.reload();															
																		limpiar();
																		reinicio();
																	}
																},'json'
															);
														}													
													},'json'
												);																		
											}          
										},'json'
									);
								}
							},'json'			
						);										
					}
				},'json'
			);
		}
		else
		{
			//$("#cant_parcial").attr("disabled",true);
			$.post('copiaradetalleprocesos', {id_proceso:id_proceso},
				function(data)
				{
					if (data.validacion == true) 
					{
						id_detalle = data.id_detalle;
						$.post('reportarajuste', 
							{
								id_detalle:id_detalle,
								idmaquina:idmaquina,
								maquina:maquina,
								idproceso:idproceso,
								proceso:proceso,
								tiemporep:tiemporep,
								cantidadok:cantidadok,
								cantidadmerma:cantidadmerma,
								notas:notas,
								parcial:parcial,
								situacion:"PRODUCCION"
							},
							function(result)
							{
								if (result.validacion == true) 
								{
									$.post('eliminarprocesoenproceso', {id_proceso:id_proceso},
										function(result)
										{
											if (result.validacion == true) 
											{
												$.post('iniciarproceso', {id_detalle:id_detalle},
													function(result)
													{
														if (result.validacion == true) 
														{
															id_proceso = result.id_proceso;
														  if(proceso == "AJUSTE EMPALMADORA")
														  {
														  	$("#empalme").attr("disabled", true);
														  	idproceso = $("#empalme").val();						      	
														  	proceso = "EMPALME";
														  }	
														  if(proceso == "AJUSTE CAIMAN")
														  {
														  	$("#ranurado").attr("disabled", true);
														  	idproceso = $("#ranurado").val();					      	
														  	proceso = "RANURADO";
														  }	
														  if(proceso == "AJUSTE FLEXOGRAFICA RANURADO")
														  {
														  	$("#ranurado").attr("disabled", true);
														  	idproceso = $("#ranurado").val();					      	
														  	proceso = "RANURADO";
														  }		
														  if(proceso == "AJUSTE FLEXOGRAFICA IMPRESION")
														  {
														  	$("#impresion").attr("disabled", true);
														  	idproceso = $("#impresion").val();					      	
														  	proceso = "IMPRESION";
														  }	
														  if(proceso == "AJUSTE REFILADORA REFILADO RAYADO")
														  {
														  	$("#refiladorayado").attr("disabled", true);
														  	idproceso = $("#refiladorayado").val();					      	
														  	proceso = "REFILADO RAYADO";
														  }		
														  if(proceso == "AJUSTE REFILADORA RAYADO")
														  {
														  	$("#rayado").attr("disabled", true);
														  	idproceso = $("#rayado").val();					      	
														  	proceso = "RAYADO";
														  }	
														  if(proceso == "AJUSTE REFILADORA REFILADO")
														  {
														  	$("#refilado").attr("disabled", true);
														  	idproceso = $("#refilado").val();					      	
														  	proceso = "REFILADO";
														  }	
														  if(proceso == "AJUSTE PEGADORA CORRUGADOS")
														  {
														  	$("#pegadocajas").attr("disabled", true);
														  	idproceso = $("#pegadocajas").val();					      	
														  	proceso = "PEGADO CAJAS";
														  }		
														  if(proceso == "AJUSTE SUAJADORA")
														  {
														  	$("#suajado").attr("disabled", true);
														  	idproceso = $("#suajado").val();					      	
														  	proceso = "SUAJADO";
														  }
														  if(proceso == "AJUSTE ENGRAPADORA")
														  {
														  	$("#grapado").attr("disabled", true);
														  	idproceso = $("#grapado").val();					      	
														  	proceso = "GRAPADO";
														  }														  
															$.post('actualizarproceso', {id_proceso:id_proceso,idproceso:idproceso,proceso:proceso},
																function(result)
																{
																	if (result.validacion == true) 
																	{	
																		id_proceso = result.id_proceso;																									
																		enPendiente.ajax.reload();
																		enProceso.ajax.reload();
																		limpiar();
																		reinicio();

																		$.post('extraerenproceso', {id_proceso:id_proceso,vista:vista},
																			function(result)
																			{
																				if(result.data.length>0)
																				{
																			      trabajo = result.data[0].trabajo;
																			      idmaquina = result.data[0].id_maquina;
																			      maquina = result.data[0].maquina;
																			      idproceso = result.data[0].id_proceso;
																			      proceso = result.data[0].proceso;
																			      idoperador = result.data[0].operador;
																			      nombreoperador = result.data[0].nombreoperador;
																			      horainicio = result.data[0].horainicio;
																			      cantreq = result.data[0].cantidadreq;  
																			      cantproducir = result.data[0].cant_producir;         
																			      $("#orden").val(orden);
																			      $("#trabajo").val(trabajo);
																			      $("#operador").val(idoperador);
																			      $("#horainicio").val(horainicio);
																			      $("#nombreoperador").val(nombreoperador);         
																			      $('#orden').attr("disabled", true);
																			      $('#operador').attr("disabled", true);
																			      $('#trabajo').attr("disabled", true);
																			      $('#nombreoperador').attr("disabled", true);
																			      $('#horainicio').attr("disabled", true);
																			      $("#" + maquina.toLowerCase().replace(/ /gi, '') +"").attr("disabled", true);
																			      $("#" + proceso.toLowerCase().replace('/', '').replace(/ /gi,'') + "").attr("disabled", true);
																			      $('#inicio').attr("disabled", true);
																			      idinicio = 1;                                       
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
																			      inicio();
																	  			}
																	  			else
																	  			{        
																	  				swal("Error","","error");  
																	  			}
																			},'json'
																		);
																	}
																},'json'
															);
														}
													},'json'
												);																		
											}          
										},'json'
									);
								}
							},'json'			
						);										
					}
				},'json'
			);				
		}		
	} 
	else 
	{		
		if( $("#parcial").is(':checked') )
		{
			//$("#cant_parcial").attr("disabled",false);
			//cantidadparcial = $("#cant_parcial").val();
			parcial = 'si';
			$.post('copiaradetalleprocesos', {id_proceso:id_proceso},
				function(data)
				{
					if (data.validacion == true) 
					{
						id_detalle = data.id_detalle;
						$.post('reportarproceso', 
							{
								id_detalle:id_detalle,
								idmaquina:idmaquina,
								maquina:maquina,
								idproceso:idproceso,
								proceso:proceso,
								tiemporep:tiemporep,
								cantidadok:cantidadok,
								cantidadmerma:cantidadmerma,
								notas:notas,
								parcial:parcial,
								situacion:"PRODUCCION"
							},
							function(result)
							{
								if (result.validacion == true) 
								{
									$.post('eliminarprocesoenproceso', {id_proceso:id_proceso},
										function(result)
										{
												if (result.validacion == true) 
												{
													$.post('copiaraprocesospendientes', {id_detalle:id_detalle},
														function(result)
														{
															if (result.validacion == true) 
															{														
																id_proceso = result.id_proceso;																									
																$("#myModal").modal('hide');
																enProceso.ajax.reload();
																enPendiente.ajax.reload();																
																limpiar();
																reinicio();	
															}
														},'json'													
													);																		
												}           
										},'json'
									);
								}
							},'json'			
						);
					}          
				},'json'
			);
		}
		else
		{
			//$("#cant_parcial").attr("disabled",true);
			$.post('copiaradetalleprocesos', {id_proceso:id_proceso},
				function(data)
				{
					if (data.validacion == true) 
					{
						id_detalle = data.id_detalle;
						$.post('reportarproceso', 
							{
								id_detalle:id_detalle,
								idmaquina:idmaquina,
								maquina:maquina,
								idproceso:idproceso,
								proceso:proceso,
								tiemporep:tiemporep,
								cantidadok:cantidadok,
								cantidadmerma:cantidadmerma,
								notas:notas,
								parcial:parcial,
								situacion:"PRODUCCION"
							},
							function(result)
							{
								if (result.validacion == true) 
								{
									$.post('eliminarprocesoenproceso', {id_proceso:id_proceso},
										function(result){
											if (result.validacion == true) 
											{		
												id_proceso = result.id_proceso;
												$("#myModal").modal('hide');
												enProceso.ajax.reload();												
												limpiar();
												reinicio();																	
											}          
										},'json'
									);
								}
							},'json'			
						);
					}          
				},'json'
			);			
		}			
	}
});

$("#cancelar").click(function(){
	limpiar();
	reinicio();
});

$("#enPendiente tbody").on("click","button[type='button'].btn-preview", function()
{ 
	var id_preview = $(this).data("id");
	window.open("http://localhost/Corrugados/public/ordenes/orderpdf?Id="+id_preview, '_blank');
});

$("#enProceso tbody").on("click","button[type='button'].btn-preview", function()
{ 
	var id_preview = $(this).data("id")
	window.open("http://localhost/Corrugados/public/ordenes/orderpdf?Id="+id_preview, '_blank');
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
	tiemporep = parseFloat(horas) + (parseFloat(minutos)/ 60);
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
$("button[type=button]").attr("disabled",false);
$("#operador").attr("disabled",false);
$('textarea#notas').val("");
$('#parcial').prop('checked',false);
enProceso.$('tr.selected').removeClass('selected');
enPendiente.$('tr.selected').removeClass('selected');
idmaquina=0;
idproceso=0;
proceso="";
maquina="";
}

$(document).bind('keydown',function(e){
	if ( e.which == 27 ) {
		limpiar(); 
		reinicio();        
	};
});

});  