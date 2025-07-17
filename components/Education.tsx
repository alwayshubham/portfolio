import React from 'react';

export default function Education() {
  const educationList = [
    {
      degree: "Master's of Computer Applications",
      institution: "Babu Banarasi Das University",
      year: "2023 - 2025",
      description: "Focused on full-stack development, data structures, algorithms, and machine learning.",
    },
    {
      degree: "Bachelor's of Computer Applications",
      institution: "Babu Banarasi Das University",
      year: "2020 - 2023",
      description: "Specialized in web development, database management, and software engineering principles.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-300 to-pink-200 p-10">
      <h1 className="text-4xl font-bold text-black  text-center mb-12 drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]">Education</h1>

      <div className="max-w-4xl mx-auto space-y-10 flex flex-col font-bold">
        {educationList.map((edu, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 relative"
          >
            <div className="absolute -left-3 top-6 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white"></div>

            <h2 className="text-xl font-semibold text-gray-800">{edu.degree}</h2>
            <p className="text-sm text-gray-600">{edu.institution} &middot; {edu.year}</p>
            <p className="mt-2 text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
