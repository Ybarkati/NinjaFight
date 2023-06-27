///////////////////////////
let timerInterval;
let timerRunning = true;
let timerValue = 0;
let playPause=document.getElementById("timer-button").textContent

toggleTimer()
function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    document.getElementById("timer-button").textContent = "Play";
    document.removeEventListener("keydown", keyDownHandler);
    timerRunning = false;
  } else {
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById("timer-button").textContent = "Stop";
    document.addEventListener("keydown", keyDownHandler);
    timerRunning = true;
  }
}

function updateTimer() {
  timerValue++;
  const minutes = Math.floor(timerValue / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timerValue % 60).toString().padStart(2, "0");
  document.getElementById("timer-value").textContent = `${minutes}:${seconds}`;
}

// Example code to update hull levels
function updateHullLevels(player1Hull, player2Hull) {
  const player1Bar = document.getElementById("player1-hull-level");
  const player2Bar = document.getElementById("player2-hull-level");
  player1Bar.style.width = `${player1Hull}%`;
  player2Bar.style.width = `${player2Hull}%`;
}

//////////////////////////////////////////////
/////////////////////////////
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
// console.log(window.innerWidth)
const player1Image = new Image();
player1Image.src = "player11.png";

const player2Image = new Image();
player2Image.src = "player22.png";
const arrowImage1 = new Image();
arrowImage1.src = "arrow.png"; // Image for player1

const arrowImage2 = new Image();
arrowImage2.src = "arrow2.png"; // Image for player2
class Players{
    constructor(x,image){
        this.x= x,
        this.y= canvas.height - 250,
        this.width= 160,
        this.height= 250,
        this.image=image,
        this.jumping= false,
        this.velocityY= 0,
        this.FullHull=30,
        this.hull=30,
        this.jumpHeight= 200,
        this.arrows= []
    }
    attack(){
        this.hull--
    }
}
const player1= new Players(50,player1Image)
const player2=new Players((canvas.width - 160)-50,player2Image)

const hitArrows = new Set(); // Track hit arrows

function drawPlayer(player) {
  ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
}
const arrowWidth = 60; // Set the desired width of the arrow
const arrowHeight = 20;
function drawArrow(arrow) {
  if (arrow.velocityX > 0) {
    // For player1, draw the arrow with arrowImage1
    ctx.drawImage(arrowImage1, arrow.x, arrow.y, arrowWidth, arrowHeight);
  } else {
    // For player2, draw the arrow with arrowImage2
    ctx.drawImage(arrowImage2, arrow.x, arrow.y, arrowWidth, arrowHeight);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw ground
  ctx.fillStyle = "black";
  ctx.fillRect(0, canvas.height - 10, canvas.width, 10);

  drawPlayer(player1);
  drawPlayer(player2);

  player1.arrows.forEach(function (arrow, arrowIndex) {
    arrow.x += arrow.velocityX;
    drawArrow(arrow);

    if (checkCollision(arrow, player2) && !hitArrows.has(arrow)) {
      // Player 2 is hit by an arrow
      hitArrows.add(arrow);
      player2.attack()
      updateHullLevels((player1.hull/player1.FullHull)*100, (player2.hull/player2.FullHull)*100)
      console.log("Player 2 is hit!");
      player1.arrows.splice(arrowIndex, 1);
    }
  });

  player2.arrows.forEach(function (arrow, arrowIndex) {
    arrow.x += arrow.velocityX;
    drawArrow(arrow);

    if (checkCollision(arrow, player1) && !hitArrows.has(arrow)) {
      // Player 1 is hit by an arrow
      hitArrows.add(arrow);
      player1.attack()
      updateHullLevels((player1.hull/player1.FullHull)*100, (player2.hull/player2.FullHull)*100)
      console.log("Player 1 is hit!");
      // Remove the arrow from player2's arrows array
      player2.arrows.splice(arrowIndex, 1);
    }
    
  });
}

function update() {
  if (player1.jumping) {
    player1.velocityY += 0.3;
    player1.y += player1.velocityY;

    if (player1.y >= canvas.height - player1.height) {
      player1.y = canvas.height - player1.height;
      player1.jumping = false;
      player1.velocityY = 0;
    }
  }

  if (player2.jumping) {
    player2.velocityY += 0.3;
    player2.y += player2.velocityY;

    if (player2.y >= canvas.height - player2.height) {
      player2.y = canvas.height - player2.height;
      player2.jumping = false;
      player2.velocityY = 0;
    }
  }
}

function checkCollision(arrow, player) {
  if (
    arrow.x < player.x + player.width &&
    arrow.x + arrow.width > player.x &&
    arrow.y < player.y + player.height &&
    arrow.y + arrow.height > player.y
  ) {
    return true; // Collision detected
  }

  return false; // No collision
}

function keyDownHandler(event) {
  if (event.key === "ArrowUp" && !player1.jumping) {
    player1.jumping = true;
    player1.velocityY = -14;
  }

  if (event.key === "w" && !player2.jumping) {
    player2.jumping = true;
    player2.velocityY = -14;
  }

  if (event.key === "ArrowRight") {
    const newArrow = {
      x: player1.x + player1.width,
      y: player1.y + player1.height / 2,
      width: 10,
      height: 2,
    //   color: "blue",
      velocityX: 10
    };

    player1.arrows.push(newArrow);
  }

  if (event.key === "d") {
    const newArrow = {
      x: player2.x - 10,
      y: player2.y + player2.height / 2,
      width: 10,
      height: 2,
    
      velocityX: -10
    };

    player2.arrows.push(newArrow);
  }
}

// function keyUpHandler(event) {
//   // Add code here if needed
// }


// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener("keyup", keyUpHandler);

setInterval(function () {
  update();
  draw();
}, 20);
////////////////////////////////
///////for the music button
var backgroundMusic = document.getElementById('background-music');
var muteToggle = document.getElementById('mute-toggle');
var muteIcon = document.getElementById('mute-icon');
var muteLabel = document.getElementById('mute-label');
var unmuteLabel = document.getElementById('unmute-label');
backgroundMusic.play()

muteToggle.addEventListener('click', toggleMute);
let isMuted=true
function toggleMute() {
  if (!isMuted) {
    backgroundMusic.play()
    isMuted = true;
    muteToggle.classList.remove('muted');
    muteIcon.innerHTML = '🔊';
    muteLabel.style.display = 'inline';
    unmuteLabel.style.display = 'none';
  } else {
    backgroundMusic.pause();
        isMuted = false;
    // backgroundMusic.muted = true;
    muteToggle.classList.add('muted');
    muteIcon.innerHTML = '🔇';
    muteLabel.style.display = 'none';
    unmuteLabel.style.display = 'inline';
  }
}

////////////////////////////
