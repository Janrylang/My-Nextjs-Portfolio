'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src="/assets/logos/Thick-logo.png"
          alt="Logo"
          className="h-10 w-auto portfolio-logo"
        />

        {/* Desktop Nav Links */}
        <ol className="hidden lg:flex space-x-8 text-white text-lg">
          <li>
            <a href="#home" className="hover:text-yellow-600">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-600">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-600">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-600">Contact</a>
          </li>
        </ol>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t shadow-md">
          <ol className="flex flex-col space-y-4 px-6 py-4 text-white font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ol>
        </div>
      )}
    </nav>
  );
}
