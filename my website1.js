// Get all audio elements
const tracks = document.querySelectorAll("audio");
let currentTrack = 0;
let isPlaying = false;

// Get buttons
const playButton = document.querySelector('button:nth-of-type(1)');
const shuffleButton = document.querySelector('button:nth-of-type(2)');

// play function
function playTrack(index) {
    // stop playing
    tracks.forEach(track => {
        track.pause();
        track.currentTime = 0;
    });

    // Play selected track
    tracks[index].play();
    isPlaying = true;
    playButton.textContent = "Pause";

    // When track ends, go to next one
    tracks[index].onended = () => {
        currentTrack++;
        if (currentTrack < tracks.length) {
            playTrack(currentTrack);
        } else {
            // Album finished
            isPlaying = false;
            playButton.textContent = "Play";
            currentTrack = 0;
        }
    };
}

// Play/Pause album button
playButton.addEventListener("click", () => {
    if (!isPlaying) {
        playTrack(currentTrack);
    } else {
        tracks[currentTrack].pause();
        isPlaying = false;
        playButton.textContent = "Play";
    }
});

// Shuffle button
shuffleButton.addEventListener("click", () => {
    // Stop current track
    tracks.forEach(track => {
        track.pause();
        track.currentTime = 0;
    });

    // Pick random track
    const randomIndex = Math.floor(Math.random() * tracks.length);
    currentTrack = randomIndex;

    // Play it
    playTrack(randomIndex);
});
