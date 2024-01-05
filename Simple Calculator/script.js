
let displayNum = document.getElementById("displayNum");
function appendToDisplay(input) {
  displayNum.value += input;
}
function clearDisplay() {
  displayNum.value = "";
}
function calculate() {
  try {
    displayNum.value = eval(displayNum.value);
  } catch {
    displayNum.value = "Error";
  }
}
