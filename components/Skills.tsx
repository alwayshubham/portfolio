import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" size={50} /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" size={50} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" size={50} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" size={50} /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" size={50} /> },
    { name: 'SQL', icon: <FaDatabase className="text-purple-500" size={50} /> },
    { name: 'TypeScript', icon: <FaReact className="text-blue-500" size={50} /> },
    { name: 'OpenAI', icon: <FaReact className="text-purple-500" size={50} /> },
    { name: 'REST APIs', icon: <FaReact className="text-red-500" size={50} /> },
    { name: 'Debugging', icon: <FaReact className="text-gray-500" size={50} /> },
    { name: 'Problem Solving', icon: <FaReact className="text-pink-500" size={50} /> },
    { name: 'Algorithms', icon: <FaReact className="text-indigo-500" size={50} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-400 to-blue-200 p-10">
      <h1 className="text-4xl font-bold text-black text-center mb-12 drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]">My Skills</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="mb-4 flex justify-center">
              <div className="transition-transform duration-500 group-hover:rotate-12">
                {skill.icon}
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
