// Function to convert input string to a long string of lowercase alphabets (20 chars)
function stringToAlpha(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    const mapped = (code % 26);
    const letter = String.fromCharCode(97 + mapped);
    result += letter;
  }
  // Repeat the pattern if less than 20 characters
  while (result.length < 20) {
    result += result; // double it
  }
  return result.substring(0, 20); // truncate to 20 characters
}

document.getElementById('join-btn').addEventListener('click', () => {
  const input = document.getElementById('room-code-input').value.trim();
  if (input === "") {
    alert("Please enter a room code");
    return;
  }
  const roomCode = stringToAlpha(input);
  const url = `https://tlk.io/${roomCode}`;
  window.location.href = url;
});

// Allow Enter key to trigger join
document.getElementById('room-code-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('join-btn').click();
  }
});