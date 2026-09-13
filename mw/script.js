const welcomeButton = document.querySelector('#welcomeButton');
const message = document.querySelector('#message');

welcomeButton.addEventListener('click', () => {
  message.textContent = 'Hello from MW.';
});
