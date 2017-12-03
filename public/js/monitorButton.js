$(document).ready(function()
{
    $("#div_monitor button").click(function()
    {
        var id="id="+($(this).attr("id")).slice(1,5);;
        $.post("monitor/consulta",id,
            function(data)
            {
                //alert(data.sku[0].No_Orden);
                $("#monitor_no_orden").val(data.id[0].No_Orden);
                $("#monitor_trabajo").val(data.id[0].Nombre_Trabajo);
                $("#monitor_procesos").val(data.id[0].Nom_Proceso);
                $("#monitor_fecha_inicio").val(data.id[0].Fecha_inicio);
                $("#monitor_tiempo").val(data.id[0].Hora);
            },"json"
        );

        $("#myModal").modal("toggle");
    });

    function cargar()
    {
        $.post("monitor/consultarbotones",
            function(data)
            {
                $("#div_monitor input").each(function()
                {           
                    var id=$(this).attr("id");
                    for(i=0;i<data.rows.length;i++)
                    { 
                        if(data.rows[i].Id_Maquina==id)
                        {
                            $("#"+id).val(data.rows[i].Registro);
                        }
                    }
                });
            },"json"
        );

        $("#div_monitor input").each(function()
        {
            //alert($(this).val());
            if($(this).val()=="Sin registro")
            {
                var id=$(this).attr("id");
                $("#B"+id).removeClass("btn-success");
                $("#B"+id).addClass("btn-danger");
                $(this).removeClass("input_monitor_green");
                $(this).addClass("input_monitor");
            }
            else
            {
                var id=$(this).attr("id");
                $("#B"+id).removeClass("btn-danger");
                $("#B"+id).addClass("btn-success");
                $(this).removeClass("input_monitor");
                $(this).addClass("input_monitor_green");
            }
        });
    }

    setInterval(cargar, 60000);
});