import { onMouseDown, onMouseUp, onTouchStart, onTouchEnd } from "./moveItems";

const desktopContent = document.querySelector(".desktop-content");

export function createDesktopLabels(labels) {
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
    desktopLabel.addEventListener("mousedown", onMouseDown);
    desktopLabel.addEventListener("mouseup", onMouseUp);
    desktopLabel.addEventListener("touchstart", onTouchStart);
    desktopLabel.addEventListener("touchend", onTouchEnd);
    desktopContent.appendChild(desktopLabel);
  });
}

export function createDesktopWindows(labels) {
  labels.forEach((label) => {
    const desktopWindow = document.createElement("div");
    const desktopWindowHeader = document.createElement("div");
    const desktopWindowHeaderPath = document.createElement("div");
    const desktopWindowHeaderIcon = document.createElement("img");
    const desktopWindowHeaderTitle = document.createElement("p");
    const desktopWindowHeaderBtns = document.createElement("div");
    const desktopWindowHeaderBtn = document.createElement("button");
    const desktopWindowBody = document.createElement("div");
    desktopWindow.appendChild(desktopWindowHeader);
    desktopWindow.appendChild(desktopWindowBody);
  });
}
