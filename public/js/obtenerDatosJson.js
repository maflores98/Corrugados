$(document).ready(function(){

//function mueveReloj(){ 
//   	momentoActual = new Date();
//   	hora = momentoActual.getHours();
//   	minuto = momentoActual.getMinutes();
//   	segundo = momentoActual.getSeconds();
//
//   	horaImprimible = hora + " : " + minuto + " : " + segundo;
//
//   	document.form_reloj.reloj.value = horaImprimible; 
//
//   	setTimeout("mueveReloj()",1000);
//} 




    
//    
//    setInterval(function(){ 
//        
//                $.post("")
//    
//    }, 100000);
    
     //<editor-fold defaultstate="collapsed" desc="checharcursor duracion de refresh 20 segundos">
                                    function actualizargrids(){

                    $("#refresh_list3").trigger("click");

                    $("#refresh_list4").trigger("click");
                    $("#refresh_list5").trigger("click");
                                                $("#refresh_ordenespagadas").trigger("click");
                    $("#refresh_listatnclientes").trigger("click");
                    $("#refresh_fotobooksprocesados").trigger("click");
                    $("#refresh_fotobookspendientes").trigger("click");

                    //                                    $("#list2").jqGrid("clearGridData", true).trigger("reloadGrid");
                    //                                    $("#list2").trigger("reloadGrid"); 
                    //                                    $("#list2").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#enprocesoEspecial").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#enpendienteEspecial").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#ordenespagadas").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#list3").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#list4").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#list5").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#listprensa").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#listprensap").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#listploter").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#listploterpro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#calidad").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#corteautomatico").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#cortemanual").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#cortemanualpro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#laminado").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#barnizuv").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#controlbarniz").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#laminadocontrol").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#corteautomaticop").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#barnizuvp").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#fotobookspendientes").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#fotobooksprocesados").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#engrapado").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#refinado").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#refinadopro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#empacadofin").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#empacadofinpro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#envios").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#laminadob").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#laminadobpro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#plecado").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#plecadopro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#encuadernado").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#encuadernadopro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#engrapadopro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#wirepro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#wire").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#laminadopro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#errorcomponentes").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#empacado").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#listatnclientes").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#carterasp").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#carteras").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#pielytelap").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#pielytela").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#pastasuave").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#pastasuevap").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#refinadopastasuave").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#refinadopastasuavep").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#acabadorefinado").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#acabadorefinadop").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#acabadomanualensamblado").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#acabadomanualensambladop").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#acabadomanualbastidor").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#acabadomanualbastidorp").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#prensaindigopend").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#prensaindigoproce").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#prensaploterpend").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#prensaploterpend").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#prensaploterproce").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#montadocanvaspend").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#montadocanvaspro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#enmarcadocanvaspend").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#enmarcadocanvaspro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#empacadocanvaspendientes").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#empacadocanvaspro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#layout").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $('#ordenespagadasinpo').jqGrid("clearGridData", true).trigger("reloadGrid");
                    
                     //$("#refresh_layout").trigger("click");
                    $("#enviospro").jqGrid("clearGridData", true).trigger("reloadGrid");
                    //$("#refresh_envios").trigger("click");
                    $("#tienda").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#encuadernadopastasuave").jqGrid("clearGridData", true).trigger("reloadGrid");
                    $("#encuadernadopastasuavepro").jqGrid("clearGridData", true).trigger("reloadGrid");
                                   
                        }
                             (function(){
                                       var moviendo= false;
                                       document.onmousemove = function(){
                                              moviendo= true;
                                       };
                                       setInterval (function() {
                                          if (!moviendo) {
                                              actualizargrids();
                                              
                                              //#listprensap
                                             // alert("se refrescara la pagina");

                                          } else {
                                              moviendo=false;
                                          }
                                       },300000); //300000
                                       
                                       //segundo time
                                       var moviendo2= false;
                                       document.onmousemove = function(){
                                              moviendo2= true;
                                       };
                                       setInterval (function() {
                                          if (!moviendo2) {
                                    $("#listprensa").jqGrid("clearGridData", true).trigger("reloadGrid");
                                    $("#listprensap").jqGrid("clearGridData", true).trigger("reloadGrid");
                                    $("#listploter").jqGrid("clearGridData", true).trigger("reloadGrid");
                                    $("#listploterpro").jqGrid("clearGridData", true).trigger("reloadGrid");

                                          } else {
                                              moviendo2=false;
                                          }
                                       }, 20000); //300000
                                       
                                       
                                       /*$("#ordenesporpagar").jqGrid("clearGridData", true).trigger("reloadGrid");
                                    $("#ordenespagadas").jqGrid("clearGridData", true).trigger("reloadGrid");*/
                                       
                                     
                                       
                                       
                                }
                                        
            
            )()
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
    //</editor-fold>
    

                    function checarcolores(){//pintar colores en renglones
                    var comprobar="";
                    var paginas;
                     var da = $("#ui-pg-inputpg_plistatnclientes").val();
                     
                        paginas=da*10
                    
                     for(var r=0;r<paginas;r++){
                         var ColorST=jQuery("#listatnclientes").jqGrid('getRowData',r).ColorST;
                         if(ColorST==1){
                            $("#"+r).css("background", "#E6E6E6");
                         }
                         if(ColorST==2){
                             $("#"+r).css("background", "#81F781");
                         }
                      }
                    
                  }
                    checarcolores();
                    var intevalo = setInterval(checarcolores,500);
 
var grid = function(OrdenID,Ordenamiento1,OrdArtSeqID,CatArticuloID,Nombre,Status_Orden,Total,Fecha,url,vista,tabla,paginador,btnbrincar,checkboxgral,status,btnsubir,btnbajar,btnguardar,caption,urlbrincar,
urlcambiarpos,btnguardarpre,btnerror,anchosegundacolumna,anchoterceracolumna,anchosextacolumna,pultimacolumna,ultimacolumna,btnbricarcomponentes,fila,input,ploter,
dialogos,urlsortable,pasaracontrolcalidad,statusproceso,urlparambiarstatusproceso,reportarerrordesdecontrolcalidad,etiquedado,etiquetado2,columna5,
cabiarstatusdeordenpp,pasarapla,porfacturar,procesarcorteauto,urlprocesocorteauto,condstatusempaque,errorcomponente,urlerrorcomponente,regresarcomponente,
urlparareportarerror,guia,etiquetasenviosfin,regresarapreprensa,cancelarorden){
    
    //<editor-fold defaultstate="collapsed" desc="variables del objeto Grid">
    
    this.OrdenID = OrdenID;
    this.Ordenamiento1 = Ordenamiento1;
    this.OrdArtSeqID=OrdArtSeqID;
    this.CatArticuloID=CatArticuloID,
    this.Nombre=Nombre;
    this.StatusOrden=Status_Orden;
    this.Total=Total;
    this.Fecha=Fecha;
    this.url = url;
    this.vista = vista;
    this.tabla= tabla;
    this.paginador=paginador;
    this.btnbrincar= btnbrincar;
    this.checkboxgral= checkboxgral;
    this.status= status;
    this.btnsubir=btnsubir;
    this.btnbajar=btnbajar;
    this.btnguardar=btnguardar;
    this.caption=caption;
    this.urlbrincar=urlbrincar;
    this.urlcambiarpos=urlcambiarpos;
    this.btnguardarpre=btnguardarpre;
    this.btnerror=btnerror;
    this.anchosegundacolumna=anchosegundacolumna;
    this.anchoterceracolumna=anchoterceracolumna;
    this.anchosextacolumna=anchosextacolumna;
    this.pultimacolumna=pultimacolumna;
    this.ultimacolumna=ultimacolumna;
    this.btnbricarcomponentes=btnbricarcomponentes;
    this.fila=fila;
    this.input=input;
    this.ploter=ploter;
    this.dialogos=dialogos;
    this.urlsortable=urlsortable;
    this.pasaracontrolcalidad=pasaracontrolcalidad;
    this.statusproceso=statusproceso;
    this.urlparambiarstatusproceso=urlparambiarstatusproceso;
    this.reportarerrordesdecontrolcalidad=reportarerrordesdecontrolcalidad;
    this.etiquedado=etiquedado;
    this.etiquetado2=etiquetado2;
    this.columna5=columna5;
    this.cabiarstatusdeordenpp=cabiarstatusdeordenpp;
    this.pasarapla=pasarapla;
    this.porfacturar=porfacturar;
    this.procesarcorteauto=procesarcorteauto;
    this.urlprocesocorteauto=urlprocesocorteauto;
    //this.errorcontrolcalidad=errorcontrolcalidad;
    this.condstatusempaque=condstatusempaque;
    this.errorcomponente=errorcomponente;
    this.urlerrorcomponente=urlerrorcomponente;
    this.regresarcomponente=regresarcomponente;
    this.urlparareportarerror=urlparareportarerror;
    this.guia=guia;
    this.etiquetasenviosfin=etiquetasenviosfin;
    this.regresarapreprensa=regresarapreprensa;
    this.cancelarorden=cancelarorden;

//</editor-fold>
 
}
 
 function prueba(rOrdenID,rOrdenamiento1,OrdArtSeqID,CatArticuloID,Nombre,Status_Orden,Total,Fecha,rurl,vista,rtabla,pager,btnbrincar,checkboxgral,status,btnsubir,btnbajar,btnguardar,caption,urlbrincar,
 urlcambiarpos,btnguardarpre,btnerror,anchosegundacolumna,anchoterceracolumna,anchosextacolumna,pultimacolumna,ultimacolumna,btnbricarcomponentes,fila,input,ploter,dialogos,urlsortable,
 pasaracontrolcalidad,statusproceso,urlparambiarstatusproceso,reportarerrordesdecontrolcalidad,etiquedado,etiquetado2,columna5,
 cabiarstatusdeordenpp,pasarapla,porfacturar,procesarcorteauto,urlprocesocorteauto,condstatusempaque,errorcomponente,urlerrorcomponente,regresarcomponente,urlparareportarerror,guia,etiquetasenviosfin,regresarapreprensa,cancelarorden){

           
            //<editor-fold defaultstate="collapsed" desc="Variables Globales">
           var array=[];
            var s;
         
            var b;
            var desplazamiento;
            var seq=[];
            var ordseqid;
            var idor;
            var datos=[];
            var ids;
            var tot;
            var da;
            var da1;
            var paginas;
           var CatArticuloID;
            var OrdArtSeqID;
            var Nombre;
            var CatcomponenteID;
            var catponentesid=[];
            var componentes=[];
            var barra;
            var algo;
            var JobID;
            var dialo=[];
            var CatProcesoID;
            var Desc_Articulo;
            var datoscalidad=[];
            var CatArticuloIDcalidad=[];
            var secuenciacalidad=[];
            var aplan=[];
            var total;
            var  MonTotal;
            var date;
             var CatComponenteID;
             var procesonext;
             var ordena=[];
          
            //</editor-fold>
            //funciones para el grid
            //<editor-fold defaultstate="collapsed" desc="Declaracion de botones para control de grids">
           
     //botones para buscadores
    
     var datojobid;
     var valorcolumnaextra;
     var linkdetalle;
     var or;
     if(rtabla=="#list2" || rtabla=="#list3" || rtabla=="#list4" || rtabla=="#list5" || rtabla=="#fotobookspendientes" || rtabla=="#fotobooksprocesados" || rtabla=="#listprensap" ||
       rtabla=="#listprensa" || rtabla=="#listploterpro" || rtabla=="#listploter" || rtabla=="#calidad" || rtabla=="#corteautomaticop" || rtabla=="#corteautomatico"
       || rtabla=="#laminadopro" || rtabla=="#laminado" || rtabla=="#cortemanualpro" || rtabla=="#cortemanual" || rtabla=="#barnizuvp" || rtabla=="#barnizuv"
       || rtabla=="#engrapadopro" || rtabla=="#engrapado" || rtabla=="#wirepro" || rtabla=="#wire" || rtabla=="#plecadopro" || rtabla=="#plecado"
       || rtabla=="#encuadernadopro" || rtabla=="#encuadernado" || rtabla=="#empacado" || rtabla=="#montado" || rtabla=="#enmarcado" 
      || rtabla=="#refinadopro" || rtabla=="#refinado" || rtabla=="#laminadobpro" || rtabla=="#laminadob" || rtabla=="#laminadocontrol" 
       || rtabla=="#pastasuave" || rtabla=="#pastasuevap" || rtabla=="#controlbarniz" || rtabla=="#preprensaind" || rtabla=="#prensaindigoproce" || rtabla=="#prensaindigopend"
       || rtabla=="#prensaploterpend" || rtabla=="#prensaploterproce" || rtabla=="#montadocanvaspend" || rtabla=="#montadocanvaspro" 
       || rtabla=="#carteras" || rtabla=="#carterasp" || rtabla=="#acabadorefinadop" || rtabla=="#acabadorefinado" || rtabla=="#acabadomanualensambladop"
       || rtabla=="#acabadomanualensamblado"  || rtabla=="#acabadomanualbastidor" || rtabla=="#acabadomanualbastidorp" || rtabla=="#errorcomponentes"
       || rtabla=="#rayado" || rtabla=="#rayadopro" || rtabla=="#encuadernadopastasuavepro"  || rtabla=="#encuadernadopastasuave"
       || rtabla=="#refinadopastasuave" || rtabla=="#refinadopastasuavep" || rtabla=="#reimpresion"){
         

         datojobid="JobID";
         valorcolumnaextra=500;
         linkdetalle="showlink";
         or="orden";
        
         
     }
     else{
         datojobid="algo";
         valorcolumnaextra=.5;
          linkdetalle="hidelink";
        
         
     }
     
     if(rtabla=="#envios" || rtabla=="#enviospro" || rtabla=="#tienda"){
         
         datojobid="Articulos";
         valorcolumnaextra=100;
         linkdetalle="hidelink";
     }
    
    if(rtabla=="#layout"  || rtabla=="#tienda"){
         datojobid="Fecha.date";
         valorcolumnaextra=100;
         linkdetalle="hidelink";
      }
    if(rtabla=="#envios"){
          var mostrarPadre=false; 
    
        }else{
          var mostrarPadre=true;
            
        }
    
      if(rtabla=="#ordenesporpagar" || rtabla=="#ordenespagadas"){
          
          datojobid="NoOrden";
         valorcolumnaextra=100;
          linkdetalle="showlink";
          or="factura";
         
      }
   
      if(rtabla=="#listatnclientes"){
          
          datojobid="Nombre";
         valorcolumnaextra=350;
         linkdetalle="hidelink";
          
      }
     
     if(rtabla=="#listatnclientes"){
         
         var atncli=false;
         var coloratn=true;
         
     }else{
         
         atncli=true;
         coloratn=true;
     }
      
      if(rtabla=="#list3"){
          
          var habilitagrupo=true;
          var columnaparaagrupar="Familia";
          var anchodeagrupamiento=100;
          var ocultaragrupamiento=false;
          var valordepaginador=50;
          var tamañogrid=1290;
         
          
      }
      
      else{
          
          habilitagrupo=false;
          columnaparaagrupar="Familia";
          anchodeagrupamiento=.5;
          ocultaragrupamiento=true;
          valordepaginador=10;
          tamañogrid=1190;// 920
         
          
          
      }
    if(rtabla=="#list3" ){
        
         ocultaPadrePlaneación=false;
    }else{
        ocultaPadrePlaneación=true;
        
    }
      
      
     
            $( "#buscarplaneacion" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarespecial" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
              $( "#buscarordenessinpo" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             
             $( "#buscarenvios" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
          $( "#buscarordenesquehansidoenviadas" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             //consultar estatus de webservice para las ordenes
            $( "#ConsultaWebService" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-shuffle"
                }
             });
             
             
             $( "#buscarencuadernadoprocesados" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             
             
             $( "#buscarplaneaciondos" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarpreprensa" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
              $( "#buscarpreprensados" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
              $( "#buscarordenesporpagar" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarordenespagadas" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarrayado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarencuadernadopastasuave" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             
             
             $( "#buscarfotobooks" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
              $( "#buscarfotobooksdos" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarprensa" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarprensados" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarprensadosp" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarprensaploter" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarrecoger" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             //
             
             $( "#buscarprensaploterdos" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
              $( "#buscarcontrolcalidad1" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
              $( "#buscarautomatico" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarautomaticodos" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarrefinado1" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarrefinado2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarlaminado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarengrapadopendeintes" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarengrapadoprocesados" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             
             $( "#buscarlaminado2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarlaminadob" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarlaminadob2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
              $( "#buscarlamicontrol" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
           
              $( "#buscarcortemanual" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarcortemanual2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarprensaploterdossss" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             
             
             $( "#buscarbarniz" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
              $( "#buscarbarniz2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarbarnizcontrol" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarbarnizcontrol2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscaratnclientes" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
              $( "#buscarprensainddos" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarprensadospind" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarprensaploterpendie" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
            $( "#buscarwirependientes" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
            
               $( "#buscarpastasuaveengra" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarrayado2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             
               $( "#buscarplecadopendientes" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
               $( "#buscarrefinadopasta" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarcarteras" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarencuadernado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
              $( "#buscarmontado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#buscarenmarcadocanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
            $( "#buscarempacadocanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
            $( "#buscaracabadomanualrefinado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
              $( "#buscarempacados" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
        
            $( "#buscaracabadoensamblado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
              $( "#buscarreimpresion" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
               $( "#buscaracabadobastidor" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
           $( "#buscarempacadof" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             
             $( "#guardarGuiasDiferentes" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-folder-collapsed"
             
                }
             });
             
             
        $( "#buscarenvioss" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
             $( "#buscarfa" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-search"
             
                }
             });
       
              $( "#m1" ).button({
              text: false,
             icons: {
             primary: "ui-icon-pause"
             
                }
             });
             
               $( "#solucionarerror" ).button({
              text: false,
             icons: {
             primary: "ui-icon-info"
             
                }
             });
              $( "#cambiardatos" ).button({
              text: false,
             icons: {
             primary: "ui-icon-info"
             
                }
             });
           
             
             
             
             
              $( btnsubir ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-triangle-1-n"
                }
             });
              $("#procesarenvioss").button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
               $("#procesaracabadorefinado").button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
               $("#regresarEnvios").button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
            
               $("#procesarayado").button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
             
             
              $("#procesarmontadocanvas").button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
             $("#procesarpastasuave").button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
              $("#procesaracabadobastidor").button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
              $("#procesarencuadernadopastasuave").button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
          
          
              $( btnbajar ).button({
              text: false,
             icons: {
             primary: "ui-icon-triangle-1-s"
                }
             });
             
              $( "#m3" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#normalguia" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#empaqueEspecial" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
             
              $( "#enPrcesoGuia" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
              $( "#enProcesoEspecial" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
            
             
             
             
               $( "#pasarDeError" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
              
              $( "#pasaranextt" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
               $( "#enviaraensamblado" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
                $( "#desdebastidor" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#enviarempaquesuave" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
             $( "#regresaraproceso" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             $( "#pasararticulorefinado" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#m2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
              $( "#m60" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             $( "#btnfotobrincar" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             $( "#procesarlaminadoo" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
              $( "#proces" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             $( "#procesarrefinado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
           
             $( "#procesarcortemanual" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
             $( "#pasararefinadooo" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
            
              $( "#detalleorden" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-document"
                }
             });
             
              $( "#m40pre" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             $( "#errorprepreploter" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             $( "#errorenmarcadocanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
              $( "#cancelarorden" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             
             
             
              $( "#errorcomponentepastadura" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
               $( "#errorengrapadopastasuave" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
              $( "#erroracabadomanualrefinado" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             
               $( "#reportarerrordesdecontrolcalidad" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
                $( "#errorcomponenteploterr" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
            
              $( "#errorindigoo" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             $( "#cancelarorden2" ).button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             
              $( "#m13pre" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             $( "#pasenvios" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#m60pre" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
              $( "#corte" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#m60ploter" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
              $( "#rt" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
               $( "#imprimirEspecial" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
             
             
             $( "#detallepdf" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
             
             $( "#impirmiretiquetaenvios" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
              $( "#impindi" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
              $( "#rtsolaploter" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
             
             $( "#reimprimirorden" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
             $( "#impricompsolo" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
             
             
             
              $( "#rtsola" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
               $( "#impricomp" ).button({
              text: false,
             icons: {
             primary: "ui-icon-print"
                }
             });
            
              $( "#pasaracontrol" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#confirmarentrega" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
              $( "#pasaracorteauto" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
               $( "#pasarabarnizuv" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
               $( "#pasaralaminado" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
               $( "#enviarcortemanual" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
                 $( "#enviardesdemontadocanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
                $( "#enviaralaminadodesdeautomatico" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
                $( "#opp" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });

                $( "#pasaraplan" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#pasarafacturar" ).button({
                    text: false,
                   icons: {
                   primary: "ui-icon-disk"
                      }
             });
              $( "#pasararemision" ).button({
                    text: false,
                   icons: {
                   primary: "ui-icon-disk"
                      }
             });
              $( "#enviarcontrolbarniz" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#enviarcalidadlaminado" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#enviaracortemanual" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#pasaraengrapado" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#pasardesdeploter" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#pasaraenmarcadocanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             $( "#nextpastasuave" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
               $( "#brincarprocesarcomponente" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
              $( "#procesarbarniz" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             $( "#procesarlaminadob" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             $( "#procesarempacado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             $( "#procesarencuadernado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
              $( "#procescarte" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
             
             
             $( "#procesarplecadoo" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             $( "#procesarprepreindigo" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
             
               $( "#procesaracabadoensamblado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
            $( "#procespiel" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
            $( "#proces2" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
            
            
               $( "#pasaracontrcalidadbarniz" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
             
             
             
             
               $( "#pasarainfigoo" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#pasardesdeempacadocanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
              $( "#llavetriple" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             $( "#procesarefinadopasta" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
              $( "#procesarenmarcadocanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
             
             
            
             $( "#procesarploterrp" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             $( "#procesarlayout" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#rayadosiguiente" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
               $( "#procesarempacadocanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
             
             
             
              $( "#errorcontrolcalidad").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
               $( "#errormontadocanvaspen").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
              $( "#errorencuadernadopastasuave").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
              $( "#actualizarDatosEnvios").button({
              text: false,
             icons: {
             primary: "ui-icon-refresh"
                }
             });
             
            
              $( "#errorcomponente").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
              $( "#errorcomponenteploter").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
              $( "#errorautomatico").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
               $( "#errorrefinado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             $( "#errorlaminado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
            $( "#errorlaminadobrillante").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             $( "#errorcortemanual").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             $( "#errorbarniz").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             $( "#errorcontrolcalidadbarniz").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
              $( "#errorengrapado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
              $( "#errorwireo").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
              $( "#errordebastidor").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             
              $( "#errorplecado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
            $( "#errorencuadernado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
              $( "#errorrayado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             $( "#errormontado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
             $( "#errorenmarcado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
              $( "#errordeensamblado").button({
              text: false,
             icons: {
             primary: "ui-icon-alert"
                }
             });
             
            
              $( "#pasararemision2" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             $( "#desdeensamblado" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             $( "#pasararemision3" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
           $( "#pasarcartera" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             $( "#pasarpiel" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
          
          $( "#pasararemision4" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
           $( "#pasararemision5" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#pasararemision6" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#pasararemision7" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
             
              $( "#m13prefoto" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
               $( "#pasaraecuandernado" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#pasaraecuadernadop" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
            
               $( "#guia" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#costcoEnvio" ).button({
              text: false,
             icons: {
             primary: "ui-icon-cart"
                }
             });
             
              $( "#costcoManual" ).button({
              text: false,
             icons: {
             primary: "ui-icon-cart"
                }
             });
             
              $( "#siguiente" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
              $( "#brillantesiguiente" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#deencuaaempaque" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             $( "#env" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             $( "#enviarenviados" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#desdeatnaplan" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#enviarempaaquecanvas" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#pasaralaminadom" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
              $( "#siguientepro" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             $( "#envpro" ).button({
              text: false,
             icons: {
             primary: "ui-icon-disk"
                }
             });
             
              $( "#insertarGuia" ).button({
              text: false,
             icons: {
             primary: "ui-icon-gear"
                }
             });
             
             
             
             
              $( "#pasararefinado" ).button({
              text: false,
             icons: {
             primary: "ui-icon ui-icon-arrowreturnthick-1-n"
                }
             });
            
                                    $("#search_list2").hide();
                                    $("#search_list3").hide();
                                    $("#search_fotobooksprocesados").hide();
                                    $("#search_fotobookspendientes").hide();
                                    $("#search_list5").hide();
                                    $("#search_list4").hide();
                                    $("#search_listprensap").hide();
                                    $("#search_listprensa").hide();
                                    $("#search_listploterpro").hide();
                                    $("#search_listploter").hide();
                                    $("#search_calidad").hide();
                                    $("#search_corteautomaticop").hide();
                                    $("#search_corteautomatico").hide();
                                    $("#search_ordenesporpagar").hide();
                                    $("#search_ordenespagadas").hide();
                                    $("#search_listatnclientes").hide();
                                    $("#search_refinado").hide();
                                    $("#search_refinadopro").hide();
                                    $("#search_laminado").hide();
                                    $("#search_laminadopro").hide();
                                    $("#search_envios").hide();
                                    $("#search_layout").hide();
                                    $("#search_enviospro").hide();
                                    $("#search_refinadopastasuave").hide();
                                    $("#search_refinadopastasuavep").hide();
                                    $("#search_laminadobpro").hide();
                                    $("#search_laminadob").hide();
                                    $("#search_laminadocontrol").hide();
                                    $("#search_cortemanual").hide();
                                    $("#search_cortemanualpro").hide();
                                    $("#search_barnizuv").hide();
                                    $("#search_barnizuvp").hide();
                                    $("#search_controlbarniz").hide();
                                    $("#search_engrapado").hide();
                                    $("#search_engrapadopro").hide();
                                    $("#search_wire").hide();
                                    $("#search_wirepro").hide();
                                    $("#search_plecado").hide();
                                    $("#search_plecadopro").hide();
                                    $("#search_pastasuave").hide();
                                    $("#search_pastasuevap").hide();
                                    $("#search_carteras").hide();
                                    $("#search_carterasp").hide();
                                    $("#search_encuadernado").hide();
                                    $("#search_encuadernadopro").hide();
                                    $("#search_montadocanvaspro").hide();
                                    $("#search_montadocanvaspend").hide();
                                    $("#search_empacadocanvaspendientes").hide();
                                    $("#search_empacadocanvaspro").hide();
                                    $("#search_enmarcadocanvaspend").hide();
                                    $("#search_enmarcadocanvaspro").hide();
                                    $("#search_acabadorefinadoe").hide();
                                    $("#search_acabadorefinadop").hide();
                                    $("#search_acabadomanualensamblado").hide();
                                    $("#search_acabadomanualensambladop").hide();
                                    $("#search_acabadomanualbastidor").hide();
                                    $("#search_acabadomanualbastidorp").hide();
                                    $("#search_empacadofin").hide();
                                    $("#search_empacadofinpro").hide();
                                    $("#search_prensaploterpend").hide();
                                    $("#search_prensaploterproce").hide();
                                    $("#search_prensaindigoproce").hide();
                                    $("#search_prensaindigopend").hide();
                                    $("#search_tienda").hide();
                                    $("#search_errorcomponentes").hide();
                                    $("#search_rayado").hide();
                                    $("#search_rayadopro").hide();
                                    $("#search_encuadernadopastasuave").hide();
                                    $("#search_reimpresion").hide();
                                    
                                    
                                    
             //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Estructura de Grid">
           
            if(rtabla=='#envios' || rtabla=="#tienda"  || rtabla=="#layout" || rtabla=="#enviospro"){
                
                var detalleartenvios="showlink";
            }
            
            if(rtabla=="#ordenesporpagar" || rtabla=="#ordenespagadas" || rtabla=="#datosfacturacion" || rtabla=="#enpendienteEspecial" || rtabla=="#enprocesoEspecial" || rtabla=="#ordenespagadasinpo"){
                var fecha="FechaHoraEmision.date";
                var datee="date";
            }
            else if(rtabla=="#listatnclientes"){
                
                fecha="Apellido";
                datee="";
            }
            
            else if(rtabla=="#list2" || rtabla=="#list3"){
                
                fecha="Fecha.date";
                datee="date";
            }
            
            else if(rtabla=="#listprensa"){
                 
                 fecha="OrdArtSeqID";//PID
                 datee="";
                
                
            }
            else if(rtabla=="#errorcomponentes"){
                 fecha="Proceso";
                 datee="";
             
            }
            
            
            else{
                
                fecha="OrdArtSeqID";
                 datee="";
            }
            
            if(rtabla=="#empacadofin"){
                
                var empa=false;
            }
            else{
                
                empa=true;
            }
            if(rtabla=="#ordenespagadas" || rtabla=="#ordenespagadasinpo"){
                anchosegundacolumna=100;
                var mostrarPadreA=false;
            }else{
                mostrarPadreA=true;
                
            }
            if(rtabla=="#layout"){
                var mostrarguia=false;
            }else{
                
                mostrarguia=true;
            }
            if(rtabla=="#envios"){
                var mostrarMetodo=false;
                
            }else{
                mostrarMetodo=true;
            }
            if(rtabla=="#empacadofin"){
                
            }
           /* if(rtabla=="#listprensa" || rtabla=="#listprensap"){
                  var valorColor="Componente";
                   coloratn=false;
              
            }else{
                  var valorColor="ColorST";
                
            }*/
            
            if(rtabla=="#list3"){
                var muestraCantidad=false;
            }else{
                muestraCantidad=true;
            }
            
            var ColorST;
                $(rtabla).jqGrid({
                url:rurl,
                datatype: "json",
                colNames:[columnaparaagrupar,rOrdenID,rOrdenamiento1,OrdArtSeqID,CatArticuloID,Nombre,'Cantidad',datojobid,Status_Orden,Total,Fecha,'NoOrden','ColorST','Padre','Guia','MetodoEnvio'],
                colModel: [
                    {name:columnaparaagrupar,index:columnaparaagrupar, width:anchodeagrupamiento,align:"left",hidden:ocultaragrupamiento},
                    {name:rOrdenID,index:rOrdenID, width:100,align:"left",searchoptions:{sopt: ['cn']},formatter:linkdetalle,formatoptions:{baseLinkUrl:dialogos,addParam: '&accion='+or}},
                    {name:rOrdenamiento1,index:rOrdenamiento1, width:anchosegundacolumna,align:"left",hidden:mostrarPadreA,searchoptions:{sopt: ['cn']}},
                    {name:OrdArtSeqID,index:OrdArtSeqID, width:anchoterceracolumna,align:"left",searchoptions:{sopt: ['cn']},formatter:detalleartenvios,formatoptions:{baseLinkUrl:dialogos,addParam: '&accion=articulosenvios'}}, 
                    {name:CatArticuloID,index:CatArticuloID, width:55,align:"left",formatter:'showlink',formatoptions:{baseLinkUrl:dialogos,addParam: '&accion=articulo'},hidden:true,searchoptions:{sopt: ['cn']}},
                    {name:Nombre,index:Nombre, width:columna5,align:"left",hidden:mostrarPadre,searchoptions:{sopt: ['cn']}},
                    {name:'Cantidad',index:'Cantidad', width:ultimacolumna,align:"center",searchoptions:{sopt: ['cn']},hidden:muestraCantidad},
                    {name:datojobid,index:datojobid, width:valorcolumnaextra,align:"left",searchoptions:{sopt: ['cn']},formatter:linkdetalle,formatoptions:{baseLinkUrl:dialogos,addParam: '&accion=jobid'}},
                    {name:Status_Orden,index:Status_Orden, width:anchosextacolumna,align:"center",hidden:empa,searchoptions:{sopt: ['cn']}}, 
                    {name:Total,index:Total, width:pultimacolumna,align:"left",searchoptions:{sopt: ['cn']}},
                    {name:fecha,index:'Fecha', width:ultimacolumna,align:"left",searchoptions:{sopt: ['cn']},formatter:datee,formatoptions:{srcformat: 'Y-m-d H:i:s',newformat: 'Y-m-d'}},
                    {name:'NoOrden',index:'NoOrden', width:ultimacolumna,align:"left",searchoptions:{sopt: ['cn']},hidden:atncli},
                    {name:'ColorST',index:'ColorST', width:ultimacolumna,align:"left",hidden:coloratn},
                    {name:'Padre',index:'Padre', width:ultimacolumna,align:"left",hidden:ocultaPadrePlaneación},
                    {name:'Guia',index:'Guia', width:200,align:"left",hidden:mostrarguia},
                    {name:'MetodoEnvio',index:'MetodoEnvio', width:200,align:"left",hidden:mostrarMetodo}
                   
                ],
    
                    rowNum:valordepaginador,//10
                    rowList:[10,20,30,40,50,60,70,80,90,500,1000],
                   
                    pager: pager,
                    sortname: rOrdenID,
                  
                    recordpos: 'right',
                    viewrecords: true,
                   // sortorder: "desc",
//                    loadonce:false,
                
                    height:"auto",//250
                    width:tamañogrid,
//                    resizable:false,
                    multiselect: true,
                    align:"center",
                    sortable: false,
                    grouping:habilitagrupo, 
                         groupingView : { 
                    groupField : [columnaparaagrupar],
                    groupColumnShow : [false], 
                     groupText : ['<input type="checkbox" class="groupHeader"/> <b id=color>  {0}  </b>'],
//                    groupText : ['<div id=color>{0}</div>'],
                    groupCollapse : true,
                    groupOrder: ['asc'], 
//                    groupDataSorted : true 
                          },
                 
                    hoverrows:"true",
                    caption:['<div id=colortitulos>'+caption+'<div id=confproceso></div>'],
                    //caption:caption,
                  
                  onSelectRow: function (ids) {
                   
                 
                    s=  jQuery (rtabla).getGridParam ('selarrrow');
                
                    idor=jQuery(rtabla).jqGrid('getRowData',ids).OrdenID;
                    //ordseqid=jQuery(rtabla).jqGrid('getRowData',ids).CatArticuloID;
                    CatArticuloID=jQuery(rtabla).jqGrid('getRowData',s).CatArticuloID;
                    OrdArtSeqID=jQuery(rtabla).jqGrid('getRowData',s).OrdArtSeqID;
                    Nombre=jQuery(rtabla).jqGrid('getRowData',s).Nombre;
                    CatcomponenteID=jQuery(rtabla).jqGrid('getRowData',s).CatcomponenteID;
                  
                    JobID=jQuery(rtabla).jqGrid('getRowData',s).JobID;
                    CatProcesoID=jQuery(rtabla).jqGrid('getRowData',s).CatProcesoID;
                    Desc_Articulo=jQuery(rtabla).jqGrid('getRowData',s).Desc_Articulo;
                    MonTotal=jQuery(rtabla).jqGrid('getRowData',s). MonTotal;
                    ColorST=jQuery(rtabla).jqGrid('getRowData',s).ColorST;
                   var  NoOrden=jQuery(rtabla).jqGrid('getRowData',s).NoOrden;
                   var Padre=jQuery(rtabla).jqGrid('getRowData',s).Padre;
                
               
                
                       var llavetriple=idor+"-"+CatArticuloID+"-"+OrdArtSeqID;
         
                      array=[s];
                    // alert(Padre);
                    
                      
                 
               
                 },      
                 
                     loadComplete: function() {
                           
                         var myGrid = $(rtabla);
                         var ids = myGrid.getDataIDs();
                         dialo = ids.toString().split(",");
                      
                      
                        var idCount = ids.length;
                        for (var i = 0;i < idCount; i++) {
                                $("#"+ids[i]+" a",myGrid[0]).click(function(e) {
                                 var urll=e.currentTarget;
                             
                                      var text = this.textContent || this.innerText;
//                           alert(urll);
                                     var detalle="ordenid="+text;
                                      $( "#a" ).dialog({
                                                   autoOpen:false,
                                                   height:"auto",
                                                   width:400,
                                                   modal: true,
                                                   show: "slide",
                                                   hide: "slide",
                                                    buttons: {
                                                       "ACEPTAR": function() {
//                                                           $(".ui-button-icon-only").show();
                                                           $( this ).dialog( "close" );
                                                          $("#detalle").html("");
                                                             },
                                                             
                                                             "CANCELAR": function() {
//                                                                  $(".ui-button-icon-only").show();
                                                                  $("#detalle").html("");
                                                                   $( this ).dialog( "close" );
                                                             }
                                                                   }
                                                    });
                                                    
//                                  $(".ui-button-icon-only").hide();
                    
                                        
                                        $.get(urll,detalle,
                                     
                                      function (data){
                                          
                                       if(data.ordeness=="true"){
                             
                                    for( var i=0; i< data.registrosordenes.length; i++){

                $("#detalle").html("<table id='tdetalle'><tr id="+i+" ><td id="+i+" class='tb' style='border:1px solid grey'><b>OrdenID:</b></td><td style='border:1px solid grey'> &nbsp;"+data.registrosordenes[i].ordenes+"</td></div></tr>\n\
                <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Nombre Artículo:</b></td><td style='border:1px solid grey'> &nbsp;"+data.articulos[i].articulos+"</td></tr>\n\
                <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Páginas:</b></td><td style='border: 1px solid grey'> &nbsp;"+data.paginas+"</td></tr>\n\
                <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Color de Pasta:</b></td><td style='border: 1px solid grey'> &nbsp;"+data.pastas[i].pastas+"</td></tr>\n\
               <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Cliente:</b></td><td style='border: 1px solid grey'> &nbsp;"+data.cliente+"</td></tr>\n\
                <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Status:</b></td><td style='border:1px solid grey'> &nbsp;"+data.statuss[i].statuss+"</td> <br></tr></table>");

                                              }
                                    $("#detalle").append("<b><br>Total de artículo(s): "+data.total+"</b>");
                                    
                                  
                                    $( "#a" ).dialog( "open" );
                                   
                                        
                                 }
                                   if(data.ordeness=="false"){
                                           
                                     for( var i=0; i< data.registrosordenes.length; i++){

                 $("#detalle").html("<table id='tdetalle'><tr id="+i+" ><td id="+i+" class='tb' style='border:1px solid grey'><b>OrdenID:</b></td><td style='border:1px solid grey'>"+data.registrosordenes[i].ordenes+"</td></tr>\n\
                <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Nombre Artículo:</b></td><td style='border:1px solid grey'>"+data.articulos[i].articulos+"</td></tr>\n\
                <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Páginas:</b></td><td style='border: 1px solid grey'>"+data.paginas[i].paginas+"</td></tr>\n\
                <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Color de Pasta:</b></td><td style='border: 1px solid grey'>"+data.pastas[i].pastas+"</td></tr>\n\
                                                   <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Cliente:</b></td><td style='border: 1px solid grey'> &nbsp;"+data.cliente+"</td></tr>\n\
                <tr id="+i+"><td id="+i+" class='tb' style='border:1px solid grey'><b>Status:</b></td><td style='border:1px solid grey'>"+data.statuss[i].statuss+"</td> <br></tr></table>");


                                              }
                                      $("#detalle").append("<b><br>Total de copia(s): "+data.total+"</b>");
                                    $( "#a" ).dialog( "open" );
                                    }
                                    
                                    //si ordenes es igual a envios
                                    
                                     if(data.ordeness=="envios"){
                                         
                                         if(rtabla=="#envios" || rtabla=="#layout"){
                                             
                                             var ur="enviaradireccion/dialogordenes";
                                             
                                         }else{
                                             
                                              ur="../enviaradireccion/dialogordenes";
                                         }
                                         
                                         
                                        
                      $.post(ur,detalle, function(r){
                    $("<div id='ctn' ></div>").dialog({'autoOpen': false,modal: true,
                                                   show: "slide",
                                                   hide: "slide",'width': 'auto','title': 'DETALLE DE LA ORDEN ' +text});
                                $("#ctn").html(r);
                                $("#ctn").dialog('open');
                                                  });
//                                  window.location="enviaradireccion/dialogordenes?OrdenID=4513";
                                         
//                                    $("#detalle").append("<b>Artículos:</b>"+data.articulosenvios.length+"<br><br>");
//                                              for(var i=0;i<data.articulosenvios.length;i++){
//                                          
//                                            $("#detalle").append("<li>"+data.articulosenvios[i].nombre+"<br><br><hr>");
//                                            
//                                              }
//                                        $("#detalle").append("<b>Método de envio:</b>&nbsp;"+data.metodoenvio+"<br>");
//                                             $("#detalle").append("<b>Dirección de entrega:</b>&nbsp;"+data.direccion+"<br>");
//                                              $("#detalle").append("<b>Email:</b>&nbsp;"+data.email+"<br>");
//                                             $("#detalle").append("<b>Teléfono:</b>&nbsp;"+data.telefono);   
//                                        $( "#a" ).dialog( "open" );
                                         
                                     }
                                     
                               
                                     
                                     if(data.ordeness=="fact"){
                                         
                                        $("#rfc").val(data.rfc);
                            $("#razon").val(data.rz);
                            $("#calle").val(data.datosfacturacion[0].Valor);
                            $("#exterior").val(data.datosfacturacion[1].Valor);
                            $("#interior").val(data.datosfacturacion[2].Valor);
                            $("#cp").val(data.datosfacturacion[3].Valor);
                            $("#estado").val(data.datosfacturacion[4].Valor);
                            $("#mp").val(data.datosfacturacion[5].Valor);
                            $("#col").val(data.datosfacturacion[6].Valor);

                             $( "#ordenesFac" ).dialog("open");
                                     }
                                     
                                     
                                     
                                     
                               },'json');

                     
                           e.preventDefault();
                       });
                  }   
                  
                  
},
      
                   })
                   
                  
                         
                                $( "#ordenesFac" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:"auto",
                                width:"auto",
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                     "ACEPTAR": function() {
                                         $( this).dialog( "close" );
                                     }
                                     
                                     }
                                 });
               
                   
                $("#solucionarerror").click(function(){
                    
                   
                   if(rtabla=="#listatnclientes"){
                     if($("#dialog_error_antclientes").length){
                         var  s=  jQuery (rtabla).getGridParam ('selarrrow');
                            var idor=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;
                             var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',s).CatArticuloID;
                           var Nombre=jQuery(rtabla).jqGrid('getRowData',s).Nombre;
                            var OrdArtSeqID=jQuery(rtabla).jqGrid('getRowData',s).OrdArtSeqID;
                            
                    $.post("../ajaxatnclientes/dialogcrm",{idOrden: idor,articuloid:CatArticuloID,nombre:Nombre,secuencia:OrdArtSeqID},function(form){
                    $("#dialog_error_antclientes").html(form);
                    $("#dialog_error_antclientes").dialog("open");
                    
                    var cambiacolor="ordenid="+idor+"&articuloid="+CatArticuloID+"&color=1";
                    $.post("../ajaxatnclientes/actualizarcolor",cambiacolor);
                
                 $("#listatnclientes").jqGrid("clearGridData", true).trigger("reloadGrid");

                    //comprobar colores
                  
             });
                    }
                   }
                   
                });
                
                
                
                
                
                    //prueba de etiquetas utilizando la llave triple
                   if(rtabla=="#list3"){ //para el grid de pendientes 
                    $("table tbody").on("change", "input[type=checkbox]", function (e) {        
                    var currentCB = $(this);
                    var grid = jQuery('#list3');
                    var isChecked = this.checked;
                    if (currentCB.is(".groupHeader")) { //if group header is checked, to check all child checkboxes                     
                        var checkboxes = currentCB.closest('tr').nextUntil('tr.list3ghead_0').find('.cbox[type="checkbox"]');
                            checkboxes.each(function(){
                            if (!this.checked || !isChecked) 
                         grid.setSelection($(this).closest('tr').attr('id'), true); 
                       });
                        } 
                    }); 

                   }
                   
                  
                  
                     
                      
                
//                   jQuery(rtabla).jqGrid( 'groupingGroupBy' ,[ rOrdenID]);
                   
                   function botonpararefrescarbuscadores(){
                       
                         $(".clearsearchclass").hide();
                                 
                               /*button({
                            text: false,
                           icons: {
                           primary: "ui-icon ui-icon-refresh"
                              }
                           });*/
                       
                   }
//                   controles para los buscadores
                    $("#buscarplaneacion").click( function() {//para el grid planeacion-procesados
                    
//                         jQuery("#list2").jqGrid('filterToolbar',{searchOperators : true});
                         $('#list2').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
//                         $("#list2").setGridParam({loadonce:'true'}).trigger("reloadGrid");
                     
                       
                         $(".ui-search-oper").hide();
                        botonpararefrescarbuscadores();
                         
                        
                    });
                  
                    $("#buscarordenessinpo").click( function() {//para el grid planeacion-procesados
                            $('#ordenespagadasinpo').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                            $(".ui-search-oper").hide();
                        botonpararefrescarbuscadores();
                         
                        
                    });
                    
                    $("#buscarplaneaciondos").click( function() {//para el grid de planeacion-pendientes
                        
//                         jQuery("#list3").jqGrid('filterToolbar',{searchOperators :true});
                        $('#list3').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarespecial").click( function() {//para el grid de planeacion-pendientes
                        
//                         jQuery("#list3").jqGrid('filterToolbar',{searchOperators :true});
                        $('#enpendienteEspecial').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    
                    
                    
                    $("#buscarpreprensa").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#list5").jqGrid('filterToolbar',{searchOperators :true});
                         $('#list5').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                        botonpararefrescarbuscadores();
                         
                    });
                   
                   $("#buscarpreprensados").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#list4").jqGrid('filterToolbar',{searchOperators :true});
                          $('#list4').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   
                   
                     $("#buscarordenesporpagar").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#ordenesporpagar").jqGrid('filterToolbar',{searchOperators :true});
                           $('#ordenesporpagar').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   
                     $("#buscarordenespagadas").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#ordenespagadas").jqGrid('filterToolbar',{searchOperators :true});
                          $('#ordenespagadas').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   
                    $("#buscarfotobooks").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#fotobooksprocesados").jqGrid('filterToolbar',{searchOperators :true});
                         $('#fotobooksprocesados').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   $("#buscarfotobooksdos").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#fotobookspendientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#fotobookspendientes').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    $("#buscarprensa").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listprensap").jqGrid('filterToolbar',{searchOperators :true});
                         $('#listprensap').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarprensados").click( function() {//para el grid de ppreprensa-procesados
                         $('#listprensa').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
//                         jQuery("#listprensa").jqGrid('filterToolbar',{searchOperators :true});
                        
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarprensadosp").click( function() {//para el grid de ppreprensa-procesados
                         $('#listprensap').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
//                         jQuery("#listprensa").jqGrid('filterToolbar',{searchOperators :true});
                        
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    
                    $("#buscarprensaploter").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listploterpro").jqGrid('filterToolbar',{searchOperators :true});
                      $('#listploterpro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    $("#buscarprensaploterdos").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listploter").jqGrid('filterToolbar',{searchOperators :true});
                       $('#listploter').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });  
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    
                     $("#buscarprensaploterdossss").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listploter").jqGrid('filterToolbar',{searchOperators :true});
                       $('#prensaploterproce').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });  
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarcontrolcalidad1").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#calidad").jqGrid('filterToolbar',{searchOperators :true});
                     $('#calidad').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false });  
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarautomatico").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomaticop").jqGrid('filterToolbar',{searchOperators :true});
                         $('#corteautomaticop').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                      $("#buscarautomaticodos").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#corteautomatico').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarrefinado1").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#refinado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    
                    $("#buscarrefinado2").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#refinadopro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    $("#buscarlaminado").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#laminado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarlaminado2").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#laminadopro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarlaminadob").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#laminadob').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   
                     $("#buscarlaminadob2").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#laminadobpro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   
                      $("#buscarlamicontrol").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#laminadocontrol').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                      $("#buscarcortemanual").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#cortemanual').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarcortemanual2").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#cortemanualpro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                      $("#buscarbarniz").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#barnizuv').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                      $("#buscarbarniz2").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#barnizuvp').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarbarnizcontrol").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#controlbarniz').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarprensainddos").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#prensaindigopend').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarprensadospind").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#prensaindigoproce').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarprensaploterpendie").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#prensaploterpend').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarengrapadopendeintes").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#engrapado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarengrapadoprocesados").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#engrapadopro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarwirependientes").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#wire').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarplecadopendientes").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#corteautomatico").jqGrid('filterToolbar',{searchOperators :true});
                        $('#plecado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscaratnclientes").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#listatnclientes').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarpastasuaveengra").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#listatnclientes').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarplecadopendientes").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#plecado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarpastasuaveengra").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#pastasuave').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarrefinadopasta").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#refinadopastasuave').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   
                    $("#buscarcarteras").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#carteras').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarencuadernado").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#encuadernado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarmontado").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#montadocanvaspend').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   $("#buscarenmarcadocanvas").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#enmarcadocanvaspend').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   $("#buscarempacadocanvas").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#empacadocanvaspendientes').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscaracabadomanualrefinado").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#acabadorefinado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    $("#buscaracabadoensamblado").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#acabadomanualensamblado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                    $("#buscaracabadobastidor").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#acabadomanualbastidor').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                      $("#buscarempacadof").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#empacadofin').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarenvioss").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#envios').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                          return false;
                    });
                    
                    $("#buscarrayado").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#rayado').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarrayado2").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#rayadopro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarencuadernadopastasuave").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#encuadernadopastasuave').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    $("#buscarreimpresion").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#reimpresion').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   
              
                     $("#buscarencuadernadoprocesados").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#encuadernadopro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarenvios").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#layout').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
                     $("#buscarrecoger").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#tienda').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                   $("#buscarempacados").click( function() {//para el grid de ppreprensa-procesados
                        
//                         jQuery("#listatnclientes").jqGrid('filterToolbar',{searchOperators :true});
                       $('#empacadofinpro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
              //
              $("#buscarordenesquehansidoenviadas").click( function() {//para el grid de ppreprensa-procesados

                       $('#enviospro').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                     $("#buscarfa").click( function() {//para el grid de ppreprensa-procesados

                       $('#datosfacturacion').jqGrid('filterToolbar', { searchOnEnter: false, enableClear: false }); 
                        $(".ui-search-oper").hide();
                          botonpararefrescarbuscadores();
                    });
                    
         jQuery(rtabla).jqGrid('navGrid',pager,{edit:false,add:false,del:false},'filterToolbar',{searchOperators : false});

//            
//            if(rtabla=="#list2" || rtabla=="#list3"){
//               
//              jQuery(rtabla).jqGrid('sortableRows', {
// 
//                update: function (ev, ui) {
//
//                    var item = ui.item[0], ri = item.rowIndex, itemId = item.id;
//
//                         da = $("#ui-pg-input"+input).val();
//                        
//                         if(da>1){
//               
//                         paginas=da*10
//                             tot=paginas-10;
//             
//                             }
//                             if(da==1){
//                                 
//                                 tot=0;
//                             }  
//                             
//                             desplazamiento=itemId-ri;
//
//        var idos="posicionInicial="+itemId+"&posicionFinal="+ri+"&desplazamiento="+desplazamiento+"&bajada=2&tabla="+vista+"&pagina="+tot;
//
//                                $.post(urlsortable,idos,//variable de url para desplazamiento
//
//                        function (data) {
//                              
//                              if(data.validacion=="flecha"){
//                                  
//                                  console.log("listo");
////                                    $("#list2").trigger("reloadGrid");
//                               $('#confproceso').fadeIn(1000);
//                                 $("#confproceso").html("Se ha desplazado correctamente");
//                                 
//                                 $('#confproceso').fadeOut(1000);
//                                  actualizargrids();
//                              }
////                                  var a;
////                       actualizargrids();
////                         $(rtabla).trigger("reloadGrid");
//                              
//                          },//fin de la funcion data
//
//                                  'json');//fin de .post
//                    return false;
//                    
//        }//fin de la funcion update
//
//
//  });       
//  
//                 }
 
 
  
         //</editor-fold>   
            //<editor-fold defaultstate="collapsed" desc="LInk para ver el detalle de la orden dentro de los grids">
            
          
            
            jQuery("#detalleorden").click( function() {
                          
                             var detalle="ordenid="+idor+"&ordseqid="+OrdArtSeqID+"&catarticulo="+CatArticuloID;
                                 $.post("../ordenes/detalle",detalle,
                                 
                                 function (data){
                     
                               $("#a").html(data.descripcion);
                          
                               $( "#a" ).dialog({
                               
                                    height:200,
                                    width:200,
                                    modal: true,
                                    show: "blind",
                                    hide: "blind"

                                  });
                                     
                                 },'json' );
                          
                      });
                      //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="comprobacion de checbox general seleccionado y actualizacion de grid">
//--------------------------------------------comprobar si checkbox general esta presionado--------------------------------

                 jQuery(checkboxgral).change( function() {
     
                       if(this.checked) {
   
			$(btnsubir).hide();
                        $(btnbajar).hide();
                        var t;
                        } 
                          else {
                          
                           $(btnsubir).show();
                           $(btnbajar).show();
                           $(btnguardar).show();
                           }
                      
                        });
    
//-------------------------------------------------------------- fin de comprobacion----------------------------------------
//</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Boton Brincar">
    //---------------------------------------------btn brincar -----------------------------------------------------------
                    valores=[];
                  jQuery(btnbrincar).click( function() {//boton pausa
                  if($(checkboxgral).prop("checked") ){
                       s=  jQuery (rtabla).getGridParam ('selarrrow');
                          var todos;
                         var valores=[];
                           var articulos=[];
                            var datos=[];
                            var seq=[];
                             var jobidd=[];
                      valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                      ordseqid=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdArtSeqID;//para obtener el id-----------
                                      CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;//para obtener el id-----------
                                      JobID=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;//para obtener el id-----------
                                      datos.push(idor);
                                      articulos.push(CatArticuloID);
                                      seq.push(ordseqid);
                                       jobidd.push(JobID);
                                   
                                }
                         
                         
                         
                        var id="id="+datos+"&status="+status+"&tablap="+status+"&tabla1="+vista+"&solofotob=&position="+seq+"&articuloid="+articulos+"&jobid="+jobidd;//tablap es igual que status
                          $("#loading-div-background").css({ opacity: 1.0 });
                  $("#loading-div-background").show();     
                          
                          $.post(urlbrincar,id,

                  function (data) {
                       if(data.validacion=="flecha"){
                               
                          actualizargrids();
                                  $("#refresh_list2").trigger("click");
                         $("#list2").jqGrid("clearGridData", true).trigger("reloadGrid");
                         $("#list3").jqGrid("clearGridData", true).trigger("reloadGrid");
                           $(btnsubir).show();
                           $(btnbajar).show();
                           $(btnguardar).show();
                            $("#loading-div-background").hide();  
                      } 
                                },

                   'json');//fin de .post
      
                           
                      } 

                      else 

                      {
                            var articulos=[];
                            var datos=[];
                            var seq=[];
                            var jobidd=[];
                      valores = s.toString().split(",");
                               for(i=0; i<valores.length; i++){
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                      ordseqid=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdArtSeqID;//para obtener el id-----------
                                      CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;//para obtener el id-----------
                                      JobID=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;//para obtener el id-----------
                                      datos.push(idor);
                                      articulos.push(CatArticuloID);
                                      seq.push(ordseqid);
                                      jobidd.push(JobID);
                                      
                                
                                   
                                }
                     
                   id="id="+datos+"&status="+status+"&tablap="+status+"&tabla1="+vista+"&solofotob=&position="+seq+"&articuloid="+articulos+"&jobid="+jobidd;//tablap es igual que status
                   $.post(urlbrincar,id,

                  function (data) {
                       if(data.validacion=="flecha"){
                               
                          actualizargrids();
                            $("#refresh_list2").trigger("click");      
                         
                        $("#list2").jqGrid("clearGridData", true).trigger("reloadGrid");
                         $("#list3").jqGrid("clearGridData", true).trigger("reloadGrid");
//                                  $("#"+s).css("background", "yellow");//verde 
                             
                      } 
                                },

             'json');//fin de .post

                   }
            
               });

//-------------------------------$(fila+color).trigger('click');------------------------------fin de btn brincar-----------------------------------------------------------
//</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Boton subir">
//----------------------------------------------------------------------btn subir-----------------------------------------------------------

//                    $(".cbox").attr("disabled","disabled");
                        
                         
//                          $("#list2 tbody input[type='checkbox']").hide();
                   
                      
//                          if(rtabla=="#list2"){
//                               $("#jqg_list2_2").attr("disabled", !this.checked);
//                              
//                          }
                       
                          
                          
                          
                         
                          
                          
                   jQuery(btnsubir).click( function() {
                       
                    

//                    $("#m10").prop("disabled", false);//habilitar
                var ordenam=[];
                                var valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                     var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).Ordenamiento1;//para obtener el id
                                      ordenam.push(idor);
                                      
                                  }
                                  
//                                  alert(ordenam);
                         
                            da = $("#ui-pg-input"+input).val();
                       
                         if(da>1){
                             paginas=da*10
                             tot=paginas-10;
                             }
                             if(da==1){
                                 
                                 tot=0;
                             }
                         
                    b=s--;
                    desplazamiento=1;
                   
                   if(array==""){
//                       alert("selecciona uno");
var jyr;
                   }
                   
                   else{
                       
//                       if(ordenam<2){
//                        alert(ordenam);
//                        
//                           }
                        
                  $("#loading-div-background").css({ opacity: 1.0 });
                  $("#loading-div-background").show();     
                  
                  
//                                  alert(ordenami);
                  
                   
  var id="posicionInicial="+ordenam+"&posicionFinal="+ordenam+"&desplazamiento="+desplazamiento+"&bajada=2&tabla="+vista+"&pagina="+tot+"&datoaux="+array;; //cuando se desplazan de uno
                              $.post(urlcambiarpos,id,
                           function (data) {
                            if (data.validacion=="flecha"){
                                
//                             
                            setTimeout(function() {
                                $( "#m10" ).button({ disabled: false });
                                 $( "#m1" ).button({ disabled: false });
                                    $( "#m11" ).button({ disabled: false });
                                      $( "#m3" ).button({ disabled: false});
                                      $( "#buscarplaneacion" ).button({ disabled:false});
                                       $("#loading-div-background").hide();
                              }, 1000);


                               setTimeout(function() {
                                 valores = array.toString().split(",");
                                 var color;
                                  for(var i=0; i<valores.length; i++){
                                     color=valores[i];
                                      color--;
                                         $(fila+color).trigger('click');
                                   }
                                       
                                },220);
//                                actualizargrids();
                               $(rtabla).trigger("reloadGrid");
                              }
                           },//fin de la funcion data
                 'json');//fin de .post*/
                             
//                    $("#m10").removeAtrr("disabled",true);
                    $( "#m10" ).button({ disabled: true });
                      $( "#m1" ).button({ disabled: true });
                        $( "#m11" ).button({ disabled: true });
                          $( "#m3" ).button({ disabled: true });
                          $( "#buscarplaneacion" ).button({ disabled: true });
                          
                       }
                               
                    });

//--------------------------------------------------------------------fin de btn subir-----------------------------------------------------
//</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Boton bajar">
//----------------------------------------------------------------------btn bajar----------------------------------------------------------
                   
     
     
     
     jQuery(btnbajar).click( function() {
                    
                     var ordenam=[];
                
                       s=  jQuery (rtabla).getGridParam ('selarrrow');
                      
                                 valores = s.toString().split(",");
                          
                               for(var i=0; i<valores.length; i++){
                                     var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).Ordenamiento1;//para obtener el id
                                      ordenam.push(idor);
                                      
                                  }
                                  
                                  
               da = $("#ui-pg-input"+input).val();
                       if(da>1){
                        paginas=da*10
                         tot=paginas-10;
             
                         }
                         if(da==1){
                             
                             tot=0;
                         }
                     var  s=  jQuery (rtabla).getGridParam ('selarrrow');
                    
                       b=s++;
                       desplazamiento=s-b;
                     if(array==""){
//                         alert("selecciona uno");
                    var ryj;
                     }else{
                           $("#loading-div-background").css({ opacity: 1.0 });
                         $("#loading-div-background").show();   
                   
              
           
                    var idtres="posicionInicial="+s+"&posicionFinal="+ordenam+"&desplazamiento="+desplazamiento+"&bajada=1&tabla="+vista+"&pagina="+tot+"&datoaux="+array;
                   
                            $.post(urlcambiarpos,idtres,

                          function (data) {

                            if (data.validacion=="flecha"){
                                
                                
                                 setTimeout(function() {
                                $( "#m10" ).button({ disabled: false });
                                 $( "#m1" ).button({ disabled: false });
                                    $( "#m11" ).button({ disabled: false });
                                      $( "#m3" ).button({ disabled: false});
                                      $( "#buscarplaneacion" ).button({ disabled:false});
                                        $("#loading-div-background").hide();
                                     }, 1000);

                                
                                
                            setTimeout(function() {
                         valores = array.toString().split(",");
                                var color;
                                var p;
                                for(var i=0; i<valores.length; i++){
                                  color=valores[i];
                                  color++;
                                $(fila+color).trigger('click');
                               
                                  }
                                     
                                },220);
                                
                             $(rtabla).trigger("reloadGrid");
                              
                               }

                          },//fin de la funcion data

                                  'json');//fin de .post
                                  
                               $( "#m10" ).button({ disabled: true });
                                 $( "#m1" ).button({ disabled: true });
                                    $( "#m11" ).button({ disabled: true });
                                      $( "#m3" ).button({ disabled: true});
                                      $( "#buscarplaneacion" ).button({ disabled:true});
                                  }

                    });
                    
                    
                    

//-------------------------------------------------------------------fin de btnbajar---------------------------------------------------
//</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Boton Guardar">
//---------------------------------------------------------------------btn guardar-----------------------------------------------------

                 jQuery(btnguardar).click( function() {
                
              
               if($(checkboxgral).prop("checked") ){
                        
                     $( "#dialog-confirm" ).dialog({
                        resizable: false,
                        height:200,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {

                        s=  jQuery (rtabla).getGridParam ('selarrrow');

                       var todos;
                        var articulos=[];
                            var datos=[];
                            var seq=[];
                            var ordena=[];
                            var jobss=[];
                     valores = s.toString().split(",");
                              
                                for(var i=0; i<valores.length; i++){
                                    var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                     var ordseqid=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdArtSeqID;//para obtener el id-----------
                                     var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;//para obtener el id-----------
                                     var ordenamientoo=jQuery(rtabla).jqGrid('getRowData',valores[i]).Ordenamiento1;
                                        var jobpadre=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;
                                      datos.push(idor);
                                      articulos.push(CatArticuloID);
                                      seq.push(ordseqid);
                                        
                              
                                      ordena.push(ordenamientoo);
                                    jobss.push(jobpadre);
                                }
                       
                       
//                         id="id="+datos+"&status=200&tablap=200&solofotob=1&position="+seq+"&articuloid="+articulos+"&tabla1=0";
                        var id="idOrden="+datos+"&status=200&tablap=200&Ordenamiento1="+ordena+"&OrdArtSeqID="+seq+"&CatArticuloID="+articulos+"&tabla1=0"+"&jobidpadre="+jobss;;
                          $.post("preprensa/componentes",id,

                       function (data) {
                        
                       if(data.validacion=="true")
            
                     
                        
                        actualizargrids();
                     $("#refresh_list2").trigger("click");      
                         
                        $("#list2").jqGrid("clearGridData", true).trigger("reloadGrid");
                    
                     $.blockUI({ css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: .3, 
                    color: '#fff' 
                     } }); 

                      setTimeout($.unblockUI, 3000); 
                          
                                  
                   
                   
                         },

                                 'json');//fin de .post
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                 
                           $( this ).dialog( "close" );
                          },
                          CANCELAR: function() {
                            $( this ).dialog( "close" );
                            
                             $(rtabla).trigger("reloadGrid"); 
                             actualizargrids();
                          }
                        }
                      });

                $( "#dialog-confirm" ).dialog( "open" );
                        
                        $("#dialog-confirm").html("Esta realmente seguro de mover a Preprensa?");
                        
                        
                  
                      } 
                    
                    
                    
                    
                      else 

                      {
                          
                            var articulos=[];
                            var datos=[];
                            var seq=[];
                            var ordena=[];
                            var jobss=[];
                     valores = s.toString().split(",");
                              
                                for(var i=0; i<valores.length; i++){
                                  var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                     var ordseqid=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdArtSeqID;//para obtener el id-----------
                                     var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;//para obtener el id-----------
                                     var ordenamientoo=jQuery(rtabla).jqGrid('getRowData',valores[i]).Ordenamiento1;
                                      var jobpadre=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;
                                      datos.push(idor);
                                      articulos.push(CatArticuloID);
                                      seq.push(ordseqid);
                                      ordena.push(ordenamientoo);
                                      jobss.push(jobpadre);
                                      
                                   
                                }
                                
                                $( "#dialog-confirm" ).dialog({
                        resizable: false,
                        height:200,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {

//                   id="id="+datos+"&status=200&tablap=200&solofotob=1&position="+seq+"&articuloid="+articulos+"&tabla1=0";
  var id="idOrden="+datos+"&status=200&tablap=200&Ordenamiento1="+ordena+"&OrdArtSeqID="+seq+"&CatArticuloID="+articulos+"&tabla1=0"+"&jobidpadre="+jobss;
                          $.get("preprensa/componentes",id,

                  function (data) {
                        
                       if(data.validacion=="true")
                           
//                     $(rtabla).trigger("reloadGrid"); 
                      
                     actualizargrids();
                  $("#refresh_list2").trigger("click");      
                         
                  $("#list2").jqGrid("clearGridData", true).trigger("reloadGrid");
                 
                 
                  $.blockUI({ css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: .3, 
                    color: '#fff' 
                } }); 

                  setTimeout($.unblockUI, 3000); 
                          
              },

             'json');//fin de .post

                         $( this ).dialog( "close" );
                          },
                          CANCELAR: function() {
                            $( this ).dialog( "close" );
                            $(rtabla).trigger("reloadGrid"); 
                            
                            actualizargrids();
                            
                          }
                        }
                      });

                $( "#dialog-confirm" ).dialog( "open" );
                        
                        $("#dialog-confirm").html("Esta realmente seguro de mover a Preprensa?");
                      
            }
                      });

//-------------------------------------------------------------------fin de btn guardar------------------------------------------------

//</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Boton Guardar preprensa">
//--------------------------------------------------------------btn guardar preprensa-------------------------------------------------
                      $( "#indigoploter" ).dialog({
                        autoOpen: false,
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "slide",
                        hide: "slide",
                        buttons: {
                          "ACEPTAR": function() {

                         $( this ).dialog( "close" );
                          actualizargrids();
                          },
                         
                        }
                      });
                            jQuery(btnguardarpre).click( function() {
                              
                    var  s=  jQuery (rtabla).getGridParam ('selarrrow');
                      valores = s.toString().split(",");
                    
                        if(valores.length>1){
                                         alert("Solo debes de seleccionar un articulo");
                                           $(rtabla).trigger("reloadGrid");
                                            actualizargrids();
                                      }
                                      
                      if(valores=="")
                      {
                         $( "#dialog-confirm3" ).dialog({
                        autoOpen:false,
                        resizable: false,
                        height:200,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {

                             $( this ).dialog( "close" );
                          },
                         
                        }
                      });

                      $( "#dialog-confirm3" ).dialog( "open" );
                        
                        $("#dialog-confirm3").html("Debes de seleccionar un articulo");
                     } 
                      if(valores.length==1){
                          $( "#dialog-confirm2" ).dialog({
                        resizable: false,
                        autoOpen:false,
                        height:300,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {
                                     var  idor=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;//para obtener el id
                                      var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',s).CatArticuloID;//para obtener el id
                                      var  OrdArtSeqID=jQuery(rtabla).jqGrid('getRowData',s).OrdArtSeqID;//para obtener el id
                                       var Nombre=jQuery(rtabla).jqGrid('getRowData',s).Nombre;//para obtener el id
                                       var Ordenamientoo=jQuery(rtabla).jqGrid('getRowData',s).Ordenamiento1;
                                       var componente;
                                       componente="idOrden="+idor+"&CatArticuloID="+CatArticuloID+"&OrdArtSeqID="+OrdArtSeqID+"&Ordenamiento1="+Ordenamientoo;
                                       $.post("preprensa/componentes",componente,
                                       function (data){
                                             if(data.validacion=="true"){
                                                
                                             
                                                  actualizargrids();
                                          
                                           }
                                       },'json'
                                      );//fin de .post
                                      $( this ).dialog( "close" );
                                      
                                        actualizargrids();
                          },
                                  CANCELAR: function() {
                            $( this ).dialog( "close" );
                           
                             $(rtabla).trigger("reloadGrid");
                          }
                        }
                      });
                        $( "#dialog-confirm2" ).dialog( "open" );
                       
                        $("#dialog-confirm2").html("Esta realmente seguro de mover a Prensa al Articulo:"+Nombre+"?");
                               
                       }   
                         
                      });

//---------------------------------------------------------------fin de btn guardar preprensa------------------------------------------
//</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Boton de error">

//------------------------------------------------------------------btn de errores-----------------------------------------------------
                jQuery(btnerror).click( function() {//boton pausa   
                      s=  jQuery (rtabla).getGridParam ('selarrrow');
                     valores = s.toString().split(",");
                       if(valores.length>1){
                                        alert("Solo debes de seleccionar un articulo");
                                            $(rtabla).trigger("reloadGrid");
                                      }
                      if(valores=="")
                      {
                          $( "#dialog-confirm3" ).dialog({
                        resizable: false,
                        height:200,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {

                             $( this ).dialog( "close" );
                          },
                         
                        }
                      });

                      $( "#dialog-confirm3" ).dialog( "open" );
                        
                        $("#dialog-confirm3").html("Debes de seleccionar un articulo");
                      } 
                      else{
                                          idor=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;//para obtener el id
                                          CatArticuloID=jQuery(rtabla).jqGrid('getRowData',s).CatArticuloID;//para obtener el id
                                          OrdArtSeqID=jQuery(rtabla).jqGrid('getRowData',s).OrdArtSeqID;//para obtener el id
                             
                        $( "#dialog-formulario" ).dialog({
                        resizable: false,
                        height:350,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                        
                        }
                      });
                     var error;
                      $( "#dialog-formulario" ).dialog( "open" );
                       var errores="id=1";
                        var valore;
                        var va;
                        var contador;
                         $.post('preprensa/errores',errores,
                             function (data) {
                          for(var i = 0; i <data.length; i++) {
                              va=i+1;
                           
                          $("#errores").append("<option value="+va+">"+data[i]+"</option>");
                             }
                          },'json') ;
                          
                          
                    $("#enverror").html("<b>Error:</b><select id='errores' name='nombreeerror'><option>Elige error...</option></select>");
                    $("#enverror").append("<input type='hidden' name='ordenid' id='ordenid' value='"+idor+"'>");                      
                    $("#enverror").append("<input type='hidden' name='catarticuloid' id='catarticuloid' value='"+CatArticuloID+"'>");
                    $("#enverror").append("<input type='hidden' name='OrdArtSeqID' id='OrdArtSeqID' value='"+OrdArtSeqID+"'>");                       
                    $("#enverror").append("<br><b>Descripcion del error </b><br><textarea rows='10' cols='30' name='descripcion'></textarea>");
                    $("#enverror").append(" <center><br> <input type='submit' id='botonenviar' class='btn btn-primary' value='Enviar'></center>");

                      }
                      
                  });
                  
                
//--------------------------------------------------------------- fin de btn errores------------------------------------------------------

//</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Boton Brincar componentes a procesados en indigo, cambiar status de componentes ">
//----------------------------------------------------------------btn brincar componentes a procesados------------------------------------
                       var  valores=[];
                       var  datos=[];
                       var  componentes=[];
                       var  datossecuencia=[];
                     jQuery(btnbricarcomponentes).click( function() {//boton pausa
                        if($(checkboxgral).prop("checked") ){
                        s=  jQuery (rtabla).getGridParam ('selarrrow');
                       var todos;
                       todos="todos=1&tablap="+status+"&status="+status+"&tabla="+vista;
                       $.post("../ordenes/bajartodos",todos,
                             function (data) {
                              if(data.validacion=="flecha")
                              actualizargrids();
                   },//fin de la funcion data

                        'json');//fin de .post
                           
                      } 

                      else 

                      {
                         
                      valores = s.toString().split(",");
                                var jobidhijos=[];
                                for(var i=0; i<valores.length; i++){
                                    
                                     var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                     var ordseqid=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdArtSeqID;//para obtener el id-----------
                                     var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;//para obtener el id-----------
                                     var CatComponenteID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatComponenteID;
                                      var valoresjobid=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;
                                      catponentesid.push(CatComponenteID);
                                      datos.push(idor);
                                      componentes.push(CatArticuloID);
                                      datossecuencia.push(ordseqid);
                                      jobidhijos.push(valoresjobid);
                                }
                                
//                                alert(jobidhijos);
                    
                   var id="id="+datos+"&status="+status+"&tablap="+status+"&tabla1="+vista+"&solofotob=&position="+componentes+"&secuencia="+datossecuencia+"&catcomponenteid="+catponentesid+"&jobidpadre="+jobidhijos;//tablap es igual que status
                   
//                      actualizargrids();
//                     $("#listprensa").jqGrid("clearGridData", true).trigger("reloadGrid");
//                     if(btnbricarcomponentes=="#m60pre"){
//                         
//                         window.location="prensa";
//                     }
//                     
                   
                              $.get(ploter,id, //a qui tengo que vcambiarle

                function (data) {
                       
                      if(data.validacion=="flecha")
                           actualizargrids();
                       $("#listprensa").jqGrid("clearGridData", true).trigger("reloadGrid");                                          },

             'json');//fin de .post
            
                        return false;
                         }
            
                  });
                  
                  //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Etiquetado orden viejera">      
           //para las etiquetas    
           $("#loading").hide();
             $( "#dialog-confirm3" ).dialog({
                        autoOpen: false,
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {

                             $( this ).dialog( "close" );
                         
                          },
                         
                        }
                      });
            jQuery(etiquedado).click( function() {//boton pausa
              
                    s=  jQuery (rtabla).getGridParam ('selarrrow');
           
                     valores2 = s.toString().split(",");
                    
                    if(s==""){
                       
                      $("#dialog-confirm3").html("Debes de seleccionar un articulo");
                      $( "#dialog-confirm3" ).dialog( "open" );
                        
                      
                    }
                    
                     
                     else if(valores2.length>1){   
                          $("#dialog-confirm3").html("Debes de seleccionar solo un artículo");
                      $( "#dialog-confirm3" ).dialog( "open" );
                       
                     }
                     
                     else{
                         
//                          $("#loading").show();
                    if(rtabla=="#listprensap"){//list5
                        $("#loading-div-background").css({ opacity: 1.0 });
                  $("#loading-div-background").show();  
        window.location="etiquetas/?OrdenID="+idor+"&secuencia="+OrdArtSeqID+"&articuloid="+CatArticuloID+"&estacion=preprensa&jobid="+JobID;
    
                } 
                else if(rtabla=="#listploterpro"){
                    $("#loading-div-background").css({ opacity: 1.0 });
                  $("#loading-div-background").show();  
                    var d="etiquetas/?OrdenID="+idor+"&secuencia="+OrdArtSeqID+"&articuloid="+CatArticuloID+"&estacion=fotobooks&jobid="+JobID;
//                    alert(d);
                      window.location="etiquetas/?OrdenID="+idor+"&secuencia="+OrdArtSeqID+"&articuloid="+CatArticuloID+"&estacion=fotobooks&jobid="+JobID;
                }
                
                else {
                    
              $("#loading-div-background").css({ opacity: 1.0 });
                  $("#loading-div-background").show();  
                    
          window.location="etiquetas/?OrdenID="+idor+"&secuencia="+OrdArtSeqID+"&articuloid="+CatArticuloID+"&estacion=reimpresionetiquetas&jobid="+JobID;        
                    
                }
                          
               //#listploterpro    #reimpresion
                     }
               
                   });
                   //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Etiquetado solo el codigo de barras">       
    jQuery(etiquetado2).click( function() {//boton pausa
       
                   s=  jQuery (rtabla).getGridParam ('selarrrow');
                     valores2 = s.toString().split(",");
                    if(valores2.length>1){
                     $( "#dialog-confirm3" ).dialog( "open" );
                       $("#dialog-confirm3").html("Solo debes de seleccionar uno");
                    }
                      if(valores2==""){
                           $( "#dialog-confirm3" ).dialog({
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {

                             $( this ).dialog( "close" );
                         
                          },
                        }
                      });

                      $( "#dialog-confirm3" ).dialog( "open" );
                        
                        $("#dialog-confirm3").html("Debes de seleccionar un articulo para poder imprimir su etiqueta");
                   
                      } 
                      else{
                          if(rtabla=="#prensaindigoproce"){
                          $("#loading-div-background").css({ opacity: 1.0 });
                  $("#loading-div-background").show(); 
                   window.location="etiquetas/solocodigo/?codigo="+idor+"&secuencia="+OrdArtSeqID+"&articuloid="+CatArticuloID+"&jobid="+JobID+"&estacion=prensa";
                                }
                                else{
                                    $("#loading-div-background").css({ opacity: 1.0 });
                  $("#loading-div-background").show(); 
                   window.location="../etiquetas/solocodigo/?codigo="+idor+"&secuencia="+OrdArtSeqID+"&articuloid="+CatArticuloID+"&jobid="+JobID+"&estacion=preprensa/ploter";
                                  
                                }
                                
                                //
            
            }
               
                   });

//</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="btn para pasar del modulo indigo procesados a control de calidad">
             //btn para pasar del modulo indigo procesados a control de calidad
            var  valoresparacontrolcalidad=[];
             $( "#mensajesdeconfirmacion" ).dialog({
                        autoOpen: false,
                        resizable: false,
                        height:280,
                        modal: true,
                        show: "slide",
                        hide: "slide",
                        buttons: {
                          "ACEPTAR": function() {

                             $( this ).dialog( "close" );
                          actualizargrids();
                          },
                         
                        }
                      });
                      
                      $( "#mensajesdeconfirmacionverde" ).dialog({
                        autoOpen: false,
                        resizable: false,
                        height:200,
                        modal: true,
                        show: "slide",
                        hide: "slide",
                        buttons: {
                          "ACEPTAR": function() {

                             $( this ).dialog( "close" );
                          actualizargrids();
                          },
                         
                        }
                      });
               jQuery(pasaracontrolcalidad).click( function() {
                 
                   
                   if(pasaracontrolcalidad=="#procesarlayout"){
                       
                        if($(checkboxgral).prop("checked") ){
                           $( "#dialog-prensa-control-calidad" ).dialog({
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {
                     var ordenesfin="ordenes=todos";
                           $.get("enviaradireccion/finproceso",ordenesfin,
                           
                                function (data){
                                    
                                    if(data.validacion=="true"){
                                    
                                    actualizargrids();
                                    
                                    }
                                },'json'
                              
                              );
                              
                              
                          $( this ).dialog( "close" );
                         
                          },
                         
                        }
                      });
                   
                       $( "#dialog-prensa-control-calidad" ).dialog( "open" );
                        
                        $("#dialog-prensa-control-calidad").html("Está seguro de cerrar la orden?");
                          }
                       else{
                           
                           
                         
                           
                           
                          valoresparacontrolcalidad = s.toString().split(",");
                               var datosterminados=[];
                             
                              for(var i=0; i<valoresparacontrolcalidad.length; i++){
                                    var  idor=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).OrdenID;//para obtener el id
                                      datosterminados.push(idor);
                                     
                             }
                       
                       
                      $( "#dialog-prensa-control-calidad" ).dialog({
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {
                         
                           //enviamos valores de ordenes para terminar el proceso 
                           var ordenesfin="ordenes="+datosterminados;
                           $("#loading-div-background").css({ opacity: 1.0 });
                  $("#loading-div-background").show();  
                           $.get("enviaradireccion/finproceso",ordenesfin,
                           
                                function (data){
                                    
                                    if(data.validacion=="true"){
                                     $("#loading-div-background").hide();
                                    actualizargrids();
                                    
                                    }
                                },'json'
                              
                              );
                      
                             $( this ).dialog( "close" );
                         
                          },
                          "CANCELAR": function() {
                                 $( this ).dialog( "close" );
                              
                          }
                         
                        }
                      });
                   
                       $( "#dialog-prensa-control-calidad" ).dialog( "open" );
                        
                        $("#dialog-prensa-control-calidad").html("Está seguro de cerrar la orden?");
                   
                   }
                   }
                 else{
                   
                     if($(checkboxgral).prop("checked") ){  
                           s=  jQuery (rtabla).getGridParam ('selarrrow');
                          valoresparacontrolcalidad = s.toString().split(",");
                    $( "#dialog-prensa-control-calidad" ).dialog({
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {
                              
                              var datoscalidad=[];
                              var CatArticuloIDcalidad=[];
                              var secuenciacalidad=[];
                              var catponentesid=[];
                              var grupoprocesos=[];
                              var jobidshijos=[];
                              for(var i=0; i<valoresparacontrolcalidad.length; i++){
                                    var  idor=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).OrdenID;//para obtener el id
                                     var OrdArtSeqID=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).OrdArtSeqID;//para obtener el id-----------
                                     var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).CatArticuloID;//para obtener el id-----------
                                     var CatComponenteID=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).CatComponenteID;
                                 var CatProcesoID=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).CatProcesoID;
                                var jobs=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).JobID;
                                      catponentesid.push(CatComponenteID);
                                  
                                      datoscalidad.push(idor);
                                      CatArticuloIDcalidad.push(CatArticuloID);
                                      secuenciacalidad.push(OrdArtSeqID);
                                      grupoprocesos.push(CatProcesoID);
                                      jobidshijos.push(jobs);
                                      
                                   
                             }
                   
                              //envio los valores al controlador para cambiar el status del proceso
                       
                              
                              
                         var  variables="ordenid="+datoscalidad+"&articuloid="+CatArticuloIDcalidad+"&secuencia="+secuenciacalidad+"&procesoid="+statusproceso+"&catprocesoid="+grupoprocesos+"&catcomponenteid="+catponentesid+"&jobidhijos="+jobidshijos;
                           $.post(urlparambiarstatusproceso,variables,
                           
                           function (data){
                                if(data.validacion=="enviado"){
                           
                                    
                           
                               $("#mensajesdeconfirmacionverde").html("La orden ha sido enviada");
                               $( "#mensajesdeconfirmacionverde" ).dialog( "open" );
                               
                              
                               }
                               
                                 if(data.validacion=="faltan"){
                              
                               $("#mensajesdeconfirmacion").html("La orden no puede salir falta(n):"+data.faltan+"&nbsp;artículo(s)");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                               }
                               
                                if(data.validacion=="faltancomp"){
                               
                             
                               $("#mensajesdeconfirmacion").html("El artículo no puede ser procesado  falta(n):"+data.faltantes+"&nbsp;componente(s)<br>*Verifique e intentente nuevamente");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                             
                               }
                               if(data.validacion=="faltanart"){
                               
                             
                               
                             $("#mensajesdeconfirmacion").html("La orden no puede pasar a envios falta(n) :"+data.faltanarti+"&nbsp;artículo(s)");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                               
                               }
                               if(data.validacion=="pasadaaenvios"){
                             
                                $("#mensajesdeconfirmacionverde").html("La orden ha sido Pasada a envios");
                                $( "#mensajesdeconfirmacionverde" ).dialog( "open" );
                               }
                              if(data.validacion=="errorespecial"){
                                $("#mensajesdeconfirmacion").html("Hacen falta articulos para esta orden");
                               $( "#mensajesdeconfirmacion" ).dialog( "open" );
                              }
                                if(data.validacion=="error"){
                               $("#mensajesdeconfirmacion").html("Selecciona solo una Orden");
                               $( "#mensajesdeconfirmacion" ).dialog( "open" );
                                   actualizargrids();
                             
                               }
                                if(data.validacion=="normal"){
                                $("#mensajesdeconfirmacionverde").html("La orden a sido movida a&nbsp;"+data.enviadoaproceso);
                                $( "#mensajesdeconfirmacionverde" ).dialog( "open" );
                                    
                               actualizargrids();
                             
                               }
                               
                               if(data.validacion=="true"){
                                   
                                    actualizargrids();
                               }
                          
                           
                           
                           
                           
                           },'json'
                         
                         
                       );
                              
                             $( this ).dialog( "close" );
                         
                          }
                          
                         
                        }
                      });
                    
                    
                       $( "#dialog-prensa-control-calidad" ).dialog( "open" );
                        
                       $("#dialog-prensa-control-calidad").html("Realmente esta seguro de mover ?");
                     }
                    
                    
                    
                    
                     
                 else if($(fila+s).prop("checked") ){   //esto es para los procesos
               valoresparacontrolcalidad = s.toString().split(",");
                    $( "#dialog-prensa-control-calidad" ).dialog({
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {
                              
                              var datoscalidad=[];
                              var CatArticuloIDcalidad=[];
                              var secuenciacalidad=[];
                              var catponentesid=[];
                              var grupoprocesos=[];
                              var jobidshijos=[];
                              var NoOrdenes=[];
                              for(var i=0; i<valoresparacontrolcalidad.length; i++){
                    var  idor=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).OrdenID;//para obtener el id
                    var OrdArtSeqID=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).OrdArtSeqID;//para obtener el id-----------
                    var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).CatArticuloID;//para obtener el id-----------
                    var CatComponenteID=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).CatComponenteID;
                    var CatProcesoID=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).CatProcesoID;
                    var jobs=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).JobID;
                    var NoOrden=jQuery(rtabla).jqGrid('getRowData',valoresparacontrolcalidad[i]).NoOrden;
                                      catponentesid.push(CatComponenteID);
                                  
                                      datoscalidad.push(idor);
                                      CatArticuloIDcalidad.push(CatArticuloID);
                                      secuenciacalidad.push(OrdArtSeqID);
                                      grupoprocesos.push(CatProcesoID);
                                      jobidshijos.push(jobs);
                                      NoOrdenes.push(NoOrden);
                                     
                                   
                             }
                            
                              //envio los valores al controlador para cambiar el status del proceso
                       
                              
                              
                         var  variables="ordenid="+datoscalidad+"&articuloid="+CatArticuloIDcalidad+"&secuencia="+secuenciacalidad+"&procesoid="+statusproceso+"&catprocesoid="+grupoprocesos+"&catcomponenteid="+catponentesid+"&jobidhijos="+jobidshijos+"&NoOrden="+NoOrdenes;
                           $.post(urlparambiarstatusproceso,variables,
                           
                           function (data){
                                if(data.validacion=="enviado"){
                           
                                    
                           
                               $("#mensajesdeconfirmacionverde").html("La orden ha sido enviada");
                               $( "#mensajesdeconfirmacionverde" ).dialog( "open" );
                               
                              
                               }
                               
                                 if(data.validacion=="faltan"){
                              
                               $("#mensajesdeconfirmacion").html("La orden no puede salir falta(n):"+data.faltan+"&nbsp;artículo(s)");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                               }
                               
                                if(data.validacion=="faltancomp"){
                               
                             
                               $("#mensajesdeconfirmacion").html("El artículo no puede ser procesado  falta(n):"+data.faltantes+"&nbsp;componente(s)<br>*Verifique e intentente nuevamente");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                             
                               }
                               if(data.validacion=="faltanart"){
                               
                             
                               
                             $("#mensajesdeconfirmacion").html("La orden no puede pasar a envios falta(n) :"+data.faltanarti+"&nbsp;artículo(s)");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                               
                               }
                               if(data.validacion=="recogertienda"){
                             
                                $("#mensajesdeconfirmacionverde").html("La orden ha sido enviada a recoger en tienda");
                                $( "#mensajesdeconfirmacionverde" ).dialog( "open" );
                               }
                               
                               if(data.validacion=="errorespecial"){
                                $("#mensajesdeconfirmacion").html("Hacen falta articulos para esta orden Especial");
                               $( "#mensajesdeconfirmacion" ).dialog( "open" );
                              }
                               if(data.validacion=="pasadaaenvios"){
                             
                                $("#mensajesdeconfirmacionverde").html("La orden ha sido Pasada a envios");
                                $( "#mensajesdeconfirmacionverde" ).dialog( "open" );
                               }
                                if(data.validacion=="error"){
                               $("#mensajesdeconfirmacion").html("Selecciona solo una Orden");
                               $( "#mensajesdeconfirmacion" ).dialog( "open" );
                                   actualizargrids();
                             
                               }
                                if(data.validacion=="normal"){
                                $("#mensajesdeconfirmacionverde").html("La orden a sido movida a&nbsp;"+data.enviadoaproceso);
                                $( "#mensajesdeconfirmacionverde" ).dialog( "open" );
                                    
                               actualizargrids();
                             
                               }
                               
                               if(data.validacion=="true"){
                                   
                                    actualizargrids();
                               }
                          
                           
                           
                           
                           
                           },'json'
                         
                         
                       );
                              
                             $( this ).dialog( "close" );
                         
                          },
                         
                        }
                      });
                    
                    
                       $( "#dialog-prensa-control-calidad" ).dialog( "open" );
                        
                       $("#dialog-prensa-control-calidad").html("Realmente esta seguro de mover ?");
                   
                 
               }
               
                       
                       
                       else{
                      
                   $( "#dialog-prensa-control-calidad" ).dialog({
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {
                              
                           
                        
                             $( this ).dialog( "close" );
                         
                          },
                         
                        }
                      });
                   
                       $( "#dialog-prensa-control-calidad" ).dialog( "open" );
                        
                        $("#dialog-prensa-control-calidad").html("Debes de seleccionar una orden");
                   
               }
                   
                   }
               
               });
               //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="btn para errores desde control de calidad">
// btn para errores desde control de calidad
                jQuery(reportarerrordesdecontrolcalidad).click( function() {///btn para pasar a pagados modulo administrador
                    if($(fila+s).prop("checked") ){
                  
                        $.get("../ajaxadministracion/formulariopagos",{ordenid:idor},function(form){
                                                                                                $("#porpagar").html(form);
                                                                                                $("#porpagar" ).dialog('open');
                        });
                    }else{
//                        $( "#elegiruno" ).dialog( "open" );
//                        $("#elegiruno").html("Debes de seleccionar una orden");
                        $(rtabla).trigger("reloadGrid");
                    }
                });
                         
                        //</editor-fold> 
            //<editor-fold defaultstate="collapsed" desc="Pasar a planeacion desde ordenes pagadas">            
                    
                     var araplan=[];
                          jQuery(pasarapla).click( function() {
                              
                              var aplan=[];
                            
                          if($(fila+s).prop("checked") ){
                              $("#confirmar-pagadas" ).dialog({
                                  autoOpen:false,
                                         resizable: false,
                                         height:250,
                                         modal: true,
                                         show: "blind",
                                         hide: "puff",
                                         buttons: {
                                           "ACEPTAR": function() {
                                            araplan = array.toString().split(",");
                               for(var i=0; i< araplan.length; i++){
                                 var idor=jQuery(rtabla).jqGrid('getRowData', araplan[i]).OrdenID;//para obtener el id
                                   aplan.push(idor);
                                }
                              var aplane="OrdenID="+aplan;
                           
                                     $.post("../Ajaxadministracion/pasaraplaneacion",aplane,
//                                     
                               function (data){
                                   if(data.validacion=="true"){
                                actualizargrids();
                                   }
                                  
                               },'json'
                               
                               );
                                           $( this ).dialog( "close" );

                                           },
                                           "CANCLEAR": function() {
                                              
                                                  $( this ).dialog( "close" );

                                           }
                                         }
                                       });
                           $( "#confirmar-pagadas" ).html( "Estas seguro de mover a Planeación?" );          
                           $( "#confirmar-pagadas" ).dialog( "open" );
                             
//                               
//                              
                               }  else{
                                   
                                   if(rtabla=="##ordenespagadas"){
                                   
                                        $( "#pagados" ).dialog({
                                     
                                         resizable: false,
                                         height:250,

                                         modal: true,
                                         show: "blind",
                                         hide: "puff",
                                         buttons: {
                                           "ACEPTAR": function() {
                                           $( this ).dialog( "close" );

                                           }
                                         }
                                       });

                                       $( "#pagados" ).dialog( "open" );

                                         $("#pagados").html("Debes de elegir una Orden"); 
                                                  $(rtabla).trigger("reloadGrid");
                                   
                                    }
                               
                               }
                            
                               
                           });
                           
                        //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Formulario de remision ">            
                        $( "#elegiruno" ).dialog({
                        autoOpen: false,
                        resizable: false,
                        height:250,
                        modal: true,
                        show: "blind",
                        hide: "puff",
                        buttons: {
                          "ACEPTAR": function() {

                             $( this ).dialog( "close" );
                          }
                        }
                        });

                          /// btn para pasar a facturadas
                          $("#formRemision").dialog({
                              autoOpen: false, width: 'auto',
                              buttons:{
                                  Aceptar:function(){$(this).dialog('close');},
                                  Cancelar:function(){$(this).dialog('close');}
                              }
                          });
                       valores=[];
                          jQuery(porfacturar).click( function() {
                             
                              if(idor === undefined){
                                  $("#elegiruno").html("Debe elegir una orden.");
                                  $("#elegiruno").dialog("open");
                              }else{
                                     valores = s.toString().split(",");
                                
                                for(var i=0; i<valores.length; i++){
                                    
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                      datos.push(idor);
                                   
                                }
                                  $.post("../ajaxcontabilidad/dialogremision",function(r){
                                      $("#formRemision").html(r);
                                      $("#formRemision").dialog('open');
                                  });
                              }
                          
                          });
                          //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Pasar a corte automatico">              

                         
                          //btn para cambiar status a componente
                         jQuery(procesarcorteauto).click( function() {
                             
                             //alert(condstatusempaque);
                              if($(checkboxgral).prop("checked") ){ 
                                    
                           s=  jQuery (rtabla).getGridParam ('selarrrow');
                             valores = s.toString().split(",");
                                
                                var articulos=[];
                          var datos=[];
                          var seq=[];
                          var valores=[];
                          var listcomponentes=[];
                          var catproceso=[];
                           var jobidhijos=[];
                               valores = s.toString().split(",");
                                
                                 for(var i=0; i<valores.length; i++){
                                       var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                       var ordseqid=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdArtSeqID;//para obtener el id-----------
                                       var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;//para obtener el id-----------
                                        var CatComponenteID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatComponenteID;
                                        var CatProcesoID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatProcesoID;//para obtener el id-----------
                                         var valoresjobid=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;
                                        datos.push(idor);
                                        articulos.push(CatArticuloID);
                                        seq.push(ordseqid);
                                        listcomponentes.push(CatComponenteID);
                                        catproceso.push(CatProcesoID);
                                        jobidhijos.push(valoresjobid);
                                   
                                }
                              
        var enviarvalores="ordenid="+datos+"&articuloid="+articulos+"&secuencia="+seq+"&condempaquestatus="+condstatusempaque+"&componenteid="+listcomponentes+"&catprocesoid="+catproceso+"&jobidhijos="+jobidhijos;
                           
                                    $.get(urlprocesocorteauto,enviarvalores,//..para corteauto
                                    function (data){
                                        if(data.validacion=="true"){
                                            
                                            if(data.mal=="false"){
                               
                                $("#mensajesdeconfirmacion").html("El artículo no puede ser procesado falta(n) :"+data.faltan+"&nbsp;componente(s)");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                               
                                            }
                                             if(data.malj=="false"){
                               
                                $("#mensajesdeconfirmacion").html("<center>La Orden no puede ser procesada falta(n) :"+data.faltanj+"&nbsp;articulo(s)</center>");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                               
                                            }
//                                            if(data.yes=="yes"){
//                                                
//                                 $("#mensajesdeconfirmacionverde").html(data.next);
//                                $("#mensajesdeconfirmacionverde").dialog( "open" );
//                                              
//                                            }
                                            
                                           actualizargrids();
                                           
                                           
                                           
                                           
                                           
                                        }
                                    },'json'
                               
                             );
                                  
                              }
                             
                             else{
                             
                             
                          var articulos=[];
                          var datos=[];
                          var seq=[];
                          var valores=[];
                          var listcomponentes=[];
                          var catproceso=[];
                           var jobidhijos=[];
                               valores = s.toString().split(",");
                                
                                 for(var i=0; i<valores.length; i++){
                                       var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                       var ordseqid=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdArtSeqID;//para obtener el id-----------
                                       var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;//para obtener el id-----------
                                        var CatComponenteID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatComponenteID;
                                        var CatProcesoID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatProcesoID;//para obtener el id-----------
                                         var valoresjobid=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;
                                        datos.push(idor);
                                        articulos.push(CatArticuloID);
                                        seq.push(ordseqid);
                                        listcomponentes.push(CatComponenteID);
                                        catproceso.push(CatProcesoID);
                                        jobidhijos.push(valoresjobid);
                                   
                                }
                              
        var enviarvalores="ordenid="+datos+"&articuloid="+articulos+"&secuencia="+seq+"&condempaquestatus="+condstatusempaque+"&componenteid="+listcomponentes+"&catprocesoid="+catproceso+"&jobidhijos="+jobidhijos;
                           
                                    $.get(urlprocesocorteauto,enviarvalores,//..para corteauto
                                    function (data){
                                        if(data.validacion=="true"){
                                            
                                            if(data.mal=="false"){
                               
                                $("#mensajesdeconfirmacion").html("El artículo no puede ser procesado falta(n) :"+data.faltan+"&nbsp;componente(s)");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                               
                                            }
                                             if(data.malj=="false"){
                               
                                $("#mensajesdeconfirmacion").html("<center>La Orden no puede ser procesada falta(n) :"+data.faltanj+"&nbsp;articulo(s)</center>");
                                $( "#mensajesdeconfirmacion" ).dialog( "open" );
                               
                                            }
//                                            if(data.yes=="yes"){
//                                                
//                                 $("#mensajesdeconfirmacionverde").html(data.next);
//                                $("#mensajesdeconfirmacionverde").dialog( "open" );
//                                              
//                                            }
                                            
                                           actualizargrids();
                                           
                                           
                                           
                                           
                                           
                                        }
                                    },'json'
                               
                             );
                     
                     
                     
                             }
                     
                     
                     
                     
                     
                             
                          });
                          
                      
                             
                                
                          
                           $( "#dialog-formulario-error-componente-reportar" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:400,
                                width:300,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {

                                  }
                                });

                             
                                    
                        jQuery(errorcomponente).click( function() {
                        
                            
                             $("#enverrorcomponentereportar").submit(function(){
                              var cadena = $(this).serialize();
//                             alert(cadena);
                       
                            
                            if($("#solucion").val()=="Seleccionar..." || $("#errorescomporeportar").val()=="Seleccionar..."){
                                
                                $("#dialog-formulario-error-componente-reportar").append("<div id='msjwarning'></div>");
                                $("#msjwarning").html("Por favor elige un tipo de error");
                             
                                
                            }
                            
                            else if ($("#descripcion").val()==""){
                                $("#msjwarning").html("Por favor captura descripción");
                            }
                            else{
                            
                        $.post(urlerrorcomponente,cadena);
                             $( "#dialog-formulario-error-componente-reportar" ).dialog( "close" );
                             actualizargrids();
//                               

                            }
                                 return false;
                                 
                                 
                        });
                            
                                
                       
                           var idor=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;
                             CatcomponenteID=jQuery(rtabla).jqGrid('getRowData',s).CatComponenteID;
                             var secuencia=jQuery(rtabla).jqGrid('getRowData',s).OrdArtSeqID;
                             var CatProcesoID=jQuery(rtabla).jqGrid('getRowData',s).CatProcesoID;
                              var JobID=jQuery(rtabla).jqGrid('getRowData',s).JobID;
                                
                            if($(fila+s).prop("checked") ){
                                
                            var errores="ordenid="+idor+"&articuloid="+CatArticuloID+"&secuencia="+secuencia+"&componenteid="+CatcomponenteID+"&proceso="+CatProcesoID;
                              var va;
                            $.get(urlparareportarerror,errores,//aqui se le agregaria la url para los errores
                             function (data) {
                              
                                 for(var i = 0; i <data.registroserror.length; i++) {
                                     
                            $("#errorescomporeportar").append('<option value="'+data.registroserror[i].id_error+'" >'+data.registroserror[i].nombre_error+'</option>');
                             
                                 }
                            },'json') ;
                            
                            
                    $("#enverrorcomponentereportar").html("<b>Tipo de Error:</b><select id='errorescomporeportar' name='error' onchange='loadSoluciones($(this).val())'><option selected>Seleccionar...</option></select><br>");
                
                    $("#enverrorcomponentereportar").append("<br><b>solución:</b><select id='solucion' name='solucion'><option selected>Seleccionar...</option></select><br>");
                   $("#enverrorcomponentereportar").append("<input type='hidden' name='ordenid' id='ordenid' value='"+idor+"'>");                      
                    $("#enverrorcomponentereportar").append("<input type='hidden' name='articuloid' id='articuloid' value='"+CatArticuloID+"'>");
                    $("#enverrorcomponentereportar").append("<input type='hidden' name='secuencia' id='secuencia' value='"+secuencia+"'>");                       
                    $("#enverrorcomponentereportar").append("<input type='hidden' name='componenteid' id='componenteid' value='"+CatcomponenteID+"'>");                       
                    $("#enverrorcomponentereportar").append("<input type='hidden' name='procesoid' id='procesoid' value='"+CatProcesoID+"'>");  
                    $("#enverrorcomponentereportar").append("<input type='hidden' name='jobid' id='jobid' value='"+JobID+"'>"); 
                    $("#enverrorcomponentereportar").append("<br><b>Descripcion del error y/o Solución </b><br><textarea rows='10' cols='30' name='descripcion' id='descripcion'></textarea>");
                    $("#enverrorcomponentereportar").append(" <center><br> <input type='submit' id='botonenviarreporte' class='btn btn-primary' value='Enviar'></center>");

                         
                         $( "#dialog-formulario-error-componente-reportar" ).dialog( "open" );
                              
                               
                            }else{
                                
                            var nada;
                                
                            }
                            
                              //llenamos el primer selector   
                            
                                
                            var reportarerror="ordenid="+idor+"&articuloid="+CatArticuloID+"&secuencia="+secuencia+"&componenteid="+CatcomponenteID+"&procesoid="+CatProcesoID;

                            
                            });
                       
                            
                            jQuery(regresarcomponente).click( function() {
                                 
                            var idor=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;
                             CatcomponenteID=jQuery(rtabla).jqGrid('getRowData',s).CatComponenteID;
                              var secuencia=jQuery(rtabla).jqGrid('getRowData',s).OrdArtSeqID;
                              var CatProcesoID=jQuery(rtabla).jqGrid('getRowData',s).CatProcesoID;
                                var JobID=jQuery(rtabla).jqGrid('getRowData',s).JobID;
                               $("#enverrorcomponente").submit(function(){
                                        var cadena = $(this).serialize();

                                        $.post("../errorcomponentes/deregreso",cadena);
                                         $( "#dialog-formulario-error-componente" ).dialog( "close" );
                                         actualizargrids();
                                        return false;
                                        });
                            
                               $( "#dialog-formulario-error-componente" ).dialog({
                                resizable: false,
                                height:200,
                                width:200,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {

                                  }
                                });
                           
                            
                              
                              var errores="ordenid="+idor+"&articuloid="+CatArticuloID+"&secuencia="+secuencia+"&componenteid="+CatcomponenteID+"&procesoid="+CatProcesoID;
                              var va;
                            $.get('../planeacion/erroresestaciones',errores,
                             function (data) {
                             for(var i = 0; i <data.registrossec.length; i++) {
                            
                            $("#errorescompo").append('<option value="'+data.registrossec[i].proceso_id+'" >'+data.registrossec[i].nombre_proceso+'</option>');
                             }
                            },'json') ;
                            
                      
                $("#enverrorcomponente").html("<br><b>Procesos Permidos:</b><select id='errorescompo' name='nombreestacion'></select><br><br>");
               $("#enverrorcomponente").append("<input type='hidden' name='ordenid' id='ordenid' value='"+idor+"'>");                      
                $("#enverrorcomponente").append("<input type='hidden' name='articuloid' id='articuloid' value='"+CatArticuloID+"'>");
                $("#enverrorcomponente").append("<input type='hidden' name='secuencia' id='secuencia' value='"+secuencia+"'>");                       
                $("#enverrorcomponente").append("<input type='hidden' name='componenteid' id='componenteid' value='"+CatcomponenteID+"'>");                       
                $("#enverrorcomponente").append("<input type='hidden' name='procesoid' id='procesoid' value='"+CatProcesoID+"'>"); 
                 $("#enverrorcomponente").append("<input type='hidden' name='jobid' id='jobid' value='"+JobID+"'>"); 
                $("#enverrorcomponente").append(" <center><br> <input type='submit' class='btn btn-primary' value='Enviar'></center>");
 
                            
                          $( "#dialog-formulario-error-componente" ).dialog( "open" );
                            
                         
                            
                            });
                         
                          
                          //</editor-fold>
                           

                         jQuery(regresarapreprensa).click( function() {
                           
                                 $( "#dialog-regresar-preprensa" ).dialog({
                               
                                resizable: false,
                                height:250,
                                width:300,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                     "ACEPTAR": function() {
                                         
//                                          donde se regresaran a preprensa
                             var ordeindregreso=[];
                             var articulosidregreso=[];
                             var secuenciasregreso=[];
                             var jobidregreso=[];
                               var  valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                      var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                       var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;
                                       var OrdArtSeqID=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdArtSeqID;
                                       var JobID=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;
                                      ordeindregreso.push(idor);
                                      articulosidregreso.push(CatArticuloID);
                                      secuenciasregreso.push(OrdArtSeqID);
                                      jobidregreso.push(JobID);
                                  }
                            
                            
                            
                             var idor=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;
                             var CatArticuloID=jQuery(rtabla).jqGrid('getRowData',s).CatArticuloID;
//                             

                             var errorpreprensa="ordenid="+ordeindregreso+"&articuloid="+articulosidregreso+"&jobidpadre="+jobidregreso+"&secuenciaid="+secuenciasregreso;
                                     
                                         
                                         $.post("../planeacion/errorespartidas",errorpreprensa,
                                    
                                         
                                         
                                        function (data){
                                            
                                            if(data.validacion=="true"){
                                                
                                                actualizargrids();
                                             $( "#dialog-regresar-preprensa" ).dialog( "close" );
                                                
                                            }
                                            
                                        },'json'
                             
//                             
                                 );
                            
                                         
                                     },
                                     
                                   
                                     "CANCELAR": function() {
                                           actualizargrids();
                                            $( "#dialog-regresar-preprensa" ).dialog( "close" );
                                           
                                         }

                                    }
                                });
                                
                          $( "#dialog-regresar-preprensa" ).html( "Está seguro de regresar a pre-prensa?" );
                          $( "#dialog-regresar-preprensa" ).dialog( "open" );
                              
                  });//terminar dialogo para regresar a planeacion
                    
                   
                                $( "#enviarguia" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:"auto",
                                width:"auto",
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                      "CANCELAR": function() {
                                         window.location='envios';
                                          $(this).dialog('close');
                                      },
                                      "ACEPTAR": function() {
                                           $(this).dialog('close');
                                           $("#enviarporguia").submit();
                                           // window.location='envios';
                                      }
                                  }
                            });
                               $( "#enviarguiaAuto" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:"auto",
                                width:"auto",
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: 
                                        {
                                        "CANCELAR": function() {
                                          $(this).dialog("close");  
                                       },
                                       "GENERAR GUÍA": function() {
                                        var servicio=$("#servicio2").val();
                                        var ord=$("#ord").val();
                                        var or="ordenid="+ord;
                                        $.blockUI({ css: { 
                                        border: 'none', 
                                        padding: '15px', 
                                        backgroundColor: '#000', 
                                        '-webkit-border-radius': '10px', 
                                        '-moz-border-radius': '10px', 
                                        opacity: .3, 
                                        color: '#fff' 
                                        } }); 

                           setTimeout($.unblockUI, 30000); 
                           var numg=$("#numg").val();
                           $.post("enviaradireccion/generaguia",or,
                           function(data){
                           var cadena ="tipoguia="+data.metodo+"&dat="+ord+"&identificador="+servicio+"&numg="+numg;
                               $.post("envios/generarlayout",cadena,
                               function (datat){
                          if(datat.valor=="true"){
                                setTimeout($.unblockUI,0); 
                                  actualizargrids();
                                 $( "#enviarguia" ).html( "<h3 style='color:red';>Guía generada con éxito"+datat.msj+"</h3>");
                                 $( "#enviarguia" ).dialog("open");
                                //alert("Guía generada con éxito" +datat.msj);
                               window.open ("enviaradireccion?ordenid="+datat.orden);
                              }
                              if(datat.valor=="error"){
                                  setTimeout($.unblockUI,0); 
                                  $( "#enviarguia" ).html( "<h3 style='color:red';>Ha ocurrido un error en el webService : <br><br>"+datat.msj +"--Guía no generada para la orden "+ord+"</h3>");
                                  $( "#enviarguia" ).dialog("open");
                                 // alert("Ha ocurrido un error en el webService :"+datat.msj +"--Guía no generada para la orden "+ord);
                              }
                           },'json');
                        
                           },'json' );
                       
                         $(this).dialog("close");
                                     }
                                         
                                  }
                            });
                     $(".ui-dialog-titlebar-close").click(function (){
                     $("#enviarporguia").html("");
                        
                    });
                    
                    if(rtabla=="#envios"){
                       
                    $("#normalguia").click(function(){
                         var servicio=$("#servicio").val();
                           var datosidor=[];
                           var condiPadre=[];
                             var valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                 var  padre=jQuery(rtabla).jqGrid('getRowData',valores[i]).PersonaID;
                                      datosidor.push(idor);
                                     if(padre==3){
                                         
                                         condiPadre.push(padre);
                                         
                                     }
                                      
                                  }
                                  
                               if(condiPadre.length>0){
                                    $("#dialog-envios-costco-error").dialog('option', 'title', 'AVISO COSTCO');
                                   $( "#dialog-envios-costco-error" ).html("<center><h1 style='color:red;'>tienes "+condiPadre.length+" orden(es) diferente(s) a FOTOsmile</h1></center>");
                                   $( "#dialog-envios-costco-error" ).dialog("open");
                                   // $("#1").css("background", "red");
                                   return false;
                                   
                               }
                             
                           //consultar metodo de envio
                           var or="ordenid="+idor;
                           $.post("enviaradireccion/generaguia",or,
                           function(data){
                          
                           var cadena ="tipoguia="+data.metodo+"&dat="+datosidor+"&servicio="+servicio;
                         
                                if(data.metodo==3 || data.metodo==2 || data.metodo==1){
                                    
                    $("#enviarguiaAuto").html("<br><b>Servicio: </b></td><td><input type='hidden' id='ord' name='ord' value='"+datosidor+"'><select name='servicio2' id='servicio2'>  <option value='0'>Seleccionar...</option> <option value='60'>Día siguiente consumo facturación mensual</option><option value='70'>Terrestre consumo facturación mensual</option><option value='75'>Terrestre metropolitano</option><option value='80'>Internacional consumo facturación mensual</option> <option value='D0'>Dos días consumo facturación mensual</option></select>\n\
                        <br><br><b>Número de Guías: </b> <select name='numg' id='numg'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>\n\
                        <option>8</option><option>9</option><option>10</option></select>");
                    $("#enviarguiaAuto").dialog("open");
                           
                                }
                         else{
                           var cadena ="tipoguia="+data.metodo+"&dat="+datosidor+"&identificador="+servicio+"&numg=0";//recoger en tienda
                            
                              $.blockUI({ css: { 
                            border: 'none', 
                            padding: '15px', 
                            backgroundColor: '#000', 
                            '-webkit-border-radius': '10px', 
                            '-moz-border-radius': '10px', 
                            opacity: .3, 
                            color: '#fff' 
                             } }); 
                         setTimeout($.unblockUI, 30000); 
                      $.post("envios/generarlayout",cadena,
                          function (datat){
                                  if(datat.valor=="false"){
                                     actualizargrids();  
                                   setTimeout($.unblockUI,0); 
                                     
                              }
                              },'json');
                         }
                    },'json'
                           
                           );

                       });
                        
                        //pasar en proceso de forma manual
                         $( "#procesaAutoGuia" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:"auto",
                                width:"auto",
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                      
                                     "ACEPTAR": function() {
                                         
                              var datosidor=[];
                              var valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                      datosidor.push(idor);
                                      
                                  }
                             
                                  var actu="ordenid="+datosidor;
                                  $.post("envios/pasarenproceso",actu,
                                  function(data){
                                      if(data.validacion=="true"){
                                          actualizargrids();
                                      }
                                  },'json'
                                         );
                                  
                                  $(this).dialog("close");
                                         
                                     },
                                      "CANCELAR": function() {
                                           $(this).dialog("close");
                                     }
                                     
                           }
                           
                    });
                        
                        
                        
                        
                        
                        $("#enPrcesoGuia").click(function(){
                            
                           
                            $( "#procesaAutoGuia" ).html("<h2>Realmente desea pasar a en Proceso?</h2>");
                            $( "#procesaAutoGuia" ).dialog("open");
                           return false;
                        });
                        
                             
                    }
                    
                    jQuery(guia).click( function() {
                        
                      
                     var valorr="algo";
                     var datosidor=[];
                             var valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                      datosidor.push(idor);
                                      
                                  }
                         $("#enviarporguia").submit(function(){
                             var servicio=$("#servicio").val();
                        var cadena = $(this).serialize()+"&dat="+datosidor+"&identificador="+servicio;
                                   
                                var tp=$("#tipoguia").val();

                                if(tp==0 || (servicio==0 && tp==2) || (servicio==0 && tp==3) ){
                                  $('#introduce').show();
                                $("#enviarporguia").append("<div id='introduce'></div>");
                                $("#introduce").html("Selecciona tipo de Servicio");
                                $('#introduce').hide("highlight",6000);
                                    
                                }else{
                        $('#introduce').hide();
                                
                        
                                $.blockUI({ css: { 
                            border: 'none', 
                            padding: '15px', 
                            backgroundColor: '#000', 
                            '-webkit-border-radius': '10px', 
                            '-moz-border-radius': '10px', 
                            opacity: .3, 
                            color: '#fff' 
                             } }); 

                         setTimeout($.unblockUI, 30000); 
                       
                       $.post("envios/generarlayout",cadena,
                        
                          function (data){
                              
                              if(data.valor=="true"){
                         /// window.location="Guias/156.pdf";
                          setTimeout($.unblockUI, 0); 
                          var o="ordenid="+data.orden;
//                          $.post("enviaradireccion",o);
//                          window.location="enviaradireccion?ordenid="+data.orden;
                          
                        window.open ("enviaradireccion?ordenid="+data.orden);
//        window.location="enviaradireccion?ordenid="+datosidor+"&tipoguia="+data.tipoguia;
           
                         setTimeout(function() {
                                  actualizargrids();
                            }, 2000);
                            
                            
                        $("#enviarporguia").html("");
                        $( "#enviarguia" ).dialog( "close" );
                             
                              }//fin de true
                              
                              if(data.valor=="false"){
                          setTimeout($.unblockUI, 0); 
                         $("#enviarporguia").html("");
                         $( "#enviarguia" ).dialog( "close" );
                           
                           actualizargrids();
                                
                              }
                              
                                   
                          },'json');
                        
                      }
                         
                          return false;
                         });

                    $.post('envios/metodosenvios',valorr,
                     function(data){
			 for(var i = 0; i <data.registrosenvios.length; i++) {
                            
                            $("#tipoguia").append('<option value="'+data.registrosenvios[i].id+'" >'+data.registrosenvios[i].descripcion+'</option>');
                             }
                        },//guiados
                                'json');
               var va="<table class='tDetalle'><tr><td><b>Paquería:</b></td><td><select name='tipoguia' id='tipoguia'><option selected='selected' value='0'>Selecciona mensajería..</option></select></td></tr>  <tr id='ocultar'><td><b>Servicio</b></td><td><select name='servicio' id='servicio'> <option value='0'>Seleccionar...</option> <option value='60'>Día siguiente consumo facturación mensual</option>   <option value='70'>Terrestre consumo facturación mensual</option><option value='75'>Terrestre metropolitano</option>   <option value='80'>Internacional consumo facturación mensual</option>  <option value='D0'>Dos días consumo facturación mensual</option>  </select></td></tr><tr id='ocultar2'><td>Número de Guías: </b> </td><td><select name='numg' id='numg'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>\n\
                        <option>8</option><option>9</option><option>10</option></select></td></tr></table><center><input type='submit' id='envbtn' value='Enviar' style='display:none;'></center>";
//                  $("#enviarporguia").append(" 
                  $("#enviarporguia").append(va);
                  $( "#enviarguia" ).dialog( "open" );
                  
                     $("#tipoguia").change(function(){
                         var t= $("#tipoguia").val();
                         if(t==5){
                        $("#ocultar").hide();
                         $("#ocultar2").hide();
                         }else{
                           $("#ocultar").show(); 
                           $("#ocultar2").show(); 
                         }
                     });
                  
                    });//terminar guia
                     
                     function segumientoconcodigobarras(){
          
                     }
                  
                     segumientoconcodigobarras();
//-----------------------------------------------------------------fin de componentes-----------------------------------------------------

                        $(etiquetasenviosfin).click(function (){
                            
//                           alert("imprimir ticket");
                           
                           window.location="enviaradireccion/ticketenvios?ordenid="+idor;
                            
                        });
                      
                            $( "#dialog-especial-webservice" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:400,
                                width:"auto",
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                     "ACEPTAR": function() {
                                       $(this).html("");
                                         $(this).dialog("close");
                                     }
                                 }
                             });  
                            if(rtabla=="#layout"){
                             $("#ver_detalle_web").click(function(){
                                 var cadena="";
                                 $.post("webservice/paquetesentregados",cadena,
                                 function(data){
                                    // alert(data.paquetes.length);
                                     for(var p=0;p<data.paquetes.length;p++){
                                       //  alert(data.paquetes[p].OrdenID);
    var va="<tr class='tDetalle'><td><b>OrdenID:</b></td><td>"+data.paquetes[p].OrdenID+"</td>\n\
<td><b>Guía:</b></td><td>"+data.paquetes[p].Valor+"</td><td><b>Cliente:</b></td><td>"+data.paquetes[p].Cliente+"</td>\n\
            <td><b>Articulos:</b></td><td>"+data.paquetes[p].Nombre+"</td> </tr>"; 
                                  $( "#dialog-especial-webservice" ).append(va);
                                         $( "#dialog-especial-webservice" ).dialog("open");
                                     }
                                    },'json'  );
                                 
                                   // window.location="enviaradireccion/ordnesenviadas";
                               });
                           }
                           //dialogo de aviso para costco
                             $( "#dialog-envios-costco-error" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:250,
                                width:400,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                     "OK": function() {
                                     
                                         $(this).dialog("close");
                                     }
                                     
                                  }
                             
                             });
                           
                           
                           
                           
                           //dialogo para envio de costco
                            $( "#dialog-envios-costco" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:250,
                                width:400,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                     "CANCELAR": function() {
                                     //  $(this).html("");
                                         $(this).dialog("close");
                                     },
                                     "GENERAR GUÍA": function() {
                                     // $(this).html("");
                                     //consultar dirección de tienda seleccionada
                                     
                                     if($("#servicio2").val()==0){
                                        $("#dialog-envios-costco").append("<center><div id='errorC' style='color:Red;text-aling:center;'></div></center>");
                                        $("#errorC").html("<h3>LLena los campos</h3>");
                                     }else{
                                      
                                     $("#errorC").html("");
                                      $.blockUI({ css: { 
                                        border: 'none', 
                                        padding: '15px', 
                                        backgroundColor: '#000', 
                                        '-webkit-border-radius': '10px', 
                                        '-moz-border-radius': '10px', 
                                        opacity: .3, 
                                        color: '#fff' 
                                        } }); 

                               setTimeout($.unblockUI, 30000); 
                                      var tien="tienda="+$("#idtienda").val()+"&servicio="+$("#servicio2").val()+"&ordenes="+$("#idOrdenes").val()+"&cantidad="+$("#numGuiasCos").val();
                                   $.get("enviaradireccion/consultardirecciontienda",tien,
                                     function(data){
                                         if(data.valor=="true"){
                                setTimeout($.unblockUI,0); 
                                  actualizargrids();
                                 $( "#enviarguia" ).html( "<h3 style='color:red';>Guía generada con éxito"+data.msj+"</h3>");
                                 $( "#enviarguia" ).dialog("open");
                                   
                                         var ordenesCostcoGuia=data.idCostco;
                                window.open ("enviaradireccion/costco/?ordenid="+ordenesCostcoGuia+"&tipo="+data.tipo);
                              }
                              if(data.valor=="error"){
                                  setTimeout($.unblockUI,0); 
                                  $( "#enviarguia" ).html( "<h3 style='color:red';>Ha ocurrido un error en el webService : <br><br>"+data.msj +"--Guía no generada para la orden "+ord+"</h3>");
                                  $( "#enviarguia" ).dialog("open");
                                 // alert("Ha ocurrido un error en el webService :"+datat.msj +"--Guía no generada para la orden "+ord);
                              }
                                      },'json');
                                      $(this).dialog("close");
                                     }//fin de aceptar
                                     
                                  }
                                     
                                 }
                                 
                               
                             });  
                           
                            if(rtabla=="#envios"){
                                //invocar a http://costco.imprimart.com.mx/costcoBeta/costco/ordenesmanuales/Vista
                                
                                $("#costcoManual").click(function(){
                                    
                                        alert("invocar costco");
                                        
                                        return false;
                                    
                                    });
                                
                                
                               
                             $("#costcoEnvio").click(function(){
                               var datosCostco=[];
                               var padres=[];
                               var datosCostco2=[];
                               var tiendas=[];
                             var valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                     var orden=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                     var  padre=jQuery(rtabla).jqGrid('getRowData',valores[i]).PersonaID;
                                     var  padreF=jQuery(rtabla).jqGrid('getRowData',valores[i]).Padre;
                                     var  NoOrden=jQuery(rtabla).jqGrid('getRowData',valores[i]).NoOrden;
                                   //alert(NoOrden);
                                     var resPO =NoOrden.slice(13,23);//valor po
                                   //  alert(resPO);
                                     var tienda=resPO.slice(0,3);
                                     tiendas.push(tienda);
                                     datosCostco.push(orden);
                                     if(padre != 3){//validación padre costco
                                      datosCostco2.push(orden);
                                  }
                                }
                                  var contador=datosCostco2.length;
                                  if(contador>0){
                                   
                                   $("#dialog-envios-costco-error").dialog('option', 'title', 'AVISO COSTCO');
                                   $( "#dialog-envios-costco-error" ).html("<center><h1 style='color:red;'>tienes "+contador+" orden(es) diferente(s) a COSTCO: "+datosCostco2+"</h1></center>");
                                   $( "#dialog-envios-costco-error" ).dialog("open");
                                   // $("#1").css("background", "red");
                                   return false;
                                        }
                                  //validar tiendas
                                  for(b=0;b<tiendas.length;b++){
                                      
                                      if(tiendas[b]==tienda){//costcolais
                                   
                                  //fin de validación de tiendas
                                  if(contador>0){
                                      
                                 //  $("#envios").css("background", "red");
                                   $("#dialog-envios-costco-error").dialog('option', 'title', 'AVISO COSTCO');
                                   $( "#dialog-envios-costco-error" ).html("<center><h1 style='color:red;'>tienes "+contador+" orden(es) diferente(s) a COSTCO: "+datosCostco2+"</h1></center>");
                                   $( "#dialog-envios-costco-error" ).dialog("open");
                                    
                                   return false;
                                        }
                                      
                                    else{
                                
                                  $("#idOrdenes").val(datosCostco);
                              //consultar tiendas costco
                              var co="";
                              
                              $.post("enviaradireccion/consultartiendascostco",co,
                                 function(data){
                                 for(var i=0;i<data.rows.length;i++){
                //$("#tiendasCostco").append("<option value='"+data.rows[i].IdTienda+"'>"+data.rows[i].IdTienda+"--"+data.rows[i].Nombre+"</option>")
                                }
                                
                                 },'json' );
                   // $("#dialog-envios-costco").append("rwwfww");
                   $("#idtienda").val(tienda);
               
                    $("#dialog-envios-costco").html("<b style='color:#0272a7;font-size:20px;'> Ordenes a Procesar: "+datosCostco+"</b><br><br> <b>Tienda/Bodega: </b><b style='color:#0272a7;font-size:18px;'>"+tienda+"</b><br><br><b>Servicio: </b></td><td><select name='servicio2' id='servicio2'>  <option value='0'>Seleccionar...</option> <option value='60'>Día siguiente consumo facturación mensual<option value='75'>Metropolitano</option></option> <option value='70'>Terrestre consumo facturación mensual</option  <option value='75'>Terrestre metropolitano</option><option value='80'>Internacional consumo facturación mensual</option> <option value='D0'>Dos días consumo facturación mensual</option></select>\n\
                        <br><br><b>Número de guías:</b><select name='numGuiasCos' id='numGuiasCos'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>");
                    $("#dialog-envios-costco").dialog('option', 'title', 'Paquetes Costco');
                    $( "#dialog-envios-costco" ).dialog("open");
                                return false;
                                
                                    }//fin de else
                                    
                                    
                                       }else{
                                //msj de error de tienda
            $("#dialog-envios-costco-error").dialog('option', 'title', 'AVISO COSTCO');
            $( "#dialog-envios-costco-error" ).html("<center><h1 style='color:red;'>Tienes "+tiendas.length+" tiendas distintas, tiendas seleccionadas: "+ tiendas+"<br>Verifica el campo PO</h1></center>");
            $( "#dialog-envios-costco-error" ).dialog("open");
                                   return false;               
                                
                                
                                           
                                       }
                                  }
                                  
                                    
                                    
                                    
                                    
                                    
                               });
                           }
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                            //ordenes especiales
                            if(rtabla=="#enprocesoEspecial"){
                            $( "#dialog-especial" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:"auto",
                                width:"auto",
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                      
                                     "ACEPTAR": function() {
                                          var datosidor=[];
                                          var articulos=[];
                              var valores = s.toString().split(",");
                              for(var i=0; i<valores.length; i++){
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;
                                      CatArticuloID=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;
                                      datosidor.push(idor);
                                      articulos.push(CatArticuloID);
                                  }
                                 var cadena="ordenid="+datosidor+"&articuloid="+articulos;
                                //enviamos la peticion
                                  $.post("../planeacion/enviarempaqueespecial",cadena,
                                  function(data){
                                      if(data.validacion=="true"){
                                          actualizargrids();
                                      }
                                  },'json');
                                  $(this).dialog("close");
                                  },
                                   "CANCELAR": function(){
                                       
                                       $(this).dialog("close");
                                   }  
                                 }
                             });
                            $("#empaqueEspecial").click(function(){
                              $( "#dialog-especial" ).html("<h3>¿Está seguro de pasar a Empaque?</h3>");
                              $( "#dialog-especial" ).dialog("open");
                                 
                            });
                            
                            
                            $("#imprimirEspecial").click(function(){
                              var datosidor=[];
                               var articulos=[];
                               var jobs=[];
                              var valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;
                                      var articuloid=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;
                                       var jobid=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;
                                      datosidor.push(idor);
                                      articulos.push(articuloid);
                                      jobs.push(jobid);
                                  }
                                 
                                var cadenas="ordenid="+datosidor+"&articuloid="+articulos;
                           window.location="../planeacion/imprimirespecial?"+cadenas;       
                                  
                            });
                                 
                              }
                            if(rtabla=="#enpendienteEspecial"){
                                $("#enProcesoEspecial").click(function(){
                               var datosidor=[];
                               var articulos=[];
                               var jobs=[];
                               var valores = s.toString().split(",");
                               for(var i=0; i<valores.length; i++){
                                      idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;
                                      var articuloid=jQuery(rtabla).jqGrid('getRowData',valores[i]).CatArticuloID;
                                      var jobid=jQuery(rtabla).jqGrid('getRowData',valores[i]).JobID;
                                      datosidor.push(idor);
                                      articulos.push(articuloid);
                                      jobs.push(jobid);
                                  }
                                  var cadena="ordenid="+datosidor+"&articuloid="+articulos+"&jobid="+jobs;
                                  $.post("../planeacion/enprocesoespeciales",cadena,
                                  function(data){
                                      if(data.validacion=="true"){
                                          actualizargrids();
                                      }
                                  },'json'
                                    );
                                  
                                
                               return false;
                                });
                                
                            }
                           
                            $(cancelarorden).click(function (){
                          
                              var datoscanceladas=[];
                              var ordCanceladas=[];
                              var datosordenid=[];
                              ordCanceladas = s.toString().split(",");
                               for(var i=0; i<ordCanceladas.length; i++){
                                       var noorden=jQuery(rtabla).jqGrid('getRowData',ordCanceladas[i]).NoOrden;
                                       var ordenid=jQuery(rtabla).jqGrid('getRowData',ordCanceladas[i]).OrdenID;
                                      datoscanceladas.push(noorden);
                                      datosordenid.push(ordenid);
                                      
                               }
                           
                             $( "#cancela" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:175,
                                width:250,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                           "ACEPTAR": function() {
                                                     var ordeneacancelar="ordenescanceladas="+datosordenid;
                                                     $.post("../administracion/cancelarorden",ordeneacancelar,
                                               function (data){
                                                   
                                                   if(data.confirmacion=="true"){
                                                       
                                                       actualizargrids();
                                                       
                                                   }
                                                   
                                                   
                                                   
                                               },'json' );
                                     
                                          $( this ).dialog( "close" );

                                           },
                                           "CANCELAR": function(){
                                           $( this ).dialog( "close" );
                                           }
                                         }
                                });
                            
                                $("#cancela").html("Esta seguro de cancelar NoOrden:&nbsp;"+datoscanceladas+"?");
                                $("#cancela").dialog("open");
                    
                       
                        
                        });
                        
                     //<<<<<<<<<<<<<<<<<<<<<<<<<<<<STATUS 601 Y 602
                     $( "#ordenesErrores" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:"auto",
                                width:"auto",
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                           "ACTUALIZAR": function() {
//                                       var orden= $("#OrdenID").val();
                                       var rfc=$("#rfc").val();
                                       var rz= $("#razon").val();
                                       var calle= $("#calle").val();
                                       var exterior=$("#exterior").val();
                                       var interior=$("#interior").val();
                                       var cp=$("#cp").val();
                                       var estado= $("#estado").val();
                                       var mp= $("#mp").val();
                                       var col=$("#col").val();

        var valoresF="ordenid="+idor+"&rfc="+rfc+"&rz="+rz+"&calle="+calle+"&exterior="+exterior+"&cp="+cp+"&estado="+estado+"&mp="+mp+"&col="+col+"&interior="+interior;

//                                  
                        $.post("../administracion/actualizarfacturacion",valoresF,
                        function(data){
                            $('#msj').show();
                            $("#msj").html("Datos actualizados");
                            $('#msj').hide("highlight",6000);
                        },'json');
//                                              
                                               
                                               
                                                $( this ).dialog( "close" );
                                           },
                                           "CANCELAR": function() {
                                                $( this ).dialog( "close" );
                                           },
                                           
                                       }
                                   });
                     
                      if(rtabla=="#datosfacturacion"){
                     $("#cambiardatos").click(function(){
                         $("#OrdenID").val(idor);
                         var orden="ordenid="+idor;
                         $.post("../administracion/consultardatosconerror",orden,
                         function(data){
//                             alert(data.datosfacturacion[1].Valor);
                            $("#rfc").val(data.rfc);
                            $("#razon").val(data.rz);
                            $("#calle").val(data.datosfacturacion[0].Valor);
                            $("#exterior").val(data.datosfacturacion[1].Valor);
                            $("#interior").val(data.datosfacturacion[2].Valor);
                            $("#cp").val(data.datosfacturacion[3].Valor);
                            $("#estado").val(data.datosfacturacion[4].Valor);
                            $("#mp").val(data.datosfacturacion[5].Valor);
                            $("#col").val(data.datosfacturacion[6].Valor);
                            $("#email").val(data.email);
                            $("#tel").val(data.telefono);
                                
                         },'json'
                         );
                         
                        
                        $( "#ordenesErrores" ).dialog("open");
//                        alert(idor); 
                        });
                         

                         $( "#salirError" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:"auto",
                                width:"auto",
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                           "ACEPTAR": function() {
                                    var orden="ordenid="+idor;
                                    
                                      var datos=[];  
                                    s=  jQuery (rtabla).getGridParam ('selarrrow');
                                    valores = s.toString().split(",");
                                    for(var i=0; i<valores.length; i++){
                                    var idor=jQuery(rtabla).jqGrid('getRowData',valores[i]).OrdenID;//para obtener el id
                                    datos.push(idor);
                                    }
//                                    alert(datos);
                                    var orden="ordenid="+datos;
                                    $.post("../administracion/cambiarstatus",orden,
                                    function(data){
                                        if(data.validacion=="true"){
                                          $("#datosfacturacion").jqGrid("clearGridData", true).trigger("reloadGrid");
                                      }
                                       },'json');
                                         $( this ).dialog( "close" );
                                               
                                           },
                                           "CANCELAR": function() {
                                           $( this ).dialog( "close" );
                                               
                                           }
                                       }
                         });
                        
                        
                        
                         $("#pasarDeError").click(function(){
                             
                          $( "#salirError" ).html("<h3><b>Esta realmente seguro?</b></h3>");
                          $( "#salirError" ).dialog("open");
                             
                             
                             
                         });
                   
                        $("#rfc").change(function(){

                          var razonS=$("#razon").val();
                          var rfc=$("#rfc").val();
                         if(rfc==""){
                               $("#rfc").addClass("colorr");
                          }
                          else{
                              $("#rfc").removeClass( "colorr");
//                              $(".ui-button-text").hide();
                          }
                         if(razonS==""){
                               $("#razon").addClass("colorr");
//                               $(".ui-button-text").hide();
                          }else{
                              $("#razon").removeClass( "colorr");
//                                $(".ui-button-text").show();
                          }
//                         
                        });
                        
                        $("#razon").change(function(){
                          var rfc=$("#rfc").val();
                          var razonS=$("#razon").val();
                          if(razonS==""){
                               $("#razon").addClass("colorr");
                          }
                           else{
                              $("#razon").removeClass( "colorr");
                          }
                        if(rfc==""){
                               $("#rfc").addClass("colorr");
                          }
                          else{
                              $("#rfc").removeClass( "colorr");
                          }
                        });
                        
                        
                        
                        
                    }
                    //datos del web service
                              $( "#datosWebService" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:"auto",
                                width:350,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                           "ACEPTAR": function() {
                                               
                                               $(this).dialog("close");
                                               
                                           }
                                       }
                                   });
                    
                    
                    if(rtabla=="#layout"){
                       $("#ConsultaWebService").click (function(){
                        var ordenid=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;
                            var cadena="ordenid="+ordenid;
                            $.blockUI({ css: { 
                            border: 'none', 
                            padding: '15px', 
                            backgroundColor: '#000', 
                            '-webkit-border-radius': '10px', 
                            '-moz-border-radius': '10px', 
                            opacity: .3, 
                            color: '#fff' 
                            } }); 

                            setTimeout($.unblockUI, 300000); 
                             $.get("webservice/consultaguiasestafeta",cadena,
                           function(data){
                               if(data!=null){
                                   
                                   if(data.estatus=="CONFIRMADO"){
                                      var paquete="ENTREGADO";
                                   }
                                   
                                     setTimeout($.unblockUI, 0); 
   $("#datosWebService").html("<table id='tdetalle'><tr><td  class='tb' style='border:1px solid grey'><b>Evento:</b></td><td style='border:1px solid grey'> &nbsp;"+data.evento+"</td></tr>\n\
   <!--tr><td  class='tb' style='border:1px solid grey'><b>Lugar de Llegada:</b></td><td style='border:1px solid grey'> &nbsp;"+data.Lugarllegada+"</td></tr-->\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Servicio:</b></td><td style='border:1px solid grey'> &nbsp;"+data.Servicio+"</td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Estatus de Entrega:</b></td><td style='border:1px solid grey'> &nbsp;"+data.FechaEntrega+"</td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Estatus Final:</b></td><td style='border:1px solid grey'> &nbsp;"+paquete+"</td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Fecha Recolección:</b></td><td style='border:1px solid grey'> &nbsp;"+data.FechaRec+"</td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Fecha Entrega:</b></td><td style='border:1px solid grey'> &nbsp;"+data.FechaFin+"</td></tr>");
                             
                               $( "#datosWebService" ).dialog("open");
                           }else{
                                 setTimeout($.unblockUI, 0); 
                             $("#datosWebService").html("<h2>No hay registros de Estafeta, generada por Comando</h2>");
                                $( "#datosWebService" ).dialog("open");
                           }
                           } ,'json' 
                           
                           );
                           
                       });
                    }
                        
                       
                        $("#insertarGuia").click (function(){
                              $( "#guardarguia" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:200,
                                width:450,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                           "ACEPTAR": function() {
                                    
                                         var inputGuia=$("#insertguia").val();
                                         
                                         if(inputGuia==""){
                                             $( "#guardarguia" ).append("<div id='e'></div>");
                                             $( "#e" ).html("Captura No. de Guía");
                                             
                                         }
                                         
                                         else{
                                         
                                         
                                        var or=$("#o").val();
                                         var valorguia="noguia="+inputGuia+"&ordenid="+or;
                 

                                  $.blockUI({ css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: .3, 
                    color: '#fff' 
                     } }); 

                      setTimeout($.unblockUI, 3000); 

                                  $.post("./enviaradireccion/guardarguia",valorguia,
                                                    function(data){
//                            
                                actualizargrids();
                               $( "#guardarguia" ).html("<div id='confguia'>EL NO.DE GUÍA HA SIDO REGISTRADO</div>");
                                                        
                                                    },'json'
                                               
                                               );
                                       return false;
                                                $( this ).dialog( "close" );
                                            } 
                                               
                                           },
                                           
                                          "CERRAR": function(){
                                           $( this ).dialog( "close" );
                                           }
                                         }
                                });
                            
                            
                            if(rtabla=="#layout"){
                                 var noorden=jQuery(rtabla).jqGrid('getRowData',s).NoOrden;
                                 var ordenid=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;
                                $( "#guardarguia" ).html("<center><b style='color:#0272a7;font-size:24px;'>NoOrden: "+noorden+"</b><br><br><input type='text' name='insertguia' id='insertguia' placeholder='Captura No. de Guía' size='50'><input type='hidden' name='o' id='o' value='"+ordenid+"'></center>");
                                $( "#guardarguia" ).dialog("open");
                            }
                           
                            
//                           
                            
                        });
                         if(rtabla=="#tienda"){
                               $( "#regresarEnvioss" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:180,
                                width:400,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                     "CANCELAR": function() {
                                               $(this).dialog("close");
                                           },
                                           "ACEPTAR": function() {
                                           var ordenid=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;
                                           var orden="ordenid="+ordenid;
                                           $.post("../envios/regresarenvios",orden,
                                           function(data){
                                                $(this).dialog("close");
                                               actualizargrids();
                                           },'json'
                                               
                                               );
                                               
                                           }
                                       }
                                   });
                             $("#regresarEnvios").click(function(){
                                  var ordenid=jQuery(rtabla).jqGrid('getRowData',s).OrdenID;
                                   $( "#regresarEnvioss" ).html("<br><h3>Estas seguro de regresar : "+ordenid+" a Envios?</h3>");
                                  $( "#regresarEnvioss" ).dialog("open");
                                  
                             });
                             
                             
                             
                            }
                            
                            //dialogo para actulizar datos en módulo envios
                            $( "#actualizaEnvio" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:400,
                                width:410,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                     "CANCELAR": function() {
                                               $(this).dialog("close");
                                           },
                                        "ACTUALIZAR": function() {
                                           var ordenid="&ordenid="+$("#ordenidA").val();
                                             var datosActualizar=$("#actuEnvios").serialize()+ordenid;
                                          
                                              $.post("envios/cambiardatos",datosActualizar,
                                            function(data){
                                         $( "#actualizaEnvio" ).dialog("close");
                                            },'json'  
                                            
                                            );
                                             
                                              return false;
                                              // $(this).dialog("close");
                                           }    
                                           
                                        }
                                              
                             });
                            
                            
                            
                            
                            if(rtabla=="#envios"){
                               
                           $("#actualizarDatosEnvios").click(function(){
                           var datoOrdenid=$(rtabla).jqGrid('getRowData',s).OrdenID;
                           var ordenid="ordenid="+$(rtabla).jqGrid('getRowData',s).OrdenID;
                           $.post("envios/actualizadatosenvios",ordenid,
                             function(data){
                          
                                 
 $("#actualizaEnvio").html("<form name='actuEnvios' id='actuEnvios' method='POST'><input type='hidden' name='ordenidA' id='ordenidA' value='"+datoOrdenid+"'><input type='hidden' name='personaA' id='personaA' value='"+data.persona+"'><table id='tdetalle'><tr><td  class='tb' style='border:1px solid grey'><b>Quien Recibe:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='recibeA' id='recibeA' value='"+data.rz+"' size='30'></td></tr>\n\
   <!--tr><td  class='tb' style='border:1px solid grey'><b>Dirección:</b></td><td style='border:1px solid grey'> &nbsp;"+data.rz+"</td></tr-->\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Calle:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='calleA' id='calleA' value='"+data.datosenvios[0]['Valor']+"' size='30'></td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Número Exterior:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='numE' id='numE' value='"+data.datosenvios[1]['Valor']+"' size='30'></td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Número Interior:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='numI' id='numI' value='"+data.datosenvios[2]['Valor']+"' size='30'></td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>C.P:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='cPA' id='cPA' value='"+data.datosenvios[3]['Valor']+"' size='30'></td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Estado:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='estadoA' id='estadoA' value='"+data.datosenvios[4]['Valor']+"' size='30'></td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Municipio:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='muniA' id='muniA' value='"+data.datosenvios[5]['Valor']+"' size='30'></td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Colonia:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='colA' id='colA' value='"+data.datosenvios[6]['Valor']+"' size='30'></td></tr>\n\
<tr><td  class='tb' style='border:1px solid grey'><b>Teléfono:</b></td><td style='border:1px solid grey'> &nbsp;<input type='text' name='telefonoA' id='telefonoA' value='"+data.telefono+"' size='30'></td></tr></form>\n\
");
       
                           },'json'
                                   
                            );
                           
                            $("#actualizaEnvio").dialog('option', 'title', 'OrdenID : '+datoOrdenid);
                           
                             $( "#actualizaEnvio" ).dialog("open");
                                  
                                return false;
                                   
                               });
                                
                            }
                            
                            //dialogo para insertar las guías diferentes a fotosmile y costco
                            
                              $( "#guardaGuiaD" ).dialog({
                                autoOpen:false,
                                resizable: false,
                                height:250,
                                width:350,
                                modal: true,
                                show: "blind",
                                hide: "puff",
                                buttons: {
                                     "CERRAR": function() {
                                               $("#cliente").val("");
                                               $("#guiaotros").val("");
                                               $("#refotros").val("");
                                               $(this).dialog("close");
                                           },
                                       "GUARDAR GUÍA": function() {
                                         var otrasGuias=  $("#datosGuiaExterna").serialize();
                                    $.post("enviaradireccion/guardarotrasguias",otrasGuias,
                                            function(data){
                                       //$("#msjGuia").html("<p style='color:blue;font-size:16px;text-align:center;'>Guía guardada</p>");
                                     $("#cliente").val("");
                                      $("#guiaotros").val("");
                                      $("#refotros").val("");
                                         $("#guardaGuiaD").dialog("close");
                                            },'json'
                                           
                                            );
//                                         $("#cliente").val("");
//                                         $("#guia").val("");
//                                         $(this).dialog("close");
                                           }    
                                        }
                                    });
                    if(rtabla=="#layout"){        
                    $( "#guardarGuiasDiferentes" ).click(function(){
                        
                       $( "#guardaGuiaD" ).dialog("open");
                        
                    });
                    
                    }

}
//listado de grids
 
// <editor-fold defaultstate="collapsed" desc="Planeacion">
 //grid procesados modulo planeacion

 
 
var objeto1 = new grid('OrdenID','Ordenamiento1','Nombre','CatArticuloID','OrdArtSeqID','Status_Orden','NoOrden','Fecha','ordenes/ordenes','GridProcesados','#list2','#pager2','#m1','#cb_list2','125','#m10','#m11',
'#m3','MODULO PLANEACIÓN PASAR A PRE-PRENSA','ordenes/subirresgitro','ordenes/cambiarposicion','','',40,1000,100,120,200,'','#jqg_list2_',
'pg_pager2','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','etiqu','','50','','','','','');//en la 8 para atras le quite #rt
//aqui le quite el m3 cerca del titulo del grid   ...
prueba( objeto1.OrdenID,objeto1.Ordenamiento1,objeto1.OrdArtSeqID,objeto1.CatArticuloID,objeto1.Nombre,objeto1.StatusOrden,objeto1.Total,objeto1.Fecha,objeto1.url,objeto1.vista,objeto1.tabla,objeto1.paginador,objeto1.btnbrincar,objeto1.checkboxgral,
objeto1.status,objeto1.btnsubir,objeto1.btnbajar,objeto1.btnguardar,objeto1.caption,objeto1.urlbrincar,objeto1.urlcambiarpos,objeto1.btnguardarpre,
objeto1.btnerror,objeto1.anchosegundacolumna,objeto1.anchoterceracolumna,objeto1.anchosextacolumna,objeto1.pultimacolumna,objeto1.ultimacolumna,
objeto1.btnbricarcomponentes,objeto1.fila,objeto1.input,objeto1.ploter,objeto1.dialogos,objeto1.urlsortable,objeto1.pasaracontrolcalidad,objeto1.statusproceso,
objeto1.urlparambiarstatusproceso,objeto1.reportarerrordesdecontrolcalidad,objeto1.etiquedado,objeto1.etiquetado2,objeto1.columna5,
objeto1.cabiarstatusdeordenpp,objeto1.pasarapla,objeto1.porfacturar,objeto1.procesarcorteauto,objeto1.urlprocesocorteauto);

//grid pendientes modulo planeacion
var objeto2 = new grid('OrdenID','Ordenamiento1','Nombre','CatArticuloID','OrdArtSeqID','Status_Orden','NoOrden','Fecha','ordenes/pendientes','GridPendientes','#list3','#pager3','#m2','#cb_list3','150','#m15','#m16',
'','PLANEACIÓN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','','',40,500,100,140,90,'','#jqg_list3_',
'pg_pager3','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','','','50','','','','','');


prueba(objeto2.OrdenID,objeto2.Ordenamiento1,objeto2.OrdArtSeqID,objeto2.CatArticuloID,objeto2.Nombre,objeto2.StatusOrden,objeto2.Total,objeto2.Fecha,objeto2.url,objeto2.vista,objeto2.tabla,objeto2.paginador,objeto2.btnbrincar,objeto2.checkboxgral,
objeto2.status,objeto2.btnsubir,objeto2.btnbajar,objeto2.btnguardar,objeto2.caption,objeto2.urlbrincar,objeto2.urlcambiarpos,objeto2.btnguardarpre,
objeto2.btnerror,objeto2.anchosegundacolumna,objeto2.anchoterceracolumna,objeto2.anchosextacolumna,objeto2.pultimacolumna,objeto2.ultimacolumna,
objeto2.btnbricarcomponentes,objeto2.fila,objeto2.input,objeto2.ploter,objeto2.dialogos,objeto2.urlsortable,objeto2.pasaracontrolcalidad,objeto2.statusproceso,
objeto2.urlparambiarstatusproceso,objeto2.reportarerrordesdecontrolcalidad,objeto2.etiquedado,objeto2.etiquetado2,objeto2.columna5,
objeto2.cabiarstatusdeordenpp,objeto2.pasarapla,objeto2.porfacturar,objeto2.procesarcorteauto,objeto2.urlprocesocorteauto);

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="Preprensa">

//gris pendientes modulo prensa indigo
var objeto5 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','NoOrden','OrdArtSeqID','prensa/datosprensa','V_Preprensa_Componente_Indigo','#listprensa','#pagerprensa','','#cb_listprensa','201','','',
'','PRE-PRENSA INDIGO PENDIENTES ','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',600,600,150,170,.5,'#proces','#jqg_listprensa_',
'pg_pagerprensa','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','','','','','','','','','','');//350//14 despues de ordenes sortable


prueba(objeto5.OrdenID,objeto5.Ordenamiento1,objeto5.OrdArtSeqID,objeto5.CatArticuloID,objeto5.Nombre,objeto5.StatusOrden,objeto5.Total,objeto5.Fecha,objeto5.url,objeto5.vista,objeto5.tabla,objeto5.paginador,objeto5.btnbrincar,objeto5.checkboxgral,
objeto5.status,objeto5.btnsubir,objeto5.btnbajar,objeto5.btnguardar,objeto5.caption,objeto5.urlbrincar,objeto5.urlcambiarpos,objeto5.btnguardarpre,
objeto5.btnerror,objeto5.anchosegundacolumna,objeto5.anchoterceracolumna,objeto5.anchosextacolumna,objeto5.pultimacolumna,objeto5.ultimacolumna,
objeto5.btnbricarcomponentes,objeto5.fila,objeto5.input,objeto5.ploter,objeto5.dialogos,objeto5.urlsortable,objeto5.pasaracontrolcalidad,objeto5.statusproceso,
objeto5.urlparambiarstatusproceso,objeto5.reportarerrordesdecontrolcalidad,objeto5.etiquedado,objeto5.etiquetado2,
objeto5.columna5,objeto5.cabiarstatusdeordenpp,objeto5.pasarapla,objeto5.porfacturar,objeto5.procesarcorteauto,objeto5.urlprocesocorteauto,objeto5.condstatusempaque,objeto5.errorcomponente);

 //grid procesados modulo prensa indigo
var objeto6 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','NoOrden','OrdArtSeqID','prensa/componentesprocesados','V_Preprensa_Proceso_Indigo','#listprensap','#pagerprensap','','#cb_listprensap','6','','',
'','PRE-PRENSA INDIGO EN PROCESO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_listprensap_',
'pg_pagerprensap','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasaracontrol','1','controlcalidad/recibirindigo','','#impricompsolo','#impricomp2','','','','','','','','#errorcomponente','errorcomponentes','','planeacion/recibirerrorrescompo');//300 14 despues de ordenes sortable


prueba(objeto6.OrdenID,objeto6.Ordenamiento1,objeto6.OrdArtSeqID,objeto6.CatArticuloID,objeto6.Nombre,objeto6.StatusOrden,objeto6.Total,objeto6.Fecha,objeto6.url,objeto6.vista,objeto6.tabla,objeto6.paginador,objeto6.btnbrincar,objeto6.checkboxgral,
objeto6.status,objeto6.btnsubir,objeto6.btnbajar,objeto6.btnguardar,objeto6.caption,objeto6.urlbrincar,objeto6.urlcambiarpos,objeto6.btnguardarpre,
objeto6.btnerror,objeto6.anchosegundacolumna,objeto6.anchoterceracolumna,objeto6.anchosextacolumna,objeto6.pultimacolumna,objeto6.ultimacolumna,
objeto6.btnbricarcomponentes,objeto6.fila,objeto6.input,objeto6.ploter,objeto6.dialogos,objeto6.urlsortable,objeto6.pasaracontrolcalidad,objeto6.statusproceso,
objeto6.urlparambiarstatusproceso,objeto6.reportarerrordesdecontrolcalidad,objeto6.etiquedado,objeto6.etiquetado2,
objeto6.columna5,objeto6.cabiarstatusdeordenpp,objeto6.pasarapla,objeto6.porfacturar,objeto6.procesarcorteauto,objeto6.urlprocesocorteauto,
objeto6.condstatusempaque,objeto6.errorcomponente,objeto6.urlerrorcomponente,objeto6.regresarcomponente,objeto6.urlparareportarerror);

// </editor-fold>
//<editor-fold defaultstate="collapsed" desc="Atencion a clientes">
 //grid atancion a clientes
 
var objeto7 = new grid('OrdenID','JobID','SolucionSugerida','CatArticuloID','OrdArtSeqID','','Nombres','Apellido','bitacora','regresar','#listatnclientes','#plistatnclientes','','#cb_listatnclientes','850','','',
'','ATENCION A CLIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',60,200,500,150,150,'','#jqg_listatnclientes_',
'pg_plistatnclientes','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#procesarlistatnclientes','pasaraenviadosfinales','controlcalidad/recibirindigo','','','','','','','','','','','#errorencuadernado','errorcomponentes','','planeacion/recibirerrorrescompo','','#impirmiretiquetaenvios','#desdeatnaplan');//aqui me quede 

//850
prueba(objeto7.OrdenID,objeto7.Ordenamiento1,objeto7.OrdArtSeqID,objeto7.CatArticuloID,objeto7.Nombre,objeto7.StatusOrden,objeto7.Total,objeto7.Fecha,objeto7.url,objeto7.vista,objeto7.tabla,objeto7.paginador,objeto7.btnbrincar,objeto7.checkboxgral,
objeto7.status,objeto7.btnsubir,objeto7.btnbajar,objeto7.btnguardar,objeto7.caption,objeto7.urlbrincar,objeto7.urlcambiarpos,objeto7.btnguardarpre,
objeto7.btnerror,objeto7.anchosegundacolumna,objeto7.anchoterceracolumna,objeto7.anchosextacolumna,objeto7.pultimacolumna,objeto7.ultimacolumna,
objeto7.btnbricarcomponentes,objeto7.fila,objeto7.input,objeto7.ploter,objeto7.dialogos,objeto7.urlsortable,objeto7.pasaracontrolcalidad,objeto7.statusproceso,
objeto7.urlparambiarstatusproceso,objeto7.reportarerrordesdecontrolcalidad,objeto7.etiquedado,objeto7.etiquetado2,
objeto7.columna5,objeto7.cabiarstatusdeordenpp,objeto7.pasarapla,objeto7.porfacturar,objeto7.procesarcorteauto,objeto7.urlprocesocorteauto,
objeto7.condstatusempaque,objeto7.errorcomponente,objeto7.urlerrorcomponente,objeto7.regresarcomponente,objeto7.urlparareportarerror,objeto7.guia,objeto7.etiquetasenviosfin,objeto7.regresarapreprensa);

// </editor-fold>
//<editor-fold defaultstate="collapsed" desc="Prensa Ploter">

//grid pendientes modulo prensa ploter //202

var objeto8 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','NoOrden','OrdArtSeqID','ploter','V_Preprensa_Componente_Plotter','#listploter','#pagerploter','','#cb_listploter','201','','',
'','PRE-PRENSA PLOTER PENDIENTES','../ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'#m60ploter','#jqg_listploter_',
'pg_pagerploter','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','','','','','','','','');


prueba(objeto8.OrdenID,objeto8.Ordenamiento1,objeto8.OrdArtSeqID,objeto8.CatArticuloID,objeto8.Nombre,objeto8.StatusOrden,objeto8.Total,objeto8.Fecha,objeto8.url,objeto8.vista,objeto8.tabla,objeto8.paginador,objeto8.btnbrincar,objeto8.checkboxgral,
objeto8.status,objeto8.btnsubir,objeto8.btnbajar,objeto8.btnguardar,objeto8.caption,objeto8.urlbrincar,objeto8.urlcambiarpos,objeto8.btnguardarpre,
objeto8.btnerror,objeto8.anchosegundacolumna,objeto8.anchoterceracolumna,objeto8.anchosextacolumna,objeto8.pultimacolumna,objeto8.ultimacolumna,
objeto8.btnbricarcomponentes,objeto8.fila,objeto8.input,objeto8.ploter,objeto8.dialogos,objeto8.urlsortable,objeto8.pasaracontrolcalidad,objeto8.statusproceso,
objeto8.urlparambiarstatusproceso,objeto8.reportarerrordesdecontrolcalidad,objeto8.etiquedado,objeto8.etiquetado2,
objeto8.columna5,objeto8.cabiarstatusdeordenpp,objeto8.pasarapla,objeto8.porfacturar,objeto8.procesarcorteauto,objeto8.urlprocesocorteauto);

 //grid procesados modulo prensa ploter

var objeto200 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','NoOrden','OrdArtSeqID','ploter/procesados','V_Preprensa_Proceso_Plotter','#listploterpro','#pagerploterpro','','#cb_listploterpro','700','','',
'','PREPRENSA PLOTER EN PROCESO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_listploterpro_',
'pg_pagerploterpro','../prensa/compprocesados','ordenes/detalle','ordenes/sortable','#corte','2','controlcalidad/recibirindigo','','#rtsola','#rtsola2','','','','','','','','#errorcomponenteploter','errorcomponentes','','planeacion/recibirerrorrescompo');


prueba(objeto200.OrdenID,objeto200.Ordenamiento1,objeto200.OrdArtSeqID,objeto200.CatArticuloID,objeto200.Nombre,objeto200.StatusOrden,objeto200.Total,objeto200.Fecha,objeto200.url,objeto200.vista,objeto200.tabla,objeto200.paginador,objeto200.btnbrincar,objeto200.checkboxgral,
objeto200.status,objeto200.btnsubir,objeto200.btnbajar,objeto200.btnguardar,objeto200.caption,objeto200.urlbrincar,objeto200.urlcambiarpos,objeto200.btnguardarpre,
objeto200.btnerror,objeto200.anchosegundacolumna,objeto200.anchoterceracolumna,objeto200.anchosextacolumna,objeto200.pultimacolumna,objeto200.ultimacolumna,
objeto200.btnbricarcomponentes,objeto200.fila,objeto200.input,objeto200.ploter,objeto200.dialogos,objeto200.urlsortable,objeto200.pasaracontrolcalidad,objeto200.statusproceso,
objeto200.urlparambiarstatusproceso,objeto200.reportarerrordesdecontrolcalidad,objeto200.etiquedado,objeto200.etiquetado2,
objeto200.columna5,objeto200.cabiarstatusdeordenpp,objeto200.pasarapla,objeto200.porfacturar,objeto200.procesarcorteauto,objeto200.urlprocesocorteauto,objeto200.condstatusempaque,
objeto200.errorcomponente,objeto200.urlerrorcomponente,objeto200.regresarcomponente,objeto200.urlparareportarerror);

 // </editor-fold>
//<editor-fold defaultstate="collapsed" desc="Etiquetas">
 //grid de etiquetas
 
 var objeto10 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','RFC','Cliente','JobID','OrdArtSeqID','../ploter/procesados','V_Prensa_Proceso_Plotter','#listetiquetas','#pageretiquetas','','#cb_listetiquetas','6','','',
'','IMPRESIÓN DE ETIQUETAS','../ordenes/subirresgitro','../ordenes/cambiarposicion','','',66,600,86,150,.5,'','#jqg_listetiquetas_',
'pg_pageretiquetas','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','etique','#rtsolaetiquet','','','','','','');


prueba(objeto10.OrdenID,objeto10.Ordenamiento1,objeto10.OrdArtSeqID,objeto10.CatArticuloID,objeto10.Nombre,objeto10.StatusOrden,objeto10.Total,objeto10.Fecha,objeto10.url,objeto10.vista,objeto10.tabla,objeto10.paginador,objeto10.btnbrincar,objeto10.checkboxgral,
objeto10.status,objeto10.btnsubir,objeto10.btnbajar,objeto10.btnguardar,objeto10.caption,objeto10.urlbrincar,objeto10.urlcambiarpos,objeto10.btnguardarpre,
objeto10.btnerror,objeto10.anchosegundacolumna,objeto10.anchoterceracolumna,objeto10.anchosextacolumna,objeto10.pultimacolumna,objeto10.ultimacolumna,
objeto10.btnbricarcomponentes,objeto10.fila,objeto10.input,objeto10.ploter,objeto10.dialogos,objeto10.urlsortable,objeto10.pasaracontrolcalidad,objeto10.statusproceso,
objeto10.urlparambiarstatusproceso,objeto10.reportarerrordesdecontrolcalidad,objeto10.etiquedado,objeto10.etiquetado2,
objeto10.columna5,objeto10.cabiarstatusdeordenpp,objeto10.pasarapla,objeto10.porfacturar,objeto10.procesarcorteauto,objeto10.urlprocesocorteauto);
 
// </editor-fold>
//<editor-fold defaultstate="collapsed" desc="comentados">
//grid pendientes modulo preprensa para dialogos
//var objeto11 = new grid('OrdenID','Ordenamiento1','OrdArtSeqID','CatArticuloID','Nombre','Status_Orden','Total','Fecha.date','../preprensa/pendientespreprensa','V_PendientePrep','#list4d','#pager4d','#m60','#cb_list4d','4','#m10p','#m11p',
//'','PENDIENTES','../ordenes/subirresgitro','../ordenes/cambiarposicion','','',40,55,100,125,125,'','#jqg_list4d_',
//'pg_pager4d','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','','','','','','','','');
//
//
//prueba(objeto11.OrdenID,objeto11.Ordenamiento1,objeto11.OrdArtSeqID,objeto11.CatArticuloID,objeto11.Nombre,objeto11.StatusOrden,objeto11.Total,objeto11.Fecha,objeto11.url,objeto11.vista,objeto11.tabla,objeto11.paginador,objeto11.btnbrincar,objeto11.checkboxgral,
//objeto11.status,objeto11.btnsubir,objeto11.btnbajar,objeto11.btnguardar,objeto11.caption,objeto11.urlbrincar,objeto11.urlcambiarpos,objeto11.btnguardarpre,
//objeto11.btnerror,objeto11.anchosegundacolumna,objeto11.anchoterceracolumna,objeto11.anchosextacolumna,objeto11.pultimacolumna,objeto11.ultimacolumna,
//objeto11.btnbricarcomponentes,objeto11.fila,objeto11.input,objeto11.ploter,objeto11.dialogos,objeto11.urlsortable,objeto11.pasaracontrolcalidad,objeto11.statusproceso,
//objeto11.urlparambiarstatusproceso,objeto11.reportarerrordesdecontrolcalidad,objeto11.etiquedado,objeto11.etiquetado2,
//objeto11.columna5,objeto11.cabiarstatusdeordenpp,objeto11.pasarapla,objeto11.porfacturar,objeto11.procesarcorteauto,objeto11.urlprocesocorteauto);
//
////grid procesados modulo preprensa para dialogos
//var objeto12 = new grid('OrdenID','Ordenamiento1','OrdArtSeqID','CatArticuloID','Nombre','Status_Orden','Total','Fecha.date','../preprensa/produccionpreprensa','V_ProcesadoPrep','#list5d','#pager5d','','#cb_list5d','4','#m40','#m13',
//'','PROCESADOS','../ordenes/subirresgitro','../ordenes/cambiarposicion','#m13pre','#m40pre',40,55,100,125,125,'','#jqg_list5d_',
//'pg_pager5d','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','','','','','','','','');
//
//prueba(objeto12.OrdenID,objeto12.Ordenamiento1,objeto12.OrdArtSeqID,objeto12.CatArticuloID,objeto12.Nombre,objeto12.StatusOrden,objeto12.Total,objeto12.Fecha,objeto12.url,objeto12.vista,objeto12.tabla,objeto12.paginador,objeto12.btnbrincar,objeto12.checkboxgral,
//objeto12.status,objeto12.btnsubir,objeto12.btnbajar,objeto12.btnguardar,objeto12.caption,objeto12.urlbrincar,objeto12.urlcambiarpos,objeto12.btnguardarpre,
//objeto12.btnerror,objeto12.anchosegundacolumna,objeto12.anchoterceracolumna,objeto12.anchosextacolumna,objeto12.pultimacolumna,objeto12.ultimacolumna,
//objeto12.btnbricarcomponentes,objeto12.fila,objeto12.input,objeto12.ploter,objeto12.dialogos,objeto12.urlsortable,objeto12.pasaracontrolcalidad,objeto12.statusproceso,
//objeto12.urlparambiarstatusproceso,objeto12.reportarerrordesdecontrolcalidad,objeto12.etiquedado,objeto12.etiquetado2,
//objeto12.columna5,objeto12.cabiarstatusdeordenpp,objeto12.pasarapla,objeto12.porfacturar,objeto12.procesarcorteauto,objeto12.urlprocesocorteauto);
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Control de Calidad1">
//grid modulo control de calidad

var objeto13 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','controlcalidad/datos','V_CC1','#calidad','#pcalidad','','#cb_calidad','1100','','',//despues del 1100 se va a 900 que es corte automatico
'','CONTROL DE CALIDAD','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_calidad_',
'pg_pcalidad','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasarabarnizuv','3','controlcalidad/recibirindigo','#reportarerrordesdecontrolcalidad','','','','','','','','','','#errorcontrolcalidad','./errorcomponentes','','planeacion/recibirerrorrescompo');
/*
* var objeto13 = new grid('OrdenID','Nombre','Total','CatArticuloID','CatComponenteID','CatProcesoID','CatComponenteSTID','OrdArtSeqID','controlcalidad/datos','V_CC1','#calidad','#pcalidad','','#cb_calidad','1100','','',//despues del 1100 se va a 900 que es corte automatico
'','CONTROL DE CALIDAD','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,100,150,125,10,'','#jqg_calidad_',
'pg_pcalidad','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasarabarnizuv','3','controlcalidad/recibirindigo','#reportarerrordesdecontrolcalidad','','','','','','','','','#errorcontrolcalidad');

*/
prueba(objeto13.OrdenID,objeto13.Ordenamiento1,objeto13.OrdArtSeqID,objeto13.CatArticuloID,objeto13.Nombre,objeto13.StatusOrden,objeto13.Total,objeto13.Fecha,objeto13.url,objeto13.vista,objeto13.tabla,objeto13.paginador,objeto13.btnbrincar,objeto13.checkboxgral,
objeto13.status,objeto13.btnsubir,objeto13.btnbajar,objeto13.btnguardar,objeto13.caption,objeto13.urlbrincar,objeto13.urlcambiarpos,objeto13.btnguardarpre,
objeto13.btnerror,objeto13.anchosegundacolumna,objeto13.anchoterceracolumna,objeto13.anchosextacolumna,objeto13.pultimacolumna,objeto13.ultimacolumna,
objeto13.btnbricarcomponentes,objeto13.fila,objeto13.input,objeto13.ploter,objeto13.dialogos,objeto13.urlsortable,objeto13.pasaracontrolcalidad,objeto13.statusproceso,
objeto13.urlparambiarstatusproceso,objeto13.reportarerrordesdecontrolcalidad,objeto13.etiquedado,objeto13.etiquetado2,
objeto13.columna5,objeto13.cabiarstatusdeordenpp,objeto13.pasarapla,objeto13.porfacturar,objeto13.procesarcorteauto,objeto13.urlprocesocorteauto,
objeto13.condstatusempaque,objeto13.errorcomponente,objeto13.urlerrorcomponente,objeto13.regresarcomponente,objeto13.urlparareportarerror);

/*
* 
prueba(objeto13.OrdenID,objeto13.Ordenamiento1,objeto13.OrdArtSeqID,objeto13.CatArticuloID,objeto13.Nombre,objeto13.StatusOrden,objeto13.Total,objeto13.Fecha,objeto13.url,objeto13.vista,objeto13.tabla,objeto13.paginador,objeto13.btnbrincar,objeto13.checkboxgral,
objeto13.status,objeto13.btnsubir,objeto13.btnbajar,objeto13.btnguardar,objeto13.caption,objeto13.urlbrincar,objeto13.urlcambiarpos,objeto13.btnguardarpre,
objeto13.btnerror,objeto13.anchosegundacolumna,objeto13.anchoterceracolumna,objeto13.anchosextacolumna,objeto13.pultimacolumna,objeto13.ultimacolumna,
objeto13.btnbricarcomponentes,objeto13.fila,objeto13.input,objeto13.ploter,objeto13.dialogos,objeto13.urlsortable,objeto13.pasaracontrolcalidad,objeto13.statusproceso,
objeto13.urlparambiarstatusproceso,objeto13.reportarerrordesdecontrolcalidad,objeto13.etiquedado,objeto13.etiquetado2,
objeto13.columna5,objeto13.cabiarstatusdeordenpp,objeto13.pasarapla,objeto13.porfacturar,objeto13.procesarcorteauto,objeto13.urlprocesocorteauto,objeto13.errorcontrolcalidad);
* /
 */
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Corte Automatico Pendientes">
//grid modulo corte automatico

var objeto14 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../corte/datosauto','V_CorteAutomatico','#corteautomatico','#pcorteautomatico','','#cb_corteautomatico','200','','',
'','CORTE AUTOMÁTICO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_corteautomatico_',
'pg_pcorteautomatico','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#enviaralaminadodesdeautomatico','900','../controlcalidad/recibirindigo','','','','','','','','#brincarprocesarcomponente','../corte/cambiarstatuscomponente');


prueba(objeto14.OrdenID,objeto14.Ordenamiento1,objeto14.OrdArtSeqID,objeto14.CatArticuloID,objeto14.Nombre,objeto14.StatusOrden,objeto14.Total,objeto14.Fecha,objeto14.url,objeto14.vista,objeto14.tabla,objeto14.paginador,objeto14.btnbrincar,objeto14.checkboxgral,
objeto14.status,objeto14.btnsubir,objeto14.btnbajar,objeto14.btnguardar,objeto14.caption,objeto14.urlbrincar,objeto14.urlcambiarpos,objeto14.btnguardarpre,
objeto14.btnerror,objeto14.anchosegundacolumna,objeto14.anchoterceracolumna,objeto14.anchosextacolumna,objeto14.pultimacolumna,objeto14.ultimacolumna,
objeto14.btnbricarcomponentes,objeto14.fila,objeto14.input,objeto14.ploter,objeto14.dialogos,objeto14.urlsortable,objeto14.pasaracontrolcalidad,objeto14.statusproceso,
objeto14.urlparambiarstatusproceso,objeto14.reportarerrordesdecontrolcalidad,objeto14.etiquedado,objeto14.etiquetado2,objeto14.columna5,
objeto14.cabiarstatusdeordenpp,objeto14.pasarapla,objeto14.porfacturar,objeto14.procesarcorteauto,objeto14.urlprocesocorteauto);
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Laminado">
//grid modulo laminado

var objeto15 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','laminado/datos','V_Laminado_Mate','#laminado','#plaminado','','#cb_laminado','200','','',
'','LAMINADO MATE PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_laminado_',
'pg_plaminado','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','2','controlcalidad/recibirindigo','','','','','','','','#procesarlaminadoo','corte/cambiarstatuscomponente');//aqui me quede 
///aquiiii le cambie
//850
prueba(objeto15.OrdenID,objeto15.Ordenamiento1,objeto15.OrdArtSeqID,objeto15.CatArticuloID,objeto15.Nombre,objeto15.StatusOrden,objeto15.Total,objeto15.Fecha,objeto15.url,objeto15.vista,objeto15.tabla,objeto15.paginador,objeto15.btnbrincar,objeto15.checkboxgral,
objeto15.status,objeto15.btnsubir,objeto15.btnbajar,objeto15.btnguardar,objeto15.caption,objeto15.urlbrincar,objeto15.urlcambiarpos,objeto15.btnguardarpre,
objeto15.btnerror,objeto15.anchosegundacolumna,objeto15.anchoterceracolumna,objeto15.anchosextacolumna,objeto15.pultimacolumna,objeto15.ultimacolumna,
objeto15.btnbricarcomponentes,objeto15.fila,objeto15.input,objeto15.ploter,objeto15.dialogos,objeto15.urlsortable,objeto15.pasaracontrolcalidad,objeto15.statusproceso,
objeto15.urlparambiarstatusproceso,objeto15.reportarerrordesdecontrolcalidad,objeto15.etiquedado,objeto15.etiquetado2,
objeto15.columna5,objeto15.cabiarstatusdeordenpp,objeto15.pasarapla,objeto15.porfacturar,objeto15.procesarcorteauto,objeto15.urlprocesocorteauto);

//grid laminado mate procesados laminado/datosmateprocesados
var objeto85 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','laminado/datos','V_Laminado_Mate_Procesados','#laminadopro','#plaminadopro','','#cb_laminadopro','850','','',
'','LAMINADO MATE EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_laminadopro_',
'pg_plaminadopro','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#enviarcalidadlaminado','2','controlcalidad/recibirindigo','','','','','','','','','','','#errorlaminado','errorcomponentes','','planeacion/recibirerrorrescompo');//aqui me quede 
///aquiiii le cambie
//850
prueba(objeto85.OrdenID,objeto85.Ordenamiento1,objeto85.OrdArtSeqID,objeto85.CatArticuloID,objeto85.Nombre,objeto85.StatusOrden,objeto85.Total,objeto85.Fecha,objeto85.url,objeto85.vista,objeto85.tabla,objeto85.paginador,objeto85.btnbrincar,objeto85.checkboxgral,
objeto85.status,objeto85.btnsubir,objeto85.btnbajar,objeto85.btnguardar,objeto85.caption,objeto85.urlbrincar,objeto85.urlcambiarpos,objeto85.btnguardarpre,
objeto85.btnerror,objeto85.anchosegundacolumna,objeto85.anchoterceracolumna,objeto85.anchosextacolumna,objeto85.pultimacolumna,objeto85.ultimacolumna,
objeto85.btnbricarcomponentes,objeto85.fila,objeto85.input,objeto85.ploter,objeto85.dialogos,objeto85.urlsortable,objeto85.pasaracontrolcalidad,objeto85.statusproceso,
objeto85.urlparambiarstatusproceso,objeto85.reportarerrordesdecontrolcalidad,objeto85.etiquedado,objeto85.etiquetado2,
objeto85.columna5,objeto85.cabiarstatusdeordenpp,objeto85.pasarapla,objeto85.porfacturar,objeto85.procesarcorteauto,objeto85.urlprocesocorteauto,
objeto85.condstatusempaque,objeto85.errorcomponente,objeto85.urlerrorcomponente,objeto85.regresarcomponente,objeto85.urlparareportarerror);

//grid laminado brillante ../laminado/datosbrillanteproces

var objeto38 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../laminado/datosbrillante','V_Laminado_Brillante_Procesados','#laminadobpro','#plaminadobpro','','#cb_laminadobpro','850','','',
'','LAMINADO BRILLANTE EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_laminadobpro_',
'pg_plaminadobpro','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#brillantesiguiente','3','../controlcalidad/recibirindigo','','','','','','','','','','',
'#errorlaminadobrillante','../errorcomponentes','','../planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objeto38.OrdenID,objeto38.Ordenamiento1,objeto38.OrdArtSeqID,objeto38.CatArticuloID,objeto38.Nombre,objeto38.StatusOrden,objeto38.Total,objeto38.Fecha,objeto38.url,objeto38.vista,objeto38.tabla,objeto38.paginador,objeto38.btnbrincar,objeto38.checkboxgral,
objeto38.status,objeto38.btnsubir,objeto38.btnbajar,objeto38.btnguardar,objeto38.caption,objeto38.urlbrincar,objeto38.urlcambiarpos,objeto38.btnguardarpre,
objeto38.btnerror,objeto38.anchosegundacolumna,objeto38.anchoterceracolumna,objeto38.anchosextacolumna,objeto38.pultimacolumna,objeto38.ultimacolumna,
objeto38.btnbricarcomponentes,objeto38.fila,objeto38.input,objeto38.ploter,objeto38.dialogos,objeto38.urlsortable,objeto38.pasaracontrolcalidad,objeto38.statusproceso,
objeto38.urlparambiarstatusproceso,objeto38.reportarerrordesdecontrolcalidad,objeto38.etiquedado,objeto38.etiquetado2,
objeto38.columna5,objeto38.cabiarstatusdeordenpp,objeto38.pasarapla,objeto38.porfacturar,objeto38.procesarcorteauto,
objeto38.urlprocesocorteauto,objeto38.condstatusempaque,
objeto38.errorcomponente,objeto38.urlerrorcomponente,objeto38.regresarcomponente,objeto38.urlparareportarerror);

//grid laminado brillante procesados

var objeto86 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../laminado/datosbrillante','V_Laminado_Brillante','#laminadob','#plaminadob','','#cb_laminadob','200','','',
'','LAMINADO BRILLANTE PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_laminadob_',
'pg_plaminadob','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','3','../controlcalidad/recibirindigo','','','','','','','','#procesarlaminadob','../corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objeto86.OrdenID,objeto86.Ordenamiento1,objeto86.OrdArtSeqID,objeto86.CatArticuloID,objeto86.Nombre,objeto86.StatusOrden,objeto86.Total,objeto86.Fecha,objeto86.url,objeto86.vista,objeto86.tabla,objeto86.paginador,objeto86.btnbrincar,objeto86.checkboxgral,
objeto86.status,objeto86.btnsubir,objeto86.btnbajar,objeto86.btnguardar,objeto86.caption,objeto86.urlbrincar,objeto86.urlcambiarpos,objeto86.btnguardarpre,
objeto86.btnerror,objeto86.anchosegundacolumna,objeto86.anchoterceracolumna,objeto86.anchosextacolumna,objeto86.pultimacolumna,objeto86.ultimacolumna,
objeto86.btnbricarcomponentes,objeto86.fila,objeto86.input,objeto86.ploter,objeto86.dialogos,objeto86.urlsortable,objeto86.pasaracontrolcalidad,objeto86.statusproceso,
objeto86.urlparambiarstatusproceso,objeto86.reportarerrordesdecontrolcalidad,objeto86.etiquedado,objeto86.etiquetado2,
objeto86.columna5,objeto86.cabiarstatusdeordenpp,objeto86.pasarapla,objeto86.porfacturar,objeto86.procesarcorteauto,objeto86.urlprocesocorteauto);


//
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Control de calidad Laminado">
//grid control de calidad de laminado

var objeto16 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../laminado/ccalidad','V_Laminado_Control_Calidad','#laminadocontrol','#plaminadocontrol','','#cb_laminadocontrol','200','','',
'','CONTROL DE CALIDAD LAMINADO','../ordenes/subirresgitro','../ordenes/cambiarposicion','#m13','#m40',300,600,150,125,.5,'','#jqg_laminadocontrol_',
'pg_plaminadocontrol','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#enviaracortemanual','5','../controlcalidad/recibirindigo','','','','','','','','','','','#errorcontrolcalidad','../errorcomponentes','','../planeacion/recibirerrorrescompo');


prueba(objeto16.OrdenID,objeto16.Ordenamiento1,objeto16.OrdArtSeqID,objeto16.CatArticuloID,objeto16.Nombre,objeto16.StatusOrden,objeto16.Total,objeto16.Fecha,objeto16.url,objeto16.vista,objeto16.tabla,objeto16.paginador,objeto16.btnbrincar,objeto16.checkboxgral,
objeto16.status,objeto16.btnsubir,objeto16.btnbajar,objeto16.btnguardar,objeto16.caption,objeto16.urlbrincar,objeto16.urlcambiarpos,objeto16.btnguardarpre,
objeto16.btnerror,objeto16.anchosegundacolumna,objeto16.anchoterceracolumna,objeto16.anchosextacolumna,objeto16.pultimacolumna,objeto16.ultimacolumna,
objeto16.btnbricarcomponentes,objeto16.fila,objeto16.input,objeto16.ploter,objeto16.dialogos,objeto16.urlsortable,objeto16.pasaracontrolcalidad,objeto16.statusproceso,
objeto16.urlparambiarstatusproceso,objeto16.reportarerrordesdecontrolcalidad,objeto16.etiquedado,objeto16.etiquetado2,
objeto16.columna5,objeto16.cabiarstatusdeordenpp,objeto16.pasarapla,objeto16.porfacturar,objeto16.procesarcorteauto,
objeto16.urlprocesocorteauto,objeto16.condstatusempaque,objeto16.errorcomponente,objeto16.urlerrorcomponente,objeto16.regresarcomponente,objeto16.urlparareportarerror);
 
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Corte Manual">
//grid modulo corte manual

var objeto17 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../corte/datosmanual','V_Corte_Manual','#cortemanual','#pcortemanual','','#cb_cortemanual','200','','',//viene desde barniz uv 
'','CORTE MANUAL PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_cortemanual_',
'pg_pcortemanual','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','3','../controlcalidad/recibirindigo','#reportarerrordesdecontrolcalidad','','','','','','','#procesarcortemanual','../corte/cambiarstatuscomponente');


prueba(objeto17.OrdenID,objeto17.Ordenamiento1,objeto17.OrdArtSeqID,objeto17.CatArticuloID,objeto17.Nombre,objeto17.StatusOrden,objeto17.Total,objeto17.Fecha,objeto17.url,objeto17.vista,objeto17.tabla,objeto17.paginador,objeto17.btnbrincar,objeto17.checkboxgral,
objeto17.status,objeto17.btnsubir,objeto17.btnbajar,objeto17.btnguardar,objeto17.caption,objeto17.urlbrincar,objeto17.urlcambiarpos,objeto17.btnguardarpre,
objeto17.btnerror,objeto17.anchosegundacolumna,objeto17.anchoterceracolumna,objeto17.anchosextacolumna,objeto17.pultimacolumna,objeto17.ultimacolumna,
objeto17.btnbricarcomponentes,objeto17.fila,objeto17.input,objeto17.ploter,objeto17.dialogos,objeto17.urlsortable,objeto17.pasaracontrolcalidad,objeto17.statusproceso,
objeto17.urlparambiarstatusproceso,objeto17.reportarerrordesdecontrolcalidad,objeto17.etiquedado,objeto17.etiquetado2,
objeto17.columna5,objeto17.cabiarstatusdeordenpp,objeto17.pasarapla,objeto17.porfacturar,objeto17.procesarcorteauto,objeto17.urlprocesocorteauto);

//grid corte manual procesados ../corte/datosmanualprocess

var objeto87 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../corte/datosmanual','V_Corte_Manual_Procesados','#cortemanualpro','#pcortemanualpro','','#cb_cortemanualpro','900','','',//viene desde barniz uv 
'','CORTE MANUAL EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_cortemanualpro_',
'pg_pcortemanualpro','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasaralaminadom','3','../controlcalidad/recibirindigo','#reportarerrordesdecontrolcalidad','','','','','','','','','','#errorcortemanual','../errorcomponentes','','../planeacion/recibirerrorrescompo');


prueba(objeto87.OrdenID,objeto87.Ordenamiento1,objeto87.OrdArtSeqID,objeto87.CatArticuloID,objeto87.Nombre,objeto87.StatusOrden,objeto87.Total,objeto87.Fecha,objeto87.url,objeto87.vista,objeto87.tabla,objeto87.paginador,objeto87.btnbrincar,objeto87.checkboxgral,
objeto87.status,objeto87.btnsubir,objeto87.btnbajar,objeto87.btnguardar,objeto87.caption,objeto87.urlbrincar,objeto87.urlcambiarpos,objeto87.btnguardarpre,
objeto87.btnerror,objeto87.anchosegundacolumna,objeto87.anchoterceracolumna,objeto87.anchosextacolumna,objeto87.pultimacolumna,objeto87.ultimacolumna,
objeto87.btnbricarcomponentes,objeto87.fila,objeto87.input,objeto87.ploter,objeto87.dialogos,objeto87.urlsortable,objeto87.pasaracontrolcalidad,objeto87.statusproceso,
objeto87.urlparambiarstatusproceso,objeto87.reportarerrordesdecontrolcalidad,objeto87.etiquedado,objeto87.etiquetado2,
objeto87.columna5,objeto87.cabiarstatusdeordenpp,objeto87.pasarapla,objeto87.porfacturar,objeto87.procesarcorteauto,
objeto87.urlprocesocorteauto,objeto87.condstatusempaque,objeto87.errorcomponente,objeto87.urlerrorcomponente,objeto87.regresarcomponente,objeto87.urlparareportarerror);


//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Engrapado">

//grid modulo Engrapado

var objeto18 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','engrapado/datosengrap','V_Engrapado','#engrapado','#pengrapado','','#cb_engrapado','6','','',
'','ENGRAPADO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,125,.5,'','#jqg_engrapado_',
'pg_pengrapado','../prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','3','controlcalidad/recibirindigo','','','','','','','','#pasararefinado','corte/cambiarstatuscomponente');


prueba(objeto18.OrdenID,objeto18.Ordenamiento1,objeto18.OrdArtSeqID,objeto18.CatArticuloID,objeto18.Nombre,objeto18.StatusOrden,objeto18.Total,objeto18.Fecha,objeto18.url,objeto18.vista,objeto18.tabla,objeto18.paginador,objeto18.btnbrincar,objeto18.checkboxgral,
objeto18.status,objeto18.btnsubir,objeto18.btnbajar,objeto18.btnguardar,objeto18.caption,objeto18.urlbrincar,objeto18.urlcambiarpos,objeto18.btnguardarpre,
objeto18.btnerror,objeto18.anchosegundacolumna,objeto18.anchoterceracolumna,objeto18.anchosextacolumna,objeto18.pultimacolumna,objeto18.ultimacolumna,
objeto18.btnbricarcomponentes,objeto18.fila,objeto18.input,objeto18.ploter,objeto18.dialogos,objeto18.urlsortable,objeto18.pasaracontrolcalidad,objeto18.statusproceso,
objeto18.urlparambiarstatusproceso,objeto18.reportarerrordesdecontrolcalidad,objeto18.etiquedado,objeto18.etiquetado2,
objeto18.columna5,objeto18.cabiarstatusdeordenpp,objeto18.pasarapla,objeto18.porfacturar,objeto18.procesarcorteauto,objeto18.urlprocesocorteauto);


//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Barniz UV Pendientes">
//grid modulo Barniz UV

var objeto19 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','barnizuv/datosbarniz','V_BarnizUV','#barnizuv','#pbarnizuv','','#cb_barnizuv','1150','','',//aqui se le cambia es status del proceso 900
'','BANIZ UV PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_calidad_',
'pg_pbarnizuv','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','1150','controlcalidad/recibirindigo','#reportarerrordesdecontrolcalidad','','','','','','','#procesarbarniz','corte/cambiarstatuscomponente');//pendiente el status 


prueba(objeto19.OrdenID,objeto19.Ordenamiento1,objeto19.OrdArtSeqID,objeto19.CatArticuloID,objeto19.Nombre,objeto19.StatusOrden,objeto19.Total,objeto19.Fecha,objeto19.url,objeto19.vista,objeto19.tabla,objeto19.paginador,objeto19.btnbrincar,objeto19.checkboxgral,
objeto19.status,objeto19.btnsubir,objeto19.btnbajar,objeto19.btnguardar,objeto19.caption,objeto19.urlbrincar,objeto19.urlcambiarpos,objeto19.btnguardarpre,
objeto19.btnerror,objeto19.anchosegundacolumna,objeto19.anchoterceracolumna,objeto19.anchosextacolumna,objeto19.pultimacolumna,objeto19.ultimacolumna,
objeto19.btnbricarcomponentes,objeto19.fila,objeto19.input,objeto19.ploter,objeto19.dialogos,objeto19.urlsortable,objeto19.pasaracontrolcalidad,objeto19.statusproceso,
objeto19.urlparambiarstatusproceso,objeto19.reportarerrordesdecontrolcalidad,objeto19.etiquedado,objeto19.etiquetado2,
objeto19.columna5,objeto19.cabiarstatusdeordenpp,objeto19.pasarapla,objeto19.porfacturar,objeto19.procesarcorteauto,objeto19.urlprocesocorteauto);


//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Engrapado wireo">
//grid engrapado wire-o


var objeto25 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','engrapado/datoswireo','V_Wireo','#wire','#pwire','','#cb_wire','6','','',
'','ENGRAPADO WIRE-O PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_wire_',
'pg_pwire','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','4','controlcalidad/recibirindigo','','','','','','','','#siguiente','corte/cambiarstatuscomponente');


prueba(objeto25.OrdenID,objeto25.Ordenamiento1,objeto25.OrdArtSeqID,objeto25.CatArticuloID,objeto25.Nombre,objeto25.StatusOrden,objeto25.Total,objeto25.Fecha,objeto25.url,objeto25.vista,objeto25.tabla,objeto25.paginador,objeto25.btnbrincar,objeto25.checkboxgral,
objeto25.status,objeto25.btnsubir,objeto25.btnbajar,objeto25.btnguardar,objeto25.caption,objeto25.urlbrincar,objeto25.urlcambiarpos,objeto25.btnguardarpre,
objeto25.btnerror,objeto25.anchosegundacolumna,objeto25.anchoterceracolumna,objeto25.anchosextacolumna,objeto25.pultimacolumna,objeto25.ultimacolumna,
objeto25.btnbricarcomponentes,objeto25.fila,objeto25.input,objeto25.ploter,objeto25.dialogos,objeto25.urlsortable,objeto25.pasaracontrolcalidad,objeto25.statusproceso,
objeto25.urlparambiarstatusproceso,objeto25.reportarerrordesdecontrolcalidad,objeto25.etiquedado,objeto25.etiquetado2,
objeto25.columna5,objeto25.cabiarstatusdeordenpp,objeto25.pasarapla,objeto25.porfacturar,objeto25.procesarcorteauto,objeto25.urlprocesocorteauto);


//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Canvas">
//grid canvax montado

var objeto22 = new grid('OrdenID','Nombre','Total','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../canvas/datosmontado','V_Canvas_Pendientes','#montado','#pmontado','','#cb_montado','6','','',
'','CANVAS MONTADO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,100,150,170,.5,'','#jqg_montado_',
'pg_pmontado','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#enviarempaaquecanvas','2','../controlcalidad/recibirindigo','','','','','','','','','','',
'#errormontado','../errorcomponentes');


prueba(objeto22.OrdenID,objeto22.Ordenamiento1,objeto22.OrdArtSeqID,objeto22.CatArticuloID,objeto22.Nombre,objeto22.StatusOrden,objeto22.Total,objeto22.Fecha,objeto22.url,objeto22.vista,objeto22.tabla,objeto22.paginador,objeto22.btnbrincar,objeto22.checkboxgral,
objeto22.status,objeto22.btnsubir,objeto22.btnbajar,objeto22.btnguardar,objeto22.caption,objeto22.urlbrincar,objeto22.urlcambiarpos,objeto22.btnguardarpre,
objeto22.btnerror,objeto22.anchosegundacolumna,objeto22.anchoterceracolumna,objeto22.anchosextacolumna,objeto22.pultimacolumna,objeto22.ultimacolumna,
objeto22.btnbricarcomponentes,objeto22.fila,objeto22.input,objeto22.ploter,objeto22.dialogos,objeto22.urlsortable,objeto22.pasaracontrolcalidad,objeto22.statusproceso,
objeto22.urlparambiarstatusproceso,objeto22.reportarerrordesdecontrolcalidad,objeto22.etiquedado,objeto22.etiquetado2,
objeto22.columna5,objeto22.cabiarstatusdeordenpp,objeto22.pasarapla,objeto22.porfacturar,objeto22.procesarcorteauto,objeto22.urlprocesocorteauto,
objeto22.condstatusempaque,objeto22.errorcomponente,objeto22.urlerrorcomponente);

// grid canvax empacado

var objeto23 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Total','OrdArtSeqID','../canvas/datosenpacado','V_CanvasEmpacado','#empacado','#pempacado','','#cb_empacado','6','','',
'','CANVAS EMPACADO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_empacado_',
'pg_pempacado','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasenvios','2','../controlcalidad/recibirindigo','','','','','','','','','');


prueba(objeto23.OrdenID,objeto23.Ordenamiento1,objeto23.OrdArtSeqID,objeto23.CatArticuloID,objeto23.Nombre,objeto23.StatusOrden,objeto23.Total,objeto23.Fecha,objeto23.url,objeto23.vista,objeto23.tabla,objeto23.paginador,objeto23.btnbrincar,objeto23.checkboxgral,
objeto23.status,objeto23.btnsubir,objeto23.btnbajar,objeto23.btnguardar,objeto23.caption,objeto23.urlbrincar,objeto23.urlcambiarpos,objeto23.btnguardarpre,
objeto23.btnerror,objeto23.anchosegundacolumna,objeto23.anchoterceracolumna,objeto23.anchosextacolumna,objeto23.pultimacolumna,objeto23.ultimacolumna,
objeto23.btnbricarcomponentes,objeto23.fila,objeto23.input,objeto23.ploter,objeto23.dialogos,objeto23.urlsortable,objeto23.pasaracontrolcalidad,objeto23.statusproceso,
objeto23.urlparambiarstatusproceso,objeto23.reportarerrordesdecontrolcalidad,objeto23.etiquedado,objeto23.etiquetado2,
objeto23.columna5,objeto23.cabiarstatusdeordenpp,objeto23.pasarapla,objeto23.porfacturar,objeto23.procesarcorteauto,objeto23.urlprocesocorteauto);

 //grid canbax enmarcado
 var objeto24 = new grid('OrdenID','Desc_Articulo','Total','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','prensa/componentesprocesados','V_Prensa_Proceso_Indigo','#enmarcado','#penmarcado','','#cb_enmarcado','6','','',
'','CANVAS ENMARCADO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,100,150,170,.5,'','#jqg_enmarcado_',
'pg_penmarcado','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#vhvv','2','','','','','','','','','','','','#errorenmarcado','../errorcomponentes');


prueba(objeto24.OrdenID,objeto24.Ordenamiento1,objeto24.OrdArtSeqID,objeto24.CatArticuloID,objeto24.Nombre,objeto24.StatusOrden,objeto24.Total,objeto24.Fecha,objeto24.url,objeto24.vista,objeto24.tabla,objeto24.paginador,objeto24.btnbrincar,objeto24.checkboxgral,
objeto24.status,objeto24.btnsubir,objeto24.btnbajar,objeto24.btnguardar,objeto24.caption,objeto24.urlbrincar,objeto24.urlcambiarpos,objeto24.btnguardarpre,
objeto24.btnerror,objeto24.anchosegundacolumna,objeto24.anchoterceracolumna,objeto24.anchosextacolumna,objeto24.pultimacolumna,objeto24.ultimacolumna,
objeto24.btnbricarcomponentes,objeto24.fila,objeto24.input,objeto24.ploter,objeto24.dialogos,objeto24.urlsortable,objeto24.pasaracontrolcalidad,objeto24.statusproceso,
objeto24.urlparambiarstatusproceso,objeto24.reportarerrordesdecontrolcalidad,objeto24.etiquedado,objeto24.etiquetado2,
objeto24.columna5,objeto24.cabiarstatusdeordenpp,objeto24.pasarapla,objeto24.porfacturar,objeto24.procesarcorteauto,objeto24.urlprocesocorteauto,
objeto24.condstatusempaque,objeto24.errorcomponente,objeto24.urlerrorcomponente);


//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Administracion Ordenes por pagar">
    var objeto20 = new grid('OrdenID','','Cliente','OrdSTID','Facturado','FechaHoraEmision','MonTotal','FechaHoraEmision','../ajaxadministracion/porpagar','ordenesporpagar','#ordenesporpagar','#pordenesporpagar','','#cb_ordenesporpagar','6','','',
'','ORDENES POR PAGAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,200,50,100,100,100,'#jqg_ordenesporpagar_',
'pg_ordenesporpagar','','../ordenes/detalle','ordenes/sortable','','2','','#opp','','','','../ajaxadministracion/pasarapagado','','','','','','','','','','','','','#cancelarorden');//70



prueba(objeto20.OrdenID,objeto20.Ordenamiento1,objeto20.OrdArtSeqID,objeto20.CatArticuloID,objeto20.Nombre,objeto20.StatusOrden,objeto20.Total,objeto20.Fecha,objeto20.url,objeto20.vista,objeto20.tabla,objeto20.paginador,objeto20.btnbrincar,objeto20.checkboxgral,
objeto20.status,objeto20.btnsubir,objeto20.btnbajar,objeto20.btnguardar,objeto20.caption,objeto20.urlbrincar,objeto20.urlcambiarpos,objeto20.btnguardarpre,
objeto20.btnerror,objeto20.anchosegundacolumna,objeto20.anchoterceracolumna,objeto20.anchosextacolumna,objeto20.pultimacolumna,objeto20.ultimacolumna,
objeto20.btnbricarcomponentes,objeto20.fila,objeto20.input,objeto20.ploter,objeto20.dialogos,objeto20.urlsortable,objeto20.pasaracontrolcalidad,objeto20.statusproceso,
objeto20.urlparambiarstatusproceso,objeto20.reportarerrordesdecontrolcalidad,objeto20.etiquedado,objeto20.etiquetado2,objeto20.columna5,
objeto20.cabiarstatusdeordenpp,objeto20.pasarapla,objeto20.porfacturar,objeto20.procesarcorteauto,objeto20.urlprocesocorteauto,
objeto20.condstatusempaque,objeto20.errorcomponente,objeto20.urlerrorcomponente,objeto20.regresarcomponente,objeto20.urlparareportarerror,objeto20.guia,objeto20.etiquetasenviosfin
,objeto20.regresarapreprensa,objeto20.cancelarorden);

//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Admistracion ordenes pagadas">
//grid ordenes pagadas

 
  var objeto21 = new grid('OrdenID','Padre','Cliente','OrdSTID','Facturado','FechaHoraEmision','MonTotal','FechaHoraEmision','../ajaxadministracion/pagadas','OrdenesPagadas','#ordenespagadas','#pordenespagadas','','#cb_ordenespagadas','6','','',
'','ORDENES PAGADAS','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',770,200,50,100,100,100,'#jqg_ordenespagadas_',
'pg_pordenespagadas','','../ordenes/detalle','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan','holaaaaaaaaaaaporfacturar','','','','','','','','','','','#cancelarorden2');


prueba(objeto21.OrdenID,objeto21.Ordenamiento1,objeto21.OrdArtSeqID,objeto21.CatArticuloID,objeto21.Nombre,objeto21.StatusOrden,objeto21.Total,objeto21.Fecha,objeto21.url,objeto21.vista,objeto21.tabla,objeto21.paginador,objeto21.btnbrincar,objeto21.checkboxgral,
objeto21.status,objeto21.btnsubir,objeto21.btnbajar,objeto21.btnguardar,objeto21.caption,objeto21.urlbrincar,objeto21.urlcambiarpos,objeto21.btnguardarpre,
objeto21.btnerror,objeto21.anchosegundacolumna,objeto21.anchoterceracolumna,objeto21.anchosextacolumna,objeto21.pultimacolumna,objeto21.ultimacolumna,
objeto21.btnbricarcomponentes,objeto21.fila,objeto21.input,objeto21.ploter,objeto21.dialogos,objeto21.urlsortable,objeto21.pasaracontrolcalidad,objeto21.statusproceso,
objeto21.urlparambiarstatusproceso,objeto21.reportarerrordesdecontrolcalidad,objeto21.etiquedado,objeto21.etiquetado2,objeto21.columna5,
objeto21.cabiarstatusdeordenpp,objeto21.pasarapla,objeto21.porfacturar,objeto21.procesarcorteauto,objeto21.urlprocesocorteauto,
objeto21.condstatusempaque,objeto21.errorcomponente,objeto21.urlerrorcomponente,objeto21.regresarcomponente,objeto21.urlparareportarerror,objeto21.guia,objeto21.etiquetasenviosfin
,objeto21.regresarapreprensa,objeto21.cancelarorden);

//grid para mostrar ordenes sin PO
  var sinpo = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision','MonTotal','FechaHoraEmision','../ajaxadministracion/ordenessinpo','ordenespagadas','#ordenespagadasinpo','#pordenespagadasinpo','','#cb_ordenespagadasinpo','6','','',
'','ORDENES COSTCO SIN PO','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',770,200,50,100,100,100,'#jqg_ordenespagadasinpo_',
'pg_pordenespagadasinpo','','../ordenes/detalle','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan','holaaaaaaaaaaaporfacturar','','','','','','','','','','','#cancelarorden2');


prueba(sinpo.OrdenID,sinpo.Ordenamiento1,sinpo.OrdArtSeqID,sinpo.CatArticuloID,sinpo.Nombre,sinpo.StatusOrden,sinpo.Total,sinpo.Fecha,sinpo.url,sinpo.vista,sinpo.tabla,sinpo.paginador,sinpo.btnbrincar,sinpo.checkboxgral,
sinpo.status,sinpo.btnsubir,sinpo.btnbajar,sinpo.btnguardar,sinpo.caption,sinpo.urlbrincar,sinpo.urlcambiarpos,sinpo.btnguardarpre,
sinpo.btnerror,sinpo.anchosegundacolumna,sinpo.anchoterceracolumna,sinpo.anchosextacolumna,sinpo.pultimacolumna,sinpo.ultimacolumna,
sinpo.btnbricarcomponentes,sinpo.fila,sinpo.input,sinpo.ploter,sinpo.dialogos,sinpo.urlsortable,sinpo.pasaracontrolcalidad,sinpo.statusproceso,
sinpo.urlparambiarstatusproceso,sinpo.reportarerrordesdecontrolcalidad,sinpo.etiquedado,sinpo.etiquetado2,sinpo.columna5,
sinpo.cabiarstatusdeordenpp,sinpo.pasarapla,sinpo.porfacturar,sinpo.procesarcorteauto,sinpo.urlprocesocorteauto,
sinpo.condstatusempaque,sinpo.errorcomponente,sinpo.urlerrorcomponente,sinpo.regresarcomponente,sinpo.urlparareportarerror,sinpo.guia,sinpo.etiquetasenviosfin
,sinpo.regresarapreprensa,sinpo.cancelarorden);




//</editor-fold>
// <editor-fold defaultstate="collapsed" desc="Contabilidad">
//inicia lo de kike
var FactImprimartsi = new grid('OrdenID','NoOrden','Cliente','OrdST','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/imprimartsi','imprimartsi','#imprimartsi','#pimprimartsi','','#cb_imprimartsi','6','','',
'','ORDENES FACTURADAS','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_facturar_',
'pg_imprimartsi','','','ordenes/sortable','#pasaralaminado','','','','','','','','','#pasarafacturar');//pendiente revision


prueba(FactImprimartsi.OrdenID,FactImprimartsi.Ordenamiento1,FactImprimartsi.OrdArtSeqID,FactImprimartsi.CatArticuloID,FactImprimartsi.Nombre,FactImprimartsi.StatusOrden,FactImprimartsi.Total,FactImprimartsi.Fecha,FactImprimartsi.url,FactImprimartsi.vista,FactImprimartsi.tabla,FactImprimartsi.paginador,FactImprimartsi.btnbrincar,FactImprimartsi.checkboxgral,
FactImprimartsi.status,FactImprimartsi.btnsubir,FactImprimartsi.btnbajar,FactImprimartsi.btnguardar,FactImprimartsi.caption,FactImprimartsi.urlbrincar,FactImprimartsi.urlcambiarpos,FactImprimartsi.btnguardarpre,
FactImprimartsi.btnerror,FactImprimartsi.anchosegundacolumna,FactImprimartsi.anchoterceracolumna,FactImprimartsi.anchosextacolumna,FactImprimartsi.pultimacolumna,FactImprimartsi.ultimacolumna,
FactImprimartsi.btnbricarcomponentes,FactImprimartsi.fila,FactImprimartsi.input,FactImprimartsi.ploter,FactImprimartsi.dialogos,FactImprimartsi.urlsortable,FactImprimartsi.pasaracontrolcalidad,FactImprimartsi.statusproceso,
FactImprimartsi.urlparambiarstatusproceso,FactImprimartsi.reportarerrordesdecontrolcalidad,FactImprimartsi.etiquedado,FactImprimartsi.etiquetado2,FactImprimartsi.columna5,
FactImprimartsi.cabiarstatusdeordenpp,FactImprimartsi.pasarapla,FactImprimartsi.porfacturar);



    var FactImprimartNo = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/imprimartno','imprimartno','#imprimartno','#pimprimartno','','#cb_imprimartno','6','','',
'','ORDENES POR FACTURAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_ordenespagadas_',
'pg_pimprimartno','','','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan555','#pasararemision','','');


prueba(FactImprimartNo.OrdenID,FactImprimartNo.Ordenamiento1,FactImprimartNo.OrdArtSeqID,FactImprimartNo.CatArticuloID,FactImprimartNo.Nombre,FactImprimartNo.StatusOrden,FactImprimartNo.Total,FactImprimartNo.Fecha,FactImprimartNo.url,FactImprimartNo.vista,FactImprimartNo.tabla,FactImprimartNo.paginador,FactImprimartNo.btnbrincar,FactImprimartNo.checkboxgral,
FactImprimartNo.status,FactImprimartNo.btnsubir,FactImprimartNo.btnbajar,FactImprimartNo.btnguardar,FactImprimartNo.caption,FactImprimartNo.urlbrincar,FactImprimartNo.urlcambiarpos,FactImprimartNo.btnguardarpre,
FactImprimartNo.btnerror,FactImprimartNo.anchosegundacolumna,FactImprimartNo.anchoterceracolumna,FactImprimartNo.anchosextacolumna,FactImprimartNo.pultimacolumna,FactImprimartNo.ultimacolumna,
FactImprimartNo.btnbricarcomponentes,FactImprimartNo.fila,FactImprimartNo.input,FactImprimartNo.ploter,FactImprimartNo.dialogos,FactImprimartNo.urlsortable,FactImprimartNo.pasaracontrolcalidad,FactImprimartNo.statusproceso,
FactImprimartNo.urlparambiarstatusproceso,FactImprimartNo.reportarerrordesdecontrolcalidad,FactImprimartNo.etiquedado,FactImprimartNo.etiquetado2,FactImprimartNo.columna5,
FactImprimartNo.cabiarstatusdeordenpp,FactImprimartNo.pasarapla,FactImprimartNo.porfacturar,FactImprimartNo.procesarcorteauto,FactImprimartNo.urlprocesocorteauto);

    var FactImprimartMostadorSi = new grid('OrdenID','NoOrden','Cliente','OrdST','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/imprimartmostradorsi','imprimartmostradorsi','#imprimartmostradorsi','#pimprimartmostradorsi','','#cb_imprimartmostradorsi','6','','',
'','ORDENES FACTURADAS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',50,150,120,350,50,50,'#jqg_imprimartmostradorsi_',
'pg_imprimartmostradorsi','','','ordenes/sortable','#pasaralaminado','2','','','','',70);//pendiente de revisar


prueba(FactImprimartMostadorSi.OrdenID,FactImprimartMostadorSi.Ordenamiento1,FactImprimartMostadorSi.OrdArtSeqID,FactImprimartMostadorSi.CatArticuloID,FactImprimartMostadorSi.Nombre,FactImprimartMostadorSi.StatusOrden,FactImprimartMostadorSi.Total,FactImprimartMostadorSi.Fecha,FactImprimartMostadorSi.url,FactImprimartMostadorSi.vista,FactImprimartMostadorSi.tabla,FactImprimartMostadorSi.paginador,FactImprimartMostadorSi.btnbrincar,FactImprimartMostadorSi.checkboxgral,
FactImprimartMostadorSi.status,FactImprimartMostadorSi.btnsubir,FactImprimartMostadorSi.btnbajar,FactImprimartMostadorSi.btnguardar,FactImprimartMostadorSi.caption,FactImprimartMostadorSi.urlbrincar,FactImprimartMostadorSi.urlcambiarpos,FactImprimartMostadorSi.btnguardarpre,
FactImprimartMostadorSi.btnerror,FactImprimartMostadorSi.anchosegundacolumna,FactImprimartMostadorSi.anchoterceracolumna,FactImprimartMostadorSi.anchosextacolumna,FactImprimartMostadorSi.pultimacolumna,FactImprimartMostadorSi.ultimacolumna,
FactImprimartMostadorSi.btnbricarcomponentes,FactImprimartMostadorSi.fila,FactImprimartMostadorSi.input,FactImprimartMostadorSi.ploter,FactImprimartMostadorSi.dialogos,FactImprimartMostadorSi.urlsortable,FactImprimartMostadorSi.pasaracontrolcalidad,FactImprimartMostadorSi.statusproceso,
FactImprimartMostadorSi.urlparambiarstatusproceso,FactImprimartMostadorSi.reportarerrordesdecontrolcalidad,FactImprimartMostadorSi.etiquedado,FactImprimartMostadorSi.etiquetado2,FactImprimartMostadorSi.columna5);

var FactImprimartMostadorNo = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/imprimartmostradorno','imprimartmostradorsno','#imprimartmostradorno','#pimprimartmostradorno','','#cb_imprimartmostradorno','6','','',
'','ORDENES POR FACTURAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_ordenespagadas_',
'pg_pimprimartmostradorno','','','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan55','#pasararemision2','','');


prueba(FactImprimartMostadorNo.OrdenID,FactImprimartMostadorNo.Ordenamiento1,FactImprimartMostadorNo.OrdArtSeqID,FactImprimartMostadorNo.CatArticuloID,FactImprimartMostadorNo.Nombre,FactImprimartMostadorNo.StatusOrden,FactImprimartMostadorNo.Total,FactImprimartMostadorNo.Fecha,FactImprimartMostadorNo.url,FactImprimartMostadorNo.vista,FactImprimartMostadorNo.tabla,FactImprimartMostadorNo.paginador,FactImprimartMostadorNo.btnbrincar,FactImprimartMostadorNo.checkboxgral,
FactImprimartMostadorNo.status,FactImprimartMostadorNo.btnsubir,FactImprimartMostadorNo.btnbajar,FactImprimartMostadorNo.btnguardar,FactImprimartMostadorNo.caption,FactImprimartMostadorNo.urlbrincar,FactImprimartMostadorNo.urlcambiarpos,FactImprimartMostadorNo.btnguardarpre,
FactImprimartMostadorNo.btnerror,FactImprimartMostadorNo.anchosegundacolumna,FactImprimartMostadorNo.anchoterceracolumna,FactImprimartMostadorNo.anchosextacolumna,FactImprimartMostadorNo.pultimacolumna,FactImprimartMostadorNo.ultimacolumna,
FactImprimartMostadorNo.btnbricarcomponentes,FactImprimartMostadorNo.fila,FactImprimartMostadorNo.input,FactImprimartMostadorNo.ploter,FactImprimartMostadorNo.dialogos,FactImprimartMostadorNo.urlsortable,FactImprimartMostadorNo.pasaracontrolcalidad,FactImprimartMostadorNo.statusproceso,
FactImprimartMostadorNo.urlparambiarstatusproceso,FactImprimartMostadorNo.reportarerrordesdecontrolcalidad,FactImprimartMostadorNo.etiquedado,FactImprimartMostadorNo.etiquetado2,FactImprimartMostadorNo.columna5,
FactImprimartMostadorNo.cabiarstatusdeordenpp,FactImprimartMostadorNo.pasarapla,FactImprimartMostadorNo.porfacturar,FactImprimartMostadorNo.procesarcorteauto,FactImprimartMostadorNo.urlprocesocorteauto);
//aqui voyyyyyyyy
    var FactFotoSmileSi = new grid('OrdenID','NoOrden','Cliente','OrdST','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/fotosmilesi','fotosmilesi','#fotosmilesi','#pfotosmilesi','','#cb_fotosmilesi','6','','',
'','ORDENES FACTURADAS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',50,150,120,350,50,50,'#jqg_fotosmilesi_',
'pg_fotosmilesi','','','ordenes/sortable','#pasaralaminado','2','','','','',70);//pendiente por checar


prueba(FactFotoSmileSi.OrdenID,FactFotoSmileSi.Ordenamiento1,FactFotoSmileSi.OrdArtSeqID,FactFotoSmileSi.CatArticuloID,FactFotoSmileSi.Nombre,FactFotoSmileSi.StatusOrden,FactFotoSmileSi.Total,FactFotoSmileSi.Fecha,FactFotoSmileSi.url,FactFotoSmileSi.vista,FactFotoSmileSi.tabla,FactFotoSmileSi.paginador,FactFotoSmileSi.btnbrincar,FactFotoSmileSi.checkboxgral,
FactFotoSmileSi.status,FactFotoSmileSi.btnsubir,FactFotoSmileSi.btnbajar,FactFotoSmileSi.btnguardar,FactFotoSmileSi.caption,FactFotoSmileSi.urlbrincar,FactFotoSmileSi.urlcambiarpos,FactFotoSmileSi.btnguardarpre,
FactFotoSmileSi.btnerror,FactFotoSmileSi.anchosegundacolumna,FactFotoSmileSi.anchoterceracolumna,FactFotoSmileSi.anchosextacolumna,FactFotoSmileSi.pultimacolumna,FactFotoSmileSi.ultimacolumna,
FactFotoSmileSi.btnbricarcomponentes,FactFotoSmileSi.fila,FactFotoSmileSi.input,FactFotoSmileSi.ploter,FactFotoSmileSi.dialogos,FactFotoSmileSi.urlsortable,FactFotoSmileSi.pasaracontrolcalidad,FactFotoSmileSi.statusproceso,
FactFotoSmileSi.urlparambiarstatusproceso,FactFotoSmileSi.reportarerrordesdecontrolcalidad,FactFotoSmileSi.etiquedado,FactFotoSmileSi.etiquetado2,FactFotoSmileSi.columna5);

  var FactFotoSmileNo = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/fotosmileno','fotosmileno','#fotosmileno','#pfotosmileno','','#cb_fotosmileno','6','','',
'','ORDENES POR FACTURAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_ordenespagadas_',
'pg_pfotosmileno','','','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan5555','#pasararemision3','','');


prueba(FactFotoSmileNo.OrdenID,FactFotoSmileNo.Ordenamiento1,FactFotoSmileNo.OrdArtSeqID,FactFotoSmileNo.CatArticuloID,FactFotoSmileNo.Nombre,FactFotoSmileNo.StatusOrden,FactFotoSmileNo.Total,FactFotoSmileNo.Fecha,FactFotoSmileNo.url,FactFotoSmileNo.vista,FactFotoSmileNo.tabla,FactFotoSmileNo.paginador,FactFotoSmileNo.btnbrincar,FactFotoSmileNo.checkboxgral,
FactFotoSmileNo.status,FactFotoSmileNo.btnsubir,FactFotoSmileNo.btnbajar,FactFotoSmileNo.btnguardar,FactFotoSmileNo.caption,FactFotoSmileNo.urlbrincar,FactFotoSmileNo.urlcambiarpos,FactFotoSmileNo.btnguardarpre,
FactFotoSmileNo.btnerror,FactFotoSmileNo.anchosegundacolumna,FactFotoSmileNo.anchoterceracolumna,FactFotoSmileNo.anchosextacolumna,FactFotoSmileNo.pultimacolumna,FactFotoSmileNo.ultimacolumna,
FactFotoSmileNo.btnbricarcomponentes,FactFotoSmileNo.fila,FactFotoSmileNo.input,FactFotoSmileNo.ploter,FactFotoSmileNo.dialogos,FactFotoSmileNo.urlsortable,FactFotoSmileNo.pasaracontrolcalidad,FactFotoSmileNo.statusproceso,
FactFotoSmileNo.urlparambiarstatusproceso,FactFotoSmileNo.reportarerrordesdecontrolcalidad,FactFotoSmileNo.etiquedado,FactFotoSmileNo.etiquetado2,FactFotoSmileNo.columna5,
FactFotoSmileNo.cabiarstatusdeordenpp,FactFotoSmileNo.pasarapla,FactFotoSmileNo.porfacturar,FactFotoSmileNo.procesarcorteauto,FactFotoSmileNo.urlprocesocorteauto);
   

var FactFotoSmileMostradorSi = new grid('OrdenID','NoOrden','Cliente','OrdST','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/fotosmilemostradorsi','fotosmilemostradorsi','#fotosmilemostradorsi','#pfotosmilemostradorsi','','#cb_fotosmilemostradorsi','6','','',
'','ORDENES FACTURADAS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',50,150,120,350,50,50,'#jqg_fotosmilemostradorsi_',
'pg_fotosmilemostradorsi','','','ordenes/sortable','#pasaralaminado','2','','','','',70);//pendiente revision

prueba(FactFotoSmileMostradorSi.OrdenID,FactFotoSmileMostradorSi.Ordenamiento1,FactFotoSmileMostradorSi.OrdArtSeqID,FactFotoSmileMostradorSi.CatArticuloID,FactFotoSmileMostradorSi.Nombre,FactFotoSmileMostradorSi.StatusOrden,FactFotoSmileMostradorSi.Total,FactFotoSmileMostradorSi.Fecha,FactFotoSmileMostradorSi.url,FactFotoSmileMostradorSi.vista,FactFotoSmileMostradorSi.tabla,FactFotoSmileMostradorSi.paginador,FactFotoSmileMostradorSi.btnbrincar,FactFotoSmileMostradorSi.checkboxgral,
FactFotoSmileMostradorSi.status,FactFotoSmileMostradorSi.btnsubir,FactFotoSmileMostradorSi.btnbajar,FactFotoSmileMostradorSi.btnguardar,FactFotoSmileMostradorSi.caption,FactFotoSmileMostradorSi.urlbrincar,FactFotoSmileMostradorSi.urlcambiarpos,FactFotoSmileMostradorSi.btnguardarpre,
FactFotoSmileMostradorSi.btnerror,FactFotoSmileMostradorSi.anchosegundacolumna,FactFotoSmileMostradorSi.anchoterceracolumna,FactFotoSmileMostradorSi.anchosextacolumna,FactFotoSmileMostradorSi.pultimacolumna,FactFotoSmileMostradorSi.ultimacolumna,
FactFotoSmileMostradorSi.btnbricarcomponentes,FactFotoSmileMostradorSi.fila,FactFotoSmileMostradorSi.input,FactFotoSmileMostradorSi.ploter,FactFotoSmileMostradorSi.dialogos,FactFotoSmileMostradorSi.urlsortable,FactFotoSmileMostradorSi.pasaracontrolcalidad,FactFotoSmileMostradorSi.statusproceso,
FactFotoSmileMostradorSi.urlparambiarstatusproceso,FactFotoSmileMostradorSi.reportarerrordesdecontrolcalidad,FactFotoSmileMostradorSi.etiquedado,FactFotoSmileMostradorSi.etiquetado2,FactFotoSmileMostradorSi.columna5);

   var FactFotoSmileMostradorNo = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/fotosmilemostradorno','fotosmilemostradorno','#fotosmilemostradorno','#pfotosmilemostradorno','','#cb_fotosmilemostradorno','6','','',
'','ORDENES POR FACTURAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_ordenespagadas_',
'pg_pfotosmilemostradorno','','','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan44','#pasararemision4','','');


prueba(FactFotoSmileMostradorNo.OrdenID,FactFotoSmileMostradorNo.Ordenamiento1,FactFotoSmileMostradorNo.OrdArtSeqID,FactFotoSmileMostradorNo.CatArticuloID,FactFotoSmileMostradorNo.Nombre,FactFotoSmileMostradorNo.StatusOrden,FactFotoSmileMostradorNo.Total,FactFotoSmileMostradorNo.Fecha,FactFotoSmileMostradorNo.url,FactFotoSmileMostradorNo.vista,FactFotoSmileMostradorNo.tabla,FactFotoSmileMostradorNo.paginador,FactFotoSmileMostradorNo.btnbrincar,FactFotoSmileMostradorNo.checkboxgral,
FactFotoSmileMostradorNo.status,FactFotoSmileMostradorNo.btnsubir,FactFotoSmileMostradorNo.btnbajar,FactFotoSmileMostradorNo.btnguardar,FactFotoSmileMostradorNo.caption,FactFotoSmileMostradorNo.urlbrincar,FactFotoSmileMostradorNo.urlcambiarpos,FactFotoSmileMostradorNo.btnguardarpre,
FactFotoSmileMostradorNo.btnerror,FactFotoSmileMostradorNo.anchosegundacolumna,FactFotoSmileMostradorNo.anchoterceracolumna,FactFotoSmileMostradorNo.anchosextacolumna,FactFotoSmileMostradorNo.pultimacolumna,FactFotoSmileMostradorNo.ultimacolumna,
FactFotoSmileMostradorNo.btnbricarcomponentes,FactFotoSmileMostradorNo.fila,FactFotoSmileMostradorNo.input,FactFotoSmileMostradorNo.ploter,FactFotoSmileMostradorNo.dialogos,FactFotoSmileMostradorNo.urlsortable,FactFotoSmileMostradorNo.pasaracontrolcalidad,FactFotoSmileMostradorNo.statusproceso,
FactFotoSmileMostradorNo.urlparambiarstatusproceso,FactFotoSmileMostradorNo.reportarerrordesdecontrolcalidad,FactFotoSmileMostradorNo.etiquedado,FactFotoSmileMostradorNo.etiquetado2,FactFotoSmileMostradorNo.columna5,
FactFotoSmileMostradorNo.cabiarstatusdeordenpp,FactFotoSmileMostradorNo.pasarapla,FactFotoSmileMostradorNo.porfacturar,FactFotoSmileMostradorNo.procesarcorteauto,FactFotoSmileMostradorNo.urlprocesocorteauto);
  

var FactCostcoSi = new grid('OrdenID','NoOrden','Cliente','OrdST','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/costcosi','costcosi','#costcosi','#pcostcosi','','#cb_costcosi','6','','',
'','ORDENES FACTURADAS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',50,150,120,350,50,50,'#jqg_costcosi_',
'pg_costcosi','','','ordenes/sortable','#pasaralaminado','2','','','','',70);

prueba(FactCostcoSi.OrdenID,FactCostcoSi.Ordenamiento1,FactCostcoSi.OrdArtSeqID,FactCostcoSi.CatArticuloID,FactCostcoSi.Nombre,FactCostcoSi.StatusOrden,FactCostcoSi.Total,FactCostcoSi.Fecha,FactCostcoSi.url,FactCostcoSi.vista,FactCostcoSi.tabla,FactCostcoSi.paginador,FactCostcoSi.btnbrincar,FactCostcoSi.checkboxgral,
FactCostcoSi.status,FactCostcoSi.btnsubir,FactCostcoSi.btnbajar,FactCostcoSi.btnguardar,FactCostcoSi.caption,FactCostcoSi.urlbrincar,FactCostcoSi.urlcambiarpos,FactCostcoSi.btnguardarpre,
FactCostcoSi.btnerror,FactCostcoSi.anchosegundacolumna,FactCostcoSi.anchoterceracolumna,FactCostcoSi.anchosextacolumna,FactCostcoSi.pultimacolumna,FactCostcoSi.ultimacolumna,
FactCostcoSi.btnbricarcomponentes,FactCostcoSi.fila,FactCostcoSi.input,FactCostcoSi.ploter,FactCostcoSi.dialogos,FactCostcoSi.urlsortable,FactCostcoSi.pasaracontrolcalidad,FactCostcoSi.statusproceso,
FactCostcoSi.urlparambiarstatusproceso,FactCostcoSi.reportarerrordesdecontrolcalidad,FactCostcoSi.etiquedado,FactCostcoSi.etiquetado2,FactCostcoSi.columna5);

    var FactCostcoNo = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/costcono','costcono','#costcono','#pcostcono','','#cb_costcono','6','','',
'','ORDENES POR FACTURAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_ordenespagadas_',
'pg_pcostcono','','','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan333','#pasararemision5','','');


prueba(FactCostcoNo.OrdenID,FactCostcoNo.Ordenamiento1,FactCostcoNo.OrdArtSeqID,FactCostcoNo.CatArticuloID,FactCostcoNo.Nombre,FactCostcoNo.StatusOrden,FactCostcoNo.Total,FactCostcoNo.Fecha,FactCostcoNo.url,FactCostcoNo.vista,FactCostcoNo.tabla,FactCostcoNo.paginador,FactCostcoNo.btnbrincar,FactCostcoNo.checkboxgral,
FactCostcoNo.status,FactCostcoNo.btnsubir,FactCostcoNo.btnbajar,FactCostcoNo.btnguardar,FactCostcoNo.caption,FactCostcoNo.urlbrincar,FactCostcoNo.urlcambiarpos,FactCostcoNo.btnguardarpre,
FactCostcoNo.btnerror,FactCostcoNo.anchosegundacolumna,FactCostcoNo.anchoterceracolumna,FactCostcoNo.anchosextacolumna,FactCostcoNo.pultimacolumna,FactCostcoNo.ultimacolumna,
FactCostcoNo.btnbricarcomponentes,FactCostcoNo.fila,FactCostcoNo.input,FactCostcoNo.ploter,FactCostcoNo.dialogos,FactCostcoNo.urlsortable,FactCostcoNo.pasaracontrolcalidad,FactCostcoNo.statusproceso,
FactCostcoNo.urlparambiarstatusproceso,FactCostcoNo.reportarerrordesdecontrolcalidad,FactCostcoNo.etiquedado,FactCostcoNo.etiquetado2,FactCostcoNo.columna5,
FactCostcoNo.cabiarstatusdeordenpp,FactCostcoNo.pasarapla,FactCostcoNo.porfacturar,FactCostcoNo.procesarcorteauto,FactCostcoNo.urlprocesocorteauto);
  
  
    var FactFujiSi = new grid('OrdenID','NoOrden','Cliente','OrdST','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/fujisi','fujisi','#fujisi','#pfujisi','','#fujisi','6','','',
'','ORDENES FACTURADAS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',50,150,120,350,50,50,'#jqg_fujisi_',
'pg_fujisi','','','ordenes/sortable','#pasaralaminado','2','','','','',70);//pendiente por revisar

prueba(FactFujiSi.OrdenID,FactFujiSi.Ordenamiento1,FactFujiSi.OrdArtSeqID,FactFujiSi.CatArticuloID,FactFujiSi.Nombre,FactFujiSi.StatusOrden,FactFujiSi.Total,FactFujiSi.Fecha,FactFujiSi.url,FactFujiSi.vista,FactFujiSi.tabla,FactFujiSi.paginador,FactFujiSi.btnbrincar,FactFujiSi.checkboxgral,
FactFujiSi.status,FactFujiSi.btnsubir,FactFujiSi.btnbajar,FactFujiSi.btnguardar,FactFujiSi.caption,FactFujiSi.urlbrincar,FactFujiSi.urlcambiarpos,FactFujiSi.btnguardarpre,
FactFujiSi.btnerror,FactFujiSi.anchosegundacolumna,FactFujiSi.anchoterceracolumna,FactFujiSi.anchosextacolumna,FactFujiSi.pultimacolumna,FactFujiSi.ultimacolumna,
FactFujiSi.btnbricarcomponentes,FactFujiSi.fila,FactFujiSi.input,FactFujiSi.ploter,FactFujiSi.dialogos,FactFujiSi.urlsortable,FactFujiSi.pasaracontrolcalidad,FactFujiSi.statusproceso,
FactFujiSi.urlparambiarstatusproceso,FactFujiSi.reportarerrordesdecontrolcalidad,FactFujiSi.etiquedado,FactFujiSi.etiquetado2,FactFujiSi.columna5);

      var FactFujiNo = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/fujino','fujino','#fujino','#pfujino','','#cb_fujino','6','','',
'','ORDENES POR FACTURAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_ordenespagadas_',
'pg_pfujino','','','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan222','#pasararemision6','','');


prueba(FactFujiNo.OrdenID,FactFujiNo.Ordenamiento1,FactFujiNo.OrdArtSeqID,FactFujiNo.CatArticuloID,FactFujiNo.Nombre,FactFujiNo.StatusOrden,FactFujiNo.Total,FactFujiNo.Fecha,FactFujiNo.url,FactFujiNo.vista,FactFujiNo.tabla,FactFujiNo.paginador,FactFujiNo.btnbrincar,FactFujiNo.checkboxgral,
FactFujiNo.status,FactFujiNo.btnsubir,FactFujiNo.btnbajar,FactFujiNo.btnguardar,FactFujiNo.caption,FactFujiNo.urlbrincar,FactFujiNo.urlcambiarpos,FactFujiNo.btnguardarpre,
FactFujiNo.btnerror,FactFujiNo.anchosegundacolumna,FactFujiNo.anchoterceracolumna,FactFujiNo.anchosextacolumna,FactFujiNo.pultimacolumna,FactFujiNo.ultimacolumna,
FactFujiNo.btnbricarcomponentes,FactFujiNo.fila,FactFujiNo.input,FactFujiNo.ploter,FactFujiNo.dialogos,FactFujiNo.urlsortable,FactFujiNo.pasaracontrolcalidad,FactFujiNo.statusproceso,
FactFujiNo.urlparambiarstatusproceso,FactFujiNo.reportarerrordesdecontrolcalidad,FactFujiNo.etiquedado,FactFujiNo.etiquetado2,FactFujiNo.columna5,
FactFujiNo.cabiarstatusdeordenpp,FactFujiNo.pasarapla,FactFujiNo.porfacturar,FactFujiNo.procesarcorteauto,FactFujiNo.urlprocesocorteauto);
  
  
  
    var FactGandhiSi = new grid('OrdenID','NoOrden','Cliente','OrdST','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/gandhisi','gandhisi','#gandhisi','#pgandhisi','','#fujisi','6','','',
'','ORDENES FACTURADAS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',50,150,120,350,50,50,'#jqg_gandhisi_',
'pg_gandhisi','','','ordenes/sortable','#pasaralaminado','2','','','','',70);//pendiente a revisar

prueba(FactGandhiSi.OrdenID,FactGandhiSi.Ordenamiento1,FactGandhiSi.OrdArtSeqID,FactGandhiSi.CatArticuloID,FactGandhiSi.Nombre,FactGandhiSi.StatusOrden,FactGandhiSi.Total,FactGandhiSi.Fecha,FactGandhiSi.url,FactGandhiSi.vista,FactGandhiSi.tabla,FactGandhiSi.paginador,FactGandhiSi.btnbrincar,FactGandhiSi.checkboxgral,
FactGandhiSi.status,FactGandhiSi.btnsubir,FactGandhiSi.btnbajar,FactGandhiSi.btnguardar,FactGandhiSi.caption,FactGandhiSi.urlbrincar,FactGandhiSi.urlcambiarpos,FactGandhiSi.btnguardarpre,
FactGandhiSi.btnerror,FactGandhiSi.anchosegundacolumna,FactGandhiSi.anchoterceracolumna,FactGandhiSi.anchosextacolumna,FactGandhiSi.pultimacolumna,FactGandhiSi.ultimacolumna,
FactGandhiSi.btnbricarcomponentes,FactGandhiSi.fila,FactGandhiSi.input,FactGandhiSi.ploter,FactGandhiSi.dialogos,FactGandhiSi.urlsortable,FactGandhiSi.pasaracontrolcalidad,FactGandhiSi.statusproceso,
FactGandhiSi.urlparambiarstatusproceso,FactGandhiSi.reportarerrordesdecontrolcalidad,FactGandhiSi.etiquedado,FactGandhiSi.etiquetado2,FactGandhiSi.columna5);

     var FactGandhiNo = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/gandhino','gandhino','#gandhino','#pgandhino','','#cb_gandhino','6','','',
'','ORDENES POR FACTURAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_ordenespagadas_',
'pg_pgandhino','','','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan1111','#pasararemision7','','');


prueba(FactGandhiNo.OrdenID,FactGandhiNo.Ordenamiento1,FactGandhiNo.OrdArtSeqID,FactGandhiNo.CatArticuloID,FactGandhiNo.Nombre,FactGandhiNo.StatusOrden,FactGandhiNo.Total,FactGandhiNo.Fecha,FactGandhiNo.url,FactGandhiNo.vista,FactGandhiNo.tabla,FactGandhiNo.paginador,FactGandhiNo.btnbrincar,FactGandhiNo.checkboxgral,
FactGandhiNo.status,FactGandhiNo.btnsubir,FactGandhiNo.btnbajar,FactGandhiNo.btnguardar,FactGandhiNo.caption,FactGandhiNo.urlbrincar,FactGandhiNo.urlcambiarpos,FactGandhiNo.btnguardarpre,
FactGandhiNo.btnerror,FactGandhiNo.anchosegundacolumna,FactGandhiNo.anchoterceracolumna,FactGandhiNo.anchosextacolumna,FactGandhiNo.pultimacolumna,FactGandhiNo.ultimacolumna,
FactGandhiNo.btnbricarcomponentes,FactGandhiNo.fila,FactGandhiNo.input,FactGandhiNo.ploter,FactGandhiNo.dialogos,FactGandhiNo.urlsortable,FactGandhiNo.pasaracontrolcalidad,FactGandhiNo.statusproceso,
FactGandhiNo.urlparambiarstatusproceso,FactGandhiNo.reportarerrordesdecontrolcalidad,FactGandhiNo.etiquedado,FactGandhiNo.etiquetado2,FactGandhiNo.columna5,
FactGandhiNo.cabiarstatusdeordenpp,FactGandhiNo.pasarapla,FactGandhiNo.porfacturar,FactGandhiNo.procesarcorteauto,FactGandhiNo.urlprocesocorteauto);

     var FactOrdenes = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/gandhino','gandhino','#gandhino','#pgandhino','','#cb_gandhino','6','','',
'','ORDENES POR FACTURAR','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,150,120,350,50,50,'#jqg_ordenespagadas_',
'pg_pgandhino','','','ordenes/sortable','#pasaralaminado','','','#pasarapla','','','','','#pasaraplan666','#pasararemision7','','');


prueba(FactOrdenes.OrdenID,FactOrdenes.Ordenamiento1,FactOrdenes.OrdArtSeqID,FactOrdenes.CatArticuloID,FactOrdenes.Nombre,FactOrdenes.StatusOrden,FactOrdenes.Total,FactOrdenes.Fecha,FactOrdenes.url,FactOrdenes.vista,FactOrdenes.tabla,FactOrdenes.paginador,FactOrdenes.btnbrincar,FactOrdenes.checkboxgral,
FactOrdenes.status,FactOrdenes.btnsubir,FactOrdenes.btnbajar,FactOrdenes.btnguardar,FactOrdenes.caption,FactOrdenes.urlbrincar,FactOrdenes.urlcambiarpos,FactOrdenes.btnguardarpre,
FactOrdenes.btnerror,FactOrdenes.anchosegundacolumna,FactOrdenes.anchoterceracolumna,FactOrdenes.anchosextacolumna,FactOrdenes.pultimacolumna,FactOrdenes.ultimacolumna,
FactOrdenes.btnbricarcomponentes,FactOrdenes.fila,FactOrdenes.input,FactOrdenes.ploter,FactOrdenes.dialogos,FactOrdenes.urlsortable,FactOrdenes.pasaracontrolcalidad,FactOrdenes.statusproceso,
FactOrdenes.urlparambiarstatusproceso,FactOrdenes.reportarerrordesdecontrolcalidad,FactOrdenes.etiquedado,FactOrdenes.etiquetado2,FactOrdenes.columna5,
FactOrdenes.cabiarstatusdeordenpp,FactOrdenes.pasarapla,FactOrdenes.porfacturar,FactOrdenes.procesarcorteauto,FactOrdenes.urlprocesocorteauto);

  
//termina lo de kike
// </editor-fold>
//<editor-fold defaultstate="collapsed" desc="Comentado2">
//    var objeto27 = new grid('OrdenID','NoOrden','Cliente','OrdSTID','Facturado','FechaHoraEmision.date','Descripcion','MonTotal','../ajaxcontabilidad/facturadas','facturadas','#facturadas','#pfacturadas','','#cb_facturar','6','','',
//'','ORDENES FACTURADASwqqe','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',50,150,120,350,50,50,'#jqg_facturadas_',
//'pg_facturadas','','','ordenes/sortable','#pasaralaminado','2','','','','',70,'','','','','');
//
//
//prueba(objeto27.OrdenID,objeto27.Ordenamiento1,objeto27.OrdArtSeqID,objeto27.CatArticuloID,objeto27.Nombre,objeto27.StatusOrden,objeto27.Total,objeto27.Fecha,objeto27.url,objeto27.vista,objeto27.tabla,objeto27.paginador,objeto27.btnbrincar,objeto27.checkboxgral,
//objeto27.status,objeto27.btnsubir,objeto27.btnbajar,objeto27.btnguardar,objeto27.caption,objeto27.urlbrincar,objeto27.urlcambiarpos,objeto27.btnguardarpre,
//objeto27.btnerror,objeto27.anchosegundacolumna,objeto27.anchoterceracolumna,objeto27.anchosextacolumna,objeto27.pultimacolumna,objeto27.ultimacolumna,
//objeto27.btnbricarcomponentes,objeto27.fila,objeto27.input,objeto27.ploter,objeto27.dialogos,objeto27.urlsortable,objeto27.pasaracontrolcalidad,objeto27.statusproceso,
//objeto27.urlparambiarstatusproceso,objeto27.reportarerrordesdecontrolcalidad,objeto27.etiquedado,objeto27.etiquetado2,objeto27.columna5,
//objeto27.columna5,objeto27.cabiarstatusdeordenpp,objeto27.pasarapla,objeto27.porfacturar,objeto27.procesarcorteauto,objeto27.urlprocesocorteauto);
// 
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Control de calidad Barniz UV">
//grid modulo control de calidad para barniz uv 

var objeto31 = new grid('OrdenID','','Nombre','CatArticuloID','OrdArtST','CatProcesoID','Componente','OrdArtSeqID','../barnizuv/datoscalidad','V_BarnizUV','#controlbarniz','#pcontrolbarniz','','#cb_controlbarniz','900','','',//aqui se le cambia es status del proceso 900
'','BANIZ UV CONTROL DE CALIDAD ','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_calidad_',
'pg_pcontrolbarniz','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasaracorteauto','900','../controlcalidad/recibirindigo','#reportarerrordesdecontrolcalidad','','','','','','','','','','#errorcontrolcalidadbarniz','../errorcomponentes','','../planeacion/recibirerrorrescompo');//pendiente el status 


prueba(objeto31.OrdenID,objeto31.Ordenamiento1,objeto31.OrdArtSeqID,objeto31.CatArticuloID,objeto31.Nombre,objeto31.StatusOrden,objeto31.Total,objeto31.Fecha,objeto31.url,objeto31.vista,objeto31.tabla,objeto31.paginador,objeto31.btnbrincar,objeto31.checkboxgral,
objeto31.status,objeto31.btnsubir,objeto31.btnbajar,objeto31.btnguardar,objeto31.caption,objeto31.urlbrincar,objeto31.urlcambiarpos,objeto31.btnguardarpre,
objeto31.btnerror,objeto31.anchosegundacolumna,objeto31.anchoterceracolumna,objeto31.anchosextacolumna,objeto31.pultimacolumna,objeto31.ultimacolumna,
objeto31.btnbricarcomponentes,objeto31.fila,objeto31.input,objeto31.ploter,objeto31.dialogos,objeto31.urlsortable,objeto31.pasaracontrolcalidad,objeto31.statusproceso,
objeto31.urlparambiarstatusproceso,objeto31.reportarerrordesdecontrolcalidad,objeto31.etiquedado,objeto31.etiquetado2,
objeto31.columna5,objeto31.cabiarstatusdeordenpp,objeto31.pasarapla,objeto31.porfacturar,objeto31.procesarcorteauto,objeto31.urlprocesocorteauto,
objeto31.condstatusempaque,objeto31.errorcomponente,objeto31.urlerrorcomponente,objeto31.regresarcomponente,objeto31.urlparareportarerror);

//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Corte Automatico Procesados">
//grid para procesados ,modulo de corte automatico

var objeto32 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../corte/datosauto','V_CorteAutomatico_Procesados','#corteautomaticop','#pcorteautomaticop','','#cb_corteautomaticop','.0','','',
'','CORTE AUTOMÁTICO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_corteautomaticop_',
'pg_pcorteautomaticop','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasaraengrapado','3','../controlcalidad/recibirindigo','','','','','','','','','','','#errorautomatico','../errorcomponentes','','../planeacion/recibirerrorrescompo');


prueba(objeto32.OrdenID,objeto32.Ordenamiento1,objeto32.OrdArtSeqID,objeto32.CatArticuloID,objeto32.Nombre,objeto32.StatusOrden,objeto32.Total,objeto32.Fecha,objeto32.url,objeto32.vista,objeto32.tabla,objeto32.paginador,objeto32.btnbrincar,objeto32.checkboxgral,
objeto32.status,objeto32.btnsubir,objeto32.btnbajar,objeto32.btnguardar,objeto32.caption,objeto32.urlbrincar,objeto32.urlcambiarpos,objeto32.btnguardarpre,
objeto32.btnerror,objeto32.anchosegundacolumna,objeto32.anchoterceracolumna,objeto32.anchosextacolumna,objeto32.pultimacolumna,objeto32.ultimacolumna,
objeto32.btnbricarcomponentes,objeto32.fila,objeto32.input,objeto32.ploter,objeto32.dialogos,objeto32.urlsortable,objeto32.pasaracontrolcalidad,objeto32.statusproceso,
objeto32.urlparambiarstatusproceso,objeto32.reportarerrordesdecontrolcalidad,objeto32.etiquedado,objeto32.etiquetado2,
objeto32.columna5,objeto32.cabiarstatusdeordenpp,objeto32.pasarapla,objeto32.porfacturar,objeto32.procesarcorteauto,objeto32.urlprocesocorteauto,
objeto32.condstatusempaque,objeto32.errorcomponente,objeto32.urlerrorcomponente,objeto32.regresarcomponente,objeto32.urlparareportarerror);

//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Barniz UV procesados">
//grid procesados modulo barnizuv barnizuv/datosproc

var objeto33 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','barnizuv/datosbarniz','V_BarnizUV_Procesados','#barnizuvp','#pbarnizuvp','','#cb_barnizuvp','1150','','',//aqui se le cambia es status del proceso 900
'','BANIZ UV EN PENDIENTES ','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_barnizuvp_',
'pg_pbarnizuvp','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasaracontrcalidadbarniz','1150','controlcalidad/recibirindigo','#reportarerrordesdecontrolcalidad','','','','','','','#enviarcontrolbarniz','corte/cambiarstatuscomponente','','#errorbarniz','errorcomponentes','','planeacion/recibirerrorrescompo');//pendiente el status 


prueba(objeto33.OrdenID,objeto33.Ordenamiento1,objeto33.OrdArtSeqID,objeto33.CatArticuloID,objeto33.Nombre,objeto33.StatusOrden,objeto33.Total,objeto33.Fecha,objeto33.url,objeto33.vista,objeto33.tabla,objeto33.paginador,objeto33.btnbrincar,objeto33.checkboxgral,
objeto33.status,objeto33.btnsubir,objeto33.btnbajar,objeto33.btnguardar,objeto33.caption,objeto33.urlbrincar,objeto33.urlcambiarpos,objeto33.btnguardarpre,
objeto33.btnerror,objeto33.anchosegundacolumna,objeto33.anchoterceracolumna,objeto33.anchosextacolumna,objeto33.pultimacolumna,objeto33.ultimacolumna,
objeto33.btnbricarcomponentes,objeto33.fila,objeto33.input,objeto33.ploter,objeto33.dialogos,objeto33.urlsortable,objeto33.pasaracontrolcalidad,objeto33.statusproceso,
objeto33.urlparambiarstatusproceso,objeto33.reportarerrordesdecontrolcalidad,objeto33.etiquedado,objeto33.etiquetado2,
objeto33.columna5,objeto33.cabiarstatusdeordenpp,objeto33.pasarapla,objeto33.porfacturar,objeto33.procesarcorteauto,objeto33.urlprocesocorteauto,
objeto33.condstatusempaque,objeto33.errorcomponente,objeto33.urlerrorcomponente,objeto33.regresarcomponente,objeto33.urlparareportarerror);


//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Fotobooks">
//grid para fotobooks pendeintes
var objeto34 = new grid('OrdenID','Ordenamiento1','Nombre','CatArticuloID','OrdArtSeqID','Status_Orden','NoOrden','Fecha.date','ploter','V_Preprensa_Ploter_Pendientes','#fotobookspendientes','#pfotobookspendientes','#btnfotobrincar','#cb_fotobookspendientes','270','#fotosubir','#fotobajar',
'','PRE-PRENSA PLOTER PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','','',40,600,100,170,77,'','#jqg_fotobookspendientes_',
'pg_pfotobookspendientes','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','','','','','','tetrtrtrtrtetere','','');


prueba(objeto34.OrdenID,objeto34.Ordenamiento1,objeto34.OrdArtSeqID,objeto34.CatArticuloID,objeto34.Nombre,objeto34.StatusOrden,objeto34.Total,objeto34.Fecha,objeto34.url,objeto34.vista,objeto34.tabla,objeto34.paginador,objeto34.btnbrincar,objeto34.checkboxgral,
objeto34.status,objeto34.btnsubir,objeto34.btnbajar,objeto34.btnguardar,objeto34.caption,objeto34.urlbrincar,objeto34.urlcambiarpos,objeto34.btnguardarpre,
objeto34.btnerror,objeto34.anchosegundacolumna,objeto34.anchoterceracolumna,objeto34.anchosextacolumna,objeto34.pultimacolumna,objeto34.ultimacolumna,
objeto34.btnbricarcomponentes,objeto34.fila,objeto34.input,objeto34.ploter,objeto34.dialogos,objeto34.urlsortable,objeto34.pasaracontrolcalidad,objeto34.statusproceso,
objeto34.urlparambiarstatusproceso,objeto34.reportarerrordesdecontrolcalidad,objeto34.etiquedado,objeto34.etiquetado2,
objeto34.columna5,objeto34.cabiarstatusdeordenpp,objeto34.pasarapla,objeto34.porfacturar,objeto34.procesarcorteauto,objeto34.urlprocesocorteauto);


//grid para fotobooks procesados
var objeto35 = new grid('OrdenID','Ordenamiento1','Nombre','CatArticuloID','OrdArtSeqID','Status_Orden','NoOrden','Fecha.date','fotobooks/datosprocesados','V_Prepensa_Ploter_Proceso','#fotobooksprocesados','#pfotobooksprocesados','','#cb_fotobooksprocesados','250','#fotosubir','#fotobajar',
'','PRE-PRENSA PLOTER EN PROCESO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13prefoto','#errorprepreploter',40,600,100,170,77,'','#jqg_fotobooksprocesados_',
'pg_pfotobooksprocesados','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','#rt','','','','','tetrtrtrtrtetere','','');


prueba(objeto35.OrdenID,objeto35.Ordenamiento1,objeto35.OrdArtSeqID,objeto35.CatArticuloID,objeto35.Nombre,objeto35.StatusOrden,objeto35.Total,objeto35.Fecha,objeto35.url,objeto35.vista,objeto35.tabla,objeto35.paginador,objeto35.btnbrincar,objeto35.checkboxgral,
objeto35.status,objeto35.btnsubir,objeto35.btnbajar,objeto35.btnguardar,objeto35.caption,objeto35.urlbrincar,objeto35.urlcambiarpos,objeto35.btnguardarpre,
objeto35.btnerror,objeto35.anchosegundacolumna,objeto35.anchoterceracolumna,objeto35.anchosextacolumna,objeto35.pultimacolumna,objeto35.ultimacolumna,
objeto35.btnbricarcomponentes,objeto35.fila,objeto35.input,objeto35.ploter,objeto35.dialogos,objeto35.urlsortable,objeto35.pasaracontrolcalidad,objeto35.statusproceso,
objeto35.urlparambiarstatusproceso,objeto35.reportarerrordesdecontrolcalidad,objeto35.etiquedado,objeto35.etiquetado2,
objeto35.columna5,objeto35.cabiarstatusdeordenpp,objeto35.pasarapla,objeto35.porfacturar,objeto35.procesarcorteauto,objeto35.urlprocesocorteauto);

//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Refinado">

var objeto35 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../corte/datosrefinado','V_Refinado','#refinado','#prefinado','','#cb_refinado','100','','',
'','REFINADO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_refinado_',
'pg_prefinado','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','6','../controlcalidad/recibirindigo','','','','','','','','#procesarrefinado','../corte/cambiarstatuscomponente');


prueba(objeto35.OrdenID,objeto35.Ordenamiento1,objeto35.OrdArtSeqID,objeto35.CatArticuloID,objeto35.Nombre,objeto35.StatusOrden,objeto35.Total,objeto35.Fecha,objeto35.url,objeto35.vista,objeto35.tabla,objeto35.paginador,objeto35.btnbrincar,objeto35.checkboxgral,
objeto35.status,objeto35.btnsubir,objeto35.btnbajar,objeto35.btnguardar,objeto35.caption,objeto35.urlbrincar,objeto35.urlcambiarpos,objeto35.btnguardarpre,
objeto35.btnerror,objeto35.anchosegundacolumna,objeto35.anchoterceracolumna,objeto35.anchosextacolumna,objeto35.pultimacolumna,objeto35.ultimacolumna,
objeto35.btnbricarcomponentes,objeto35.fila,objeto35.input,objeto35.ploter,objeto35.dialogos,objeto35.urlsortable,objeto35.pasaracontrolcalidad,objeto35.statusproceso,
objeto35.urlparambiarstatusproceso,objeto35.reportarerrordesdecontrolcalidad,objeto35.etiquedado,objeto35.etiquetado2,
objeto35.columna5,objeto35.cabiarstatusdeordenpp,objeto35.pasarapla,objeto35.porfacturar,objeto35.procesarcorteauto,objeto35.urlprocesocorteauto);

//grid refinado en proceso ../corte/datosrefinadoprocess
var objeto90 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../corte/datosrefinado','V_RefinadoProcesados','#refinadopro','#prefinadopro','','#cb_refinadopro','100','','',
'','REFINADO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_refinadopro_',
'pg_prefinadopro','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasaraecuadernadop','6','../controlcalidad/recibirindigo','','','','','','','','','','','#errorrefinado','../errorcomponentes','','../planeacion/recibirerrorrescompo');


prueba(objeto90.OrdenID,objeto90.Ordenamiento1,objeto90.OrdArtSeqID,objeto90.CatArticuloID,objeto90.Nombre,objeto90.StatusOrden,objeto90.Total,objeto90.Fecha,objeto90.url,objeto90.vista,objeto90.tabla,objeto90.paginador,objeto90.btnbrincar,objeto90.checkboxgral,
objeto90.status,objeto90.btnsubir,objeto90.btnbajar,objeto90.btnguardar,objeto90.caption,objeto90.urlbrincar,objeto90.urlcambiarpos,objeto90.btnguardarpre,
objeto90.btnerror,objeto90.anchosegundacolumna,objeto90.anchoterceracolumna,objeto90.anchosextacolumna,objeto90.pultimacolumna,objeto90.ultimacolumna,
objeto90.btnbricarcomponentes,objeto90.fila,objeto90.input,objeto90.ploter,objeto90.dialogos,objeto90.urlsortable,objeto90.pasaracontrolcalidad,objeto90.statusproceso,
objeto90.urlparambiarstatusproceso,objeto90.reportarerrordesdecontrolcalidad,objeto90.etiquedado,objeto90.etiquetado2,
objeto90.columna5,objeto90.cabiarstatusdeordenpp,objeto90.pasarapla,objeto90.porfacturar,objeto90.procesarcorteauto,objeto90.urlprocesocorteauto,
objeto90.condstatusempaque,objeto90.errorcomponente,objeto90.urlerrorcomponente,objeto90.regresarcomponente,objeto90.urlparareportarerror);



//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Plecado">
var objeto36 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../engrapado/datosplecado','V_Plecado','#plecado','#pplecado','','#cb_plecado','100','','',
'','PLECADO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_plecado_',
'pg_pplecado','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','4','../controlcalidad/recibirindigo','','','','','','','','#procesarplecadoo','../corte/cambiarstatuscomponente');


prueba(objeto36.OrdenID,objeto36.Ordenamiento1,objeto36.OrdArtSeqID,objeto36.CatArticuloID,objeto36.Nombre,objeto36.StatusOrden,objeto36.Total,objeto36.Fecha,objeto36.url,objeto36.vista,objeto36.tabla,objeto36.paginador,objeto36.btnbrincar,objeto36.checkboxgral,
objeto36.status,objeto36.btnsubir,objeto36.btnbajar,objeto36.btnguardar,objeto36.caption,objeto36.urlbrincar,objeto36.urlcambiarpos,objeto36.btnguardarpre,
objeto36.btnerror,objeto36.anchosegundacolumna,objeto36.anchoterceracolumna,objeto36.anchosextacolumna,objeto36.pultimacolumna,objeto36.ultimacolumna,
objeto36.btnbricarcomponentes,objeto36.fila,objeto36.input,objeto36.ploter,objeto36.dialogos,objeto36.urlsortable,objeto36.pasaracontrolcalidad,objeto36.statusproceso,
objeto36.urlparambiarstatusproceso,objeto36.reportarerrordesdecontrolcalidad,objeto36.etiquedado,objeto36.etiquetado2,
objeto36.columna5,objeto36.cabiarstatusdeordenpp,objeto36.pasarapla,objeto36.porfacturar,objeto36.procesarcorteauto,objeto36.urlprocesocorteauto);

//grid plecado procesados ../engrapado/datosplecadoprocess

var objeto92 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../engrapado/datosplecado','V_PlecadoProcesados','#plecadopro','#pplecadopro','','#cb_plecadopro','100','','',
'','PLECADO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_plecadopro_',
'pg_pplecadopro','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasaraecuandernado','4','../controlcalidad/recibirindigo','','','','','','','','','','','#errorplecado','../errorcomponentes','','../planeacion/recibirerrorrescompo');


prueba(objeto92.OrdenID,objeto92.Ordenamiento1,objeto92.OrdArtSeqID,objeto92.CatArticuloID,objeto92.Nombre,objeto92.StatusOrden,objeto92.Total,objeto92.Fecha,objeto92.url,objeto92.vista,objeto92.tabla,objeto92.paginador,objeto92.btnbrincar,objeto92.checkboxgral,
objeto92.status,objeto92.btnsubir,objeto92.btnbajar,objeto92.btnguardar,objeto92.caption,objeto92.urlbrincar,objeto92.urlcambiarpos,objeto92.btnguardarpre,
objeto92.btnerror,objeto92.anchosegundacolumna,objeto92.anchoterceracolumna,objeto92.anchosextacolumna,objeto92.pultimacolumna,objeto92.ultimacolumna,
objeto92.btnbricarcomponentes,objeto92.fila,objeto92.input,objeto92.ploter,objeto92.dialogos,objeto92.urlsortable,objeto92.pasaracontrolcalidad,objeto92.statusproceso,
objeto92.urlparambiarstatusproceso,objeto92.reportarerrordesdecontrolcalidad,objeto92.etiquedado,objeto92.etiquetado2,
objeto92.columna5,objeto92.cabiarstatusdeordenpp,objeto92.pasarapla,objeto92.porfacturar,objeto92.procesarcorteauto,objeto92.urlprocesocorteauto,
objeto92.condstatusempaque,objeto92.errorcomponente,objeto92.urlerrorcomponente,objeto92.regresarcomponente,objeto92.urlparareportarerror);





//</editor-fold>

//grid empacado


var objeto39 = new grid('OrdenID','CatProcesoID','Nombre','CatArticuloID','PID','Cantidad','JobID','OrdArtSeqID','empacado/datosempacado','V_Empacado','#empacadofin','#pempacadofin','','#cb_empacadofin','850','','',
'','EMPACADO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,300,.5,'','#jqg_empacadofin_',
'pg_pempacadofin','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','fin','controlcalidad/recibirindigo','','','','','','','','#procesarempacado','corte/cambiarstatuscomponente','proceempaque');//aqui me quede 

//850
prueba(objeto39.OrdenID,objeto39.Ordenamiento1,objeto39.OrdArtSeqID,objeto39.CatArticuloID,objeto39.Nombre,objeto39.StatusOrden,objeto39.Total,objeto39.Fecha,objeto39.url,objeto39.vista,objeto39.tabla,objeto39.paginador,objeto39.btnbrincar,objeto39.checkboxgral,
objeto39.status,objeto39.btnsubir,objeto39.btnbajar,objeto39.btnguardar,objeto39.caption,objeto39.urlbrincar,objeto39.urlcambiarpos,objeto39.btnguardarpre,
objeto39.btnerror,objeto39.anchosegundacolumna,objeto39.anchoterceracolumna,objeto39.anchosextacolumna,objeto39.pultimacolumna,objeto39.ultimacolumna,
objeto39.btnbricarcomponentes,objeto39.fila,objeto39.input,objeto39.ploter,objeto39.dialogos,objeto39.urlsortable,objeto39.pasaracontrolcalidad,objeto39.statusproceso,
objeto39.urlparambiarstatusproceso,objeto39.reportarerrordesdecontrolcalidad,objeto39.etiquedado,objeto39.etiquetado2,
objeto39.columna5,objeto39.cabiarstatusdeordenpp,objeto39.pasarapla,objeto39.porfacturar,objeto39.procesarcorteauto,objeto39.urlprocesocorteauto,objeto39.condstatusempaque);


//grid para empacado procesados
var objeto88 = new grid('OrdenID','CatProcesoID','Nombre','CatArticuloID','PID','','JobID','OrdArtSeqID','empacado/datosempacadoprocess','V_Empacado_Procesados','#empacadofinpro','#pempacadofinpro','','#cb_empacadofinpro','850','','',
'','EMPACADO EN PROCESO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,300,.5,'','#jqg_empacadofinpro_',
'pg_pempacadofinpro','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#enviarenviados','fin','controlcalidad/recibirindigo','','','','','','','','','','');//aqui me quede 

//850
prueba(objeto88.OrdenID,objeto88.Ordenamiento1,objeto88.OrdArtSeqID,objeto88.CatArticuloID,objeto88.Nombre,objeto88.StatusOrden,objeto88.Total,objeto88.Fecha,objeto88.url,objeto88.vista,objeto88.tabla,objeto88.paginador,objeto88.btnbrincar,objeto88.checkboxgral,
objeto88.status,objeto88.btnsubir,objeto88.btnbajar,objeto88.btnguardar,objeto88.caption,objeto88.urlbrincar,objeto88.urlcambiarpos,objeto88.btnguardarpre,
objeto88.btnerror,objeto88.anchosegundacolumna,objeto88.anchoterceracolumna,objeto88.anchosextacolumna,objeto88.pultimacolumna,objeto88.ultimacolumna,
objeto88.btnbricarcomponentes,objeto88.fila,objeto88.input,objeto88.ploter,objeto88.dialogos,objeto88.urlsortable,objeto88.pasaracontrolcalidad,objeto88.statusproceso,
objeto88.urlparambiarstatusproceso,objeto88.reportarerrordesdecontrolcalidad,objeto88.etiquedado,objeto88.etiquetado2,
objeto88.columna5,objeto88.cabiarstatusdeordenpp,objeto88.pasarapla,objeto88.porfacturar,objeto88.procesarcorteauto,objeto88.urlprocesocorteauto);

//grid para encuadernado

var objeto80 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','encuadernado/datosencuader','V_Encuadernado','#encuadernado','#pencuadernado','','#cb_encuadernado','850','','',
'','ENCUADERNADO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_encuadernado_',
'pg_pencuadernado','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procesarencuadernado','corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objeto80.OrdenID,objeto80.Ordenamiento1,objeto80.OrdArtSeqID,objeto80.CatArticuloID,objeto80.Nombre,objeto80.StatusOrden,objeto80.Total,objeto80.Fecha,objeto80.url,objeto80.vista,objeto80.tabla,objeto80.paginador,objeto80.btnbrincar,objeto80.checkboxgral,
objeto80.status,objeto80.btnsubir,objeto80.btnbajar,objeto80.btnguardar,objeto80.caption,objeto80.urlbrincar,objeto80.urlcambiarpos,objeto80.btnguardarpre,
objeto80.btnerror,objeto80.anchosegundacolumna,objeto80.anchoterceracolumna,objeto80.anchosextacolumna,objeto80.pultimacolumna,objeto80.ultimacolumna,
objeto80.btnbricarcomponentes,objeto80.fila,objeto80.input,objeto80.ploter,objeto80.dialogos,objeto80.urlsortable,objeto80.pasaracontrolcalidad,objeto80.statusproceso,
objeto80.urlparambiarstatusproceso,objeto80.reportarerrordesdecontrolcalidad,objeto80.etiquedado,objeto80.etiquetado2,
objeto80.columna5,objeto80.cabiarstatusdeordenpp,objeto80.pasarapla,objeto80.porfacturar,objeto80.procesarcorteauto,objeto80.urlprocesocorteauto);

//grid encuadernado en proceso encuadernado/datosencuaprocess

var objeto91 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','encuadernado/datosencuader','V_Encuadernado_Procesados','#encuadernadopro','#pencuadernadopro','','#cb_encuadernadopro','850','','',
'','ENCUADERNADO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_encuadernadopro_',
'pg_pencuadernadopro','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#deencuaaempaque','7','controlcalidad/recibirindigo','','','','','','','','','','','#errorencuadernado','errorcomponentes','','planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objeto91.OrdenID,objeto91.Ordenamiento1,objeto91.OrdArtSeqID,objeto91.CatArticuloID,objeto91.Nombre,objeto91.StatusOrden,objeto91.Total,objeto91.Fecha,objeto91.url,objeto91.vista,objeto91.tabla,objeto91.paginador,objeto91.btnbrincar,objeto91.checkboxgral,
objeto91.status,objeto91.btnsubir,objeto91.btnbajar,objeto91.btnguardar,objeto91.caption,objeto91.urlbrincar,objeto91.urlcambiarpos,objeto91.btnguardarpre,
objeto91.btnerror,objeto91.anchosegundacolumna,objeto91.anchoterceracolumna,objeto91.anchosextacolumna,objeto91.pultimacolumna,objeto91.ultimacolumna,
objeto91.btnbricarcomponentes,objeto91.fila,objeto91.input,objeto91.ploter,objeto91.dialogos,objeto91.urlsortable,objeto91.pasaracontrolcalidad,objeto91.statusproceso,
objeto91.urlparambiarstatusproceso,objeto91.reportarerrordesdecontrolcalidad,objeto91.etiquedado,objeto91.etiquetado2,
objeto91.columna5,objeto91.cabiarstatusdeordenpp,objeto91.pasarapla,objeto91.porfacturar,objeto91.procesarcorteauto,objeto91.urlprocesocorteauto,
objeto91.condstatusempaque,objeto91.errorcomponente,objeto91.urlerrorcomponente,objeto91.regresarcomponente,objeto91.urlparareportarerror);

//grid envios

var objeto81 = new grid('OrdenID','PersonaID','NoOrden','CatArticuloID','Padre','aaaa','Cliente','Padre','envios/datosenvio','V_Enviados','#envios','#penvios','','#cb_envios','850','','',
'','LAYOUT PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',100,150,50,560,.2,'','#jqg_envios_',
'pg_penvios','prensa/compprocesados','./envios/detalleartienvios','ordenes/sortable','#env','salida','controlcalidad/recibirindigo','','','','','','','','#procesarenvioss','corte/cambiarstatuscomponente','','','','','hoooooo','#guia');//aqui me quede 

//850
prueba(objeto81.OrdenID,objeto81.Ordenamiento1,objeto81.OrdArtSeqID,objeto81.CatArticuloID,objeto81.Nombre,objeto81.StatusOrden,objeto81.Total,objeto81.Fecha,objeto81.url,objeto81.vista,objeto81.tabla,objeto81.paginador,objeto81.btnbrincar,objeto81.checkboxgral,
objeto81.status,objeto81.btnsubir,objeto81.btnbajar,objeto81.btnguardar,objeto81.caption,objeto81.urlbrincar,objeto81.urlcambiarpos,objeto81.btnguardarpre,
objeto81.btnerror,objeto81.anchosegundacolumna,objeto81.anchoterceracolumna,objeto81.anchosextacolumna,objeto81.pultimacolumna,objeto81.ultimacolumna,
objeto81.btnbricarcomponentes,objeto81.fila,objeto81.input,objeto81.ploter,objeto81.dialogos,objeto81.urlsortable,objeto81.pasaracontrolcalidad,objeto81.statusproceso,
objeto81.urlparambiarstatusproceso,objeto81.reportarerrordesdecontrolcalidad,objeto81.etiquedado,objeto81.etiquetado2,
objeto81.columna5,objeto81.cabiarstatusdeordenpp,objeto81.pasarapla,objeto81.porfacturar,objeto81.procesarcorteauto,objeto81.urlprocesocorteauto,
objeto81.condstatusempaque,objeto81.errorcomponente,objeto81.urlerrorcomponente,objeto81.regresarcomponente,objeto81.urlparareportarerror,objeto81.guia);

//grid para engrapado procesados engrapado/datosprocesados
var objeto82 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','engrapado/datosengrap','V_EngrapadoProcesados','#engrapadopro','#pengrapadopro','','#cb_engrapadopro','6','','',
'','ENGRAPADO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_engrapadopro_',
'pg_pengrapadopro','../prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasararefinadooo','3','controlcalidad/recibirindigo','','','','','','','','','','','#errorengrapado','errorcomponentes','','planeacion/recibirerrorrescompo');


prueba(objeto82.OrdenID,objeto82.Ordenamiento1,objeto82.OrdArtSeqID,objeto82.CatArticuloID,objeto82.Nombre,objeto82.StatusOrden,objeto82.Total,objeto82.Fecha,objeto82.url,objeto82.vista,objeto82.tabla,objeto82.paginador,objeto82.btnbrincar,objeto82.checkboxgral,
objeto82.status,objeto82.btnsubir,objeto82.btnbajar,objeto82.btnguardar,objeto82.caption,objeto82.urlbrincar,objeto82.urlcambiarpos,objeto82.btnguardarpre,
objeto82.btnerror,objeto82.anchosegundacolumna,objeto82.anchoterceracolumna,objeto82.anchosextacolumna,objeto82.pultimacolumna,objeto82.ultimacolumna,
objeto82.btnbricarcomponentes,objeto82.fila,objeto82.input,objeto82.ploter,objeto82.dialogos,objeto82.urlsortable,objeto82.pasaracontrolcalidad,objeto82.statusproceso,
objeto82.urlparambiarstatusproceso,objeto82.reportarerrordesdecontrolcalidad,objeto82.etiquedado,objeto82.etiquetado2,
objeto82.columna5,objeto82.cabiarstatusdeordenpp,objeto82.pasarapla,objeto82.porfacturar,objeto82.procesarcorteauto,objeto82.urlprocesocorteauto,
objeto82.condstatusempaque,objeto82.errorcomponente,objeto82.urlerrorcomponente,objeto82.regresarcomponente,objeto82.urlparareportarerror);

//grid para wireo procesados engrapado/datosprowireo

var objeto83 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','engrapado/datoswireo','V_WireoProcesados','#wirepro','#pwirepro','','#cb_wirepro','6','','',
'','ENGRAPADO WIRE-O EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_wirepro_',
'pg_pwirepro','../prensa/compprocesados','ordenes/detalle','ordenes/sortable','#siguientepro','4','controlcalidad/recibirindigo','','','','','','','','','','','#errorwireo','errorcomponentes','','planeacion/recibirerrorrescompo');


prueba(objeto83.OrdenID,objeto83.Ordenamiento1,objeto83.OrdArtSeqID,objeto83.CatArticuloID,objeto83.Nombre,objeto83.StatusOrden,objeto83.Total,objeto83.Fecha,objeto83.url,objeto83.vista,objeto83.tabla,objeto83.paginador,objeto83.btnbrincar,objeto83.checkboxgral,
objeto83.status,objeto83.btnsubir,objeto83.btnbajar,objeto83.btnguardar,objeto83.caption,objeto83.urlbrincar,objeto83.urlcambiarpos,objeto83.btnguardarpre,
objeto83.btnerror,objeto83.anchosegundacolumna,objeto83.anchoterceracolumna,objeto83.anchosextacolumna,objeto83.pultimacolumna,objeto83.ultimacolumna,
objeto83.btnbricarcomponentes,objeto83.fila,objeto83.input,objeto83.ploter,objeto83.dialogos,objeto83.urlsortable,objeto83.pasaracontrolcalidad,objeto83.statusproceso,
objeto83.urlparambiarstatusproceso,objeto83.reportarerrordesdecontrolcalidad,objeto83.etiquedado,objeto83.etiquetado2,
objeto83.columna5,objeto83.cabiarstatusdeordenpp,objeto83.pasarapla,objeto83.porfacturar,objeto83.procesarcorteauto,objeto83.urlprocesocorteauto,
objeto83.condstatusempaque,objeto83.errorcomponente,objeto83.urlerrorcomponente,objeto83.regresarcomponente,objeto83.urlparareportarerror);


//grid envios procesados
var objeto84 = new grid('OrdenID','','NoOrden','CatArticuloID','OrdArtSTID','','Articulos','OrdArtSeqID','../envios/ordnesenviadas','V_Pendientes_Entrega','#enviospro','#penviospro','','#cb_enviospro','850','','',
'','ENTREGADOS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,150,500,150,.5,'','#jqg_enviospro_',
'pg_penviospro','prensa/compprocesados','../envios/detalleartienvios','ordenes/sortable','#envpro','salida','controlcalidad/recibirindigo','','','','','','','','','','');//aqui me quede 

//850
prueba(objeto84.OrdenID,objeto84.Ordenamiento1,objeto84.OrdArtSeqID,objeto84.CatArticuloID,objeto84.Nombre,objeto84.StatusOrden,objeto84.Total,objeto84.Fecha,objeto84.url,objeto84.vista,objeto84.tabla,objeto84.paginador,objeto84.btnbrincar,objeto84.checkboxgral,
objeto84.status,objeto84.btnsubir,objeto84.btnbajar,objeto84.btnguardar,objeto84.caption,objeto84.urlbrincar,objeto84.urlcambiarpos,objeto84.btnguardarpre,
objeto84.btnerror,objeto84.anchosegundacolumna,objeto84.anchoterceracolumna,objeto84.anchosextacolumna,objeto84.pultimacolumna,objeto84.ultimacolumna,
objeto84.btnbricarcomponentes,objeto84.fila,objeto84.input,objeto84.ploter,objeto84.dialogos,objeto84.urlsortable,objeto84.pasaracontrolcalidad,objeto84.statusproceso,
objeto84.urlparambiarstatusproceso,objeto84.reportarerrordesdecontrolcalidad,objeto84.etiquedado,objeto84.etiquetado2,
objeto84.columna5,objeto84.cabiarstatusdeordenpp,objeto84.pasarapla,objeto84.porfacturar,objeto84.procesarcorteauto,objeto84.urlprocesocorteauto,objeto84.salida);

//grid para errores de componentes para planeacion

var objeto100 = new grid('OrdenID','CatComponenteID','Descripcion','CatArticuloID','OrdArtSeqID','CatProcesoID','Componente','Proceso','../planeacion/datoserrorcomponentes','V_Errores_Componentes','#errorcomponentes','#perrorcomponentes','','#cb_errorcomponentes','700','','',
'','ERRORES DE COMPONENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',400,300,150,200,100,'','#jqg_errorcomponentes_',
'pg_perrorcomponentes','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','2','../controlcalidad/recibirindigo','','','','','','','','','','','#errorcomponenteploter','../errorcomponentes','#regresaraproceso');


prueba(objeto100.OrdenID,objeto100.Ordenamiento1,objeto100.OrdArtSeqID,objeto100.CatArticuloID,objeto100.Nombre,objeto100.StatusOrden,objeto100.Total,objeto100.Fecha,objeto100.url,objeto100.vista,objeto100.tabla,objeto100.paginador,objeto100.btnbrincar,objeto100.checkboxgral,
objeto100.status,objeto100.btnsubir,objeto100.btnbajar,objeto100.btnguardar,objeto100.caption,objeto100.urlbrincar,objeto100.urlcambiarpos,objeto100.btnguardarpre,
objeto100.btnerror,objeto100.anchosegundacolumna,objeto100.anchoterceracolumna,objeto100.anchosextacolumna,objeto100.pultimacolumna,objeto100.ultimacolumna,
objeto100.btnbricarcomponentes,objeto100.fila,objeto100.input,objeto100.ploter,objeto100.dialogos,objeto100.urlsortable,objeto100.pasaracontrolcalidad,objeto100.statusproceso,
objeto100.urlparambiarstatusproceso,objeto100.reportarerrordesdecontrolcalidad,objeto100.etiquedado,objeto100.etiquetado2,
objeto100.columna5,objeto100.cabiarstatusdeordenpp,objeto100.pasarapla,objeto100.porfacturar,objeto100.procesarcorteauto,objeto100.urlprocesocorteauto,objeto100.condstatusempaque,
objeto100.errorcomponente,objeto100.urlerrorcomponente,objeto100.regresarcomponente);
 

//grid para obtener los codigos de barras con la llave triple 

var objeto400 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','','OrdArtSeqID','../ordenes/ordenes','V_WireoProcesados','#llavetriple','#pllavetriple','','#cb_llavetriple','6','','',
'','Coigos de barras llave triple','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,500,150,170,.5,'','#jqg_llavetriple_',
'pg_pllavetriple','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','4','controlcalidad/recibirindigo','','','','','','','','','','','#errorwireo','errorcomponentes','','planeacion/recibirerrorrescompo');


prueba(objeto400.OrdenID,objeto400.Ordenamiento1,objeto400.OrdArtSeqID,objeto400.CatArticuloID,objeto400.Nombre,objeto400.StatusOrden,objeto400.Total,objeto400.Fecha,objeto400.url,objeto400.vista,objeto400.tabla,objeto400.paginador,objeto400.btnbrincar,objeto400.checkboxgral,
objeto400.status,objeto400.btnsubir,objeto400.btnbajar,objeto400.btnguardar,objeto400.caption,objeto400.urlbrincar,objeto400.urlcambiarpos,objeto400.btnguardarpre,
objeto400.btnerror,objeto400.anchosegundacolumna,objeto400.anchoterceracolumna,objeto400.anchosextacolumna,objeto400.pultimacolumna,objeto400.ultimacolumna,
objeto400.btnbricarcomponentes,objeto400.fila,objeto400.input,objeto400.ploter,objeto400.dialogos,objeto400.urlsortable,objeto400.pasaracontrolcalidad,objeto400.statusproceso,
objeto400.urlparambiarstatusproceso,objeto400.reportarerrordesdecontrolcalidad,objeto400.etiquedado,objeto400.etiquetado2,
objeto400.columna5,objeto400.cabiarstatusdeordenpp,objeto400.pasarapla,objeto400.porfacturar,objeto400.procesarcorteauto,objeto400.urlprocesocorteauto,
objeto400.condstatusempaque,objeto400.errorcomponente,objeto400.urlerrorcomponente,objeto400.regresarcomponente,objeto400.urlparareportarerror);


//grid pendientes para carteras


var objetoc = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','carteras/datospendientes','V_Carteras_PastaDura_Pendientes','#carteras','#pcarteras','','#cb_carteras','850','','',
'','PASTA DURA PERSONALIZADAS , PIEL Y TELA PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_carteras_',
'pg_pcarteras','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procescarte','corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objetoc.OrdenID,objetoc.Ordenamiento1,objetoc.OrdArtSeqID,objetoc.CatArticuloID,objetoc.Nombre,objetoc.StatusOrden,objetoc.Total,objetoc.Fecha,objetoc.url,objetoc.vista,objetoc.tabla,objetoc.paginador,objetoc.btnbrincar,objetoc.checkboxgral,
objetoc.status,objetoc.btnsubir,objetoc.btnbajar,objetoc.btnguardar,objetoc.caption,objetoc.urlbrincar,objetoc.urlcambiarpos,objetoc.btnguardarpre,
objetoc.btnerror,objetoc.anchosegundacolumna,objetoc.anchoterceracolumna,objetoc.anchosextacolumna,objetoc.pultimacolumna,objetoc.ultimacolumna,
objetoc.btnbricarcomponentes,objetoc.fila,objetoc.input,objetoc.ploter,objetoc.dialogos,objetoc.urlsortable,objetoc.pasaracontrolcalidad,objetoc.statusproceso,
objetoc.urlparambiarstatusproceso,objetoc.reportarerrordesdecontrolcalidad,objetoc.etiquedado,objetoc.etiquetado2,
objetoc.columna5,objetoc.cabiarstatusdeordenpp,objetoc.pasarapla,objetoc.porfacturar,objetoc.procesarcorteauto,objetoc.urlprocesocorteauto);



//grid para reimpresion de orden viajera

var reimpresion = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','NoOrden','OrdArtSeqID','Reimpresionetiquetas/datosreimpresion','V_Preprensa_Proceso_Indigo','#reimpresion','#reimpresionp','','#cb_reimpresion','6','','',
'','REIMPRESIÓN DE ETIQUETAS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_reimpresion_',
'pg_reimpresionp','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','1','controlcalidad/recibirindigo','','#reimprimirorden','#impricomp2','','','','','','','','#errorcomponente','errorcomponentes','','planeacion/recibirerrorrescompo');//300 14 despues de ordenes sortable


prueba(reimpresion.OrdenID,reimpresion.Ordenamiento1,reimpresion.OrdArtSeqID,reimpresion.CatArticuloID,reimpresion.Nombre,reimpresion.StatusOrden,reimpresion.Total,reimpresion.Fecha,reimpresion.url,reimpresion.vista,reimpresion.tabla,reimpresion.paginador,reimpresion.btnbrincar,reimpresion.checkboxgral,
reimpresion.status,reimpresion.btnsubir,reimpresion.btnbajar,reimpresion.btnguardar,reimpresion.caption,reimpresion.urlbrincar,reimpresion.urlcambiarpos,reimpresion.btnguardarpre,
reimpresion.btnerror,reimpresion.anchosegundacolumna,reimpresion.anchoterceracolumna,reimpresion.anchosextacolumna,reimpresion.pultimacolumna,reimpresion.ultimacolumna,
reimpresion.btnbricarcomponentes,reimpresion.fila,reimpresion.input,reimpresion.ploter,reimpresion.dialogos,reimpresion.urlsortable,reimpresion.pasaracontrolcalidad,reimpresion.statusproceso,
reimpresion.urlparambiarstatusproceso,reimpresion.reportarerrordesdecontrolcalidad,reimpresion.etiquedado,reimpresion.etiquetado2,
reimpresion.columna5,reimpresion.cabiarstatusdeordenpp,reimpresion.pasarapla,reimpresion.porfacturar,reimpresion.procesarcorteauto,reimpresion.urlprocesocorteauto,
reimpresion.condstatusempaque,reimpresion.errorcomponente,reimpresion.urlerrorcomponente,reimpresion.regresarcomponente,reimpresion.urlparareportarerror);






























//var objeto4000 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','carteras/datospendientes','V_Prensa_Proceso_Indigo','#carteras','#pcarteras','','#cb_carteras','200','','',
//'','PASTA DURA PERSONALIZADAS , PIEL Y TELA EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'#procescarte','#jqg_carteras_',
//'pg_pcarteras','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','1','controlcalidad/recibirindigo','','','','','','','','','','','#errorcomponente','errorcomponentes','','planeacion/recibirerrorrescompo');//300 14 despues de ordenes sortable
//
//
//prueba(objeto4000.OrdenID,objeto4000.Ordenamiento1,objeto4000.OrdArtSeqID,objeto4000.CatArticuloID,objeto4000.Nombre,objeto4000.StatusOrden,objeto4000.Total,objeto4000.Fecha,objeto4000.url,objeto4000.vista,objeto4000.tabla,objeto4000.paginador,objeto4000.btnbrincar,objeto4000.checkboxgral,
//objeto4000.status,objeto4000.btnsubir,objeto4000.btnbajar,objeto4000.btnguardar,objeto4000.caption,objeto4000.urlbrincar,objeto4000.urlcambiarpos,objeto4000.btnguardarpre,
//objeto4000.btnerror,objeto4000.anchosegundacolumna,objeto4000.anchoterceracolumna,objeto4000.anchosextacolumna,objeto4000.pultimacolumna,objeto4000.ultimacolumna,
//objeto4000.btnbricarcomponentes,objeto4000.fila,objeto4000.input,objeto4000.ploter,objeto4000.dialogos,objeto4000.urlsortable,objeto4000.pasaracontrolcalidad,objeto4000.statusproceso,
//objeto4000.urlparambiarstatusproceso,objeto4000.reportarerrordesdecontrolcalidad,objeto4000.etiquedado,objeto4000.etiquetado2,
//objeto4000.columna5,objeto4000.cabiarstatusdeordenpp,objeto4000.pasarapla,objeto4000.porfacturar,objeto4000.procesarcorteauto,objeto4000.urlprocesocorteauto,
//objeto4000.condstatusempaque,objeto4000.errorcomponente,objeto4000.urlerrorcomponente,objeto4000.regresarcomponente,objeto4000.urlparareportarerror);

//grid en proceso para carteras personalizadas carteras/datosprocesados

var objeto4001 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','carteras/datospendientes','V_Carteras_PastaDura_Procesados','#carterasp','#pcarterasp','','#cb_carterasp','6','','',
'','PASTA DURA PERSONALIZADAS , PIEL Y TELA EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_carterasp_',
'pg_pcarterasp','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasarcartera','1','controlcalidad/recibirindigo','','','','','','','','','','','#errorcomponentepastadura','errorcomponentes','','planeacion/recibirerrorrescompo');//300 14 despues de ordenes sortable


prueba(objeto4001.OrdenID,objeto4001.Ordenamiento1,objeto4001.OrdArtSeqID,objeto4001.CatArticuloID,objeto4001.Nombre,objeto4001.StatusOrden,objeto4001.Total,objeto4001.Fecha,objeto4001.url,objeto4001.vista,objeto4001.tabla,objeto4001.paginador,objeto4001.btnbrincar,objeto4001.checkboxgral,
objeto4001.status,objeto4001.btnsubir,objeto4001.btnbajar,objeto4001.btnguardar,objeto4001.caption,objeto4001.urlbrincar,objeto4001.urlcambiarpos,objeto4001.btnguardarpre,
objeto4001.btnerror,objeto4001.anchosegundacolumna,objeto4001.anchoterceracolumna,objeto4001.anchosextacolumna,objeto4001.pultimacolumna,objeto4001.ultimacolumna,
objeto4001.btnbricarcomponentes,objeto4001.fila,objeto4001.input,objeto4001.ploter,objeto4001.dialogos,objeto4001.urlsortable,objeto4001.pasaracontrolcalidad,objeto4001.statusproceso,
objeto4001.urlparambiarstatusproceso,objeto4001.reportarerrordesdecontrolcalidad,objeto4001.etiquedado,objeto4001.etiquetado2,
objeto4001.columna5,objeto4001.cabiarstatusdeordenpp,objeto4001.pasarapla,objeto4001.porfacturar,objeto4001.procesarcorteauto,objeto4001.urlprocesocorteauto,
objeto4001.condstatusempaque,objeto4001.errorcomponente,objeto4001.urlerrorcomponente,objeto4001.regresarcomponente,objeto4001.urlparareportarerror);


//grid carteras piel y tela

var objeto4002 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../carteras/pielytelapensientes','V_Prensa_Proceso_Indigo','#pielytela','#ppielytela','','#cb_pielytela','200','','',
'','PIEL Y TELA EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'#procespiel','#jqg_pielytela_',
'pg_ppielytela','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','1','controlcalidad/recibirindigo','','','','','','','','','','','#errorcomponentepielytela','errorcomponentes','','planeacion/recibirerrorrescompo');//300 14 despues de ordenes sortable


prueba(objeto4002.OrdenID,objeto4002.Ordenamiento1,objeto4002.OrdArtSeqID,objeto4002.CatArticuloID,objeto4002.Nombre,objeto4002.StatusOrden,objeto4002.Total,objeto4002.Fecha,objeto4002.url,objeto4002.vista,objeto4002.tabla,objeto4002.paginador,objeto4002.btnbrincar,objeto4002.checkboxgral,
objeto4002.status,objeto4002.btnsubir,objeto4002.btnbajar,objeto4002.btnguardar,objeto4002.caption,objeto4002.urlbrincar,objeto4002.urlcambiarpos,objeto4002.btnguardarpre,
objeto4002.btnerror,objeto4002.anchosegundacolumna,objeto4002.anchoterceracolumna,objeto4002.anchosextacolumna,objeto4002.pultimacolumna,objeto4002.ultimacolumna,
objeto4002.btnbricarcomponentes,objeto4002.fila,objeto4002.input,objeto4002.ploter,objeto4002.dialogos,objeto4002.urlsortable,objeto4002.pasaracontrolcalidad,objeto4002.statusproceso,
objeto4002.urlparambiarstatusproceso,objeto4002.reportarerrordesdecontrolcalidad,objeto4002.etiquedado,objeto4002.etiquetado2,
objeto4002.columna5,objeto4002.cabiarstatusdeordenpp,objeto4002.pasarapla,objeto4002.porfacturar,objeto4002.procesarcorteauto,objeto4002.urlprocesocorteauto,
objeto4002.condstatusempaque,objeto4002.errorcomponente,objeto4002.urlerrorcomponente,objeto4002.regresarcomponente,objeto4002.urlparareportarerror);

//grid en proceso carteras piel y tela

var objeto4003 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../carteras/pielytelaprocesados','V_Prensa_Proceso_Indigo','#pielytelap','#ppielytelap','','#cb_pielytelap','6','','',
'','PIEL Y TELA EN PROCESO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_pielytelap_',
'pg_ppielytelap','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasarpiel','1','../controlcalidad/recibirindigo','','','','','','','','','','','#errorcomponentepieltelaenproceso','errorcomponentes','','../planeacion/recibirerrorrescompo');//300 14 despues de ordenes sortable


prueba(objeto4003.OrdenID,objeto4003.Ordenamiento1,objeto4003.OrdArtSeqID,objeto4003.CatArticuloID,objeto4003.Nombre,objeto4003.StatusOrden,objeto4003.Total,objeto4003.Fecha,objeto4003.url,objeto4003.vista,objeto4003.tabla,objeto4003.paginador,objeto4003.btnbrincar,objeto4003.checkboxgral,
objeto4003.status,objeto4003.btnsubir,objeto4003.btnbajar,objeto4003.btnguardar,objeto4003.caption,objeto4003.urlbrincar,objeto4003.urlcambiarpos,objeto4003.btnguardarpre,
objeto4003.btnerror,objeto4003.anchosegundacolumna,objeto4003.anchoterceracolumna,objeto4003.anchosextacolumna,objeto4003.pultimacolumna,objeto4003.ultimacolumna,
objeto4003.btnbricarcomponentes,objeto4003.fila,objeto4003.input,objeto4003.ploter,objeto4003.dialogos,objeto4003.urlsortable,objeto4003.pasaracontrolcalidad,objeto4003.statusproceso,
objeto4003.urlparambiarstatusproceso,objeto4003.reportarerrordesdecontrolcalidad,objeto4003.etiquedado,objeto4003.etiquetado2,
objeto4003.columna5,objeto4003.cabiarstatusdeordenpp,objeto4003.pasarapla,objeto4003.porfacturar,objeto4003.procesarcorteauto,objeto4003.urlprocesocorteauto,
objeto4003.condstatusempaque,objeto4003.errorcomponente,objeto4003.urlerrorcomponente,objeto4003.regresarcomponente,objeto4003.urlparareportarerror);

//grid para mostrar articulos empastado pasta suave

var objeto5000 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../engrapado/pastasuavepend','V_Empastado_Suave_Pendientes','#pastasuave','#ppastasuave','','#cb_pastasuave','200','','',
'','PASTA SUAVE EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,125,.5,'','#jqg_pastasuave_',
'pg_ppastasuave','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','3','controlcalidad/recibirindigo','','','','','','','','#procesarpastasuave','../corte/cambiarstatuscomponente');


prueba(objeto5000.OrdenID,objeto5000.Ordenamiento1,objeto5000.OrdArtSeqID,objeto5000.CatArticuloID,objeto5000.Nombre,objeto5000.StatusOrden,objeto5000.Total,objeto5000.Fecha,objeto5000.url,objeto5000.vista,objeto5000.tabla,objeto5000.paginador,objeto5000.btnbrincar,objeto5000.checkboxgral,
objeto5000.status,objeto5000.btnsubir,objeto5000.btnbajar,objeto5000.btnguardar,objeto5000.caption,objeto5000.urlbrincar,objeto5000.urlcambiarpos,objeto5000.btnguardarpre,
objeto5000.btnerror,objeto5000.anchosegundacolumna,objeto5000.anchoterceracolumna,objeto5000.anchosextacolumna,objeto5000.pultimacolumna,objeto5000.ultimacolumna,
objeto5000.btnbricarcomponentes,objeto5000.fila,objeto5000.input,objeto5000.ploter,objeto5000.dialogos,objeto5000.urlsortable,objeto5000.pasaracontrolcalidad,objeto5000.statusproceso,
objeto5000.urlparambiarstatusproceso,objeto5000.reportarerrordesdecontrolcalidad,objeto5000.etiquedado,objeto5000.etiquetado2,
objeto5000.columna5,objeto5000.cabiarstatusdeordenpp,objeto5000.pasarapla,objeto5000.porfacturar,objeto5000.procesarcorteauto,objeto5000.urlprocesocorteauto);


// grid en proceso para empastado pastas suave

var objeto5001 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../engrapado/pastasuavepro','V_Empastado_Suave_Procesados','#pastasuevap','#ppastasuevap','','#cb_pastasuevap','6','','',
'','PASTA SUAVE EN PROCESO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_pastasuevap_',
'pg_ppastasuevap','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasararticulorefinado','3','../controlcalidad/recibirindigo','','','','','','','','','','','#errorengrapadopastasuave','../errorcomponentes','','../planeacion/recibirerrorrescompo');


prueba(objeto5001.OrdenID,objeto5001.Ordenamiento1,objeto5001.OrdArtSeqID,objeto5001.CatArticuloID,objeto5001.Nombre,objeto5001.StatusOrden,objeto5001.Total,objeto5001.Fecha,objeto5001.url,objeto5001.vista,objeto5001.tabla,objeto5001.paginador,objeto5001.btnbrincar,objeto5001.checkboxgral,
objeto5001.status,objeto5001.btnsubir,objeto5001.btnbajar,objeto5001.btnguardar,objeto5001.caption,objeto5001.urlbrincar,objeto5001.urlcambiarpos,objeto5001.btnguardarpre,
objeto5001.btnerror,objeto5001.anchosegundacolumna,objeto5001.anchoterceracolumna,objeto5001.anchosextacolumna,objeto5001.pultimacolumna,objeto5001.ultimacolumna,
objeto5001.btnbricarcomponentes,objeto5001.fila,objeto5001.input,objeto5001.ploter,objeto5001.dialogos,objeto5001.urlsortable,objeto5001.pasaracontrolcalidad,objeto5001.statusproceso,
objeto5001.urlparambiarstatusproceso,objeto5001.reportarerrordesdecontrolcalidad,objeto5001.etiquedado,objeto5001.etiquetado2,
objeto5001.columna5,objeto5001.cabiarstatusdeordenpp,objeto5001.pasarapla,objeto5001.porfacturar,objeto5001.procesarcorteauto,objeto5001.urlprocesocorteauto,
objeto5001.condstatusempaque,objeto5001.errorcomponente,objeto5001.urlerrorcomponente,objeto5001.regresarcomponente,objeto5001.urlparareportarerror);

//grid pendientes para refinado pasta suave

var objeto5004 = new grid('OrdenID','','Nombre','CatArticuloID','PID','','Total','OrdArtSeqID','../corte/refinadopastasuavepen','V_Refinado_Suave_Pendientes','#refinadopastasuave','#prefinadopastasuave','','#cb_refinadopastasuave','','','',
'','REFINADO PASTA SUAVE EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_refinadopastasuave_',
'pg_prefinadopastasuave','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','fin','../controlcalidad/recibirindigo','','','','','','','','#procesarefinadopasta','../corte/cambiarstatuscomponente','procepasta');//aqui me quede 

//850
prueba(objeto5004.OrdenID,objeto5004.Ordenamiento1,objeto5004.OrdArtSeqID,objeto5004.CatArticuloID,objeto5004.Nombre,objeto5004.StatusOrden,objeto5004.Total,objeto5004.Fecha,objeto5004.url,objeto5004.vista,objeto5004.tabla,objeto5004.paginador,objeto5004.btnbrincar,objeto5004.checkboxgral,
objeto5004.status,objeto5004.btnsubir,objeto5004.btnbajar,objeto5004.btnguardar,objeto5004.caption,objeto5004.urlbrincar,objeto5004.urlcambiarpos,objeto5004.btnguardarpre,
objeto5004.btnerror,objeto5004.anchosegundacolumna,objeto5004.anchoterceracolumna,objeto5004.anchosextacolumna,objeto5004.pultimacolumna,objeto5004.ultimacolumna,
objeto5004.btnbricarcomponentes,objeto5004.fila,objeto5004.input,objeto5004.ploter,objeto5004.dialogos,objeto5004.urlsortable,objeto5004.pasaracontrolcalidad,objeto5004.statusproceso,
objeto5004.urlparambiarstatusproceso,objeto5004.reportarerrordesdecontrolcalidad,objeto5004.etiquedado,objeto5004.etiquetado2,
objeto5004.columna5,objeto5004.cabiarstatusdeordenpp,objeto5004.pasarapla,objeto5004.porfacturar,objeto5004.procesarcorteauto,objeto5004.urlprocesocorteauto,objeto5004.condstatusempaque);

//grid en proceso para refinado pasta suave ../corte/refinadopastasuavepro

var objeto5005  = new grid('OrdenID','','Nombre','CatArticuloID','PID','','Total','OrdArtSeqID','../corte/refinadopastasuavepen','V_Refinado_Suave_Proceso','#refinadopastasuavep','#prefinadopastasuavep','','#cb_refinadopastasuavep','850','','',
'','REFINADO PASTA SUAVE EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_refinadopastasuavep_',
'pg_prefinadopastasuavep','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#enviarempaquesuave','refinadoempaque','../controlcalidad/recibirindigo','','','','','','','','','','');//aqui me quede 

//850
prueba(objeto5005 .OrdenID,objeto5005 .Ordenamiento1,objeto5005 .OrdArtSeqID,objeto5005 .CatArticuloID,objeto5005 .Nombre,objeto5005 .StatusOrden,objeto5005 .Total,objeto5005 .Fecha,objeto5005 .url,objeto5005 .vista,objeto5005 .tabla,objeto5005 .paginador,objeto5005 .btnbrincar,objeto5005 .checkboxgral,
objeto5005 .status,objeto5005 .btnsubir,objeto5005 .btnbajar,objeto5005 .btnguardar,objeto5005 .caption,objeto5005 .urlbrincar,objeto5005 .urlcambiarpos,objeto5005 .btnguardarpre,
objeto5005 .btnerror,objeto5005 .anchosegundacolumna,objeto5005 .anchoterceracolumna,objeto5005 .anchosextacolumna,objeto5005 .pultimacolumna,objeto5005 .ultimacolumna,
objeto5005 .btnbricarcomponentes,objeto5005 .fila,objeto5005 .input,objeto5005 .ploter,objeto5005 .dialogos,objeto5005 .urlsortable,objeto5005 .pasaracontrolcalidad,objeto5005 .statusproceso,
objeto5005 .urlparambiarstatusproceso,objeto5005 .reportarerrordesdecontrolcalidad,objeto5005 .etiquedado,objeto5005 .etiquetado2,
objeto5005 .columna5,objeto5005 .cabiarstatusdeordenpp,objeto5005 .pasarapla,objeto5005 .porfacturar,objeto5005 .procesarcorteauto,objeto5005 .urlprocesocorteauto);


//grid para acabdo manual ----refinado


var objeto6000 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Total','OrdArtSeqID','../acabadomanual/datospendientesrefi','V_Refinado_Acabadomanual_Pendientes','#acabadorefinado','#pacabadorefinado','','#cb_acabadorefinado','200','','',
'','ACABADO MANUAL -REFINADO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_acabadorefinado_',
'pg_pacabadorefinado','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procesaracabadorefinado','../corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objeto6000.OrdenID,objeto6000.Ordenamiento1,objeto6000.OrdArtSeqID,objeto6000.CatArticuloID,objeto6000.Nombre,objeto6000.StatusOrden,objeto6000.Total,objeto6000.Fecha,objeto6000.url,objeto6000.vista,objeto6000.tabla,objeto6000.paginador,objeto6000.btnbrincar,objeto6000.checkboxgral,
objeto6000.status,objeto6000.btnsubir,objeto6000.btnbajar,objeto6000.btnguardar,objeto6000.caption,objeto6000.urlbrincar,objeto6000.urlcambiarpos,objeto6000.btnguardarpre,
objeto6000.btnerror,objeto6000.anchosegundacolumna,objeto6000.anchoterceracolumna,objeto6000.anchosextacolumna,objeto6000.pultimacolumna,objeto6000.ultimacolumna,
objeto6000.btnbricarcomponentes,objeto6000.fila,objeto6000.input,objeto6000.ploter,objeto6000.dialogos,objeto6000.urlsortable,objeto6000.pasaracontrolcalidad,objeto6000.statusproceso,
objeto6000.urlparambiarstatusproceso,objeto6000.reportarerrordesdecontrolcalidad,objeto6000.etiquedado,objeto6000.etiquetado2,
objeto6000.columna5,objeto6000.cabiarstatusdeordenpp,objeto6000.pasarapla,objeto6000.porfacturar,objeto6000.procesarcorteauto,objeto6000.urlprocesocorteauto);

//grid para procesados acabado manual --refinado ../acabadomanual/datosprocrefin

var objeto6001 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Total','OrdArtSeqID','../acabadomanual/datospendientesrefi','V_Refinado_Acabadomanual_Procesados','#acabadorefinadop','#pacabadorefinadop','','#cb_acabadorefinadop','850','','',
'','ACABADO MANUAL -REFINADO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_acabadorefinadop_',
'pg_pacabadorefinadop','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#enviaraensamblado','7','../controlcalidad/recibirindigo','','','','','','','','','','','#erroracabadomanualrefinado','errorcomponentes','','planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objeto6001.OrdenID,objeto6001.Ordenamiento1,objeto6001.OrdArtSeqID,objeto6001.CatArticuloID,objeto6001.Nombre,objeto6001.StatusOrden,objeto6001.Total,objeto6001.Fecha,objeto6001.url,objeto6001.vista,objeto6001.tabla,objeto6001.paginador,objeto6001.btnbrincar,objeto6001.checkboxgral,
objeto6001.status,objeto6001.btnsubir,objeto6001.btnbajar,objeto6001.btnguardar,objeto6001.caption,objeto6001.urlbrincar,objeto6001.urlcambiarpos,objeto6001.btnguardarpre,
objeto6001.btnerror,objeto6001.anchosegundacolumna,objeto6001.anchoterceracolumna,objeto6001.anchosextacolumna,objeto6001.pultimacolumna,objeto6001.ultimacolumna,
objeto6001.btnbricarcomponentes,objeto6001.fila,objeto6001.input,objeto6001.ploter,objeto6001.dialogos,objeto6001.urlsortable,objeto6001.pasaracontrolcalidad,objeto6001.statusproceso,
objeto6001.urlparambiarstatusproceso,objeto6001.reportarerrordesdecontrolcalidad,objeto6001.etiquedado,objeto6001.etiquetado2,
objeto6001.columna5,objeto6001.cabiarstatusdeordenpp,objeto6001.pasarapla,objeto6001.porfacturar,objeto6001.procesarcorteauto,objeto6001.urlprocesocorteauto,
objeto6001.condstatusempaque,objeto6001.errorcomponente,objeto6001.urlerrorcomponente,objeto6001.regresarcomponente,objeto6001.urlparareportarerror);

//grid acabado manual pendientes --ensamblado

var objeto6002 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../acabadomanual/datospendensambla','V_Ensamblado_Pendientes','#acabadomanualensamblado','#pacabadomanualensamblado','','#cb_acabadomanualensamblado','200','','',
'','ACABADO MANUAL -ENSAMBLADO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_acabadomanualensamblado_',
'pg_pacabadomanualensamblado','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procesaracabadoensamblado','../corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objeto6002.OrdenID,objeto6002.Ordenamiento1,objeto6002.OrdArtSeqID,objeto6002.CatArticuloID,objeto6002.Nombre,objeto6002.StatusOrden,objeto6002.Total,objeto6002.Fecha,objeto6002.url,objeto6002.vista,objeto6002.tabla,objeto6002.paginador,objeto6002.btnbrincar,objeto6002.checkboxgral,
objeto6002.status,objeto6002.btnsubir,objeto6002.btnbajar,objeto6002.btnguardar,objeto6002.caption,objeto6002.urlbrincar,objeto6002.urlcambiarpos,objeto6002.btnguardarpre,
objeto6002.btnerror,objeto6002.anchosegundacolumna,objeto6002.anchoterceracolumna,objeto6002.anchosextacolumna,objeto6002.pultimacolumna,objeto6002.ultimacolumna,
objeto6002.btnbricarcomponentes,objeto6002.fila,objeto6002.input,objeto6002.ploter,objeto6002.dialogos,objeto6002.urlsortable,objeto6002.pasaracontrolcalidad,objeto6002.statusproceso,
objeto6002.urlparambiarstatusproceso,objeto6002.reportarerrordesdecontrolcalidad,objeto6002.etiquedado,objeto6002.etiquetado2,
objeto6002.columna5,objeto6002.cabiarstatusdeordenpp,objeto6002.pasarapla,objeto6002.porfacturar,objeto6002.procesarcorteauto,objeto6002.urlprocesocorteauto);
//grid acabado manual en proceso --ensamblado ../acabadomanual/datosprocensambla

var objeto6003 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../acabadomanual/datospendensambla','V_Ensamblado_Procesados','#acabadomanualensambladop','#pacabadomanualensambladop','','#cb_acabadomanualensambladop','850','','',
'','ACABADO MANUAL -ENSAMBLADO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_acabadomanualensambladop_',
'pg_pacabadomanualensambladop','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#desdeensamblado','7','../controlcalidad/recibirindigo','','','','','','','','','','','#errordeensamblado','../errorcomponentes','','../planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objeto6003.OrdenID,objeto6003.Ordenamiento1,objeto6003.OrdArtSeqID,objeto6003.CatArticuloID,objeto6003.Nombre,objeto6003.StatusOrden,objeto6003.Total,objeto6003.Fecha,objeto6003.url,objeto6003.vista,objeto6003.tabla,objeto6003.paginador,objeto6003.btnbrincar,objeto6003.checkboxgral,
objeto6003.status,objeto6003.btnsubir,objeto6003.btnbajar,objeto6003.btnguardar,objeto6003.caption,objeto6003.urlbrincar,objeto6003.urlcambiarpos,objeto6003.btnguardarpre,
objeto6003.btnerror,objeto6003.anchosegundacolumna,objeto6003.anchoterceracolumna,objeto6003.anchosextacolumna,objeto6003.pultimacolumna,objeto6003.ultimacolumna,
objeto6003.btnbricarcomponentes,objeto6003.fila,objeto6003.input,objeto6003.ploter,objeto6003.dialogos,objeto6003.urlsortable,objeto6003.pasaracontrolcalidad,objeto6003.statusproceso,
objeto6003.urlparambiarstatusproceso,objeto6003.reportarerrordesdecontrolcalidad,objeto6003.etiquedado,objeto6003.etiquetado2,
objeto6003.columna5,objeto6003.cabiarstatusdeordenpp,objeto6003.pasarapla,objeto6003.porfacturar,objeto6003.procesarcorteauto,objeto6003.urlprocesocorteauto,
objeto6003.condstatusempaque,objeto6003.errorcomponente,objeto6003.urlerrorcomponente,objeto6003.regresarcomponente,objeto6003.urlparareportarerror);

//grid para pendientes bastidores

var objeto7000 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../acabadomanual/datosbastidorespen','V_Bastidor_Pendientes','#acabadomanualbastidor','#pacabadomanualbastidor','','#cb_acabadomanualbastidor','200','','',
'','ACABADO MANUAL -BASTIDORES PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_acabadomanualbastidor_',
'pg_pacabadomanualbastidor','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procesaracabadobastidor','../corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objeto7000.OrdenID,objeto7000.Ordenamiento1,objeto7000.OrdArtSeqID,objeto7000.CatArticuloID,objeto7000.Nombre,objeto7000.StatusOrden,objeto7000.Total,objeto7000.Fecha,objeto7000.url,objeto7000.vista,objeto7000.tabla,objeto7000.paginador,objeto7000.btnbrincar,objeto7000.checkboxgral,
objeto7000.status,objeto7000.btnsubir,objeto7000.btnbajar,objeto7000.btnguardar,objeto7000.caption,objeto7000.urlbrincar,objeto7000.urlcambiarpos,objeto7000.btnguardarpre,
objeto7000.btnerror,objeto7000.anchosegundacolumna,objeto7000.anchoterceracolumna,objeto7000.anchosextacolumna,objeto7000.pultimacolumna,objeto7000.ultimacolumna,
objeto7000.btnbricarcomponentes,objeto7000.fila,objeto7000.input,objeto7000.ploter,objeto7000.dialogos,objeto7000.urlsortable,objeto7000.pasaracontrolcalidad,objeto7000.statusproceso,
objeto7000.urlparambiarstatusproceso,objeto7000.reportarerrordesdecontrolcalidad,objeto7000.etiquedado,objeto7000.etiquetado2,
objeto7000.columna5,objeto7000.cabiarstatusdeordenpp,objeto7000.pasarapla,objeto7000.porfacturar,objeto7000.procesarcorteauto,objeto7000.urlprocesocorteauto);


//grid acabado manual--bastidores en proceso ../acabadomanual/datosbastidorespro

var objeto7001 = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../acabadomanual/datosbastidorespen','V_Bastidor_Procesados','#acabadomanualbastidorp','#pacabadomanualbastidorp','','#cb_acabadomanualbastidorp','850','','',
'','ACABADO MANUAL -BASTIDORES EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_acabadomanualbastidorp_',
'pg_pacabadomanualbastidorp','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#desdebastidor','7','../controlcalidad/recibirindigo','','','','','','','','','','','#errordebastidor','errorcomponentes','','planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objeto7001.OrdenID,objeto7001.Ordenamiento1,objeto7001.OrdArtSeqID,objeto7001.CatArticuloID,objeto7001.Nombre,objeto7001.StatusOrden,objeto7001.Total,objeto7001.Fecha,objeto7001.url,objeto7001.vista,objeto7001.tabla,objeto7001.paginador,objeto7001.btnbrincar,objeto7001.checkboxgral,
objeto7001.status,objeto7001.btnsubir,objeto7001.btnbajar,objeto7001.btnguardar,objeto7001.caption,objeto7001.urlbrincar,objeto7001.urlcambiarpos,objeto7001.btnguardarpre,
objeto7001.btnerror,objeto7001.anchosegundacolumna,objeto7001.anchoterceracolumna,objeto7001.anchosextacolumna,objeto7001.pultimacolumna,objeto7001.ultimacolumna,
objeto7001.btnbricarcomponentes,objeto7001.fila,objeto7001.input,objeto7001.ploter,objeto7001.dialogos,objeto7001.urlsortable,objeto7001.pasaracontrolcalidad,objeto7001.statusproceso,
objeto7001.urlparambiarstatusproceso,objeto7001.reportarerrordesdecontrolcalidad,objeto7001.etiquedado,objeto7001.etiquetado2,
objeto7001.columna5,objeto7001.cabiarstatusdeordenpp,objeto7001.pasarapla,objeto7001.porfacturar,objeto7001.procesarcorteauto,objeto7001.urlprocesocorteauto,
objeto7001.condstatusempaque,objeto7001.errorcomponente,objeto7001.urlerrorcomponente,objeto7001.regresarcomponente,objeto7001.urlparareportarerror);

//nuevo grid para preprensa indigo en status pendiente

var objeto9000 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','NoOrden','OrdArtSeqID','prensa/datosprensa','V_Corte_Manual','#preprensaind','#ppreprensaind','','#cb_preprensaind','200','','',//viene desde barniz uv 
'','PRE-PRENSA ÍNDIGO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_preprensaind_',
'pg_ppreprensaind','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','3','../controlcalidad/recibirindigo','#reportarerrordesdecontrolcalidad','#et','','','','','','#procesarprepreindigo','../corte/cambiarstatuscomponente');


prueba(objeto9000.OrdenID,objeto9000.Ordenamiento1,objeto9000.OrdArtSeqID,objeto9000.CatArticuloID,objeto9000.Nombre,objeto9000.StatusOrden,objeto9000.Total,objeto9000.Fecha,objeto9000.url,objeto9000.vista,objeto9000.tabla,objeto9000.paginador,objeto9000.btnbrincar,objeto9000.checkboxgral,
objeto9000.status,objeto9000.btnsubir,objeto9000.btnbajar,objeto9000.btnguardar,objeto9000.caption,objeto9000.urlbrincar,objeto9000.urlcambiarpos,objeto9000.btnguardarpre,
objeto9000.btnerror,objeto9000.anchosegundacolumna,objeto9000.anchoterceracolumna,objeto9000.anchosextacolumna,objeto9000.pultimacolumna,objeto9000.ultimacolumna,
objeto9000.btnbricarcomponentes,objeto9000.fila,objeto9000.input,objeto9000.ploter,objeto9000.dialogos,objeto9000.urlsortable,objeto9000.pasaracontrolcalidad,objeto9000.statusproceso,
objeto9000.urlparambiarstatusproceso,objeto9000.reportarerrordesdecontrolcalidad,objeto9000.etiquedado,objeto9000.etiquetado2,
objeto9000.columna5,objeto9000.cabiarstatusdeordenpp,objeto9000.pasarapla,objeto9000.porfacturar,objeto9000.procesarcorteauto,objeto9000.urlprocesocorteauto);


//nuevo grid para preprensa indigo en status en proceso

var objeto9001 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','prensa/datosprensa','V_CorteAutomatico_Procesados','#preprensaindp','#ppreprensaindp','','#cb_preprensaindp','.0','','',
'','PRE-PRENSA ÍNDIGO EN PROCESO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_preprensaindp_',
'pg_ppreprensaindp','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasarainfigoo','3','../controlcalidad/recibirindigo','','#impindi2','#impindi','','','','','','','','#errorautomatico','../errorcomponentes','','../planeacion/recibirerrorrescompo');


prueba(objeto9001.OrdenID,objeto9001.Ordenamiento1,objeto9001.OrdArtSeqID,objeto9001.CatArticuloID,objeto9001.Nombre,objeto9001.StatusOrden,objeto9001.Total,objeto9001.Fecha,objeto9001.url,objeto9001.vista,objeto9001.tabla,objeto9001.paginador,objeto9001.btnbrincar,objeto9001.checkboxgral,
objeto9001.status,objeto9001.btnsubir,objeto9001.btnbajar,objeto9001.btnguardar,objeto9001.caption,objeto9001.urlbrincar,objeto9001.urlcambiarpos,objeto9001.btnguardarpre,
objeto9001.btnerror,objeto9001.anchosegundacolumna,objeto9001.anchoterceracolumna,objeto9001.anchosextacolumna,objeto9001.pultimacolumna,objeto9001.ultimacolumna,
objeto9001.btnbricarcomponentes,objeto9001.fila,objeto9001.input,objeto9001.ploter,objeto9001.dialogos,objeto9001.urlsortable,objeto9001.pasaracontrolcalidad,objeto9001.statusproceso,
objeto9001.urlparambiarstatusproceso,objeto9001.reportarerrordesdecontrolcalidad,objeto9001.etiquedado,objeto9001.etiquetado2,
objeto9001.columna5,objeto9001.cabiarstatusdeordenpp,objeto9001.pasarapla,objeto9001.porfacturar,objeto9001.procesarcorteauto,objeto9001.urlprocesocorteauto,
objeto9001.condstatusempaque,objeto9001.errorcomponente,objeto9001.urlerrorcomponente,objeto9001.regresarcomponente,objeto9001.urlparareportarerror);


//grid para INDIGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO pendienteeessss

/*var objeto2000 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','preprensa/pendientespreprensa','V_Prensa_Indigo_Pendientes','#prensaindigopend','#pprensaindigopend','','#cb_prensaindigopend','200','','',
'','PRENSA ÍNDIGO PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_prensaindigopend_',
'pg_pprensaindigopend','../prensa/compprocesados','ordenes/detalle','ordenes/sortable','#enviaralaminadodesdeautomatico','900','../controlcalidad/recibirindigo','','','','','','','','#proces2','corte/cambiarstatuscomponente');


prueba(objeto2000.OrdenID,objeto2000.Ordenamiento1,objeto2000.OrdArtSeqID,objeto2000.CatArticuloID,objeto2000.Nombre,objeto2000.StatusOrden,objeto2000.Total,objeto2000.Fecha,objeto2000.url,objeto2000.vista,objeto2000.tabla,objeto2000.paginador,objeto2000.btnbrincar,objeto2000.checkboxgral,
objeto2000.status,objeto2000.btnsubir,objeto2000.btnbajar,objeto2000.btnguardar,objeto2000.caption,objeto2000.urlbrincar,objeto2000.urlcambiarpos,objeto2000.btnguardarpre,
objeto2000.btnerror,objeto2000.anchosegundacolumna,objeto2000.anchoterceracolumna,objeto2000.anchosextacolumna,objeto2000.pultimacolumna,objeto2000.ultimacolumna,
objeto2000.btnbricarcomponentes,objeto2000.fila,objeto2000.input,objeto2000.ploter,objeto2000.dialogos,objeto2000.urlsortable,objeto2000.pasaracontrolcalidad,objeto2000.statusproceso,
objeto2000.urlparambiarstatusproceso,objeto2000.reportarerrordesdecontrolcalidad,objeto2000.etiquedado,objeto2000.etiquetado2,objeto2000.columna5,
objeto2000.cabiarstatusdeordenpp,objeto2000.pasarapla,objeto2000.porfacturar,objeto2000.procesarcorteauto,objeto2000.urlprocesocorteauto);
*/
//grid para INDIGO EN PROCESOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

var objeto3000 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','preprensa/pendientespreprensa','V_Prensa_Indigo_Procesados','#prensaindigoproce','#pprensaindigoproce','','#cb_prensaindigoproce','.0','','',
'','PRENSA ÍNDIGO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_prensaindigoproce_',
'pg_pprensaindigoproce','../prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasaranextt','3','controlcalidad/recibirindigo','','','#impricomp','','','','','','','','#errorindigoo','errorcomponentes','','planeacion/recibirerrorrescompo');


prueba(objeto3000.OrdenID,objeto3000.Ordenamiento1,objeto3000.OrdArtSeqID,objeto3000.CatArticuloID,objeto3000.Nombre,objeto3000.StatusOrden,objeto3000.Total,objeto3000.Fecha,objeto3000.url,objeto3000.vista,objeto3000.tabla,objeto3000.paginador,objeto3000.btnbrincar,objeto3000.checkboxgral,
objeto3000.status,objeto3000.btnsubir,objeto3000.btnbajar,objeto3000.btnguardar,objeto3000.caption,objeto3000.urlbrincar,objeto3000.urlcambiarpos,objeto3000.btnguardarpre,
objeto3000.btnerror,objeto3000.anchosegundacolumna,objeto3000.anchoterceracolumna,objeto3000.anchosextacolumna,objeto3000.pultimacolumna,objeto3000.ultimacolumna,
objeto3000.btnbricarcomponentes,objeto3000.fila,objeto3000.input,objeto3000.ploter,objeto3000.dialogos,objeto3000.urlsortable,objeto3000.pasaracontrolcalidad,objeto3000.statusproceso,
objeto3000.urlparambiarstatusproceso,objeto3000.reportarerrordesdecontrolcalidad,objeto3000.etiquedado,objeto3000.etiquetado2,
objeto3000.columna5,objeto3000.cabiarstatusdeordenpp,objeto3000.pasarapla,objeto3000.porfacturar,objeto3000.procesarcorteauto,objeto3000.urlprocesocorteauto,
objeto3000.condstatusempaque,objeto3000.errorcomponente,objeto3000.urlerrorcomponente,objeto3000.regresarcomponente,objeto3000.urlparareportarerror);

// grid para prensa ploterrrrrrrrrr en pendientes

var objeto9999 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../prensa/datosploterpendien','V_Prensa_Ploter_Pendientes','#prensaploterpend','#pprensaploterpend','','#cb_prensaploterpend','200','','',
'','PRENSA PLOTER PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_prensaploterpend_',
'pg_pprensaploterpend','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#enviaralaminadodesdeautomatico','900','../controlcalidad/recibirindigo','','','','','','','','#procesarploterrp','../corte/cambiarstatuscomponente');


prueba(objeto9999.OrdenID,objeto9999.Ordenamiento1,objeto9999.OrdArtSeqID,objeto9999.CatArticuloID,objeto9999.Nombre,objeto9999.StatusOrden,objeto9999.Total,objeto9999.Fecha,objeto9999.url,objeto9999.vista,objeto9999.tabla,objeto9999.paginador,objeto9999.btnbrincar,objeto9999.checkboxgral,
objeto9999.status,objeto9999.btnsubir,objeto9999.btnbajar,objeto9999.btnguardar,objeto9999.caption,objeto9999.urlbrincar,objeto9999.urlcambiarpos,objeto9999.btnguardarpre,
objeto9999.btnerror,objeto9999.anchosegundacolumna,objeto9999.anchoterceracolumna,objeto9999.anchosextacolumna,objeto9999.pultimacolumna,objeto9999.ultimacolumna,
objeto9999.btnbricarcomponentes,objeto9999.fila,objeto9999.input,objeto9999.ploter,objeto9999.dialogos,objeto9999.urlsortable,objeto9999.pasaracontrolcalidad,objeto9999.statusproceso,
objeto9999.urlparambiarstatusproceso,objeto9999.reportarerrordesdecontrolcalidad,objeto9999.etiquedado,objeto9999.etiquetado2,objeto9999.columna5,
objeto9999.cabiarstatusdeordenpp,objeto9999.pasarapla,objeto9999.porfacturar,objeto9999.procesarcorteauto,objeto9999.urlprocesocorteauto);

//grid para prensa ploterrr en proceso ../prensa/datosploterproc

var objeto9991 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../prensa/datosploterpendien','V_Prensa_Ploter_Procesados','#prensaploterproce','#pprensaploterproce','','#cb_prensaploterproce','.0','','',
'','PRENSA PLOTER EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_prensaploterproce_',
'pg_pprensaploterproce','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#pasardesdeploter','3','../controlcalidad/recibirindigo','','','#rtsolaploter','','','','','','','','#errorcomponenteploterr','../errorcomponentes','','../planeacion/recibirerrorrescompo');


prueba(objeto9991.OrdenID,objeto9991.Ordenamiento1,objeto9991.OrdArtSeqID,objeto9991.CatArticuloID,objeto9991.Nombre,objeto9991.StatusOrden,objeto9991.Total,objeto9991.Fecha,objeto9991.url,objeto9991.vista,objeto9991.tabla,objeto9991.paginador,objeto9991.btnbrincar,objeto9991.checkboxgral,
objeto9991.status,objeto9991.btnsubir,objeto9991.btnbajar,objeto9991.btnguardar,objeto9991.caption,objeto9991.urlbrincar,objeto9991.urlcambiarpos,objeto9991.btnguardarpre,
objeto9991.btnerror,objeto9991.anchosegundacolumna,objeto9991.anchoterceracolumna,objeto9991.anchosextacolumna,objeto9991.pultimacolumna,objeto9991.ultimacolumna,
objeto9991.btnbricarcomponentes,objeto9991.fila,objeto9991.input,objeto9991.ploter,objeto9991.dialogos,objeto9991.urlsortable,objeto9991.pasaracontrolcalidad,objeto9991.statusproceso,
objeto9991.urlparambiarstatusproceso,objeto9991.reportarerrordesdecontrolcalidad,objeto9991.etiquedado,objeto9991.etiquetado2,
objeto9991.columna5,objeto9991.cabiarstatusdeordenpp,objeto9991.pasarapla,objeto9991.porfacturar,objeto9991.procesarcorteauto,objeto9991.urlprocesocorteauto,
objeto9991.condstatusempaque,objeto9991.errorcomponente,objeto9991.urlerrorcomponente,objeto9991.regresarcomponente,objeto9991.urlparareportarerror);

//grid para canvas montado pendientes

var objeto80 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../canvas/datosmontado','V_Canvas_Montado_Pendientes','#montadocanvaspend','#pmontadocanvaspend','','#cb_montadocanvaspend','850','','',
'','MONTADO CANVAS PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_montadocanvaspend_',
'pg_pmontadocanvaspend','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procesarmontadocanvas','../corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objeto80.OrdenID,objeto80.Ordenamiento1,objeto80.OrdArtSeqID,objeto80.CatArticuloID,objeto80.Nombre,objeto80.StatusOrden,objeto80.Total,objeto80.Fecha,objeto80.url,objeto80.vista,objeto80.tabla,objeto80.paginador,objeto80.btnbrincar,objeto80.checkboxgral,
objeto80.status,objeto80.btnsubir,objeto80.btnbajar,objeto80.btnguardar,objeto80.caption,objeto80.urlbrincar,objeto80.urlcambiarpos,objeto80.btnguardarpre,
objeto80.btnerror,objeto80.anchosegundacolumna,objeto80.anchoterceracolumna,objeto80.anchosextacolumna,objeto80.pultimacolumna,objeto80.ultimacolumna,
objeto80.btnbricarcomponentes,objeto80.fila,objeto80.input,objeto80.ploter,objeto80.dialogos,objeto80.urlsortable,objeto80.pasaracontrolcalidad,objeto80.statusproceso,
objeto80.urlparambiarstatusproceso,objeto80.reportarerrordesdecontrolcalidad,objeto80.etiquedado,objeto80.etiquetado2,
objeto80.columna5,objeto80.cabiarstatusdeordenpp,objeto80.pasarapla,objeto80.porfacturar,objeto80.procesarcorteauto,objeto80.urlprocesocorteauto);


//grid canvas montado en proceso ../canvas/montadoproc

var objeto91 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../canvas/datosmontado','V_Canvas_Montado_Procesados','#montadocanvaspro','#pmontadocanvaspro','','#cb_montadocanvaspro','850','','',
'','MONTADO CANVAS EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_montadocanvaspro_',
'pg_pmontadocanvaspro','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#enviardesdemontadocanvas','7','../controlcalidad/recibirindigo','','','','','','','','','','','#errormontadocanvaspen','errorcomponentes','','../planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objeto91.OrdenID,objeto91.Ordenamiento1,objeto91.OrdArtSeqID,objeto91.CatArticuloID,objeto91.Nombre,objeto91.StatusOrden,objeto91.Total,objeto91.Fecha,objeto91.url,objeto91.vista,objeto91.tabla,objeto91.paginador,objeto91.btnbrincar,objeto91.checkboxgral,
objeto91.status,objeto91.btnsubir,objeto91.btnbajar,objeto91.btnguardar,objeto91.caption,objeto91.urlbrincar,objeto91.urlcambiarpos,objeto91.btnguardarpre,
objeto91.btnerror,objeto91.anchosegundacolumna,objeto91.anchoterceracolumna,objeto91.anchosextacolumna,objeto91.pultimacolumna,objeto91.ultimacolumna,
objeto91.btnbricarcomponentes,objeto91.fila,objeto91.input,objeto91.ploter,objeto91.dialogos,objeto91.urlsortable,objeto91.pasaracontrolcalidad,objeto91.statusproceso,
objeto91.urlparambiarstatusproceso,objeto91.reportarerrordesdecontrolcalidad,objeto91.etiquedado,objeto91.etiquetado2,
objeto91.columna5,objeto91.cabiarstatusdeordenpp,objeto91.pasarapla,objeto91.porfacturar,objeto91.procesarcorteauto,objeto91.urlprocesocorteauto,
objeto91.condstatusempaque,objeto91.errorcomponente,objeto91.urlerrorcomponente,objeto91.regresarcomponente,objeto91.urlparareportarerror);

//grid enmarcado canvas pendientes

var objeto80 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../canvas/enmarcadopend','V_Canvas_Enmarcado_Pendientes','#enmarcadocanvaspend','#penmarcadocanvaspend','','#cb_enmarcadocanvaspend','850','','',
'','ENMARCADO CANVAS PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_enmarcadocanvaspend_',
'pg_penmarcadocanvaspend','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procesarenmarcadocanvas','../corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objeto80.OrdenID,objeto80.Ordenamiento1,objeto80.OrdArtSeqID,objeto80.CatArticuloID,objeto80.Nombre,objeto80.StatusOrden,objeto80.Total,objeto80.Fecha,objeto80.url,objeto80.vista,objeto80.tabla,objeto80.paginador,objeto80.btnbrincar,objeto80.checkboxgral,
objeto80.status,objeto80.btnsubir,objeto80.btnbajar,objeto80.btnguardar,objeto80.caption,objeto80.urlbrincar,objeto80.urlcambiarpos,objeto80.btnguardarpre,
objeto80.btnerror,objeto80.anchosegundacolumna,objeto80.anchoterceracolumna,objeto80.anchosextacolumna,objeto80.pultimacolumna,objeto80.ultimacolumna,
objeto80.btnbricarcomponentes,objeto80.fila,objeto80.input,objeto80.ploter,objeto80.dialogos,objeto80.urlsortable,objeto80.pasaracontrolcalidad,objeto80.statusproceso,
objeto80.urlparambiarstatusproceso,objeto80.reportarerrordesdecontrolcalidad,objeto80.etiquedado,objeto80.etiquetado2,
objeto80.columna5,objeto80.cabiarstatusdeordenpp,objeto80.pasarapla,objeto80.porfacturar,objeto80.procesarcorteauto,objeto80.urlprocesocorteauto);

//grid enmarcado canvas en proceso ../canvas/enmarcadoproc

var objeto91 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../canvas/enmarcadopend','V_Canvas_Enmarcado_Procesados','#enmarcadocanvaspro','#penmarcadocanvaspro','','#cb_enmarcadocanvaspro','850','','',
'','ENMARCADO CANVAS EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_enmarcadocanvaspro_',
'pg_penmarcadocanvaspro','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasaraenmarcadocanvas','7','../controlcalidad/recibirindigo','','','','','','','','','','','#errorenmarcadocanvas','errorcomponentes','','../planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objeto91.OrdenID,objeto91.Ordenamiento1,objeto91.OrdArtSeqID,objeto91.CatArticuloID,objeto91.Nombre,objeto91.StatusOrden,objeto91.Total,objeto91.Fecha,objeto91.url,objeto91.vista,objeto91.tabla,objeto91.paginador,objeto91.btnbrincar,objeto91.checkboxgral,
objeto91.status,objeto91.btnsubir,objeto91.btnbajar,objeto91.btnguardar,objeto91.caption,objeto91.urlbrincar,objeto91.urlcambiarpos,objeto91.btnguardarpre,
objeto91.btnerror,objeto91.anchosegundacolumna,objeto91.anchoterceracolumna,objeto91.anchosextacolumna,objeto91.pultimacolumna,objeto91.ultimacolumna,
objeto91.btnbricarcomponentes,objeto91.fila,objeto91.input,objeto91.ploter,objeto91.dialogos,objeto91.urlsortable,objeto91.pasaracontrolcalidad,objeto91.statusproceso,
objeto91.urlparambiarstatusproceso,objeto91.reportarerrordesdecontrolcalidad,objeto91.etiquedado,objeto91.etiquetado2,
objeto91.columna5,objeto91.cabiarstatusdeordenpp,objeto91.pasarapla,objeto91.porfacturar,objeto91.procesarcorteauto,objeto91.urlprocesocorteauto,
objeto91.condstatusempaque,objeto91.errorcomponente,objeto91.urlerrorcomponente,objeto91.regresarcomponente,objeto91.urlparareportarerror);

//grid empacado canvas pendientes


var objeto80 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','JobID','OrdArtSeqID','../canvas/datosenpacado','V_Canvas_Empacado_Pendientes','#empacadocanvaspendientes','#pempacadocanvaspendientes','','#cb_empacadocanvaspendientes','850','','',
'','EMPACADO CANVAS PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,300,.5,'','#jqg_empacadocanvaspendientes_',
'pg_pempacadocanvaspendientes','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procesarempacadocanvas','../corte/cambiarstatuscomponente','proceempaque');//aqui me quede 

//850
prueba(objeto80.OrdenID,objeto80.Ordenamiento1,objeto80.OrdArtSeqID,objeto80.CatArticuloID,objeto80.Nombre,objeto80.StatusOrden,objeto80.Total,objeto80.Fecha,objeto80.url,objeto80.vista,objeto80.tabla,objeto80.paginador,objeto80.btnbrincar,objeto80.checkboxgral,
objeto80.status,objeto80.btnsubir,objeto80.btnbajar,objeto80.btnguardar,objeto80.caption,objeto80.urlbrincar,objeto80.urlcambiarpos,objeto80.btnguardarpre,
objeto80.btnerror,objeto80.anchosegundacolumna,objeto80.anchoterceracolumna,objeto80.anchosextacolumna,objeto80.pultimacolumna,objeto80.ultimacolumna,
objeto80.btnbricarcomponentes,objeto80.fila,objeto80.input,objeto80.ploter,objeto80.dialogos,objeto80.urlsortable,objeto80.pasaracontrolcalidad,objeto80.statusproceso,
objeto80.urlparambiarstatusproceso,objeto80.reportarerrordesdecontrolcalidad,objeto80.etiquedado,objeto80.etiquetado2,
objeto80.columna5,objeto80.cabiarstatusdeordenpp,objeto80.pasarapla,objeto80.porfacturar,objeto80.procesarcorteauto,objeto80.urlprocesocorteauto,objeto80.condstatusempaque);


//grid empacado canvas en proceso ../canvas/empacadoproc

var objeto91 = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','JobID','OrdArtSeqID','../canvas/datosenpacado','V_Canvas_Empacado_Procesados','#empacadocanvaspro','#pempacadocanvaspro','','#cb_empacadocanvaspro','850','','',
'','EMPACADO CANVAS EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,300,.5,'','#jqg_empacadocanvaspro_',
'pg_pempacadocanvaspro','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#pasardesdeempacadocanvas','fin','../controlcalidad/recibirindigo','','','','','','','','','','','#errorenmarcadocanvas','errorcomponentes','','../planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objeto91.OrdenID,objeto91.Ordenamiento1,objeto91.OrdArtSeqID,objeto91.CatArticuloID,objeto91.Nombre,objeto91.StatusOrden,objeto91.Total,objeto91.Fecha,objeto91.url,objeto91.vista,objeto91.tabla,objeto91.paginador,objeto91.btnbrincar,objeto91.checkboxgral,
objeto91.status,objeto91.btnsubir,objeto91.btnbajar,objeto91.btnguardar,objeto91.caption,objeto91.urlbrincar,objeto91.urlcambiarpos,objeto91.btnguardarpre,
objeto91.btnerror,objeto91.anchosegundacolumna,objeto91.anchoterceracolumna,objeto91.anchosextacolumna,objeto91.pultimacolumna,objeto91.ultimacolumna,
objeto91.btnbricarcomponentes,objeto91.fila,objeto91.input,objeto91.ploter,objeto91.dialogos,objeto91.urlsortable,objeto91.pasaracontrolcalidad,objeto91.statusproceso,
objeto91.urlparambiarstatusproceso,objeto91.reportarerrordesdecontrolcalidad,objeto91.etiquedado,objeto91.etiquetado2,
objeto91.columna5,objeto91.cabiarstatusdeordenpp,objeto91.pasarapla,objeto91.porfacturar,objeto91.procesarcorteauto,objeto91.urlprocesocorteauto,
objeto91.condstatusempaque,objeto91.errorcomponente,objeto91.urlerrorcomponente,objeto91.regresarcomponente,objeto91.urlparareportarerror);


//grid para envios etapa2
//
//var ric = new grid('OrdenID','','Nombre','CatArticuloID','OrdArtSTID','','Total','OrdArtSeqID','envios/enviosproc','V_Enviados','#layout','#playout','','#cb_layout','850','','',
//'','LAYOUT PORCESADOS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_layout_',
//'pg_playout','prensa/compprocesados','ordenes/detalle','ordenes/sortable','#env','salida','controlcalidad/recibirindigo','','','','','','','','#procesarlayout','corte/cambiarstatuscomponente','','','','','hoooooo','#');//aqui me quede 
//
////850
//prueba(ric.OrdenID,ric.Ordenamiento1,ric.OrdArtSeqID,ric.CatArticuloID,ric.Nombre,ric.StatusOrden,ric.Total,ric.Fecha,ric.url,ric.vista,ric.tabla,ric.paginador,ric.btnbrincar,ric.checkboxgral,
//ric.status,ric.btnsubir,ric.btnbajar,ric.btnguardar,ric.caption,ric.urlbrincar,ric.urlcambiarpos,ric.btnguardarpre,
//ric.btnerror,ric.anchosegundacolumna,ric.anchoterceracolumna,ric.anchosextacolumna,ric.pultimacolumna,ric.ultimacolumna,
//ric.btnbricarcomponentes,ric.fila,ric.input,ric.ploter,ric.dialogos,ric.urlsortable,ric.pasaracontrolcalidad,ric.statusproceso,
//ric.urlparambiarstatusproceso,ric.reportarerrordesdecontrolcalidad,ric.etiquedado,ric.etiquetado2,
//ric.columna5,ric.cabiarstatusdeordenpp,ric.pasarapla,ric.porfacturar,ric.procesarcorteauto,ric.urlprocesocorteauto,
//ric.condstatusempaque,ric.errorcomponente,ric.urlerrorcomponente,ric.regresarcomponente,ric.urlparareportarerror,ric.guia);

//grid para etiquetado envios

var objetoetiquetasenvios = new grid('OrdenID','','NoOrden','CatArticuloID','CatComponenteID','CatProcesoID','Cliente','','envios/enviosproc','V_Enviados','#layout','#playout','','#cb_layout','850','','',
'','ETIQUETADO ENVIOS','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',100,150,50,500,.5,'','#jqg_layout_',
'pg_playout','prensa/compprocesados','./envios/detalleartienvios','ordenes/sortable','#procesarlayout','pasaraenviadosfinales','controlcalidad/recibirindigo','','','','','','','','','','','#errorencuadernado','errorcomponentes','','planeacion/recibirerrorrescompo','','#impirmiretiquetaenvios');//aqui me quede 

//850
prueba(objetoetiquetasenvios.OrdenID,objetoetiquetasenvios.Ordenamiento1,objetoetiquetasenvios.OrdArtSeqID,objetoetiquetasenvios.CatArticuloID,objetoetiquetasenvios.Nombre,objetoetiquetasenvios.StatusOrden,objetoetiquetasenvios.Total,objetoetiquetasenvios.Fecha,objetoetiquetasenvios.url,objetoetiquetasenvios.vista,objetoetiquetasenvios.tabla,objetoetiquetasenvios.paginador,objetoetiquetasenvios.btnbrincar,objetoetiquetasenvios.checkboxgral,
objetoetiquetasenvios.status,objetoetiquetasenvios.btnsubir,objetoetiquetasenvios.btnbajar,objetoetiquetasenvios.btnguardar,objetoetiquetasenvios.caption,objetoetiquetasenvios.urlbrincar,objetoetiquetasenvios.urlcambiarpos,objetoetiquetasenvios.btnguardarpre,
objetoetiquetasenvios.btnerror,objetoetiquetasenvios.anchosegundacolumna,objetoetiquetasenvios.anchoterceracolumna,objetoetiquetasenvios.anchosextacolumna,objetoetiquetasenvios.pultimacolumna,objetoetiquetasenvios.ultimacolumna,
objetoetiquetasenvios.btnbricarcomponentes,objetoetiquetasenvios.fila,objetoetiquetasenvios.input,objetoetiquetasenvios.ploter,objetoetiquetasenvios.dialogos,objetoetiquetasenvios.urlsortable,objetoetiquetasenvios.pasaracontrolcalidad,objetoetiquetasenvios.statusproceso,
objetoetiquetasenvios.urlparambiarstatusproceso,objetoetiquetasenvios.reportarerrordesdecontrolcalidad,objetoetiquetasenvios.etiquedado,objetoetiquetasenvios.etiquetado2,
objetoetiquetasenvios.columna5,objetoetiquetasenvios.cabiarstatusdeordenpp,objetoetiquetasenvios.pasarapla,objetoetiquetasenvios.porfacturar,objetoetiquetasenvios.procesarcorteauto,objetoetiquetasenvios.urlprocesocorteauto,
objetoetiquetasenvios.condstatusempaque,objetoetiquetasenvios.errorcomponente,objetoetiquetasenvios.urlerrorcomponente,objetoetiquetasenvios.regresarcomponente,objetoetiquetasenvios.urlparareportarerror,objetoetiquetasenvios.guia,objetoetiquetasenvios.etiquetasenviosfin);


//grid para recoger en tienda en pendientes

var tienda = new grid('OrdenID','','NoOrden','CatArticuloID','CatComponenteID','CatProcesoID','Cliente','OrdArtSeqID','../enviaradireccion/datostienda','V_Recoger_Tienda','#tienda','#ptienda','','#cb_tienda','850','','',
'','RECOGER EN TIENDA','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',100,150,50,500,.5,'','#jqg_tienda_',
'pg_ptienda','prensa/compprocesados','../envios/detalleartienvios','ordenes/sortable','#confirmarentrega','cerrarorden','../controlcalidad/recibirindigo','','','','','','','','','','','#errorencuadernado','errorcomponentes','','planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(tienda.OrdenID,tienda.Ordenamiento1,tienda.OrdArtSeqID,tienda.CatArticuloID,tienda.Nombre,tienda.StatusOrden,tienda.Total,tienda.Fecha,tienda.url,tienda.vista,tienda.tabla,tienda.paginador,tienda.btnbrincar,tienda.checkboxgral,
tienda.status,tienda.btnsubir,tienda.btnbajar,tienda.btnguardar,tienda.caption,tienda.urlbrincar,tienda.urlcambiarpos,tienda.btnguardarpre,
tienda.btnerror,tienda.anchosegundacolumna,tienda.anchoterceracolumna,tienda.anchosextacolumna,tienda.pultimacolumna,tienda.ultimacolumna,
tienda.btnbricarcomponentes,tienda.fila,tienda.input,tienda.ploter,tienda.dialogos,tienda.urlsortable,tienda.pasaracontrolcalidad,tienda.statusproceso,
tienda.urlparambiarstatusproceso,tienda.reportarerrordesdecontrolcalidad,tienda.etiquedado,tienda.etiquetado2,
tienda.columna5,tienda.cabiarstatusdeordenpp,tienda.pasarapla,tienda.porfacturar,tienda.procesarcorteauto,tienda.urlprocesocorteauto,
tienda.condstatusempaque,tienda.errorcomponente,tienda.urlerrorcomponente,tienda.regresarcomponente,tienda.urlparareportarerror);

//grid para rayado laminado en pendiente


var objrayado = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../laminado/datosrayadopen','V_Rayado_Pendientes','#rayado','#prayado','','#cb_rayado','200','','',
'','RAYADO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_rayado_',
'pg_prayado','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','3','../controlcalidad/recibirindigo','','','','','','','','#procesarayado','../corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(objrayado.OrdenID,objrayado.Ordenamiento1,objrayado.OrdArtSeqID,objrayado.CatArticuloID,objrayado.Nombre,objrayado.StatusOrden,objrayado.Total,objrayado.Fecha,objrayado.url,objrayado.vista,objrayado.tabla,objrayado.paginador,objrayado.btnbrincar,objrayado.checkboxgral,
objrayado.status,objrayado.btnsubir,objrayado.btnbajar,objrayado.btnguardar,objrayado.caption,objrayado.urlbrincar,objrayado.urlcambiarpos,objrayado.btnguardarpre,
objrayado.btnerror,objrayado.anchosegundacolumna,objrayado.anchoterceracolumna,objrayado.anchosextacolumna,objrayado.pultimacolumna,objrayado.ultimacolumna,
objrayado.btnbricarcomponentes,objrayado.fila,objrayado.input,objrayado.ploter,objrayado.dialogos,objrayado.urlsortable,objrayado.pasaracontrolcalidad,objrayado.statusproceso,
objrayado.urlparambiarstatusproceso,objrayado.reportarerrordesdecontrolcalidad,objrayado.etiquedado,objrayado.etiquetado2,
objrayado.columna5,objrayado.cabiarstatusdeordenpp,objrayado.pasarapla,objrayado.porfacturar,objrayado.procesarcorteauto,objrayado.urlprocesocorteauto);


//grid rayado en proceso ../laminado/datosrayadopro

var objrayadoproc = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../laminado/datosrayadopen','V_Rayado_EnProceso','#rayadopro','#prayadopro','','#cb_rayadopro','850','','',
'','RAYADO EN PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',300,600,150,170,.5,'','#jqg_rayadopro_',
'pg_prayadopro','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#rayadosiguiente','3','../controlcalidad/recibirindigo','','','','','','','','','','',
'#errorrayado','../errorcomponentes','','../planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(objrayadoproc.OrdenID,objrayadoproc.Ordenamiento1,objrayadoproc.OrdArtSeqID,objrayadoproc.CatArticuloID,objrayadoproc.Nombre,objrayadoproc.StatusOrden,objrayadoproc.Total,objrayadoproc.Fecha,objrayadoproc.url,objrayadoproc.vista,objrayadoproc.tabla,objrayadoproc.paginador,objrayadoproc.btnbrincar,objrayadoproc.checkboxgral,
objrayadoproc.status,objrayadoproc.btnsubir,objrayadoproc.btnbajar,objrayadoproc.btnguardar,objrayadoproc.caption,objrayadoproc.urlbrincar,objrayadoproc.urlcambiarpos,objrayadoproc.btnguardarpre,
objrayadoproc.btnerror,objrayadoproc.anchosegundacolumna,objrayadoproc.anchoterceracolumna,objrayadoproc.anchosextacolumna,objrayadoproc.pultimacolumna,objrayadoproc.ultimacolumna,
objrayadoproc.btnbricarcomponentes,objrayadoproc.fila,objrayadoproc.input,objrayadoproc.ploter,objrayadoproc.dialogos,objrayadoproc.urlsortable,objrayadoproc.pasaracontrolcalidad,objrayadoproc.statusproceso,
objrayadoproc.urlparambiarstatusproceso,objrayadoproc.reportarerrordesdecontrolcalidad,objrayadoproc.etiquedado,objrayadoproc.etiquetado2,
objrayadoproc.columna5,objrayadoproc.cabiarstatusdeordenpp,objrayadoproc.pasarapla,objrayadoproc.porfacturar,objrayadoproc.procesarcorteauto,
objrayadoproc.urlprocesocorteauto,objrayadoproc.condstatusempaque,
objrayadoproc.errorcomponente,objrayadoproc.urlerrorcomponente,objrayadoproc.regresarcomponente,objrayadoproc.urlparareportarerror);


//encuadernado pasta suave

var encupastasuave = new grid('OrdenID','','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../engrapado/encuadernadopastasuavepen','V_Encuadernado_Pasta_Suave_Pendiente','#encuadernadopastasuave','#pencuadernadopastasuave','','#cb_encuadernadopastasuave','850','','',
'','ENCUADERNADO PASTA SUAVE PENDIENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_encuadernadopastasuave_',
'pg_pencuadernadopastasuave','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','7','controlcalidad/recibirindigo','','','','','','','','#procesarencuadernadopastasuave','../corte/cambiarstatuscomponente');//aqui me quede 

//850
prueba(encupastasuave.OrdenID,encupastasuave.Ordenamiento1,encupastasuave.OrdArtSeqID,encupastasuave.CatArticuloID,encupastasuave.Nombre,encupastasuave.StatusOrden,encupastasuave.Total,encupastasuave.Fecha,encupastasuave.url,encupastasuave.vista,encupastasuave.tabla,encupastasuave.paginador,encupastasuave.btnbrincar,encupastasuave.checkboxgral,
encupastasuave.status,encupastasuave.btnsubir,encupastasuave.btnbajar,encupastasuave.btnguardar,encupastasuave.caption,encupastasuave.urlbrincar,encupastasuave.urlcambiarpos,encupastasuave.btnguardarpre,
encupastasuave.btnerror,encupastasuave.anchosegundacolumna,encupastasuave.anchoterceracolumna,encupastasuave.anchosextacolumna,encupastasuave.pultimacolumna,encupastasuave.ultimacolumna,
encupastasuave.btnbricarcomponentes,encupastasuave.fila,encupastasuave.input,encupastasuave.ploter,encupastasuave.dialogos,encupastasuave.urlsortable,encupastasuave.pasaracontrolcalidad,encupastasuave.statusproceso,
encupastasuave.urlparambiarstatusproceso,encupastasuave.reportarerrordesdecontrolcalidad,encupastasuave.etiquedado,encupastasuave.etiquetado2,
encupastasuave.columna5,encupastasuave.cabiarstatusdeordenpp,encupastasuave.pasarapla,encupastasuave.porfacturar,encupastasuave.procesarcorteauto,encupastasuave.urlprocesocorteauto);


//encuadernado pasta suave en proceso

var encupastasuavepro = new grid('OrdenID','Nombre','Nombre','CatArticuloID','CatComponenteID','CatProcesoID','Componente','OrdArtSeqID','../engrapado/encuadernadopastasuavepro','V_Encuadernado_Pasta_Suave_Procesados','#encuadernadopastasuavepro','#pencuadernadopastasuavepro','','#cb_encuadernadopastasuavepro','850','','',
'','ENCUADERNADO PASTA SUAVE EN PROCESO','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',450,600,150,170,.5,'','#jqg_encuadernadopastasuavepro_',
'pg_pencuadernadopastasuavepro','prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#nextpastasuave','7','../controlcalidad/recibirindigo','','','','','','','','','','','#errorencuadernadopastasuave','../errorcomponentes','','../planeacion/recibirerrorrescompo');//aqui me quede 

//850
prueba(encupastasuavepro.OrdenID,encupastasuavepro.Ordenamiento1,encupastasuavepro.OrdArtSeqID,encupastasuavepro.CatArticuloID,encupastasuavepro.Nombre,encupastasuavepro.StatusOrden,encupastasuavepro.Total,encupastasuavepro.Fecha,encupastasuavepro.url,encupastasuavepro.vista,encupastasuavepro.tabla,encupastasuavepro.paginador,encupastasuavepro.btnbrincar,encupastasuavepro.checkboxgral,
encupastasuavepro.status,encupastasuavepro.btnsubir,encupastasuavepro.btnbajar,encupastasuavepro.btnguardar,encupastasuavepro.caption,encupastasuavepro.urlbrincar,encupastasuavepro.urlcambiarpos,encupastasuavepro.btnguardarpre,
encupastasuavepro.btnerror,encupastasuavepro.anchosegundacolumna,encupastasuavepro.anchoterceracolumna,encupastasuavepro.anchosextacolumna,encupastasuavepro.pultimacolumna,encupastasuavepro.ultimacolumna,
encupastasuavepro.btnbricarcomponentes,encupastasuavepro.fila,encupastasuavepro.input,encupastasuavepro.ploter,encupastasuavepro.dialogos,encupastasuavepro.urlsortable,encupastasuavepro.pasaracontrolcalidad,encupastasuavepro.statusproceso,
encupastasuavepro.urlparambiarstatusproceso,encupastasuavepro.reportarerrordesdecontrolcalidad,encupastasuavepro.etiquedado,encupastasuavepro.etiquetado2,
encupastasuavepro.columna5,encupastasuavepro.cabiarstatusdeordenpp,encupastasuavepro.pasarapla,encupastasuavepro.porfacturar,encupastasuavepro.procesarcorteauto,encupastasuavepro.urlprocesocorteauto,
encupastasuavepro.condstatusempaque,encupastasuavepro.errorcomponente,encupastasuavepro.urlerrorcomponente,encupastasuavepro.regresarcomponente,encupastasuavepro.urlparareportarerror);



//monitoreo de componentes

//var monitoreo = new grid('OrdenID','','Fecha.date','CatArticuloID','CatComponenteID','CatProcesoID','CatProcesoID','OrdArtSeqID','../planeacion/datosmonitoreo','V_Prensa_Ploter_Procesados','#monitoreo','#pmonitoreo','','#cb_monitoreo','.0','','',
//'','MONITOREO DE COMPONENTES','ordenes/subirresgitro','ordenes/cambiarposicion','#m13','#m40',150,100,150,170,.5,'','#jqg_monitoreo_',
//'pg_pmonitoreo','../prensa/compprocesados','../ordenes/detalle','ordenes/sortable','#','3','../controlcalidad/recibirindigo','','','#rtsolaploter','','','','','','','','#errorcomponenteploterr','../errorcomponentes','','../planeacion/recibirerrorrescompo');
//
//
//prueba(monitoreo.OrdenID,monitoreo.Ordenamiento1,monitoreo.OrdArtSeqID,monitoreo.CatArticuloID,monitoreo.Nombre,monitoreo.StatusOrden,monitoreo.Total,monitoreo.Fecha,monitoreo.url,monitoreo.vista,monitoreo.tabla,monitoreo.paginador,monitoreo.btnbrincar,monitoreo.checkboxgral,
//monitoreo.status,monitoreo.btnsubir,monitoreo.btnbajar,monitoreo.btnguardar,monitoreo.caption,monitoreo.urlbrincar,monitoreo.urlcambiarpos,monitoreo.btnguardarpre,
//monitoreo.btnerror,monitoreo.anchosegundacolumna,monitoreo.anchoterceracolumna,monitoreo.anchosextacolumna,monitoreo.pultimacolumna,monitoreo.ultimacolumna,
//monitoreo.btnbricarcomponentes,monitoreo.fila,monitoreo.input,monitoreo.ploter,monitoreo.dialogos,monitoreo.urlsortable,monitoreo.pasaracontrolcalidad,monitoreo.statusproceso,
//monitoreo.urlparambiarstatusproceso,monitoreo.reportarerrordesdecontrolcalidad,monitoreo.etiquedado,monitoreo.etiquetado2,
//monitoreo.columna5,monitoreo.cabiarstatusdeordenpp,monitoreo.pasarapla,monitoreo.porfacturar,monitoreo.procesarcorteauto,monitoreo.urlprocesocorteauto,
//monitoreo.condstatusempaque,monitoreo.errorcomponente,monitoreo.urlerrorcomponente,monitoreo.regresarcomponente,monitoreo.urlparareportarerror);

///<<<<<<<<<<<GRID STATUS 601 Y 602

 var grig601 = new grid('OrdenID','','Cliente','OrdSTID','Facturado','FechaHoraEmision','MonTotal','FechaHoraEmision','../administracion/datosmmerror','ordenesporpagar','#datosfacturacion','#pdatosfacturacion','','#cb_datosfacturacion','6','','',
'','DATOS DE FACTURACIÓN','ordenes/subirresgitro','ordenes/cambiarposicion','','#m40',70,200,50,100,100,100,'#jqg_datosfacturacion_',
'pg_datosfacturacion','','../ordenes/detalle','ordenes/sortable','','2','','#opp','','','','../ajaxadministracion/pasarapagado','','','','','','','','','','','','','#cancelarorden');//70



prueba(grig601.OrdenID,grig601.Ordenamiento1,grig601.OrdArtSeqID,grig601.CatArticuloID,grig601.Nombre,grig601.StatusOrden,grig601.Total,grig601.Fecha,grig601.url,grig601.vista,grig601.tabla,grig601.paginador,grig601.btnbrincar,grig601.checkboxgral,
grig601.status,grig601.btnsubir,grig601.btnbajar,grig601.btnguardar,grig601.caption,grig601.urlbrincar,grig601.urlcambiarpos,grig601.btnguardarpre,
grig601.btnerror,grig601.anchosegundacolumna,grig601.anchoterceracolumna,grig601.anchosextacolumna,grig601.pultimacolumna,grig601.ultimacolumna,
grig601.btnbricarcomponentes,grig601.fila,grig601.input,grig601.ploter,grig601.dialogos,grig601.urlsortable,grig601.pasaracontrolcalidad,grig601.statusproceso,
grig601.urlparambiarstatusproceso,grig601.reportarerrordesdecontrolcalidad,grig601.etiquedado,grig601.etiquetado2,grig601.columna5,
grig601.cabiarstatusdeordenpp,grig601.pasarapla,grig601.porfacturar,grig601.procesarcorteauto,grig601.urlprocesocorteauto,
grig601.condstatusempaque,grig601.errorcomponente,grig601.urlerrorcomponente,grig601.regresarcomponente,grig601.urlparareportarerror,grig601.guia,grig601.etiquetasenviosfin
,grig601.regresarapreprensa,grig601.cancelarorden);


//grid´s de articulos Especiales

var especialProceso = new grid('OrdenID','Ordenamiento1','Nombre','CatArticuloID','OrdArtSeqID','Status_Orden','JobID','FechaHoraEmision','../ordenes/especialesproceso','GridProcesados','#enprocesoEspecial','#pagere2','#m1','#cb_enprocesoEspecial','125','#m10','#m11',
'#m3','EN PROCESO ARTICULOS ESPECIALES','ordenes/subirresgitro','ordenes/cambiarposicion','','',40,300,100,140,90,'','#jqg_enprocesoEspecial_',
'pg_pagere2','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','etiqu','','50','','','','','');//en la 8 para atras le quite #rt

prueba( especialProceso.OrdenID,especialProceso.Ordenamiento1,especialProceso.OrdArtSeqID,especialProceso.CatArticuloID,especialProceso.Nombre,especialProceso.StatusOrden,especialProceso.Total,especialProceso.Fecha,especialProceso.url,especialProceso.vista,especialProceso.tabla,especialProceso.paginador,especialProceso.btnbrincar,especialProceso.checkboxgral,
especialProceso.status,especialProceso.btnsubir,especialProceso.btnbajar,especialProceso.btnguardar,especialProceso.caption,especialProceso.urlbrincar,especialProceso.urlcambiarpos,especialProceso.btnguardarpre,
especialProceso.btnerror,especialProceso.anchosegundacolumna,especialProceso.anchoterceracolumna,especialProceso.anchosextacolumna,especialProceso.pultimacolumna,especialProceso.ultimacolumna,
especialProceso.btnbricarcomponentes,especialProceso.fila,especialProceso.input,especialProceso.ploter,especialProceso.dialogos,especialProceso.urlsortable,especialProceso.pasaracontrolcalidad,especialProceso.statusproceso,
especialProceso.urlparambiarstatusproceso,especialProceso.reportarerrordesdecontrolcalidad,especialProceso.etiquedado,especialProceso.etiquetado2,especialProceso.columna5,
especialProceso.cabiarstatusdeordenpp,especialProceso.pasarapla,especialProceso.porfacturar,especialProceso.procesarcorteauto,especialProceso.urlprocesocorteauto);

//grid pendientes modulo planeacion 
var especialPendiente = new grid('OrdenID','Ordenamiento1','Nombre','CatArticuloID','OrdArtSeqID','Status_Orden','JobID','FechaHoraEmision','../ordenes/especiales','GridPendientes','#enpendienteEspecial','#pagere3','#m2','#cb_enpendienteEspecial','150','#m15','#m16',
'','EN PENDIENTE ARTICULOS ESPECIALES','ordenes/subirresgitro','ordenes/cambiarposicion','','',40,300,100,140,90,'','#jqg_enpendienteEspecial_',
'3','prensa/compprocesados','ordenes/detalle','ordenes/sortable','','','','','','','50','','','','','');


prueba(especialPendiente.OrdenID,especialPendiente.Ordenamiento1,especialPendiente.OrdArtSeqID,especialPendiente.CatArticuloID,especialPendiente.Nombre,especialPendiente.StatusOrden,especialPendiente.Total,especialPendiente.Fecha,especialPendiente.url,especialPendiente.vista,especialPendiente.tabla,especialPendiente.paginador,especialPendiente.btnbrincar,especialPendiente.checkboxgral,
especialPendiente.status,especialPendiente.btnsubir,especialPendiente.btnbajar,especialPendiente.btnguardar,especialPendiente.caption,especialPendiente.urlbrincar,especialPendiente.urlcambiarpos,especialPendiente.btnguardarpre,
especialPendiente.btnerror,especialPendiente.anchosegundacolumna,especialPendiente.anchoterceracolumna,especialPendiente.anchosextacolumna,especialPendiente.pultimacolumna,especialPendiente.ultimacolumna,
especialPendiente.btnbricarcomponentes,especialPendiente.fila,especialPendiente.input,especialPendiente.ploter,especialPendiente.dialogos,especialPendiente.urlsortable,especialPendiente.pasaracontrolcalidad,especialPendiente.statusproceso,
especialPendiente.urlparambiarstatusproceso,especialPendiente.reportarerrordesdecontrolcalidad,especialPendiente.etiquedado,especialPendiente.etiquetado2,especialPendiente.columna5,
especialPendiente.cabiarstatusdeordenp);








});

 