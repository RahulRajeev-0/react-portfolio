import React from 'react'
import image1 from '../assets/img2.jpg';

function Home() {
  return (
    <div>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm <span className="text-blue-400">Rahul Rajeev</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Full Stack Python Developer crafting digital experiences<br/>
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
                Get in touch
              </a>
              <a href="#projects" className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg">
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={image1} 
              alt="Profile" 
              className="rounded-full w-64 h-64 object-cover border-4 border-blue-500"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
