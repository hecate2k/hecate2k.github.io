document.getElementById("id_logic_version").innerHTML = "Logic = 2019.11.4.3";

window.addEventListener("deviceorientation",on_gyro_data_uab);
window.addEventListener("devicemotion",on_acc_data_uab);

function deseneaza(unghi_x,unghi_y){
    var canvas = document.getElementById("id_canvas");
    var context = canvas.getContext("2d");
    var r = 10;
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    var x = unghi_x / 90 * (canvas.width / 2 - r) + canvas.width / 2;
    var y = unghi_y / 90 * (canvas.height / 2 - r) + canvas.height / 2;
    
    context.arc(x,y,r,0,2 * Math.Pi);
    context.stroke();
}

function on_gyro_data_uab(e){
    document.getElementById("id_alpha").innerHTML = e.alpha.toFixed(2);
    document.getElementById("id_beta").innerHTML = e.beta.toFixed(2);
    document.getElementById("id_gamma").innerHTML = e.gamma.toFixed(2);
    deseneaza(e.beta,e.gamma);
}

function on_acc_data_uab(e){
    var acc = e.accelerationIncludingGravity;

    document.getElementById("id_x").innerHTML = acc.x.toFixed(2);
    document.getElementById("id_y").innerHTML = acc.y.toFixed(2);
    document.getElementById("id_z").innerHTML = acc.z.toFixed(2);

    var rot_x = Math.atan(acc.x/acc.z)*100 / Math.PI;
    var rot_y = Math.atan(acc.y/acc.z)*100 / Math.PI;

    document.getElementById("id_rot_x").innerHTML = rot_x.toFixed(2);
    document.getElementById("id_rot_y").innerHTML = rot_y.toFixed(2);
}