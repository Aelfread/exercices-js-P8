// Attendre que le DOM soit entièrement chargé avant d'ajouter l'observateur d'événement
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le bouton par son ID
  const button = document.getElementById("myButton");

  // Ajouter un observateur d'événement pour le clic sur le bouton
  button.addEventListener("click", function () {
    // Sélectionner le paragraphe par son ID
    const messageParagraph = document.getElementById("message");

    // Modifier le texte du paragraphe
    messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  });
});
