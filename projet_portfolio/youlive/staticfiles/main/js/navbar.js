document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggle les classes active
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Log pour le débogage
            console.log('Menu clicked');
            console.log('Menu toggle active:', menuToggle.classList.contains('active'));
            console.log('Nav menu active:', navMenu.classList.contains('active'));
        });

        // Fermer le menu quand on clique sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Empêcher la fermeture lors du clic sur le menu lui-même
        navMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    } else {
        console.error('Menu toggle ou nav menu non trouvé');
        console.log('menuToggle:', menuToggle);
        console.log('navMenu:', navMenu);
    }
});
