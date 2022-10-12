$(document).ready(function(){

  setInterval(function(){
    $('#enil ul').animate({
      top : '-550px'
    },600,function(){
      $('#enil ul').append($('#enil ul li').eq(0));
      $('#enil ul').css({top:0});
    })
  },3000);


})

