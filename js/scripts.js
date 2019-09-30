$(document).ready(function(){
  $("img#design").click(function(){ //disp design content
    $(this).hide();
    $("p#des").css("display", "block");    
    });    
  $("p#des").click(function(){ //hide design content
    $(this).hide();
    $("img#design").show();
  }); 
  $("img#development").click(function(){ //disp development  content
    $(this).hide();
    $("p#dev").css("display", "block");    
    });    
  $("p#dev").click(function(){ //hide development content
    $(this).hide();
    $("img#development").show();
  }); 
  $("img#product").click(function(){ //disp product content
    $(this).hide();
    $("p#pdct").css("display", "block");    
    });    
  $("p#pdct").click(function(){ //hide product content
    $(this).hide();
    $("img#product").show();
  }); 

});