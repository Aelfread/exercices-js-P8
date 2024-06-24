// S'assurer que l'affichage est vide au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  clearDisplay();

  // Ajouter des écouteurs d'événements pour les boutons numériques et d'opérateurs
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      appendToDisplay(button.getAttribute("data-value"));
    });
  });

  // Ajouter un écouteur d'événement pour le bouton de remise à zéro
  const clearButton = document.querySelector(".btn-clear");
  clearButton.addEventListener("click", clearDisplay);

  // Ajouter un écouteur d'événement pour le bouton égal
  const equalButton = document.querySelector(".btn-equal");
  equalButton.addEventListener("click", calculateResult);
});

// Fonction pour ajouter des caractères au champ d'affichage
function appendToDisplay(value) {
  const display = document.getElementById("display");
  // Vérifie si la valeur affichée est 'Erreur' et la réinitialise
  if (display.value === "Erreur") {
    display.value = "";
  }
  display.value += value;
}

// Fonction pour effacer le champ d'affichage
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}
// Fonction pour calculer le résultat de l'expression
function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Vérifier que l'expression est valide avant d'utiliser eval
    if (isValidExpression(display.value)) {
      // Évaluer l'expression
      const result = eval(display.value);
      // Vérifier si le résultat est Infinity (division par zéro)
      if (!isFinite(result)) {
        display.value = "Division by zero is not allowed";
      } else {
        display.value = result;
      }
    } else {
      display.value = "Erreur";
    }
  } catch (e) {
    display.value = "Erreur";
  }
}
// Fonction pour vérifier si l'expression est valide
function isValidExpression(expression) {
  // Vérifie si l'expression contient uniquement des chiffres et des opérateurs de base
  const validPattern = /^[0-9+\-*/.()]+$/;
  return validPattern.test(expression);
}
