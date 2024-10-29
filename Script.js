// Time Display Function
function updateTime() {
  const timeDisplay = document.getElementById('timeDisplay');
  const now = new Date();
  timeDisplay.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

// Calculator Functionality
let isOn = false;
const screen = document.getElementById('screen');

function powerOn() {
  isOn = true;
  screen.textContent = "Welcome";
  setTimeout(() => { screen.textContent = ""; }, 1000);
}

function powerOff() {
  isOn = false;
  screen.textContent = "VGAMES©";
}

function clearScreen() {
  if (isOn) screen.textContent = "";
}

function appendValue(value) {
  if (isOn) screen.textContent += value;
}

function calculate() {
  if (isOn) {
    try {
      screen.textContent = eval(screen.textContent);
    } catch {
      screen.textContent = "Error";
    }
  }
}

// Algebra Solver Function
function solveAlgebra() {
  if (isOn) {
    const equation = screen.textContent;
    const steps = [];

    // Simple Solver for linear equations in the form of ax + b = c
    const match = equation.match(/(-?\d*)x\s*([+-]\s*\d+)?\s*=\s*(-?\d+)/);
    if (match) {
      let [ , a, b, c] = match;
      a = parseInt(a || 1);  // coefficient of x
      b = parseInt(b || 0);  // constant term
      c = parseInt(c);       // right side constant

      steps.push(`Original Equation: ${equation}`);
      steps.push(`Step 1: Move constant term to the right side`);
      const rhs = c - b;
      steps.push(`=> ${a}x = ${rhs}`);
      steps.push(`Step 2: Divide by coefficient of x`);
      const solution = rhs / a;
      steps.push(`=> x = ${solution}`);
      displaySolution(steps);
    } else {
      screen.textContent = "Invalid";
    }
  }
}

function displaySolution(steps) {
  const solutionSteps = document.getElementById("solutionSteps");
  solutionSteps.innerHTML = steps.join("<br>");
  document.getElementById("algebraPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("algebraPopup").style.display = "none";
        }
  
