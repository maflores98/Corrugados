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

$.procesos = function(clasificacion, clasificacion2, tipoproducto)
{
  if( clasificacion2 <= 700 )
  {
    $.post('cotizadorprocesos', {clasificacion : clasificacion, clasificacion2: "<= 700", tipoproducto : tipoproducto},
      function(result){

        if( result.data[0].Impresion == 1 )
        {
          if( $('select[name="articulo"]').val() == "CAJAS CON IMPRESION" )
          {          
            var imp_merma = ( 15 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
            $("#imp_merma").html(Math.ceil(imp_merma));
            $.total_merma();
            var imp_arreglo = 1;
            $("#imp_arreglo").html(imp_arreglo);
            var imp_tiraje = ( parseFloat($("#cant_requerida").val()) * 1.5 ) / 1000;
            $("#imp_tiro").html(imp_tiraje);

            if( $("#no_tintas").val() > 0 )
            {
              var arreglo_personas = 2;
              var tiraje_personas = 4;
              var costo_hrhombre = 95;

              var imp_cunit = (parseFloat( $("#imp_arreglo").text() ) * arreglo_personas * costo_hrhombre) + ( parseFloat($("#imp_tiro").text()) * tiraje_personas * costo_hrhombre );
              $("#imp_cunit").html( imp_cunit );

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

        if( result.data[0].FlexoRanurado == 1 )
        {
          var merma = ( 6 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
          $("#flexo_merma").html(Math.ceil(merma));
          $.total_merma();
          var arreglo = 0.67;
          $("#flexo_arreglo").html(arreglo);

          if( $('select[name="articulo"]').val() == "CAJAS CON IMPRESION" )
          {           
            if( $('select[name="tipo_producto"]').val() == "RANURADA ESTANDAR REFILADA FLEXO PEGADA" || $('select[name="tipo_producto"]').val() == "RANURADA ESTANDAR REFILADA FLEXO GRAPADA" )
            {
              var flexo_tiraje = parseFloat($("#cant_producir").text())  / 667;
              $("#flexo_tiro").html(flexo_tiraje);            
            }
            else
            {
              $("#flexo_tiro").html("0"); 
            }
          }
          else
          {
              var flexo_tiraje = parseFloat($("#cant_producir").text())  / 1000;
              $("#flexo_tiro").html(flexo_tiraje);            
          }
        }

        if( result.data[0].Pegado == 1 )
        {
          var pegado_merma = ( 10 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
          $("#pegado_merma").html(Math.ceil(pegado_merma));
          $.total_merma();
          var pegado_arreglo = 0.25;
          $("#pegado_arreglo").html(pegado_arreglo);
          var pegado_tiraje = parseFloat($("#cant_producir").text())  / 1000;
          $("#pegado_tiro").html(pegado_tiraje);          
        }        

      },'json'
      );
}
else if( clasificacion2 > 700 )
{
 $.post('cotizadorprocesos', {clasificacion : clasificacion, clasificacion2: "> 700", tipoproducto : tipoproducto},
  function(result){

        if( result.data[0].Impresion == 1 )
        {
          if( $('select[name="articulo"]').val() == "CAJAS CON IMPRESION" )
          {          
            var imp_merma = ( 15 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
            $("#imp_merma").html(Math.ceil(imp_merma));
            $.total_merma();
            var imp_arreglo = 1;
            $("#imp_arreglo").html(imp_arreglo);
            var imp_tiraje = ( parseFloat( $("#cant_requerida").val() ) * 1.5 ) / 1000;
            $("#imp_tiro").html(imp_tiraje);
          }
          else
          {
            $("#imp_merma").html("0");
            $("#imp_arreglo").html("0");
            $("#imp_tiro").html("0");
          }
        }

        if( result.data[0].FlexoRanurado == 1 )
        {
          var merma = ( 6 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
          $("#flexo_merma").html(Math.ceil(merma));
          $.total_merma();
          var arreglo = 0.67;
          $("#flexo_arreglo").html(arreglo);

          if( $('select[name="articulo"]').val() == "CAJAS CON IMPRESION" )
          {           
            if( $('select[name="tipo_producto"]').val() == "RANURADA ESTANDAR REFILADA FLEXO PEGADA" || $('select[name="tipo_producto"]').val() == "RANURADA ESTANDAR REFILADA FLEXO GRAPADA" )
            {
              var flexo_tiraje = parseFloat($("#cant_producir").text())  / 667;
              $("#flexo_tiro").html(flexo_tiraje);            
            }
            else
            {
              $("#flexo_tiro").html("0"); 
            }
          }
          else
          {
              var flexo_tiraje = parseFloat($("#cant_producir").text())  / 1000;
              $("#flexo_tiro").html(flexo_tiraje);            
          }
        }

        if( result.data[0].Pegado == 1 )
        {
          var pegado_merma = ( 10 * parseFloat( $("#cant_requerida").val() ) ) / 1000;
          $("#pegado_merma").html(Math.ceil(pegado_merma));
          $.total_merma();
          var pegado_arreglo = 0.25;
          $("#pegado_arreglo").html(pegado_arreglo);
          var pegado_tiraje = parseFloat($("#cant_producir").text())  / 1000;
          $("#pegado_tiro").html(pegado_tiraje);          
        }         

  },'json'
  );
}   
}

$.total_merma = function()
{
  var total_merma = parseFloat($("#imp_merma").text()) + parseFloat($("#rayado_merma").text()) + parseFloat($("#caiman_merma").text()) + parseFloat($("#grapado_merma").text()) + parseFloat($("#flejado_merma").text()) + parseFloat($("#ref_merma").text()) + parseFloat($("#flexo_merma").text()) + parseFloat($("#pegado_merma").text()) + parseFloat($("#suajado_merma").text()) + parseFloat($("#entarimado_merma").text());
  $("#total_merma").html(total_merma); 

  var cant_producir = parseFloat($("#cant_requerida").val()) + total_merma;
  $("#cant_producir").html(cant_producir);

  var m2_req = cant_producir * parseFloat($("#m2_xcaja").text()); 
  $("#m2_req").html(currency(m2_req,2));
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