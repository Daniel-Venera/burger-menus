let select = document.getElementById("selectBurger");
let burgerMenuContainer = document.getElementById("burgerMenuContainer");
let navigationContent = document.querySelector(".navigation-content");
let closeBtn = document.getElementById("closeBtn");
let burgerChosen;

// Select a burger

select.addEventListener("change", function () {
  navigationContent.classList.remove(burgerChosen);
  burgerChosen = select.value;
  navigationContent.classList.add(burgerChosen);
  burgerMenuContainer.style.animation = "pump 1.4s";
  animationDisplay(burgerMenuContainer, 1400);
});

// Navigation Display

burgerMenuContainer.addEventListener("click", function () {
  if (burgerChosen) {
    navigationContent.style.transform = "translate(var(--navigationTranslateX), var(--navigationTranslateY))";
  } else {
    select.style.animation = "shake 0.7s";
    animationDisplay(select, 700);
  }
});

document.addEventListener("click", function (e) {
  if (e.target == closeBtn || (e.target != burgerMenuContainer && e.target != burgerMenuContainer.firstChild && e.target != navigationContent)) {
    navigationContent.style.transform = "translate(0,0)";
  }
});

// Animation display

function animationDisplay(target, delay) {
  setTimeout(function () {
    target.style.animation = "";
  }, delay);
}
