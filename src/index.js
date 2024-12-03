import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/folder.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";
import {
  createDesktopLabels,
  createWinPanelLabels,
} from "./utils/desktopContent";
import lang from "./utils/lang.json";
import {
  createResumeContent,
  createMyProjectsContent,
} from "./utils/windowsContent";

const curLang = localStorage.getItem("lang");
const locale = lang[curLang || "EN"];

if (!curLang) localStorage.setItem("lang", "EN");
if (curLang === "RU") document.body.style.letterSpacing = "-1px";

const labels = [
  {
    name: "resume",
    title: locale.resume,
    path: locale.notepad,
    src: "../assets/images/note.png",
    content: () => createResumeContent(locale),
  },
  {
    name: "computer",
    title: locale.computer,
    path: locale.computer,
    src: "../assets/images/computer.png",
    content: createMyProjectsContent,
  },
];
const desktopContent = document.querySelector(".desktop_content");
createDesktopLabels(desktopContent, labels);
createWinPanelLabels(desktopContent, labels);

// open footer win panel
const desktopFooterBtn = document.querySelector(".desktop_footer_btn");

const desktopFooterPanel = document.querySelector(".desktop_footer_panel");
desktopFooterBtn.addEventListener("click", () => {
  desktopFooterPanel.classList.toggle("desktop_footer_panel_hidden");
});

// open footer lang panel
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

// choose lang option
const lang_panel_titles = document.querySelectorAll(".lang_panel_title");
lang_panel_titles.forEach((lang_panel_title) => {
  lang_panel_title.addEventListener("click", () => {
    const dataLang = lang_panel_title.getAttribute("data-lang");
    localStorage.setItem("lang", dataLang);
    desktopFooterToolbarLang.textContent = dataLang;
    desktopFooterToolbarLangPanel.classList.remove(
      "desktop_footer_panel_hidden"
    );
    location.reload();
  });
});

//clock timer
const clock = document.querySelector(".desktop_footer_toolbar_clock");

function tick() {
  const isRuLocale = curLang === "RU";
  const formattedDate = new Date().toLocaleDateString(
    isRuLocale ? "ru-RU" : "en-EN",
    {
      hour: "numeric",
      minute: "numeric",
      hour12: !isRuLocale,
    }
  );
  const currentTime = formattedDate.substring(
    formattedDate.indexOf(",") + 1,
    formattedDate.length[-1]
  );

  clock.textContent = currentTime;
  console.log(currentTime);
  setInterval(tick, 60000);
}
tick();
