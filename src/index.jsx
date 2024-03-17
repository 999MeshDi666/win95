import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";

const desktopLabels = [
  {
    name: "note",
    title: "resume.doc",
  },
  {
    name: "computer",
    title: "My Computer",
  },
  {
    name: "disc",
    title: "disc",
  },
];
const desktopContent = document.querySelector(".desktop-content");

function createDesktopLabels(labels) {
  let positionY = 20;

  labels.forEach((label) => {
    if (desktopContent.clientHeight < positionY) return;

    const desktopLabel = document.createElement("div");
    desktopLabel.className = "desktop-label";
    desktopLabel.id = label.name;
    desktopLabel.style.top = `${positionY}px`;
    positionY += 100;

    const desktopLabelIcon = document.createElement("img");
    desktopLabelIcon.src = `./assets/images/${label.name}.png`;
    desktopLabelIcon.alt = label.name;
    desktopLabelIcon.className = "desktop-label-icon";
    desktopLabelIcon.draggable = false;

    const desktopLabelTitle = document.createElement("p");
    desktopLabelTitle.textContent = label.title;
    desktopLabelTitle.className = "desktop-label-title";

    desktopLabel.appendChild(desktopLabelIcon);
    desktopLabel.appendChild(desktopLabelTitle);
    desktopContent.appendChild(desktopLabel);
  });
}
createDesktopLabels(desktopLabels);
const icon = document.getElementById("note");

function moveDesktopItems(event) {
  const outOfScreenY = event.clientY > window.innerHeight || event.clientY < 0;
  const outOfScreenX = event.clientX > window.innerWidth || event.clientX < 0;
  if (outOfScreenY || outOfScreenX) {
    document.removeEventListener("mousemove", moveDesktopItems);
  }
  icon.style.top = `${event.clientY - 25}px`;
  icon.style.left = `${event.clientX - 40}px`;
}
function actionMouseDown(event) {
  icon.style.top = `${event.clientY - 25}px`;
  icon.style.left = `${event.clientX - 40}px`;
  document.addEventListener("mousemove", moveDesktopItems);
}
function actionMouseUp(event) {
  icon.style.top = `${event.clientY - 50}px`;
  icon.style.left = `${event.clientX - 50}px`;
  document.removeEventListener("mousemove", moveDesktopItems);
}
icon.addEventListener("mousedown", actionMouseDown);
icon.addEventListener("mouseup", actionMouseUp);
