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

      /* Change l'icône lune en soleil */
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

/* ============================================================
   COMPTEUR ANIMER
   ============================================================ */
// --- PREMIER COMPTEUR ---
let compteur = document.querySelectorAll(".compteur");

let observer1 = new IntersectionObserver(function(entries, obs) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // On arrête d'observer cet élément pour ne pas relancer l'animation au scroll
            obs.unobserve(entry.target);
            
            let current = 0;
            let target = parseInt(entry.target.dataset.target, 10); 
            
            let interval = setInterval(function() {
                current += 15;
                
                // Si on dépasse ou qu'on atteint la cible
                if (current >= target) {
                    current = target; // On bloque à la valeur exacte de la cible
                    clearInterval(interval);
                }
                
                entry.target.textContent = "+" + current;
            }, 10);
        }
    });
});

compteur.forEach(function(e) {
    observer1.observe(e);
});

// --- DEUXIÈME COMPTEUR ---
let compteur2 = document.querySelectorAll(".compteur-2");

// Attention : on utilise observer2 ici !
let observer2 = new IntersectionObserver(function(entries, obs) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // On arrête d'observer
            obs.unobserve(entry.target);

            let current = 0;
            let target = parseInt(entry.target.dataset.target, 10);
            
            let interval = setInterval(function() {
                current += 1;
                
                if (current >= target) {
                    current = target;
                    clearInterval(interval);
                }
                
                entry.target.textContent =current;
            }, 40);
        }
    });
});

compteur2.forEach(function(i) {
    observer2.observe(i);
});


// === ANIMATION FOOTER AU SCROLL ===
const footer = document.querySelector('footer');

// On crée un "observateur" qui surveille quand le footer
// devient visible à l'écran
const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    // Si le footer est visible à l'écran
    if (entry.isIntersecting) {
      footer.classList.add('footer-visible');

      // On arrête d'observer — l'animation ne se joue qu'une fois
      footerObserver.unobserve(footer);
    }
  });

}, {
  threshold: 0.1  // Se déclenche quand 10% du footer est visible
});

// Lance la surveillance
if (footer) {
  footerObserver.observe(footer);
}