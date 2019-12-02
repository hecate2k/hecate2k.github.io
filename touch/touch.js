document.getElementById("id_logic").innerHTML = "2019.12.02.0"

window.addEventListener("touchstart",touch_start_uab);

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

function touch_start_uab(p){
    var t = p.changedTouches.length;
    for(var i = 0 ; i<t;i++){
        context.beginPath();
        context.arc(t[i].pageX,t[i].pageY,10,0,2 * Math.PI);
        context.stroke();
    }
}