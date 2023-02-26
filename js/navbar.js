const navBars = document.querySelector('.fa-bars');
const navItems = document.querySelector('.navbar__items');

navBars.addEventListener('click', () => {
    navItems.classList.toggle("active");
})