"use strict";

const startBox = document.querySelector(".startBox");
const startButton = document.querySelector(".startButton");
const mainContainer = document.querySelector(".mainContainer");

//Creating Arrays

let squeres = [
  {
    name: "a8",
    color: "white",
    imageSrc: "BlackRook.png",
    paragraph: "8",
  },
  {
    name: "b8",
    color: "#054d55",
    imageSrc: "BlackKnight.png",
  },
  {
    name: "c8",
    color: "white",
    imageSrc: "BlackBishop.png",
  },
  {
    name: "d8",
    color: "#054d55",
    imageSrc: "BlackQueenn.png",
  },
  {
    name: "e8",
    color: "white",
    imageSrc: "BlackKing.png",
  },
  {
    name: "f8",
    color: "#054d55",
    imageSrc: "BlackBishop.png",
  },
  {
    name: "g8",
    color: "white",
    imageSrc: "BlackKnight.png",
  },
  {
    name: "h8",
    color: "#054d55",
    imageSrc: "BlackRook.png",
  },
  {
    name: "a7",
    color: "#054d55",
    imageSrc: "BlackPawn.png",
    paragraph: "7",
  },
  {
    name: "b7",
    color: "white",
    imageSrc: "BlackPawn.png",
  },
  {
    name: "c7",
    color: "#054d55",
    imageSrc: "BlackPawn.png",
  },
  {
    name: "d7",
    color: "white",
    imageSrc: "BlackPawn.png",
  },
  {
    name: "e7",
    color: "#054d55",
    imageSrc: "BlackPawn.png",
  },
  {
    name: "f7",
    color: "white",
    imageSrc: "BlackPawn.png",
  },
  {
    name: "g7",
    color: "#054d55",
    imageSrc: "BlackPawn.png",
  },
  {
    name: "h7",
    color: "white",
    imageSrc: "BlackPawn.png",
  },
  {
    name: "a6",
    color: "white",
    paragraph: "6",
  },
  {
    name: "b6",
    color: "#054d55",
  },
  {
    name: "c6",
    color: "white",
  },
  {
    name: "d6",
    color: "#054d55",
  },
  {
    name: "e6",
    color: "white",
  },
  {
    name: "f6",
    color: "#054d55",
  },
  {
    name: "g6",
    color: "white",
  },
  {
    name: "h6",
    color: "#054d55",
  },
  {
    name: "a5",
    color: "#054d55",
    paragraph: "5",
  },
  {
    name: "b5",
    color: "white",
  },
  {
    name: "c5",
    color: "#054d55",
  },
  {
    name: "d5",
    color: "white",
  },
  {
    name: "e5",
    color: "#054d55",
  },
  {
    name: "f5",
    color: "white",
  },
  {
    name: "g5",
    color: "#054d55",
  },
  {
    name: "h5",
    color: "white",
  },
  {
    name: "a4",
    color: "white",
    paragraph: "4",
  },
  {
    name: "b4",
    color: "#054d55",
  },
  {
    name: "c4",
    color: "white",
  },
  {
    name: "d4",
    color: "#054d55",
  },
  {
    name: "e4",
    color: "white",
  },
  {
    name: "f4",
    color: "#054d55",
  },
  {
    name: "g4",
    color: "white",
  },
  {
    name: "h4",
    color: "#054d55",
  },
  {
    name: "a3",
    color: "#054d55",
    paragraph: "3",
  },
  {
    name: "b3",
    color: "white",
  },
  {
    name: "c3",
    color: "#054d55",
  },
  {
    name: "d3",
    color: "white",
  },
  {
    name: "e3",
    color: "#054d55",
  },
  {
    name: "f3",
    color: "white",
  },
  {
    name: "g3",
    color: "#054d55",
  },
  {
    name: "h3",
    color: "white",
  },
  {
    name: "a2",
    color: "white",
    imageSrc: "WhitePawn.png",
    paragraph: "2",
  },
  {
    name: "b2",
    color: "#054d55",
    imageSrc: "WhitePawn.png",
  },
  {
    name: "c2",
    color: "white",
    imageSrc: "WhitePawn.png",
  },
  {
    name: "d2",
    color: "#054d55",
    imageSrc: "WhitePawn.png",
  },
  {
    name: "e2",
    color: "white",
    imageSrc: "WhitePawn.png",
  },
  {
    name: "f2",
    color: "#054d55",
    imageSrc: "WhitePawn.png",
  },
  {
    name: "g2",
    color: "white",
    imageSrc: "WhitePawn.png",
  },
  {
    name: "h2",
    color: "#054d55",
    imageSrc: "WhitePawn.png",
  },
  {
    name: "a1",
    color: "#054d55",
    imageSrc: "WhiteRook.png",
    paragraph: "1",
    paragraph: "A",
  },
  {
    name: "b1",
    color: "white",
    imageSrc: "WhiteKnight.png",
    paragraph: "B",
  },
  {
    name: "c1",
    color: "#054d55",
    imageSrc: "WhiteBishop.png",
    paragraph: "C",
  },
  {
    name: "d1",
    color: "white",
    imageSrc: "WhiteQueen.png",
    paragraph: "D",
  },
  {
    name: "e1",
    color: "#054d55",
    imageSrc: "WhiteKing.png",
    paragraph: "E",
  },
  {
    name: "f1",
    color: "white",
    imageSrc: "WhiteBishop.png",
    paragraph: "F",
  },
  {
    name: "g1",
    color: "#054d55",
    imageSrc: "WhiteKnight.png",
    paragraph: "G",
  },
  {
    name: "h1",
    color: "white",
    imageSrc: "WhiteRook.png",
    paragraph: "H",
  },
];

const buildBoard = () => {
  let topStep = 0;
  let leftStep = 0;

  for (let i = 0; i < squeres.length; i++) {
    let chessBox = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    // Add unique id to each image element
    img.id = "img_" + i;

    img.src = squeres[i].imageSrc ? squeres[i].imageSrc : "";
    if (squeres[i].imageSrc) {
      chessBox.appendChild(img);
    }
    chessBox.style.backgroundColor = squeres[i].color;
    chessBox.style.top = topStep + "px";
    chessBox.style.left = leftStep + "px";
    chessBox.setAttribute("class", "slot");
    img.classList.add("imagesInSqueers");

    // Add paragraph

    if (squeres[i].paragraph) {
      p.textContent = squeres[i].paragraph;

      // Check if the text content is a number and add class "slotNumbers"
      if (!isNaN(squeres[i].paragraph)) {
        p.classList.add("slotNumbers");
      } else {
        // If the text content is not a number, add class "slotLetters"
        p.classList.add("slotLetters");
      }

      chessBox.appendChild(p);
    }
    mainContainer.appendChild(chessBox);

    leftStep += 75;

    if (
      i === 7 ||
      i === 15 ||
      i === 23 ||
      i === 31 ||
      i === 39 ||
      i === 47 ||
      i === 55
    ) {
      topStep += 75;
      leftStep = 0;
    }

    // Make images draggable
    img.draggable = true;

    // Add event listeners for drag-and-drop functionality
    img.addEventListener("dragstart", dragStart);
    img.addEventListener("dragover", dragOver);
    img.addEventListener("drop", drop);
  }
};

let draggedImg; // Track the dragged image element

// Event listener for when the drag starts
function dragStart(event) {
  draggedImg = event.target;
  event.dataTransfer.setData("text/plain", event.target.id); // Set the data to be transferred
}

// Event listener for when the dragged image is over a valid drop target
function dragOver(event) {
  event.preventDefault();
}

// Event listener for when the image is dropped on a valid drop target
function drop(event) {
  event.preventDefault();
  const targetDiv = event.target;
  if (targetDiv.classList.contains("slot")) {
    targetDiv.appendChild(draggedImg); // Move the image to the new div
  }
}

startButton.addEventListener("click", function () {
  buildBoard();
  mainContainer.classList.remove("passive");
  startBox.classList.add("passive");
});
