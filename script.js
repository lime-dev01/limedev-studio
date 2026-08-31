document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. ANIMATION DES ÉLÉMENTS AU SCROLL (Scroll Reveal)
       =================================================== */
    const hiddenElements = document.querySelectorAll('.hidden-element');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Déclenche l'animation quand 15% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                // Optionnel : stoppe l'observation une fois l'élément affiché
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    hiddenElements.forEach(element => observer.observe(element));


    /* ===================================================
       2. EFFET OMBRE / RESSORT SUR LA NAV AU SCROLL
       =================================================== */
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            nav.style.padding = '15px 5%';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.padding = '20px 5%';
        }
    });


    /* ===================================================
       3. SMOOTH SCROLL POUR LES LIENS D'ANCRES
       =================================================== */
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Si c'est juste "#" (comme sur le logo), on remonte en haut
            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
// Ouverture et fermeture du menu hamburger
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Ferme le menu dès qu'on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}
const burgerMenu = document.getElementById('burger-menu
