const car = document.getElementById("car");

car.classList.add("forward");

car.addEventListener("animationend", listener, false);


function listener(event) {
  switch (event.type) {
    case "animationend":
      car.classList.remove("forward")
      car.classList.add("turn");
      break;

  }
}