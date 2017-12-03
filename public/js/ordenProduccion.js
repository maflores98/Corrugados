$(document).ready(function()
{
    $("#btnRegresarOrdenes").click(function()
    {
        $(location).attr('href',"registros");
    });
    
    //Tooltip
    $('[data-toggle="collapse"], [data-toggle="tooltip"]').tooltip();
    
    //Boton Collapse
    $("#btn_collapse_in").click(function()
    {
        $(".collapse").removeClass("in");
        $(".boton_collapse_in").addClass("display_none");
        $(".boton_collapse").removeClass("display_none");
    });
    
    $("#btn_collapse").click(function()
    {
        $(".collapse").addClass("in");
        $(".boton_collapse_in").removeClass("display_none");
        $(".boton_collapse").addClass("display_none");
    });
    
    $("#btn_collapse_ipes_in").click(function()
    {
        $("#btn_collapse_ipes_in").addClass("display_none");
        $("#btn_collapse_ipes").removeClass("display_none");
    });
    
    $("#btn_collapse_ipes").click(function()
    {
        $("#btn_collapse_ipes_in").removeClass("display_none");
        $("#btn_collapse_ipes").addClass("display_none");
    });
    
    $("#btn_collapse_epetl_in").click(function()
    {   $("#btn_collapse_epetl_in").addClass("display_none");
        $("#btn_collapse_epetl").removeClass("display_none");
    });
    
    $("#btn_collapse_epetl").click(function()
    {
        $("#btn_collapse_epetl_in").removeClass("display_none");
        $("#btn_collapse_epetl").addClass("display_none");
    });
    
    $("#btn_collapse_ipep_in").click(function()
    {
        $("#btn_collapse_ipep_in").addClass("display_none");
        $("#btn_collapse_ipep").removeClass("display_none");
    });
    
    $("#btn_collapse_ipep").click(function()
    {
        $("#btn_collapse_ipep_in").removeClass("display_none");
        $("#btn_collapse_ipep").addClass("display_none");
    });
    
    $("#btn_collapse_ipedlr_in").click(function()
    {
        $("#btn_collapse_ipedlr_in").addClass("display_none");
        $("#btn_collapse_ipedlr").removeClass("display_none");
    });
    
    $("#btn_collapse_ipedlr").click(function()
    {
        $("#btn_collapse_ipedlr_in").removeClass("display_none");
        $("#btn_collapse_ipedlr").addClass("display_none");
    });
    
    $("#btn_collapse_edl_in").click(function()
    {
        $("#btn_collapse_edl_in").addClass("display_none");
        $("#btn_collapse_edl").removeClass("display_none");
    });
    
    $("#btn_collapse_ipedlr").click(function()
    {
        $("#btn_collapse_edl_in").removeClass("display_none");
        $("#btn_collapse_edl").addClass("display_none");
    });
    
	  $.post("../produccion/folioorden",{'tabla':'ordenes'},  
        function(data)
        {
           $("#op_ig_id_orden").val(data.folio);
           $("#op_ig_id_orden_div").html(data.folio);
            },'json'
      );
		
    //llenar combo clientes
    $.post("../produccion/consultaclienteop", 
        function(data)
        {
            for(i=0;i<data.rows.length;i++)
            {
                $("#op_ig_cliente").append("<option value='"+data.rows[i].Id_cliente+"'>"+data.rows[i].Nombre+"</option>");
            }
        },'json'
    );

    //llenar combo máquinas
  /*  $("#wid").click(function()
    {
    
        var idCliente=$("#op_ig_cliente").val();
        $("#op_suajes_id_maquina_cliente").val(idCliente);
        $("#op_suajes_maquina").empty();
        $("#op_suajes_maquina").html("<option>Seleccionar...</option");
        $.post("../produccion/consultamaquinasop",{'idCliente':idCliente}, 
            function(data)
            {
                for(i=0;i<data.rows.length;i++)
                {
                    $("#op_suajes_maquina").append("<option value='"+data.rows[i].Id_MaquinaC+"'>"+data.rows[i].Descripcion+"</option>");
                }
            },'json'
        );
    });*/
            
		$("#op_suajes_maquina").change(function(){
			var idMaquina=$(this).val();
		$.post("../produccion/consultaradiosop",{'idMaquina':idMaquina}, 
				function(data){
				//$("#op_suajes_madera").append("<option></option>");

				if(data.rows[0].Hule=="on")
                                {
                                    $("#idAhulado").attr('checked', 'checked');
                                }

				if(data.rows[0].Rama=="SI")
                                {
                                    $("#op_suajes_rama_si").attr('checked', 'checked');
                                }
                                if(data.rows[0].Rama=="NO")
                                {
                                        $("#op_suajes_rama_no").attr('checked', 'checked');
                                }
		           	if(data.rows[0].Pinza=="SI")
				     {
                  $("#op_suajes_pinza_si").attr('checked', 'checked');
				      }
				      if(data.rows[0].Pinza=="NO")
				     {
                  $("#op_suajes_pinza_no").attr('checked', 'checked');
				      }
				      //perforaciones
				      	if(data.rows[0].Perforaciones=="SI")
				     {
                  $("#op_suajes_perforaciones_si").attr('checked', 'checked');
				      }
				      if(data.rows[0].Perforaciones=="NO")
				     {
                  $("#op_suajes_perforaciones_no").attr('checked', 'checked');
				      }

				      //centerline
				      	if(data.rows[0].Centerline=="SI")
				     {
                  $("#op_suajes_centerline_si").attr('checked', 'checked');
				      }
				      if(data.rows[0].Centerline=="NO")
				     {
                  $("#op_suajes_centerline_no").attr('checked', 'checked');
				      }

				    //desbarbe

				     	if(data.rows[0].Desbarbe=="SI")
				     {
                  $("#op_suajes_desbarbe_si").attr('checked', 'checked');
				      }
				      if(data.rows[0].Desbarbe=="NO")
				     {
                  $("#op_suajes_desbarbe_no").attr('checked', 'checked');
				      }
		           
		           //compensación

				     	if(data.rows[0].Compensacion=="SI")
				     {
                  $("#op_suajes_compensación_si").attr('checked', 'checked');
				      }
				      if(data.rows[0].Compensacion=="NO")
				     {
                  $("#op_suajes_compensación_no").attr('checked', 'checked');
				      }

				     $("#op_suajes_rama_1").val(data.rows[0].MedidaRama);
				     $("#op_suajes_pinza_1").val(data.rows[0].MedidaPinza);

				     $("#op_suajes_centerline_input").val(data.rows[0].MedidaCenterline);
			},'json');


		});

		//combox



		$.post("../produccion/llenarcombos",{'tabla':'tipos_desarrollos'},
				function(data){
				for(i=0;i<data.rows.length;i++){
				$("#op_ig_desarrollo_con").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");

				}
				$("#op_ig_desarrollo_con").append("<option value='otrodesarrollo'>Otro</option>");
			},'json');

		$.post("../produccion/llenarcombos",{'tabla':'tipos_maderas'},
				function(data){
				for(i=0;i<data.rows.length;i++){
				$("#op_suajes_madera").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");

				}
				$("#op_suajes_madera").append("<option value='otraMadera'>Otro</option>");

			},'json');

		
		
		/*$.post("../produccion/llenarcombos",{'tabla':'tipos_trabajos'},
				function(data){
				for(i=0;i<data.rows.length;i++){
				$("#op_ig_tipo_trabajo").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");

				}

				$("#op_ig_tipo_trabajo").append("<option value='otrotipotrabajo'>Otro</option>");

			},'json');*/

$.post("../produccion/llenarcombocaja",{'tabla':'materiales'}, 
        function(data)
        {
            for(i=0;i<data.rows.length;i++)
            {
                $("#op_ig_tipoCaja").append("<option value='"+data.rows[i].Tipo+"'>"+data.rows[i].Tipo+"</option>");
              
            }

            $("#op_ig_tipoCaja").append("<option value='otrotipodecaja'>Otro</option>");
        },'json'
    );


	

			$("#op_ig_tipoCaja").change(function(){
				var caja=$("#op_ig_tipoCaja").val();
				$("#op_ig_sustrato").html("<option>Seleccionar...</option>");
				$("#op_ig_material").empty();
		$("#op_ig_material").html("<option value=''>Seleccionar...</option>");
			$.post("../produccion/extraermaterialesunicos",{'caja':$(this).val()}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_ig_material").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				
				}
				$("#op_ig_material").append("<option value='otromaterial'>Otro</option>");
			},'json');


				
			});





		$("#op_ig_material").change(function(){
					// obtener solo sustratos en relación al material

		var cadena="tabla=materiales&material="+$("#op_ig_material").val();
		$("#op_ig_sustrato").empty();
		$("#op_ig_sustrato").html("<option>Seleccionar...</option>");
		$.post("../produccion/extraersustratosunicos",cadena, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				//$("#op_ig_material").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				$("#op_ig_sustrato").append("<option value='"+data.rows[i].Sustrato+"'>"+data.rows[i].Sustrato+"</option>");
				
				}
		$("#op_ig_sustrato").append("<option value='otrosustrato'>Otro</option>");
			},'json');

		});


		$.post("../produccion/llenarcombos",{'tabla':'tipos_perforados'},
                    function(data)
                    {
                        for(i=0;i<data.rows.length;i++)
                        {
                            $("#op_suajes_perforado").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                            $("#op_suajes_perforado_2").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                            $("#op_suajes_perforado_3").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                            $("#op_suajes_perforado_4").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                        }
                        $("#op_suajes_perforado").append("<option value='otroperforado'>Otro</option>");
                        $("#op_suajes_perforado_2").append("<option value='otroperforado_2'>Otro</option>");
                        $("#op_suajes_perforado_3").append("<option value='otroperforado_3'>Otro</option>");
                        $("#op_suajes_perforado_4").append("<option value='otroperforado_4'>Otro</option>");
                    },'json'
                );

		$.post("../produccion/llenarcombos",{'tabla':'tipos_cortes'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){
				$("#op_suajes_tipo_de_corte").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				
				}
			$("#op_suajes_tipo_de_corte").append("<option value='otraTipoCorte'>Otro</option>");
			},'json');
                    
                    
                    $.post("../produccion/llenarcombos",{'tabla':'tipos_medidascorte'}, 
                        function(data)
                        {
                            for(i=0;i<data.rows.length;i++)
                            {
				$("#op_suajes_corte").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                $("#op_suajes_corte_2").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                $("#op_suajes_corte_3").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				$("#op_suajes_precorte").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                            }
                            $("#op_suajes_corte").append("<option value='otroCorte'>Otro</option>");
                            $("#op_suajes_corte_2").append("<option value='otroCorte_2'>Otro</option>");
                            $("#op_suajes_corte_3").append("<option value='otroCorte_3'>Otro</option>");
                            $("#op_suajes_precorte").append("<option value='otroprecorte'>Otro</option>");
			},'json'
                    );

                    $("#op_suajes_corte").change(function()
                    {
                        if($(this).val()!="")
                        {
                            $.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
                                function(data)
                                {
                                    for(i=0;i<data.rows.length;i++)
                                    {
                                        $("#op_suajes_corte_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                        //$("#op_suajes_precorte_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                    }
                                    $("#op_suajes_corte_pts").append("<option value='otroptscorte'>Otro</option>");
                                    //$("#op_suajes_precorte_pts").append("<option value='otroptsprecorte'>Otro</option>");
                                },'json'
                            );
                        }
                        else
                        {
                            $("#op_suajes_corte_pts").html("<option value=''>Seleccionar...</option>");		
                        }
                    });

                    $("#op_suajes_corte_2").change(function()
                    {
                        if($(this).val()!="")
                        {
                            $.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
                                function(data)
                                {
                                    for(i=0;i<data.rows.length;i++)
                                    {
                                        $("#op_suajes_corte_pts_2").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                        //$("#op_suajes_precorte_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                    }
                                    $("#op_suajes_corte_pts_2").append("<option value='otroptscorte_2'>Otro</option>");
                                    //$("#op_suajes_precorte_pts").append("<option value='otroptsprecorte'>Otro</option>");
                                },'json'
                            );
                        }
                        else
                        {
                            $("#op_suajes_corte_pts_2").html("<option value=''>Seleccionar...</option>");		
                        }
                    });

                    $("#op_suajes_corte_3").change(function()
                    {
                        if($(this).val()!="")
                        {
                            $.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
                                function(data)
                                {
                                    for(i=0;i<data.rows.length;i++)
                                    {
                                        $("#op_suajes_corte_pts_3").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                        //$("#op_suajes_precorte_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                    }
                                    $("#op_suajes_corte_pts_3").append("<option value='otroptscorte_3'>Otro</option>");
                                    //$("#op_suajes_precorte_pts").append("<option value='otroptsprecorte'>Otro</option>");
                                },'json'
                            );
                        }
                        else
                        {
                            $("#op_suajes_corte_pts_3").html("<option value=''>Seleccionar...</option>");		
                        }
                    });


		   //precorte

		   $("#op_suajes_precorte").change(function(){
		   		if($(this).val()!=""){
		   			$.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				//$("#op_suajes_corte_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				$("#op_suajes_precorte_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
			
				}

				//$("#op_suajes_corte_pts").append("<option value='otroptscorte'>Otro</option>");
				$("#op_suajes_precorte_pts").append("<option value='otroptsprecorte'>Otro</option>");
			},'json');


		   		}else{

		       $("#op_suajes_precorte_pts").html("<option value=''>Seleccionar...</option>");		
		   		}

		   });

		   //doblez

		   $("#op_suajes_dobles").change(function(){
		   		if($(this).val()!=""){
		   	$.post("../produccion/llenarcombos",{'tabla':'tipos_ptsdoblez'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_suajes_dobles_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
			
				}
				$("#op_suajes_dobles_pts").append("<option value='otroptsdobles'>Otro</option>");
			},'json');
		   		}else{


		    $("#op_suajes_dobles_pts").html("<option value=''>Seleccionar...</option>");	
		   		}


		   });


                //perforado
                $("#op_suajes_perforado").change(function()
                {
                    if($(this).val()!="")
                    {
                        $.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
                            function(data)
                            {
                                for(i=0;i<data.rows.length;i++)
                                {
                                    $("#op_suajes_perforado_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                }
				$("#op_suajes_perforado_pts").append("<option value='otroptsperforado'>Otro</option>");
                            },'json'
                        );
                    }
                    else
                    {
                        $("#op_suajes_perforado_pts").html("<option value=''>Seleccionar...</option>");
                    }
                });
                
                $("#op_suajes_perforado_2").change(function()
                {
                    if($(this).val()!="")
                    {
                        $.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
                            function(data)
                            {
                                for(i=0;i<data.rows.length;i++)
                                {
                                    $("#op_suajes_perforado_pts_2").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                }
				$("#op_suajes_perforado_pts_2").append("<option value='otroptsperforado_2'>Otro</option>");
                            },'json'
                        );
                    }
                    else
                    {
                        $("#op_suajes_perforado_pts_2").html("<option value=''>Seleccionar...</option>");
                    }
                });
                
                $("#op_suajes_perforado_3").change(function()
                {
                    if($(this).val()!="")
                    {
                        $.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
                            function(data)
                            {
                                for(i=0;i<data.rows.length;i++)
                                {
                                    $("#op_suajes_perforado_pts_3").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                }
				$("#op_suajes_perforado_pts_3").append("<option value='otroptsperforado_3'>Otro</option>");
                            },'json'
                        );
                    }
                    else
                    {
                        $("#op_suajes_perforado_pts_3").html("<option value=''>Seleccionar...</option>");
                    }
                });
                
                $("#op_suajes_perforado_4").change(function()
                {
                    if($(this).val()!="")
                    {
                        $.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
                            function(data)
                            {
                                for(i=0;i<data.rows.length;i++)
                                {
                                    $("#op_suajes_perforado_pts_4").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                                }
				$("#op_suajes_perforado_pts_4").append("<option value='otroptsperforado_4'>Otro</option>");
                            },'json'
                        );
                    }
                    else
                    {
                        $("#op_suajes_perforado_pts_4").html("<option value=''>Seleccionar...</option>");
                    }
                });

		  //sacabocados

		  $("#op_suajes_sacabocados").change(function(){
		  		if($(this).val()!=""){
		  			$.post("../produccion/llenarcombos",{'tabla':'tipos_medidassacabocados'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_suajes_sacabocados_medida").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
			
				}
				$("#op_suajes_sacabocados_medida").append("<option value='otramedsaca'>Otro</option>");
			},'json');
		  		}else{
		  	 $("#op_suajes_sacabocados_medida").html("<option value=''>Seleccionar...</option>");


		  		}


		  });



		$.post("../produccion/llenarcombos",{'tabla':'tipos_medidasdoblez'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){
				$("#op_suajes_dobles").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");

				}
			  $("#op_suajes_dobles").append("<option value='otrodobles'>Otro</option>");
			},'json');

		
		$.post("../produccion/llenarcombos",{'tabla':'tipos_maderas'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_tablimp_hembra_madera").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");

				}
				$("#op_tablimp_hembra_madera").append("<option value='otramaderalimhembra'>Otro</option>");
			},'json');

		$.post("../produccion/llenarcombos",{'tabla':'tipos_maderas'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_tablimp_macho_madera").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");

				}
				$("#op_tablimp_macho_madera").append("<option value='otrotipolimmaderamacho'>Otro</option>");
			},'json');


		$.post("../produccion/llenarcombos",{'tabla':'tipos_materialpertinax'}, 
                    function(data)
                    {
                        for(i=0;i<data.rows.length;i++)
                        {
                            $("#op_pertinax_material").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                        }
                    },'json'
                );

		$.post("../produccion/llenarcombos",{'tabla':'tipos_tablaslimpiadoras'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_tablimp_hembra_maderaTipo").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				$("#op_tablimp_macho_maderaTipo").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");

				}

				$("#op_tablimp_hembra_maderaTipo").append("<option value='otrotipolimmaderahembra'>Otro</option>");
				$("#op_tablimp_macho_maderaTipo").append("<option value='otrotipolimmaderamacho'>Otro</option>");
			},'json');
		

			$.post("../produccion/llenarcombos",{'tabla':'tipos_laminas'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_lamrayadas_lamina").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				
				}
				$("#op_lamrayadas_lamina").append("<option value='otralaminarayada'>Otro</option>");
			},'json');

			$.post("../produccion/llenarcombos",{'tabla':'tipos_complejidades'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_ig_complejidad").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				
				}
				$("#op_ig_complejidad").append("<option value='otracomplejidad'>Otro</option>");
			},'json');

			

			$.post("../produccion/llenarcombos",{'tabla':'tipos_prioridades'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_ig_prioridad").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				
				}
			},'json');

			$.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				//$("#op_suajes_corte_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				//$("#op_suajes_precorte_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
			
				}

				//$("#op_suajes_corte_pts").append("<option value='otroptscorte'>Otro</option>");
				//$("#op_suajes_precorte_pts").append("<option value='otroptsprecorte'>Otro</option>");
			},'json');
			$.post("../produccion/llenarcombos",{'tabla':'tipos_ptsdoblez'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				//$("#op_suajes_dobles_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
			
				}
				//$("#op_suajes_dobles_pts").append("<option value='otroptsdobles'>Otro</option>");
			},'json');

			$.post("../produccion/llenarcombos",{'tabla':'tipos_ptscorte'}, 
                            function(data)
                            {
				for(i=0;i<data.rows.length;i++)
                                {
                                    //$("#op_suajes_perforado_pts").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
				}
				//$("#op_suajes_perforado_pts").append("<option value='otroptsperforado'>Otro</option>");
                            },'json'
                        );

			$.post("../produccion/llenarcombos",{'tabla':'tipos_sacabocados'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_suajes_sacabocados").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
			
				}
				$("#op_suajes_sacabocados").append("<option value='otrosacabocados'>Otro</option>");
			},'json');


			$.post("../produccion/llenarcombos",{'tabla':'tipos_marcasplecas'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				$("#op_suajes_placa").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
			
				}
				$("#op_suajes_placa").append("<option value='otramarcapleca'>Otro</option>");
			},'json');

			$.post("../produccion/llenarcombos",{'tabla':'tipos_medidassacabocados'}, 
				function(data){
				for(i=0;i<data.rows.length;i++){

				//$("#op_suajes_sacabocados_medida").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
			
				}
				//$("#op_suajes_sacabocados_medida").append("<option value='otramedsaca'>Otro</option>");
			},'json');
			//llenar combos con condicion de material y sustrato
			
			$("#op_ig_material,#op_ig_sustrato").change(function(){

				var material=$("#op_ig_material").val();
				var sustrato=encodeURIComponent($("#op_ig_sustrato").val());


				var parametros="material="+material+"&sustrato="+sustrato;
				$.post("../produccion/llenarcondicionsustrato",parametros,
					function(data){
						$("#op_suajes_descuento").empty();
						$("#op_pertinax_phenolic").empty();
						$("#op_pertinax_ancho_hilo").empty();
						$("#op_pertinax_ancho_contrahilo").empty();
                        $("#op_pertinax_profundidad").empty();

             $("#op_suajes_descuento").html("<option value=''>Seleccionar...</option>");
                $("#op_pertinax_phenolic").html("<option value=''>Seleccionar...</option>");
               $("#op_pertinax_ancho_hilo").html("<option value=''>Seleccionar...</option>");
               $("#op_pertinax_ancho_contrahilo").html("<option value=''>Seleccionar...</option>");
               $("#op_pertinax_profundidad").html("<option value=''>Seleccionar...</option>");
						
							for(i=0;i<data.rows.length;i++){
				$("#op_suajes_descuento").append("<option value='"+data.rows[i].descuento+"'>"+data.rows[i].descuento+"</option>");
				$("#op_pertinax_phenolic").append("<option value='"+data.rows[i].phelonic+"'>"+data.rows[i].phelonic+"</option>");
				$("#op_pertinax_ancho_hilo").append("<option value='"+data.rows[i].hilo+"'>"+data.rows[i].hilo+"</option>");
				$("#op_pertinax_ancho_contrahilo").append("<option value='"+data.rows[i].contrahilo+"'>"+data.rows[i].contrahilo+"</option>");
				$("#op_pertinax_profundidad").append("<option value='"+data.rows[i].profundidad+"'>"+data.rows[i].profundidad+"</option>");
										}
				
				$("#op_suajes_descuento").append("<option value='otroDesc'>Otro</option>");

				$("#op_pertinax_phenolic").append("<option value='otropertonoli'>Otro</option>");
				$("#op_pertinax_ancho_hilo").append("<option value='otrohilopertinax'>Otro</option>");
				$("#op_pertinax_ancho_contrahilo").append("<option value='otrocontrahilopertinax'>Otro</option>");
				$("#op_pertinax_profundidad").append("<option value='otroprofundidadper'>Otro</option>");
									},'json'

					);


			});

//color pertinax colorPertinax
 $.post("../produccion/llenarcombos",{'tabla':'tipos_materialpertinax'}, 
        function(data)
        {
            for(i=0;i<data.rows.length;i++)
            {
                $("#colorPertinax").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
               
            }
              $("#colorPertinax").append("<option value='otroColorPer'>Otro</option>");
        },'json'
    );



 $.post("../produccion/llenarcombos",{'tabla':'tipos_profundidades'}, 
        function(data)
        {
            for(i=0;i<data.rows.length;i++)
            {
                $("#op_lamrayadas_profundidad").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
                $("#op_pertinax_profundidad").append("<option value='"+data.rows[i].Descripcion+"'>"+data.rows[i].Descripcion+"</option>");
            }
              $("#op_lamrayadas_profundidad").append("<option value='otroprofunr'>Otro</option>");
        },'json'
    );

  $.post("../produccion/extraerhilosunicos",{'tabla':'materiales'}, 
        function(data)
        {
            for(i=0;i<data.rows.length;i++)
            {
                $("#op_lamrayadas_ancho_hilo").append("<option value='"+data.rows[i].hilo+"'>"+data.rows[i].hilo+"</option>");
              
            }

            $("#op_lamrayadas_ancho_hilo").append("<option value='otroanchor'>Otro</option>");
        },'json'
    );

    $.post("../produccion/extraercontrahilosunicos",{'tabla':'materiales'}, 
        function(data)
        {
            for(i=0;i<data.rows.length;i++)
            {
                $("#op_lamrayadas_ancho_contrahilo").append("<option value='"+data.rows[i].contrahilo+"'>"+data.rows[i].contrahilo+"</option>");
              
            }

             $("#op_lamrayadas_ancho_contrahilo").append("<option value='otrocontrar'>Otro</option>");
        },'json'
    );


		$("#btnLiberarOrdenes").click(function(){
         	$("#gop").trigger("click");

		});

		$("#op").submit(function(){
         	var datosOp=$("#op").serialize();
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
            
			$.post("../produccion/guardarop",datosOp,
				function(data){
					window.location='registros';

				},'json'


				);
			
			return false;

		});


          $("#clonar").click(function(){
          	
          	$("#opEditar input").attr("disabled", false);
            $("#opEditar select").attr("disabled", false);
            $("#op_suajes_nota").attr("disabled", false);
            $("#op_suajes_nota_lim").attr("disabled", false);
            $("#op_pertinax_nota_pertinax").attr("disabled", false);
            $("#op_lamrayadas_nota").attr("disabled", false);

              var datosClon=$("#opEditar").serialize();
			   $.blockUI({ css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: .3, 
                    color: '#fff' 
                } }); 

                  setTimeout($.unblockUI, 300000000); 

              $.post("../produccion/clonar",datosClon,
              	function(data){
              		window.location='registros';
              	},'json'


              	);

          });
           $( "#dialog-motivo-cancela" ).dialog({
           			  modal: true,
                      autoOpen: false,
                      width: '350',
                      height: '250',
                      buttons: {
                      	Cerrar: function() {
                      
                          $( this ).dialog( "close" );
                      },
                        Aceptar: function() {
                   			
          	$("#opEditar input").attr("disabled", false);
            $("#opEditar select").attr("disabled", false);
            $("#op_suajes_nota").attr("disabled", false);
            $("#op_suajes_nota_lim").attr("disabled", false);
            $("#op_pertinax_nota_pertinax").attr("disabled", false);
            $("#op_lamrayadas_nota").attr("disabled", false);
              var notaCancela="&motivo="+$("#op_nota_cancela").val();
              var datosClon=$("#opEditar").serialize()+notaCancela;
            
             $.blockUI({ css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: .3, 
                    color: '#fff',
                   
                } }); 

                  setTimeout($.unblockUI, 5000); 

              $.post("../produccion/cancelarorden",datosClon,
              	function(data){
              		window.location='registros';
              	},'json'


              	);

              $( this ).dialog( "close" );
                     

                     }
                       
                }
              });



          $("#cancelaOrden").click(function(){
          		 $( "#dialog-motivo-cancela" ).dialog("open");

          });






});