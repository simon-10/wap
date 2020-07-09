
$(document).ready(function(){
    var tim=null;

    $('#start').click(function(){
      const txtCircles=parseInt($('#numbercircles').val());

     for(let i=0;i<txtCircles; i++ ){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";


        $("<div></div>")
        .addClass("circle")
        .css("background-color", bgColor)
        .insertAfter("#controls");
       
    }

    tim=setInterval(resizer, $('#growthrate').val());
   
  })






  function resizer(){
  
    const txtWidth=parseInt($('#width').val());
    const cssWidth=parseInt($('.circle').css("width"));
    const txtGrowth=parseInt($('#growthamount').val());
              
    $('.circle').css("width", parseInt($('.circle').css('width')) + txtGrowth + "px");
    $('.circle').css("height", parseInt($('.circle').css('width')) + txtGrowth + "px");



    $(".circle").click(function() {
        clearInterval(tim);
        $('.circle').css("width", 0 + "px");
        $('.circle').css("height", 0 + "px");
        
      });
    
  }

})