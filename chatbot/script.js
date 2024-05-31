document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage('user', userInput);
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage('bot', botResponse);
    }, 500);
}

function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}-message`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    // Simple example responses. You can replace this with more complex logic or API calls.
    const responses = {
        'hi': 'Hello! How can I assist you today?',
        'hello': 'Hi there! What can I help you with?',
        'help': 'Sure, what do you need help with?',
        'bye': 'Goodbye! Have a great day!',
    };

    return responses[userInput.toLowerCase()] || 'I\'m not sure how to respond to that.';
}
