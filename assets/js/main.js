//Nav Hamburger
const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
};

openNavBtn.addEventListener('click', openNav);


const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);


//Scroll page
const headerNav = document.querySelectorAll('.nav__container ul li a[href^="#"]');

headerNav.forEach(item => {
    item.addEventListener('click', scrollOnClick);
});

function scrollOnClick(event) {
    event.preventDefault();
    const to = scrollToHref(event.target) -80;

    scrollToPosition(to);
};

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
};

function scrollToHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
};