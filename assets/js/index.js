/* nav toggle button select*/
const header = document.getElementById('header')
const toggleBtn = document.querySelector('#nav__toggle');
const toggleOpen = document.querySelector('#toggle__open');
const toggleClose = document.querySelector('#toggle__close');
const navRight = document.querySelector('.nav__menu')
const navLogo = document.querySelector('.nav__logo')
const navLink = document.querySelectorAll('.nav__link');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const html = document.querySelector('html')
const themeToggle = document.getElementById('theme__toggle');
const headerTitle = document.querySelectorAll('.header__title')
const isTheme = localStorage.getItem('theme');
const hero = document.getElementById('hero');
const servicesCard = document.querySelectorAll('.services__card');
const testimonialCard = document.querySelectorAll('.testimonial__card');
const priceCard = document.querySelectorAll('.price__card');
const blogCard = document.querySelectorAll('.blog__card');
const contactLeft = document.querySelector('.contact__left');
const contactRight = document.querySelector('.contact__right');




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
        toggleClose.style.display = "none";

        navLink.forEach((link) => {
            link.classList.remove('active__link')
            if (event.target.hash == link.hash) {
                event.target.classList?.add('active__link')
            }
        })
    }
})
// dark & light mood functionality
if (isTheme == 'dark') {
    html.classList.add('dark');
    moon.style.display = "none";
    sun.style.display = "block"
    html.classList.remove('light');
    hero.style.background = "#1D232A";

    header.style.background = '#1D232A';
    navLogo.style.color = "#A6ADBA";
    navLink.forEach((item) => item.style.color = "#A6ADBA");

    [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight].forEach((card) => {
        card.style.border = "1px solid rgba(166, 173, 186, 0.05)"
        card.style.background = "#242B33";
    })

}

themeToggle.addEventListener('click', () => {
    const active = html.classList.toggle('dark');
    if (active) {
        localStorage.setItem('theme', 'dark');
        moon.style.display = "none";
        sun.style.display = "block";
        html.classList.remove('light');
        hero.style.background = "#1D232A";
        header.style.background = '#1D232A';
        navLogo.style.color = "#A6ADBA";

        navLink.forEach((item) => item.style.color = "#A6ADBA");
        [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight].forEach((card) => {
            card.style.border = "1px solid rgba(166, 173, 186, 0.05)"
            card.style.background = "#242B33";
        })

    } else {
        localStorage.setItem('theme', null);
        moon.style.display = "block";
        sun.style.display = "none";
        html.classList.add('light');
        hero.style.background = "linear-gradient(180deg,#f8fafc,rgba(242,202,252,.11) 34.69%,rgba(250,198,252,.11) 44.06%,rgba(175,183,255,.11) 54.48%,rgba(142,220,200,.07) 64.9%,#f8fafc 97.95%)";

        header.style.background = '#FFFFFF';
        navLogo.style.color = "#18191A";
        navLink.forEach((item) => item.style.color = "#18191A");


        [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight].forEach((card) => {
            card.style.background = "rgb(248 250 252)";
            card.style.border = "1px solid rgba(71, 85, 105, .1)";
            card.style.borderRadius = "4px"
        })
    }
})



/* portfolio menu start */
const portfolioMenu = document.querySelector('.portfolio__menu');
const portfolioItem = document.querySelectorAll('.portfolio__item');

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



/* practice */
const tabBox = document.querySelector('.portfolio__menu');
const tab = document.querySelectorAll('.menu__item');
const leftButton = document.querySelector('.left-arrow');
const rightButton = document.querySelector('.right-arrow');


/* let isDragging = false;
const dragging = (e) => {
    if (isDragging) return
    tabBox.scrollLeft -= e.movementX
    console.log(tabBox.scrollLeft -= e.movementX)
}

tabBox.addEventListener('mousedown', () => isDragging = true)
tabBox.addEventListener('mousemove', dragging) */

let count = 0
leftButton.addEventListener('click', (e) => {
    console.log()
    tabBox.scrollLeft = 100
    if (count <= 5) {
        const itemWidth = tab[count].offsetWidth + 10;
        console.log(tab[count])
        tabBox.scrollLeft += itemWidth;
        console.log(count)
        count++
    }
})

rightButton.addEventListener('click', (e) => {
    if (count >= 1) {
        count--
        const itemWidth = tab[count].offsetWidth + 10;
        tabBox.scrollLeft -= itemWidth;
        console.log(count)
    }
})


