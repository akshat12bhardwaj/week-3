const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-bar");
const nav_links = document.querySelectorAll(".nav-bar a");
const main = document.querySelector("main");
const foot = document.querySelector("footer");
const progress_bar =document.querySelector('.progress-bar')
menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  main.classList.toggle("blur");
  foot.classList.toggle("blur");
});

nav_links.forEach((link)=>{
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    main.classList.remove("blur");
    foot.classList.remove("blur");
  });
});

const nav_big = document.querySelector(".nav-bar-big-screen");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav_big.classList.add("scroll");
  } else {
    nav_big.classList.remove("scroll");
  }
});

window.addEventListener("scroll", () => {
   const Scroll_actual = ( (window.scrollY)/(document.documentElement.scrollHeight -window.innerHeight))*100

   progress_bar.style.width=`${Scroll_actual}%`

});