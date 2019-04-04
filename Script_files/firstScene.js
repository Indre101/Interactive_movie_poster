const key = document.getElementById("key");
const bg = document.getElementById("container");
const btn1 = document.getElementById("start");
const audioBegining = document.getElementById("audioBegining");

key.style.display = "none";
document.getElementById("twins").style.display = "none";
document.getElementById("boy").style.display = "none";



btn1.onclick = function () {
  key.style.display = "block";
  document.getElementById("twins").style.display = "block";
  document.getElementById("boy").style.display = "block";
  btn1.style.display = "none";
  document.getElementById("instructions").style.display = "none";
  bg.removeChild(audioBegining);

  const audioBycycle = new Audio("././audio/cycling_play_with_us_danny_mixdown.mp3");
  audioBycycle.play();

}


key.onclick = function () {
  key.style.display = "none";

  bg.classList.add("fadeout");


  setInterval(() => {
    bg.classList.remove("container1");

    bg.classList.add("container2");

  }, 1200);


}