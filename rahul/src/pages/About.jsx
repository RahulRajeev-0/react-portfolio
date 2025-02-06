import React from 'react'

function About() {
  return (
    <div>
      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed">
              
              You know that moment when you have to make a life-changing decision? Well, I had mine right after higher secondary school. While everyone was heading to college, I chose to follow my passion for software development. Looking back, it was both terrifying and exciting!<br/>
              I became my own teacher - devouring online resources, building projects from scratch, and learning through real-world experience. Through an amazing opportunity that was part internship, part mentorship, I got to work alongside senior developers who showed me the ropes. They taught me something you can't learn from textbooks: how to tackle real-world problems and navigate actual work environments.
              </p>
              {/* <div className="mt-8 grid grid-cols-2 gap-4">
                <img 
                   src={Image1}
                  alt="Working" 
                  className="rounded-lg"
                />
                <img 
                  src="/api/placeholder/300/200" 
                  alt="Coding" 
                  className="rounded-lg"
                />
              </div> */}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "FastAPI", "React", "PostgreSQL", "Redis", "Docker", "AWS", "Mqtt", "Flask", "Tailwind CSS", "Git", "MongoDB"].map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
