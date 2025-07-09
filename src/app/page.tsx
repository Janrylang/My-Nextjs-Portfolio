'use client';

import { useEffect, useRef } from "react";
import About from "./about/page";
import Contact from "./contact/page";

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
      timeouts.push(setTimeout(() => {
        textEl.textContent = 'DevOps Engineer.';
      }, 4000));
    };

    textLoad();
    setInterval(textLoad, 8000);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)] bg-gradient-to-b from-black via-gray-750 to-white/60">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
        <div id="home" className="container mt-55 mb-85 mx-85">
          <p className="text-5xl mb-2">
            <span className="wave-hand-emoji">👋</span> Hi there, kumusta!
          </p>
          <div className="typing-container leading-snug">
            I'm
            <span className="dev-name"> Janry Agno</span>, A
            <span className="text-2xl"> smol-brained</span> junior front-end dev aspiring to be a <br />
            <span className="typing-effect" ref={textRef}></span>
          </div>
          <p className="text-5xl mb-8 font-[family-name:var(--font-geist)]"></p>
        </div>

        <div className="about">
          <About />
        </div>

        <div id="projects">
      
        </div>

        <div className="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
