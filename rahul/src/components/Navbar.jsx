import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 p-4">
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-blue-400">Rahul<span className="text-white"> Rajeev</span></a>
                
                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
      
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  <a href="#about" className="hover:text-blue-400">About</a>
                  <a href="#projects" className="hover:text-blue-400">Projects</a>
                  <a href="#articles" className="hover:text-blue-400">Articles</a>
                  <a href="#contact" className="hover:text-blue-400">Contact</a>
                </div>
              </div>
      
              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                  <a href="#about" className="block hover:text-blue-400">About</a>
                  <a href="#projects" className="block hover:text-blue-400">Projects</a>
                  <a href="#articles" className="block hover:text-blue-400">Articles</a>
                  <a href="#contact" className="block hover:text-blue-400">Contact</a>
                </div>
              )}
            </nav>
    </div>
  )
}

export default Navbar
