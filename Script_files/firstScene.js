const key = document.getElementById("key");
const bg = document.getElementById("container");

key.onclick = function () {
  key.style.display = "none";

  bg.classList.add("fadeout");


  setInterval(() => {
    bg.classList.remove("container1");

    bg.classList.add("container2");

  }, 1200);


}