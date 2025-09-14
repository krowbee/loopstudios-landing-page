const toggleButton = document.querySelector("button.header__nav-toggle")
const body = document.querySelector("body")
const mobileMenu = document.querySelector("nav.navbar-mobile")

const toggleMenu = (e) =>{
    toggleButton.classList.toggle("close-menu")
    body.classList.toggle("no-scroll")
    mobileMenu.classList.toggle("menu-active")
}

toggleButton.addEventListener("click", toggleMenu)