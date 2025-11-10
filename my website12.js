const player = document.getElementById("player");
const playPauseBtn = document.getElementById("playPauseBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const currentTitle = document.getElementById("currentTitle");
const albumArt = document.getElementById("albumArt");

// Playlist
const tracks = [ 
  { title: "street figher", src: "page2/01 street fighter.m4a" },
  { title: "strawberry swing", src: "page2/02 strawberry swing.m4a" },
  { title: "songs for women", src: "page2/06 songs for women.m4a" },
  { title: "novacane", src: "page2/03 novacane.m4a" },
  { title: "we all try", src: "page2/04 we all try.m4a" },
  { title: "bitches talkin'", src: "page2/05 bitches talkin'.m4a" },
  { title: "songs for women", src: "page2/06 songs for women.m4a" },
  { title: "lovecrimes", src: "page2/07 lovecrimes.m4a" },
  { title: "goldeneye", src: "page2/08 goldeneye.m4a" },
  { title: "there will be tears", src: "page2/09 there will be tears.m4a" },
  { title: "swim good", src: "page2/10 swim good.m4a" },
  { title: "dust", src: "page2/11 dust.m4a" },
  { title: "street american wedding", src: "page2/12 american wedding.m4a" },
  
  { title: "soul calibur", src: "page2/13 soul calibur.m4a" },
{ title: "nature feels", src: "page2/14 nature feels.m4a" },
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
