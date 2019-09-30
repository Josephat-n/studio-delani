$(document).ready(function(){
  $("img#design").click(function(){
    $(this).hide();
    $("p#des").css("display", "block");    
    });    
  $("p#des").click(function(){
    $(this).hide();
    $("img#design").show();
  }); 
});