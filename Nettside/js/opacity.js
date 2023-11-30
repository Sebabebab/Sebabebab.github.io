document.addEventListener('DOMContentLoaded', function() {

const menuLink = document.querySelector('a[href="#menu"]');
const closeButton = document.querySelector('.close');
const menuBg = document.getElementById('menu-bg');
const beholders = document.getElementsByClassName('beholder');


const openMenu = () => {
  menuBg.style.transition = 'opacity 0.5s';


  for (let i = 0; i < beholders.length; i++) {
    beholders[i].style.transition = 'opacity 0.5s';
  }

  menuBg.style.opacity = '0.4';


  for (let i = 0; i < beholders.length; i++) {
    beholders[i].style.opacity = '0.4';
  }
};

const closeMenu = () => {
  menuBg.style.transition = 'opacity 0.5s';

  for (let i = 0; i < beholders.length; i++) {
    beholders[i].style.transition = 'opacity 0.5s';
  }

  menuBg.style.opacity = '1';


  for (let i = 0; i < beholders.length; i++) {
    beholders[i].style.opacity = '1';
  }
};

menuLink.addEventListener('click', () => {
  openMenu();
});

closeButton.addEventListener('click', () => {
  closeMenu();
});

const menuItems = document.querySelectorAll('#menu ul li');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () => {
    closeMenu();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

document.addEventListener('click', (event) => {
  const target = event.target;
  const menu = document.getElementById('menu');

  if (target !== menu && !menu.contains(target)) {
    closeMenu();
  }
});
});




