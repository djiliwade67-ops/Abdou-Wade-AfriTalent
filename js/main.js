/* ============================================================
   AFRITALENT — DARK MODE TOGGLE
   À coller dans votre fichier js/main.js
   ============================================================ */

  const moonIcon = document.querySelector('.fa-moon, .fa-sun');
  const body    = document.body;

  /* --- Restaure la préférence sauvegardée --- */
  if (localStorage.getItem('afritalent-dark') === 'true') {
    body.classList.add('dark-mode');
   
      moonIcon.classList.remove('fa-moon');
      moonIcon.classList.add('fa-sun');
    
  }

  /* --- Toggle au clic sur l'icône --- */
    moonIcon.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');

      /* Sauvegarde la préférence */
      localStorage.setItem('afritalent-dark', isDark);

      /* Change l'icône lune ↔ soleil */
      if (isDark) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
      } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
      }
    });


/* ============================================================
   EFFECT SHRINK
   ============================================================ */
 // 1. On déclare les variables au début du script
const navbar = document.querySelector('.navbar');
const boutton_retour = document.querySelector(".retour");

// 2. Gestion du défilement (Scroll)
window.addEventListener('scroll', () => {
  
  // Effet Shrink de la Navbar
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }

  // Apparition du bouton Retour (Correction effectuée avec .classList)
  if (window.scrollY > 400) {
    boutton_retour.classList.add('apparait');
  } else {
    boutton_retour.classList.remove('apparait');
  }
});

// 3. Gestion du Clic pour remonter en douceur
boutton_retour.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

