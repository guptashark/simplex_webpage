alert("Hello World!");

function calc_solution() {
  var a_11 = parseInt(document.getElementById('input_a_11').value);
  var a_12 = parseInt(document.getElementById('input_a_12').value);
  var a_21 = parseInt(document.getElementById('input_a_21').value);
  var a_22 = parseInt(document.getElementById('input_a_22').value);

  var x = a_11 + a_21;
  var y = a_12 + a_22;

  var out_x = document.getElementById('output_x');
  var out_y = document.getElementById('output_y');

  out_x.innerHTML = "x = " + x.toString();
  out_y.innerHTML = "y = " + y.toString();
}
