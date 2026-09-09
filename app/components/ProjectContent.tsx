'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { VscVerifiedFilled } from 'react-icons/vsc';

export function Projects({ projects }: any) {
  const allProjects = projects.slice().reverse();
  const t = useTranslations('projects');

  return (
    <section className="py-4">
      <ul className="flex flex-col list-none">
        {allProjects.map(({ id, src, title, year, description, techs, code, visit }: any, index: number) => (
          <li key={index} className="border-b border-border last:border-b-0 my-2">
            <div className="flex items-start gap-2">
              <Image src="/avatar.png" alt="profil-picture" width={20} height={20} className="h-8 w-8 rounded-full object-cover" unoptimized />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm mb-2 flex gap-1 items-center">
                  galuhsatria <VscVerifiedFilled className="text-blue-500 text-lg"/><span className="text-muted-foreground font-light text-xs">{year}</span>
                </p>

                <p className='text-sm'>{t(description)}</p>
                <p className='text-sm my-3 font-semibold'>Tech Stack:</p>
                <ul className="flex gap-4 mt-2">
                  {techs.map((tech: any, index: number) => (
                    <li className="text-2xl cursor-pointer" key={index}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span>{tech.icon}</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>

                <Link href={visit} target="_blank" className="flex flex-col gap-2 border border-border rounded-lg overflow-hidden w-full sm:w-80 max-md:max-w- mb-3 mt-4">
                  <Image src={src} alt={title} width={800} height={500} className="w-full h-auto object-cover" unoptimized />

                  <div className="p-2 min-w-0">
                    <div className="flex gap-2 items-center min-w-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(visit)}&sz=64`}
                        alt=""
                        className="h-4 w-4 rounded shrink-0"
                      />

                      <span className="text-sm text-muted-foreground truncate min-w-0 flex-1">
                        {visit}
                      </span>
                    </div>

                    <p className="font-semibold text-base mt-1">{title}</p>
                  </div>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
