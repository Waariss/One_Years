// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "One Year Anniversary",
  description:
    "",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Gallery",
    ref: "works",
  },
  {
    name: "Countdown",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
];

export const TYPED_STRINGS = [
  "Sorry for my mistakes this year",
  "I'll strive to make you happier",
  "Missing our moments together",
  "Always by your side, always there"
];


export const EMAIL = "ayush.singh.xda@gmail.com";

export const EMOJI_LINKS = {
  linkedin: "🐷",
  github: "🐼",
  medium: "👸",
  instagram: "🤍",
  instagra: "💙",
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
    name: "FigGen - Figma to Code converter",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "myOKR Website",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.huminos.com/",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "DLT Labs Website",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "DL Unify",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://dlunify.com/",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "ngx-quill-upload",
    image: "/projects/ngx-quill-upload.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "NPM Package for Quill JS uploads from Angular",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.npmjs.com/package/ngx-quill-upload",
    tech: ["npm", "angular", "typescript"],
  },
  {
    name: "Huminos website",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Marketing site for Huminos bots for workplace by facebook",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://bots.huminos.com/",
    tech: ["javascript", "sass", "svg", "gulp"],
  },
  {
    name: "AKGEC - College Website",
    image: "/projects/akgec.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Contributed in overall design and development",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.akgec.ac.in/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Alpha Aesthetics",
    image: "/projects/alpha.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Designed and developed the platform",
    gradient: ["#172839", "#334659"],
    url: "https://alpha-aesthetics.ayushsingh.net/",
    tech: ["illustrator", "javascript", "angular"],
  },
  {
    name: "Amantrya - Polling Web App",
    image: "/projects/farewell18.jpg",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "Dark mode dated from 2017 🔥",
    gradient: ["#142D46", "#2E4964"],
    url: "https://farewell18.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "BDC 2018 Web Portal",
    image: "/projects/bdc18.jpg",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#470700", "#712A23"],
    url: "https://bdc2018.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Scrolls 2017 - Website",
    image: "/projects/scrolls.jpg",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#685506", "#7B6921"],
    url: "https://scrolls-17.ayushsingh.net/",
    tech: ["angular", "html", "css"],
  },
  {
    name: "Cardize - Visiting Cards",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "First web project! Custom visiting card generator",
    gradient: ["#552A04", "#614023"],
    url: "https://cardize.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
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
    type: NodeTypes.CHECKPOINT,
    title: "1 Year",
    size: ItemSize.LARGE,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    slideImage: "/MINE/8m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Somewhere",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/sw.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st midterm",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/1mid.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "11 months",
    size: ItemSize.LARGE,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    slideImage: "/MINE/8m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Airplane together",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/airto.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Cute 2",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/cute2.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "uhhhh....",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/uhhh.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "My babe",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/babe.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "M Second BD",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/m2bd.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "10 months",
    size: ItemSize.LARGE,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    slideImage: "/MINE/10m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Police wife???",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/555.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Funny thing together",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/fun.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "At Milk Room?",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/room.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Din Tai Fung",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/din.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "9 months",
    size: ItemSize.LARGE,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    slideImage: "/MINE/9m.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "You at Low Code",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/low.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Second Photo Booth",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/2pb2.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Cute 🐷",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/cute.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Shinkanzen",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/shinkanzen.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Maid ?",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/maid.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "One ?!?",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/one.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Brownie",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/brownie.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Sec Girl with You!",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/sec.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "8 months",
    size: ItemSize.LARGE,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    slideImage: "/MINE/8m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Indiana Jones with you haha",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/india.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Something about 🍣?",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/sal.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Something ... (Back to Mahidol U.)",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/something.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fifa go home",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/fgh.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Our Boy grow up",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/ppc.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "M back to Thailand",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/mgh.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "7 months",
    size: ItemSize.LARGE,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    slideImage: "/MINE/7m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "M Arrived at Taiwan!",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/Mtw.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "🐷",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/twt.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "😽",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/vbvb.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "🤍🤍🤍",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/LOVELOVELOVE.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "🤍🤍",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/LOVELOVE.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "6 Months",
    size: ItemSize.LARGE,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    slideImage: "/MINE/6m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "🤍",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/LOVE.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Taiwan Dorm",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/FTD.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fifa go to Taiwan!",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/FTaiwan.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fifa prepare to Taiwan!",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/PFT.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "5 Months",
    size: ItemSize.LARGE,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    slideImage: "/MINE/5m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "No see for 2 months T_T",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/air.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "You and My family",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/fam.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1St phto booths",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/1pb.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "COngeat",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/Taiwan.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "4 months",
    size: ItemSize.LARGE,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    slideImage: "/MINE/4m.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "DB Fifa",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/fBD.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Your BD Cake",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/FCAKE.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Pre BD Gift",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/BDG.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "3 months",
    size: ItemSize.LARGE,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/MINE/3m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Somewhere",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/sw.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st midterm",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/1mid.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2 months",
    size: ItemSize.LARGE,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/MINE/2m.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Valentine Day ",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/V.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Second LEGO",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/LEGO2.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "New Hair Color V2",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/hv2.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1 months",
    size: ItemSize.LARGE,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/MINE/Fv2.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st LEGO",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/LEGO.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {

    type: NodeTypes.CHECKPOINT,
    title: "New Hair Color V1",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/hairv1.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {

    type: NodeTypes.CHECKPOINT,
    title: "Happy New Year",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/hpy.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {

    type: NodeTypes.CHECKPOINT,
    title: "Second trip",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/2trip.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {

    type: NodeTypes.CHECKPOINT,
    title: "1st with fifa friends",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/ff.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {

    type: NodeTypes.CHECKPOINT,
    title: "Be my girlfriend ",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/BeGF.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st M Home",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/Mhome.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {

    type: NodeTypes.CHECKPOINT,
    title: "1st M BD",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/MBD.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {

    type: NodeTypes.CHECKPOINT,
    title: "1st flim photo",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/film.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st trip",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/1st_trip.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st final together",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/1final.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st Bag",
    size: ItemSize.LARGE,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/MINE/1st_bag(1).png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Starter",
    size: ItemSize.LARGE,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    slideImage: "/MINE/Starter.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
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
