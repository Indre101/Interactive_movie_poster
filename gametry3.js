let spiderman = "./images/the_mother.jpg";
let building = "./images/thefather.png";
let building1 = "./images/twins.jpg";

let door1;
let door2;
let door3;

let closed = "./images/door.jpg";
let numOfClosedDoors = 3;

let firstDoor = document.getElementById("firstDoor");
let secondDoor = document.getElementById("secondDoor");
let thirdDoor = document.getElementById("thirdDoor");
let startButton = document.getElementById("start");
let currentPlay = true;

//  start button geting clicked

const notStarted = () => {
  if (currentPlay === false || startButton.innerHTML === "Start!") {
    return true;
  } else {
    return false;
  }
};

function noDoubleClicking(event) {
  event.target.style.pointerEvents = "none";
}

const startClicked = () => {
  startButton.style.webkitAnimationPlayState = "paused";
  startButton.innerHTML = "Good Luck!";
};

// door functionality
const isItOpen = door => (door.src === closed) ? true : false;

const isTheDoorWrong = door => (door.getAttribute("src") === spiderman) ? true : false;


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
      return building;

      break;
    case 1:
      return building1;
      break;
    case 2:
      return building1;
      break;

    default:
      return spiderman;
      break;
  }
}

//door opening with photos

function openDoors() {
  let randomScenario = Math.floor(Math.random() * 3);

  if (randomScenario === 0) {
    door1 = spiderman;
    //door1 = radomPhotoToDoors(3);
    door2 = radomPhotoToDoors(3);
    door3 = radomPhotoToDoors(3);
  } else if (randomScenario === 1) {
    door1 = radomPhotoToDoors(3);

    door2 = spiderman;
    //door2 = radomPhotoToDoors(3);
    door3 = radomPhotoToDoors(3);
  } else {
    door1 = radomPhotoToDoors(3);
    door2 = radomPhotoToDoors(3);
    //door3 = radomPhotoToDoors(3);
    door3 = spiderman;
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

const gameOver = status => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
    displayPoints();

  } else {
    startButton.innerHTML = "Game over! play again?";
    pointsOf.innerHTML = 0;
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
  pointsOf.innerHTML = newPoints;
  pointsRecord.push(newPoints);


  /// sorting to find the largest number through points Record array 


  let maxPointValue = pointsRecord.reduce(function (minValue, MaxValue) {
    return Math.max(minValue, MaxValue);
  });

  recordOfPoints.innerHTML = maxPointValue;
  // return newPoints;


}