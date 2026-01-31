// Define valid username-password pairs
const members = [
  { username: 'member1', password: 'pass1' },
  { username: 'member2', password: 'pass2' },
  { username: 'admin', password: 'adminpass' }
  // Add more members as needed
];

const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check credentials
  const validUser = members.find(
    m => m.username === username && m.password === password
  );

  if (validUser) {
    // Redirect to chatwi.html
    window.location.href = 'chatwi.html';
  } else {
    // Show error message
    errorMessage.classList.remove('show');
    void errorMessage.offsetWidth; // trigger reflow
    errorMessage.classList.add('show');
    // Clear password field
    passwordInput.value = '';
  }
});

// Allow Enter key to submit
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    loginBtn.click();
  }
});