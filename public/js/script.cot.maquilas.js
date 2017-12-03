/*! Isaac Alejandro López Castrejón | 2017 */
$(document).ready(function()
{
    /* ==========================================================================
        Limpiar
       ========================================================================== */
    $("#limpiar").click(function()
    {
        swal({
            title: "¡Atención!",
            text: "¡Estas a punto de borrar toda la información!. ¿Deseas continuar?",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "¡Sí Borrar!",
            cancelButtonText: "¡No Borrar!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm)
        {
            if (isConfirm)
            {
                $("input:checkbox").removeAttr("checked");
                $("form")[0].reset();
                swal("Borrado!", "Se ha borrado toda la informacion del formulario.", "success");
            }
            else
            {
                swal("Cancelado", 'Si no quieres perder tu información guárdala dando click en el boton Guardar ', "error");
                $(".lead.text-muted").append('<span class="glyphicon glyphicon-floppy-disk"></span>');
            }
        });
    });
    /* ==========================================================================
        Limpiar
       ========================================================================== */

    /* ==========================================================================
        Imprimir
       ========================================================================== */
    $("#imprimir").click(function()
    {
        var thePopup = window.open('',"Customer Listing", "menubar=0,location=0,height=700,width=700");
        var myStyle1='<style>link{display: block;</style>';
        var myStyle2 = '<link rel="stylesheet" href="../css/estilos.cot.maquila.imp.css">';
        $('#container_print').append(myStyle1+myStyle2);
        $('#container_print').clone().appendTo(thePopup.document.body);
        thePopup.print();
    });
    /* ==========================================================================
        Imprimir
       ========================================================================== */

    /* ==========================================================================
        Guardar
       ========================================================================== */
    $("#guardar").click(function()
    {
        var cantidad_cotizada = $("#cantidad_cotizada").val();
        var largo = $("#largo").val();
        var ancho = $("#ancho").val();
        if(cantidad_cotizada <= 0 || isNaN(cantidad_cotizada) == true || largo <= 0 || isNaN(ancho) == true || largo <= 0 || isNaN(ancho) == true)
        {
            swal("Advertancia!", "Cantidad, largo y ancho no puede ser menor o igual a 0.", "warning");
        }
        else
        {
            var datos = $("#contizador_maquila").serialize();
            $.post(path+"/Cotizador/guardarmaquilas",datos,function(data)
            {
                if (data.validacion=="true")
                {
                    $("#id_cot_maq").val(data.id);
                    swal("Cotizacion: "+data.id, "Tu cotizacion se ha guardado correctamente.", "success");
                }
                if (data.validacion=="false")
                {
                    swal("Error!", 'Se ha generado un error no se pudo guardar la informacion solicitada', "error");
                }
            },"json");
        }
    });
    /* ==========================================================================
        Guardar
       ========================================================================== */

    /* ==========================================================================
        Abrir
       ========================================================================== */
    $("#abrir").click(function()
    {
        swal(
        {
            title: "Abrir cotización:",
            //text: "Abrir cotización:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            inputPlaceholder: "Escribe algo"
        },
        function (inputValue)
        {
            if (inputValue === false) return false;
            if (inputValue === "")
            {
                swal.showInputError("¡Necesitas escribir algo!");
                return false
            }
            $("form")[0].reset();
            var id = "id="+inputValue;
            $.post(path+"/Cotizador/abrirmaquilas",id,function(data)
            {
                if (data.validacion=="true")
                {
                    $("#id_cot_maq").val(inputValue);
                    $("#cantidad_cotizada").val(data.rows[0].cantidad_cotizada);
                    $("#largo").val(data.rows[0].largo);
                    $("#ancho").val(data.rows[0].ancho);
                    $("input[name=tipo_producto]:radio[value="+data.rows[0].tipo_producto+"]").attr("checked", true);

                    if(data.rows[0].checkbox_empalme == 1)
                        {$("#checkbox_empalme").attr("checked", true);}
                    else
                        {$("#checkbox_empalme").removeAttr("checked");}

                    if(data.rows[0].checkbox_suaje_automatico == 1)
                        {$("#checkbox_suaje_automatico").attr("checked", true);}
                    else
                        {$("#checkbox_suaje_automatico").removeAttr("checked");}

                    if(data.rows[0].checkbox_suaje_automatico_arreglo == 1)
                        {$("#checkbox_suaje_automatico_arreglo").attr("checked", true);}
                    else
                        {$("#checkbox_suaje_automatico_arreglo").removeAttr("checked");}

                    if(data.rows[0].checkbox_suaje_manual == 1)
                        {$("#checkbox_suaje_manual").attr("checked", true);}
                    else
                        {$("#checkbox_suaje_manual").removeAttr("checked");}

                    if(data.rows[0].checkbox_suaje_manual_arreglo == 1)
                        {$("#checkbox_suaje_manual_arreglo").attr("checked", true);}
                    else
                        {$("#checkbox_suaje_manual_arreglo").removeAttr("checked");}

                    if(data.rows[0].checkbox_pegado_lineal_maquina == 1)
                        {$("#checkbox_pegado_lineal_maquina").attr("checked", true);}
                    else
                        {$("#checkbox_pegado_lineal_maquina").removeAttr("checked");}

                    if(data.rows[0].checkbox_pegado_lineal_maquina_arreglo == 1)
                        {$("#checkbox_pegado_lineal_maquina_arreglo").attr("checked", true);}
                    else
                        {$("#checkbox_pegado_lineal_maquina_arreglo").removeAttr("checked");}

                    $("#pegado_lineal_maquina_med_min_acabado").val(data.rows[0].pegado_lineal_maquina_med_min_acabado);

                    if(data.rows[0].checkbox_pegado_fondo_auto_maquina == 1)
                        {$("#checkbox_pegado_fondo_auto_maquina").attr("checked", true);}
                    else
                        {$("#checkbox_pegado_fondo_auto_maquina").removeAttr("checked");}

                    if(data.rows[0].checkbox_pegado_fondo_auto_maquina_arreglo == 1)
                        {$("#checkbox_pegado_fondo_auto_maquina_arreglo").attr("checked", true);}
                    else
                        {$("#checkbox_pegado_fondo_auto_maquina_arreglo").removeAttr("checked");}

                    $("#pegado_fondo_auto_maquina_med_min_acabado").val(data.rows[0].pegado_fondo_auto_maquina_med_min_acabado);

                    if(data.rows[0].checkbox_pegue_manual == 1)
                        {$("#checkbox_pegue_manual").attr("checked", true);}
                    else
                        {$("#checkbox_pegue_manual").removeAttr("checked");}

                    if(data.rows[0].checkbox_predoblez_manual == 1)
                        {$("#checkbox_predoblez_manual").attr("checked", true);}
                    else
                        {$("#checkbox_predoblez_manual").removeAttr("checked");}

                    if(data.rows[0].checkbox_desbarbe == 1)
                        {$("#checkbox_desbarbe").attr("checked", true);}
                    else
                        {$("#checkbox_desbarbe").removeAttr("checked");}

                    if(data.rows[0].checkbox_empaque == 1)
                        {$("#checkbox_empaque").attr("checked", true);}
                    else
                        {$("#checkbox_empaque").removeAttr("checked");}

                    cantidad();
                    recalcular();
                    swal("Cotizacion abierto", "Tu cotizacion se a abierto correctamente.", "success");
                }
                if (data.validacion=="false")
                {
                    swal("Error!", 'No se encontro la cotizacion '+inputValue, "error");
                }
            },"json")
            .fail(function() 
            {
                alert( "error" );
            });
        });
    });
    /* ==========================================================================
        Abrir
       ========================================================================== */

    /* ==========================================================================
        Cuentas
       ========================================================================== */
    $("#cantidad_cotizada").change(function()
    {
        cantidad();
    });

    function cantidad()
    {
        var value = $("#cantidad_cotizada").val();
        if(value>=1 && value<=2000)
        {
            $("#porcentaje_cantidad").val(30);
        }
        else if(value>=2001 && value<=3000)
        {
            $("#porcentaje_cantidad").val(25);
        }
        else if(value>=3001 && value<=5000)
        {
            $("#porcentaje_cantidad").val(20);
        }
        else if(value>=5001 && value<=8000)
        {
            $("#porcentaje_cantidad").val(18);
        }
        else if(value>=8001 && value<=10000)
        {
            $("#porcentaje_cantidad").val(13);
        }
        else if(value>=10001 && value<=100000)
        {
            $("#porcentaje_cantidad").val(10);
        }
        else
        {
            $("#porcentaje_cantidad").val(0);
        }
        recalcular();
    }

    $("#largo").change(function()
    {
        recalcular();
    });

    $("#ancho").change(function()
    {
        recalcular();
    });

    $('input:radio[name=tipo_producto]').change(function()
    {
        var tipo_producto = $(this).val();

        if(tipo_producto == 3)
        {
            $("#pegado_lineal_maquina_med_min_acabado").val("0");
            $(".pegado_lineal_maquina_med_min_acabado_ocultar").removeClass("display_none");
            $(".pegado_lineal_maquina_med_min_acabado_mostrar").addClass("display_none");

            $("#pegado_fondo_auto_maquina_med_min_acabado").val("0");
            $(".pegado_fondo_auto_maquina_med_min_acabado_ocultar").removeClass("display_none");
        }
        else
        {
            $("#pegado_lineal_maquina_med_min_acabado").val("0");
            $(".pegado_lineal_maquina_med_min_acabado_ocultar").addClass("display_none");
            $(".pegado_lineal_maquina_med_min_acabado_mostrar").removeClass("display_none");

            $("#pegado_fondo_auto_maquina_med_min_acabado").val("0");
            $(".pegado_fondo_auto_maquina_med_min_acabado_ocultar").addClass("display_none");
        }

        recalcular();
    });

    function recalcular()
    {
        checkbox_empalme();
        checkbox_suaje_automatico();
        checkbox_suaje_automatico_arreglo();
        checkbox_suaje_manual();
        checkbox_suaje_manual_arreglo();
        checkbox_pegado_lineal_maquina();
        checkbox_pegado_lineal_maquina_arreglo();
        checkbox_pegado_fondo_auto_maquina();
        checkbox_pegado_fondo_auto_maquina_arreglo();
        checkbox_pegue_manual();
        checkbox_predoblez_manual();
        checkbox_desbarbe();
        checkbox_empaque();
        importe();
    }

    $("#checkbox_empalme").click(function()
    {
        checkbox_empalme();
    });

    function checkbox_empalme()
    {
        if($("#checkbox_empalme").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseFloat($("#largo").val());
            var ancho = parseFloat($("#ancho").val());
            var tipo_producto = parseInt($('input:radio[name=tipo_producto]:checked').val());
            var empalme_med_min_unidad = "M2";
            var empalme_med_min_largo = parseInt(40);
            var empalme_med_min_ancho = parseInt(40);
            var empalme_med_max_largo = parseInt(130);
            var empalme_med_max_ancho = parseInt(120);
            var empalme_med_max_med_valida = "";
            var empalme_med_max_xunidad = parseFloat(0);

            $("#empalme_med_min_unidad").val(empalme_med_min_unidad);
            $("#empalme_med_min_largo").val(empalme_med_min_largo);
            $("#empalme_med_min_ancho").val(empalme_med_min_ancho);
            $("#empalme_med_max_largo").val(empalme_med_max_largo);
            $("#empalme_med_max_ancho").val(empalme_med_max_ancho);

            var empalme_med_max_merma = parseFloat(20*cantidad_cotizada/1000);
            $("#empalme_med_max_merma").val(empalme_med_max_merma.toFixed(2));

            var empalme_med_max_m2 = parseInt((largo/100)*(ancho/100)*(cantidad_cotizada+empalme_med_max_merma));
            $("#empalme_med_max_m2").val(empalme_med_max_m2);

            if(largo >= empalme_med_min_largo && largo <= empalme_med_max_largo && ancho >= empalme_med_min_ancho && ancho <= empalme_med_max_ancho)
            {
                $("#empalme_med_max_med_valida").val("Si");

                if(tipo_producto == 1)
                {
                    empalme_med_max_xunidad = parseFloat(2.50);
                }
                else if(tipo_producto == 2)
                {
                    empalme_med_max_xunidad = parseFloat(2.00);
                }
                else if(tipo_producto == 3)
                {
                    empalme_med_max_xunidad = parseFloat(0);
                }
                $("#empalme_med_max_xunidad").val(empalme_med_max_xunidad.toFixed(2));
            }
            else
            {
                $("#empalme_med_max_med_valida").val("No");
                $("#empalme_med_max_xunidad").val(empalme_med_max_xunidad.toFixed(2));
            }

            var empalme_med_max_importe = parseFloat(empalme_med_max_m2 * empalme_med_max_xunidad);
            $("#empalme_med_max_importe").val(empalme_med_max_importe.toFixed(2));
        }
        else
        {
            $("#empalme_med_min_unidad").val("");
            $("#empalme_med_min_largo").val("");
            $("#empalme_med_min_ancho").val("");
            $("#empalme_med_max_largo").val("");
            $("#empalme_med_max_ancho").val("");
            $("#empalme_med_max_merma").val("");
            $("#empalme_med_max_m2").val("");
            $("#empalme_med_max_xunidad").val("");
            $("#empalme_med_max_importe").val("");
            $("#empalme_med_max_med_valida").val("");
        }
        importe();
    }

    $("#checkbox_suaje_automatico").click(function()
    {
        checkbox_suaje_automatico();
    });

    function checkbox_suaje_automatico()
    {
        if($("#checkbox_suaje_automatico").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseInt($("#largo").val());
            var ancho = parseInt($("#ancho").val());
            var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
            var suaje_automatico_med_max_arreglo = parseInt($("#suaje_automatico_med_max_arreglo").val());
            var suaje_automatico_med_min_unidad = "MILLAR";
            var suaje_automatico_med_min_largo = parseInt(45);
            var suaje_automatico_med_min_ancho = parseInt(36);
            var suaje_automatico_med_max_largo = parseInt(103);
            var suaje_automatico_med_max_ancho = parseInt(75);
            var suaje_automatico_med_max_med_valida = "";
            var suaje_automatico_med_max_xunidad = parseFloat(0);

            $("#suaje_automatico_med_min_unidad").val(suaje_automatico_med_min_unidad);
            $("#suaje_automatico_med_min_largo").val(suaje_automatico_med_min_largo);
            $("#suaje_automatico_med_min_ancho").val(suaje_automatico_med_min_ancho);
            $("#suaje_automatico_med_max_largo").val(suaje_automatico_med_max_largo);
            $("#suaje_automatico_med_max_ancho").val(suaje_automatico_med_max_ancho);

            var suaje_automatico_med_max_merma = parseFloat(8*cantidad_cotizada/1000);
            $("#suaje_automatico_med_max_merma").val(suaje_automatico_med_max_merma);

            if(largo >= suaje_automatico_med_min_largo && largo <= suaje_automatico_med_max_largo && ancho >= suaje_automatico_med_min_ancho && ancho <= suaje_automatico_med_max_ancho)
            {
                $("#suaje_automatico_med_max_med_valida").val("Si");

                if(tipo_producto == 1)
                {
                    suaje_automatico_med_max_xunidad = parseFloat(280);
                }
                else if(tipo_producto == 2)
                {
                    suaje_automatico_med_max_xunidad = parseFloat(180);
                }
                else if(tipo_producto == 3)
                {
                    suaje_automatico_med_max_xunidad = parseFloat(160);
                }
                $("#suaje_automatico_med_max_xunidad").val(suaje_automatico_med_max_xunidad.toFixed(2));
            }
            else
            {
                $("#suaje_automatico_med_max_med_valida").val("No");
                $("#suaje_automatico_med_max_xunidad").val(suaje_automatico_med_max_xunidad.toFixed(2));
            }

            var suaje_automatico_med_max_importe = parseFloat(((cantidad_cotizada+suaje_automatico_med_max_merma)/1000)*suaje_automatico_med_max_xunidad+suaje_automatico_med_max_arreglo);
            $("#suaje_automatico_med_max_importe").val(suaje_automatico_med_max_importe.toFixed(2));
        }
        else
        {
            $("#suaje_automatico_med_min_unidad").val("");
            $("#suaje_automatico_med_min_largo").val("");
            $("#suaje_automatico_med_min_ancho").val("");
            $("#suaje_automatico_med_max_largo").val("");
            $("#suaje_automatico_med_max_ancho").val("");
            $("#suaje_automatico_med_max_merma").val("");
            $("#suaje_automatico_med_max_arreglo").val("");
            $("#suaje_automatico_med_max_xunidad").val("");
            $("#suaje_automatico_med_max_importe").val("");
            $("#suaje_automatico_med_max_med_valida").val("");
            $("#checkbox_suaje_automatico_arreglo").removeAttr("checked");
        }
        importe();
    }

    $("#checkbox_suaje_automatico_arreglo").click(function()
    {
        checkbox_suaje_automatico_arreglo();
    });

    function checkbox_suaje_automatico_arreglo()
    {
        if($("#checkbox_suaje_automatico").is(':checked'))
        {
            if($("#checkbox_suaje_automatico_arreglo").is(":checked"))
            {
                var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
                var suaje_automatico_med_max_arreglo = 0;
                if(tipo_producto == 1)
                {
                    suaje_automatico_med_max_arreglo =  parseInt(340);
                }
                else if(tipo_producto == 2)
                {
                    suaje_automatico_med_max_arreglo =  parseInt(280);
                }
                else if(tipo_producto == 3)
                {
                    suaje_automatico_med_max_arreglo = parseInt(240);
                }
                $("#suaje_automatico_med_max_arreglo").val(suaje_automatico_med_max_arreglo);
            }
            else
            {
                $("#suaje_automatico_med_max_arreglo").val("");
            }
            checkbox_suaje_automatico();
        }
        else
        {
            $("#checkbox_suaje_automatico_arreglo").removeAttr("checked");
        }
        importe();
    }

    $("#checkbox_suaje_manual").click(function()
    {
        checkbox_suaje_manual();
    });

    function checkbox_suaje_manual()
    {
        if($("#checkbox_suaje_manual").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseInt($("#largo").val());
            var ancho = parseInt($("#ancho").val());
            var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
            var suaje_manual_med_max_arreglo = parseInt($("#suaje_manual_med_max_arreglo").val());
            var suaje_manual_med_min_unidad = "MILLAR";
            var suaje_manual_med_min_largo = parseInt(42);
            var suaje_manual_med_min_ancho = parseInt(32);
            var suaje_manual_med_max_largo = parseInt(150);
            var suaje_manual_med_max_ancho = parseInt(105);
            var suaje_manual_med_max_med_valida = "";
            var suaje_manual_med_max_xunidad = parseFloat(0);

            $("#suaje_manual_med_min_unidad").val(suaje_manual_med_min_unidad);
            $("#suaje_manual_med_min_largo").val(suaje_manual_med_min_largo);
            $("#suaje_manual_med_min_ancho").val(suaje_manual_med_min_ancho);
            $("#suaje_manual_med_max_largo").val(suaje_manual_med_max_largo);
            $("#suaje_manual_med_max_ancho").val(suaje_manual_med_max_ancho);

            var suaje_manual_med_max_merma = parseFloat(10*cantidad_cotizada/1000);
            $("#suaje_manual_med_max_merma").val(suaje_manual_med_max_merma);

            if(largo >= suaje_manual_med_min_largo && largo <= suaje_manual_med_max_largo && ancho >= suaje_manual_med_min_ancho && ancho <= suaje_manual_med_max_ancho)
            {
                $("#suaje_manual_med_max_med_valida").val("Si");

                if(tipo_producto == 1)
                {
                    suaje_manual_med_max_xunidad = parseFloat(450);
                }
                else if(tipo_producto == 2)
                {
                    suaje_manual_med_max_xunidad = parseFloat(450);
                }
                else if(tipo_producto == 3)
                {
                    suaje_manual_med_max_xunidad = parseFloat(450);
                }
                $("#suaje_manual_med_max_xunidad").val(suaje_manual_med_max_xunidad.toFixed(2));
            }
            else
            {
                $("#suaje_manual_med_max_med_valida").val("No");
                $("#suaje_manual_med_max_xunidad").val(suaje_manual_med_max_xunidad.toFixed(2));
            }

            var suaje_manual_med_max_importe = parseFloat((((cantidad_cotizada+suaje_manual_med_max_merma)/1000)*suaje_manual_med_max_xunidad)+suaje_manual_med_max_arreglo);
            $("#suaje_manual_med_max_importe").val(suaje_manual_med_max_importe.toFixed(2));
        }
        else
        {
            $("#suaje_manual_med_min_unidad").val("");
            $("#suaje_manual_med_min_largo").val("");
            $("#suaje_manual_med_min_ancho").val("");
            $("#suaje_manual_med_max_largo").val("");
            $("#suaje_manual_med_max_ancho").val("");
            $("#suaje_manual_med_max_merma").val("");
            $("#suaje_manual_med_max_arreglo").val("");
            $("#suaje_manual_med_max_xunidad").val("");
            $("#suaje_manual_med_max_importe").val("");
            $("#suaje_manual_med_max_med_valida").val("");
            $("#checkbox_suaje_manual_arreglo").removeAttr("checked");
        }
        importe();
    }

    $("#checkbox_suaje_manual_arreglo").click(function()
    {
        checkbox_suaje_manual_arreglo();
    });

    function checkbox_suaje_manual_arreglo()
    {
        if($("#checkbox_suaje_manual").is(':checked'))
        {
            if($("#checkbox_suaje_manual_arreglo").is(":checked"))
            {
                var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
                var suaje_manual_med_max_arreglo = parseInt(0);
                if(tipo_producto == 1)
                {
                    suaje_manual_med_max_arreglo =  parseInt(340);
                }
                else if(tipo_producto == 2)
                {
                    suaje_manual_med_max_arreglo =  parseInt(280);
                }
                else if(tipo_producto == 3)
                {
                    suaje_manual_med_max_arreglo = parseInt(240);
                }
                $("#suaje_manual_med_max_arreglo").val(suaje_manual_med_max_arreglo);
            }
            else
            {
                $("#suaje_manual_med_max_arreglo").val("");
            }
            checkbox_suaje_manual();
        }
        else
        {
            $("#checkbox_suaje_manual_arreglo").removeAttr("checked");
        }
        importe();
    }

    $("#checkbox_pegado_lineal_maquina").click(function()
    {
        checkbox_pegado_lineal_maquina();
    });

    function checkbox_pegado_lineal_maquina()
    {
        if($("#checkbox_pegado_lineal_maquina").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseInt($("#largo").val());
            var ancho = parseInt($("#ancho").val());
            var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
            var pegado_lineal_maquina_med_max_arreglo = parseInt($("#pegado_lineal_maquina_med_max_arreglo").val());
            var pegado_lineal_maquina_med_min_unidad = "MILLAR";
            var pegado_lineal_maquina_med_min_largo = parseInt(15);
            var pegado_lineal_maquina_med_max_largo = parseInt(110);
            var pegado_lineal_maquina_med_max_med_valida = "";
            var pegado_lineal_maquina_med_max_xunidad = parseFloat(0);
            var pegado_lineal_maquina_med_max_importe = parseFloat(0);

            $("#pegado_lineal_maquina_med_min_unidad").val(pegado_lineal_maquina_med_min_unidad);
            $("#pegado_lineal_maquina_med_min_largo").val(pegado_lineal_maquina_med_min_largo);
            $("#pegado_lineal_maquina_med_max_largo").val(pegado_lineal_maquina_med_max_largo);

            var pegado_lineal_maquina_med_max_merma = parseFloat(80*cantidad_cotizada/1000);
            $("#pegado_lineal_maquina_med_max_merma").val(pegado_lineal_maquina_med_max_merma);

            if(largo>=pegado_lineal_maquina_med_min_largo && largo<=pegado_lineal_maquina_med_max_largo)
            {
                $("#pegado_lineal_maquina_med_max_med_valida").val("Si");
                var pegado_lineal_maquina_med_min_acabado = $("#pegado_lineal_maquina_med_min_acabado").val();

                if(tipo_producto == 1)
                {
                    if(pegado_lineal_maquina_med_min_acabado == 1)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(280);
                    }
                    else if(pegado_lineal_maquina_med_min_acabado == 2)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(350);
                    }
                    else if(pegado_lineal_maquina_med_min_acabado == 3)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(480);
                    }
                    else
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(50);
                    }
                }
                else if(tipo_producto == 2)
                {
                    if(pegado_lineal_maquina_med_min_acabado == 1)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(280);
                    }
                    else if(pegado_lineal_maquina_med_min_acabado == 2)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(350);
                    }
                    else if(pegado_lineal_maquina_med_min_acabado == 3)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(480);
                    }
                    else
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(50);
                    }
                }
                else if(tipo_producto == 3)
                {
                    if(pegado_lineal_maquina_med_min_acabado == 10)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(60);
                    }
                    else if(pegado_lineal_maquina_med_min_acabado == 11)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(95);
                    }
                    else if(pegado_lineal_maquina_med_min_acabado == 12)
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(145);
                    }
                    else
                    {
                        pegado_lineal_maquina_med_max_xunidad = parseFloat(50);
                    }
                }
                $("#pegado_lineal_maquina_med_max_xunidad").val(pegado_lineal_maquina_med_max_xunidad.toFixed(2));

                pegado_lineal_maquina_med_max_importe = parseFloat(((cantidad_cotizada+pegado_lineal_maquina_med_max_merma)/1000)*pegado_lineal_maquina_med_max_xunidad+pegado_lineal_maquina_med_max_arreglo);
                $("#pegado_lineal_maquina_med_max_importe").val(pegado_lineal_maquina_med_max_importe.toFixed(2));
            }
            else
            {
                $("#pegado_lineal_maquina_med_max_med_valida").val("No");
                $("#pegado_lineal_maquina_med_max_xunidad").val(pegado_lineal_maquina_med_max_xunidad.toFixed(2));

                $("#pegado_lineal_maquina_med_max_importe").val(pegado_lineal_maquina_med_max_importe.toFixed(2));
            }
        }
        else
        {
            $("#pegado_lineal_maquina_med_min_unidad").val("");
            $("#pegado_lineal_maquina_med_min_largo").val("");
            $("#pegado_lineal_maquina_med_min_ancho").val("");
            $("#pegado_lineal_maquina_med_max_largo").val("");
            $("#pegado_lineal_maquina_med_max_ancho").val("");
            $("#pegado_lineal_maquina_med_max_merma").val("");
            $("#pegado_lineal_maquina_med_max_arreglo").val("");
            $("#pegado_lineal_maquina_med_max_xunidad").val("");
            $("#pegado_lineal_maquina_med_max_importe").val("");
            $("#pegado_lineal_maquina_med_max_med_valida").val("");
            $("#checkbox_pegado_lineal_maquina_arreglo").removeAttr("checked");
        }
        importe();
    }

    $("#pegado_lineal_maquina_med_min_acabado").change(function()
    {
        checkbox_pegado_lineal_maquina();
    });

    $("#checkbox_pegado_lineal_maquina_arreglo").click(function()
    {
        checkbox_pegado_lineal_maquina_arreglo();
    });

    function checkbox_pegado_lineal_maquina_arreglo()
    {
        if($("#checkbox_pegado_lineal_maquina").is(':checked'))
        {
            if($("#checkbox_pegado_lineal_maquina_arreglo").is(":checked"))
            {
                var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
                var pegado_lineal_maquina_med_max_arreglo = parseInt(240);

                $("#pegado_lineal_maquina_med_max_arreglo").val(pegado_lineal_maquina_med_max_arreglo);
            }
            else
            {
                $("#pegado_lineal_maquina_med_max_arreglo").val("");
            }
            checkbox_pegado_lineal_maquina();
        }
        else
        {
            $("#checkbox_pegado_lineal_maquina_arreglo").removeAttr("checked");
        }
        importe();
    }

    $("#checkbox_pegado_fondo_auto_maquina").click(function()
    {
        checkbox_pegado_fondo_auto_maquina();
    });

    $("#pegado_fondo_auto_maquina_med_min_acabado").change(function()
    {
        checkbox_pegado_fondo_auto_maquina();
    });

    function checkbox_pegado_fondo_auto_maquina()
    {
        if($("#checkbox_pegado_fondo_auto_maquina").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseInt($("#largo").val());
            var ancho = parseInt($("#ancho").val());
            var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
            var pegado_fondo_auto_maquina_med_max_arreglo = parseInt($("#pegado_fondo_auto_maquina_med_max_arreglo").val());
            var pegado_fondo_auto_maquina_med_min_unidad = "MILLAR";
            var pegado_fondo_auto_maquina_med_min_largo = parseInt(15);
            var pegado_fondo_auto_maquina_med_max_largo = parseInt(110);
            var pegado_fondo_auto_maquina_med_max_med_valida = "";
            var pegado_fondo_auto_maquina_med_max_xunidad = parseFloat(0);
            var pegado_fondo_auto_maquina_med_max_importe = parseFloat(0);

            $("#pegado_fondo_auto_maquina_med_min_unidad").val(pegado_fondo_auto_maquina_med_min_unidad);
            $("#pegado_fondo_auto_maquina_med_min_largo").val(pegado_fondo_auto_maquina_med_min_largo);
            $("#pegado_fondo_auto_maquina_med_max_largo").val(pegado_fondo_auto_maquina_med_max_largo);

            var pegado_fondo_auto_maquina_med_max_merma = parseFloat(80*cantidad_cotizada/1000);
            $("#pegado_fondo_auto_maquina_med_max_merma").val(pegado_fondo_auto_maquina_med_max_merma);

            if(largo>=pegado_fondo_auto_maquina_med_min_largo && largo<=pegado_fondo_auto_maquina_med_max_largo)
            {
                $("#pegado_fondo_auto_maquina_med_max_med_valida").val("Si");
                var pegado_fondo_auto_maquina_med_min_acabado = $("#pegado_fondo_auto_maquina_med_min_acabado").val();

                if(tipo_producto == 1)
                {
                    pegado_fondo_auto_maquina_med_max_xunidad = parseFloat(480);
                }
                else if(tipo_producto == 2)
                {
                    pegado_fondo_auto_maquina_med_max_xunidad = parseFloat(480);
                }
                else if(tipo_producto == 3)
                {
                    if(pegado_fondo_auto_maquina_med_min_acabado == 1)
                    {
                        pegado_fondo_auto_maquina_med_max_xunidad = parseFloat(105);
                    }
                    else if(pegado_fondo_auto_maquina_med_min_acabado == 2)
                    {
                        pegado_fondo_auto_maquina_med_max_xunidad = parseFloat(135);
                    }
                    else if(pegado_fondo_auto_maquina_med_min_acabado == 3)
                    {
                        pegado_fondo_auto_maquina_med_max_xunidad = parseFloat(165);
                    }
                    else
                    {
                        pegado_fondo_auto_maquina_med_max_xunidad = parseFloat(145);
                    }
                }
                $("#pegado_fondo_auto_maquina_med_max_xunidad").val(pegado_fondo_auto_maquina_med_max_xunidad.toFixed(2));

                pegado_fondo_auto_maquina_med_max_importe = parseFloat(((cantidad_cotizada+pegado_fondo_auto_maquina_med_max_merma)/1000)*pegado_fondo_auto_maquina_med_max_xunidad+pegado_fondo_auto_maquina_med_max_arreglo);
                $("#pegado_fondo_auto_maquina_med_max_importe").val(pegado_fondo_auto_maquina_med_max_importe.toFixed(2));
            }
            else
            {
                $("#pegado_fondo_auto_maquina_med_max_med_valida").val("No");
                $("#pegado_fondo_auto_maquina_med_max_xunidad").val(pegado_fondo_auto_maquina_med_max_xunidad.toFixed(2));

                $("#pegado_fondo_auto_maquina_med_max_importe").val(pegado_fondo_auto_maquina_med_max_importe.toFixed(2));
            }
        }
        else
        {
            $("#pegado_fondo_auto_maquina_med_min_unidad").val("");
            $("#pegado_fondo_auto_maquina_med_min_largo").val("");
            $("#pegado_fondo_auto_maquina_med_min_ancho").val("");
            $("#pegado_fondo_auto_maquina_med_max_largo").val("");
            $("#pegado_fondo_auto_maquina_med_max_ancho").val("");
            $("#pegado_fondo_auto_maquina_med_max_merma").val("");
            $("#pegado_fondo_auto_maquina_med_max_arreglo").val("");
            $("#pegado_fondo_auto_maquina_med_max_xunidad").val("");
            $("#pegado_fondo_auto_maquina_med_max_importe").val("");
            $("#pegado_fondo_auto_maquina_med_max_med_valida").val("");
            $("#checkbox_pegado_fondo_auto_maquina_arreglo").removeAttr("checked");
        }
        importe();
    }

    $("#checkbox_pegado_fondo_auto_maquina_arreglo").click(function()
    {
        checkbox_pegado_fondo_auto_maquina_arreglo();
    });

    function checkbox_pegado_fondo_auto_maquina_arreglo()
    {
        if($("#checkbox_pegado_fondo_auto_maquina").is(':checked'))
        {
            if($("#checkbox_pegado_fondo_auto_maquina_arreglo").is(":checked"))
            {
                var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
                var pegado_fondo_auto_maquina_med_max_arreglo = parseInt(240);

                $("#pegado_fondo_auto_maquina_med_max_arreglo").val(pegado_fondo_auto_maquina_med_max_arreglo);
            }
            else
            {
                $("#pegado_fondo_auto_maquina_med_max_arreglo").val("");
            }
            checkbox_pegado_fondo_auto_maquina();
        }
        else
        {
            $("#checkbox_pegado_fondo_auto_maquina_arreglo").removeAttr("checked");
        }
        importe();
    }

    $("#checkbox_pegue_manual").click(function()
    {
        checkbox_pegue_manual();
    });

    function checkbox_pegue_manual()
    {
        if($("#checkbox_pegue_manual").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseInt($("#largo").val());
            var ancho = parseInt($("#ancho").val());
            var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
            var pegue_manual_med_min_unidad = "MILLAR";
            var pegue_manual_med_min_largo = parseInt(15);
            var pegue_manual_med_max_largo = parseInt(120);
            var pegue_manual_med_max_med_valida = "";
            var pegue_manual_med_max_xunidad = parseFloat(0);
            var pegue_manual_med_max_importe = parseFloat(0);

            $("#pegue_manual_med_min_unidad").val(pegue_manual_med_min_unidad);
            $("#pegue_manual_med_min_largo").val(pegue_manual_med_min_largo);
            $("#pegue_manual_med_max_largo").val(pegue_manual_med_max_largo);

            var pegue_manual_med_max_merma = parseFloat(0*cantidad_cotizada/1000);
            $("#pegue_manual_med_max_merma").val(pegue_manual_med_max_merma);

            if(largo>=pegue_manual_med_min_largo && largo<=pegue_manual_med_max_largo)
            {
                $("#pegue_manual_med_max_med_valida").val("Si");

                if(tipo_producto == 1)
                {
                    pegue_manual_med_max_xunidad = parseFloat(450);
                }
                else if(tipo_producto == 2)
                {
                    pegue_manual_med_max_xunidad = parseFloat(400);
                }
                else if(tipo_producto == 3)
                {
                    pegue_manual_med_max_xunidad = parseFloat(400);
                }
                $("#pegue_manual_med_max_xunidad").val(pegue_manual_med_max_xunidad.toFixed(2));

                pegue_manual_med_max_importe = parseFloat(((cantidad_cotizada+pegue_manual_med_max_merma)/1000)*pegue_manual_med_max_xunidad);
                $("#pegue_manual_med_max_importe").val(pegue_manual_med_max_importe.toFixed(2));
            }
            else
            {
                $("#pegue_manual_med_max_med_valida").val("No");
                $("#pegue_manual_med_max_xunidad").val(pegue_manual_med_max_xunidad.toFixed(2));

                $("#pegue_manual_med_max_importe").val(pegue_manual_med_max_importe.toFixed(2));
            }
        }
        else
        {
            $("#pegue_manual_med_min_unidad").val("");
            $("#pegue_manual_med_min_largo").val("");
            $("#pegue_manual_med_max_largo").val("");
            $("#pegue_manual_med_max_merma").val("");
            $("#pegue_manual_med_max_xunidad").val("");
            $("#pegue_manual_med_max_importe").val("");
            $("#pegue_manual_med_max_med_valida").val("");
        }
        importe();
    }

    $("#checkbox_predoblez_manual").click(function()
    {
        checkbox_predoblez_manual();
    });

    function checkbox_predoblez_manual()
    {
        if($("#checkbox_predoblez_manual").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseInt($("#largo").val());
            var ancho = parseInt($("#ancho").val());
            var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
            var predoblez_manual_med_min_unidad = "MILLAR";
            var predoblez_manual_med_min_largo = parseInt(15);
            var predoblez_manual_med_max_largo = parseInt(120);
            var predoblez_manual_med_max_med_valida = "";
            var predoblez_manual_med_max_xunidad = parseFloat(0);
            var predoblez_manual_med_max_importe = parseFloat(0);

            $("#predoblez_manual_med_min_unidad").val(predoblez_manual_med_min_unidad);
            $("#predoblez_manual_med_min_largo").val(predoblez_manual_med_min_largo);
            $("#predoblez_manual_med_max_largo").val(predoblez_manual_med_max_largo);

            var predoblez_manual_med_max_merma = parseFloat(0*cantidad_cotizada/1000);
            $("#predoblez_manual_med_max_merma").val(predoblez_manual_med_max_merma);

            if(largo>=predoblez_manual_med_min_largo && largo<=predoblez_manual_med_max_largo)
            {
                $("#predoblez_manual_med_max_med_valida").val("Si");

                if(tipo_producto == 1)
                {
                    predoblez_manual_med_max_xunidad = parseFloat(400);
                }
                else if(tipo_producto == 2)
                {
                    predoblez_manual_med_max_xunidad = parseFloat(350);
                }
                else if(tipo_producto == 3)
                {
                    predoblez_manual_med_max_xunidad = parseFloat(400);
                }
                $("#predoblez_manual_med_max_xunidad").val(predoblez_manual_med_max_xunidad.toFixed(2));

                predoblez_manual_med_max_importe = parseFloat(((cantidad_cotizada+predoblez_manual_med_max_merma)/1000)*predoblez_manual_med_max_xunidad);
                $("#predoblez_manual_med_max_importe").val(predoblez_manual_med_max_importe.toFixed(2));
            }
            else
            {
                $("#predoblez_manual_med_max_med_valida").val("No");
                $("#predoblez_manual_med_max_xunidad").val(predoblez_manual_med_max_xunidad.toFixed(2));

                $("#predoblez_manual_med_max_importe").val(predoblez_manual_med_max_importe.toFixed(2));
            }
        }
        else
        {
            $("#predoblez_manual_med_min_unidad").val("");
            $("#predoblez_manual_med_min_largo").val("");
            $("#predoblez_manual_med_max_largo").val("");
            $("#predoblez_manual_med_max_merma").val("");
            $("#predoblez_manual_med_max_xunidad").val("");
            $("#predoblez_manual_med_max_importe").val("");
            $("#predoblez_manual_med_max_med_valida").val("");
        }
        importe();
    }

    $("#checkbox_desbarbe").click(function()
    {
        checkbox_desbarbe();
    });

    function checkbox_desbarbe()
    {
        if($("#checkbox_desbarbe").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseInt($("#largo").val());
            var ancho = parseInt($("#ancho").val());
            var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
            var desbarbe_med_min_unidad = "MILLAR";
            var desbarbe_med_max_xunidad = parseFloat(0);
            var desbarbe_med_max_importe = parseFloat(0);

            $("#desbarbe_med_min_unidad").val(desbarbe_med_min_unidad);

            var desbarbe_med_max_merma = parseFloat(0*cantidad_cotizada/1000);
            $("#desbarbe_med_max_merma").val(desbarbe_med_max_merma);

            if(tipo_producto == 1)
            {
                desbarbe_med_max_xunidad = parseFloat(50);
            }
            else if(tipo_producto == 2)
            {
                desbarbe_med_max_xunidad = parseFloat(50);
            }
            else if(tipo_producto == 3)
            {
                desbarbe_med_max_xunidad = parseFloat(50);
            }
            $("#desbarbe_med_max_xunidad").val(desbarbe_med_max_xunidad);

            desbarbe_med_max_importe = parseFloat(((cantidad_cotizada+desbarbe_med_max_merma)/1000)*desbarbe_med_max_xunidad);
            $("#desbarbe_med_max_importe").val(desbarbe_med_max_importe.toFixed(2));
        }
        else
        {
            $("#desbarbe_med_min_unidad").val("");
            $("#desbarbe_med_max_merma").val("");
            $("#desbarbe_med_max_xunidad").val("");
            $("#desbarbe_med_max_importe").val("");
        }
        importe();
    }

    $("#checkbox_empaque").click(function()
    {
        checkbox_empaque();
    });

    function checkbox_empaque()
    {
        if($("#checkbox_empaque").is(':checked'))
        {
            var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
            var largo = parseInt($("#largo").val());
            var ancho = parseInt($("#ancho").val());
            var tipo_producto = $('input:radio[name=tipo_producto]:checked').val();
            var empaque_med_min_unidad = "MILLAR";
            var empaque_med_max_xunidad = parseFloat(0);
            var empaque_med_max_importe = parseFloat(0);

            $("#empaque_med_min_unidad").val(empaque_med_min_unidad);

            var empaque_med_max_merma = parseFloat(0*cantidad_cotizada/1000);
            $("#empaque_med_max_merma").val(empaque_med_max_merma);

            if(tipo_producto == 1)
            {
                empaque_med_max_xunidad = parseFloat(20);
            }
            else if(tipo_producto == 2)
            {
                empaque_med_max_xunidad = parseFloat(20);
            }
            else if(tipo_producto == 3)
            {
                empaque_med_max_xunidad = parseFloat(20);
            }
            $("#empaque_med_max_xunidad").val(empaque_med_max_xunidad.toFixed(2));

            empaque_med_max_importe = parseFloat(((cantidad_cotizada+empaque_med_max_merma)/1000)*empaque_med_max_xunidad);
            $("#empaque_med_max_importe").val(empaque_med_max_importe.toFixed(2));
        }
        else
        {
            $("#empaque_med_min_unidad").val("");
            $("#empaque_med_max_merma").val("");
            $("#empaque_med_max_xunidad").val("");
            $("#empaque_med_max_importe").val("");
        }
        importe();
    }

    function importe()
    {
        var empalme_med_max_importe = parseFloat($("#empalme_med_max_importe").val());
        var suaje_automatico_med_max_importe = parseFloat($("#suaje_automatico_med_max_importe").val());
        var suaje_manual_med_max_importe = parseFloat($("#suaje_manual_med_max_importe").val());
        var pegado_lineal_maquina_med_max_importe = parseFloat($("#pegado_lineal_maquina_med_max_importe").val());
        var pegado_fondo_auto_maquina_med_max_importe = parseFloat($("#pegado_fondo_auto_maquina_med_max_importe").val());
        var pegue_manual_med_max_importe = parseFloat($("#pegue_manual_med_max_importe").val());
        var predoblez_manual_med_max_importe = parseFloat($("#predoblez_manual_med_max_importe").val());
        var desbarbe_med_max_importe = parseFloat($("#desbarbe_med_max_importe").val());
        var empaque_med_max_importe = parseFloat($("#empaque_med_max_importe").val());

        var importe = empalme_med_max_importe + suaje_automatico_med_max_importe + suaje_manual_med_max_importe + pegado_lineal_maquina_med_max_importe + pegado_fondo_auto_maquina_med_max_importe + pegue_manual_med_max_importe + predoblez_manual_med_max_importe + desbarbe_med_max_importe + empaque_med_max_importe;
        $("#importe").val(importe.toFixed(2));

        var porcentaje_cantidad = parseInt($("#porcentaje_cantidad").val()) / 100;
        var margen = importe * porcentaje_cantidad;
        $("#margen").val(margen.toFixed(2));

        var total = margen + importe;
        $("#total").val(total.toFixed(2));

        var cantidad_cotizada = parseInt($("#cantidad_cotizada").val());
        var precio_unitario = total / cantidad_cotizada;
        $("#precio_unitario").val(precio_unitario.toFixed(2));
    }
    /* ==========================================================================
        Cuentas
       ========================================================================== */

    /* ==========================================================================
        Name's
       ========================================================================== */
    $("input").each(function()
    {
        var id = $(this).attr("id");
        var radio = $(this).attr("type");
        if(radio != "radio")
        {
            $(this).attr("name",id);
        }
    });

    $("select").each(function()
    {
        var id = $(this).attr("id");
        $(this).attr("name",id);
    });
    /* ==========================================================================
        Name's
       ========================================================================== */
});