import "../assets/images/folder.png";
import lang from "./lang.json";

const locale = lang[localStorage.getItem("lang")];
const projects = [
  {
    src: "../assets/images/folder.png",
    href: "https://flexbox-cosmo-adventure-nwyragrcr-999meshdi666.vercel.app/",
    title: "Flexbox cosmo adventure",
  },
  {
    src: "../assets/images/folder.png",
    href: "https://github.com/999MeshDi666/green_food_flutter",
    title: "Green food",
  },
];

//resume content
export function createResumeContent() {
  const resumeContent = document.createElement("div");
  resumeContent.className = "resume_content";

  createResumeContentHeader(resumeContent);
  createResumeContentBody(resumeContent);
  return resumeContent;
}

function createResumeContentHeader(parent) {
  const headerLocales = locale.resume_windows_header;
  //resume content header
  const resumeContentHeader = document.createElement("div");
  resumeContentHeader.className = "resume_content_header";
  const contentHeaderDivider1 = document.createElement("p");
  contentHeaderDivider1.textContent =
    "----------------------------------------------------------------------";
  resumeContentHeader.appendChild(contentHeaderDivider1);

  const contentHeaderTitle = document.createElement("h1");
  contentHeaderTitle.textContent = headerLocales.greeting;
  resumeContentHeader.appendChild(contentHeaderTitle);

  const contentHeaderSubtitle = document.createElement("h2");
  contentHeaderSubtitle.textContent = headerLocales.intro;
  resumeContentHeader.appendChild(contentHeaderSubtitle);

  const contentHeaderDivider2 = document.createElement("p");
  contentHeaderDivider2.textContent =
    "----------------------------------------------------------------------";
  resumeContentHeader.appendChild(contentHeaderDivider2);

  parent.appendChild(resumeContentHeader);
}

function createResumeContentBody(parent) {
  const bodyLocales = locale.resume_windows_body;
  //resume content body
  const resumeContentBody = document.createElement("div");

  const contentBodyObj = document.createElement("p");
  contentBodyObj.textContent = bodyLocales.objective1;
  resumeContentBody.appendChild(contentBodyObj);

  //education section
  const educationSection = createResumeSectionContent(
    "----------",
    "----------",
    bodyLocales.education,
    bodyLocales.education_texts
  );
  resumeContentBody.appendChild(educationSection);

  //skills
  const skillsSection = createResumeSectionContent(
    "-------",
    "-------",
    bodyLocales.skills,
    bodyLocales.skill_list
  );
  resumeContentBody.appendChild(skillsSection);

  //experience
  const experienceSection = document.createElement("div");
  createResumeHeadlineContent(
    "-----------",
    "-----------",
    bodyLocales.experience,
    experienceSection
  );
  bodyLocales.experience_list.forEach((e) => {
    const list = createResumeSectionContent(
      e.title1,
      e.title2,
      undefined,
      e.list
    );
    experienceSection.appendChild(list);
  });

  resumeContentBody.appendChild(experienceSection);

  parent.appendChild(resumeContentBody);
}

function createResumeSectionContent(title1, title2, headline, list) {
  const contentSection = document.createElement("div");
  createResumeHeadlineContent(title1, title2, headline, contentSection);

  const sectionList = createResumeListContent(list);
  contentSection.appendChild(sectionList);
  return contentSection;
}

function createResumeHeadlineContent(title1, title2, headline, contentSection) {
  const sectionTitle1 = document.createElement("p");
  sectionTitle1.textContent = title1;
  contentSection.appendChild(sectionTitle1);

  if (headline) {
    const sectionHeadline = document.createElement("h3");
    sectionHeadline.textContent = headline;
    contentSection.appendChild(sectionHeadline);
  }

  const sectionTitle2 = document.createElement("p");
  sectionTitle2.textContent = title2;
  contentSection.appendChild(sectionTitle2);
}

function createResumeListContent(list) {
  const listContent = document.createElement("ul");
  list.forEach((text) => {
    const bulletPoint = document.createElement("li");
    bulletPoint.textContent = text;
    listContent.appendChild(bulletPoint);
  });
  return listContent;
}

//my project content
export function createMyProjectsContent() {
  const myProjectContent = document.createElement("div");
  myProjectContent.className = "my_projects_content";
  let leftPosition = 0;

  projects.forEach((project) => {
    const myProjectLabel = createMyProjectLabel(project);
    myProjectLabel.style.left = `${leftPosition}px`;
    leftPosition += 140;
    myProjectContent.appendChild(myProjectLabel);
  });
  return myProjectContent;
}

function createMyProjectLabel(project) {
  const desktopLabel = document.createElement("div");
  desktopLabel.className = "desktop_label";

  //desktop label icons
  const desktopIcon = document.createElement("img");
  desktopIcon.src = project.src;
  desktopIcon.alt = project.title;
  desktopLabel.appendChild(desktopIcon);

  //desktop label link
  const desktopAnchor = document.createElement("a");
  desktopAnchor.href = project.href;
  desktopAnchor.target = "_blank";
  desktopAnchor.textContent = project.title;
  desktopAnchor.style.display = "block";
  desktopLabel.appendChild(desktopAnchor);

  return desktopLabel;
}
