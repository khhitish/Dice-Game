var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var dice1 = "images/dice" + num1 + ".png";
var dice2 = "images/dice" + num2 + ".png";

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

img1.setAttribute("src", dice1);
img2.setAttribute("src", dice2);

if (num1 > num2) {
  document.querySelector("h1").textContent = "Player 1 wins🚩";
} else if (num1 < num2) {
  document.querySelector("h1").textContent = "Player 2 wins🚩";
} else {
  document.querySelector("h1").textContent = "Draw";
}
