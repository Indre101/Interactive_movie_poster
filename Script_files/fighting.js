const jack = document.getElementById("jack");
const wendy = document.getElementById("wendy");
const bat = document.getElementById("bat");
const container = document.getElementById("container");
const hitting = document.getElementById("hitting");
const blood = document.querySelectorAll(".blood");
let audio1 = document.querySelector("#audio1");

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

bat.onclick = function() {
  // audio1.pause();

  changeBg();
  setTimeout(() => {
    hitting.classList.add("hittinAnimation1");
    hitting.style.display = "block";
    setTimeout(() => {
      hitting.style.backgroundImage = "url('././images/wendyjack-03.png')";
      blood.forEach(function(e) {
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

const blood3 = document.getElementById("blood3"); // finishes animation
const elevator = document.getElementById("todisplaynone"); //elevator appears

blood3.addEventListener("animationend", bloodAppear, false);

function bloodAppear(event) {
  switch (event.type) {
    case "animationend":
      setTimeout(() => {
        console.log("jk");
        audio2.pause();
        const audio3 = new Audio("././audio/very_creepy_sound_1.mp3");
        audio3.play();
        hitting.style.display = "none";
        elevator.style.display = "block";
      }, 2000);

      break;
  }
}
