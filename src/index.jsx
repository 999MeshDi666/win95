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

const desktopContent = document.querySelector(".desktop_content");
const desktopWindow = document.querySelector(".desktop_window");
const desktopWindowHeaderBtns = document.querySelector(
  "#desktop_window_header_btns"
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
      return desktopContent.removeChild(desktopWindow);
  }
});

const clock = document.querySelector(".desktop_footer_panel_clock");
const formattedDate = new Date().toLocaleDateString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
clock.textContent = formattedDate.substring(
  formattedDate.indexOf(",") + 1,
  formattedDate.length[-1]
);
