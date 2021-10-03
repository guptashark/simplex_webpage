alert("Hello World!");

function calc_inverse(inv_mat, mat_A) {
  inv_mat[0][0] = mat_A[1][1];
  inv_mat[1][1] = mat_A[0][0];

  inv_mat[0][1] = mat_A[0][1] * -1;
  inv_mat[1][0] = mat_A[1][0] * -1;

  // determinant
  var det = mat_A[0][0] * mat_A[1][1] - mat_A[1][0] * mat_A[0][1];

  inv_mat[0][0] = inv_mat[0][0] / det;
  inv_mat[0][1] = inv_mat[0][1] / det;
  inv_mat[1][0] = inv_mat[1][0] / det;
  inv_mat[1][1] = inv_mat[1][1] / det;
}

// The first matrix is expected to be a 2x2
// The second is expected to be a 2x1.
// The output is expected to be a 2x1.
// (Meant to solve Ax = b, using
// A_inv * A * x = A_inv * b
// x = A_inv * b
function matrix_mult(x, A_inv, b) {
  x[0] = A_inv[0][0] * b[0] + A_inv[0][1] * b[1];
  x[1] = A_inv[1][0] * b[0] + A_inv[1][1] * b[1];
}

function calc_solution() {

  matrix_A = [[0, 0], [0, 0]];
  matrix_A[0][0] = parseInt(document.getElementById('input_a_11').value);
  matrix_A[0][1] = parseInt(document.getElementById('input_a_12').value);
  matrix_A[1][0] = parseInt(document.getElementById('input_a_21').value);
  matrix_A[1][1] = parseInt(document.getElementById('input_a_22').value);

  b_vec = [0, 0];
  b_vec[0] = parseInt(document.getElementById('input_b_1').value);
  b_vec[1] = parseInt(document.getElementById('input_b_2').value);

  inv_mat = [[0, 0], [0, 0]];
  soln_vec = [0, 0];

  calc_inverse(inv_mat, matrix_A);
  matrix_mult(soln_vec, inv_mat, b_vec);

  var out_x = document.getElementById('output_x');
  var out_y = document.getElementById('output_y');

  out_x.innerHTML = "x = " + soln_vec[0].toString();
  out_y.innerHTML = "y = " + soln_vec[1].toString();
}
