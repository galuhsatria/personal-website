import alquranApp from '@/assets/images/projects/alquran-app.png';
import blogPage from '@/assets/images/projects/blog-page.png';
import communityLandingPage from '@/assets/images/projects/community-landing-page.png';
import waHelper from '@/assets/images/projects/wa-helper.png';
import perkakas from '@/assets/images/projects/perkakas.png';
import quranQuiz from '@/assets/images/projects/quran-quiz.png';
import kasaTalk from '@/assets/images/projects/kasa-talk.png';
import pcbumigora from '@/assets/images/projects/pcbumigora.png';

import { SiNextdotjs, SiReact, SiTailwindcss, SiFirebase, SiPlanetscale, SiExpress, SiSupabase,  SiPrisma } from 'react-icons/si';

import { ProjectsProps } from '../types';

export const projects: ProjectsProps[] = [
  {
    id: 1,
    src: waHelper,
    title: 'Wa Helper',
    description: 'You can easily chat someone without saving number',
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
    description: 'Here are some your favorite online tools',
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
    description: 'A feature to generating quizzes about the Quran',
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
    description: 'A platform that provides a Sasak language dictionary',
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
    description: 'A platform that provides information about PC Bumigora',
    techs: [
      { name: 'Next Js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Prisma', icon: <SiPrisma /> },
      { name:'Supabase', icon: <SiSupabase /> }
    ],
    visit: 'https://www.pcbumigora.online/',
  },
];
