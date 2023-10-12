const header = document.querySelector('header')
const hm = document.querySelector('.hm')
const hb = document.querySelector('.hb')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.nav-links')

for (let i = 0; i < navLinks.length; i++) {

        navLinks[i].addEventListener('click', function () {
        console.log(7);
        const activeLink = document.querySelector('.active-link')
        activeLink.classList.remove('active-link')
        this.classList.toggle('active-link')
    })

}

// setTimeout()
hm.addEventListener("click", () => {
    close.classList.toggle('open')
    nav.classList.toggle('nb')
    navbar.classList.toggle('nbb')
    hb.classList.toggle("close")
    console.log(5);
})










window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      header.classList.add('h')
    } else {
      // mybutton.style.display = "none";
      header.classList.remove('h')

    }
  }