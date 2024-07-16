const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Chalo fir ab date bto kab chalna h.....";
  gif.src =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXpzem03bWNjZzdkdHA4Ym9vaWJlbzIwOTgxZ24wbjh5MzdvamZ6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CLYzOazFhhZClh1PdZ/giphy.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});