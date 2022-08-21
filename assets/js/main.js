const nav = document.querySelector('.header__nav-links');
const openNavBtn = document.querySelector('#header__nav-btnOpen');
const closeNavBtn = document.querySelector('#header__nav-btnClose');

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
