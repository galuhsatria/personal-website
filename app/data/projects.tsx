import waHelper from '@/assets/images/projects/wa-helper.png';
import perkakas from '@/assets/images/projects/perkakas.png';
import quranQuiz from '@/assets/images/projects/quran-quiz.png';
import kasaTalk from '@/assets/images/projects/kasa-talk.png';
import pcbumigora from '@/assets/images/projects/pcbumigora.png';
import cataai from '@/assets/images/projects/cata-ai.png';

import { SiNextdotjs, SiReact, SiTailwindcss, SiFirebase, SiPlanetscale, SiExpress, SiSupabase, SiPrisma, SiFastapi, SiTensorflow } from 'react-icons/si';

import { ProjectsProps } from '../types';

export const projects: ProjectsProps[] = [
  {
    id: 1,
    src: waHelper,
    title: 'Wa Helper',
    description: 'items.waHelper.description',
    techs: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
    code: 'https://github.com/galuhsatria/whatsapp-messages-helper',
    visit: 'https://whatsapp-messages-helper.vercel.app/',
  },
  {
    id: 2,
    src: perkakas,
    title: 'Tools',
    description: 'items.perkakas.description',
    techs: [
      { name: 'Next Js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
    code: 'https://github.com/galuhsatria/perkakas',
    visit: 'https://perkakas-galuhsatria.vercel.app/',
  },
  {
    id: 3,
    src: quranQuiz,
    title: 'Quran Quiz',
    description: 'items.quranQuiz.description',
    techs: [
      { name: 'Next Js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
    code: 'https://github.com/galuhsatria/quran-quiz',
    visit: 'https://alquran-quiz.vercel.app/',
  },
  {
    id: 4,
    src: kasaTalk,
    title: 'Kasa Talk',
    description: 'items.kasaTalk.description',
    techs: [
      { name: 'Next Js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Planetscale', icon: <SiPlanetscale /> },
      { name: 'Express JS', icon: <SiExpress /> },
    ],
    visit: 'https://kasatalk.vercel.app/',
  },
  {
    id: 5,
    src: pcbumigora,
    title: 'PC Bumigora',
    description: 'items.pcbumigora.description',
    techs: [
      { name: 'Next Js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Prisma', icon: <SiPrisma /> },
      { name: 'Supabase', icon: <SiSupabase /> },
    ],
    visit: 'https://www.pcbumigora.online/',
  },
  {
    id: 6,
    src: cataai,
    title: 'Cata AI',
    description: 'items.cataai.description',
    techs: [
      { name: 'React Js', icon: <SiReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Fast API', icon: <SiFastapi /> },
      { name: 'Tensorflow', icon: <SiTensorflow /> },
    ],
    visit: 'https://cata-ai.vercel.app/',
  },
];
