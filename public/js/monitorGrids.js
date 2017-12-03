$(document).ready(function()
{
    function actualizarGridsMonitor()
    {
        $("#monitor_diseño").jqGrid("clearGridData", true).trigger("reloadGrid");
        $("#monitor_armado").jqGrid("clearGridData", true).trigger("reloadGrid");
    }

    var grid = function(nombreGrid,height,caption, url,Campo1,Campo2,Campo3,Campo4,Campo5,Campo6,Campo7,Campo8)
    {
        this.url =nombreGrid;
        this.height=height;
        this.url =url;
        this.caption=caption;
        this.Campo1 = Campo1;
        this.Campo2 = Campo2;
        this.Campo3 = Campo3;
        this.Campo4 = Campo4;
        this.Campo5 = Campo5;
        this.Campo6 = Campo6;
        this.Campo7 = Campo7;
        this.Campo8 = Campo8;

        construccion(nombreGrid,height,caption,url,Campo1,Campo2,Campo3,Campo4,Campo5,Campo6,Campo7,Campo8);
    }

    function construccion(nombreGrid,height,caption,url,Campo1,Campo2,Campo3,Campo4,Campo5,Campo6,Campo7,Campo8)
    {
        var s;
        var valores=[];
        $(nombreGrid).jqGrid(
        {
            url:url,
            datatype: "json",
            colNames:[Campo1,Campo2,Campo3,Campo4,Campo5,Campo6,Campo7,Campo8],
            colModel: 
            [
                {name:Campo1,index:Campo1, width:'20',align:'left',hidden:true},
                {name:Campo2,index:Campo2, width:'200',align:'left'},
                {name:Campo3,index:Campo3, width:'200',align:'left'},
                {name:Campo4,index:Campo4, width:'20',align:'left',hidden:true},
                {name:Campo5,index:Campo5, width:'20',align:'left',hidden:true},
                {name:Campo6,index:Campo6, width:'20',align:'left',hidden:true},
                {name:Campo7,index:Campo7, width:'20',align:'left',hidden:true},
                {name:Campo8,index:Campo8, width:'20',align:'left',hidden:true}
            ],
            rowNum:100,
            rowList:[10,20,30,1000],
            pager:nombreGrid+"p",
            sortname: Campo1,
            viewrecords: true,
            sortorder: "desc",
            width:'auto',
            height:height,
            multiselect:false,
            caption:caption,

            onSelectRow: function (ids)
            {   
                var s = jQuery(nombreGrid).jqGrid('getGridParam','selrow');
                valores = s.toString().split(",");
                var Id_Usuario=$(nombreGrid).jqGrid('getRowData',s).Id_Usuario;
                var Descripcion=$(nombreGrid).jqGrid('getRowData',s).Descripcion;
                var No_Orden=$(nombreGrid).jqGrid('getRowData',s).No_Orden;
                var Nombre_Trabajo=$(nombreGrid).jqGrid('getRowData',s).Nombre_Trabajo;
                var Nom_Proceso=$(nombreGrid).jqGrid('getRowData',s).Nom_Proceso;
                var Fecha_inicio=$(nombreGrid).jqGrid('getRowData',s).Fecha_inicio;
                var Hora=$(nombreGrid).jqGrid('getRowData',s).Hora;

                $("#monitor_no_orden").val(No_Orden);
                $("#monitor_trabajo").val(Nombre_Trabajo);
                $("#monitor_fecha_inicio").val(Fecha_inicio);
                $("#monitor_procesos").val(Nom_Proceso);
                $("#monitor_operador").val(Descripcion);
                $("#monitor_tiempo").val(Hora);

                $("#myModal").modal("toggle");
            },
        });
    }

    //Monitor
    var objeto1 = new grid('#monitor_diseño','120','Usuarios de Diseño','monitor/consultardiseno','Id_Usuario','Descripcion','Registro','No_Orden','Nombre_Trabajo','Nom_Proceso','Fecha_inicio','Hora');
    construccion(objeto1.nombreGrid,objeto1.height,objeto1.caption,objeto1.url,objeto1.Campo1,objeto1.Campo2,objeto1.Campo3,objeto1.Campo4,objeto1.Campo5,objeto1.Campo6,objeto1.Campo7,objeto1.Campo8);

    //Monitor
    var objeto1 = new grid('#monitor_armado','120','Usuarios de Armado','monitor/consultararmado','Id_Usuario','Descripcion','Registro','No_Orden','Nombre_Trabajo','Nom_Proceso','Fecha_inicio','Hora');
    construccion(objeto1.nombreGrid,objeto1.height,objeto1.caption,objeto1.url,objeto1.Campo1,objeto1.Campo2,objeto1.Campo3,objeto1.Campo4,objeto1.Campo5,objeto1.Campo6,objeto1.Campo7,objeto1.Campo8);

    setInterval(actualizarGridsMonitor, 60000);
});