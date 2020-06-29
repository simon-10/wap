


"use strict";

window.onload = function() {
    document.getElementById("btndecoration").onclick = changeTextSize;
    document.getElementById("chckbox").onchange = changeStyle;
};


let timer = null; 


function changeTextSize() {

    if (timer === null) {
        timer = setInterval(sizing, 500); 
   } else {
        clearInterval(timer);
        timer = null;
} 
  
   
}

function changeStyle(){
    let chkbx=document.getElementById("chckbox");
    if(chkbx.checked==true){
       
        document.getElementById("txtarea").style.fontWeight="bold";
        document.getElementById("txtarea").style.color="green";
        document.getElementById("txtarea").style.textDecoration="underline";
        document.body.style.background="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg') no-repeat center";
    }
    else if(chkbx.checked==false){

        document.getElementById("txtarea").style.fontWeight="normal" 
        document.getElementById("txtarea").style.color="black";
        document.getElementById("txtarea").style.textDecoration="none";


    }

}


function sizing() { 
    let a=document.getElementById("txtarea");
    let size=parseInt(a.style.fontSize);
   
    document.getElementById("txtarea").style.fontSize=(size+2)+"pt";

}
