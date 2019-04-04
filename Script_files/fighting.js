const jack = document.getElementById("jack");
const wendy = document.getElementById("wendy");
const bat = document.getElementById("bat");
const container = document.getElementById("container");
const hitting = document.getElementById("hitting");
// audio control
let audio1 = new Audio('././audio/bash_your_brains_in.mp3');
audio1.play();

///audio controll



let i = 0;

jack.classList.add("jackWalking");

function jackMove() {
  i++
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
      console.log(i);

    }
  }, 8000);

}

jackMove();


wendy.classList.add("crying1");
wendy.addEventListener("animationend", wendyListener, false);

function wendyListener(event) {
  switch (event.type) {
    case "animationend":
      i++;
      wendy.classList.remove("crying1");
      wendy.style.backgroundImage = "url(././images/fighting/wendy-06_back.png)"
      wendy.classList.add("crying2");
      if (i === 3) {
        wendy.style.backgroundImage = ""
        wendy.classList.remove("crying2");
        wendy.classList.add("running1");

      }
      break;

  }
}
// bat functionality here
///////////////

bat.onclick = function () {
  changeBg()
  setTimeout(() => {
    hitting.style.display = "block";
    container.style.display = "none";
    let audio = new Audio('././audio/give_me_the_bat_wendy_ahhh_god_damm_it_bang.mp3');
    audio.play();
    audio1.pause();



  }, 4800);
}

function changeBg() {

  container.classList.add("zoomin");

}