/*! Isaac Alejandro López Castrejón | 2017 */
/* ==========================================================================
    Validar si el input esta vacio
   ========================================================================== */
function validar_input(valor)
{
    valor = (valor==="")?parseFloat(0):parseFloat(valor);
    return valor;
}
/* ==========================================================================
    Validar si el input esta vacio
   ========================================================================== */

(function($)
{
    $.fn.currencyInput = function()
    {
        this.each(function()
        {
            //var wrapper = $('<div class="form-group"></div>');
            //$(this).wrap(wrapper);
            $(this).after('<label class="currency-symbol">$</label>');
            $(this).attr("type","number");
            $(this).attr("step","any");
            $(this).attr("placeholder","0.00");
            $(this).attr("min","0.00");
            $(this).change(function()
            {
                var id = $(this).attr("id");
                var min = parseFloat($(this).attr("min"));
                var max = parseFloat($(this).attr("max"));
                var value = this.valueAsNumber;
                var val = $(this).val();
                if(val === "")
                {
                    value = min;
                    
                }
                if(value < min)
                {
                    value = Math.abs(value);
                }
                else if(value > max)
                {
                    value = max;
                }
                $(this).val(value.toFixed(2)); 
            });
        });
    };
    
    $.fn.centimetrosInput = function()
    {
        this.each(function()
        {
            $(this).after('<span class="span_centimetros">cm</span>');
            $(this).attr("type","number");
            $(this).attr("step","any");
            $(this).attr("value","0");
            $(this).attr("placeholder","0");
            $(this).attr("min","0");
            $(this).change(function()
            {
                var id = $(this).attr("id");
                var min = parseFloat($(this).attr("min"));
                var max = parseFloat($(this).attr("max"));
                var value = this.valueAsNumber;
                var val = $(this).val();
                if(val === "")
                {
                    value = min;
                    
                }
                if(value < min)
                {
                    value = Math.abs(value);
                }
                else if(value > max)
                {
                    alert("id = "+id+"  Maximo = "+max);
                    value = max;
                }
                $(this).val(value);
            });
        });
    };
    
    $.fn.piezasInput = function()
    {
        this.each(function()
        {
            $(this).after('<span class="span_cantidad">Pzas</span>');
            $(this).attr("type","number");
            $(this).attr("placeholder","0");
            $(this).attr("min","0");
            $(this).change(function()
            {
                var id = $(this).attr("id");
                var min = parseInt($(this).attr("min"));
                var max = parseInt($(this).attr("max"));
                var value = this.valueAsNumber;
                var val = $(this).val();
                if(val === "")
                {
                    value = min;
                    
                }
                if(value < min)
                {
                    value = Math.abs(value);
                }
                else if(value > max)
                {
                    value = max;
                }
                $(this).val(parseInt(value));
            });
        });
    };
    
    $.fn.porcentajeInput = function()
    {
        this.each(function()
        {
            $(this).after('<span class="span_porcentaje">%</span>');
            $(this).attr("type","number");
            $(this).attr("placeholder","0");
            $(this).attr("min","0");
            $(this).change(function()
            {
                var id = $(this).attr("id");
                var min = parseInt($(this).attr("min"));
                var max = parseInt($(this).attr("max"));
                var value = this.valueAsNumber;
                var val = $(this).val();
                if(val === "")
                {
                    value = min;
                    
                }
                if(value < min)
                {
                    value = Math.abs(value);
                }
                else if(value > max)
                {
                    value = max;
                }
                $(this).val(parseInt(value));
            });
        });
    };
    
    $.fn.horasInput = function()
    {
        this.each(function()
        {
            $(this).after('<span class="span_horas">Hs</span>');
            $(this).attr("type","number");
            $(this).attr("step","any");
            $(this).attr("placeholder","0");
            $(this).attr("min","0");
            $(this).change(function()
            {
                var id = $(this).attr("id");
                var min = parseInt($(this).attr("min"));
                var max = parseInt($(this).attr("max"));
                var value = this.valueAsNumber;
                var val = $(this).val();
                if(val === "")
                {
                    value = min;
                    
                }
                if(value < min)
                {
                    value = Math.abs(value);
                }
                else if(value > max)
                {
                    value = max;
                }
                $(this).val(value);
            });
        });
    };
    
    $.fn.inputNoTabindex = function()
    {
        this.each(function()
        {
            $(this).attr('readonly','true');
            $(this).attr('tabindex',-1);
        });
    };
})(jQuery);

$(document).ready(function()
{
    $('input.currency').currencyInput();
    $('input.input_centimetros').centimetrosInput();
    $('input.input_cantidad').piezasInput();
    $('input.input_porcentaje').porcentajeInput();
    $('input.input_horas').horasInput();
    
    $('[readonly]').inputNoTabindex();
    $('.readonly').inputNoTabindex();
});