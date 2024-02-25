// Get the modal and overlay elements
var modal = document.getElementById("modal");
var overlay = document.getElementById("overlay");

// Get the close button inside the modal
var closeButton = document.getElementById("close");

// Function to show the modal
function showModal() {
    modal.classList.add("active"); // Show the modal
    overlay.classList.add("active"); // Show the overlay
}

// Function to hide the modal
function hideModal() {
    modal.classList.remove("active"); // Hide the modal
    overlay.classList.remove("active");
}

// Event listener for the close button
closeButton.addEventListener("click", hideModal);

// Event listener for the button that triggers the modal
document.getElementById("bawah").addEventListener("click", showModal);
