const player = document.getElementById("player");
const playPauseBtn = document.getElementById("playPauseBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const currentTitle = document.getElementById("currentTitle");
const albumArt = document.getElementById("albumArt");

// Playlist
const tracks = [
  { title: "At Your Best (You Are Love)", src: "media/01 At Your Best (You Are Love).mp3" },
  { title: "Alabama", src: "media/02 Alabama.mp3" },
  { title: "Mine", src: "media/03 Mine.mp3" },
  { title: "A Certain Way", src: "media/05 A Certain Way.mp3" },
  { title: "Comme des Garçons", src: "media/06 Comme des Garçons.mp3" },
  { title: "Xenons", src: "media/07 Xenons.mp3" },
  { title: "Honeybaby", src: "media/08 Honeybaby.mp3" },
  { title: "In Here Somewhere", src: "media/11 In Here Somewhere.mp3" },
  { title: "Slide On Me", src: "media/12 Slide on Me.mp3" },
  { title: "Florida", src: "media/14 Florida.mp3" },
  { title: "Higgs", src: "media/18 Higgs.mp3" }
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
