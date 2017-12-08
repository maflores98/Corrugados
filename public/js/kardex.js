$(document).ready(function(){

	table = $('#kardex').DataTable({
		ajax: 'existencia',
		dom: '<lfpti>',
		scrollY: "350px",
		scrollCollapse: true,
		paging: false,
		language: {
			"info": "Viendo  _TOTAL_ de _MAX_ registros.",
			"infoEmpty": "Viendo  _TOTAL_ de _MAX_ registros.",
			"infoFiltered": "",
		},
		"columns":[
		{
			data:"Clave",
			width:"15%"
		},
		{data:"Descripcion"},
		{
			data:"Existencia",
			width:"10%"
		},
		{
			data:"unidad",
			width:"10%"
		},
		{
			data: "detalle",
			width:"5%"
		}
		],
		"columnDefs": [
		{
			"className": "dt-center",
			"targets": [3,4]
		},
		{
			"className": "dt-right",
			"targets": 2
		}
		]
	});

	datos_modal("#kardex tbody", table);

	$.ajax({
		dataType: "json",
		url: 'tiposmovimiento',
		success: function(data){

			$('#Movimiento').append(data);

		}
	});

	$( '#btn-addMovimiento' ).click(function(){

		LimpiarModalAdd();

		$( '#KardexModal').modal("show");

	});

	$( "#Movimiento" ).change(function() {

		$('#TipoMovimiento').val($('#Movimiento option:selected').data('val'));

	});

	$( "#Estatus" ).change(function() {

		$('#articulo').val($('#Estatus option:selected').data('clave'));

	});


	$( "#Movimiento" ).change(function() {

		$('#TipoMovimiento').val($('#Movimiento option:selected').data('val'))

	});

	/*$( "#KardexModal #articulo" ).change(function() {

		var clave = $(this).val();

		$.ajax({
			dataType: "json",
			data: {"clave":clave},
			url: 'getarticulo',
			type:  'post',
			success: function(data){
				if(data.validacion){

					$( "#KardexModal #Estatus" ).val(data.articulo);
					$( "#KardexModal #Estatus" ).attr('data-id', data.id_material);
					$( "#KardexModal #cantidad" ).attr('data-unidad', data.unidad);
					
				}else{

					swal(
						'¡Error!',
						'Artículo no encontrado',
						'error'
						);

					$( "#KardexModal #Estatus" ).val("");
					$( "#KardexModal #Estatus" ).removeAttr('data-id');
					$( "#KardexModal #cantidad" ).removeAttr('data-unidad');

				}
			}
		});
	});*/



	$( "#KardexModal #addMovimiento" ).click(function() {

		estatus = $('#Estatus option:selected').data('id');
		cantidad = $('#cantidad').val();
		unidad = $('#cantidad').data('unidad');
		movimiento = $('#Movimiento').val();
		tipomovimiento = $('#TipoMovimiento').val();

		if(tipomovimiento == 'SALIDA'){
			cantidad = "-"+cantidad;
		}
		
		notas = $('#message-text').val();

		data = {
			'id_articulo' : estatus,
			'cantidad' : cantidad,
			'unidad' : unidad,
			'id_movimiento' : movimiento,
			'tipomovimiento' : tipomovimiento,
			'id_estatus' : 1,
			'id_usuario' : 1,
			'notas' : notas
		};

		$.ajax({
			dataType: "json",
			data: data,
			url: 'addmovimiento',
			type:  'post',
			success: function(data){
				if(data.validacion){

					LimpiarModalAdd();
					swal(
						'¡Correcto!',
						'Se ha guardado el movimiento',
						'success'
						);

					table.ajax.reload();
					
				}
			}
		});
	});

	function datos_modal(tbody, table){

		$(tbody).on("click", "a.btn-detalles", function () {

			var data = table.row($(this).parents("tr")).data();
			titulo = data.Descripcion;

			//id_articulo = $(this).data("id");

			$.ajax({
				dataType: "json",
				data: {"Material": titulo},
				url: 'getmovimientos',
				type:  'post',
				success: function(data){

					if(data.validacion){

						var datos = data.data;

						$('#DetalleModal #myModaltitle').text(titulo+" | Detalle de movimientos");

						/*for(var i=0; datos.length>i;i++){
							$('#body-detalle').append('<tr><td>'++'</td><td>1</td><td>3</td><td>4</td><td>5</td></tr>')
						}*/
						tableDetalle = $('#detalle').DataTable({
							data: datos,
							scrollY: "200px",
							scrollCollapse: true,
							paging: false,
							dom: "ftri",
							"columns":[
							{
								data:"material",
								width:"25%"
							},
							{
								data:"movimiento"
							},
							{
								data:"tipomovimiento"
							},
							{
								data:"estatus"
							},
							{
								data:"usuario"
							},
							{
								data:"cantidad",
								width:"10%"
							},
							{
								data: "unidad",
								width:"10%"
							},
							{
								data:"fecha"
							}
							],
							"columnDefs": [
							{
								"className": "dt-center",
								"targets": [2,4]
							},
							{
								"className": "dt-right",
								"targets": [5]
							}
							]
						});

						$('#DetalleModal').modal("show");

						return false;
					}

					swal(
						'¡Atención!',
						'No existen movimientos',
						'warning'
						);

					return false;


				}
			});


		});

	}


	function LimpiarModalAdd () {

		$( '#KardexModal input' ).val("");
		$( '#KardexModal select' ).prop('selectedIndex',0);
		$( '#KardexModal textarea' ).val("");
		$( '#Estatus' ).selectpicker('refresh');
		$( '#KardexModal #Estatus' ).focus();
	}

	$('#DetalleModal').on('hidden.bs.modal', function (e) {
		tableDetalle.destroy();
	});

	$('#DetalleModal').on('shown.bs.modal', function() {
		tableDetalle.columns.adjust()
	});

	$("#KardexModal").on('show.bs.modal', function () {
		$.ajax({
			type: "GET",
			url: 'getallarticulo',
			data: {},
			success: function (response) {
				$('#Estatus').html(response).selectpicker('refresh');
			},
			error: function () {
				$('#Estatus').html('Hubo un error');
			}
		});
	});

});