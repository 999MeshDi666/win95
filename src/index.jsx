import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";
import { createDesktopLabels } from "./utils/createDesktopContent";

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
    title: "Disc",
  },
];

const desktopWindow = document.querySelector(".desktop-window");
const desktopWindowHeaderBtns = document.querySelector(
  "#desktop-window-header-btns"
);

desktopWindowHeaderBtns.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !desktopWindowHeaderBtns.contains(button)) return;
  const dataAction = button.getAttribute("data-action");

  switch (dataAction) {
    case "collapse":
      return console.log("collapse");
    case "resize":
      return console.log("resize");
    default:
      return (desktopWindow.style.display = "none");
  }
});
createDesktopLabels(desktopLabels);
