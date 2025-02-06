import React from 'react'
import { ExternalLink } from 'lucide-react';

const Projects = () => {

    const projects = [
        {
          title: "Cellular E-Commerce Platform",
          description: "E-Commerce Platform for selling smart phones, build with Django (server side rendering) and have features like wishlist, coupon, discount, online payment integration with Razorpay",
          link: "https://github.com/RahulRajeev-0/Cellular",
          tags: ["Python", "Django", "PostgreSQL", "Bootstrap", ]
        },
        {
          title: "TeamStudy Real-time Chat App",
          description: "WebSocket-based chat application build with Django Rest framework and React. Works like Slack with real time one on one and group chat, video and audio call.",
          link: "https://github.com/RahulRajeev-0/TeamStudy",
          tags: ["Python", "WebSocket", "Redis", "React", "Django Rest Framework", "Django Channels", "PostgreSQL"]
        },
        {
          title: "Jarvis AI Assistant with Smart Home Control",
          description: "AI Assistant build with OpenAi Assistant API, who have the ability to control smart home and also other features",
          link: "https://github.com/RahulRajeev-0/assistant-api-openai",
          tags: ["Python", "OpenAi Assistant API", "paho-mqtt", "IoT", "Azure AI Speech", "pvporcupine"]
        }
      ];
    
      

  return (
    <div>
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-500 bg-opacity-20 text-blue-100 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
