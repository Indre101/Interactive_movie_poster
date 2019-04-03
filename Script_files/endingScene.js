const car = document.getElementById("car");
const wrapper = document.getElementById("carWrapper");


car.addEventListener("animationend", listener, false);
// car.style.backgroundImage = "";


function listener(event) {
  switch (event.type) {
    case "animationend":
      car.classList.remove("car1");
      car.classList.add("car2");
      car.style.backgroundImage = "url('././images/snowmobileturn.png')"
      if (car.style.backgroundImage === "url('././images/snowmobileturn.png')") {
        car.classList.remove("car2");
        car.classList.add("car1");
        car.style.backgroundImage = ""

      }
      break;

  }
}


function change() {
  console.log("kk")
  if (car.style.backgroundImage === "url('././images/snowmobileturn.png')") {
    car.classList.remove("car2");
    car.classList.add("car1");
    car.style.backgroundImage = "url('././images/snowmobileturn.png')"

  }

}