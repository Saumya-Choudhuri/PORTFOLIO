const welcomeButton = document.querySelector('#welcomeButton');
const message = document.querySelector('#message');
const backgroundImage = document.querySelector('.background-image');

let animationFrame;

const moveBackground = () => {
  animationFrame = undefined;
  backgroundImage.style.transform = `translateY(${window.scrollY * 0.18}px)`;
};

window.addEventListener('scroll', () => {
  if (!animationFrame) {
    animationFrame = window.requestAnimationFrame(moveBackground);
  }
}, { passive: true });

moveBackground();

welcomeButton.addEventListener('click', () => {
  message.textContent = 'Hello from MW.';
});
