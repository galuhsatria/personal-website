import alquranApp from "@/assets/images/projects/alquran-app.png";
import blogPage from "@/assets/images/projects/blog-page.png";
import communityLandingPage from "@/assets/images/projects/community-landing-page.png";
import waHelper from "@/assets/images/projects/wa-helper.png";

import tailwind from "@/assets/images/skills/tailwindcss.svg";
import react from "@/assets/images/skills/react.svg";

import { ProjectsProps } from "../types";

export const projects: ProjectsProps[] = [
  {
    id: 1,
    src: alquranApp,
    title: "Al-Quran App",
    description: "Al-quran web version build with E-Quran API",
    techs: [react, tailwind],
    code: "https://github.com/galuhsatria/quran-app",
    visit: "https://galuhsatria-quran-app.vercel.app/",
  },
  {
    id: 2,
    src: blogPage,
    title: "Blog Page",
    description: "A simple blog page using MDX, just for trying ",
    techs: [react, tailwind],
    code: "https://github.com/galuhsatria/blog-page",
    visit: "https://blog-page-galuhsatria.vercel.app/",
  },
  {
    id: 3,
    src: communityLandingPage,
    title: "Community Page",
    description: "A website to show a community information",
    techs: [react, tailwind],
    code: "https://github.com/galuhsatria/community-landing-page",
    visit: "https://community-landing-page-galuhsatria.vercel.app/",
  },
  {
    id: 4,
    src: waHelper,
    title: "Wa Helper",
    description: "You can easily chat someone without saving number",
    techs: [react, tailwind],
    code: "https://github.com/galuhsatria/whatsapp-messages-helper",
    visit: "https://whatsapp-messages-helper.vercel.app/",
  },
];
