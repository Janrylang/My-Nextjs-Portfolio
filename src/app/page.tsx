'use client';

import { useEffect, useRef } from "react";
import dynamic from 'next/dynamic';

const About = dynamic(() => import('./Pages/Experiences/page'), { ssr: false });
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
      className="main-wrapper font-mono bg-black text-white"
    >
      <main className="body flex flex-col gap-8 items-center text-center">
        <div className="container mx-auto mt-12 mb-24 px-4 sm:px-6 lg:px-8">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4">
            <span className="wave-hand-emoji" role="img" aria-label="wave">👋</span> Hi there, kumusta!
          </p>
          <div className="typing-container text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-relaxed">
            My name is
            <span className="dev-name text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold"> Janry Agno</span>, a
            <span className="text-yellow-400"> smol-brained </span> junior front-end dev aspiring to be a
            <br />
            <span className="typing-effect" ref={textRef}></span>
          </div>

          <div className="flex flex-row sm:flex-row justify-center items-center mt-20 mx-8 gap-3 sm:gap-6">
            <a
              href="https://drive.google.com/file/d/1wTf9DvoK79w4-iTBK8UOdnW2F5mzd7ny/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-700 text-white px-3 py-3.5 sm:px-4 sm:py-3 rounded-2xl shadow-md transition border border-transparent hover:bg-stone-800 hover:border-white text-xs sm:text-sm w-60 sm:w-52 text-center"
            >
              Check out my Resume
            </a>

            <a
              href="#contact"
              className="bg-stone-800 text-white px-1 py-3 sm:px-4 sm:py-3.5 rounded-2xl shadow-md transition border border-transparent hover:bg-stone-700 hover:border-amber-50 text-xs sm:text-base w-28 sm:w-40 text-center"
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
