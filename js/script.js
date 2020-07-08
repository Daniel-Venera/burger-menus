let log = console.log;

let burgerMenu = document.getElementById("burgerMenu");
let select = document.getElementById("selectBurger");
let burgerMenuContainer = document.getElementById("burgerMenuContainer");
let burgerChosen;

select.addEventListener("change", function () {
  // navigationContainer.style.display = "none";
  if (burgerMenu.classList.contains("fa-times")) {
    burgerMenu.classList.remove("fa-times");
    burgerMenu.classList.add("fa-bars");
  }
  navigationContainer.classList.remove(burgerChosen);
  burgerChosen = select.value;
  navigationContainer.classList.add(burgerChosen);
  burgerMenuContainer.style.animation = "pump 1.4s";
  animationDisplay(burgerMenuContainer, 1400);
});

// navigationContainer

let navigationContainer = document.querySelector(".navigation-container");
let closeBtn = document.getElementById("closeBtn");
let count = 100;

burgerMenu.addEventListener("click", function () {
  log(navigationContainer);
  if (burgerChosen != undefined) {
    navigationContainer.style.display = "flex";
    if (burgerChosen == "extra-onion") {
      burgerMenuDisplay();
    }
  } else if (!select.style.animation) {
    select.style.animation = "shake 0.7s";
    animationDisplay(select, 700);
  }

  if (navigationContainer.classList.contains("classic")) {
    log("oui");
    navigationContainer.style.transform = "translateY(100vh)";
    count = 0;
  }
  log(navigationContainer);

  // burgerMenu.style.animation = "";
});

closeBtn.addEventListener("click", function () {
  if (navigationContainer.classList.contains("classic")) {
    navigationContainer.style.transform = "translateY(0)";
  }

  // setTimeout(function () {
  //   navigationContainer.style.display = "none";
  // }, 700);
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("cheese")) {
    e.target.style.display = "none";
  }
});

// Animation display

function animationDisplay(target, delay) {
  setTimeout(function () {
    target.style.animation = "";
  }, delay);
}

function burgerMenuDisplay() {
  if (burgerMenu.classList.contains("fa-times")) {
    burgerMenu.classList.remove("fa-times");
    burgerMenu.classList.add("fa-bars");
    navigationContainer.style.display = "none";
  } else {
    burgerMenu.classList.remove("fa-bars");
    burgerMenu.classList.add("fa-times");
  }
}
