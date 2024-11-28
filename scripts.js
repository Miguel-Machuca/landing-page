const chatbotButton = document.getElementById('chatbot');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChatbot = document.getElementById('close-chatbot');

chatbotButton.addEventListener('click', () => {
    chatbotWindow.classList.toggle('hidden');
});

closeChatbot.addEventListener('click', () => {
    chatbotWindow.classList.add('hidden');
});
