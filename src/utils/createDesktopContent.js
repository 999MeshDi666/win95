const desktopContent = document.querySelector(".desktop_content");

export function createDesktopLabels(labels) {
  let positionY = 20;

  labels.forEach((label) => {
    if (desktopContent.clientHeight < positionY) return;

    const desktopLabel = document.createElement("div");
    desktopLabel.className = "desktop_label";
    desktopLabel.id = label.name;

    desktopLabel.style.top = `${positionY}px`;
    positionY += 100;

    const desktopLabelIcon = document.createElement("img");
    desktopLabelIcon.src = `./assets/images/${label.name}.png`;
    desktopLabelIcon.alt = label.name;
    desktopLabelIcon.className = "desktop_label_icon";

    const desktopLabelTitle = document.createElement("p");
    desktopLabelTitle.textContent = label.title;
    desktopLabelTitle.className = "desktop_label_title";

    desktopLabel.appendChild(desktopLabelIcon);
    desktopLabel.appendChild(desktopLabelTitle);

    desktopContent.appendChild(desktopLabel);
  });
}
