let burguerMenu = document.querySelector('.burguer-menu-icon')
let navLinks = document.querySelector('.nav-links-wrapper')

burguerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-wrapper-show')
})