const clickButton = document.getElementById('click-button');
const closeButton = document.getElementById('close-button');
const dialog = document.getElementById('dialog');

clickButton!.addEventListener('click', () => {
  dialog!.style.display = 'block';
});

closeButton!.addEventListener('click', () => {
  dialog!.style.display = 'none';
});