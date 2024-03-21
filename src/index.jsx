import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";
import { createDesktopLabels } from "./utils/createDesktopContent";
import {
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
} from "./utils/moveItems";

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
desktopWindow.addEventListener("mousedown", onMouseDown);
desktopWindow.addEventListener("mouseup", onMouseUp);
desktopWindow.addEventListener("touchstart", onTouchStart);
desktopWindow.addEventListener("touchend", onTouchEnd);
createDesktopLabels(desktopLabels);
