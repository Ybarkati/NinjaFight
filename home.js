//to make the guide text
const textContainer = document.querySelector('h2');
const text = `In a world where darkness loomed, a noble-hearted ninja emerged to combat evil. Despised by all villains, his unwavering commitment to justice was renowned. One fateful day, his beloved family was abducted, their whereabouts concealed within a perilous mountain. Determined and swift,in the first level, the ninja embarked on a treacherous journey to reach the mountain's peak. Upon his arrival, a startling revelation awaited him – the kidnapper was none other than an old friend. In the second level, a face-off between friends would ensue as he fought to rescue his family from the clutches of betrayal.
--------------------How to play:

----------------Level 1:
To begin the game, press the spacebar. Use the Arrow Up key to make the ninja jump over obstacles and navigate through the treacherous terrain.

----------------Level 2:
Click on the "Play" button to initiate the level. For Player 1, control the ninja character with the Arrow Up key to jump and the Arrow Left key to shoot projectiles at enemies. For Player 2, use the W key to jump and the D key to shoot. Coordinate with your teammate to overcome challenges and advance through the level.

-------------------Note: Stay vigilant and be strategic in your movements to rescue your family and triumph over the forces of darkness. Good luck!`; // The text you want to display
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

 