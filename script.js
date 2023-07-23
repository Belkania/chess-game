"use strict";

const startBox = document.querySelector(".startBox");
const startButton = document.querySelector(".startButton");
const mainContainer = document.querySelector(".mainContainer");

//Creating Array
let masiv = [
  {
    name: "a1",
    color: "black",
    top: 0,
    left: 75,
  },
  {
    name: "b1",
    color: "white",
    top: 0,
    left: 75,
  },
  {
    name: "c1",
    color: "black",
    top: 0,
    left: 75,
  },
  {
    name: "d1",
    color: "white",
    top: 0,
    left: 75,
  },
  {
    name: "e1",
    color: "black",
    top: 0,
    left: 75,
  },
  {
    name: "f1",
    color: "white",
    top: 0,
    left: 75,
  },
  {
    name: "g1",
    color: "black",
    top: 0,
    left: 75,
  },
  {
    name: "h1",
    color: "white",
    top: 0,
    left: 75,
  },
  {
    name: "a2",
    color: "white",
    top: 0,
    left: 75,
  },
  {
    name: "b2",
    color: "black",
    top: 0,
    left: 75,
  },
  {
    name: "c2",
    color: "white",
    top: 0,
    left: 75,
  },
  {
    name: "d2",
    color: "black",
    top: 0,
    left: 75,
  },
  {
    name: "e2",
    color: "white",
    top: 0,
    left: 75,
  },
  {
    name: "f2",
    color: "black",
    top: 75,
    left: 75,
  },
  {
    name: "g2",
    color: "white",
    top: 75,
    left: 75,
  },
  {
    name: "h2",
    color: "black",
    top: 75,
    left: 75,
  },
];

startButton.addEventListener("click", function () {
  mainContainer.classList.remove("passive");
  startBox.classList.add("passive");
});

// for (let i = 0; i <= masiv.length; i++) {
//   console.log(masiv);
//   let div = document.createElement("div");

//   div.style.backgroundColor = masiv[i].color;
//   div.style.width = masiv[i].width + "px";
//   div.style.height = masiv[i].height + "px";

//   mainContainer.appendChild(div);
// }
