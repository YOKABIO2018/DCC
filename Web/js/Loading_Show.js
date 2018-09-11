$(function(){
 $("header").css("display","none");
 $("main").css("display","none");
 $("#page_top").css("display","none");
 //$("#main_image").css("display","none");
 $("footer").css("display","none");
});

$(window).on("load",function(){
  //$("#main_image").fadeIn("normal");
  $("main").fadeIn("slow");
  $("#page_top").fadeIn("slow");
  $("footer").fadeIn("slow");
  $("header").delay(600).slideDown("slow");
});
