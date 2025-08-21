'use client';

import Link from 'next/link';
import { RxMoon, RxSun } from 'react-icons/rx';
import { useTheme } from 'next-themes';
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`w-full mx-auto md:mt-2 max-sm:border-b border-border px-4 py-3 fixed top-0 z-50 transition-transform duration-30 max-sm:bg-background   ${visible ? 'max-sm:-translate-y-24' : ''}`}>
      <nav className="flex items-center max-w-xl md:border border-border mx-auto md:py-2 rounded-full px-4 md:backdrop-blur-md md:bg-white/80 md:dark:bg-black/80 justify-between">
        <div>
          <ul className="hidden sm:flex gap-6">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link
                  href={href}
                  className={`dark:hover:text-white hover:text-black rounded-md hover:transition-colors ${pathname === href || (pathname.startsWith('/blog/') && href === '/blog') ? 'dark:text-white text-black' : 'text-zinc-400'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://www.linkedin.com/in/galuhsatria/" target="_blank" className="px-2 max-sm:hidden">
            <SiLinkedin />
          </Link>
          <Link href="https://github.com/galuhsatria" target="_blank" className="px-2 max-sm:hidden">
            <SiGithub />
          </Link>
          <Button variant="ghost" size="icon" className="bg-transparent" onClick={changeTheme}>
            {mounted ? <>{theme === 'light' ? <RxMoon /> : <RxSun />}</> : <RxSun />}
          </Button>
        </div>
      </nav>
    </header>
  );
}

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
];
