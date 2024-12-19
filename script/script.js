const games = document.querySelectorAll(".game");
const progressFill = document.querySelector(".progress-fill");
const progressPercentage = document.querySelector(".progress-percentage");
const circularValue = document.querySelectorAll(".circular-value");
const progressCircles = document.querySelectorAll(".progress");
const videoElement = document.querySelector("#game-video");
// The object with each key and a value

const gameData = {
  default: {
    horizontal: 0,
    circular: 0,
    circularLabel: "K/D",
    wl: 0,
    wlLabel: "W/L",
    video: "",
  },
  siege: {
    horizontal: 99,
    circular: 1.5,
    circularLabel: "K/D",
    wl: 2.3,
    wlLabel: "W/L",
    video: "../assets/clip_r6.mp4",
  },
  cod: {
    horizontal: 64,
    circular: 2.1,
    circularLabel: "K/D",
    wl: 1.8,
    wlLabel: "W/L",
    video: "../assets/clip_cod.mp4",
  },
  apex: {
    horizontal: 32,
    circular: 1.4,
    circularLabel: "K/D",
    wl: 2.4,
    wlLabel: "W/L",
    video: "../assets/clip_apex.mp4",
  },
  cs: {
    horizontal: 78,
    circular: 2.6,
    circularLabel: "K/D",
    wl: 3.8,
    wlLabel: "W/L",
    video: "../assets/clip_cs.mp4",
  },
};

function updateStats(gameId) {
  const gameStats = gameData[gameId] || gameData.default;

  // The progress-bar (%)

  progressFill.style.width = `${gameStats.horizontal}%`;
  progressPercentage.textContent = `${gameStats.horizontal}%`;
  // The K/D circle
  const maxOffset = 283;
  const kdOffset = maxOffset - (maxOffset * gameStats.circular) / 3;
  progressCircles[0].style.strokeDashoffset = kdOffset;
  circularValue[0].textContent = `${gameStats.circular} ${gameStats.circularLabel}`;
  // The W/L circle
  const wlOffset = maxOffset - (maxOffset * gameStats.wl) / 5;
  progressCircles[1].style.strokeDashoffset = wlOffset;
  circularValue[1].textContent = `${gameStats.wl} ${gameStats.wlLabel}`;
  // The clip
  if (gameStats.video) {
    videoElement.querySelector("source").src = gameStats.video;
    videoElement.load();
  }
}

updateStats("default");

games.forEach((game) => {
  game.addEventListener("mouseenter", () => updateStats(game.id));
});
