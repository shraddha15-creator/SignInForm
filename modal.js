var modal = document.getElementById("modal"); // Get the modal
var btn = document.querySelector(".open-modal"); // Get the button that opens the modal
var closeModal = document.getElementsByClassName("close")[0]; // Get the <closeModal> element that closes the modal

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
};

// When the user clicks on (x), close the modal
closeModal.onclick = function () {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
