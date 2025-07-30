'use client';

import { useEffect, useRef } from "react";
import dynamic from 'next/dynamic';

const About = dynamic(() => import('./about/page'), { ssr: false });
const Projects = dynamic(() => import('./projects/page'), { ssr: false });
const Contact = dynamic(() => import('./contact/page'), { ssr: false });

export default function Home() {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    const timeouts: NodeJS.Timeout[] = [];

    const textLoad = () => {
      timeouts.push(setTimeout(() => {
        textEl.textContent = 'Full-Stack Developer.';
      }, 0));
      // timeouts.push(setTimeout(() => {
      //   textEl.textContent = 'DevOps Engineer.';
      // }, 4000));
    };

    textLoad();
    setInterval(textLoad, 8000);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen p-6 sm:p-10 md:p-16 lg:p-20 font-mono bg-black text-white"
    >
      <main className="flex flex-col gap-8 items-center text-center">
        <div className="container mx-auto mt-12 mb-24 px-4 sm:px-6 lg:px-8">
          <p className="text-3xl sm:text-4xl md:text-5xl mb-4">
            <span role="img" aria-label="wave">👋</span> Hi there, kumusta!
          </p>
          <div className="text-base sm:text-lg md:text-xl leading-relaxed">
            I'm <span className="font-semibold">Janry Agno</span>, a <span className="text-yellow-400">smol-brained</span> junior front-end dev aspiring to be a <br />
            <span className="typing-effect" ref={textRef}></span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4 sm:gap-6">
            <a
              href="https://drive.google.com/file/d/1LHS4ySMR1c4fYpud3YGOwbJIxLc3OCLo/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-stone-800 transition border border-transparent hover:border-white text-sm sm:text-base"
            >
              Check out my Resume
            </a>

            <a
              href="#contact"
              className="bg-stone-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-stone-700 transition border border-transparent hover:border-amber-50 text-sm sm:text-base"
            >
              Contact me
            </a>
          </div>
        </div>

        <section id="about" className="w-full">
          <About />
        </section>

        <section id="projects" className="w-full">
          <Projects />
        </section>

        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
    </div>
  );
}
