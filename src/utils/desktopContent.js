import "../assets/images/note.png";
import "../assets/images/computer.png";
import { moveDesktopItems } from "./moveItems";

const networkLinks = [
  {
    title: "Github",
    href: "https://github.com/999MeshDi666",
  },
  {
    title: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=77076627568",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/madi-yegeubekov-060479248/",
  },
  {
    title: "Gmail",
    href: "mailto:havkpzz@gmail.com",
  },
];
const headerBtnActions = ["collapse", "resize", "close"];

export function createDesktopLabels(parent, labels) {
  let positionY = 20;

  labels.forEach((label) => {
    let dblTap = false;
    let desktopEventType = "";

    const desktopLabel = createDesktopLabel(label);
    desktopLabel.style.top = `${positionY}px`;
    positionY += 100;

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

    //open window events
    desktopLabel.addEventListener("dblclick", () => {
      handleOpenWindows(label, parent);
    });
    desktopLabel.addEventListener("touchend", () => {
      if (!dblTap) {
        dblTap = true;
        setTimeout(() => (dblTap = false), 500);
        return false;
      }
      handleOpenWindows(label, parent);
    });

    //move label events
    desktopLabel.addEventListener("mousedown", () =>
      handleOnMoveStart("mousemove")
    );
    desktopLabel.addEventListener("mouseup", () =>
      handleOnMoveEnd("mousemove")
    );
    desktopLabel.addEventListener("touchstart", () =>
      handleOnMoveStart("touchmove")
    );
    desktopLabel.addEventListener("touchend", () =>
      handleOnMoveEnd("touchmove")
    );

    parent?.appendChild(desktopLabel);
  });
}

function createDesktopLabel(label) {
  const desktopLabel = document.createElement("div");
  desktopLabel.className = "desktop_label";
  desktopLabel.id = label.name;
  desktopLabel.setAttribute("data-target", label.name);

  const desktopLabelIcon = document.createElement("img");
  desktopLabelIcon.src = label.src;
  desktopLabelIcon.alt = label.name;
  desktopLabelIcon.draggable = false;
  desktopLabel.appendChild(desktopLabelIcon);

  const desktopLabelTitle = document.createElement("p");
  desktopLabelTitle.textContent = label.title;
  desktopLabel.appendChild(desktopLabelTitle);

  return desktopLabel;
}

function createDesktopWindow(label, parent) {
  const desktopWindow = document.createElement("article");
  desktopWindow.className = "desktop_window desktop_border_outset";
  desktopWindow.id = `window_${label.name}`;

  createWindowsHeader(label, desktopWindow);
  createWindowsBody(label, desktopWindow);

  parent?.appendChild(desktopWindow);
}

function createWindowsHeader(label, parent) {
  //window header
  let offsetX = 0;
  let offsetY = 0;
  let desktopEventType = "";
  const desktopWindowHeader = document.createElement("header");
  desktopWindowHeader.className = "desktop_window_header";
  desktopWindowHeader.setAttribute("data-target", label.name);

  const handleMoveDesktopWindow = (event) => {
    moveDesktopItems(
      event,
      parent,
      handleMoveDesktopWindow,
      offsetX,
      offsetY,
      desktopEventType
    );
  };
  const handleOnMoveStart = (event, eventType = "mousemove") => {
    const { clientX, clientY } =
      eventType === "mousemove" ? event : event.touches[0];

    offsetX = clientX - parent.offsetLeft;
    offsetY = clientY - parent.offsetTop;
    desktopEventType = eventType;
    parent.style.zIndex = 2;

    document.addEventListener(eventType, handleMoveDesktopWindow);
  };
  const handleOnMoveEnd = (eventType = "mousemove") => {
    document.removeEventListener(eventType, handleMoveDesktopWindow);
    parent.style.zIndex = 0;
  };

  //move window events
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

  //window header path
  const windowHeaderPath = document.createElement("div");
  const headerPathImg = document.createElement("img");
  headerPathImg.src = label.src;
  headerPathImg.alt = label.name;
  headerPathImg.className = "desktop_window_header_icon";
  windowHeaderPath.appendChild(headerPathImg);

  const headerPathTitle = document.createElement("p");
  headerPathTitle.textContent = label.path;
  headerPathTitle.className = "desktop_window_header_title";
  windowHeaderPath.appendChild(headerPathTitle);
  desktopWindowHeader.appendChild(windowHeaderPath);

  //window header btns
  const windowHeaderBtns = document.createElement("div");
  windowHeaderBtns.id = "desktop_window_header_btns";
  windowHeaderBtns.setAttribute("data-target", label.name);

  //window header btn events
  headerBtnActions.forEach((action) => {
    const btn = document.createElement("button");
    btn.className = "desktop_window_header_btn desktop_button";
    btn.setAttribute("data-action", action);
    if (action === "close") {
      const BtnCloseIcon = document.createElement("i");
      BtnCloseIcon.className = "ico-times";
      BtnCloseIcon.role = "img";
      BtnCloseIcon.ariaLabel = action;
      btn.appendChild(BtnCloseIcon);
    }
    btn.addEventListener("click", () => {
      const footerTab = document.querySelector(`#footer_tab_${label.name}`);
      const windowBodyContent = document.querySelector(
        `window_body_${label.name}`
      );
      switch (action) {
        case "collapse":
          parent.style.display = "none";
          footerTab?.classList.toggle("desktop_border_inset");
          break;
        case "resize":
          const isResized = parent.classList.contains("desktop_window_resized");
          if (isResized) {
            parent.style.top = 0;
            parent.style.left = 0;
          }
          parent.classList.toggle("desktop_window_resized");
          windowBodyContent?.classList.toggle("window_body_content_resized");
          break;
        default:
          parent.remove();
          footerTab?.remove();
          break;
      }
    });
    windowHeaderBtns.appendChild(btn);
  });

  desktopWindowHeader.appendChild(windowHeaderBtns);
  parent.appendChild(desktopWindowHeader);
}

function createWindowsBody(label, parent) {
  //window body
  const desktopWindowBody = document.createElement("section");
  desktopWindowBody.className = "desktop_window_body";

  //window body nav
  const windowBodyNav = document.createElement("nav");
  windowBodyNav.className = "desktop_window_body_header";

  networkLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.className = "desktop_window_body_header_link";
    anchor.textContent = link.title;
    windowBodyNav.appendChild(anchor);
  });

  desktopWindowBody.appendChild(windowBodyNav);

  //window body content
  const windowBodyContent = document.createElement("div");
  windowBodyContent.className = "window_body_content desktop_border_inset";
  windowBodyContent.id = `window_body_${label.name}`;

  windowBodyContent.appendChild(label.content());
  desktopWindowBody.appendChild(windowBodyContent);

  parent.appendChild(desktopWindowBody);
}

function createFooterTabs(label) {
  const desktopFooterTabs = document.querySelector(".desktop_footer_tabs");

  const footerTab = document.createElement("div");
  footerTab.className = "desktop_footer_tab desktop_border_outset";
  footerTab.id = `footer_tab_${label.name}`;
  footerTab.setAttribute("data-target", label.name);

  //footer tab collapse window event
  footerTab.addEventListener("click", () => {
    handleCollapseWindow(footerTab, label);
  });

  const footerTabImage = document.createElement("img");
  footerTabImage.src = label.src;
  footerTabImage.alt = `tab_${label.name}`;
  footerTabImage.className = "desktop_footer_tab_img";
  footerTab.appendChild(footerTabImage);

  const footerTabTitle = document.createElement("p");
  footerTabTitle.className = "desktop_footer_tab_title";
  footerTabTitle.textContent = label.title;
  footerTab.appendChild(footerTabTitle);

  desktopFooterTabs.appendChild(footerTab);
}

export function createWinPanelLabels(desktopContent, labels) {
  const winPanelContent = document.querySelector(
    ".desktop_footer_panel_content"
  );

  labels.forEach((label) => {
    const panelLabel = document.createElement("div");
    panelLabel.className = "desktop_footer_panel_content_label";
    panelLabel.setAttribute("data-target", label.name);

    const panelLabelIcon = document.createElement("img");
    panelLabelIcon.src = label.src;
    panelLabelIcon.alt = label.name;
    panelLabel.appendChild(panelLabelIcon);

    const panelLabelTitle = document.createElement("p");
    panelLabelTitle.textContent = label.title;
    panelLabel.appendChild(panelLabelTitle);

    panelLabel.addEventListener("click", () => {
      handleOpenWindows(label, desktopContent);
    });

    winPanelContent.appendChild(panelLabel);
  });
}

function handleOpenWindows(label, parent) {
  const footerTab = document.querySelector(`#footer_tab_${label.name}`);
  if (footerTab) {
    handleCollapseWindow(footerTab, label);
    return;
  }
  createDesktopWindow(label, parent);
  createFooterTabs(label);
}

function handleCollapseWindow(footerTab, label) {
  const desktopWindow = document.querySelector(`#window_${label.name}`);
  footerTab.classList.toggle("desktop_border_inset");
  const shouldCollapseWindow = footerTab.classList.contains(
    "desktop_border_inset"
  );
  desktopWindow.style.display = shouldCollapseWindow ? "none" : "block";
}
