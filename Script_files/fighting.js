const jack = document.getElementById("jack");
const wendy = document.getElementById("wendy");
const bat = document.getElementById("bat");
const container = document.getElementById("container");
const hitting = document.getElementById("hitting");
const blood = document.querySelectorAll(".blood");
const audio1 = document.querySelector("#audio1");
const body = document.querySelector("body");
const audio3 = new Audio("././audio/very_creepy_sound_1.mp3");
const audio4 = new Audio("././audio/tony_im_scared.mp3");


window.addEventListener("load", body.classList.add("bodyDissapear"));



let i = 0;

jack.classList.add("jackWalking");

function jackMove() {
  i++;

  setTimeout(() => {
    jack.classList.remove("jackWalking");
    jack.classList.add("jackJump");
  }, 4000);

  setTimeout(() => {
    jack.classList.remove("jackWalking");
    jack.classList.remove("jackJump");
    jack.classList.add("shaking");

    if (i === 2) {
      jack.classList.remove("shaking");
      jack.classList.add("running2");
    }
  }, 8000);
}
jackMove();

wendy.addEventListener("animationend", wendyListener, false);
wendy.classList.add("crying1");

function wendyListener(event) {
  switch (event.type) {
    case "animationend":
      i++;

      wendy.classList.remove("crying1");
      wendy.style.backgroundImage =
        "url(././images/fighting/wendy-06_back.png)";
      wendy.classList.add("crying2");

      if (i === 3) {
        wendy.style.backgroundImage = "";
        wendy.classList.remove("crying2");
        wendy.classList.add("running1");
      }
      break;
  }
}
// bat functionality here
///////////////
const audio2 = new Audio(
  "././audio/give_me_the_bat_wendy_ahhh_god_damm_it_bang.mp3"
);

bat.onclick = function () {
  // audio1.pause();

  changeBg();
  setTimeout(() => {
    hitting.classList.add("hittinAnimation1");
    hitting.style.display = "block";
    setTimeout(() => {
      hitting.style.backgroundImage = "url('././images/fighting/wendyjack-03.png')";
      document.querySelector(".hittinAnimation1").style.display = "block";
      blood.forEach(function (e) {
        e.style.display = "block";
      });
    }, 5000);

    container.style.display = "none";
    container.removeChild(audio1);

    // audio1.pause();

    audio2.play();
  }, 4800);
};

function changeBg() {
  container.classList.add("zoomin");
}





// blood elevator appear

/////pradek nuo cia

const blood3 = document.getElementById("blood3"); // finishes animation
const elevator = document.getElementById("todisplaynone"); //elevator appears

blood3.addEventListener("animationend", bloodAppear, false);

function bloodAppear(event) {
  switch (event.type) {
    case "animationend":
      setTimeout(() => {
        audio2.pause();
        audio3.play();
        hitting.classList.remove("hittinAnimation1");
        hitting.classList.add("dissapear");
        setTimeout(() => {
          hitting.style.display = "none";

        }, 2000);
        elevator.style.display = "block";
        body.classList.remove("bodyDissapear");

      }, 2000);

      break;
  }
}



// // blood elevator dissapears
const bloodOcean = document.getElementById("bloodOcean");

bloodOcean.addEventListener("animationend", elevatorDissapear, false);
const danny = document.getElementById("talkingtotony");


function elevatorDissapear(event) {
  switch (event.type) {
    case "animationend":
      elevator.classList.add("elevatorDissapear");
      setTimeout(() => {
        elevator.style.display = "none";
        elevator.classList.remove("elevatorDissapear");


      }, 0);

      danny.style.display = "block";
      // findMother.style.display = "block";

      audio4.play();
      audio3.pause();
      break;
  }
}

// transistion to running to maze

const character = document.getElementById("character");
const finding1 = document.querySelector("#findMother");
const axe1 = document.getElementById("axeDisplay")
const runningTowardsMaze = document.getElementById("runningTowardsmaze");
window.addEventListener("load", runningTowardsMaze.classList.add("axenodisplay"));



character.addEventListener("animationend", transitionToMaze, false);


function transitionToMaze(event) {
  switch (event.type) {
    case "animationend":

      finding1.style.display = "none";
      axe1.style.position = "absolute";

      setTimeout(() => {
        audio3.play();
        audioAxe.pause();
        runningTowardsMaze.classList.remove("axenodisplay");
        runningTowardsMaze.style.display = "flex";
      }, 1000);
      break;
  }
}

// showing the maze gameeee
// const mazeGameContainer1 = document.getElementById("mazeGameContainer");
// const wendyRunning = document.getElementById("wendyRunning")

// wendyRunning.addEventListener("animationend", showingMazeGame, false);


// function showingMazeGame(event) {
//   switch (event.type) {
//     case "animationend":
//       axe1.style.display = "none";
//       runningTowardsMaze.style.position = "absolute";

//       setTimeout(() => {
//         mazeGameContainer1.style.display = "block";
//       }, 7000);
//       break;
//   }
// }