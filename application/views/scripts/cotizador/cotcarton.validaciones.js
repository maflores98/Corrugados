$(document).ready(function(){
	$.ajax({
  type: "GET",
  url: 'buscaclientes',
    async: false,
    success: function (response) {
      $('#id_cliente').html(response);

    },
    error: function () {
      $('#id_cliente').html('Hubo un error');
    }
  });

$.ajax({
  dataType: "json",
  url: 'selarticulo',
    //async: false,
    success: function(data){
      $('select[name="articulo"]').append(data);
    }
  });

$('select[name="articulo"]').change(function(){

if( $('select[name="articulo"]').val() == 'CAJAS CON IMPRESION' )
{
  $(".oculto").show();
} 
else if( $('select[name="articulo"]').val() == 'CAJAS SIN IMPRESION' )
{
  $(".oculto").hide();
}

  var value = $('select[name="articulo"] option:selected').data('descripcion');

  $.ajax({
    dataType: "json",
    url: 'selproducto',
    type: "POST",
    data: {Clasificacion : value},
    success: function(data){
      $('select[name="tipo_producto"]').html('<option value="null">SELECCIONAR</option>');
      $('select[name="tipo_producto"]').append(data);
    }
  });
});

$('select[name="tipo_producto"]').change(function(){
 var value = 8;

 $.ajax({
  dataType: "json",
  url: 'tipomaterial',
  type: "POST",
  data: {tipoMaterial : value},
  success: function(data){
    $('select[name="tipo_material"]').html('<option value="null">SELECCIONAR</option>');
    $('select[name="tipo_material"]').append(data);
  }
});
});

$('select[name="tipo_material"]').change(function(){

  var texto = $('select[name="tipo_material"] option:selected').text();

  $.ajax({
    dataType: "json",
    url: 'selmatcorrugados',
    type: "POST",
    data: {Material : texto},
    success: function(data){
      $('select[name="carton"]').html('<option value="null">SELECCIONAR</option>');
      $('select[name="carton"]').append(data);
    }
  });
});

$.ajax({
  dataType: "json",
  url: 'seltiposcamiones',
  type: "POST",
  //data: {Material : texto},
  success: function(data){
    $('select[name="tipo_camion1"]').html('<option value="null">SELECCIONAR</option>');
    $('select[name="tipo_camion1"]').append(data);
    $('select[name="tipo_camion2"]').html('<option value="null">SELECCIONAR</option>');
    $('select[name="tipo_camion2"]').append(data);
    $('select[name="tipo_camion3"]').html('<option value="null">SELECCIONAR</option>');
    $('select[name="tipo_camion3"]').append(data);        
  }
});

  $('select[name="carton"]').change(function(){

    var descripcion = $('select[name="carton"] option:selected').text();

    $.ajax({
      dataType: "json",
      url: 'seltamcorrugados',
      type: "POST",
      data: {Descripcion : descripcion},
      success: function(data2){
        $('select[name="tam-carton"]').html('<option value="null">SELECCIONAR</option>');
        $('select[name="tam-carton"]').append(data2);

      }
    });

  });

$('input[name="selector_material"]:radio').click(function(){


  var value = $('input[name="selector_material"]:checked').val();

  $.ajax({
    dataType: "json",
    url: 'tipomaterial',
    type: "POST",
    data: {'tipoMaterial' : value},
    success: function(data){
      $('select[name="tipo_material"]').html('<option value="null">SELECCIONAR</option>');
      $('select[name="carton"]').html('<option value="null">SELECCIONAR</option>');
      $('select[name="tam-carton"]').html('<option value="null">SELECCIONAR</option>');
      $('select[name="tipo_material"]').append(data);
    }
  });

});

$('#med_frente' ).keyup(function() {
	if( $('input[name="tipo_medida"]').prop )
  $.medidas();
});

$('#med_fondo' ).keyup(function() {
  $.medidas();
});

$('#med_alto').keyup(function() {
  $.medidas();
}); 

$('input[name="tipo_medida"]').click(function() {
	alert($(this).val());
	alert("hola");
if( $(this).val() == 1 )
  {
  	alert($(this).val());
    $("#med_ancho").attr("disabled", true);
    $("#med_largo").attr("disabled", true);
    $("#med_frente").attr("disabled", false);
    $("#med_fondo").attr("disabled", false);
    $("#med_alto").attr("disabled", false);
    $.medidascaja();
  }  
  else if( $(this).val() == 2 )
  {
  	alert($(this).val());
  $("#med_frente").attr("disabled", true);
  $("#med_fondo").attr("disabled", true);
  $("#med_alto").attr("disabled", true);
  $("#med_ancho").attr("disabled", false);
  $("#med_largo").attr("disabled", false); 
  $.medidascarton();   
  }  
});

$("#cant_requerida").change(function(){
	$.margen();
});

/*$('input[id="caja"]').click(function(){

if( $('input[id="caja"]').val() == 1 )
  {
    alert( $('input[id="caja"]').val() );
    $("#med_ancho").attr("disabled", true);
    $("#med_largo").attr("disabled", true);
    $("#med_frente").attr("disabled", false);
    $("#med_fondo").attr("disabled", false);
    $("#med_alto").attr("disabled", false);
  }
});

$('input[id="carton"]').click(function(){
  alert($('input[id="carton"]').val());
  $("#med_frente").attr("disabled", true);
  $("#med_fondo").attr("disabled", true);
  $("#med_alto").attr("disabled", true);
  $("#med_ancho").attr("disabled", false);
  $("#med_largo").attr("disabled", false);
});*/
});