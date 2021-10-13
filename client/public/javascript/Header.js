//Header scroll 
let lastScrollTop = 0
let nav = document.getElementById("navbarScroll")
window.addEventListener("scroll",() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > lastScrollTop) {
        nav.style.top="-90px"
    }
    else{
        nav.style.top="0px"
    }
    lastScrollTop = scrollTop
})