$(document).ready(function(){
//Parametros fijos:
var cejapegue= 4;
var factor_tinta = 0.006 / 1000;

$.medidas = function()
{
  var med_alto = $("#med_alto").val();
  var med_fondo = $("#med_fondo").val();
  var med_frente = $("#med_frente").val();
  var med_lamina_1 = ( ( 2 * parseFloat(med_frente) ) + ( 2 * parseFloat(med_fondo) ) + cejapegue );
  var med_lamina_2 = ( parseFloat(med_alto) + parseFloat(med_fondo) );
  $("#med_lamina").html("("+ med_lamina_1 + "x" + med_lamina_2 + ")");  
}

$.medidascaja = function()
{
  var med_alto = $("#med_alto").val();
  var med_fondo = $("#med_fondo").val();
  var med_frente = $("#med_frente").val();
  var med_lamina_1 = ( ( 2 * parseFloat(med_frente) ) + ( 2 * parseFloat(med_fondo) ) + cejapegue );
  var med_lamina_2 = ( parseFloat(med_alto) + parseFloat(med_fondo) );
  var m2_xcaja = (parseFloat(med_lamina_1) / 100) * (parseFloat(med_lamina_2) / 100);
  $("#m2_xcaja").html( currency(m2_xcaja,3) +" m<sup>2</sup> x caja" );
  var cant_requerida = $("#cant_requerida").val();

  var m2_requeridos = parseFloat(cant_requerida) * parseFloat(m2_xcaja);
  $("#m2_requeridos").html( currency(m2_requeridos,2) );
}

$.medidascarton = function()
{
  var med_largo = $("#med_largo").val();
  var med_ancho = $("#med_ancho").val();
  var m2_xcaja = (med_largo / 100) * (med_ancho / 100);
  $("#m2_xcaja").html( currency(m2_xcaja,3) +" m<sup>2</sup> x caja" );
  var cant_requerida = $("#cant_requerida").val();

  var m2_requeridos = parseFloat(cant_requerida) * parseFloat(m2_xcaja);
  $("#m2_requeridos").html( currency(m2_requeridos,2) );
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

$.tinta = function(t){
  $("#t"+t+"_res").html( $("#t"+t+"_largo").val() * $("#t"+t+"_ancho").val() );
  $("#total_tinta").html( parseFloat($("#t1_res").html()) + parseFloat($("#t2_res").html()) + parseFloat($("#t3_res").html()) + parseFloat($("#t4_res").html()) +parseFloat( $("#t4_res").html()) );
  consumo_tinta = (parseFloat( $("#cant_requerida").val() ) * parseFloat( $("#total_tinta").text() ) * factor_tinta);
  $("#consumo_tinta").html( currency(consumo_tinta,4) );    
}

$.impresion = function()
{
  if( $('select[name="articulo"]').val() == "CAJAS CON IMPRESION" )
  {          
    var imp_merma = ( 15 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
    $("#imp_merma").html(Math.ceil(imp_merma));
    var imp_arreglo = 1;
    $("#imp_arreglo").html(imp_arreglo.toPrecision(2));
    var imp_tiraje = ( parseFloat($("#cant_requerida").val()) * 1.5 ) / 1000;
    $("#imp_tiro").html(imp_tiraje.toPrecision(2));

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
  var merma = ( 6 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  $("#flexo_merma").html(Math.ceil(merma));
  var arreglo = 0.67;
  $("#flexo_arreglo").html(arreglo.toPrecision(2));

  if( $('select[name="articulo"]').val() == "CAJAS CON IMPRESION" )
  {           
    if( $('select[name="tipo_producto"]').val() == "RANURADA ESTANDAR REFILADA FLEXO PEGADA" || $('select[name="tipo_producto"]').val() == "RANURADA ESTANDAR REFILADA FLEXO GRAPADA" )
    {
      var flexo_tiraje = parseFloat($("#cant_producir").text())  / 667;
      $("#flexo_tiro").html(flexo_tiraje.toPrecision(2));            
    }
    else
    {
      $("#flexo_tiro").html("0"); 
    }            
  }
  else
  {           
    var flexo_tiraje = parseFloat($("#cant_producir").text())  / 1000;
    $("#flexo_tiro").html(flexo_tiraje.toPrecision(2));            
  }          
    var arreglo_personas = 2;
    var tiraje_personas = 4;
    var costo_hrhombre = 95;

    var flexo_cunit = (parseFloat( $("#flexo_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#flexo_tiro").text()) * tiraje_personas * costo_hrhombre );
    $("#flexo_cunit").html( currency(flexo_cunit,2) );  
}

$.pegado = function()
{
  var pegado_merma = ( 10 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  $("#pegado_merma").html(Math.ceil(pegado_merma));
  var pegado_arreglo = 0.25;
  $("#pegado_arreglo").html(pegado_arreglo.toPrecision(2));
  var pegado_tiraje = parseFloat($("#cant_producir").text())  / 1000;
  $("#pegado_tiro").html(pegado_tiraje.toPrecision(2));  

  var arreglo_personas = 1;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var pegado_cunit = (parseFloat( $("#pegado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#pegado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#pegado_cunit").html( currency(pegado_cunit,2) );  
}

$.grapado = function()
{
  var grapado_merma = ( 20 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  $("#grapado_merma").html(Math.ceil(grapado_merma));
  $.total_merma();

    if($("#cant_requerida").val() <= 1000)
    {
    var grapado_arreglo = 0;
    $("#grapado_arreglo").html(grapado_arreglo.toPrecision(2));
    }
    else
    {
    var grapado_arreglo = 0;
    $("#grapado_arreglo").html(grapado_arreglo.toPrecision(2));                
    }
  var grapado_tiraje = parseFloat($("#cant_producir").text())  / 500;
  $("#grapado_tiro").html(grapado_tiraje.toPrecision(2));  

  var arreglo_personas = 0;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var grapado_cunit = (parseFloat( $("#grapado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#grapado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#grapado_cunit").html( currency(grapado_cunit,2) );  
}

$.refilado = function()
{
  var refilado_merma = ( 2 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  $("#refilado_merma").html(Math.ceil(refilado_merma));
  var refilado_arreglo = 0.33;
  $("#refilado_arreglo").html(refilado_arreglo.toPrecision(2));
  var refilado_tiraje = parseFloat($("#cant_producir").text())  / 500;
  $("#refilado_tiro").html(refilado_tiraje.toPrecision(2));  

  var arreglo_personas = 1;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var refilado_cunit = (parseFloat( $("#refilado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#refilado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#refilado_cunit").html( currency(refilado_cunit,2) );  
}

$.rayado = function()
{
  var rayado_merma = ( 2 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  $("#rayado_merma").html(Math.ceil(rayado_merma));
  var rayado_arreglo = 0.33;
  $("#rayado_arreglo").html(rayado_arreglo.toPrecision(2));
  var rayado_tiraje = parseFloat($("#cant_producir").text())  / 500;
  $("#rayado_tiro").html(rayado_tiraje.toPrecision(2));  

  var arreglo_personas = 1;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var rayado_cunit = (parseFloat( $("#rayado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#rayado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#rayado_cunit").html( currency(rayado_cunit,2) );  
}

$.caiman = function()
{
  var caiman_merma = ( 5 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  $("#caiman_merma").html(Math.ceil(caiman_merma));
  var caiman_arreglo = 0.17;
  $("#caiman_arreglo").html(caiman_arreglo.toPrecision(2));
  var caiman_tiraje = parseFloat($("#cant_producir").text())  / 500;
  $("#caiman_tiro").html(caiman_tiraje.toPrecision(2));  

  var arreglo_personas = 1;
  var tiraje_personas = 2;
  var costo_hrhombre = 95;
  var caiman_cunit = (parseFloat( $("#caiman_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#caiman_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#caiman_cunit").html( currency(caiman_cunit,2) );  
}

$.suajado = function()
{
  var suajado_merma = ( 10 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
  $("#suajado_merma").html(Math.ceil(suajado_merma));

    if($("#tipo_suajado").val() == 1)
    {
      var suajado_arreglo = 1.50;
      $("#suajado_arreglo").html(suajado_arreglo.toPrecision(2));
      var suajado_tiraje = parseFloat($("#cant_requerida").text() * 2.5)  / 1000;
      $("#suajado_tiro").html(suajado_tiraje.toPrecision(2));
    }
    else if($("#tipo_suajado").val() == 2)
    {
      var suajado_arreglo = 2;
      $("#suajado_arreglo").html(suajado_arreglo.toPrecision(2));
      var suajado_tiraje = parseFloat($("#cant_requerida").text() * 0.4)  / 1000;
      $("#suajado_tiro").html(suajado_tiraje.toPrecision(2));            
    }

  var arreglo_personas = 1;
  var tiraje_personas = 3;
  var costo_hrhombre = 95;

  if( $("#cm_suaje").val() > 0)
  {
    var suajado_cunit = (parseFloat( $("#suajado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#suajado_tiro").text()) * tiraje_personas * costo_hrhombre );
    $("#suajado_cunit").html( currency(suajado_cunit,2) );  
  }
  else
  {
    $("#suajado_cunit").html('0');
  }
}

$.flejado = function()
{
  $("#flejado_merma").html('0');
  if($("#cant_requerida").val() <= 1000)
  {
    $("#flejado_arreglo").html('0');
  }
  else
  {
    $("#flejado_arreglo").html('0');
  }
  var flejado_tiraje = parseFloat($("#cant_producir").text())  / 1000;
  $("#flejado_tiro").html(flejado_tiraje.toPrecision(2));  

  var arreglo_personas = 0;
  var tiraje_personas = 1;
  var costo_hrhombre = 95;
  var flejado_cunit = (parseFloat( $("#flejado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#flejado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#flejado_cunit").html( currency(flejado_cunit,2) );  
}

$.entarimado = function()
{
  $("#entarimado_merma").html('0');
  if($("#cant_requerida").val() <= 1000)
  {
    $("#entarimado_arreglo").html('0');
  }
  else
  {
    $("#entarimado_arreglo").html('0');
  }
  var entarimado_tiraje = parseFloat($("#cant_producir").text())  / 1000;
  $("#entarimado_tiro").html(entarimado_tiraje.toPrecision(2));  

  var arreglo_personas = 0;
  var tiraje_personas = 1;
  var costo_hrhombre = 95;
  var entarimado_cunit = (parseFloat( $("#entarimado_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#entarimado_tiro").text()) * tiraje_personas * costo_hrhombre );
  $("#entarimado_cunit").html( currency(entarimado_cunit,2) );  
}

$.total_merma = function()
{
  var total_merma = parseFloat($("#imp_merma").text()) + parseFloat($("#rayado_merma").text()) + parseFloat($("#caiman_merma").text()) + parseFloat($("#grapado_merma").text()) + parseFloat($("#flejado_merma").text()) + parseFloat($("#refilado_merma").text()) + parseFloat($("#flexo_merma").text()) + parseFloat($("#pegado_merma").text()) + parseFloat($("#suajado_merma").text()) + parseFloat($("#entarimado_merma").text());
  $("#total_merma").html(total_merma); 

  var cant_producir = parseFloat($("#cant_requerida").val()) + total_merma;
  $("#cant_producir").html(cant_producir);

  var m2_req = cant_producir * parseFloat($("#m2_xcaja").text()); 
  $("#m2_req").html(currency(m2_req,2));
}

$.total_arreglo = function()
{
  var total_arreglo = parseFloat($("#imp_arreglo").text()) + parseFloat($("#rayado_arreglo").text()) + parseFloat($("#caiman_arreglo").text()) + parseFloat($("#grapado_arreglo").text()) + parseFloat($("#flejado_arreglo").text()) + parseFloat($("#refilado_arreglo").text()) + parseFloat($("#flexo_arreglo").text()) + parseFloat($("#pegado_arreglo").text()) + parseFloat($("#suajado_arreglo").text()) + parseFloat($("#entarimado_arreglo").text());
  $("#total_arreglo").html(total_arreglo);  
}

$.total_tiro = function()
{
  var total_tiro = parseFloat($("#imp_tiro").text()) + parseFloat($("#rayado_tiro").text()) + parseFloat($("#caiman_tiro").text()) + parseFloat($("#grapado_tiro").text()) + parseFloat($("#flejado_tiro").text()) + parseFloat($("#refilado_tiro").text()) + parseFloat($("#flexo_tiro").text()) + parseFloat($("#pegado_tiro").text()) + parseFloat($("#suajado_tiro").text()) + parseFloat($("#entarimado_tiro").text());
  $("#total_tiro").html(total_tiro);  
}

$.total_cunit = function()
{
  var total_cunit = parseFloat($("#imp_cunit").text()) + parseFloat($("#rayado_cunit").text()) + parseFloat($("#caiman_cunit").text()) + parseFloat($("#grapado_cunit").text()) + parseFloat($("#flejado_cunit").text()) + parseFloat($("#refilado_cunit").text()) + parseFloat($("#flexo_cunit").text()) + parseFloat($("#pegado_cunit").text()) + parseFloat($("#suajado_cunit").text()) + parseFloat($("#entarimado_cunit").text());
  $("#total_cunit").html(total_cunit);
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
});