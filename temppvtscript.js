// Array of acceptable passwords
const validPasswords = ["SecurePass123", "AnotherPass456"]; // Add your multiple passwords here

const passwordSection = document.getElementById('password-section');
const passwordInput = document.getElementById('password-input');
const joinBtn = document.getElementById('join-btn');

// Animate showing the password section
window.onload = () => {
  setTimeout(() => {
    passwordSection.classList.add('show');
  }, 300);
};

// Helper function to convert input string to a long string of lowercase alphabets (20 chars)
function stringToAlpha(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    const mapped = (code % 26);
    const letter = String.fromCharCode(97 + mapped);
    result += letter;
  }
  while (result.length < 20) {
    result += result;
  }
  return result.substring(0, 20);
}

document.getElementById('join-btn').addEventListener('click', () => {
  const inputCode = document.getElementById('room-code-input').value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (inputCode === "" || !validPasswords.includes(enteredPassword)) {
    alert("Incorrect password or empty room code. Please try again.");
    return;
  }

  const roomCode = stringToAlpha(inputCode);
  const url = `https://tlk.io/${roomCode}`;
  window.location.href = url;
});

// Allow Enter key to trigger join
document.getElementById('room-code-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('join-btn').click();
  }
});
document.getElementById('password-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('join-btn').click();
  }
});