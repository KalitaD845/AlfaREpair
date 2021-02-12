window.addEventListener('DOMContentLoaded', function () {

    let burger = document.querySelector('.group__burger');
    let mobileMenu = document.querySelector('.nav');

    burger.addEventListener('click', function (e) {
        e.preventDefault();

        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');

        } else {
            burger.classList.add('active');
            mobileMenu.classList.add('active');

        }
    })


})