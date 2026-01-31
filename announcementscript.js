// Function to handle poll submission
function submitPoll() {
  const options = document.getElementsByName('color');
  let selected = '';
  for (const opt of options) {
    if (opt.checked) {
      selected = opt.value;
      break;
    }
  }
  if (selected) {
    document.getElementById('poll-result').innerText = `You voted for: ${selected}`;
  } else {
    alert('Please select an option before voting.');
  }
}
