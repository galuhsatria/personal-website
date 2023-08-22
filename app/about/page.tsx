"use client";
import useLoaded from "@/hooks/useLoaded";
import Head from "next/head";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {
  const dob = new Date("2003-12-02");
  const currentDate = new Date();

  const calculateAge = (dob: any, currentDate: any) => {
    const diffInMilliseconds = currentDate - dob;
    const ageDate = new Date(diffInMilliseconds);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(dob, currentDate);

  const isLoaded = useLoaded();

  return (
    <main>
      <section className={`my-28 max-w-4xl mx-auto px-4 ${isLoaded && "fade-in-start"}`}>
        <h1 data-fade="1" className="font-bold text-4xl">
          About
        </h1>
        <div className="flex flex-col gap-5 mt-6" data-fade="2">
          <p>Hi, i&apos;m Galuh Satria You can call me Galuh, i&apos;m {age} years old. I started learning web development in December 2021, i learn web development from youtube, dicoding course, especially frontend development.</p>
          <p>Now Im studying at a university in Lombok, Nusa Tengara Barat majoring in computer sience from 2021, and I follow several communities on my campus such as the Google Developer Student Club</p>
          <p> I enjoy learning something new and getting feedback to make myself better and improve, and curently learning NextJs.</p>
          <div>
            <h2 className="text-2xl my-4 font-bold">Current Favorite Tech Stack</h2>
            <div className="flex gap-4">
              <SiNextdotjs className="text-4xl" />
              <SiReact className="text-4xl" />
              <SiTailwindcss className="text-4xl" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl my-6 font-bold" data-fade="3">
              Contact
            </h2>
            <ul className="list-disc ml-5 flex flex-col gap-2" data-fade="4">
              <li>
                Github:{" "}
                <a href="https://github.com/galuhsatria" className="text-blue-500 border-b">
                  galuhsatria
                </a>
              </li>
              <li>
                LinkInd:{" "}
                <a href="https://linkedin/in/galuh-satria-1002484210" className="text-blue-500 border-b">
                  Galuh Satria
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a href="https://www.instagram.com/galuhsatria._/" className="text-blue-500 border-b">
                  galuhsatria._
                </a>
              </li>
              <li>
                X / twitter:{" "}
                <a href="https://twitter.com/galuhsatria___" className="text-blue-500 border-b">
                  galuhsatria___
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
