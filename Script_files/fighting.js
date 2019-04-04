const jack = document.getElementById("jack");
const wendy = document.getElementById("wendy");
// const audio1 = document.getElementById("sound");

// audio1.play();










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