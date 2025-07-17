import Education from '@/components/Education';
import Skills from '@/components/Skills';
import React from 'react';
import Projects from './project/page';

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-r from-gray-700 via-purple-200 to-blue-200 ">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full">
          {/* Left: Text Content */}
          <div className="text-center md:text-left space-y-4 flex-1">
            <h1 className="text-center text-5xl font-bold text-gray-900 drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]">Welcome</h1>
            <p className=" text-center text-4xl text-indigo-900 font-semibold drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]">I am a Full-Stack Developer</p>
            <h2 className="text-md text-gray-900 leading-relaxed drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]">
              Highly motivated full-stack developer skilled in building scalable applications
              using <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>React</strong>.<br />
              Experienced in developing REST APIs, working in Agile teams, and integrating AI
              solutions using OpenAI APIs.<br />
              Quick learner with strong problem-solving algorithms and debugging skills.
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
