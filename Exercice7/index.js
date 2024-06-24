function convertToBinary() {
  var decimalInput = document.getElementById("decimalInput").value;
  var binaryResult = "";

  // Check if input is a valid number
  if (!isNaN(decimalInput) && decimalInput.trim() !== "") {
    binaryResult = parseInt(decimalInput, 10).toString(2);
  }

  document.getElementById("binaryResult").textContent = binaryResult;
}
