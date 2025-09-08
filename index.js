
//Hamburger
const hamMenuCont = document.querySelector(".header_main-ham-menu-cont")
const hamSmallMenu = document.querySelector(".header_sm-menu")
const hamBtnMenu = document.querySelector(".header_main-ham-menu")
const hamBtnClose = document.querySelector(".header_main-ham-menu-close")
const hamSmallLinks = document.querySelector(".header_sm-menu-links")


hamMenuCont.addEventListener('click', () => {
    if (hamBtnMenu.classList.contains('d-none')) {
        hamBtnMenu.classList.remove('d-none')
        hamBtnClose.classList.add('d-none')
    } else {
        hamBtnMenu.classList.add('d-none')
        hamBtnClose.classList.remove('d-none')
    }
    if (hamBtnMenu.classList.contains('d-none')) {
        hamSmallMenu.classList.add('header_sm-menu--active')
    } else {
        hamSmallMenu.classList.remove('header_sm-menu--active')
    }
})



hamSmallLinks.addEventListener('click', () => {
    hamSmallMenu.classList.remove('header_sm-menu--active')
    hamBtnMenu.classList.remove('d-none')
    hamBtnClose.classList.add('d-none')
})


//Header Logo Home
const logoHeader = document.querySelector('.header_logo')

logoHeader.addEventListener('click', () => {
    location.href = "./#home"
})


