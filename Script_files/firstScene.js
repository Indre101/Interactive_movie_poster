const key = document.getElementById("key");
const bg = document.getElementById("container");
const btn1 = document.getElementById("start");
const audioBegining = document.getElementById("audioBegining");
const boy = document.getElementById("boy");

key.style.display = "none";
document.getElementById("twins").style.display = "none";
document.getElementById("boy").style.display = "none";

boy.classList.add("boy1");

btn1.onclick = function () {
  key.style.display = "block";
  document.getElementById("twins").style.display = "block";
  boy.style.display = "block";
  btn1.style.display = "none";
  document.getElementById("instructions").style.display = "none";
  bg.removeChild(audioBegining);

  const audioBycycle = new Audio("././audio/cycling_play_with_us_danny_mixdown.mp3");
  audioBycycle.play();

}


key.onclick = function () {
  key.style.display = "none";

  bg.classList.add("fadeout");
  boy.classList.remove("boy1");


  setInterval(() => {
    bg.classList.remove("container1");
    boy.classList.add("boy2");
    bg.classList.add("container2");

  }, 1200);

}

boy.addEventListener("animationend", chaningWindow, false);

let i = 0;

function chaningWindow(event) {
  i++;

  switch (event.type) {
    case "animationend":
      console.log(i);
      if (i == 2) {
        window.location.href = "./fighting.html";

      }
      break;
  }
}