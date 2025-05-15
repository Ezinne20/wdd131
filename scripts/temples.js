// Hamburger menu toggle
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  menuButton.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});

// Footer date and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
