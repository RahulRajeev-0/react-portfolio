import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Menu,
  X,
  InstagramIcon,
} from "lucide-react";
import Resume from "../assets/resume.pdf";
const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-blue-400"
                >
                  <Mail className="mr-2" /> rahulrajeev836@gmail.com
                </a>
                <a
                  href="https://github.com/RahulRajeev-0"
                  className="flex items-center text-gray-300 hover:text-blue-400"
                >
                  <Github className="mr-2" /> github.com/RahulRajeev-0
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-rajeev-291a03276/"
                  className="flex items-center text-gray-300 hover:text-blue-400"
                >
                  <Linkedin className="mr-2" /> linkedin.com/in/RahulRajeev
                </a>
                <a
                  href="https://www.instagram.com/____rahu____/"
                  className="flex items-center text-gray-300 hover:text-blue-400"
                >
                  <InstagramIcon className="mr-2" /> ____rahu____
                </a>
                <a
                  href={Resume}
                  download
                  className="flex items-center text-gray-300 hover:text-blue-400"
                >
                  <FileText className="mr-2" /> Download Resume
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
