import "./styles/main.css";
import "./assets/images/note.png";
import "./assets/images/folder.png";
import "./assets/images/computer.png";
import "./assets/images/disc.png";

const desktopLabels = document.querySelectorAll(".desktop_label");

desktopLabels.forEach((desktopLabel) => {
  desktopLabel.addEventListener("dblclick", (event) => {
    const dataTarget = desktopLabel.getAttribute("data-target");

    const desktopWindow = document.querySelector(`#window_${dataTarget}`);
    desktopWindow.style.display = "block";

    const footerTab = document.querySelector(`#footer_tab_${dataTarget}`);
    footerTab.style.display = "flex";
    footerTab.classList.remove("desktop_border_inset");
  });
});

const desktopWindowHeaderBtns = document.querySelectorAll(
  "#desktop_window_header_btns"
);
desktopWindowHeaderBtns.forEach((desktopWindowHeaderBtn) => {
  desktopWindowHeaderBtn.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    const dataTarget = desktopWindowHeaderBtn.getAttribute("data-target");
    const desktopWindow = document.querySelector(`#window_${dataTarget}`);
    const windowBodyContent = document.querySelector(
      `#window_body_${dataTarget}`
    );
    const footerTab = document.querySelector(`#footer_tab_${dataTarget}`);

    if (!button || !desktopWindowHeaderBtn.contains(button)) return;
    const dataAction = button.getAttribute("data-action");

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
  });
});

const desktopFooterTabs = document.querySelectorAll(".desktop_footer_tab");
desktopFooterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const dataTarget = tab.getAttribute("data-target");
    const shouldCollapseWindow = tab.classList.contains("desktop_border_inset");
    tab.classList.toggle("desktop_border_inset");

    const desktopWindow = document.querySelector(`#window_${dataTarget}`);
    desktopWindow.style.display = shouldCollapseWindow ? "block" : "none";
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
