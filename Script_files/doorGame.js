const finding = document.querySelector("#findMother");
const up1 = document.getElementById("upTony");
const body1 = document.querySelector("body");
const axe = document.getElementById("axeDisplay")
const audioDoorGame = new Audio("././audio/Landing_page_stage_1_music.mp3");

window.addEventListener("load", axe.classList.add("axenodisplay"));



up1.addEventListener("animationend", doorGame, false);

function doorGame(event) {
  switch (event.type) {
    case "animationend":
      finding.style.display = "block";

      setTimeout(() => {
        body1.classList.add("moveDown");
        audio4.pause();
        audioDoorGame.play();
      }, 1000);
      // setTimeout(() => {
      //   danny1.style.display = "none";

      // }, 3000);

      break;
  }
}



let mother = "./images/fighting/wendy-06.png";
let evil1 = "./images/jackwithaxe-05.png"
let evil2 = "./images/twins.png";

let door1;
let door2;
let door3;

let closed = "./images/door.jpg";
let numOfClosedDoors = 3;

let firstDoor = document.getElementById("firstDoor");
let secondDoor = document.getElementById("secondDoor");
let thirdDoor = document.getElementById("thirdDoor");
let startButton = document.getElementById("startDoor");
let currentPlay = true;


firstDoor.style.pointerEvents = "none";
secondDoor.style.pointerEvents = "none";
thirdDoor.style.pointerEvents = "none";

//  start button geting clicked

const notStarted = () => {
  if (currentPlay === false || startButton.textContent === "Start!") {
    return true;
  } else {
    return false;

  }
};

function noDoubleClicking(event) {
  event.target.style.pointerEvents = "none";
}

const startClicked = () => {
  startButton.textContent = "Good Luck!";
  firstDoor.style.pointerEvents = "auto";
  secondDoor.style.pointerEvents = "auto";
  thirdDoor.style.pointerEvents = "auto";
};

// door functionality
const isItOpen = door => (door.src === closed) ? true : false;

const isTheDoorWrong = door => (door.getAttribute("src") === mother) ? true : false;


/// checking if all doors are isItOpen
function areAllOpen(door) {
  numOfClosedDoors--;

  if (!isTheDoorWrong(door)) {
    gameOver();
  } else if (isTheDoorWrong(door)) {
    gameOver("win");
  }
}

/// assigning dooors

function radomPhotoToDoors(maxNumberToEnter) {
  let numberOfThePhoto = Math.floor(Math.random() * maxNumberToEnter);

  switch (numberOfThePhoto) {
    case 0:
      return evil1;

      break;
    case 1:
      return evil2;
      break;
    case 2:
      return evil2;
      break;

    default:
      return mother;
      break;
  }
}

//door opening with photos

function openDoors() {
  let randomScenario = Math.floor(Math.random() * 3);

  if (randomScenario === 0) {
    door1 = mother;
    //door1 = radomPhotoToDoors(3);
    door2 = radomPhotoToDoors(3);
    door3 = radomPhotoToDoors(3);
  } else if (randomScenario === 1) {
    door1 = radomPhotoToDoors(3);

    door2 = mother;
    //door2 = radomPhotoToDoors(3);
    door3 = radomPhotoToDoors(3);
  } else {
    door1 = radomPhotoToDoors(3);
    door2 = radomPhotoToDoors(3);
    //door3 = radomPhotoToDoors(3);
    door3 = mother;
  }
}

firstDoor.onclick = function () {
  if (!notStarted() && !isItOpen(firstDoor)) {
    firstDoor.src = door1;

    areAllOpen(firstDoor);

    if (firstDoor.getAttribute("src") != closed) {
      noDoubleClicking(event);
    }
  }
};

secondDoor.onclick = function () {
  if (!notStarted() && !isItOpen(secondDoor)) {
    secondDoor.src = door2;

    areAllOpen(secondDoor);

    noDoubleClicking(event);
  }
};

thirdDoor.onclick = function () {
  if (!notStarted() && !isItOpen(thirdDoor)) {
    thirdDoor.src = door3;

    areAllOpen(thirdDoor);

    noDoubleClicking(event);
  }
};

/// GameOver function
const audioAxe = new Audio("./audio/axe-scene.mp3");

const gameOver = status => {
  if (status === "win") {
    console.log("you win door game")
    // startButton.textContent = "Good Job";
    // body1.classList.remove("moveDown");
    startButton.style.display = "none";
    finding.style.position = "absolute";

    setTimeout(() => {

      axe.classList.remove("axenodisplay");
      axe.classList.add("moveLeft");
      audioDoorGame.pause();
      audioAxe.play();

    }, 1500);


  } else {
    startButton.textContent = "Game over! play again?";
    pointsArray = [];
  }
  currentPlay = false;
};


/// original function to start the game and to begin it again;

function startOver() {
  firstDoor.src = closed;
  secondDoor.src = closed;
  thirdDoor.src = closed;
  currentPlay = true;
  numOfClosedDoors = 3;
  firstDoor.style.pointerEvents = "auto";
  secondDoor.style.pointerEvents = "auto";
  thirdDoor.style.pointerEvents = "auto";
}

// pressing the start button fires the game, and restarts it;
startButton.onclick = function () {
  startClicked();
  openDoors();

  if (notStarted()) {
    startOver();
  }
};

/// point calculation

let pointsOf = document.getElementById('points');
let pointsArray = [];

let recordOfPoints = document.getElementById('record');
let pointsRecord = [];

// function to pass in the reduce method
function getSum(total, num) {
  return total + num;
}


/// function to show the points and the record
const displayPoints = () => {

  // assigned to show points 
  let point = 0;
  point++;
  pointsArray.push(point);

  let newPoints = pointsArray.reduce(getSum);
  pointsRecord.push(newPoints);


  /// sorting to find the largest number through points Record array 


  let maxPointValue = pointsRecord.reduce(function (minValue, MaxValue) {
    return Math.max(minValue, MaxValue);
  });

  // return newPoints;


}