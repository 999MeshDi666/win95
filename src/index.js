import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";
import { createDesktopLabels } from "./utils/createDesktopContent";

const desktopLabels = [
  {
    name: "note",
    title: "resume.txt",
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
const windowBodyContent = document.querySelector(".window_body_content");
const desktopWindowHeaderBtns = document.querySelector(
  "#desktop_window_header_btns"
);

desktopWindowHeaderBtns.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !desktopWindowHeaderBtns.contains(button)) return;
  const dataAction = button.getAttribute("data-action");

  switch (dataAction) {
    case "collapse":
      desktopWindow.style.display = "none";
      break;
    case "resize":
      desktopWindow.classList.toggle("desktop_window_resized");
      windowBodyContent.classList.toggle("window_body_content_resized");
      break;
    default:
      desktopContent.removeChild(desktopWindow);
      break;
  }
});

const desktopFooterTabs = document.querySelectorAll(".desktop_footer_tab");
desktopFooterTabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tab.classList.toggle("desktop_border_inset");
  });
});

const clock = document.querySelector(".desktop_footer_panel_clock");

function tick() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const currentTime = formattedDate.substring(
    formattedDate.indexOf(",") + 1,
    formattedDate.length[-1]
  );

  clock.textContent = currentTime;
  console.log(currentTime);
  setInterval(tick, 60000);
}
tick();
