const player = document.getElementById("player");
const playPauseBtn = document.getElementById("playPauseBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const currentTitle = document.getElementById("currentTitle");
const albumArt = document.getElementById("albumArt");

// Playlist
const tracks = [ 
  { title: "Mo City Flexologist", src: "page3/01. Mo City Flexologist.mp3" },
  { title: "Too Many Chances", src: "page3/02. Too Many Chances.mp3" },
  { title: "Yeah Yeah", src: "page3/03. Yeah yeah(feat. Young Thug).mp3" },
  { title: "Seranade", src: "page3/04. Serenade.mp3" },
  { title: "whole lots changed", src: "page3/05. Whole Lots Changed.mp3" },
  { title: "Yeah Yeah", src: "page3/03. Yeah yeah(feat. Young Thug)" },
  { title: "Yeah Yeah", src: "page3/03. Yeah yeah(feat. Young Thug)" },
  { title: "Yeah Yeah", src: "page3/03. Yeah yeah(feat. Young Thug)" },


  

];

let currentTrack = 0;
let isPlaying = false;
let shuffleMode = false;

// Load the first track
function loadTrack(index) {
  player.src = tracks[index].src;
  currentTitle.textContent = `${index + 1}. ${tracks[index].title}`;
}

// Play/Pause button
playPauseBtn.addEventListener("click", () => {
  if (!isPlaying) {
    playTrack(currentTrack);
  } else {
    pauseTrack();
  }
});

// Shuffle button
shuffleBtn.addEventListener("click", () => {
  shuffleMode = !shuffleMode;
  shuffleBtn.style.color = shuffleMode ? "aqua" : "white";
});

// Play a specific track
function playTrack(index) {
  loadTrack(index);
  player.play();
  isPlaying = true;
  albumArt.classList.add("playing");
  playPauseBtn.innerHTML = '<span class="material-symbols-outlined">pause</span>';
}

// Pause track
function pauseTrack() {
  player.pause();
  isPlaying = false;
  albumArt.classList.remove("playing");
  playPauseBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
}

// When a track ends
player.addEventListener("ended", () => {
  if (shuffleMode) {
    currentTrack = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrack = (currentTrack + 1) % tracks.length;
  }
  playTrack(currentTrack);
});

// Load first track on start
loadTrack(currentTrack);

const nextBtn = document.getElementById("nextBtn");

// Next button functionality
nextBtn.addEventListener("click", () => {
  if (shuffleMode) {
    currentTrack = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrack = (currentTrack + 1) % tracks.length;
  }
  playTrack(currentTrack);
});
