let log = console.log;

let burgerMenu = document.getElementById("burgerMenu");
let select = document.getElementById("selectBurger");
let burgerMenuContainer = document.getElementById("burgerMenuContainer");
let burgerChosen;

select.addEventListener("change", function () {
  navigationContainer.classList.remove(burgerChosen);
  burgerChosen = select.value;
  navigationContainer.classList.add(burgerChosen);
  burgerMenuContainer.style.animation = "pump 1s 1";
});

// navigationContainer

let navigationContainer = document.querySelector(".navigation-container");
let closeBtn = document.getElementById("closeBtn");

burgerMenu.addEventListener("click", function () {
  burgerMenu.style.animation = "";
  if (burgerChosen != undefined) {
    navigationContainer.style.display = "flex";
  } else if (!select.style.animation) {
    select.style.animation = "shake 0.7s";
    setTimeout(function () {
      select.style.animation = "";
    }, 800);
  }
});

closeBtn.addEventListener("click", function () {
  navigationContainer.style.display = "none";
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("cheese")) {
    e.target.style.display = "none";
  }
});
