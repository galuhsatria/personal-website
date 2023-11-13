"use client";

import Link from "next/link";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

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
    <nav className={`fixed bottom-0 sm:hidden bg-background border-t border-border p-3 z-50 w-full mx-auto transition-transform duration-300 ${visible && "translate-y-24"}`}>
      <div className="max-w-4xl mx-auto">
        <ul className="flex justify-between">
          {links.map(({ href, label, icon }) => (
            <li key={`${href}${label}`}>
              <Link href={href} className={`flex flex-col items-center  ${pathname === href || (pathname.startsWith('/blog/') && href === '/blog') ? "text-accent-foreground" : "text-muted-foreground"}`}>
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const links = [
  {
    label: "Home",
    href: "/",
    icon: <AiFillHome />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <BsFillRocketTakeoffFill />,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: <GoBook />,
  },
  {
    label: "About",
    href: "/about",
    icon: <MdAccountCircle />,
  },
];
