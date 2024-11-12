document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            console.log('menuToggle cliqué');
            navList.classList.toggle('active');
            console.log('class active ajoutée :', navList.classList.contains('active'));
        });
    } else {
        console.error('menuToggle ou navList introuvable');
    }
});
