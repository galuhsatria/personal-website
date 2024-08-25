'use client';

import Link from 'next/link';
import { RxMoon, RxSun } from 'react-icons/rx';
import { useTheme } from 'next-themes';
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
   setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className={`w-full bg-background border-b border-border px-4 py-3 fixed top-0 z-50 transition-transform duration-300 ${visible ? '-translate-y-24' : ''}`}>
      <nav className="flex items-center max-w-4xl mx-auto" style={{ justifyContent: 'space-between' }}>
        <div>
          <ul className="hidden sm:flex gap-6">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href} className={`dark:hover:text-white hover:text-black rounded-md transition-all ${pathname === href || (pathname.startsWith('/blog/') && href === '/blog') ? 'dark:text-white text-black' : 'text-zinc-400'}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <Button variant="outline" size="icon" className="bg-transparent" onClick={changeTheme}>
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
