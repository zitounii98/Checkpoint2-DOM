// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Default color
const defaultColor = "lightgray";

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  const resetBtn = document.getElementById("reset-btn");

  // Change color button functionality
  changeColorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });

  // Reset button functionality
  resetBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = defaultColor;
  });
});
