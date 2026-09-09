'use client';

import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { Globe, Moon, Sun, Dot } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsGithub, BsLinkedin, BsBriefcaseFill } from 'react-icons/bs';
import { GrDocumentUser } from 'react-icons/gr';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { toast } from 'sonner';

import { Button } from './button';

type Language = 'en' | 'id';

const languageNames: Record<Language, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const locale = useLocale() as Language;
  const pathname = usePathname();
  const t = useTranslations('navigation');

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { label: t('experience'), href: '/' },
    { label: t('projects'), href: '/projects' },
    { label: t('blog'), href: '/blog' },
    { label: t('about'), href: '/about' },
  ];

  const isDark = mounted && theme === 'dark';

  const handleThemeToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    toast.success(`Tema diubah ke ${newTheme === 'dark' ? 'Gelap' : 'Terang'}`);
  };

  const handleLanguageToggle = () => {
    const newLocale: Language = locale === 'en' ? 'id' : 'en';
    document.cookie = `locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    toast.success(`Bahasa diubah ke ${languageNames[newLocale]}`);
    router.refresh();
  };

  return (
    <header className="mt-2 w-full max-w-full overflow-x-hidden">
      <div className="flex justify-end w-full mb-3 gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLanguageToggle}
          className="gap-1.5 rounded-full focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-muted-foreground/30"
          title={languageNames[locale]}
        >
          <Globe className="h-4 w-4 shrink-0" />
          <span className="text-xs font-medium">{locale.toUpperCase()}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleThemeToggle}
          className="py-2 px-2.5 rounded-full focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-muted-foreground/30"
          title={isDark ? 'Gelap' : 'Terang'}
        >
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex justify-between items-start mt-4 gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg sm:text-xl font-bold truncate">Galuh Satria</h3>
          <p className="truncate text-sm sm:text-base">Fullstack Developer, Lombok</p>
          <p className="text-muted-foreground text-xs sm:text-sm mt-2 max-w-full sm:w-72">
            Turning ideas into complete digital experiences.
          </p>
        </div>
        <div className="relative aspect-square w-16 sm:w-24 shrink-0">
          <Image
            src="/avatar.png"
            alt="profil-picture"
            width={100}
            height={100}
            className="aspect-square w-full rounded-full object-cover"
          />
          <VscVerifiedFilled className="absolute bottom-1 left-1 text-base sm:text-lg text-blue-500" />
        </div>
      </div>

      <div>
        <p className="text-blue-500 mt-3 px-2.5 py-1 rounded-full flex gap-2 items-center border border-boder dark:border-zinc-700 bg-secondary text-xs sm:text-sm w-max whitespace-nowrap">
          <BsBriefcaseFill className="shrink-0" /> {t('status')}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center min-w-0 flex-1 overflow-hidden whitespace-nowrap">
          <a href="/" className="text-muted-foreground hover:text-foreground text-xs md:text-sm hover:underline truncate">
            {t('experiences')}
          </a>
          <Dot className="text-xs text-muted-foreground shrink-0" />
          <a href="/projects" className="text-muted-foreground hover:text-foreground text-xs md:text-sm hover:underline truncate">
            {projects.length} {t('featuredProjects')}
          </a>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <Link href="https://github.com/galuhsatria" className="flex flex-row items-center gap-[6px] text-foreground hover:text-primary transition-colors group w-max" target="_blank" title="GitHub">
            <BsGithub className="group-hover:text-black dark:group-hover:text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/galuhsatria/" className="flex flex-row items-center gap-[6px] text-foreground hover:text-primary transition-colors group w-max" target="_blank" title="LinkedIn">
            <BsLinkedin className="group-hover:text-blue-500" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1pn2sWJ-EJF9P_CT6F7XcGxd1nqzUTyJI/view?usp=sharing"
            target="_blank"
            className="flex flex-row items-center gap-[6px] text-foreground hover:text-primary transition-colors group w-max"
            title="Resume"
          >
            <GrDocumentUser className="group-hover:text-green-500" />
          </Link>
        </div>
      </div>

      <div className="flex w-full items-center justify-between mt-6 gap-3">
        <Link href="mailto:galuhsatriadev@gmail.com" className="text-center w-full bg-foreground text-background px-4 py-1 rounded-md whitespace-nowrap">
          Say hi
        </Link>
        <Link href="https://drive.google.com/file/d/1pn2sWJ-EJF9P_CT6F7XcGxd1nqzUTyJI/view?usp=sharing" target="_blank" className="text-center w-full border border-secondary px-4 py-1 rounded-md whitespace-nowrap">
          Resume
        </Link>
      </div>

      <nav className="w-full border-b border-border mt-4">
        <div className="grid grid-cols-4">
          {links.map((tab) => {
            const isActive = tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'relative flex h-14 items-center justify-center px-1',
                  'text-xs sm:text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis',
                  'transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {tab.label}
                {isActive && <span className="absolute inset-x-0 bottom-0 h-px bg-foreground" />}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
