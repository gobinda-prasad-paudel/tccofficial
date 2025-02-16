// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Trinity Computer Council",
  description:
    "We are a group of passionate computer enthusiasts and innovators dedicated to exploring the latest advancements in computer technology. Our mission is to inspire and empower students to engage with cutting-edge fields like AI, cybersecurity, and software development.",
  siteUrl: "https://www.trinitycomputercouncil.com/",
};


export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  /*
  {
   name: "Works",
   ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
    },
  {
    name: "Contact",
    ref: "contact",
  },
  */
]; 
 
export const TYPED_STRINGS = [
  "We explore the latest in computer technology",
  "We foster innovation and creativity in tech",
  "We build dynamic solutions for real-world challenges",
  "We inspire the next generation of tech leaders",
];

export const EMAIL = "tcc@trinity.edu.np";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/tcc",
  github: "https://github.com/tcc",
 /*  medium: "https://alphaayush.medium.com/", */
  instagram: "https://www.instagram.com/trinitycomputercouncil/",
  facebook: "https://www.facebook.com/tcc",
  /* dribbble: "https://dribbble.com/alphaayush",
  behance: "https://www.behance.net/alphaayush/",
  twitter: "https://twitter.com/ayush013", */
  // topmate: "https://www.instagram.com/trinitycomputercouncil/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "EduCare",
    image: "/projects/project1.jpg",
    blurImage: "/projects/project1.jpg",
    // blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Innovative app for emergency medical service.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "/",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Website Redesign",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "A modern approach to marketing site development.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "/",
    tech: ["react", "next", "gsap", "tailwind"],
  },/* 
  {
    name: "Tech Innovators Site",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "A sleek and professional tech company website.",
    gradient: ["#245B57", "#004741"],
    url: "/",
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "NextGen App",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Building innovative applications for the future.",
    gradient: ["#003052", "#167187"],
    url: "/",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "File Upload Package",
    image: "/projects/ngx-quill-upload.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "An efficient package for handling file uploads in apps.",
    gradient: ["#3A0000", "#771E1E"],
    url: "/",
    tech: ["npm", "angular", "typescript"],
  },
  {
    name: "Corporate Site",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Branding and website for a corporate tech company.",
    gradient: ["#17007B", "#3A2C79"],
    url: "/",
    tech: ["javascript", "sass", "svg", "gulp"],
  },
  {
    name: "Educational Website",
    image: "/projects/akgec.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "A complete overhaul of an educational institution’s site.",
    gradient: ["#5E4C06", "#746528"],
    url: "/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Design Studio",
    image: "/projects/alpha.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Creative platform for modern design services.",
    gradient: ["#172839", "#334659"],
    url: "/",
    tech: ["illustrator", "javascript", "angular"],
  },
  {
    name: "Survey Tool",
    image: "/projects/farewell18.jpg",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "Polling web app with modern features.",
    gradient: ["#142D46", "#2E4964"],
    url: "/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Event Portal",
    image: "/projects/bdc18.jpg",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "A dynamic platform for managing event registrations.",
    gradient: ["#470700", "#712A23"],
    url: "/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Conference Site",
    image: "/projects/scrolls.jpg",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description: "A portal for managing conferences and workshops.",
    gradient: ["#685506", "#7B6921"],
    url: "/",
    tech: ["angular", "html", "css"],
  },
  {
    name: "Business Cards Generator",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "Create custom business cards with ease.",
    gradient: ["#552A04", "#614023"],
    url: "/",
    tech: ["javascript", "html", "css"],
  } */
  
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Battle with Codes",
    size: ItemSize.SMALL,
    subtitle:
      "Organised Battle with Codes in Trinity Interational College",
    image: "/timeline/trinity_international_college.png",
    slideImage: "/timeline/project2.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Winner of Trinity Intra College IT Competition",
    size: ItemSize.SMALL,
    subtitle:
      "Built EduCare for better emergency medical response .",
    image: "/timeline/trinity_international_college.png",
    slideImage: "/timeline/project1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  
  /* {
    type: NodeTypes.CHECKPOINT,
    title: "XYZ event",
    size: ItemSize.SMALL,
    subtitle:
      "Organised xyz event",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  }, */
  /* {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/farewell.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
   */
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
