const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".num");

//others
const clear = document.querySelector(".clear");
const sign = document.querySelector(".sign");
const percent = document.querySelector(".percent");

//numbers
// const num_1 = document.querySelector(".num_1");
// const num_2 = document.querySelector(".num_2");
// const num_3 = document.querySelector(".num_3");
// const num_4 = document.querySelector(".num_4");
// const num_5 = document.querySelector(".num_5");
// const num_6 = document.querySelector(".num_6");
// const num_7 = document.querySelector(".num_7");
// const num_8 = document.querySelector(".num_8");
// const num_9 = document.querySelector(".num_9");
// const num_0 = document.querySelector(".num_0");
// const num_d = document.querySelector(".num_d");

//operators
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const sum = document.querySelector(".sum");
const equals = document.querySelector(".equals");

//display num on display screen
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (display.innerHTML === "0.") {
      display.innerHTML = value;
    } else display.innerHTML += value;
  });
});

//clear display screen
clear.addEventListener("click", () => {
  display.innerHTML = "";
});

//toggle sign
sign.addEventListener("click", () => {
  let currentNum = Number(display.innerHTML);
  currentNum *= -1;
  display.innerHTML = currentNum;
});

//percentage
percent.addEventListener("click", () => {
  let currentNum = Number(display.innerHTML);
  currentNum /= 100;
  display.innerHTML = currentNum;
});
