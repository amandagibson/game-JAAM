import { gameState } from "./state.js";
import { questionBanks } from "./question-banks.js";

// DOM setup
const canvas = document.getElementById("wheel-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;

// Wheel properties
const categories = Object.keys(questionBanks);
const numSlices = categories.length;
const sliceAngle = (2 * Math.PI) / numSlices;
// Wheel size assumes a 400px canvas, we can change this later if needed!
const centerX = 200;
const centerY = 200;
const radius = 180;

let spinVelocity = 0;
let friction = 0.985; // This will slow the wheel down in a natural, smooth way

// Time to render the wheel using HTML5 WOOHOO! (I hope this works...)
export function drawWheel() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  categories.forEach(function (name, index) {
    const categoryData = questionBanks[name];
    const startAngle = gameState.wheelRotation + index * sliceAngles;
    const endAngle = startAngle + sliceAngles;

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
    ctx.fillText(name, radius - 12, 4);
    ctx.restore();
  });
}

// Calculating which category is at the top of the wheen (and therefore gets selected!)
export function getCategoryAtPointer() {
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
