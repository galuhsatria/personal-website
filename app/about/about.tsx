/* eslint-disable @next/next/no-img-element */
'use client';
import useLoaded from '@/hooks/useLoaded';
import { SiGithub, SiInstagram, SiLinkedin, SiNextdotjs, SiReact, SiSpotify, SiTailwindcss, SiX } from 'react-icons/si';
import useSWR from 'swr';

export default function About() {
  const dob = new Date('2003-12-02');
  const currentDate = new Date();

  const calculateAge = (dob: any, currentDate: any) => {
    const diffInMilliseconds = currentDate - dob;
    const ageDate = new Date(diffInMilliseconds);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(dob, currentDate);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR('/api/spotify', fetcher);

  const isLoaded = useLoaded();

  return (
    <main>
      <section className={`my-28 max-w-4xl mx-auto max-md:px-4 ${isLoaded && 'fade-in-start'}`}>
        <h1 data-fade="0" className="font-bold text-4xl ">
          About Me
        </h1>
        <div className="flex flex-col gap-5 mt-6">
          <div data-fade="1">
            <p>Hi, i&apos;m Galuh Satria You can call me Galuh, i&apos;m {age} years old. I started learning web development in December 2021, i learn web development from youtube, especially frontend development.</p>
            <p>Now Im studying at a university in Lombok, Nusa Tengara Barat majoring in computer sience from 2021, and I follow several communities on my campus such as the Google Developer Student Club</p>
            <p> I enjoy learning something new and getting feedback to make myself better and improve.</p>
            <div>
              <h2 className="text-xl my-6 font-bold">Current Favorite Tech Stack</h2>
              <div className="flex gap-4">
                <SiNextdotjs className="text-4xl" />
                <SiReact className="text-4xl" />
                <SiTailwindcss className="text-4xl" />
              </div>
            </div>
          </div>
          <div data-fade="2">
            <h2 className="text-xl my-6 font-bold">Contact</h2>
            <ul className="flex flex-wrap gap-6">
              <li className='hover:text-blue-500 transition-colors'>
                <a href="https://github.com/galuhsatria" target="_balank" className="flex gap-2 items-center">
                  <div className="border p-1 rounded-md border-border text-xl">
                    <SiGithub />
                  </div>
                  Github
                </a>
              </li>
              <li className='hover:text-blue-500 transition-colors'>
                <a href="https://www.linkedin.com/in/galuhsatria/" target="_balank" className="flex gap-2 items-center">
                  <div className="border p-1 rounded-md border-border text-xl">
                    <SiLinkedin />
                  </div>
                  LinkedIn
                </a>
              </li>
              <li className='hover:text-blue-500 transition-colors'>
                <a href="https://www.instagram.com/galuhsatria._/" target="_balank" className="flex gap-2 items-center">
                  <div className="border p-1 rounded-md border-border text-xl">
                    <SiInstagram />
                  </div>
                  Instagram
                </a>
              </li>
              <li className='hover:text-blue-500 transition-colors'>
                <a href="https://twitter.com/galuhsatria___" target="_balank" className="flex gap-2 items-center">
                  <div className="border p-1 rounded-md border-border text-xl">
                    <SiX />
                  </div>
                  X / twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10" data-fade="3">
          <p className="font-bold text-xl mb-1">Currently playing on my Spotify</p>
          <p className="text-sm text-gray-400">I really like listening to music 😅</p>

          <div className="mt-5">
            <a
              target="_blank"
              rel="noopener noreferer"
              href={data?.isPlaying ? data.songUrl : 'https://open.spotify.com/user/31wok5dqph7tf7rl2vvholhpbpp4'}
              className="relative flex w-72 items-center space-x-4 rounded-md border border-border p-5 transition-shadow hover:shadow-md bg-[#1E1F1E]"
            >
              <div className="w-16">{data?.isPlaying ? <img className="w-16 shadow-sm rounded-md" src={data?.albumImageUrl} alt={data?.album} /> : <SiSpotify size={64} color={'#1ED760'} />}</div>

              <div className="flex-1">
                <p className="component font-bold">{data?.isPlaying ? data.title : 'Not Listening'}</p>
                <p className="font-dark text-xs">{data?.isPlaying ? data.artist : 'Spotify'}</p>
              </div>
              <div className="absolute bottom-1.5 right-1.5">
                <SiSpotify size={20} color={'#1ED760'} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
