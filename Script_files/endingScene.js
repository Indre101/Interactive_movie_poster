const car = document.getElementById("car");


car.addEventListener("animationend", listener, false);

let k = 0;

function listener(event) {
  k++

  switch (event.type) {
    case "animationend":
      console.log(i);
      setTimeout(() => {
        document.getElementById("callToaction").style.display = "block";
        bgEnding.style.position = "absolute";

      }, 4000);

      if (k == 2) {
        clear();
      } else {
        k = 1;
        car.classList.remove("car1");
        car.classList.add("car2");
        car.style.backgroundImage = "url('././images/snowmobileturn.png')"

      }
      break;

  }
}


function clear() {
  car.classList.remove("car2");
  car.classList.add("car1");
  car.style.backgroundImage = "";

}