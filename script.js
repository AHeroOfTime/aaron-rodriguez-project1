// functional hamburger menu
// get elements on page
const menu = document.querySelector('.hamburger-menu');
const ulEl = document.querySelector('ul');

// funcs
function toggleMenu() {
  // toggle open class on ul (when hamburger is visible)
  ulEl.classList.toggle('open');
  // change menu icon from 'bars' to an 'x'
  menu.classList.toggle('fa-bars');
  menu.classList.toggle('fa-times');
}

function removeMobileNav() {
  // check if menu is open
  if (ulEl.classList.contains('open')) {
    // if the menu is open, close on resize (below)
    ulEl.classList.remove('open');
    // change icon back when menu is closed
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-times');
  }
}

// event listeners
menu.addEventListener('click', toggleMenu);

// listen for resize(to close open mobile nav)
window.addEventListener('resize', removeMobileNav);
