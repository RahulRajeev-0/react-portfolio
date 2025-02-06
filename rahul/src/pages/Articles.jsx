import React from 'react'
import { ExternalLink } from 'lucide-react';

const Articles = () => {
    const articles = [
        {
          title: "From Lines to Magic: A Beginner’s Guide to Running Python Scripts, Cracking the Code of Script Execution",
          platform: "Medium",
          link: "https://medium.com/@rahulrajeev836/from-lines-to-magic-a-beginners-guide-to-running-python-scripts-cracking-the-code-of-script-40769e69f221"
        },
        {
          title: "Demystifying IoT with MQTT and Paho-Mqtt Python: A Beginner's Guide",
          platform: "Medium",
          link: "https://medium.com/@rahulrajeev836/demystifying-iot-with-mqtt-and-paho-mqtt-python-a-beginners-guide-14aa5678f467"
        }
      ];
  return (
    <div>
      <section id="articles" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <a 
                key={index}
                href={article.link}
                className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <span className="text-blue-400">{article.platform}</span>
                  </div>
                  <ExternalLink size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Articles
