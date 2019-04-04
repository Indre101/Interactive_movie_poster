const jack = document.getElementById("jack");

function jackMove() {
  jack.classList.add("jackWalking");
  setTimeout(() => {
    jack.classList.remove("jackWalking");
    jack.classList.add("jackJump");
  }, 4000);

  setTimeout(() => {

    jack.classList.remove("jackWalking");
    jack.classList.remove("jackJump");
    jack.classList.add("shaking");

  }, 8000);


}

let i = 0;

if (i < 5) {
  i++;
  console.log(i);
  jackMove();
}