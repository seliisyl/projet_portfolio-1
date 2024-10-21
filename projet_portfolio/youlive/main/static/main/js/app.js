// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe 'visible' aux éléments qui deviennent visibles
function checkVisibleElements() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Ajouter des écouteurs pour la gestion de la visibilité au défilement, redimensionnement, et chargement
window.addEventListener('scroll', checkVisibleElements);
window.addEventListener('resize', checkVisibleElements);
window.addEventListener('load', checkVisibleElements);

document.addEventListener('DOMContentLoaded', () => {
    // Boutons d'événements
    const eventButtons = document.querySelectorAll('.event-button');
    if (eventButtons.length > 0) {
        eventButtons.forEach(button => {
            button.addEventListener('click', function () {
                const eventId = this.getAttribute('data-event-id');
                const accessEventSection = document.getElementById('access-event');
                const eventIdInput = document.getElementById('eventId');
                if (accessEventSection && eventIdInput) {
                    accessEventSection.style.display = 'block';
                    eventIdInput.value = eventId;
                }
            });
        });
    }

    // Formulaire d'accès à l'événement
    const accessForm = document.getElementById('accessForm');
    if (accessForm) {
        accessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const eventId = document.getElementById('eventId').value;
            const password = document.getElementById('password').value;

            if (eventId === 'youlive1' && password === 'youlive2') {
                window.location.href = `eventPage.html?eventId=${eventId}`;
            } else {
                alert('Identifiant ou mot de passe incorrect');
            }
        });
    }

    // Charger les détails de l'événement si nous sommes sur la page de l'événement
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');
    if (eventId) {
        loadEventDetails(eventId);
    }
});

// Fonction pour charger les détails de l'événement
function loadEventDetails(eventId) {
    const events = [
        { id: '1', streamUrls: ['https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID1', 'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID2'], videos: ['video1.mp4', 'video2.mp4'], photos: ['images/event1.jpg', 'images/event2.jpg'] },
        { id: '2', streamUrls: ['https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID1', 'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID2'], videos: ['video3.mp4', 'video4.mp4'], photos: ['images/event3.jpg', 'images/event4.jpg'] },
        { id: '3', streamUrls: ['https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID1', 'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID2'], videos: ['video5.mp4', 'video6.mp4'], photos: ['images/event5.jpg', 'images/event6.jpg'] }
    ];

    const event = events.find(e => e.id === eventId);

    if (event) {
        const streamElements = document.querySelectorAll('.stream');
        const videoGallery = document.getElementById('videoGallery');
        const photoGallery = document.getElementById('photoGallery');
        
        // Initialisation des streamings
        if (streamElements.length > 0) {
            streamElements.forEach((el, index) => {
                el.src = event.streamUrls[index];
                el.addEventListener('click', () => {
                    el.classList.toggle('fullscreen');
                });
            });
        }

        // Charger la galerie vidéo
        if (videoGallery) {
            videoGallery.innerHTML = event.videos.map(video =>
                `<video width="300" controls>
                    <source src="${video}" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>`
           ).join('');
        }

        // Charger la galerie de photos
        if (photoGallery) {
            photoGallery.innerHTML = event.photos.map(photo =>
                `<img src="${photo}" alt="Photo de l'événement" width="150">`
            ).join('');
        }
    }
}

