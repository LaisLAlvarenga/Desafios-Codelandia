const buttonOpenMenu = document.querySelector('.open-menu-icon');
const buttonCloseMenu = document.querySelector('.close-menu-icon');

const menuMobileList = document.querySelector('.menu-mobile-list');

function openMenu() {
    menuMobileList.classList.add('open');
    buttonOpenMenu.classList.add('close');
    buttonCloseMenu.classList.add('open');
}

function closeMenu() {
    menuMobileList.classList.remove('open');
    buttonOpenMenu.classList.remove('close');
    buttonCloseMenu.classList.remove('open');
}

buttonOpenMenu.addEventListener('click', openMenu);
buttonCloseMenu.addEventListener('click', closeMenu);