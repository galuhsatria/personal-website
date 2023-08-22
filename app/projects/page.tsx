"use client";
import useLoaded from "@/hooks/useLoaded";
import { AllProjects } from "../components/utils/ProjectContent";
import { projects } from "../data/projects";
import Head from "next/head";

export default function Projects() {
  const isLoaded = useLoaded();
  return (
    <main>
      <section className={`my-28 max-w-4xl mx-auto px-4 ${isLoaded && "fade-in-start"}`}>
        <h1 className="text-4xl font-bold" data-fade="1">
          Projects
        </h1>
        <AllProjects projects={projects} />
      </section>
    </main>
  );
}
