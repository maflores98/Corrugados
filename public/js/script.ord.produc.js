/*! Isaac Alejandro López Castrejón | 2017 */
(function($)
{
    $.get = function(key)
    {
        key = key.replace(/[\[]/, '\\[');
        key = key.replace(/[\]]/, '\\]');
        var pattern = "[\\?&]" + key + "=([^&#]*)";
        var regex = new RegExp(pattern);
        var url = unescape(window.location.href);
        var results = regex.exec(url);
        if (results === null)
        {
            return null;
        }
        else
        {
            return results[1];
        }
    }
})(jQuery);

$(document).ready(function()
{
//    $("#div_orden input, #div_orden select").each(function()
//    {
//        $(this).attr('readonly','true');
//    });
//    
//    $("#div_opciones").addClass("display_none");
    
    var id_v = $.get("id");
    
    var largo = id_v.length;
    var substring = id_v.substring(0, 1);
    var substring1 = id_v.substring(1, largo);
    
    if(id_v != null)
    {
        if(substring = "M")
        {
            alert("cotizador Maquilas");
            llenar_orden_maquilas(substring1);
        }
        else
        {
            alert("es otro cotizador");
        }
    }
    
    function llenar_orden_maquilas(id_v)
    {
        var id = "id="+id_v;
        $.post(path+"/Cotizador/abrirmaquilas",id,function(data)
        {
            if (data.validacion=="true")
            {
                
            }
            if (data.validacion=="false")
            {
                swal("Error!", 'No se encuentra la cotizacion relacionada', "error");
            }
        },"json");
    }
});