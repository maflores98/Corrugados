$(document).ready(function(){

  var clasificacion, clasificacion2, tipoproducto, descripcion;

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

  var clasificacion = $('select[name="articulo"] option:selected').data('descripcion');
  var clasificacion2 = $("#m2_requeridos").val().replace(",","");
  console.log(clasificacion, clasificacion2);

  if( clasificacion2 <= 700 )
  {
    $.ajax({
      dataType: "json",
      url: 'selectproducto',
      type: "POST",
      data: {clasificacion : clasificacion, clasificacion2: "<= 700"},
      success: function(data){
        $('select[name="tipo_producto"]').html('<option value="null">SELECCIONAR</option>');
        $('select[name="tipo_producto"]').append(data);
        $.costo_tinta();
        $.costo_cirel();
        $.total_material();
      }
    });
  }
  else if( clasificacion2 > 700 )
  {
    $.ajax({
      dataType: "json",
      url: 'selectproducto',
      type: "POST",
      data: {clasificacion : clasificacion, clasificacion2: "> 700"},
      success: function(data){
        $('select[name="tipo_producto"]').html('<option value="null">SELECCIONAR</option>');
        $('select[name="tipo_producto"]').append(data);
        $.costo_tinta();
        $.costo_cirel();
        $.total_material();
      }
    });  
  }
});

$('select[name="tipo_producto"]').change(function(){

  clasificacion = $('select[name="articulo"] option:selected').data('descripcion');
  clasificacion2 = $("#m2_requeridos").val().replace(",","");
  tipoproducto = $('select[name="tipo_producto"] option:selected').data('val');
  $("#grapado_merma").html("0");
  $("#grapado_arreglo").html("0");
  $("#grapado_tiro").html("0");
  $("#grapado_cunit").html("0");
  $.tipo_producto(clasificacion, clasificacion2,tipoproducto);
    /*$.post('cotizadorprocesos', {clasificacion : clasificacion, clasificacion2: clasificacion2, tipoproducto : tipoproducto},
      function(result){
        if( result.data[0].Impresion == 1 )
        {
          $.impresion();
          $.total_merma();
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        }
        if( result.data[0].FlexoRanurado == 1 )
        {
          $.flexoranurado();
          $.total_merma();
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        }
        if( result.data[0].Pegado == 1 )
        {      
          $.pegado();
          $.total_merma();                  
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        }
        if( result.data[0].Grapado == 1 )
        {      
          $.grapado();
          $.total_merma();                  
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        } 
        if( result.data[0].Refilado == 1 )
        {      
          $.refilado();
          $.total_merma();                  
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        }    
        if( result.data[0].Rayado == 1 )
        {      
          $.rayado();
          $.total_merma();                  
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        }
        if( result.data[0].Caiman == 1 )
        {      
          $.caiman();
          $.total_merma();                  
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        }
        if( result.data[0].Autoarmado == 1 )
        {      
          $.suajado();
          $.total_merma();                  
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
                    $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();
        }   
        if( result.data[0].Flejado == 1 )
        {      
          $.flejado();
          $.total_merma();                  
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        }
        if( result.data[0].Entarimado == 1 )
        {      
          $.entarimado();
          $.total_merma();                  
          $.total_arreglo();
          $.total_tiro();
          $.total_cunit();
          $.costocarton();
          $.total_material();
          $.importe();
          $.totalmargen();
          $.preciounitario();
          $.total();                    
        }                                                            
      },'json'
    );*/
});

$('select[name="tipo_material"]').change(function(){

  var texto = $('select[name="tipo_material"] option:selected').val();
  $.ajax({
    dataType: "json",
    url: 'selmatcorrugados',
    type: "POST",
    data: {Material : texto},
    success: function(data){
      $('select[name="tipo_carton"]').html('<option value="null">SELECCIONAR</option>');
      $('select[name="tipo_carton"]').append(data);
    }
  });
});

$.ajax({
    dataType: "json",
    url: 'seltiposcamiones',
    //type: "POST",
    //data: {Material : texto},
    success: function(data){
      $('select[name="tipo_camion1"]').html('<option value="SELECCIONAR" selected disabled>SELECCIONAR</option>');
      $('select[name="tipo_camion1"]').append(data);
      $('select[name="tipo_camion1"]').append('<option value="NINGUNO">NINGUNO</option>');

      $('select[name="tipo_camion2"]').html('<option value="SELECCIONAR" selected disabled>SELECCIONAR</option>');
      $('select[name="tipo_camion2"]').append(data);
      $('select[name="tipo_camion2"]').append('<option value="NINGUNO">NINGUNO</option>');

      $('select[name="tipo_camion3"]').html('<option value="SELECCIONAR" selected disabled>SELECCIONAR</option>');
      $('select[name="tipo_camion3"]').append(data); 
      $('select[name="tipo_camion3"]').append('<option value="NINGUNO">NINGUNO</option>');           
    }
});

$('select[name="tipo_carton"]').change(function(){
  descripcion = $('select[name="tipo_carton"] option:selected').val();
  $.tipo_carton(descripcion);
  /*$.ajax({
    dataType: "json",
    url: 'seltamcorrugados',
    type: "POST",
    data: {Descripcion : descripcion},
    success: function(data2){
      $('select[name="tam-carton"]').html('<option value="null">SELECCIONAR</option>');
      $('select[name="tam-carton"]').append(data2.data);      

      $("#costo_m2").html(trunc(data2.costo,2));
      $.costocarton();
      $.total_material();
      $.importe();
      $.totalmargen();
      $.preciounitario();
      $.total();      
    }
  });*/
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
$.medidas();
if( $("#caja").prop("checked", true) )
{
  $.medidascaja();
}
});

$('#med_fondo' ).keyup(function() {
 $.medidas();
 if( $("#caja").prop("checked", true) )
 {
  $.medidascaja();
}
});

$('#med_alto').keyup(function() {
 $.medidas();
 if( $("#caja").prop("checked", true) )
 {
  $.medidascaja();
}
}); 

$("#med_largo").keyup(function(){
 if( $("#carton").prop("checked", true) )
 {
  $.medidascarton();
}
});

$("#med_ancho").keyup(function(){
  if( $("#carton").prop("checked", true) )
  {
    $.medidascarton();
  }});

$('input[name="tipo_medida"]').click(function() {
  if( $(this).val() == 1 )
  {
    //$("#med_ancho").attr("disabled", true);
    //$("#med_largo").attr("disabled", true);
    //$("#med_frente").attr("disabled", false);
    //$("#med_fondo").attr("disabled", false);
    //$("#med_alto").attr("disabled", false);
    $.medidascaja();
    $.costocarton();
    $.total_material();
    $.total_merma();
    $.total_material();
  }  
  else if( $(this).val() == 2 )
  {
    //$("#med_frente").attr("disabled", true);
    //$("#med_fondo").attr("disabled", true);
    //$("#med_alto").attr("disabled", true);
    //$("#med_ancho").attr("disabled", false);
    //$("#med_largo").attr("disabled", false); 
    $.medidascarton();
    $.costocarton(); 
    $.total_material();
    $.total_merma();
    $.total_material();  
  }  
});

$("#cant_requerida").change(function(){
  $("#total_enviado").html("0");
  $("#difvs_pedido").html("0");
  $("#total_envio").html("0"); 
  $.tipo_producto(clasificacion, clasificacion2,tipoproducto); 
  $.margen();
  $.total_merma();
  $.total_envio();
});

$("#no_tintas").bind('keyup mouseup',function(){
  var no_tintas = this.value;
  switch(no_tintas) 
  {
    case '1':
        $("#t1_largo").attr("disabled",false);
        $("#t1_ancho").attr("disabled",false);

        $("#t2_largo").attr("disabled",true);    
        $("#t3_largo").attr("disabled",true);    
        $("#t4_largo").attr("disabled",true);
        $("#t2_ancho").attr("disabled",true);    
        $("#t3_ancho").attr("disabled",true);    
        $("#t4_ancho").attr("disabled",true); 

        $("#t2_largo").val("");    
        $("#t3_largo").val("");    
        $("#t4_largo").val("");
        $("#t2_ancho").val("");    
        $("#t3_ancho").val("");    
        $("#t4_ancho").val("");

        $("#t2_res").val("0");    
        $("#t3_res").val("0");    
        $("#t4_res").val("0");
        $.totaltinta();               
        $.costo_tinta();
        $.costo_cirel();
        $.total_material();
        $.importe();
        $.totalmargen();
        $.preciounitario();
        $.total();        
        break;
    case '2':
        $("#t1_largo").attr("disabled",false);
        $("#t2_largo").attr("disabled",false);
        $("#t1_ancho").attr("disabled",false);
        $("#t2_ancho").attr("disabled",false);

        $("#t3_largo").attr("disabled",true);    
        $("#t4_largo").attr("disabled",true);
        $("#t3_ancho").attr("disabled",true);    
        $("#t4_ancho").attr("disabled",true);   

        $("#t3_largo").val("");    
        $("#t4_largo").val("");
        $("#t3_ancho").val("");    
        $("#t4_ancho").val("");

        $("#t3_res").val("0");    
        $("#t4_res").val("0");        
        $.totaltinta();             
        $.costo_tinta();
        $.costo_cirel();
        $.total_material();
        $.importe();
        $.totalmargen();
        $.preciounitario();
        $.total();        
        break;
    case '3':
        $("#t1_largo").attr("disabled",false);
        $("#t2_largo").attr("disabled",false);    
        $("#t3_largo").attr("disabled",false);
        $("#t1_ancho").attr("disabled",false);
        $("#t2_ancho").attr("disabled",false);    
        $("#t3_ancho").attr("disabled",false);

        $("#t4_largo").attr("disabled",true);
        $("#t4_ancho").attr("disabled",true);

        $("#t4_largo").val("");
        $("#t4_ancho").val("");

        $("#t4_res").val("0");
        $.totaltinta();                                
        $.costo_tinta();
        $.costo_cirel();
        $.total_material();
        $.importe();
        $.totalmargen();
        $.preciounitario();
        $.total();        
        break;
    case '4':
        $("#t1_largo").attr("disabled",false);
        $("#t2_largo").attr("disabled",false);    
        $("#t3_largo").attr("disabled",false);    
        $("#t4_largo").attr("disabled",false);
        $("#t1_ancho").attr("disabled",false);
        $("#t2_ancho").attr("disabled",false);    
        $("#t3_ancho").attr("disabled",false);    
        $("#t4_ancho").attr("disabled",false);
        $.totaltinta();        
        $.costo_tinta();
        $.costo_cirel();
        $.total_material();
        $.importe();
        $.totalmargen();
        $.preciounitario();
        $.total();        
        break;                
  }
});

$("#t1_largo").keyup(function(){
  $("#t1_res").val( $("#t1_largo").val() * $("#t1_ancho").val() );
  $.totaltinta();
  $.costo_tinta();
  $.costo_cirel();
  $.total_material();
  $.importe();
  $.totalmargen();
  $.preciounitario();
  $.total();
});

$("#t1_ancho").keyup(function(){
  $("#t1_res").val( $("#t1_ancho").val() * $("#t1_largo").val() );
  $.totaltinta();
  $.costo_tinta();
  $.costo_cirel();
  $.total_material();
  $.importe();
  $.totalmargen();
  $.preciounitario();
  $.total();
});

$("#t2_largo").keyup(function(){
  $("#t2_res").val( $("#t2_largo").val() * $("#t2_ancho").val() );
  $.totaltinta();
  $.costo_tinta();
  $.costo_cirel();
  $.total_material();
  $.importe();
  $.totalmargen();
  $.preciounitario();
  $.total();
});

$("#t2_ancho").keyup(function(){
  $("#t2_res").val( $("#t2_ancho").val() * $("#t2_largo").val() );
  $.totaltinta();
  $.costo_tinta();
  $.costo_cirel();
  $.total_material();
  $.importe();
  $.totalmargen();
  $.preciounitario();
  $.total();
});

$("#t3_largo").keyup(function(){
  $("#t3_res").val( $("#t3_largo").val() * $("#t3_ancho").val() );
  $.totaltinta();
  $.costo_tinta();
  $.costo_cirel();
  $.total_material();
  $.importe();
  $.totalmargen();
  $.preciounitario();
  $.total();    
});

$("#t3_ancho").keyup(function(){
  $("#t3_res").val( $("#t3_ancho").val() * $("#t3_largo").val() );
  $.totaltinta();
  $.costo_tinta();
  $.costo_cirel();
  $.total_material();
  $.importe();
  $.totalmargen();
  $.preciounitario();
  $.total();    
});

$("#t4_largo").keyup(function(){
  $("#t4_res").val( $("#t4_largo").val() * $("#t4_ancho").val() );
  $.totaltinta();
  $.costo_tinta();
  $.costo_cirel();
  $.total_material();
  $.importe();
  $.totalmargen();
  $.preciounitario();
  $.total();    
});

$("#t4_ancho").keyup(function(){
  $("#t4_res").val( $("#t4_ancho").val() * $("#t4_largo").val() );
  $.totaltinta();
  $.costo_tinta();
  $.costo_cirel();
  $.total_material();
  $.importe();
  $.totalmargen();
  $.preciounitario();
  $.total();    
});

$("#refiladorayado").click(function(){
  if(this.checked)
  {
    $.refilado();
    $.rayado();
    $.total_merma();                  
    $.total_arreglo();
    $.total_tiro();
    $.total_cunit();
    $.costocarton();
    $.total_material();
  }
  else
  {
    $("#rayado_merma").html("0");
    $("#rayado_arreglo").html("0");
    $("#rayado_tiro").html("0");
    $("#rayado_cunit").html("0");
    $("#refilado_merma").html("0");
    $("#refilado_arreglo").html("0");
    $("#refilado_tiro").html("0");
    $("#refilado_cunit").html("0");
    $.total_merma();                  
    $.total_arreglo();
    $.total_tiro();
    $.total_cunit();
    $.costocarton();
    $.total_material();    
  }
});

$("#tipo_suajado").change(function(){
  $.suajado();
  $.total_merma();                  
  $.total_arreglo();
  $.total_tiro();
  $.total_cunit();
  $.costocarton();
  $.total_material();
});

$("#cm_suaje").change(function(){
  $.suajado();
  $.total_merma();                  
  $.total_arreglo();
  $.total_tiro();
  $.total_cunit();
  $.costocarton();
  $.total_material();
});

$("#tipo_camion1").change(function(){
  if( $("#tipo_camion1").val() == 'NINGUNO' )
  {
    $("#capacidad1").html("0");
    $("#costo_viaje1").html("0");
    $("#cant_enviar1").val("");
    $("#cant_enviar1").attr("disabled", true);
    $("#num_viajes1").html("0");
    $("#costo_total1").html("0");
  }
  else
  {
  var tipo_camion1 = $("#tipo_camion1").val();
  $("#cant_enviar1").attr("disabled", false);
    $.ajax({
      dataType: "json",
      url: 'detallecamiones',
      type: "POST",
      data: {tipo_camion : tipo_camion1},
      success: function(result){
        $("#capacidad1").html(result.data[0].capacidad);
        $("#costo_viaje1").html(number_format(result.data[0].costo_viaje));
      }
    });    
  }  
});

$("#tipo_camion2").change(function(){
  if( $("#tipo_camion2").val() == 'NINGUNO' )
  {
    $("#capacidad2").html("0");
    $("#costo_viaje2").html("0");
    $("#cant_enviar2").val("");
    $("#cant_enviar2").attr("disabled", true);
    $("#num_viajes2").html("0");
    $("#costo_total2").html("0");
  }
  else
  {  
    var tipo_camion2 = $("#tipo_camion2").val();
    $("#cant_enviar2").attr("disabled", false);
    $.ajax
    (
      {
        dataType: "json",
        url: 'detallecamiones',
        type: "POST",
        data: {tipo_camion : tipo_camion2},
        success: function(result)
        {
          $("#capacidad2").html(result.data[0].capacidad);
          $("#costo_viaje2").html(number_format(result.data[0].costo_viaje));
        }
      }
    );  
  }
});

$("#tipo_camion3").change(function(){
  if( $("#tipo_camion3").val() == 'NINGUNO' )
  {
    $("#capacidad3").html("0");
    $("#costo_viaje3").html("0");
    $("#cant_enviar3").val("");
    $("#cant_enviar3").attr("disabled", true);
    $("#num_viajes3").html("0");
    $("#costo_total3").html("0");
  }
  else
  {    
    var tipo_camion3 = $("#tipo_camion3").val();
    $("#cant_enviar3").attr("disabled", false);
    $.ajax
    (
      {
        dataType: "json",
        url: 'detallecamiones',
        type: "POST",
        data: {tipo_camion : tipo_camion3},
        success: function(result)
        {
          $("#capacidad3").html(result.data[0].capacidad);
          $("#costo_viaje3").html(number_format(result.data[0].costo_viaje));
        }
      }
    );
  }  
});

$("#cant_enviar1").change(function(){

  $("#total_enviado").html("0");
  $("#difvs_pedido").html("0");
  $("#total_envio").html("0");

  if( $("#cant_enviar1").val() > 1000 )
  {
    var num_viajes1 = $("#cant_enviar1").val() / $("#capacidad1").text();
    $("#num_viajes1").html(currency(Math.ceil(num_viajes1)),2);
  }
  else
  {
    var num_viajes1 = $("#cant_enviar1").val() / $("#capacidad1").text();
    $("#num_viajes1").html(currency(num_viajes1,2));
  }

  if($("#cant_enviar1").val() > 1)
  {
    var costo_envio1 = parseFloat($("#num_viajes1").text().replace(/,/gi,'')) * parseFloat($("#costo_viaje1").text().replace(/,/gi,''));
    $("#costo_envio1").html(currency(costo_envio1,2));
    $.total_envio();
    $.importe();
    $.totalmargen();
    $.preciounitario();
    $.total();    
  }
  else
  {
    $("#costo_envio1").html("0");
    $.total_envio();
    $.importe();
    $.totalmargen();
    $.preciounitario();
    $.total();    
  }
});

$("#cant_enviar2").change(function(){

  $("#total_enviado").html("0");
  $("#difvs_pedido").html("0");
  $("#total_envio").html("0");

  if( $("#cant_enviar2").val() > 1000 )
  {
    var num_viajes2 = $("#cant_enviar2").val() / $("#capacidad2").text();
    $("#num_viajes2").html(currency(Math.ceil(num_viajes2)),2);
  }
  else
  {
    var num_viajes2 = $("#cant_enviar2").val() / $("#capacidad2").text();
    $("#num_viajes2").html(currency(num_viajes2,2));
  }

  if($("#cant_enviar2").val() > 1)
  {
    var costo_envio2 = parseFloat($("#num_viajes2").text().replace(/,/gi,'')) * parseFloat($("#costo_viaje2").text().replace(/,/gi,''));
    $("#costo_envio2").html(currency(costo_envio2,2));
    $.total_envio();
  }
  else
  {
    $("#costo_envio1").html("0");
    $.total_envio();
  }
});

function currency(value, decimals, separators) {
    decimals = decimals >= 0 ? parseInt(decimals, 0) : 2;
    separators = separators || [',', ",", '.'];
    var number = (parseFloat(value) || 0).toFixed(decimals);
    if (number.length <= (4 + decimals))
        return number.replace('.', separators[separators.length - 1]);
    var parts = number.split(/[-.]/);
    value = parts[parts.length > 1 ? parts.length - 2 : 0];
    var result = value.substr(value.length - 3, 3) + (parts.length > 1 ?
        separators[separators.length - 1] + parts[parts.length - 1] : '');
    var start = value.length - 6;
    var idx = 0;
    while (start > -3) {
        result = (start > 0 ? value.substr(start, 3) : value.substr(0, 3 + start))
            + separators[idx] + result;
        idx = (++idx) % 2;
        start -= 3;
    }
    return (parts.length == 3 ? '-' : '') + result;
}

function number_format(amount, decimals) {

amount += ''; // por si pasan un numero en vez de un string
amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

decimals = decimals || 0; // por si la variable no fue fue pasada

// si no es un numero o es igual a cero retorno el mismo cero
if (isNaN(amount) || amount === 0) 
  return parseFloat(0).toFixed(decimals);

// si es mayor o menor que cero retorno el valor formateado como numero
amount = '' + amount.toFixed(decimals);

var amount_parts = amount.split('.'),
regexp = /(\d+)(\d{3})/;

while (regexp.test(amount_parts[0]))
  amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');

return amount_parts.join('.');
}

function trunc (x, posiciones = 0) {
  var s = x.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1

  if (l - decimalLength <= posiciones){
    return x
  }
  // Parte decimal del número
  var isNeg  = x < 0
  var decimal =  x % 1
  var entera  = isNeg ? Math.ceil(x) : Math.floor(x)
  // Parte decimal como número entero
  // Ejemplo: parte decimal = 0.77
  // decimalFormated = 0.77 * (10^posiciones)
  // si posiciones es 2 ==> 0.77 * 100
  // si posiciones es 3 ==> 0.77 * 1000
  var decimalFormated = Math.floor(
    Math.abs(decimal) * Math.pow(10, posiciones)
  )
  // Sustraemos del número original la parte decimal
  // y le sumamos la parte decimal que hemos formateado
  var finalNum = entera + 
    ((decimalFormated / Math.pow(10, posiciones))*(isNeg ? -1 : 1))
  
  return finalNum
}

});