const dropBtn = document.getElementById("dropdown");
const open = document.querySelector(".togle");
let timeoutId; // Initialize a variable to store the timeout ID

dropBtn.addEventListener("mouseenter", function () {
  open.classList.add("active");
  clearTimeout(timeoutId); // Clear any previous timeout
});

dropBtn.addEventListener("mouseleave", function () {
  // Use a timeout to hide the dropdown after a delay (e.g., 1000 milliseconds)
  timeoutId = setTimeout(function () {
    open.classList.remove("active");
  }, 1000); // Adjust the delay as needed
});
