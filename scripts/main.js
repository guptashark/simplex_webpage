alert("Hello World!");

function helper_fn(soln_arr, input_arr) {
  soln_arr[0] = input_arr[0] + input_arr[1];
  soln_arr[1] = input_arr[2] + input_arr[3];
}

function calc_solution() {
  var a_11 = parseInt(document.getElementById('input_a_11').value);
  var a_12 = parseInt(document.getElementById('input_a_12').value);
  var a_21 = parseInt(document.getElementById('input_a_21').value);
  var a_22 = parseInt(document.getElementById('input_a_22').value);

  soln_arr = [0, 0];
  input_arr = [a_11, a_12, a_21, a_22];
  helper_fn(soln_arr, input_arr);

  var out_x = document.getElementById('output_x');
  var out_y = document.getElementById('output_y');

  out_x.innerHTML = "x = " + soln_arr[0].toString();
  out_y.innerHTML = "y = " + soln_arr[1].toString();
}
