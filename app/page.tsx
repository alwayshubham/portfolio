import Education from '@/components/Education';
import Skills from '@/components/Skills';
import React from 'react';
import Projects from './project/page';

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-md">
        {/* Left: Text Content */}
        <div className="text-center md:text-left space-y-4 flex-1">
          <h1 className="text-4xl font-bold text-gray-800">Welcome</h1>
          <p className="text-xl text-indigo-900 font-semibold">I am a Full-Stack Developer</p>
          <h2 className="text-md text-gray-700 leading-relaxed">
            Highly motivated full-stack developer skilled in building scalable applications
            using <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>React</strong>.<br />
            Experienced in developing REST APIs, working in Agile teams, and integrating AI
            solutions using OpenAI APIs.<br />
            Quick learner with strong problem-solving and debugging skills.
          </h2>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="profile.jpg" // Replace with your profile image path
            alt="Your Profile"
            className="w-100 h-100 rounded-full object-cover shadow-lg border-amber-200 border-4"
          />
        </div>
        
      </div>
      
    </div>
    <div>
          <Skills />
          <Education />
          <Projects />
        </div>
    </div>
  );
}
