$(document).ready(function(){
//Parametros fijos:
var cejapegue= 4;
var factor_tinta = parseFloat(0.006 / 1000);

$.medidas = function()
{
  var med_alto = $("#med_alto").val();
  var med_fondo = $("#med_fondo").val();
  var med_frente = $("#med_frente").val();
  var med_lamina_1 = ( ( 2 * parseFloat(med_frente) ) + ( 2 * parseFloat(med_fondo) ) + cejapegue );
  var med_lamina_2 = ( parseFloat(med_alto) + parseFloat(med_fondo) );
  $("#med_lamina").val("("+ med_lamina_1 + "x" + med_lamina_2 + ")");  
}

$.medidascaja = function()
{
  var med_alto = $("#med_alto").val();
  var med_fondo = $("#med_fondo").val();
  var med_frente = $("#med_frente").val();
  var med_lamina_1 = ( ( 2 * parseFloat(med_frente) ) + ( 2 * parseFloat(med_fondo) ) + cejapegue );
  var med_lamina_2 = ( parseFloat(med_alto) + parseFloat(med_fondo) );
  var m2_xcaja = (parseFloat(med_lamina_1) / 100) * (parseFloat(med_lamina_2) / 100);
  $("#m2_xcaja").val( currency(m2_xcaja,3)); //+" m<sup>2</sup> x caja"
  var cant_requerida = $("#cant_requerida").val();

  var m2_requeridos = parseFloat(cant_requerida) * parseFloat(m2_xcaja);
  $("#m2_requeridos").val( currency(m2_requeridos,2) );
}

$.medidascarton = function()
{
  var med_largo = $("#med_largo").val();
  var med_ancho = $("#med_ancho").val();
  var m2_xcaja = (med_largo / 100) * (med_ancho / 100);
  $("#m2_xcaja").val( currency(m2_xcaja,3)); //+ " m<sup>2</sup> x caja"
  var cant_requerida = $("#cant_requerida").val();

  var m2_requeridos = parseFloat(cant_requerida) * parseFloat(m2_xcaja);
  $("#m2_requeridos").val( currency(m2_requeridos,2) );
}

$.margen = function()
{
  var cant_requerida = $("#cant_requerida").val();
  $.post('margen', {cant_requerida:cant_requerida},
    function(result)
    {
      $("#por_margen").html( result.data[0].margen)
    },'json'
    );
}

$.totaltinta = function(){
  //$("#t"+t+"_res").html( $("#t"+t+"_largo").val() * $("#t"+t+"_ancho").val() );
  $("#total_tinta").val( parseFloat($("#t1_res").val()) + parseFloat($("#t2_res").val()) + parseFloat($("#t3_res").val()) + parseFloat($("#t4_res").val()) +parseFloat( $("#t4_res").val()) );
  consumo_tinta = (parseFloat( $("#cant_requerida").val() ) * parseFloat( $("#total_tinta").val() ) * parseFloat(factor_tinta));
  $("#consumo_tinta").html( currency(consumo_tinta,6) );    
}

$.tipo_producto = function(clasificacion, clasificacion2,tipoproducto)
{
  $.post('cotizadorprocesos', {clasificacion : clasificacion, clasificacion2: clasificacion2, tipoproducto : tipoproducto},
    function(result){

      if( result.data[0].Impresion == 1 )
      {
        $.impresion();                          
      }
      if( result.data[0].FlexoRanurado == 1 )
      {
        $.flexoranurado();                          
      }
      if( result.data[0].Pegado == 1 )
      {      
        $.pegado();                           
      }
      if( result.data[0].Grapado == 1 )
      {      
        $.grapado();                           
      } 
      if( result.data[0].Refilado == 1 )
      {      
        $.refilado();                           
      }    
      if( result.data[0].Rayado == 1 )
      {      
        $.rayado();                           
      }
      if( result.data[0].Caiman == 1 )
      {      
        $.caiman();                           
      }
      if( result.data[0].Autoarmado == 1 )
      {      
        $.suajado();                
      }   
      if( result.data[0].Flejado == 1 )
      {      
        $.flejado();                           
      }
      if( result.data[0].Entarimado == 1 )
      {      
        $.entarimado();                           
      }                                                            
    },'json'
  );  
}

$.tipo_carton = function(descripcion)
{
  $.ajax({
    dataType: "json",
    url: 'seltamcorrugados',
    type: "POST",
    data: {Descripcion : descripcion},
    success: function(data2){
      $('select[name="tam_carton"]').html('<option value="null">SELECCIONAR</option>');
      $('select[name="tam_carton"]').append(data2.data);   
    }
  });  
}

$.impresion = function()
{
  if( $('select[name="articulo"]').val() == "CAJAS CON IMPRESION" )
  {          
    //var imp_merma = ( 15 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    //$("#imp_merma").html(Math.ceil(imp_merma));
    var imp_arreglo = 1;
    $("#imp_arreglo").html(trunc(imp_arreglo,2));
    var imp_tiraje = ( parseFloat($("#cant_requerida").val()) * 1.5 ) / 1000;
    $("#imp_tiro").html(trunc(imp_tiraje,2));

    if( $("#no_tintas").val() > 0 )
    {
      var arreglo_personas = 2;
      var tiraje_personas = 4;
      var costo_hrhombre = 95;
      var imp_cunit = (parseFloat( $("#imp_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#imp_tiro").text()) * tiraje_personas * costo_hrhombre );
      $("#imp_cunit").html( currency(imp_cunit,2) );
    }            
  }
  else
  {
    $("#imp_merma").html("0");
    $("#imp_arreglo").html("0");
    $("#imp_tiro").html("0");
    $("#imp_cunit").html("0");
  }  
}

$.flexoranurado = function()
{
  //var merma = ( 6 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  //$("#flexo_merma").html(Math.ceil(merma));
  var arreglo = 0.67;
  $("#flexo_arreglo").html(trunc(arreglo,2));

  if( $('select[name="articulo"]').val() == "CAJAS CON IMPRESION" )
  {           
    if( $('select[name="tipo_producto"]').val() == "RANURADA ESTANDAR REFILADA FLEXO PEGADA" || $('select[name="tipo_producto"]').val() == "RANURADA ESTANDAR REFILADA FLEXO GRAPADA" )
    {
      var flexo_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 667;
      $("#flexo_tiro").html(trunc(flexo_tiraje,2));            
    }
    else
    {
      $("#flexo_tiro").html("0"); 
    }            
  }
  else
  {           
    var flexo_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 1000;
    $("#flexo_tiro").html(trunc(flexo_tiraje,2));            
  }          
    var arreglo_personas = 2;
    var tiraje_personas = 4;
    var costo_hrhombre = 95;

    var flexo_cunit = (parseFloat( $("#flexo_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#flexo_tiro").text()) * tiraje_personas * costo_hrhombre );
    $("#flexo_cunit").html( currency(flexo_cunit,2) );  
}

$.pegado = function()
{
  //var pegado_merma = ( 10 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  //$("#pegado_merma").html(Math.ceil(pegado_merma));
  var pegado_arreglo = 0.25;
  $("#pegado_arreglo").html(trunc(pegado_arreglo,2));
  var pegado_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 1000;
  $("#pegado_tiro").html(trunc(pegado_tiraje,2));  

  var arreglo_personas = 1;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var pegado_cunit = (parseFloat( $("#pegado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#pegado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#pegado_cunit").html( currency(pegado_cunit,2) );  
}

$.grapado = function()
{
  //var grapado_merma = ( 20 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  //$("#grapado_merma").html(Math.ceil(grapado_merma));

    if($("#cant_requerida").val() <= 1000)
    {
    var grapado_arreglo = 0;
    $("#grapado_arreglo").html(trunc(grapado_arreglo,2));
    }
    else
    {
    var grapado_arreglo = 0;
    $("#grapado_arreglo").html(trunc(grapado_arreglo,2));                
    }
  var grapado_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 500;
  $("#grapado_tiro").html(trunc(grapado_tiraje,2));  

  var arreglo_personas = 0;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var grapado_cunit = (parseFloat( $("#grapado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#grapado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#grapado_cunit").html( currency(grapado_cunit,2) );  
}

$.refilado = function()
{
  //var refilado_merma = ( 2 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  //$("#refilado_merma").html(Math.ceil(refilado_merma));
  var refilado_arreglo = 0.33;
  $("#refilado_arreglo").html(trunc(refilado_arreglo,2));
  var refilado_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 500;
  $("#refilado_tiro").html(trunc(refilado_tiraje,2));  

  var arreglo_personas = 1;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var refilado_cunit = (parseFloat( $("#refilado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#refilado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#refilado_cunit").html( currency(refilado_cunit,2) );  
}

$.rayado = function()
{
  //var rayado_merma = ( 2 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  //$("#rayado_merma").html(Math.ceil(rayado_merma));
  var rayado_arreglo = 0.33;
  $("#rayado_arreglo").html(trunc(rayado_arreglo,2));
  var rayado_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 500;
  $("#rayado_tiro").html(trunc(rayado_tiraje,2));  

  var arreglo_personas = 1;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var rayado_cunit = (parseFloat( $("#rayado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#rayado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#rayado_cunit").html( currency(rayado_cunit,2) );  
}

$.caiman = function()
{
  //var caiman_merma = ( 5 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  //$("#caiman_merma").html(Math.ceil(caiman_merma));
  var caiman_arreglo = 0.17;
  $("#caiman_arreglo").html(trunc(caiman_arreglo,2));
  var caiman_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 500;
  $("#caiman_tiro").html(trunc(caiman_tiraje,2));  

  var arreglo_personas = 1;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var caiman_cunit = (parseFloat( $("#caiman_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#caiman_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#caiman_cunit").html( currency(caiman_cunit,2) );  
}

$.suajado = function()
{
  //var suajado_merma = ( 10 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  //$("#suajado_merma").html(Math.ceil(suajado_merma));

    if($("#tipo_suajado").val() == 0)
    {
      $("#suajado_merma").html("0");
      $("#suajado_arreglo").html("0");
      $("#suajado_tiro").html("0");
    }
    else if($("#tipo_suajado").val() == 1)
    {
      var suajado_arreglo = 1.50;
      $("#suajado_arreglo").html(trunc(suajado_arreglo,2));
      var suajado_tiraje = parseFloat($("#cant_requerida").text() * 2.5)  / 1000;
      $("#suajado_tiro").html(trunc(suajado_tiraje,2));
    }
    else if($("#tipo_suajado").val() == 2)
    {
      var suajado_arreglo = 2;
      $("#suajado_arreglo").html(trunc(suajado_arreglo,2));
      var suajado_tiraje = parseFloat($("#cant_requerida").text() * 0.4)  / 1000;
      $("#suajado_tiro").html(trunc(suajado_tiraje,2));            
    }

  var arreglo_personas = 1;
  var tiraje_personas = 3;
  var costo_hrhombre = 95;

  if( $("#cm_suaje").val() > 0)
  {
    var suajado_cunit = (parseFloat( $("#suajado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#suajado_tiro").text()) * tiraje_personas * costo_hrhombre );
    $("#suajado_cunit").html( currency(suajado_cunit,2) );  
    var costosuaje = 2.50;
    var costo_suaje = parseFloat($("#cm_suaje").val().replace(/,/gi,'')) * parseFloat(costosuaje);
    $("#costo_suaje").html(currency(costo_suaje,2));    
  }
  else
  {
    $("#suajado_cunit").html('0');
    $("#costo_suaje").html("0");
  }

}

$.flejado = function()
{
  if($("#cant_requerida").val() <= 1000)
  {
    $("#flejado_arreglo").html('0');
  }
  else
  {
    $("#flejado_arreglo").html('0');
  }
  var flejado_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 1000;
  $("#flejado_tiro").html(trunc(flejado_tiraje,2));  

  var arreglo_personas = 0;
  var tiraje_personas = 1;
  var costo_hrhombre = 95;
  var flejado_cunit = (parseFloat( $("#flejado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#flejado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#flejado_cunit").html( currency(flejado_cunit,2) );  
}

$.entarimado = function()
{
  if($("#cant_requerida").val() <= 1000)
  {
    $("#entarimado_arreglo").html('0');
  }
  else
  {
    $("#entarimado_arreglo").html('0');
  }
  var entarimado_tiraje = parseFloat($("#cant_producir").text().replace(/,/gi,''))  / 1000;
  $("#entarimado_tiro").html(trunc(entarimado_tiraje,2));  

  var arreglo_personas = 0;
  var tiraje_personas = 1;
  var costo_hrhombre = 95;
  var entarimado_cunit = (parseFloat( $("#entarimado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#entarimado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#entarimado_cunit").html( currency(entarimado_cunit,2) );  
}

$.impmerma = function()
{
    var imp_merma = ( 15 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#imp_merma").html(Math.ceil(imp_merma));
}
$.flexomerma = function()
{
    var merma = ( 6 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#flexo_merma").html(Math.ceil(merma));
}
$.pegadomerma = function()
{  
    var pegado_merma = ( 10 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#pegado_merma").html(Math.ceil(pegado_merma));
}
$.grapadomerma = function()
{
    var grapado_merma = ( 20 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#grapado_merma").html(Math.ceil(grapado_merma));
}
$.refiladomerma = function()
{
    var refilado_merma = ( 2 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#refilado_merma").html(Math.ceil(refilado_merma));
}
$.rayadomerma = function()
{
    var rayado_merma = ( 2 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#rayado_merma").html(Math.ceil(rayado_merma));

}
$.caimanmerma = function()
{
    var caiman_merma = ( 5 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#caiman_merma").html(Math.ceil(caiman_merma));
}
$.suajadomerma = function()
{
    var suajado_merma = ( 10 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#suajado_merma").html(Math.ceil(suajado_merma));    
}

$.total_merma = function()
{
  var total_merma = parseFloat($("#imp_merma").text()) + parseFloat($("#rayado_merma").text()) + parseFloat($("#caiman_merma").text()) + parseFloat($("#grapado_merma").text()) + parseFloat($("#flejado_merma").text()) + parseFloat($("#refilado_merma").text()) + parseFloat($("#flexo_merma").text()) + parseFloat($("#pegado_merma").text()) + parseFloat($("#suajado_merma").text()) + parseFloat($("#entarimado_merma").text());
  $("#total_merma").html(total_merma); 

  var cant_producir = parseFloat($("#cant_requerida").val()) + total_merma;
  $("#cant_producir").html(number_format(cant_producir));

  var m2_req = cant_producir * parseFloat($("#m2_xcaja").val()); 
  $("#m2_req").html(currency(m2_req,2));

}

$.total_arreglo = function()
{
  var total_arreglo = parseFloat($("#imp_arreglo").text()) + parseFloat($("#rayado_arreglo").text()) + parseFloat($("#caiman_arreglo").text()) + parseFloat($("#grapado_arreglo").text()) + parseFloat($("#flejado_arreglo").text()) + parseFloat($("#refilado_arreglo").text()) + parseFloat($("#flexo_arreglo").text()) + parseFloat($("#pegado_arreglo").text()) + parseFloat($("#suajado_arreglo").text()) + parseFloat($("#entarimado_arreglo").text());
  $("#total_arreglo").html(currency(total_arreglo,2));  
}

$.total_tiro = function()
{
  var total_tiro = parseFloat($("#imp_tiro").text()) + parseFloat($("#rayado_tiro").text()) + parseFloat($("#caiman_tiro").text()) + parseFloat($("#grapado_tiro").text()) + parseFloat($("#flejado_tiro").text()) + parseFloat($("#refilado_tiro").text()) + parseFloat($("#flexo_tiro").text()) + parseFloat($("#pegado_tiro").text()) + parseFloat($("#suajado_tiro").text()) + parseFloat($("#entarimado_tiro").text());
  $("#total_tiro").html(currency(total_tiro,2));  
}

$.total_cunit = function()
{
  var total_cunit = parseFloat($("#imp_cunit").text().replace(/,/gi,'')) + parseFloat($("#rayado_cunit").text().replace(/,/gi,'')) + parseFloat($("#caiman_cunit").text().replace(/,/gi,'')) + parseFloat($("#grapado_cunit").text().replace(/,/gi,'')) + parseFloat($("#flejado_cunit").text().replace(/,/gi,'')) + parseFloat($("#refilado_cunit").text().replace(/,/gi,'')) + parseFloat($("#flexo_cunit").text().replace(/,/gi,'')) + parseFloat($("#pegado_cunit").text().replace(/,/gi,'')) + parseFloat($("#suajado_cunit").text().replace(/,/gi,'')) + parseFloat($("#entarimado_cunit").text().replace(/,/gi,''));
  $("#total_cunit").html(currency(total_cunit,2));
}

$.costocarton = function()
{
  var costo_carton = parseFloat($("#m2_req").text().replace(/,/gi,'')) * parseFloat($("#costo_m2").text().replace(/,/gi,''));
  $("#costo_carton").html(currency(costo_carton,2));
}

$.costo_tinta = function()
{
  var costotinta = 50;
  if($("#articulo").val() == "CAJAS CON IMPRESION")
  {
    var costo_tinta = parseFloat( $("#consumo_tinta").text().replace(/,/gi,'')) * costotinta;
    $("#costo_tinta").html(currency(costo_tinta,2));
  }
  else
  {
    $("#costo_tinta").html("0.00");
  }
}

$.costo_cirel = function()
{
  var costocirel = 0.50;
  if( $("#articulo").val() == "CAJAS CON IMPRESION")
  {
    var costo_cirel = parseFloat( $("#total_tinta").val().replace(/,/gi,'') ) * parseFloat(costocirel);
    $("#costo_cirel").html(currency(costo_cirel,2));
  }
  else
  {
    $("#costo_cirel").html("0.00");
  }
}

$.total_material = function()
{
  var total_material  = parseFloat($("#costo_carton").text().replace(/,/gi,'')) + parseFloat($("#costo_tinta").text().replace(/,/gi,'')) + parseFloat($("#costo_cirel").text().replace(/,/gi,'')) + parseFloat($("#costo_suaje").text().replace(/,/gi,''));
  $("#total_material").html(currency(total_material,2));

}

$.total_envio = function()
{
  var total_enviado = $("#cant_enviar1").val().replace(/,/gi,'') + $("#cant_enviar2").val().replace(/,/gi,'') + $("#cant_enviar3").val().replace(/,/gi,'');
  $("#total_enviado").html(number_format(total_enviado));

  var difvs_pedido = parseFloat($("#cant_requerida").val().replace(/,/gi,'')) - parseFloat($("#total_enviado").text().replace(/,/gi,''));
  $("#difvs_pedido").html(number_format(difvs_pedido));

  var costo_envio = parseFloat($("#costo_envio1").text().replace(/,/gi,'')) + parseFloat($("#costo_envio2").text().replace(/,/gi,'')) + parseFloat($("#costo_envio3").text().replace(/,/gi,''));
  $("#total_envio").html(currency(costo_envio,2));
}

$.importe = function()
{
  var importe = parseFloat( $("#total_cunit").text().replace(/,/gi,'') ) + parseFloat( $("#total_material").text().replace(/,/gi,'') ) + parseFloat( $("#total_envio").text().replace(/,/gi,'') );
  $("#importe").html(currency(importe,2));
}

$.totalmargen = function()
{
var totalmargen = (parseFloat( $("#importe").text().replace(/,/gi,'') ) * $("#por_margen").text()) / 100;
$("#margen").html(currency(totalmargen,2));
}

$.preciounitario = function()
{
  var punitario = (parseFloat( $("#importe").text().replace(/,/gi,'') ) + parseFloat( $("#margen").text().replace(/,/gi,'') )) / parseFloat( $("#cant_requerida").val().replace(/,/gi,'') );
  $("#punitario").html(currency(punitario,2));
}

$.total = function()
{
  var ptotal = parseFloat( $("#importe").text().replace(/,/gi,'') ) + parseFloat( $("#margen").text().replace(/,/gi,'') );
  $("#total").html(currency(ptotal,2));
}

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

});