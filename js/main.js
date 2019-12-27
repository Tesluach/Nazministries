//selecting items
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;
//onclick
menuBtn.addEventListener('click', toggleMenu);
//working with the toggle menu
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((item) => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach((item) => item.classList.remove('open'));

    showMenu = false;
  }
}

// The javaScript effect on the scroll--------
const header = document.querySelector('header');

window.addEventListener('scroll', (e) => {
  if (window.scrollY) {
    header.classList.add('on_scroll');
  } else {
    header.classList.remove('on_scroll');
  }
});

// Working with the navigation buttons on the about page

const tabs = document.querySelector('.navigate');
const panels = document.querySelectorAll('.panel');
const btns = document.querySelectorAll('.btn');

tabs.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    const targetPanel = document.querySelector(e.target.dataset.target);

    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    btns.forEach((btn) => {
      if (btn == e.target) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
});

// btns.forEach((btn) =>
//   btn.addEventListener('click', (e) => {
//     if (e.target.tagName == '') {

//     }
//   })
// );
