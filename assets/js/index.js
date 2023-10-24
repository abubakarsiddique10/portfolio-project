/* nav toggle button select*/
const toggleBtn = document.querySelector('#toggle');
const toggleOpen = document.querySelector('#toggle__open');
const toggleClose = document.querySelector('#toggle__close');
const navRight = document.querySelector('.nav__right')
const navLink = document.querySelectorAll('.nav__link');

toggleBtn.addEventListener('click', (event) => {
    if (event.target.id === "toggle__open") {
        toggleOpen.style.display = "none";
        toggleClose.style.display = "block"
        navRight.classList.add('nav__show')
    } else {
        toggleOpen.style.display = "block";
        toggleClose.style.display = "none"
        navRight.classList.remove('nav__show')
    }
})
navRight.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        navRight.classList.remove('nav__show');
        toggleOpen.style.display = "block";
        toggleClose.style.display = "none"
        navLink.forEach((link) => {
            link.classList.remove('active__link')
            if (event.target.hash == link.hash) {
                event.target.classList?.add('active__link')
            }
        })
    }
})


/* portfolio menu start */
const portfolioMenu = document.querySelector('.portfolio__menu');
const portfolioItem = document.querySelectorAll('.portfolio__item');


/* portfolioMenu.addEventListener('click', (event) => {
    const selectItem = event.target.innerText;
    const convertClassName = selectItem.split(' ').join('-').toLowerCase()
    portfolioItem.forEach((item) => {
        item.style.display = "block"
        if (convertClassName != item.classList[1]) {
            item.style.display = "none"
        }
    })
}) */

portfolioMenu.addEventListener('click', (e) => {
    const menuId = e.target.id;
    portfolioItem.forEach((item) => {
        if (menuId != item.id && menuId != "all-categories") {
            item.style.display = "none"
        } else {
            item.style.display = "block";
        }
    })
})
/* portfolio menu end */
