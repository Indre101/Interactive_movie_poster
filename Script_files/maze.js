// const btn1 = document.getElementById("btn");


// btn1.onclick = function () {
//   this.disabled = true;
//   start();

// }

let template = [
  1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1,
  0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0,
  1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
  0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
  0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1,
  0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
  1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1,
  0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
  0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0,
  0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0,
  0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0
];

const canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

const child = new Image();
child.src = "./images/wall.png";

let mother = new Image();
mother.src = "./images/reddoors.gif";

let wall = new Image;
wall.src = "./images/building1.jpg";

let maze = [];

let player = new Object({
  x: 0,
  y: 1,
  loc: 15,
  moves: 0
})



let x = 0;
let y = 0;

for (let i = 0; i < 15 * 15; i++) {

  maze.push({
    "x": x,
    "y": y,
    "state": template[i]
  });
  if (x == 14) {
    y++;
    x = 0;
  } else {
    x++;
  }
}

function keyPress(e) {

  switch (e.which) {
    case 39: // right 

      if (player.x != 14) {

        player.loc++;
        if (maze[player.loc].state != 1) {
          ctx.clearRect(player.x * 32, player.y * 32, 32, 32);
          player.x++;
          player.moves++;

        } else {
          player.loc--;

        }
      }
      break;

    case 37: // left 
      if (player.x != 0) {
        player.loc--;

        if (maze[player.loc].state != 1) {
          ctx.clearRect(player.x * 32, player.y * 32, 32, 32);
          player.x--;
          player.moves++;
        } else {
          player.loc++;
        }
      }
      break;

    case 40: // down 
      if (player.y != 14) {
        player.loc += 15;
        if (maze[player.loc].state != 1) {
          ctx.clearRect(player.x * 32, player.y * 32, 32, 32);
          player.y++;
          player.moves++;
        } else {
          player.loc -= 15;
        }
      }
      break;

    case 38: // up 
      if (player.y != 0) {
        player.loc -= 15;
        if (maze[player.loc].state != 1) {
          ctx.clearRect(player.x * 32, player.y * 32, 32, 32);
          player.y--;
          player.moves++;
        } else {
          player.loc += 15;
        }
      }
      break;
  }

  ctx.drawImage(child, player.x * 32, player.y * 32, 32, 32);
  if (maze[player.loc].state == 2) {
    alert("You win!");
    location.reload();
  }

  document.getElementById("moves").innerHTML = "moves" + player.moves;
}

function start() {
  for (let i = 0; i < 15 * 15; i++) {
    if (maze[i].state == 1 || maze[i].state == "1")
      ctx.drawImage(wall, maze[i].x * 32, maze[i].y * 32, 32, 32);

    if (maze[i].state == 2 || maze[i].state == "2")
      ctx.drawImage(mother, maze[i].x * 32, maze[i].y * 32, 32, 32);


  }
  ctx.drawImage(child, player.x * 32, player.y * 32, 32, 32);

  window.addEventListener("keydown", keyPress, true);

}