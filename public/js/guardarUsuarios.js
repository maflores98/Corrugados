$(document).ready(function(){
	   $("#mensajeError").hide();
     $("#registraUsuarios").submit(function(){

        var udatos=$(this).serialize();
        var identificadorUsuarios=$("#identificadorUsuarios").val();

        var pass1=$("#pwd").val();
        var pass2=$("#pwd2").val();

        if(pass1==pass2){
          $("#mensajeError").hide();
         if(identificadorUsuarios==1){
          
            urlGuardar="usuarios/actualizarregistros";

          }else{

              urlGuardar="usuarios/registro";
          }
     $.post(urlGuardar,udatos,
          function(data){
             document.getElementById("registraUsuarios").reset();
            $("#gridUsuarios").trigger("reloadGrid");
             $("#identificadorUsuarios").val(0);
               $( "#dialog-usuarios" ).dialog("close");
          },'json'  );


          }else{
            $('#pwd2').prop('type', 'password');
            $("#pwd2").focus();
            $("#pwd2").select();
            $("#mensajeError").show();
             setTimeout(function() {
                   $("#mensajeError").fadeOut(8000);
                    },250);
          }


        return false;

        
     });

});
