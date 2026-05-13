window.siteContent = {
  en: {
    pageTitle: "Xinyue Chen | Technical Writer",
    metaDescription:
      "Xinyue Chen's portfolio website, featuring technical writing, localization, DITA, Markdown, and documentation QA projects.",
    brandAria: "Back to home",
    navAria: "Primary navigation",
    navToggle: "Open navigation",
    languageToggle: "中文",
    languageAria: "Switch to Chinese",
    nav: ["Work", "Experience", "Skills", "Contact"],
    heroEyebrow: "Technical Writing · Localization · Documentation QA",
    heroTitle: "Xinyue Chen",
    heroLede:
      "Recent MA Translation and Localisation graduate focusing on <strong>Technical Writer</strong> roles. I create and analyze documentation samples that combine clear English writing, structured information, and localization-aware workflows.",
    heroButtons: ["View Portfolio", "Contact Me"],
    heroPanelAria: "Core strengths summary",
    panelLabel: "Focus",
    focusItems: [
      "Markdown / DITA workflows",
      "Localization-ready source files",
      "Chinese-to-English manual revision",
      "Task-oriented technical writing",
    ],
    aboutKicker: "About Me",
    aboutTitle:
      "Turning product logic, user flows, and language details into clear, usable documentation.",
    aboutText: [
      "My academic background is in translation and localisation, and my current focus is technical writing. I am especially interested in documentation for complex products.",
      "Before moving toward technical writing, I worked on game system design and branding. These experiences shaped how I think about user flows, information structure, and the need to turn complex product logic into clear, usable content.",
    ],
    workKicker: "Selected Work",
    workTitle: "Portfolio Projects",
    workIntro:
      "These three projects share one portfolio README. Please read it first for project context, file structure, and the recommended reading order.",
    guideLabel: "Start Here",
    guideTitle: "Read the portfolio README first",
    guideText:
      "The README explains the overall positioning, repository structure, and suggested path through the three projects.",
    guideLink: "Open README",
    projects: [
      {
        meta: ["Self-directed documentation project", "DITA-based guide, PDF and HTML output"],
        title: "PLA Edge Lifting Troubleshooting Guide",
        details: [
          "Tools: Oxygen XML Author, VS Code",
          "A troubleshooting guide for FDM 3D printer users, structured in DITA and covering scope, quick checks, symptom diagnosis, step-by-step fixes, escalation, and PDF / HTML output.",
          "This project is an English troubleshooting guide for beginner-to-intermediate FDM printer users who experience edge lifting or minor warping when printing PLA.",
          "The guide uses a structured troubleshooting flow, including scope criteria, a quick checklist, symptom-based navigation, step-by-step fixes, escalation paths, concept explanation, and key terms.",
        ],
        pointsTitle: "What this project shows",
        points: [
          "Writing user-oriented troubleshooting documentation",
          "Defining when a guide applies and when it does not",
          "Organizing symptoms, causes, actions, and result checks",
          "Using DITA topics and a ditamap to structure content",
          "Generating PDF and HTML outputs",
          "Preparing visual aids with AI assistance and reviewing them for instructional clarity",
        ],
        links: [
          {
            label: "View HTML",
            href: "https://whyamistilleatin.github.io/technical-writing-localization-portfolio/01_PLA_Edge_Lifting_Troubleshooting/html_output/index.html",
          },
          {
            label: "View PDF",
            href: "https://whyamistilleatin.github.io/technical-writing-localization-portfolio/01_PLA_Edge_Lifting_Troubleshooting/PLA_Edge_Lifting_Troubleshooting.pdf",
          },
        ],
      },
      {
        meta: ["Self-directed process guide", "Chinese · PDF guide"],
        title: "Markdown Pre-translation Processing Guide",
        details: [
          "Informed by localization workflow practice",
          "This process guide explains basic pre-translation processing for Markdown technical documentation before import into a CAT tool. It uses generalized examples only and does not include client or confidential project content.",
          "The guide focuses on structure-sensitive content such as placeholders, variables, links, file paths, commands, code blocks, and formatting issues. It also explains how regular expressions (Regex) can support controlled search and risk identification without replacing human review.",
        ],
        pointsTitle: "What this project shows",
        points: [
          "Writing structured process documentation",
          "Identifying Markdown content that should be preserved or reviewed",
          "Using Regex-assisted checks for risk identification",
          "Thinking about source-file safety and reversibility",
          "Connecting localization practice with technical documentation review",
        ],
        link: "View Work",
      },
      {
        meta: ["Coursework-based case study", "Chinese source excerpt localized into English"],
        title: "Bear Hand Mixer User Manual Localization Case Study",
        details: [
          "Format: PDF case study",
          "This sample is based on MA coursework and is included as a localization and technical communication revision case study.",
          "The project analyzes how a Chinese appliance manual excerpt can be revised into clearer English user instructions. It focuses on task-oriented wording, terminology simplification, formatting decisions, and safety-warning clarity.",
        ],
        pointsTitle: "What this project shows",
        points: [
          "Chinese-to-English user manual localization",
          "Revising source text beyond direct translation",
          "Explaining before/after revision decisions",
          "Improving task-oriented user instructions",
          "Applying localization training to user-facing technical content",
        ],
        link: "View Work",
      },
    ],
    experienceKicker: "Experience",
    experienceTitle: "Experience",
    experienceIntro:
      "Across localization, system design, and content operations, my work has centered on shaping complex information for different audiences.",
    experiences: [
      {
        date: "Jan 2026 - Feb 2026",
        title: "Localization Intern",
        company: "Grouphorse Translations",
        paragraphs: [
          "During my localization internship, I supported technical content localization tasks for outbound smart hardware documentation. My work focused on source-file structure, terminology consistency, and formatting-sensitive content before translation.",
          "I practiced checking Markdown source files for tags, variables, placeholders, links, paths, and code blocks, using Regex-assisted searches and CAT-tool workflows. I also helped organize bilingual terminology and review source text logic, tag integrity, and formatting risks.",
          "This experience later informed my Markdown Pre-translation Processing Guide, where I generalized common risks into a non-confidential process documentation sample.",
        ],
        pointsTitle: "Key areas",
        points: [
          "Markdown source-file review",
          "Regex-assisted identification",
          "CAT-tool workflow awareness",
          "Terminology consistency",
          "Placeholder, link, path, and code-block preservation",
          "Documentation review before translation",
        ],
      },
      {
        date: "Jan 2022 - Sep 2022",
        title: "Game System Designer",
        company: "Xiamen Qingmeng Xinyin Interactive Technology Co., Ltd.",
        paragraphs: [
          "As a game system designer, I worked with product logic, user flows, and implementation-facing documentation. I wrote and maintained PRDs, system flowcharts, and resource configuration notes for multiple game systems, including store, compendium, and map-related features.",
          "This role helped me understand how documentation supports cross-role communication. I often needed to translate system rules into clear module logic, trigger conditions, state changes, and edge cases so that developers, artists, UI designers, testers, and operations staff could work from the same understanding.",
          "This experience is one reason I became interested in technical writing: clear documentation can reduce ambiguity, support implementation, and keep complex product logic easier to maintain.",
        ],
      },
      {
        date: "Jan 2019 - Dec 2021",
        title: "Co-founder",
        company: "Xinyue Shezhan Ceramic Studio",
        paragraphs: [
          "In my ceramic studio experience, I worked with product information, user education, and customer-facing content. I organized information about Jian ware craftsmanship, shapes, glaze types, usage, and care, then turned it into educational posts, product explanations, and pre-purchase guidance for new users.",
          "This experience strengthened my interest in user assistance content. Many customer questions were not only sales questions, but also information problems: users needed clearer explanations, comparison points, care instructions, and reusable answers.",
          "I also helped organize content materials by product theme, user scenario, and common question, supporting communication with a large private-domain user base and improving consistency in product guidance.",
        ],
        pointsTitle: "Key areas",
        points: [
          "Product explanation and user education",
          "FAQ-style content",
          "Product usage and care guidance",
          "Reusable content materials",
          "User question analysis",
        ],
      },
    ],
    educationKicker: "Education",
    educationTitle: "Education",
    education: [
      {
        school: "Newcastle University",
        degree: "Translation and Localisation · MA",
      },
      {
        school: "Xiamen University of Technology",
        degree: "Financial Engineering · BSc",
      },
      {
        school: "Victoria University of Wellington",
        degree: "Financial Engineering · Exchange Student",
      },
    ],
    toolkitKicker: "Toolkit",
    skillsTitle: "Skills & Tools",
    skillGroups: [
      {
        title: "Writing & Localization",
        text: "Markdown, DITA, Oxygen XML Author, Trados, memoQ, terminology management, QA workflows",
      },
      {
        title: "Documentation & Collaboration",
        text: "VS Code, GitHub basics, Visio, Xmind, MS Office, PRD, flow diagrams",
      },
      {
        title: "Languages & Media",
        text: "IELTS 7, BEC Vantage, CET-6, basic Korean, Photoshop, Arctime, Aegisub, AIGC tools",
      },
    ],
    contactKicker: "Contact",
    contactTitle:
      "I would be happy to talk about technical documentation, localization, and portfolio work.",
    footerName: "Xinyue Chen",
    footerBuilt: "Built for GitHub Pages",
  },
  zh: {
    pageTitle: "陈心悦 | 技术文档与本地化作品集",
    metaDescription:
      "陈心悦的技术文档与本地化作品集，展示英文排障文档、Markdown 译前处理流程和用户手册本地化案例。",
    brandAria: "回到首页",
    navAria: "主导航",
    navToggle: "打开导航",
    languageToggle: "EN",
    languageAria: "Switch to English",
    nav: ["作品集", "经历", "技能", "联系"],

    heroEyebrow: "Technical Writing · Localization · Structured Documentation",
    heroTitle: "陈心悦",
    heroLede:
      "英国纽卡斯尔大学 <strong>翻译与本地化</strong> 应届硕士毕业生，求职方向为 <strong>技术文档工程师 / Technical Writer</strong>。",
    heroButtons: ["查看作品集", "联系我"],

    heroPanelAria: "核心能力摘要",
    panelLabel: "Focus",
    focusItems: [
      "英文技术写作",
      "DITA / Markdown 文档结构",
      "系统需求拆解",
      "术语一致性与文档复核",
    ],

    aboutKicker: "About",
    aboutTitle: "从语言、本地化和产品逻辑出发，转向技术文档写作。",
    aboutText: [
  "我的教育背景横跨金融工程和翻译与本地化。本科阶段的理工科训练让我习惯用结构化方式理解问题，硕士阶段的学习则让我更关注语言准确性、目标用户、术语一致性和跨文化表达。",
  "在游戏系统策划经历中，我参与过 PRD、系统逻辑流程图和资源配置说明的整理，需要把功能规则、状态流转和异常场景写清楚，便于开发、美术、测试等不同角色理解和执行。创业经历也让我长期接触产品说明、用户问题、购买前解释和常见问答整理。",
  "这些经历共同影响了我对技术文档的理解：好的文档不只是把内容翻译出来，而是把复杂信息组织成用户能理解、能操作、能复核的说明。",
],

    workKicker: "Selected Work",
    workTitle: "作品集项目",
    workIntro:
      "三个项目分别展示英文排障文档写作、Markdown 技术文档译前处理流程，以及用户手册本地化改写分析。建议先阅读 README 了解项目背景、文件结构和推荐阅读顺序。",

    guideLabel: "Start Here",
    guideTitle: "先阅读作品集 README",
    guideText:
      "README 说明了三个项目的整体定位、文件结构、查看顺序和作品来源。",
    guideLink: "打开 README",

    projects: [
      {
        meta: ["English · DITA", "Self-directed"],
        title: "PLA Edge Lifting Troubleshooting Guide",
        text:
          "面向入门到中级 FDM 3D 打印机用户的英文排障文档，聚焦 PLA 打印边缘翘起和轻微翘曲问题。文档使用 DITA 组织内容，并输出 PDF 与 HTML 版本。",
        links: [
          {
            label: "查看 HTML",
            href: "https://whyamistilleatin.github.io/technical-writing-localization-portfolio/01_PLA_Edge_Lifting_Troubleshooting/html_output/index.html",
          },
          {
            label: "查看 PDF",
            href: "https://whyamistilleatin.github.io/technical-writing-localization-portfolio/01_PLA_Edge_Lifting_Troubleshooting/PLA_Edge_Lifting_Troubleshooting.pdf",
          },
        ],
      },
      {
        meta: ["中文 · Markdown", "Self-directed"],
        title: "Markdown 技术文档基础译前处理指引",
        text:
          "一份中文流程文档，用于说明 Markdown 技术文档导入 CAT 工具前的基础译前处理。内容结合本地化工作流实践和泛化示例整理，不包含客户或保密项目内容。",
        link: "查看作品",
      },
      {
        meta: ["Manual Localization", "Coursework-based"],
        title: "Bear Hand Mixer User Manual Localization Case Study",
        text:
          "基于硕士课程作业的用户手册本地化与技术传播改写案例，重点展示任务导向表达、术语简化、安全提示和 before / after 修改分析。",
        link: "查看作品",
      },
    ],

    experienceKicker: "Experience",
    experienceTitle: "经历",
    experienceIntro:
      "我的经历主要围绕本地化、产品逻辑和用户内容展开。它们共同指向一个核心问题：如何把复杂信息整理给不同角色使用。",

    experiences: [
      {
        date: "2026.01 - 2026.02",
        title: "北京策马集团 · 本地化实习生",
        paragraphs: [
          "参与出海智能硬件技术文档本地化支持，关注 Markdown 源文件中的标签、变量、占位符、链接、路径和代码块等结构敏感内容。",
          "实践 Regex 辅助定位、CAT 工具流程、术语整理和译前复核，整理 200+ 条中英双语术语，并识别反馈 10+ 处源文逻辑或格式风险。",
        ],
      },
      {
        date: "2022.01 - 2022.09",
        title: "厦门轻梦心音信息科技有限公司 · 游戏系统策划",
        paragraphs: [
          "参与商城、图鉴、地图等 8 个系统的功能设计，输出 PRD、系统逻辑流程图和资源配置说明，支持开发、美术、测试等角色理解功能逻辑。",
          "根据多轮测试反馈更新功能说明与配置文档，协助梳理模块规则、状态流转和跨系统跳转问题，减少跨角色理解偏差。",
        ],
      },
      {
        date: "2019.01 - 2021.12",
        title: "心悦舍盏建盏陶瓷工作室 · 合伙人",
        paragraphs: [
          "整理建盏工艺、器型、釉色、使用与养护等产品信息，并转化为图文说明、购买前说明和常见问答，沉淀面向新用户的产品内容资产。",
          "这段经历让我更关注用户问题背后的信息需求，例如产品解释、对比依据、使用建议和可复用回答。",
        ],
      },
    ],

    educationKicker: "Education",
    educationTitle: "教育背景",
    education: [
      {
        school: "英国纽卡斯尔大学",
        degree: "翻译与本地化 · 硕士",
      },
      {
        school: "厦门理工学院",
        degree: "金融工程 · 本科",
      },
      {
        school: "新西兰惠灵顿维多利亚大学",
        degree: "金融工程 · 交换生",
      },
    ],

    toolkitKicker: "Toolkit",
    skillsTitle: "技能与工具",
    skillGroups: [
      {
        title: "Writing & Localization",
        text:
          "Markdown，DITA，Oxygen XML Author，Trados，memoQ，术语管理，文档复核",
      },
      {
        title: "Documentation & Collaboration",
        text:
          "VS Code，GitHub 基础，Visio，XMind，MS Office，PRD，流程图",
      },
      {
        title: "Languages & Media",
        text:
          "英语雅思 7，BEC 中级，CET-6，韩语基础，Photoshop，Arctime，Aegisub，AI 辅助工具",
      },
    ],

    contactKicker: "Contact",
    contactTitle: "欢迎联系我聊技术文档、本地化和作品集。",
    footerName: "陈心悦",
    footerBuilt: "Built for GitHub Pages",
  },
};
