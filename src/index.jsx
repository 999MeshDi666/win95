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

createDesktopLabels(desktopLabels);
