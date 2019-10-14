document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.14.5";
document.getElementById("id_button").addEventListener("click",solve_ec2);

function read_coeficients(){
  var a = document.getElementById("id_a").value;
  var b = document.getElementById("id_b").value;
  var c = document.getElementById("id_c").value;

  var coef = [];
  coef.push(a);
  coef.push(b);
  coef.push(c);

  return coef;
}

function compute_solution(coef){
  var delta = coef[1] * coef[1] - 4 * coef[0] * coef[2] ;
  var x1_re, x1_im, x2_re, x2_im;
  if(delta >= 0){
    x1_re = (-coef[1] -Math.sqrt(delta)) / (2*coef[0]);
    x2_re = ( -coef[1] + Math.sqrt(delta)) / ( 2*coef[0] );
    x1_im = 0;
    x2_im = 0;
  }else {
    x1_re = (-coef[1])/(2*coef[0]);
    x2_re = (-coef[1])/(2*coef[0]);
    x1_im = -Math.sqrt(-delta) / (2*coef[0]);
    x2_im = +Math.sqrt(-delta) / (2*coef[0]);
  }
  var sol = [];
  sol.push(x1_re);
  sol.push(x1_im);
  sol.push(x2_re);
  sol.push(x2_im);

  return sol;
}

function print_solutions(sol){
  document.getElementById("id_x1").innerHTML = "x1 = "+ sol[0] + "+" + sol[1] + "i";
  document.getElementById("id_x2").innerHTML = "x2 = "+ sol[2] + "+" + sol[3] + "i";
}

function solve_ec2(){
  var coef = read_coeficients();
  var sol = compute_solution(coef);
  print_solutions(sol);
}
