document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.14.2";
document.getElementById("id_button").addEventListener("click",solve_ec2);

function read_coeficients(){
  var a = document.getElementById("id_a").value;
  var b = document.getElementById("id_b").value;
  var c = document.getElementById("id_c").value;

  var coef = {};
  coef.a = a;
  coef.b = b;
  coef.c = c;

  return coef;
}

function compute_solution(coef){
  var delta = coef.b * coef.b - 4 * coef.a * coef.c ;
  var x1_re, x1_im, x2_re, x2_im;
  if(delta >= 0){
    x1_re = (-coef.b -Math.sqrt(delta)) / (2*coef.a);
    x2_re = ( -coef.b + Math.sqrt(delta)) / ( 2*coef.a );
    x1_im = 0;
    x2_im = 0;
  }else {
    x1_re = (-coef.b)/(2*coef.a);
    x2_re = (-coef.b)/(2*coef.a);
    x1_im = -Math.sqrt(-delta) / (2*coef.a);
    x2_im = +Math.sqrt(-delta) / (2*coef.a);
  }
  var sol = {};
  sol.x1_re = x1_re;
  sol.x1_im = x1_im;
  sol.x2_re = x2_re;
  sol.x2_im = x2_im;

  return sol;
}

function print_solutions(sol){
  document.getElementById("id_x1").innerHTML = "x1 = "+ sol.x1_re + "+" + sol.x1_im + "i";
  document.getElementById("id_x2").innerHTML = "x2 = "+ sol.x2_re + "+" + sol.x2_im + "i";
}

function solve_ec2(){
  var coef = read_coeficients();
  var sol = compute_solution(coef);
  print_solutions(sol);
}
