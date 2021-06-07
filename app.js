// Home
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");

// Menu
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll('.menu-list li a');


// Home
let header_height = header.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;
}) 

// Menu
menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
  }
closeBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}
navLinks.forEach( link => {
  link.addEventListener('click', ()=> {
    menu.classList.remove("active");
    document.body.style.overflow="initial";
  })
})
// DETENER SCROLL AL ABRIR NAVBAR
menuBtn.addEventListener("click", () => {
    document.body.style.overflow="hidden";
    })
    closeBtn.addEventListener("click", () => {
    document.body.style.overflow="initial";
    })