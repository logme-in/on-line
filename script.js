// Interactive animations for profile picture
const profilePic = document.getElementById('profilePic');

profilePic.addEventListener('mouseenter', () => {
  profilePic.style.transform = 'scale(1.05)';
  profilePic.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
});

profilePic.addEventListener('mouseleave', () => {
  profilePic.style.transform = 'scale(1)';
  profilePic.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
});
