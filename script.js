const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const year = document.querySelector("#current-year");
const languageToggle = document.querySelector(".language-toggle");

const translations = window.siteContent;

let currentLanguage = "en";

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function setHtml(selector, html) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = html;
  }
}

function setParagraphs(selector, paragraphs) {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  const paragraphList = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  element.replaceChildren(
    ...paragraphList.map((paragraph) => {
      const paragraphElement = document.createElement("p");
      paragraphElement.textContent = paragraph;
      return paragraphElement;
    })
  );
}

function setParagraphGroup(element, paragraphs) {
  if (!element) {
    return;
  }

  const paragraphList = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  element.replaceChildren(
    ...paragraphList.map((paragraph) => {
      const paragraphElement = document.createElement("p");
      paragraphElement.textContent = paragraph;
      return paragraphElement;
    })
  );
}

function setList(element, items) {
  if (!element) {
    return;
  }

  element.replaceChildren(
    ...items.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    })
  );
}

function setActionLinks(element, project) {
  if (!element) {
    return;
  }

  const links = project.links ?? [
    {
      label: project.link,
      href: element.querySelector("a")?.href ?? "#",
    },
  ];

  element.replaceChildren(
    ...links.map((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = link.label;
      return anchor;
    })
  );
}

function applyLanguage(language) {
  const copy = translations[language];
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = copy.pageTitle;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", copy.metaDescription);
  document.querySelector(".brand")?.setAttribute("aria-label", copy.brandAria);
  nav?.setAttribute("aria-label", copy.navAria);
  navToggle.querySelector(".sr-only").textContent = copy.navToggle;
  languageToggle.textContent = copy.languageToggle;
  languageToggle.setAttribute("aria-label", copy.languageAria);
  languageToggle.setAttribute("aria-pressed", String(language === "zh"));

  document.querySelectorAll(".site-nav a").forEach((link, index) => {
    link.textContent = copy.nav[index];
  });

  setText(".hero .eyebrow", copy.heroEyebrow);
  setText("#hero-title", copy.heroTitle);
  setHtml(".hero-lede", copy.heroLede);
  document.querySelectorAll(".hero-actions a").forEach((link, index) => {
    link.textContent = copy.heroButtons[index];
  });
  document.querySelector(".hero-panel")?.setAttribute("aria-label", copy.heroPanelAria);
  setText(".panel-label", copy.panelLabel);
  document.querySelectorAll(".hero-panel li").forEach((item, index) => {
    item.textContent = copy.focusItems[index];
  });

  setText(".intro .section-kicker", copy.aboutKicker);
  setText(".intro h2", copy.aboutTitle);
  setParagraphs(".intro-copy", copy.aboutText);

  setText(".work-section .section-kicker", copy.workKicker);
  setText("#work-title", copy.workTitle);
  setText(".work-section .section-heading p", copy.workIntro);
  setText(".guide-label", copy.guideLabel);
  setText(".portfolio-guide h3", copy.guideTitle);
  setText(".portfolio-guide p", copy.guideText);
  setText(".guide-link", copy.guideLink);

  document.querySelectorAll(".project-card").forEach((card, index) => {
    const project = copy.projects[index];
    card.querySelectorAll(".card-meta span").forEach((meta, metaIndex) => {
      meta.textContent = project.meta[metaIndex];
    });
    card.querySelector("h3").textContent = project.title;
    setParagraphGroup(card.querySelector(".project-copy"), project.details ?? project.text);
    const pointsHeading = card.querySelector(".points-heading");
    const pointsList = card.querySelector(".project-points");
    const hasPoints = Boolean(project.points?.length);
    pointsHeading.textContent = project.pointsTitle ?? "Highlights";
    pointsHeading.hidden = !hasPoints;
    pointsList.hidden = !hasPoints;
    setList(pointsList, project.points ?? []);
    setActionLinks(card.querySelector(".card-actions"), project);
  });

  setText(".timeline-section .section-kicker", copy.experienceKicker);
  setText("#experience-title", copy.experienceTitle);
  setText(".timeline-section .section-heading p", copy.experienceIntro);
  document.querySelectorAll(".timeline-item").forEach((item, index) => {
    const experience = copy.experiences[index];
    item.querySelector(".timeline-date").textContent = experience.date;
    item.querySelector("h3").textContent = experience.title;
    const content = item.querySelector(".timeline-content") ?? item.querySelector("h3").parentElement;
    content.classList.add("timeline-content");
    Array.from(content.children).forEach((child) => {
      if (child.tagName === "P" && !child.classList.contains("timeline-company")) {
        child.remove();
      }
    });
    let company = content.querySelector(".timeline-company");
    if (!company) {
      company = document.createElement("p");
      company.className = "timeline-company";
      content.querySelector("h3").after(company);
    }
    company.textContent = experience.company ?? "";

    let copyGroup = content.querySelector(".timeline-copy");
    if (!copyGroup) {
      copyGroup = document.createElement("div");
      copyGroup.className = "timeline-copy";
      company.after(copyGroup);
    }
    setParagraphGroup(copyGroup, experience.paragraphs);

    let pointsHeading = content.querySelector(".points-heading");
    let pointsList = content.querySelector(".experience-points");
    if (!pointsHeading) {
      pointsHeading = document.createElement("div");
      pointsHeading.className = "points-heading";
      copyGroup.after(pointsHeading);
    }
    if (!pointsList) {
      pointsList = document.createElement("ul");
      pointsList.className = "experience-points";
      pointsHeading.after(pointsList);
    }
    pointsHeading.textContent = experience.pointsTitle ?? "";
    pointsHeading.hidden = !experience.points?.length;
    pointsList.hidden = !experience.points?.length;
    setList(pointsList, experience.points ?? []);
  });

  setText(".education-block .section-kicker", copy.educationKicker);
  setText(".education-block h2", copy.educationTitle);
  document.querySelectorAll(".education-list article").forEach((item, index) => {
    const education = copy.education[index];
    item.querySelector("h3").textContent = education.school;
    item.querySelector("p").textContent = education.degree;
  });

  setText(".skills-block .section-kicker", copy.toolkitKicker);
  setText("#skills-title", copy.skillsTitle);
  document.querySelectorAll(".skill-groups article").forEach((item, index) => {
    const skillGroup = copy.skillGroups[index];
    item.querySelector("h3").textContent = skillGroup.title;
    item.querySelector("p").textContent = skillGroup.text;
  });

  setText(".contact-section .section-kicker", copy.contactKicker);
  setText("#contact-title", copy.contactTitle);
  setText(".footer-name", copy.footerName);
  setText(".footer-built", copy.footerBuilt);
}

function syncHeader() {
  header.dataset.elevated = window.scrollY > 18 ? "true" : "false";
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "zh" : "en");
});

window.addEventListener("scroll", syncHeader, { passive: true });
year.textContent = new Date().getFullYear();
applyLanguage("en");
syncHeader();
