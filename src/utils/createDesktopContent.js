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

export function createDesktopLabels(labels, parent) {
  let positionY = 20;

  labels.forEach((label) => {
    if (parent?.clientHeight < positionY) return;

    const desktopLabel = document.createElement("div");
    desktopLabel.className = "desktop_label";
    desktopLabel.id = label.name;
    desktopLabel.setAttribute("data-target", label.name);

    desktopLabel.style.top = `${positionY}px`;
    positionY += 100;

    const desktopLabelIcon = document.createElement("img");
    desktopLabelIcon.src = label.image;
    desktopLabelIcon.alt = label.name;
    desktopLabelIcon.draggable = false;

    const desktopLabelTitle = document.createElement("p");
    desktopLabelTitle.textContent = label.title;

    desktopLabel.appendChild(desktopLabelIcon);
    desktopLabel.appendChild(desktopLabelTitle);

    parent?.appendChild(desktopLabel);
  });
}

export function createDesktopWindows(label, parent) {
  const desktopWindow = document.createElement("article");
  desktopWindow.className = "desktop_window desktop_border_outset";
  desktopWindow.id = `window_${label.name}`;

  createWindowsHeader(label, desktopWindow);
  createWindowsBody(label, desktopWindow);

  parent?.appendChild(desktopWindow);
}

function createWindowsHeader(label, parent) {
  //window header
  const desktopWindowHeader = document.createElement("header");
  desktopWindowHeader.className = "desktop_window_header";
  desktopWindowHeader.setAttribute("data-target", label.name);

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
  windowBodyContent.id = `window_body_${label.title}`;
  desktopWindowBody.appendChild(windowBodyContent);

  parent.appendChild(desktopWindowBody);
}

export function createFooterTabs(label) {
  const desktopFooterTabs = document.querySelector(".desktop_footer_tabs");

  const footerTab = document.createElement("div");
  footerTab.className = "desktop_footer_tab desktop_border_outset";
  footerTab.id = `footer_tab_${label.name}`;
  footerTab.setAttribute("data-target", label.name);

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
