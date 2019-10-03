
//user interface logic
$(document).ready(function(){
  //Code to toggle text and images in the "what we do section."
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

  //code to display project name on hover
  $('#work1').mouseenter(function () {
    $('.work-heading').filter('#work1-title').show("slow");
  }).mouseleave(function () {
    $('#work1-title').hide("fast");
  });  
  $('#work2').mouseenter(function () {
    $('.work-heading').filter('#work2-title').show("slow");
  }).mouseleave(function () {
    $('#work2-title').hide("fast");
  });  
  $('#work3').mouseenter(function () {
    $('.work-heading').filter('#work3-title').show("slow");
  }).mouseleave(function () {
    $('#work3-title').hide("fast");
  }); 
  $('#work4').mouseenter(function () {
    $('.work-heading').filter('#work4-title').show("slow");
  }).mouseleave(function () {
    $('#work4-title').hide("fast");
  });  
  $('#work5').mouseenter(function () {
    $('.work-heading').filter('#work5-title').show("slow");
  }).mouseleave(function () {
    $('#work5-title').hide("fast");
  });  
  $('#work6').mouseenter(function () {
    $('.work-heading').filter('#work6-title').show("slow");
  }).mouseleave(function () {
    $('#work6-title').hide("fast");
  });  
  $('#work7').mouseenter(function () {
    $('.work-heading').filter('#work7-title').show("slow");
  }).mouseleave(function () {
    $('#work7-title').hide("fast");
  });
  $('#work8').mouseenter(function(){
  $('.work-heading').filter('#work8-title').show("slow");
  }).mouseleave(function(){
  $('#work8-title').hide("fast");
  });

});