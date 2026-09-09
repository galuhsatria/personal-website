/* eslint-disable @next/next/no-img-element */
'use client';

import EmailForm from '@/components/EmailForm';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { FaPlay } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiNestjs,
  SiInertia,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
} from 'react-icons/si';
import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";


const techStack = [
  // Language
  {
    name: 'TypeScript',
    icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'PHP',
    icon: SiPhp,
    url: 'https://www.php.net/',
  },

  // Frontend
  {
    name: 'React',
    icon: SiReact,
    url: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    url: 'https://nextjs.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    url: 'https://tailwindcss.com/',
  },

  // Backend
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    url: 'https://nodejs.org/',
  },
  {
    name: 'NestJS',
    icon: SiNestjs,
    url: 'https://nestjs.com/',
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    url: 'https://laravel.com/',
  },
  {
    name: 'Inertia.js',
    icon: SiInertia,
    url: 'https://inertiajs.com/',
  },

  // ORM
  {
    name: 'Prisma',
    icon: SiPrisma,
    url: 'https://www.prisma.io/',
  },

  // Database & Backend Service
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Supabase',
    icon: SiSupabase,
    url: 'https://supabase.com/',
  },
];

const AUDIO_SRC = "/music/Building My Way.mp3";

export default function About() {
  const t = useTranslations('about');

  const [isPlaying, setIsPlaying] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [waveKey, setWaveKey] = useState(0);
    const pressTimeout = useRef(null);
    const audioRef = useRef(null);

    const title = "Building My Way";
    const name = "Suno AI";

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener("ended", handleEnded);
      return () => audio.removeEventListener("ended", handleEnded);
    }, []);

    const handleClick = () => {
      const next = !isPlaying;
      setIsPlaying(next);

      setIsPressed(true);
      clearTimeout(pressTimeout.current);
      pressTimeout.current = setTimeout(() => setIsPressed(false), 180);

      if (next) {
        setWaveKey((k) => k + 1);
        audioRef.current?.play();
      } else {
        audioRef.current?.pause();
      }
    };

  return (
    <section className="flex gap-2 items-start my-4">
      <Image
        src="/avatar.png"
        alt="profil-picture"
        width={20}
        height={20}
        className="h-8 w-8 shrink-0 rounded-full object-cover"
        unoptimized
      />
      <div className="flex flex-col gap-2 w-full min-w-0">
        <p className="font-semibold text-sm flex items-center gap-2">
          galuhsatria <VscVerifiedFilled className="text-lg text-blue-500" />
        </p>
        <div className="flex items-center mb-1">
              <audio ref={audioRef} src={AUDIO_SRC} preload="auto" />

              <div className="flex gap-3 items-center mb-1">
                <button
                  onClick={handleClick}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  className="bg-neutral-800 hover:bg-neutral-700 w-7 h-7 rounded-full transition-colors duration-200 flex items-center justify-center shrink-0"
                >
                  <span
                    className="inline-flex transition-transform duration-150 ease-out"
                    style={{ transform: isPressed ? "scale(0.65)" : "scale(1)" }}
                  >
                    {isPlaying ? (
                      <Pause className="w-3 h-3 fill-current text-white" />
                    ) : (
                      <Play className="w-3 h-3 fill-current text-white ml-0.5" />
                    )}
                  </span>
                </button>

                <p className="font-semibold text-sm flex items-center">
                  <WaveText
                    key={waveKey}
                    active={isPlaying}
                    segments={[
                      { text: title, className: "text-white" },
                      { text: " • ", className: "text-neutral-500" },
                      { text: name, className: "text-neutral-400 font-light" },
                    ]}
                  />
                </p>
              </div>
            </div>
        <div>
          <div className="flex flex-col gap-2">
            <p className="max-md:text-sm">{t('description.paragraph1')}</p>
            <p className="max-md:text-sm">{t('description.paragraph2')}</p>
            <p className="max-md:text-sm">{t('description.paragraph3')}</p>
          </div>
          <p className="mb-6 text-base font-semibold mt-4">
            {t('favoriteTechStack')}
          </p>
          <div className="relative w-full overflow-hidden py-3">
            <div className="flex items-center gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={tech.name}
                    className="shrink-0 text-muted-foreground transition-colors duration-200 hover:text-white"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
        <div>
          <h2 className="text-xl my-6 font-bold">{t('contact')}</h2>
          <ul className="flex flex-wrap gap-4 sm:gap-6">
            <li className="hover:text-blue-500 transition-colors">
              <a href="https://github.com/galuhsatria" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                <div className="border p-1 rounded-md border-border text-xl">
                  <SiGithub />
                </div>
                Github
              </a>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <a href="https://www.linkedin.com/in/galuhsatria/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                <div className="border p-1 rounded-md border-border text-xl">
                  <SiLinkedin />
                </div>
                LinkedIn
              </a>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <a href="https://www.instagram.com/galuhsatria._/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                <div className="border p-1 rounded-md border-border text-xl">
                  <SiInstagram />
                </div>
                Instagram
              </a>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <a href="https://twitter.com/galuhsatria___" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                <div className="border p-1 rounded-md border-border text-xl">
                  <SiX />
                </div>
                X / twitter
              </a>
            </li>
          </ul>
          <div className="mt-12 bg-secondary p-4 rounded-lg">
            <div className="flex flex-col items-center gap-8">
              <div className="w-full">
                <h1 className="text-xl sm:text-2xl font-bold dark:text-white text-black">
                  {t('mail.title')}
                </h1>
                <p className="text-sm text-muted-foreground mt-4">{t('mail.subtitle')}</p>
              </div>
              <div className="w-full">
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function WaveText({ segments, active }) {
  let globalIndex = 0;

  return (
    <span className="inline-flex">
      {segments.map((seg, segIdx) => (
        <span key={segIdx} className={seg.className}>
          {seg.text.split("").map((ch) => {
            const i = globalIndex++;
            return (
              <span
                key={i}
                className={active ? "wave-letter" : ""}
                style={{
                  display: "inline-block",
                  animationDelay: active ? `${i * 30}ms` : "0ms",
                  whiteSpace: "pre",
                }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
      <style>{`
        .wave-letter {
          animation: waveOnce 0.5s ease-in-out;
          animation-fill-mode: backwards;
        }
        @keyframes waveOnce {
          0% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
          60% { transform: translateY(1px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </span>
  );
}
