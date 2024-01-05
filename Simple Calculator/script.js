// let get display id input tag
let displayNum = document.getElementById("displayNum");
// we have 3 three function to implement
function appendToDisplay(input) {
  displayNum.value += input;
}
function clearDisplay() {
  //this is for clearing value in the input
  displayNum.value = "";
}
function calculate() {
  // this is for calculate after we give a input
  try {
    displayNum.value = eval(displayNum.value);
  } catch {
    displayNum.value = "Error";
  }
}
