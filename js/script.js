let log = console.log;

let burgerMenu = document.getElementById("burgerMenu");
let select = document.getElementById("selectBurger");
let burgerMenuContainer = document.getElementById("burgerMenuContainer");
let burgerChosen;

select.addEventListener("change", function () {
  if (burgerMenu.classList.contains("fa-times")) {
    burgerMenu.classList.remove("fa-times");
    burgerMenu.classList.add("fa-bars");
  }
  navigationContent.classList.remove(burgerChosen);
  burgerChosen = select.value;
  navigationContent.classList.add(burgerChosen);
  burgerMenuContainer.style.animation = "pump 1.4s";
  animationDisplay(burgerMenuContainer, 1400);
});

// navigationContent

let navigationContent = document.querySelector(".navigation-content");
let closeBtn = document.getElementById("closeBtn");
log(navigationContent);

burgerMenu.addEventListener("click", function () {
  if (burgerChosen == undefined) {
    select.style.animation = "shake 0.7s";
    animationDisplay(select, 700);
  }
  // Choices
  if (burgerChosen == "classic") {
    navigationContent.style.transform = "translateY(100vh)";
  }
  if (burgerChosen == "cheese") {
    navigationContent.style.transform = "translateX(-65vw)";
  }
  if (burgerChosen == "extra-pickle") {
    navigationContent.style.transform = "translateX(-100vw)";
  }

  if (burgerChosen == "extra-onion") {
    navigationContent.style.animation = "extra-onion 0.7s";
    burgerMenuDisplay();
    animationDisplay(navigationContent, 700);
  }
});

closeBtn.addEventListener("click", function () {
  if (burgerChosen != "extra-onion") {
    navigationContent.style.transform = "translate(0,0)";
  }
});

document.addEventListener("click", function (e) {
  if (e.target && e.target != burgerMenu && e.target != navigationContent) {
    navigationContent.style.transform = "translate(0,0)";
  }
});

// Animation display

function animationDisplay(target, delay) {
  setTimeout(function () {
    target.style.animation = "";
  }, delay);
}

// Burger Menu Display

function burgerMenuDisplay() {
  if (burgerMenu.classList.contains("fa-times")) {
    burgerMenu.classList.remove("fa-times");
    burgerMenu.classList.add("fa-bars");
    navigationContent.style.display = "none";
  } else {
    burgerMenu.classList.remove("fa-bars");
    burgerMenu.classList.add("fa-times");
  }
}
