// DOM setup
const canvas = document.getElementById("wheel-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const spinButton = document.getElementById("spin-button");
const wheelActions = document.getElementById("wheel-actions");
const confirmBtn = document.getElementById("confirm-category-btn");
const respinBtn = document.getElementById("respin-btn");
const categoryDisplay = document.getElementById("selected-category-display");
const respinCost = 50;

// Wheel properties
const categories = Object.keys(questionBank);
const numSlices = categories.length;
const sliceAngle = (2 * Math.PI) / numSlices;
const centerX = 200;
const centerY = 200;
const radius = 180;

let spinVelocity = 0;
let friction = 0.985; // This will slow the wheel down in a natural, smooth way

// Time to render the wheel using HTML5 WOOHOO! (I hope this works...)
function drawWheel() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  categories.forEach(function (name, index) {
    const categoryData = questionBank[name];
    const startAngle = gameState.wheelRotation + index * sliceAngle;
    const endAngle = startAngle + sliceAngle;

    // Drawing a slice
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.fillStyle = categoryData.color;
    ctx.fill();
    ctx.strokeStyle = "#ffffff"; // Change the color here if we want!
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw the text labels on the slices
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(startAngle + sliceAngle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 11px sans-serif";
    const label = categoryLabels[name] || name;
    ctx.fillText(label, radius - 12, 4);
    ctx.restore();
  });
}

// Calculating which category is at the top of the wheen (and therefore gets selected!)
function getCategoryAtPointer() {
  // Setting the pointer to be at top (12 o'clock)
  const pointerAngle = (3 * Math.PI) / 2;

  // Normalize rotation to positive range
  let normalizedRotation = gameState.wheelRotation % (2 * Math.PI);
  if (normalizedRotation < 0) normalizedRotation += 2 * Math.PI;

  // Calculate angle difference relative to pointer
  let relativeAngle = (pointerAngle - normalizedRotation) % (2 * Math.PI);
  if (relativeAngle < 0) relativeAngle += 2 * Math.PI;

  const winningIndex = Math.floor(relativeAngle / sliceAngle);
  return categories[winningIndex];
}

// Spin animation loop
function spinWheel(onComplete) {
  if (gameState.isSpinning) return;

  gameState.isSpinning = true;

  // Randomize the initial spin speed
  spinVelocity = Math.random() * 0.2 + 0.3;

  function animate() {
    spinVelocity *= friction;
    gameState.wheelRotation += spinVelocity;
    drawWheel();

    if (spinVelocity > 0.002) {
      requestAnimationFrame(animate);
    } else {
      spinVelocity = 0;
      gameState.isSpinning = false;
      const selectedCategory = getCategoryAtPointer();
      gameState.currentCategory = selectedCategory;

      if (onComplete) {
        onComplete(selectedCategory);
      }
    }
  }
  requestAnimationFrame(animate);
}

// Post-spin UI updates
function handleSpinComplete(selectedCategory) {
  const friendlyName = categoryLabels[selectedCategory] || selectedCategory;
  categoryDisplay.textContent = `Category: ${friendlyName}`;

  // Hide initial spin button and show Confirm / Respin buttons
  spinButton.hidden = true;
  wheelActions.hidden = false;
  // Disable respin button if the player has less than $200
  confirmBtn.disabled = false;
  respinBtn.disabled = gameState.playerMoney < respinCost;
}

// Initial Spin
spinButton.addEventListener("click", () => {
  spinButton.disabled = true;
  categoryDisplay.textContent = "Spinning...";
  spinWheel(handleSpinComplete);
});

// Spend respinCost to Spin Again
respinBtn.addEventListener("click", () => {
  if (gameState.playerMoney >= respinCost && !gameState.isSpinning) {
    gameState.playerMoney -= respinCost;
    renderWheelHud();
    confirmBtn.disabled = true;
    respinBtn.disabled = true;
    wheelActions.hidden = true;
    categoryDisplay.textContent = "Spinning again...";
    spinWheel(handleSpinComplete);
  }
});

// Confirm Category & Start Round
confirmBtn.addEventListener("click", () => {
  startRound(gameState.currentCategory);
});

function startWheel() {
  // Reset UI state for a fresh spin
  spinButton.disabled = false;
  spinButton.hidden = false;
  wheelActions.hidden = true;
  categoryDisplay.textContent = "Spin the wheel to choose a category!";

  // Render the wheel on screen
  showScreen("wheel-screen");
  drawWheel();
  renderWheelHud();
}

function renderWheelHud() {
  document.getElementById("wheel-level-display").textContent =
    gameState.currentLevel;
  document.getElementById("wheel-money-display").textContent =
    gameState.playerMoney;

  const livesContainer = document.getElementById("wheel-lives-display");
  livesContainer.setAttribute("aria-label", `Lives: ${gameState.playerLives}`);
  livesContainer.innerHTML = Array.from({ length: STARTING_LIVES }, (_, i) => {
    const lostClass = i < gameState.playerLives ? "" : " heart--lost";
    return `<svg class="heart${lostClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="${HEART_PATH}" /></svg>`;
  }).join("");
}
