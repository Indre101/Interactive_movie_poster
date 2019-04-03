const car = document.getElementById("car");
const wrapper = document.getElementById("carWrapper");


car.addEventListener("animationend", listener, false);

let i = 0;

function listener(event) {
  i++

  switch (event.type) {
    case "animationend":
      console.log(i);

      if (i == 2) {
        clear();
      } else {
        i = 1;
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
  car.style.backgroundImage = ""

}