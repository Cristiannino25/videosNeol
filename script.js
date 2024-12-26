// Sélectionner le bouton et la zone vidéo
const showVideoBtn = document.getElementById("show-video-btn");
const videoContainer = document.getElementById("video-container");

// Lorsque l'utilisateur clique sur le bouton, afficher la vidéo
showVideoBtn.addEventListener("click", function () {
  // Afficher le conteneur vidéo
  videoContainer.style.display = "block";

  // Cacher le bouton après le clic
  showVideoBtn.style.display = "none";
});
