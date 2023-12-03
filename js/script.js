let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

menuBtn.addEventListener('click', function () {
    body.classList.toggle('no_content');
})

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('btn-close');
})
