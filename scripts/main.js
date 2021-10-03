alert("Hello World!");

function helper_fn(soln_arr, input_arr) {
  soln_arr[0] = input_arr[0][0] + input_arr[0][1];
  soln_arr[1] = input_arr[1][0] + input_arr[1][1];
}

function calc_solution() {

  matrix_A = [[0, 0], [0, 0]];
  matrix_A[0][0] = parseInt(document.getElementById('input_a_11').value);
  matrix_A[0][1] = parseInt(document.getElementById('input_a_12').value);
  matrix_A[1][0] = parseInt(document.getElementById('input_a_21').value);
  matrix_A[1][1] = parseInt(document.getElementById('input_a_22').value);

  soln_arr = [0, 0];
  helper_fn(soln_arr, matrix_A);

  var out_x = document.getElementById('output_x');
  var out_y = document.getElementById('output_y');

  out_x.innerHTML = "x = " + soln_arr[0].toString();
  out_y.innerHTML = "y = " + soln_arr[1].toString();
}
