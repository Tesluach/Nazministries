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
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

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
})