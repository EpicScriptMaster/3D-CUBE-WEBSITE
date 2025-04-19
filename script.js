// Get the cube and scene elements
const cube = document.querySelector('.cube');
const scene = document.querySelector('.scene');

// Set initial mouse positions
let mouseX = 0;
let mouseY = 0;

// Listen to mouse move events
scene.addEventListener('mousemove', (e) => {
  // Get the mouse position relative to the center of the cube
  mouseX = (e.clientX / window.innerWidth) - 0.5;
  mouseY = (e.clientY / window.innerHeight) - 0.5;

  // Apply 3D rotation based on mouse movement
  cube.style.transform = `rotateX(${mouseY * 30}deg) rotateY(${mouseX * 30}deg)`;
});

// Add a hover effect (optional)
scene.addEventListener('mouseenter', () => {
  cube.style.transition = 'transform 0.5s ease';
});

scene.addEventListener('mouseleave', () => {
  cube.style.transition = 'transform 1s ease';
});
