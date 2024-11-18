import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/folder.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";
import { moveDesktopItems } from "./utils/moveItems";

localStorage.setItem("lang", "RU");

const desktopLabels = document.querySelectorAll(".desktop_label");
const desktopWindowHeaderBtns = document.querySelectorAll(
  "#desktop_window_header_btns"
);
const desktopFooterTabs = document.querySelectorAll(".desktop_footer_tab");
const desktopWindowHeaders = document.querySelectorAll(
  ".desktop_window_header"
);

function handleOpenWindows(dataTarget) {
  const desktopWindow = document.querySelector(`#window_${dataTarget}`);
  desktopWindow.style.display = "block";
  const footerTab = document.querySelector(`#footer_tab_${dataTarget}`);
  footerTab.style.display = "flex";
  footerTab.classList.remove("desktop_border_inset");
}

function handleWindowHeaderActions(event, desktopWindowHeaderBtn) {
  event.stopPropagation();
  const button = event.target.closest("button");
  if (!button || !desktopWindowHeaderBtn.contains(button)) return;
  const dataAction = button.getAttribute("data-action");
  const dataTarget = desktopWindowHeaderBtn.getAttribute("data-target");

  const desktopWindow = document.querySelector(`#window_${dataTarget}`);
  const windowBodyContent = document.querySelector(
    `#window_body_${dataTarget}`
  );
  const footerTab = document.querySelector(`#footer_tab_${dataTarget}`);

  switch (dataAction) {
    case "collapse":
      desktopWindow.style.display = "none";
      footerTab.classList.toggle("desktop_border_inset");
      break;
    case "resize":
      if (desktopWindow.classList.contains("desktop_window_resized")) {
        desktopWindow.style.top = 0;
        desktopWindow.style.left = 0;
      }
      desktopWindow.classList.toggle("desktop_window_resized");
      windowBodyContent.classList.toggle("window_body_content_resized");
      break;
    default:
      desktopWindow.style.top = 0;
      desktopWindow.style.left = 0;
      desktopWindow.style.display = "none";
      footerTab.style.display = "none";
      desktopWindow.classList.remove("desktop_window_resized");
      windowBodyContent.classList.remove("window_body_content_resized");
      break;
  }
}

desktopLabels.forEach((desktopLabel) => {
  let dblTap = false;
  const dataTarget = desktopLabel.getAttribute("data-target");
  let desktopEventType = "";

  if (dataTarget) {
    const handleMoveDesktopLabel = (event) => {
      moveDesktopItems(
        event,
        desktopLabel,
        handleMoveDesktopLabel,
        50,
        25,
        desktopEventType
      );
    };

    const handleOnMoveStart = (eventType = "mousemove") => {
      desktopEventType = eventType;
      desktopLabel.style.zIndex = 2;

      document.addEventListener(eventType, handleMoveDesktopLabel);
    };
    const handleOnMoveEnd = (eventType = "mousemove") => {
      document.removeEventListener(eventType, handleMoveDesktopLabel);
      desktopLabel.style.zIndex = 0;
    };

    desktopLabel.addEventListener("dblclick", () =>
      handleOpenWindows(dataTarget)
    );

    desktopLabel.addEventListener("touchend", () => {
      if (!dblTap) {
        dblTap = true;
        setTimeout(() => (dblTap = false), 500);
        return false;
      }
      handleOpenWindows(dataTarget);
    });

    desktopLabel.addEventListener("mousedown", () =>
      handleOnMoveStart("mousemove")
    );
    desktopLabel.addEventListener("mouseup", () =>
      handleOnMoveEnd("mousemove")
    );
    desktopLabel.addEventListener("touchstart", (event) =>
      handleOnMoveStart("touchmove")
    );
    desktopLabel.addEventListener("touchend", () =>
      handleOnMoveEnd("touchmove")
    );
  }
});

desktopWindowHeaders.forEach((desktopWindowHeader) => {
  const dataTarget = desktopWindowHeader.getAttribute("data-target");
  const desktopWindow = document.querySelector(`#window_${dataTarget}`);
  let offsetX = 0;
  let offsetY = 0;
  let desktopEventType = "";

  const handleMoveDesktopWindow = (event) => {
    moveDesktopItems(
      event,
      desktopWindow,
      handleMoveDesktopWindow,
      offsetX,
      offsetY,
      desktopEventType
    );
  };

  const handleOnMoveStart = (event, eventType = "mousemove") => {
    const { clientX, clientY } =
      eventType === "mousemove" ? event : event.touches[0];

    offsetX = clientX - desktopWindow.offsetLeft;
    offsetY = clientY - desktopWindow.offsetTop;
    desktopEventType = eventType;
    desktopWindow.style.zIndex = 2;

    document.addEventListener(eventType, handleMoveDesktopWindow);
  };
  const handleOnMoveEnd = (eventType = "mousemove") => {
    document.removeEventListener(eventType, handleMoveDesktopWindow);
    desktopWindow.style.zIndex = 0;
  };
  desktopWindowHeader.addEventListener("mousedown", (event) =>
    handleOnMoveStart(event)
  );
  desktopWindowHeader.addEventListener("mouseup", () =>
    handleOnMoveEnd("mousemove")
  );
  desktopWindowHeader.addEventListener("touchstart", (event) =>
    handleOnMoveStart(event, "touchmove")
  );
  desktopWindowHeader.addEventListener("touchend", () =>
    handleOnMoveEnd("touchmove")
  );
});

desktopWindowHeaderBtns.forEach((desktopWindowHeaderBtn) => {
  desktopWindowHeaderBtn.addEventListener("click", (event) =>
    handleWindowHeaderActions(event, desktopWindowHeaderBtn)
  );
});

desktopFooterTabs.forEach((tab) => {
  const dataTarget = tab.getAttribute("data-target");
  const desktopWindow = document.querySelector(`#window_${dataTarget}`);

  tab.addEventListener("click", () => {
    tab.classList.toggle("desktop_border_inset");
    const shouldCollapseWindow = tab.classList.contains("desktop_border_inset");
    desktopWindow.style.display = shouldCollapseWindow ? "none" : "block";
  });
});

const desktopFooterBtn = document.querySelector(".desktop_footer_btn");
const desktopFooterPanel = document.querySelector(".desktop_footer_panel");
desktopFooterBtn.addEventListener("click", () => {
  desktopFooterPanel.classList.toggle("desktop_footer_panel_hidden");
});

const desktopFooterPanelContentLabels = document.querySelectorAll(
  ".desktop_footer_panel_content_label"
);
desktopFooterPanelContentLabels.forEach((desktopFooterPanelContentLabel) => {
  const dataTarget = desktopFooterPanelContentLabel.getAttribute("data-target");
  desktopFooterPanelContentLabel.addEventListener("click", () => {
    handleOpenWindows(dataTarget);
  });
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
