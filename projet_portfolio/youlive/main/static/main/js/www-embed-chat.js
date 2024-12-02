// Exemple de code pour gérer un chat en direct
document.addEventListener('DOMContentLoaded', function() {
    const socket = io();
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });

    socket.on('chat message', (msg) => {
        const li = document.createElement('li');
        li.textContent = msg;
        messages.appendChild(li);
        window.scrollTo(0, document.body.scrollHeight);
    });
});