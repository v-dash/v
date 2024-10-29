# VGAMES© Calculator

VGAMES© Calculator is a stylish, mobile-responsive calculator designed to handle both standard arithmetic and algebraic calculations. It includes a unique "on/off" feature with special messages, and a pop-up for step-by-step algebra solutions, inspired by the design and functionality of Casio/scientific calculators.

## Features

- **Basic Calculations**: Perform standard operations like addition, subtraction, multiplication, and division.
- **Algebraic Solver**: Solve algebraic expressions and see step-by-step solutions in a popup.
- **Power On/Off Function**: Includes a `Welcome` message on power-on and `VGAMES©` on power-off.
- **Time Display**: Shows the current time in the upper left corner with a glowing effect.
- **Sleek, Responsive Design**: Optimized for mobile and desktop use, with a stylish interface.

## Files

- `index.html`: The main HTML file containing the structure of the calculator.
- `style.css`: The CSS file for styling the calculator interface.
- `script.js`: The JavaScript file for handling functionality, including calculations and algebraic solving.

## Usage

1. Clone or download the repository.
2. Open `index.html` in your browser to view and use the calculator.

## Calculator Layout

- **Time Display**: Located in the top-left corner, showing the current time with a glowing style.
- **Calculator Box**: Contains the calculator screen and buttons.
  - **Screen**: Displays the current input and results.
  - **Buttons**:
    - **ON/OFF**: Toggle the calculator display.
    - **C**: Clear the current input.
    - **Standard Number/Operator Buttons**: For basic calculations.
    - **Solve Button**: Solves algebraic expressions and opens a popup with solution steps.

## Code Structure

- **HTML (index.html)**: Provides the main structure, including the calculator interface and time display.
- **CSS (style.css)**: Styles the calculator with a sleek, modern look.
- **JavaScript (script.js)**: Adds interactivity, including:
  - Displaying the current time.
  - Handling button clicks for calculations and clearing.
  - Powering on/off functionality with display messages.
  - Solving algebra problems with a popup display for steps.

## Example

```html
<!-- Power ON/OFF buttons -->
<button onclick="powerOn()" class="power-btn">ON</button>
<button onclick="powerOff()" class="power-btn">OFF</button>
