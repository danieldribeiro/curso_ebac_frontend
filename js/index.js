let burguerMenu = document.querySelector('.burguer-menu-icon')
let navLinks = document.querySelector('.nav-links-wrapper')
let header = document.querySelector('header')

burguerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-wrapper-show')
        header.classList.toggle('header-active')
})