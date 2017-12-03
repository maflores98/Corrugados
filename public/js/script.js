$(document).ready(function()
{
    $("#login").submit(function()
    {
        var cadena = $(this).serialize();
        $.post("Login/session",cadena,
            function(data){
                if(data.exito=="false")
                {
                    $("#errorLogin").html("<p style='color:red';font-size:60px !important;>"+data.validacion+"</p>");
                }
                if(data.exito=="true")
                {
                    window.location=path+"/index";
                }
            },'json'
        );
        return false;                   
    });
 
    $("#salir").click(function()
    {
        window.location='login/salir';
    });
});