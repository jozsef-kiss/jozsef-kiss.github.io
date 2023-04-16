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

document.addEventListener("DOMContentLoaded", function () {
  // Az összes menüpontra kattintáskor elrejtjük a menüt és a hivatkozáshoz ugrunk
  var menuItems = document.querySelectorAll(".menu__item");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      var menuToggle = document.getElementById("menu-toggle");
      menuToggle.checked = false; // Menü elrejtése

      // Hivatkozásra ugrás, csak akkor, ha a kattintás egy hivatkozáson belül történt
      if (event.target.tagName === "A") {
        var href = event.target.getAttribute("href");
        if (href.startsWith("#")) {
          // Ellenőrizzük, hogy az ugrás egy belső horgonyra történik-e
          event.preventDefault(); // Megakadályozzuk az alapértelmezett viselkedést (az ugrást)
          var targetElement = document.querySelector(href);
          targetElement.scrollIntoView({ behavior: "smooth" }); // Sima görgetés a horgonyhoz
        }
      }
    });
  });
});
