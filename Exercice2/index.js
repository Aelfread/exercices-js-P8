// Créez votre fonction ici
function calculate(num1, num2, operator) {
  // Convert num1 and num2 to numbers to handle string inputs
  const number1 = Number(num1);
  const number2 = Number(num2);

  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      if (number2 === 0) {
        return "Division by zero is not allowed";
      }
      return number1 / number2;
    default:
      return "Invalid operator";
  }
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"
export default calculate;
