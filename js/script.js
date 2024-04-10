
function volumeCalculator(){
  // Get the values of the input fields
  let sideA = document.getElementById("side-a").value;
  let sideB = document.getElementById("side-b").value;
  let sideC = document.getElementById("side-c").value;

  // Calculate the volume
  let volume = 1/6 * sideA * sideB * sideC

  // Display the result
  document.getElementById("result").innerHTML = "The volume of the triangular pyramid is " + volume.toFixed(2) + " cm<sup>3</sup>.";
}