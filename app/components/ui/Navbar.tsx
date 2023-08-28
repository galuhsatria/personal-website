"use client";

import Link from "next/link";
import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

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
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className={`w-full backdrop-blur-xl border-b px-4 py-3 fixed top-0 z-50 transition-all duration-300 ${visible ? "top-[-75px] " : ""}`}>
      <nav className="flex items-center max-w-4xl mx-auto" style={{ justifyContent: "space-between" }}>
        <div>
          <ul className="hidden sm:flex gap-6">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href} className={`dark:hover:text-white  hover:text-black rounded-md transition-all ${pathname === href ? "dark:text-white text-black" : "text-zinc-400"} `}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-bold text-2xl sm:hidden logo">G</p>
        </div>
        <div className="">
          <Button variant="outline" size="icon" className="bg-transparent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {mounted ? <>{theme === "light" ? <RxMoon /> : <RxSun />}</> : <RxSun />}
          </Button>
        </div>
      </nav>
    </header>
  );
}

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];
