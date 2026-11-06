import { gameState } from "./state.js";
import { questionBanks } from "./question-banks.js";

// DOM setup
const canvas = document.getElementById("wheel-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;

// Wheel properties
const categories = Object.keys(questionBanks);
const numSlices = categories.length;
const sliceAngles = (2 * Math.PI) / numSlices;
// Wheel size assumes a 400px canvas, we can change this later if needed!
const centerX = 200;
const centerY = 200;
const radius = 180;

let spinVelocity = 0;
let friction = 0.985; // This will slow the wheel down in a natural, smooth way
