//to make the guide text
const textContainer = document.querySelector('h2');
const text = `Getting Started:

Start the game and select your preferred game mode, such as single-player or multiplayer.
Choose a ninja character from the available options. Each ninja may have unique abilities and fighting styles, so pick the one that suits your playstyle.
Basic Controls:

Movement: Use the directional pad or arrow keys to move your ninja around the game environment.
Jumping: Press the "Jump" button (typically assigned to the spacebar) to make your ninja leap into the air. You can perform multiple jumps in succession for higher jumps or to reach platforms.
Attacking: Utilize the "Attack" button (often assigned to the Z or X key) to unleash various attacks on your opponents. Experiment with different button combinations to discover combos and special moves unique to your chosen ninja.
Special Moves and Combos:

Each ninja character has a set of special moves and combos that can be executed by inputting specific button combinations. These moves usually deal more damage and have additional effects.
Consult the game's instruction manual or in-game move list to learn the special moves and combos for your chosen ninja.
Practice the timing and execution of these moves to become proficient in using them during battles.
Blocking and Dodging:

Defending is crucial to surviving battles. Press the "Block" button (often assigned to the C or V key) to raise your ninja's guard and reduce incoming damage from attacks.
Additionally, you can utilize evasive maneuvers to dodge attacks. Press the "Dodge" button (usually assigned to the A or S key) to swiftly move your ninja out of harm's way`; // The text you want to display
const delay = 10; // The delay between each character (in milliseconds)

let index = 0;

function typeText() {
  if (index < text.length) {
    textContainer.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, delay);
  }
}

typeText();
/////////for the side bar
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navOverlay = document.querySelector(".nav-overlay");
const closeNav = document.querySelector(".close");

navToggle.addEventListener("click",() =>{
    navShow();
})
closeNav.addEventListener("click",() =>{
    hideNav();
})

// hide nav after clicked outside of nav
navOverlay.addEventListener("click",(e) =>{
  hideNav();
})

function navShow(){
   navOverlay.style.transition = "all 0.5s ease";
   navOverlay.classList.add("open");
   nav.style.transition = "all 0.3s ease 0.5s";
   nav.classList.add("open");
}

function hideNav(){
  nav.style.transition = "all 0.3s ease";
  nav.classList.remove("open");
  navOverlay.style.transition = "all 0.5s ease 0.3s";
  navOverlay.classList.remove("open");
}
///////////////////////

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

 