"use strict";

const board = document.querySelectorAll(".board__item");
console.log(board);
const nextBtn = document.querySelector(".board__next-btn");
const boardBg = document.querySelector(".board");
const bgArray = [
  "url(../../assets/images/webp/board01.webp)",
  "url(../../assets/images/webp/board02.webp)",
  "url(../../assets/images/webp/board03.webp)",
];
let bg = "";
let changeRand = 0;
let initialRand = 0;
let beforeRand = 0;

window.onload = () => {
  initialRand = Math.floor(Math.random() * bgArray.length);
  bg = bgArray[initialRand];
  boardBg.style.backgroundImage = bgArray[initialRand];
  bgArray.splice(initialRand, 1);
  nextBtn.addEventListener("click", (e) => {
    changeRand = Math.floor(Math.random() * bgArray.length);
    if (beforeRand == changeRand) {
      if (changeRand == 1) {
        changeRand = 0;
      } else {
        changeRand++;
      }
    }
    bg = bgArray[changeRand];
    boardBg.style.backgroundImage = bgArray[changeRand];
    beforeRand = changeRand;
    // for (let i = 0; i < board.length; i++) {
    //   if (board[i].classList.contains("is-active")) {
    //     board[i].classList.remove("is-active");
    //   } else {
    //     board[i].classList.add("is-active");
    //   }
    // }
  });
};
