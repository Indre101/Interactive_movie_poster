const jack = document.getElementById("jack");

function jackMove() {
  jack.classList.add("jackWalking");

  setTimeout(() => {
    jack.classList.remove("jackWalking");
    jack.classList.add("jackJump");
  }, 4000);

}

jackMove()