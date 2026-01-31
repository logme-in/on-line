// List of staff members with the new role "Manager"
const staffMembers = [
  { name: 'Alice', role: 'Moderator' },
  { name: 'Bob', role: 'Admin' },
  { name: 'Charlie', role: 'Moderator' },
  { name: 'Diana', role: 'Admin' },
  { name: 'Eve', role: 'Manager' }, // New Manager role
];

const staffListDiv = document.getElementById('staffList');

// Function to create staff member element
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

  // Append emoji and name
  memberDiv.appendChild(emojiSpan);
  memberDiv.appendChild(nameDiv);

  return memberDiv;
}

// Populate the staff list
staffMembers.forEach(member => {
  const memberElement = createStaffMember(member);
  staffListDiv.appendChild(memberElement);
});

// Animate list items sequentially with delays
const listItems = document.querySelectorAll('#instructionList li');
listItems.forEach((li, index) => {
  li.style.animation = `colorChangeSequential 12s ${index * 3}s infinite`;
});