let log = console.log;

let burgerMenu = document.getElementById("burgerMenu");
let select = document.getElementById("selectBurger");
let burgerChosen;

select.addEventListener("change", function () {
  modal.classList.remove(burgerChosen);
  burgerChosen = select.value;
  modal.classList.add(burgerChosen);
});

// Modal Classic

let modal = document.querySelector(".modal");
let closeBtn = document.getElementById("closeBtn");

burgerMenu.addEventListener("click", function () {
  if (burgerChosen != undefined) {
    modal.style.display = "flex";
  }
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("modal-cheese")) {
    e.target.style.display = "none";
  }
});
