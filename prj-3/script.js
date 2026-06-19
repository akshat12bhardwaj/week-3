let plus_symbol = Array.from(document.querySelectorAll(".questions div span"));
let question = Array.from(document.querySelectorAll(".questions div"));
let faq_answer = Array.from(
  document.querySelectorAll(".questions p:last-child"),
);
let prev_index = -1;

question.forEach((ques, index) => {
  ques.addEventListener("click", (event) => {
    if (prev_index == index) {
      plus_symbol[index].classList.toggle("rotate");
      faq_answer[index].classList.toggle("active");
      prev_index=-1
    } else {
      plus_symbol.forEach((plus) => {
        plus.classList.remove("rotate");
      });
      faq_answer.forEach((faq) => {
        faq.classList.remove("active");
      });
      plus_symbol[index].classList.toggle("rotate");
      faq_answer[index].classList.toggle("active");
      prev_index = index;
    }
  });
});
