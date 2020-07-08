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
  if (burgerChosen != undefined) {
    navigationContent.style.display = "flex";
    if (burgerChosen == "extra-onion") {
      burgerMenuDisplay();
    }
  } else {
    select.style.animation = "shake 0.7s";
    animationDisplay(select, 700);
  }
  // Choices
  if (navigationContent.classList.contains("classic")) {
    navigationContent.style.transform = "translateY(100vh)";
  }
  if (navigationContent.classList.contains("cheese")) {
    navigationContent.style.transform = "translateX(-65vw)";
  }
});

closeBtn.addEventListener("click", function () {
  if (burgerChosen == "classic" || burgerChosen == "cheese") {
    navigationContent.style.transform = "translate(0,0)";
  } else {
    navigationContent.style.display = "none";
  }
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
