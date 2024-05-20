const ActiveClass= 'active';
const Images = document.querySelectorAll('.slider');

Images[0].classList.add(ActiveClass);

function removeActiveclass() {
    const elm = document.querySelector(`.${ActiveClass}`);
    if (elm){elm.classList.remove(ActiveClass)};
}

function addClass($event) {
    $event.stopPropogation();
    removeActiveclass();
    const target = $event.currentTarget;
    target.classList.add(ActiveClass);
}

Images.forEach(image => {
    image.addEventListener('click' , addClass);
});

$(document).ready(function () {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle')
    })
})

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
