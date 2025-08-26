'use client';

import { useTranslations } from 'next-intl';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaUsers } from 'react-icons/fa';

export default function Experience() {
  const t = useTranslations('home');

  const experiences = [
    {
      date: t('experience.items.proxocoris.date'),
      title: t('experience.items.proxocoris.title'),
      description: t('experience.items.proxocoris.subtitle'),
      icon: <FaTrophy />,
    },
    {
      date: t('experience.items.diskominfotik.date'),
      title: t('experience.items.diskominfotik.title'),
      description: t('experience.items.diskominfotik.subtitle'),
      icon: <FaBriefcase />,
    },
    {
      date: t('experience.items.dicoding.date'),
      title: t('experience.items.dicoding.title'),
      description: t('experience.items.dicoding.subtitle'),
      icon: <FaGraduationCap />,
    },
    {
      date: t('experience.items.pc.date'),
      title: t('experience.items.pc.title'),
      description: t('experience.items.pc.subtitle'),
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="relative border-l border-gray-200">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-8 h-8 rounded-full bg-black text-white dark:text-black dark:bg-white flex items-center justify-center -left-4">
              {experience.icon}
            </div>
            <div className="ml-8">
              <time className="block text-xs text-muted-foreground">{experience.date}</time>
              <h3 className="font-semibold dark:text-white text-black">{experience.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
