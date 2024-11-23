import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/folder.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";
import {
  createDesktopLabels,
  createWinPanelLabels,
} from "./utils/desktopContent";

localStorage.setItem("lang", "RU");

const desktopContent = document.querySelector(".desktop_content");
createDesktopLabels(desktopContent);
createWinPanelLabels(desktopContent);

const desktopFooterBtn = document.querySelector(".desktop_footer_btn");
const desktopFooterPanel = document.querySelector(".desktop_footer_panel");
desktopFooterBtn.addEventListener("click", () => {
  desktopFooterPanel.classList.toggle("desktop_footer_panel_hidden");
});

const desktopFooterToolbarLangPanel = document.querySelector(
  ".desktop_footer_toolbar_lang_panel"
);

const desktopFooterToolbarLang = document.querySelector(
  ".desktop_footer_toolbar_lang"
);
desktopFooterToolbarLang.textContent = localStorage.getItem("lang");
desktopFooterToolbarLang.addEventListener("click", () => {
  desktopFooterToolbarLangPanel.classList.toggle("desktop_footer_panel_hidden");
});

const lang_panel_titles = document.querySelectorAll(".lang_panel_title");
lang_panel_titles.forEach((lang_panel_title) => {
  lang_panel_title.addEventListener("click", () => {
    const dataLang = lang_panel_title.getAttribute("data-lang");
    localStorage.setItem("lang", dataLang);
    desktopFooterToolbarLang.textContent = dataLang;
    desktopFooterToolbarLangPanel.classList.remove(
      "desktop_footer_panel_hidden"
    );
  });
});

//clock timer
const clock = document.querySelector(".desktop_footer_toolbar_clock");

function tick() {
  const formattedDate = new Date().toLocaleDateString("ru-RU", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
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
