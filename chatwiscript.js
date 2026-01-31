// Button click handler for navigation
const buttons = document.querySelectorAll('.btn');
const contentArea = document.getElementById('contentArea');
const sectionHeading = document.getElementById('sectionHeading');

const contentData = {
  about: `<h2 style="margin-bottom:10px;"><!-- About us --></h2><p style="line-height:1.5;color: #0000ff">NO ALERTS!<br/>
   
   Join us and be part of our community! </p>`,
  gallery: `<h2 style="margin-bottom:10px;">Gallery</h2><div class="gallery" id="galleryContainer">
    <img src="https://images.unsplash.com/photo-1549887534-7c680845da34?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80" alt="Gallery Image 1"/>
    <img src="https://images.unsplash.com/photo-1517502166878-35c4c63a9bfa?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80" alt="Gallery Image 2"/>
    <img src="https://images.unsplash.com/photo-1556767576-5ec41e3b0e9f?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80" alt="Gallery Image 3"/>
    <img src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80" alt="Gallery Image 4"/>
  </div>`,
  members: `<h4 style="margin-bottom:10px;">Instructions for Members🌟</h4><ul class="friends-list" id="friendsList">
    <li>Join in the chatwee session for private chats only</li>
    <li>Sharing password of Members section is not allowed</li>
    <li>Access to members section can be provided by admins only</li>
    <li>Any kind of illegal activity and violation of rules is not allowed</li>
    <li>In case of violation of any rule permanent ban may be imposed without any warning</li>
  </ul>`
};

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.getAttribute('data-section');
    if (section === 'about') {
      sectionHeading.textContent = 'ALERTS';
      contentArea.innerHTML = contentData.about;
    } else if (section === 'gallery') {
      sectionHeading.textContent = 'Gallery';
      contentArea.innerHTML = contentData.gallery;
    } else if (section === 'members') {
      sectionHeading.textContent = 'Members';
      contentArea.innerHTML = contentData.members;
      animateFriendsTextGlow();
    }
  });
});

// Animate friends names glow one by one (text glow)
function animateFriendsTextGlow() {
  const friendItems = document.querySelectorAll('.friends-list li');
  friendItems.forEach((item, index) => {
    item.style.animation = 'none'; // reset
    void item.offsetWidth; // trigger reflow
    item.style.animation = 'glowText 2s infinite alternate';
    item.style.animationDelay = `${index * 0.2}s`;
  });
}

// Chat functionality
const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chatBox');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Toggle chat box on button click
chatButton.addEventListener('click', () => {
  if (chatBox.style.display === 'none' || chatBox.style.display === '') {
    chatBox.style.display = 'flex';
  } else {
    chatBox.style.display = 'none';
  }
});

// Send message function
function sendMessage() {
  const message = chatInput.value.trim();
  if (message !== '') {
    const msgDiv = document.createElement('p');
    msgDiv.style.color = '#333';
    msgDiv.innerHTML = `<strong>You:</strong> ${message}`;
    chatMessages.appendChild(msgDiv);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate reply
    setTimeout(() => {
      const replyDiv = document.createElement('p');
      replyDiv.style.color = '#555';
      replyDiv.innerHTML = `<strong>Bot:</strong> Please wait for few seconds for the chat get activated. When you see a blue message icon click on it to enter.`;
      chatMessages.appendChild(replyDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
}

// Event listeners for sending messages
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Insert keyframes for glowText dynamically
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes glowText {
    0%, 100% { text-shadow: 0 0 5px #f6a1c9; }
    50% { text-shadow: 0 0 20px #f6a1c9; }
  }
`, styleSheet.cssRules.length);
