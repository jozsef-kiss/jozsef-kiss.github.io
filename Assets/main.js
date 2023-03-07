/* ----- POPUP ---- */

let close = document.getElementById("close-js");

window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.getElementById("popup-js").classList.toggle("popup-container");
  }, 3000);
});

close.addEventListener("click", closePopup);

function closePopup() {
  document.getElementById("popup-js").classList.toggle("popup-container");
}
