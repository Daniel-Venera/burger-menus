let log = console.log;

let burgerMenu = document.getElementById("burgerMenu");
let select = document.getElementById("selectBurger");
let burgerChosen = "modal-chosen";

select.addEventListener("change", function () {
  burgerMenu.classList.remove(burgerChosen);
  if (select.value == "modal") {
    burgerChosen = "modal-chosen";
  }
  burgerMenu.classList.add(burgerChosen);
});

// Modal Classic

let modal = document.querySelector(".modal");
let closeBtn = document.getElementById("closeBtn");

burgerMenu.addEventListener("click", function () {
  if (burgerChosen == "modal-chosen") {
    modal.style.display = "flex";
  }
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
