import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: 'Job seekers',
      description: 'Created a dynamic based file storage system with secure user authentication Enabled file upload, download, delete, and folder creation using REST APIs and React UI.Implemented back-end logic using Nodejs and MySQL.',
      tech: ['React','Nextjs','Node.js','PostgresQL','PeismaORM', 'OpenAI', 'TailwindCSS'],
    },
    {
      title: 'E-commerce Website',
      description: 'Built bricks e-commerce website using Reactjs, Nodej and clerk authentication. Enabled buy a product by card. Designed clean UI using React. Added contextual contact replies based on user query.',
      tech: ['Nextjs', 'React', 'Node.js','TailendCSS', 'ShadcnUI'],
    },
  ];
  const experienced = [ 
    {
      title: 'Full Stack Developer',
      company: 'Aarna Tech Xperts.',
      duration: 'Nov24-apr25',
      description: 'Developed a dynamic sports website using Next.js 15, TypeScript, and PostgreSQL. Implemented features like user registration, form submissions with file uploads, and data visualization create APIs .',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-pink-400 p-10">
      <h1 className="text-4xl font-bold text-white text-center mb-8">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectList.map((project, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold text-white text-center mb-8">Experience</h1>
{/* Experience data */}
      <div className="grid gap-8 max-w-5xl mx-auto">
        {experienced.map((expr, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{expr.title}</h2>
            <p className="mt-2 text-gray-600">{expr.description}</p>
            <p className="mt-2 text-gray-600">{expr.company} - {expr.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
