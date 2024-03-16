import "./styles/main.css";
import "./assets/images/artage-io-48140_1710064888.png";

const icon = document.getElementById("resume");

function moveDesktopLabel(moveEvent) {
  const outOfScreenY =
    moveEvent.clientY > window.innerHeight || moveEvent.clientY < 0;
  const outOfScreenX =
    moveEvent.clientX > window.innerWidth || moveEvent.clientX < 0;
  if (outOfScreenY || outOfScreenX) {
    document.removeEventListener("mousemove", moveDesktopLabel);
  }
  icon.style.top = `${moveEvent.clientY - 25}px`;
  icon.style.left = `${moveEvent.clientX - 40}px`;
}

icon.addEventListener("mousedown", (downEvent) => {
  icon.style.top = `${downEvent.clientY - 25}px`;
  icon.style.left = `${downEvent.clientX - 40}px`;
  document.addEventListener("mousemove", moveDesktopLabel);
});
icon.addEventListener("mouseup", (upEvent) => {
  icon.style.top = `${upEvent.clientY - 50}px`;
  icon.style.left = `${upEvent.clientX - 50}px`;
  document.removeEventListener("mousemove", moveDesktopLabel);
});
