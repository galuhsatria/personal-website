import alquranApp from '@/assets/images/projects/alquran-app.png';
import blogPage from '@/assets/images/projects/blog-page.png';
import communityLandingPage from '@/assets/images/projects/community-landing-page.png';
import waHelper from '@/assets/images/projects/wa-helper.png';
import perkakas from '@/assets/images/projects/perkakas.png';
import quranQuiz from '@/assets/images/projects/quran-quiz.png';
import kasaTalk from '@/assets/images/projects/kasa-talk.png';
import pcbumigora from '@/assets/images/projects/pcbumigora.png';

import { SiNextdotjs, SiReact, SiTailwindcss, SiFirebase, SiPlanetscale, SiExpress } from 'react-icons/si';

import { ProjectsProps } from '../types';

export const projects: ProjectsProps[] = [
  {
    id: 1,
    src: alquranApp,
    title: 'Al-Quran App',
    description: 'Al-quran web version build with E-Quran API',
    techs: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
    code: 'https://github.com/galuhsatria/quran-app',
    visit: 'https://galuhsatria-quran-app.vercel.app/',
  },
  {
    id: 2,
    src: blogPage,
    title: 'Blog Page',
    description: 'A simple blog page using MDX, just for trying ',
    techs: [
      { name: 'Next Js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
    code: 'https://github.com/galuhsatria/blog-page',
    visit: 'https://blog-page-galuhsatria.vercel.app/',
  },
  {
    id: 3,
    src: communityLandingPage,
    title: 'Community Page',
    description: 'A website to show a community information',
    techs: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
    code: 'https://github.com/galuhsatria/community-landing-page',
    visit: 'https://community-landing-page-galuhsatria.vercel.app/',
  },
  {
    id: 4,
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
    id: 5,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    src: pcbumigora,
    title: 'PC Bumigora',
    description: 'A platform that provides information about PC Bumigora',
    techs: [
      { name: 'Next Js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> }
    ],
    visit: 'https://pcbumigora.vercel.app/',
  },
];
