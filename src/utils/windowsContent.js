import lang from "./lang.json";
const locale = lang[localStorage.getItem("lang")];

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
