// Hamburger menu toggle
const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  menuButton.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});

// Footer date and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
