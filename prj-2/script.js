const img_el = Array.from(document.querySelectorAll(".img-container img"));
const main_img_el = document.getElementById("preview");
const img_info = document.querySelector(".preview-container p");
let pos
img_el.forEach((img) => {
  img.addEventListener("click", () => {
    img_el.forEach((image) => {
      image.classList.remove("selected");
    });
    img_info.classList.add("de-active");
    main_img_el.src = img.src;
    main_img_el.classList.add("active");
    img.classList.add("selected");
    pos = img_el.findIndex((img) => img.classList.contains("selected"));
  });
});

const left_arrow = document.querySelector("div span:first-child");
const right_arrow = document.querySelector("div span:last-child");

left_arrow.addEventListener("click", () => {
  img_el[pos].classList.remove("selected");
  if (pos==undefined) {
    return;
  }
  if (pos <= 0) {
    pos = img_el.length-1;
  } else {
    pos -= 1;
  }
  img_el[pos].classList.add("selected");
  main_img_el.src = img_el[pos].src;
});

right_arrow.addEventListener("click", () => {
  if (pos==undefined) {
    return;
  }
  img_el[pos].classList.remove("selected");
  if (pos < img_el.length-1) {
    pos += 1;
  } else {
    pos = 0;
  }
  img_el[pos].classList.add("selected");
  main_img_el.src = img_el[pos].src;
});

addEventListener("keydown", (event) => {
  img_el[pos].classList.remove("selected");
  if (pos==undefined) {
    return;
  }
  if (event.key == "ArrowLeft") {
    if (pos <= 0) {
      pos = img_el.length-1;
    } else {
      pos -= 1;
    }
  } if(event.key=="ArrowRight") {
    if (pos < img_el.length-1) {
      pos += 1;
    } else {
      pos = 0;
    }
  }
   img_el[pos].classList.add("selected");
    main_img_el.src = img_el[pos].src;
});
