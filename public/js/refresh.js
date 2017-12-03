$(document).ready(function(){

                               (function(){
                                       var moviendo= false;
                                       document.onmousemove = function(){
                                              moviendo= true;
                                       };
                                       setInterval (function() {
                                          if (!moviendo) {
                                                location.reload();
                                             //alert("hola");
                                            
                                          } else {
                                              moviendo=false;
                                          }
                                       },30000); 
                                       
                                    }
                             
                              )()
                                
   });