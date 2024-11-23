//resume content
export function createResumeContent() {
  const resumeContent = document.createElement("div");
  resumeContent.className = "resume_content";

  createResumeContentHeader(resumeContent);
  createResumeContentBody(resumeContent);
  return resumeContent;
}

function createResumeContentHeader(parent) {
  //resume content header
  const resumeContentHeader = document.createElement("div");
  resumeContentHeader.className = "resume_content_header";
  const contentHeaderDivider1 = document.createElement("p");
  contentHeaderDivider1.textContent =
    "----------------------------------------------------------------------";
  resumeContentHeader.appendChild(contentHeaderDivider1);

  const contentHeaderTitle = document.createElement("h1");
  contentHeaderTitle.textContent = "Hi, my name is Yegeubekov Madi!";
  resumeContentHeader.appendChild(contentHeaderTitle);

  const contentHeaderSubtitle = document.createElement("h2");
  contentHeaderSubtitle.textContent =
    "This resume for someone who is interested in works. Let's keep in touch!";
  resumeContentHeader.appendChild(contentHeaderSubtitle);

  const contentHeaderDivider2 = document.createElement("p");
  contentHeaderDivider2.textContent =
    "----------------------------------------------------------------------";
  resumeContentHeader.appendChild(contentHeaderDivider2);

  parent.appendChild(resumeContentHeader);
}

function createResumeContentBody(parent) {
  //resume content body
  const resumeContentBody = document.createElement("div");

  const contentBodyObj = document.createElement("p");
  contentBodyObj.textContent =
    "Developer with experience in creating and implementing user-oriented applications.";
  resumeContentBody.appendChild(contentBodyObj);

  //education section
  const educationSection = createResumeSectionContent(
    "----------",
    "----------",
    "EDUCATION:",
    ["EDUCATION1", "EDUCATION2"]
  );
  resumeContentBody.appendChild(educationSection);

  //skills
  const skillsSection = createResumeSectionContent(
    "-------",
    "-------",
    "SKILLS:",
    ["skills1", "skills2"]
  );
  resumeContentBody.appendChild(skillsSection);

  //experience
  const experienceSection = document.createElement("div");
  createResumeHeadlineContent(
    "-----------",
    "-----------",
    "EXPERIENCE:",
    experienceSection
  );
  [
    {
      title1: "title1",
      title2: "title2",
      list: ["point1", "point2", "point3"],
    },
    {
      title1: "title1",
      title2: "title2",
      list: ["point1", "point2", "point3"],
    },
    {
      title1: "title1",
      title2: "title2",
      list: ["point1", "point2", "point3"],
    },
  ].forEach((e) => {
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
