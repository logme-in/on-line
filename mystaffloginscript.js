// Members for login validation
const members = [
  { username: 'member1', password: 'pass1' },
  { username: 'member2', password: 'pass2' },
  { username: 'admin', password: 'adminpass' }
];

const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const validUser = members.find(
    m => m.username === username && m.password === password
  );
  if (validUser) {
    window.location.href = 'staff.html';
  } else {
    errorMessage.classList.remove('show');
    void errorMessage.offsetWidth; // trigger reflow
    errorMessage.classList.add('show');
    passwordInput.value = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    loginBtn.click();
  }
});

// Staff members data
const staffMembers = [
  { name: 'Alice', role: 'Moderator' },
  { name: 'Bob', role: 'Admin' },
  { name: 'Charlie', role: 'Moderator' },
  { name: 'Diana', role: 'Admin' },
  { name: 'Eve', role: 'Manager' }
];

const staffListDiv = document.getElementById('staffList');

function createStaffMember(member) {
  const memberDiv = document.createElement('div');
  memberDiv.className = 'staff-member';

  const emojiSpan = document.createElement('span');
  if (member.role === 'Admin') {
    emojiSpan.innerHTML = '👑';
  } else if (member.role === 'Manager') {
    emojiSpan.innerHTML = '🌟';
  } else {
    emojiSpan.innerHTML = '🛡️';
  }

  const nameDiv = document.createElement('div');
  nameDiv.className = 'name';
  nameDiv.textContent = member.name;

  // Add click event for pulse effect
  memberDiv.addEventListener('click', () => {
    // Trigger pulse animation
    memberDiv.style.animation = 'pulse 0.6s';
    // Restart animation
    memberDiv.style.animation = 'none';
    void memberDiv.offsetWidth; // trigger reflow
    memberDiv.style.animation = 'pulse 0.6s';
  });

  memberDiv.appendChild(emojiSpan);
  memberDiv.appendChild(nameDiv);
  return memberDiv;
}

staffMembers.forEach(member => {
  const memberElement = createStaffMember(member);
  staffListDiv.appendChild(memberElement);
});