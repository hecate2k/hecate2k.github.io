document.getElementById("id_logic_version").innerHTML = "Logic = 2019.11.4.0";

window.addEventListener("deviceorientation",on_gyro_data_uab);
window.addEventListener("deviceorientation",on_acc_data_uab);

function on_gyro_data_uab(e){
    document.getElementById("id_alpha").innerHTML = e.alpha.toFixed(2);
    document.getElementById("id_beta").innerHTML = e.beta.toFixed(2);
    document.getElementById("id_gamma").innerHTML = e.gamma.toFixed(2);
}

function on_acc_data_uab(e){
    var acc = e.accelerationIncludingGravity;

    document.getElementById("id_x").innerHTML = acc.x.toFixed(2);
    document.getElementById("id_y").innerHTML = acc.y.toFixed(2);
    document.getElementById("id_z").innerHTML = acc.z.toFixed(2);
}