import waHelper from "@/assets/images/projects/wa-helper.png";
import perkakas from "@/assets/images/projects/perkakas.png";
import quranQuiz from "@/assets/images/projects/quran-quiz.png";
import kasaTalk from "@/assets/images/projects/kasa-talk.png";
import pcbumigora from "@/assets/images/projects/pcbumigora.png";
import cataai from "@/assets/images/projects/cata-ai.png";
import monanya from "@/assets/images/projects/monanya.png";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiPlanetscale,
  SiExpress,
  SiSupabase,
  SiPrisma,
  SiFastapi,
  SiTensorflow,
  SiReacthookform,
  SiPostgresql,
} from "react-icons/si";

import { ProjectsProps } from "../types";

const DrizzleIcon = () => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-6 h-6"
    >
      <title>Drizzle</title>
      <path d="M5.353 11.823a1.036 1.036 0 0 0-.395-1.422 1.063 1.063 0 0 0-1.437.399L.138 16.702a1.035 1.035 0 0 0 .395 1.422 1.063 1.063 0 0 0 1.437-.398l3.383-5.903Zm11.216 0a1.036 1.036 0 0 0-.394-1.422 1.064 1.064 0 0 0-1.438.399l-3.382 5.902a1.036 1.036 0 0 0 .394 1.422c.506.283 1.15.104 1.438-.398l3.382-5.903Zm7.293-4.525a1.036 1.036 0 0 0-.395-1.422 1.062 1.062 0 0 0-1.437.399l-3.383 5.902a1.036 1.036 0 0 0 .395 1.422 1.063 1.063 0 0 0 1.437-.399l3.383-5.902Zm-11.219 0a1.035 1.035 0 0 0-.394-1.422 1.064 1.064 0 0 0-1.438.398l-3.382 5.903a1.036 1.036 0 0 0 .394 1.422c.506.282 1.15.104 1.438-.399l3.382-5.902Z" />
    </svg>
  );
};

const BetterAuthIcon = () => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-6 h-6"
    >
      <title>Better Auth</title>
      <path d="M0 3.39v17.22h5.783V15.06h6.434V8.939H5.783V3.39ZM12.217 8.94h5.638v6.122h-5.638v5.548H24V3.391H12.217Z" />
    </svg>
  );
};

const ShadcnUiIcon = () => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-6 h-6"
    >
      <title>shadcn/ui</title>
      <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
    </svg>
  );
};

export const projects: ProjectsProps[] = [
  {
    id: 1,
    src: waHelper,
    title: "Wa Helper",
    description: "items.waHelper.description",
    techs: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    code: "https://github.com/galuhsatria/whatsapp-messages-helper",
    visit: "https://whatsapp-messages-helper.vercel.app/",
  },
  {
    id: 2,
    src: perkakas,
    title: "Tools",
    description: "items.perkakas.description",
    techs: [
      { name: "Next Js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    code: "https://github.com/galuhsatria/perkakas",
    visit: "https://perkakas-galuhsatria.vercel.app/",
  },
  {
    id: 3,
    src: quranQuiz,
    title: "Quran Quiz",
    description: "items.quranQuiz.description",
    techs: [
      { name: "Next Js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    code: "https://github.com/galuhsatria/quran-quiz",
    visit: "https://alquran-quiz.vercel.app/",
  },
  {
    id: 4,
    src: monanya,
    title: "Monanya",
    description: "items.monanya.description",
    techs: [
      { name: "Next Js", icon: <SiNextdotjs /> },
      { name: "React Hook Form", icon: <SiReacthookform /> },
      {
        name: "Drizzle",
        icon: <DrizzleIcon />,
      },
      {
        name: "Better Auth",
        icon: <BetterAuthIcon />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        name: "Shadcn/ui",
        icon: <ShadcnUiIcon />,
      },
    ],
    code: "https://github.com/galuhsatria/monanya",
    visit: "https://monanya.vercel.app/",
  },
  {
    id: 5,
    src: kasaTalk,
    title: "Kasa Talk",
    description: "items.kasaTalk.description",
    techs: [
      { name: "Next Js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Planetscale", icon: <SiPlanetscale /> },
      { name: "Express JS", icon: <SiExpress /> },
    ],
    visit: "https://kasatalk.vercel.app/",
  },
  {
    id: 6,
    src: pcbumigora,
    title: "PC Bumigora",
    description: "items.pcbumigora.description",
    techs: [
      { name: "Next Js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
    visit: "https://www.pcbumigora.online/",
  },
  {
    id: 7,
    src: cataai,
    title: "Cata AI",
    description: "items.cataai.description",
    techs: [
      { name: "React Js", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Fast API", icon: <SiFastapi /> },
      { name: "Tensorflow", icon: <SiTensorflow /> },
    ],
    visit: "https://cata-ai.vercel.app/",
  },
];
