"use client";

import useLoaded from "@/hooks/useLoaded";
import ProjectItem from "./ui/ProjectItem";

export function FeaturedProject({ projects }: any) {
  const isLoaded = useLoaded();
  const latestProjects = projects.slice(-3).reverse();

  return (
    <section className={`${isLoaded && "fade-in-start"}`}>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 list-none">
        {latestProjects.slice(-3).map(({ id, src, title, description, techs, code, visit }: any, index: number) => (
          <li key={index} data-fade={index + 1}>
            <ProjectItem id={id} src={src} title={title} description={description} techs={techs} code={code} visit={visit} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AllProjects({ projects }: any) {
  const isLoaded = useLoaded();

  const allProjects = projects.slice().reverse();

  return (
    <section className={`${isLoaded && "fade-in-start"}`}>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 list-none">
        {allProjects.map(({ id, src, title, description, techs, code, visit }: any, index: number) => (
          <li key={index} data-fade={index + 1}>
            <ProjectItem id={id} src={src} title={title} description={description} techs={techs} code={code} visit={visit} />
          </li>
        ))}
      </ul>
    </section>
  );
}
