'use client';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { BsFillRocketTakeoffFill, BsGithub } from 'react-icons/bs';
import { ProjectsProps } from '../../types';
import ImageView from './ImageView';
import { useTranslations } from 'next-intl';

export default function ProjectItem(props: ProjectsProps) {
  const { id, src, title, description, techs, code, visit } = props;
  const t = useTranslations('projects');

  return (
    <div className="py-4 px-4 md:w-full rounded-lg border border-border text-card-foreground shadow-sm">
      <div className="">
        <ImageView src={src} alt={title} width={1440} height={792} className="rounded object-cover aspect-[4/3] h-max transition-all shadow dark:shadow-none" />
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm text-muted-foreground ">{t(description)}</p>
        <ul className="flex gap-5 mt-5">
          {techs.map((tech, index) => (
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
        <div className="flex  gap-4 items-center mt-3">
          <Link href={visit} className="bg-primary text-sm  text-accent rounded-3xl px-4 py-2  flex gap-2 items-center" target="_blank">
            {t('visit')}
            <BsFillRocketTakeoffFill />
          </Link>
          {code && (
            <Link href={code} className="rounded-3xl text-sm  border border-border px-4 py-2 flex items-center gap-2 hover:bg-accent" target="_blank">
              Repository <BsGithub />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
