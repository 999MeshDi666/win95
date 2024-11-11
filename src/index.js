import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/folder.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";
import { moveDesktopItems } from "./utils/moveItems";

const desktopLabels = document.querySelectorAll(".desktop_label");
const desktopWindowHeaderBtns = document.querySelectorAll(
  "#desktop_window_header_btns"
);
const desktopFooterTabs = document.querySelectorAll(".desktop_footer_tab");
const desktopWindows = document.querySelectorAll(".desktop_window");

function handleOpenWindows(dataTarget) {
  const desktopWindow = document.querySelector(`#window_${dataTarget}`);
  desktopWindow.style.display = "block";
  const footerTab = document.querySelector(`#footer_tab_${dataTarget}`);
  footerTab.style.display = "flex";
  footerTab.classList.remove("desktop_border_inset");
}

function handleWindowHeaderActions(event, desktopWindowHeaderBtn) {
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
      desktopWindow.classList.toggle("desktop_window_resized");
      windowBodyContent.classList.toggle("window_body_content_resized");
      break;
    default:
      desktopWindow.style.display = "none";
      footerTab.style.display = "none";
      break;
  }
}

desktopLabels.forEach((desktopLabel) => {
  let dblTouchCounter = 0;

  const dataTarget = desktopLabel.getAttribute("data-target");
  desktopLabel.addEventListener("dblclick", () =>
    handleOpenWindows(dataTarget)
  );

  desktopLabel.addEventListener("touchend", () => {
    setTimeout(() => {
      dblTouchCounter = 0;
    }, 500);

    dblTouchCounter += 1;
    if (dblTouchCounter === 2) {
      handleOpenWindows(dataTarget);
      dblTouchCounter = 0;
    }
  });
  const handleMoveDesktopLabel = (event) => {
    moveDesktopItems(event, desktopLabel, handleMoveDesktopLabel);
  };
  const handleMoveMobileLabel = (event) => {
    moveDesktopItems(event, desktopLabel, handleMoveMobileLabel, "touchmove");
  };
  desktopLabel.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", handleMoveDesktopLabel);
  });
  desktopLabel.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", handleMoveDesktopLabel);
  });
  desktopLabel.addEventListener("touchstart", () => {
    document.addEventListener("touchmove", handleMoveMobileLabel);
  });
  desktopLabel.addEventListener("touchend", () => {
    console.log("end");
    document.removeEventListener("touchmove", handleMoveMobileLabel);
  });
});

desktopWindows.forEach((desktopWindow) => {
  const handleMoveMobileWindow = (event) => {
    moveDesktopItems(event, desktopWindow, handleMoveMobileWindow, "touchmove");
  };
  const handleMoveDesktopWindow = (event) => {
    moveDesktopItems(event, desktopWindow, handleMoveDesktopWindow);
  };
  desktopWindow.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", handleMoveDesktopWindow);
  });
  desktopWindow.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", handleMoveDesktopWindow);
  });
  desktopWindow.addEventListener("touchstart", () => {
    console.log("start");
    document.addEventListener("touchmove", handleMoveMobileWindow);
  });
  desktopWindow.addEventListener("touchend", () => {
    console.log("end");
    document.removeEventListener("touchmove", handleMoveMobileWindow);
  });
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

//clock timer
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
