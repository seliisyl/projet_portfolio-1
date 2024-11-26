// main/static/main/js/app.js
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
window.addEventListener('scroll', checkVisibleElements, { passive: true });
window.addEventListener('resize', checkVisibleElements, { passive: true });
window.addEventListener('load', checkVisibleElements);

document.addEventListener('DOMContentLoaded', () => {
    console.log('Le DOM est chargé');
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

    // Charger les détails de l'événement si nous sommes sur la page de l'événement
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');
    console.log("eventId trouveé dans l'URL :", eventId);

    if (eventId) {
        loadEventDetails(eventId);
    } else {
        console.log("Aucun identifiant d'événement n'a été trouvé dans l'URL");
    }

    // Formulaire d'accès à l'événement
    const accessForm = document.getElementById('accessForm');
    if (accessForm) {
        accessForm.addEventListener('submit', function (e) {
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

    // image du carousel
    const imagesArray = [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

    // DOM
    const slider = document.querySelector('.slider');
    const indicatorsContainer = document.querySelector('.slider_indicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const visibleSlides = 4;


    // insert images et les indicateurs pour chaque image
    imagesArray.forEach((imageSrc, index) => {
        const imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        imageElement.id = `slide-${index}`;
        imageElement.classList.add('slide');
        slider.appendChild(imageElement);

        const indicatorElement = document.createElement('a');
        indicatorElement.href = `#slide-${index}`;
        indicatorElement.classList.add("indicator");
        if (index < visibleSlides) {
            indicatorElement.classList.add('active');
        }
        indicatorsContainer.appendChild(indicatorElement);
    });

    // Mettre à jour la largeur du slider
    const slideWidth = slider.clientWidth / visibleSlides;

    // Met a jour l'affichage des boutons
    function updateButtons() {
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex >= imagesArray.length - visibleSlides ? 'none' : 'block';
    }

    //style indicators dynamique
    function updateIndicators() {
        const allIndicators = document.querySelectorAll('.indicator');
        allIndicators.forEach((indicator, index) => {
            if (index >= currentIndex && index < currentIndex + visibleSlides) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    updateButtons();
    updateIndicators();

    // Boutons de navigation Précédent et Suivant
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - visibleSlides, 0);
        slider.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });
        updateButtons();
        updateIndicators();
    });
    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + visibleSlides, imagesArray.length - visibleSlides);
        slider.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });
        updateButtons();
        updateIndicators();
    });

    // gestion de la navigation
    slider.addEventListener('scroll', () => {
        const currentScrollLevel = slider.scrollLeft;
        currentIndex = Math.round(currentScrollLevel / slideWidth);
        updateButtons();
        updateIndicators();
    });

    const footer = document.querySelector('footer');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // ajustez selon votre page
            footer.classList.add('visible');
        }
    });
});

// Fonction pour charger les détails de l'événement
function loadEventDetails(eventId) {
    try {
        console.log("Chargement des détails de l\'événement avec l\'Id:", eventId);

        const events = [
            {
                id: 'youlive1',
                streamUrls: [
                     'https://youtube.com/live/529XcHSYG4Q?feature=share',
                     'https://youtube.com/live/529XcHSYG4Q?feature=share'
                 ],
                videos: [
                    'https://www.w3schools.com/html/mov_b.mp4',
                    'https://www.w3schools.com/html/mov_bbb.mp4'
                ],
                photos: [
                    'https://via',
                    'https://via.placeholder.com/150'
                ]
            },
            {
                id: '2',
                streamUrls: [
                    'https://youtube.com/live/IDNBHQHOymM?feature=share',
                    'https://youtube.com/live/LUKbechwFx4?feature=share'
                ],
                videos: ['video3.mp4', 'video4.mp4'],
                photos: ['images/event3.jpg', 'images/event4.jpg']
            },
            {
                id: '3',
                streamUrls: [
                    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID1',
                    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID2'
                ],
                videos: ['video5.mp4', 'video6.mp4'],
                photos: ['images/event5.jpg', 'images/event6.jpg']
            }
        ];

        const event = events.find(e => e.id === eventId);
        if (!event) {
            console.error("L'événement n'a pas été trouvé avec l'Id:", eventId);
            return;
        }
        console.log("Détails de l'événement trouvé:", eventId);

        const streamIframe1 = document.getElementById('stream1');
        const streamIframe2 = document.getElementById('stream2');

        // Elements de streaming
        if (streamIframe1 && streamIframe2) {
            streamIframe1.src = event.streamUrls[0] || '';
            streamIframe2.src = event.streamUrls[1] || '';
            console.log("Iframes de streaming mis à jour");
        } else {
            console.error("Iframes de streaming 'stream1' ou 'stream2' sont introuvables");
        }

        const videoGallery = document.getElementById('videoGallery');
        if (videoGallery && event.videos && event.videos.length > 0) {
            videoGallery.innerHTML = event.videos.map(video =>
                `<video width="300" controls>
                    <source src="${video}" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>`
            ).join('');
            console.log("Galerie de vidéos mise à jour");
        } else {
            console.warn("Galerie de vidéos 'videoGallery' non trouvée");
        }

        const photoGallery = document.getElementById('photoGallery');
        if (photoGallery && event.photos && event.photos.length > 0) {
            photoGallery.innerHTML = event.photos.map(photo =>
                `<img src="${photo}" alt="Photo de l'événement" width="150">`
            ).join('');
            console.log("Galerie de photos mise à jour");
        } else {
            console.warn("L'événement n'a pas été trouvé avec l'Id:", eventId);
        }
    } catch (error) {
        console.error("Erreur lors du chargement des détails de l'événement:", error);
    }
};
