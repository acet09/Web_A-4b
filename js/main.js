"use strict"
// Jquery
$(document).ready(function(){
  // nav#gnb
  $(".gnb__main > li").hover(function(){
    $(".gnb__sub, .gnb--bg").stop().slideDown(200);
  },function(){
    $(".gnb__sub, .gnb--bg").stop().slideUp(200);
  });

  // slide
  $(".slide--box > div").hide();
  $(".slide--box > div:first").show();
  function slidemove(){
    $(".slide--box > div:first").fadeOut().next().fadeIn().end().appendTo(".slide--box");  
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $(".notice--box ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });


});