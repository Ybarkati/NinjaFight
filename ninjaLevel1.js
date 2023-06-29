let container = document.querySelector("#container");
let ninja = document.querySelector("#ninja");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let round=0
  
//declaring variable for score
let interval = null;
let playerScore = 0;
let fullScore=100


//function for score
let scoreCounter = () => { 
    playerScore++;
    
    if (playerScore==fullScore  && round<3){
        document.querySelector(".winText").textContent="YOU are close go to the next round"
        document.querySelector(".Next").textContent="Press space to go to next round"
        gameOver.style.visibility = "visible"; 
        block.style.animation = "none";
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0; 
        document.getElementById("ninja").innerHTML=`<img src="stop.gif" alt="" >`
        console.log(round)
         
        
    }else if(playerScore==fullScore && round==3){
        document.querySelector(".winText").textContent="YOU did it"
        document.querySelector(".Next").innerHTML=`<a href="ninjaLevel2.html">Click here to go to next level</a>`
        gameOver.style.visibility = "visible"; 
        block.style.animation = "none";
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0; 
        document.getElementById("ninja").innerHTML=`<img src="stop.gif" alt="" >`
    }
    updateFlagPosition((playerScore/fullScore)*100);
}


//start Game
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space" && round<3) {
        document.querySelector(".round").textContent=`round ${round+1}`
        gameOver.style.visibility = "hidden";
        // block.style.animation = "none";
        if (round==0){
            block.style.animation = "blockAnimate 1.5s linear infinite";
        }
        else if (round==1){
            block.style.animation = "blockAnimate 1.2s linear infinite";
        }
        else if (round==2){
            block.style.animation = "blockAnimate 1s linear infinite";
        }
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
        document.getElementById("ninja").innerHTML=`<img src="ninjaRun.gif" alt="" >`
        round++ 
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (ninja.classList != "ninjaActive") {
            ninja.classList.add("ninjaActive");
            //                remove class after 0.5 seconds
            setTimeout(() => {
                ninja.classList.remove("ninjaActive");
            }, 1000);
        }
});

//'Game Over' if 'Character' hit The 'Block' 
let result = setInterval(() => {
    let ninjaBottom = parseInt(getComputedStyle(ninja).getPropertyValue("bottom"));
    //    console.log("ninjaBottom" + ninjaBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (ninjaBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        document.querySelector(".winText").textContent="YOU Lose , but never give Up"
        document.querySelector(".Next").textContent="Press space to Play again"
        round=0
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        block.style.animation = "none";
        document.getElementById("ninja").innerHTML=`<img src="ninjaDeath.gif" alt="" >`
        setTimeout(() => {
            document.getElementById("ninja").innerHTML=`<img src="finalDeath.gif" alt="" >`
            gameOver.style.visibility = "visible";   
            clearInterval(interval);
            playerScore = 0;
        }, 1200);
        
    }
}, 10);
//////////////////level bar
// Get the flag element
const flag = document.getElementById('flag');

// Update the flag position based on the player's score
function updateFlagPosition(score) {
  const barWidth = document.querySelector('.bar').offsetWidth;
  const maxScore = 100; // Adjust this value based on your scoring system
  const flagPosition = (score / maxScore) * barWidth;
  flag.style.left = `${flagPosition-35}px`;
}

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

