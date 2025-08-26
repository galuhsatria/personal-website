/* eslint-disable @next/next/no-img-element */
'use client';
import useLoaded from '@/hooks/useLoaded';
import { useTranslations } from 'next-intl';
import { SiGithub, SiInstagram, SiLinkedin, SiNextdotjs, SiReact, SiSpotify, SiTailwindcss, SiX, SiLaravel, SiInertia } from 'react-icons/si';
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

  const t = useTranslations('about');

  return (
    <main>
      <section className={`mt-28 mb-20 max-w-4xl mx-auto max-lg:px-4 ${isLoaded && 'fade-in-start'}`}>
        <h1 data-fade="0">
          <span className="font-bold text-4xl text-black dark:text-white">{t('title')}</span>
        </h1>
        <div className="flex flex-col gap-5 mt-6">
          <div data-fade="1">
            <p className="dark:text-white text-black">{t('description.paragraph1')}</p>
            <p className="dark:text-white text-black">{t('description.paragraph2')}</p>
            <p className="dark:text-white text-black">{t('description.paragraph3')}</p>
            <div>
              <h2 className="text-xl my-6 font-bold text-black dark:text-white">{t('favoriteTechStack')}</h2>
              <div className="flex gap-4">
                <SiNextdotjs className="text-4xl text-black dark:text-white" />
                <SiReact className="text-4xl text-black dark:text-white" />
                <SiTailwindcss className="text-4xl text-black dark:text-white" />
                <SiLaravel className="text-4xl text-black dark:text-white" />
                <SiInertia className="text-4xl text-black dark:text-white" />
              </div>
            </div>
          </div>
          <div data-fade="2">
            <h2 className="text-xl my-6 font-bold text-black dark:text-white">{t('contact')}</h2>
            <ul className="flex flex-wrap gap-6">
              <li className="hover:text-blue-500 transition-colors text-black dark:text-white">
                <a href="https://github.com/galuhsatria" target="_balank" className=" text-black dark:text-white flex gap-2 items-center">
                  <div className="border p-1 rounded-md border-border text-xl">
                    <SiGithub />
                  </div>
                  Github
                </a>
              </li>
              <li className="hover:text-blue-500 transition-colors text-black dark:text-white">
                <a href="https://www.linkedin.com/in/galuhsatria/" target="_balank" className="text-black dark:text-white flex gap-2 items-center">
                  <div className="border p-1 rounded-md border-border text-xl">
                    <SiLinkedin />
                  </div>
                  LinkedIn
                </a>
              </li>
              <li className="hover:text-blue-500 transition-colors text-black dark:text-white">
                <a href="https://www.instagram.com/galuhsatria._/" target="_balank" className="text-black dark:text-white flex gap-2 items-center">
                  <div className="border p-1 rounded-md border-border text-xl">
                    <SiInstagram />
                  </div>
                  Instagram
                </a>
              </li>
              <li className="hover:text-blue-500 transition-colors text-black dark:text-white">
                <a href="https://twitter.com/galuhsatria___" target="_balank" className="text-black dark:text-white flex gap-2 items-center">
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
          <p className="font-bold text-xl mb-1 text-black dark:text-white">{t('spotify')}</p>
          <p className="text-sm text-gray-400">{t('spotifySubtitle')}</p>

          <div className="mt-5">
            <a
              target="_blank"
              rel="noopener noreferer"
              href={data?.isPlaying ? data.songUrl : 'https://open.spotify.com/user/31wok5dqph7tf7rl2vvholhpbpp4'}
              className="relative flex w-72 items-center space-x-4 rounded-md border border-border p-5 transition-shadow hover:shadow-md bg-[#1E1F1E]"
            >
              <div className="w-16">{data?.isPlaying ? <img className="w-16 shadow-sm rounded-md" src={data?.albumImageUrl} alt={data?.album} /> : <SiSpotify size={64} color={'#1ED760'} />}</div>

              <div className="flex-1">
                <p className="component text-white font-bold">{data?.isPlaying ? data.title : t('listening')}</p>
                <p className="font-dark text-white text-xs">{data?.isPlaying ? data.artist : 'Spotify'}</p>
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
