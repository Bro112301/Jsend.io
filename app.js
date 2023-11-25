// Sample user data
const users = ['User1', 'User2', 'User3'];

// Sample messages
const messages = [];

// Function to initialize the user list
function initUserList() {
    const userList = document.getElementById('users');

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user;
        userList.appendChild(listItem);
    });
}

// Function to initialize the recipient select dropdown
function initRecipientSelect() {
    const recipientSelect = document.getElementById('recipientSelect');

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user;
        option.textContent = user;
        recipientSelect.appendChild(option);
    });
}

// Function to display messages in the chat
function displayMessages() {
    const messageList = document.getElementById('messages');
    messageList.innerHTML = '';

    messages.forEach(message => {
        const listItem = document.createElement('li');
        listItem.textContent = `${message.sender}: ${message.text}`;
        messageList.appendChild(listItem);
    });
}

// Function to send a general message
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        messages.push({ sender: 'You', text: messageText });
        messageInput.value = '';
        displayMessages();
    }
}

// Function to send a direct message
function sendDirectMessage() {
    const recipientSelect = document.getElementById('recipientSelect');
    const directMessageInput = document.getElementById('directMessageInput');
    const recipient = recipientSelect.value;
    const directMessageText = directMessageInput.value;

    if (directMessageText.trim() !== '') {
        messages.push({ sender: `You to ${recipient}`, text: directMessageText });
        directMessageInput.value = '';
        displayMessages();
    }
}

// Initialize the user list and recipient select
initUserList();
initRecipientSelect();
