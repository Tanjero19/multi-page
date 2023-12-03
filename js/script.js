let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
let headerLink = document.getElementsByClassName('header-link');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no_content');
    menuBtn.classList.toggle('btn-close');
})

function closeqwe() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('no_content');
    menuBtn.classList.remove('btn-close');
}
