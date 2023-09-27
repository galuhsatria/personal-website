"use client";
import Image from "next/image";
import Link from "next/link";
import { BsFillRocketTakeoffFill, BsGithub } from "react-icons/bs";
import { ProjectsProps } from "../../types";

export default function ProjectItem(props: ProjectsProps) {
  const { id, src, title, description, techs, code, visit } = props;

  return (
    <div className="py-4 px-4 md:w-full rounded-lg border border-border text-card-foreground shadow-sm">
      <div className="">
        <Image src={src} alt={title} width={1440} height={792} className="rounded object-cover aspect-[4/3] h-max transition-all shadow dark:shadow-none" />
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm text-muted-foreground ">{description}</p>
        <ul className="flex gap-3 mt-5">
          {techs.map((tech, index) => (
            <li className="text-2xl" key={index}>
              {tech.icon}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center mt-4">
          <Link href={visit} className="bg-primary text-accent rounded-3xl px-4 py-2  flex gap-2 items-center" target="_blank">
            Visit
            <BsFillRocketTakeoffFill />
          </Link>
          <Link href={code} className="rounded-3xl  border border-border  px-4 py-2 flex items-center gap-2 hover:bg-accent" target="_blank">
            Repository <BsGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
