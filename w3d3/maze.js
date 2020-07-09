
var counter=0;

$(function(){
   
        $("#start").mouseover(resetPoint);
        $("#maze .boundary").mouseover(turnRed);
        $("#end").mouseover(endPoint);
        $("#maze").mouseleave(leftGame);
  
});

function turnRed(evt) {
    $("#maze .boundary").addClass('youlose');
    counter ++;
}


function endPoint(evt){
    if(counter==0 &&  $("#start").mouseover()==true){
        $("#status").text("You won");
    }

    else{
        $("#status").text("You lost");
    }

}

function resetPoint(){
       
    $("#maze .boundary").css('background-color','#eeeeee');
    window.location.reload();
    //location.reload();
    // if($("#maze").mouseleave(leftGame)){
       
    //     counter++
    // }
}

function leftGame(evt){
    counter++;
}