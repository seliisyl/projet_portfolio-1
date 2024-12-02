// Exemple de code pour contrôler un lecteur YouTube intégré
document.addEventListener('DOMContentLoaded', function() {
    const player1 = document.getElementById('stream1');
    const player2 = document.getElementById('stream2');

    // Fonction pour démarrer la lecture
    function playVideo(player) {
        player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }

    // Fonction pour arrêter la lecture
    function pauseVideo(player) {
        player.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }

    // Exemple d'utilisation
    playVideo(player1);
    pauseVideo(player2);
});