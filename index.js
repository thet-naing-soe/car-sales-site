// javascript
const menuBtn = document.querySelector(".menu");
const panel = document.querySelector(".filter");
const panelStyles = window.getComputedStyle(panel);

menuBtn.addEventListener("click", () => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
    panel.style.clipPath = "circle(100% at 50% 50%)";
  } else {
    panel.style.clipPath = "circle(0% at 100% 0%)";
  }
});
document.addEventListener("mouseup", (event) => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(100% at 50% 50%)") {
    if (!panel.contains(event.target)) {
      panel.style.clipPath = "circle(0% at 100% 0%)";
    }
  }
});
