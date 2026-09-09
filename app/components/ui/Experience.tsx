'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaUsers } from 'react-icons/fa';
import { VscVerifiedFilled } from 'react-icons/vsc';

export default function Experience() {
  const t = useTranslations('home');

  const experiences = [
    {
      date: t('experience.items.bbpntb.date'),
      title: t('experience.items.bbpntb.title'),
      description: t('experience.items.bbpntb.subtitle'),
      icon: <FaBriefcase />,
    },
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
    <div className="mx-auto my-4 flex items-start gap-2">
      <Image
        src="/avatar.png"
        alt="profil-picture"
        width={20}
        height={20}
        className="h-8 w-8 rounded-full object-cover"
        unoptimized
      />

      <div className="flex-1">
        <p className="mb-2 flex items-center gap-1 text-sm font-semibold">
          galuhsatria
          <VscVerifiedFilled className="text-lg text-blue-500" />
        </p>

        <ul className="relative border-l border-gray-200 ml-3 mt-3">
          {experiences.map((experience, index) => (
            <li key={index} className="relative mb-8">

              <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
                {experience.icon}
              </div>

              <div className="ml-8">
                <time className="block text-xs text-muted-foreground">
                  {experience.date}
                </time>

                <h3 className="font-semibold text-foreground">
                  {experience.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {experience.description}
                </p>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
