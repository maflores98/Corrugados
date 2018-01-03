$(document).ready(function(){

var idcliente, idproveedor, idmaterial,idusuario;
///////////////////////////////////////////////////////
///						CLIENTES					///
///////////////////////////////////////////////////////	
        $.ajax({
          dataType: "json",
          url: 'llenarcombocategorias',
          type: "POST",
          success: function(data){
            $('select[name="categoria"]').html('<option value="0" selected>ELIGE</option>');
            $('select[name="categoria"]').append(data);
          }
        });

        $.ajax({
          dataType: "json",
          url: 'llenarcombotiposestatus',
          type: "POST",
          success: function(data){
            $('select[name="estatus"]').html('<option value="0" selected>ELIGE</option>');
            $('select[name="estatus"]').append(data);
          }
        });      

        $.ajax({
          dataType: "json",
          url: 'llenarcombovendedores',
          type: "POST",
          success: function(data){
            $('select[name="vendedor"]').html('<option value="0" selected>ELIGE</option>');
            $('select[name="vendedor"]').append(data);
          }
        });

	var catClientes = $('#catClientes').DataTable({
		ajax:{
			url: 'consultarclientes'
		}, 	
		//"info" : false,
		//"searching": false,
		"paging":    false,
		"scrollY":   '58vh',
		//"scrollX": true	
        dom: 'Blfrtip',
      		buttons: [
            'excel'
        ],			
		"columns":[
			{data:"id_cliente"},
			{data:"rcomercial"},
			{data:"rfc"},
			{data:"telefono"},
			{data:"pagweb"},
			{data:"id_estatus"},
			{data:"detalle"}
		],	
		"columnDefs": [
		{
			"className": "dt-center",
			"targets": [5,6]
		},
		]					
	});	

	$( ".buttons-excel" ).hide();	
      $( "#excel-clientes" ).on( "click", function() {
        $( ".buttons-excel" ).trigger( "click" );
      });  	

	$('#catClientes').on("click", "a.btn-detalles", function () 
	{
		$("#nuevocliente").hide();
		$("#actualizarcliente").show();
		var data = catClientes.row($(this).parents("tr")).data();
		idcliente = data.id_cliente;
		$.post('extraercliente', {idcliente:idcliente},
			function(result)
			{
			console.log(result.rcomercial);				
					$("#rcomercial").val(result.rcomercial);
					$("#rfc").val(result.rfc);	
					$("#telefono").val(result["telefono"]);
					$("#pagweb").val(result.pagweb);
					$("#categoria").val(result.id_categoria);
					$("#estatus").val(result.id_estatus);
					$("#cpago").val(result.condpago);
					$("#drevision").val(result.diasrevision);
					$("#contacto1").val(result.contacto1);
					$("#mailcontacto1").val(result.mailcont1);
					$("#referencia1").val(result.refcont1);
					$("#contacto2").val(result.contacto2);
					$("#mailcontacto2").val(result.mailcont2);
					$("#referencia2").val(result.refcont2);
					$("#contacto3").val(result.contacto3);
					$("#mailcontacto3").val(result.mailcont3);
					$("#referencia3").val(result.refcont3);
					$("#vendedor").val(result.id_vendedor);
					$("#detalleModal").modal('show');	
			},'json'
		);
		
	});

	$("#actualizarcliente").click(function(){
		var cadena = $("#frmactualizarcliente").serialize()+'&id_cliente='+idcliente;
		console.log(cadena);
		$.post('actualizarcliente', cadena,
			function(result)
			{
				swal("Actualizado","success");
				$("#detalleModal").modal('hide');
				catClientes.ajax.reload();
			},'json'
		);
	});

	$("#btnnuevocliente").click(function(){
		$("#actualizarcliente").hide();
		$("#nuevocliente").show();
		$("#rcomercial").val("");
		$("#rfc").val("");	
		$("#telefono").val("");
		$("#pagweb").val("");
		$("#categoria").val("");
		$("select[id=categoria]").val("0");
		$("select[id=estatus]").val("0");		
		$("#cpago").val("");
		$("#drevision").val("");
		$("#contacto1").val("");
		$("#mailcontacto1").val("");
		$("#referencia1").val("");
		$("#contacto2").val("");
		$("#mailcontacto2").val("");
		$("#referencia2").val("");
		$("#contacto3").val("");
		$("#mailcontacto3").val("");
		$("#referencia3").val("");
		$("select[id=vendedor]").val("0");	
	});

	$("#nuevocliente").click(function(){
		var cadena = $("#frmactualizarcliente").serialize();
		console.log(cadena);
		$.post('insertarcliente', cadena,
			function(result)
			{
				swal("Se registro","success");
				$("#detalleModal").modal('hide');
				catClientes.ajax.reload();
			},'json'
		);		
	});

///////////////////////////////////////////////////////
///						PROVEEDORES					///
///////////////////////////////////////////////////////	

        $.ajax({
          dataType: "json",
          url: 'llenarcomboproveedores',
          type: "POST",
          success: function(data){
            $('select[name="proveedor"]').html('<option value="0" selected>ELIGE</option>');
            $('select[name="proveedor"]').append(data);
          }
        });

	var catProveedores = $('#catProveedores').DataTable({
		ajax:{
			url: 'consultarproveedores'
		}, 	
		//"info" : false,
		//"searching": false,
		"paging":    false,
		"scrollY":   '58vh',
		//"scrollX": true	
        dom: 'Blfrtip',
      		buttons: [
            'excel'
        ],			
		"columns":[
			{data:"id_proveedor"},
			{data:"rcomercial"},
			{data:"rfc"},
			{data:"telefono"},
			{data:"pagweb"},
			{data:"id_estatus"},
			{data:"detalle"}
		],	
		"columnDefs": [
		{
			"className": "dt-center",
			"targets": [5,6]
		},
		]					
	});	

	$( ".buttons-excel" ).hide();	
      $( "#excel-proveedores" ).on( "click", function() {
        $( ".buttons-excel" ).trigger( "click" );
      });  	

	$('#catProveedores').on("click", "a.btn-detalles", function () 
	{
		$("#nuevoproveedor").hide();
		$("#actualizarproveedor").show();
		var data = catProveedores.row($(this).parents("tr")).data();
		idproveedor = data.id_proveedor;
		$.post('extraerproveedor', {idproveedor:idproveedor},
			function(result)
			{
			console.log(result.rcomercial);				
					$("#rcomercial").val(result.rcomercial);
					$("#rfc").val(result.rfc);	
					$("#telefono").val(result.telefono);
					$("#pagweb").val(result.pagweb);
					$("#calle").val(result.calle);
					$("#colonia").val(result.colonia);
					$("#municipio").val(result.municipio);
					$("#ciudad").val(result.ciudad);
					$("#estado").val(result.estado);
					$("#cp").val(result.cp);			
					$("#categoria").val(result.id_categoria);
					$("#estatus").val(result.id_estatus);
					$("#cpago").val(result.condpago);
					$("#drevision").val(result.diasrevision);
					$("#contacto1").val(result.contacto1);
					$("#mailcontacto1").val(result.mailcont1);
					$("#referencia1").val(result.refcont1);
					$("#contacto2").val(result.contacto2);
					$("#mailcontacto2").val(result.mailcont2);
					$("#referencia2").val(result.refcont2);
					$("#contacto3").val(result.contacto3);
					$("#mailcontacto3").val(result.mailcont3);
					$("#referencia3").val(result.refcont3);
					//$("#vendedor").val(result.id_vendedor);
					$("#detalleModal").modal('show');	
			},'json'
		);
		
	});

	$("#actualizarproveedor").click(function(){
		var cadena = $("#frmactualizarproveedor").serialize()+'&id_proveedor='+idproveedor;
		console.log(cadena);
		$.post('actualizarproveedor', cadena,
			function(result)
			{
				swal("Actualizado","success");
				$("#detalleModal").modal('hide');
				catProveedores.ajax.reload();
			},'json'
		);
	});

	$("#btnnuevoproveedor").click(function(){
		$("#actualizarproveedor").hide();
		$("#nuevoproveedor").show();
		$("#rcomercial").val("");
		$("#rfc").val("");	
		$("#telefono").val("");
		$("#pagweb").val("");
		$("#calle").val("");
		$("#colonia").val("");
		$("#municipio").val("");
		$("#ciudad").val("");
		$("#estado").val("");
		$("#cp").val("");		
		$("#categoria").val("");
		$("select[id=categoria]").val("0");
		$("select[id=estatus]").val("0");		
		$("#cpago").val("");
		$("#drevision").val("");
		$("#contacto1").val("");
		$("#mailcontacto1").val("");
		$("#referencia1").val("");
		$("#contacto2").val("");
		$("#mailcontacto2").val("");
		$("#referencia2").val("");
		$("#contacto3").val("");
		$("#mailcontacto3").val("");
		$("#referencia3").val("");
		//$("select[id=vendedor]").val("0");	
	});

	$("#nuevoproveedor").click(function(){
		var cadena = $("#frmactualizarproveedor").serialize();
		console.log(cadena);
		$.post('insertarproveedor', cadena,
			function(result)
			{
				swal("Se registro","success");
				$("#detalleModal").modal('hide');
				catProveedores.ajax.reload();
			},'json'
		);		
	});

///////////////////////////////////////////////////////
///						MATERIALES					///
///////////////////////////////////////////////////////	

        $.ajax({
          dataType: "json",
          url: 'llenarcombocategoriasmateriales',
          type: "POST",
          success: function(data){
            $('select[name="categoriamateriales"]').html('<option value="0" selected>ELIGE</option>');
            $('select[name="categoriamateriales"]').append(data);
          }
        });

	var catMateriales = $('#catMateriales').DataTable({
		ajax:{
			url: 'consultarmateriales'
		}, 	
		//"info" : false,
		//"searching": false,
		"paging":    false,
		"scrollY":   '58vh',
		//"scrollX": true	
        dom: 'Blfrtip',
      		buttons: [
            'excel'
        ],			
		"columns":[
			{data:"id_material"},
			{data:"clave"},
			{data:"descripcion"},
			{data:"id_cli-prov"},
			{data:"id_categoria"},
			{data:"costo"},
			{data:"unidad"},
			{data:"id_estatus"},
			{data:"detalle"}
		],	
		"columnDefs": [
		{
			"className": "dt-center",
			"targets": [3,4,5,6,7,8]
		},
		]					
	});	

	$( ".buttons-excel" ).hide();	
      $( "#excel-materiales" ).on( "click", function() {
        $( ".buttons-excel" ).trigger( "click" );
      });  	

	$('#catMateriales').on("click", "a.btn-detalles", function () 
	{
		$("#nuevomaterial").hide();
		$("#actualizarmaterial").show();
		var data = catMateriales.row($(this).parents("tr")).data();
		idmaterial = data.id_material;
		$.post('extraermaterial', {idmaterial:idmaterial},
			function(result)
			{
			console.log(result.id_cliprov);				
					$("#clave").val(result.clave);
					$("#descripcion").val(result.descripcion);	
					$("#proveedor").val(result.id_cliprov);
					$("#categoria").val(result.id_categoria);
					$("#costo").val(result.costo);
					$("#unidad").val(result.unidad);
					$("#estatus").val(result.id_estatus);
					$("#detalleModal").modal('show');	
			},'json'
		);
		
	});

	$("#actualizarmaterial").click(function(){
		var cadena = $("#frmactualizarmaterial").serialize()+'&id_material='+idmaterial;
		console.log(cadena);
		$.post('actualizarmaterial', cadena,
			function(result)
			{
				swal("Actualizado","success");
				$("#detalleModal").modal('hide');
				catMateriales.ajax.reload();
			},'json'
		);
	});

	$("#btnnuevomaterial").click(function(){
		$("#actualizarmaterial").hide();
		$("#nuevomaterial").show();		
		$("#clave").val("");
		$("textarea#descripcion").val("");	
		$("select[id=proveedor]").val("0");		
		$("select[id=categoria]").val("0");
		$("#costo").val("");
		$("#unidad").val("");
		$("select[id=estatus]").val("0");
	});

	$("#nuevomaterial").click(function(){
		var cadena = $("#frmactualizarmaterial").serialize();
		console.log(cadena);
		$.post('insertarmaterial', cadena,
			function(result)
			{
				swal("Se registro","success");
				$("#detalleModal").modal('hide');
				catMateriales.ajax.reload();
			},'json'
		);		
	});

///////////////////////////////////////////////////////
///						USUARIOS					///
///////////////////////////////////////////////////////	

        $.ajax({
          dataType: "json",
          url: 'llenarcombousuarios',
          type: "POST",
          success: function(data){
            $('select[name="tipousuario"]').html('<option value="0" selected>ELIGE</option>');
            $('select[name="tipousuario"]').append(data);           
          }
        });

	var catUsuarios = $('#catUsuarios').DataTable({
		ajax:{
			url: 'consultarusuarios'
		}, 	
		//"info" : false,
		//"searching": false,
		"paging":    false,
		"scrollY":   '58vh',
		//"scrollX": true	
        dom: 'Blfrtip',
      		buttons: [
            'excel'
        ],			
		"columns":[
			{data:"id_usuario"},
			{data:"usuario"},
			{data:"password"},
			{data:"correo"},
			{data:"nombre"},
			{data:"id_estatus"},
			{data:"id_tipo_usuario"},		
			{data:"detalle"}
		],	
		"columnDefs": [
		{
			"className": "dt-center",
			"targets": [5,6,7]
		},
		]					
	});	

	$( ".buttons-excel" ).hide();	
      $( "#excel-usuarios" ).on( "click", function() {
        $( ".buttons-excel" ).trigger( "click" );
      });  	

	$('#catUsuarios').on("click", "a.btn-detalles", function () 
	{
		$("#nuevousuario").hide();
		$("#actualizarusuario").show();
		var data = catUsuarios.row($(this).parents("tr")).data();
		idusuario = data.id_usuario;
		$.post('extraerusuario', {idusuario:idusuario},
			function(result)
			{
			console.log(result.rcomercial);				
					$("#usuario").val(result.usuario);
					$("#nombre").val(result.nombre);	
					$("#correo").val(result.correo);
					$("#password").val(result.password);
					$("#tipousuario").val(result.id_tipo_usuario);
					$("#estatus").val(result.id_estatus);	
					$("#detalleModal").modal('show');					
			},'json'
		);
		
	});

	$("#actualizarusuario").click(function(){
		var cadena = $("#frmactualizarusuario").serialize()+'&id_usuario='+idusuario;
		console.log(cadena);
		$.post('actualizarusuario', cadena,
			function(result)
			{
				swal("Actualizado","success");
				$("#detalleModal").modal('hide');
				catUsuarios.ajax.reload();
			},'json'
		);
	});

	$("#btnnuevousuario").click(function(){
		$("#actualizarusuario").hide();
		$("#nuevousuario").show();		
		$("#usuario").val("");
		$("#nombre").val("");	
		$("#correo").val("");
		$("#password").val("");
		$("select[id=tipousuario]").val("0");
		$("select[id=estatus]").val("0");
	});

	$("#nuevousuario").click(function(){
		var cadena = $("#frmactualizarusuario").serialize();
		console.log(cadena);
		$.post('insertarusuario', cadena,
			function(result)
			{
				swal("Se registro","success");
				$("#detalleModal").modal('hide');
				catUsuarios.ajax.reload();
			},'json'
		);		
	});


});