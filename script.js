// Botón para abrir el chatbot
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = 'block';
});

// Función para enviar mensajes
function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    if (userMessage.trim() !== "") {
        displayMessage(userMessage, 'user');
        getChatbotResponse(userMessage);
    }
}

// Mostrar mensaje del usuario
function displayMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(sender);
    messageContainer.textContent = message;
    document.getElementById('chatMessages').appendChild(messageContainer);
    document.getElementById('userMessage').value = "";
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
}

// Respuesta automatizada del chatbot
function getChatbotResponse(userMessage) {
    const responses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",
        "servicios": "Ofrecemos desarrollo web, software a medida y consultoría tecnológica.",
        "contacto": "Puedes contactarnos a través del formulario de contacto en la página.",
        "default": "Lo siento, no entendí tu mensaje. ¿Puedes reformularlo?"
    };

    let response = responses[userMessage.toLowerCase()] || responses["default"];
    setTimeout(() => displayMessage(response, 'bot'), 1000);
}
