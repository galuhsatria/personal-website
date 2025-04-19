import React from 'react';
import { FaBriefcase, FaGraduationCap, FaUsers, FaTrophy } from 'react-icons/fa';


export default function Experience() {
  const events = [
    {
      date: 'April 2025',
      title: 'PROXOCORIS International Competion 2025',
      description: 'Winnner of the web development competition in the best functionality category',
      icon: <FaTrophy />,
    },
    {
      date: 'July 2024 - August 2024',
      title: 'Frontend Developer Intern at DISKOMINFOTIK NTB',
      description: 'Developing UI for web GIS to show area of blankspot in NTB and creating UI for chatbot',
      icon: <FaBriefcase />,
    },
    {
      date: 'Agustus 2023 - Desember 2023',
      title: 'SIB Kampus Merdeka Frontend web and Backend at Dicoding',
      description: 'Learn about web frontend and backend development through classes provided by dicoding and develop a project called Kasa Talk (website-based Sasak language dictionary)',
      icon: <FaGraduationCap />,
    },
    {
      date: 'September 2023 - September 2024',
      title: 'PC Bumigora (organization)',
      description: 'Participate as a committee in every event held. I also developed a website for the organization, I work as a fullstack in developing the website',
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="relative border-l border-gray-200">
        {events.map((event, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-8 h-8 rounded-full bg-black text-white dark:text-black dark:bg-white flex items-center justify-center -left-4">
              {event.icon}
            </div>
            <div className="ml-8">
              <time className="block text-xs text-muted-foreground">{event.date}</time>
              <h3 className="font-semibold dark:text-white text-black">{event.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
