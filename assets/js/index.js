/* nav toggle button select*/
const toggleBtn = document.querySelector('#nav__toggle');
const toggleOpen = document.querySelector('#toggle__open');
const toggleClose = document.querySelector('#toggle__close');
const navRight = document.querySelector('.nav__right')
const navLink = document.querySelectorAll('.nav__link');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const html = document.querySelector('html')
const themeToggle = document.getElementById('theme__toggle')

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

// dark & light mood functionality
if (localStorage.getItem('theme') == 'dark') {
    html.classList.add('dark');
    moon.style.display = "none";
    sun.style.display = "block"
}
themeToggle.addEventListener('click', () => {
    const active = html.classList.toggle('dark');
    if (active) {
        localStorage.setItem('theme', 'dark');
        moon.style.display = "none";
        sun.style.display = "block";
    } else {
        localStorage.setItem('theme', null);
        moon.style.display = "block";
        sun.style.display = "none";
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


