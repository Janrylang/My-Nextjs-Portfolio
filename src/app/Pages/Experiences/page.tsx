import "../Experiences/experiences.css";

export default function About() {
    return (
        <div id="about" className="about-text mt-30 mb-30">
            <div className="mb-30">
                <div className="mb-20">
                    <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl mb-20 text-center">My Experiences</p>
                </div>

                <div className="relative min-h-screen flex flex-col items-center justify-center px-4">

                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 hidden sm:block"></div>

                    <div className="relative w-full max-w-3xl mb-10 flex justify-center sm:justify-start">
                        <div className="left-exp p-4 rounded shadow bg-[#1F1F1F]
                    w-full max-w-xs sm:w-[300px] md:w-[350px] lg:w-[450px]">
                            <p className="mb-5 text-lg sm:text-xl font-semibold text-amber-500">Junior Front-End Developer</p>
                            <p className="mb-1 text-left text-white"><strong>Company:</strong> Seaversity</p>
                            <p className="mb-5 text-left text-white"><strong>Year:</strong> June 2024 – October 2025</p>
                            <p className="text-left text-sm text-white">
                                The same company hired me as their full-time front-end developer employee.
                                I’ve been picking up some back-end basics thanks to my awesome workmates,
                                and I’m still diving into new tech stacks to keep sharpening my skills.
                            </p>
                        </div>
                        <div className="left-exp-arrow hidden sm:block absolute w-0 h-0 border-t-[16px] border-b-[16px] border-r-[20px] 
                    border-t-transparent border-b-transparent border-r-white 
                    left-[46%] -translate-x-[10px] top-7"></div>
                    </div>

                    <div className="relative w-full max-w-3xl mb-10 flex justify-center sm:justify-end">
                        <div className="right-exp p-4 rounded shadow bg-[#1F1F1F]
                    w-full max-w-xs sm:w-[300px] md:w-[350px] lg:w-[450px]">
                            <p className="mb-5 text-lg sm:text-xl font-semibold text-amber-500">Outsourced Developer</p>
                            <p className="mb-1 text-left text-white"><strong>Company:</strong> Seaversity</p>
                            <p className="mb-5 text-left text-white"><strong>Year:</strong> Oct 2023 – Aug 2024</p>
                            <p className="text-left text-sm text-white">
                                Finally landed my first professional job at the same company as front-end developer.
                                I was part of the team that built a smart campus system project using Nuxt, Laravel,
                                and Pinia as state management.
                            </p>
                        </div>
                        <div className="right-exp-arrow hidden sm:block absolute w-0 h-0 border-t-[16px] border-b-[16px] border-l-[20px] 
                    border-t-transparent border-b-transparent border-l-white 
                    left-[52%] translate-x-[10px] top-7"></div>
                    </div>

                    <div className="relative w-full max-w-3xl mb-10 flex justify-center sm:justify-start">
                        <div className="left-exp p-4 rounded shadow bg-[#1F1F1F]
                    w-full max-w-xs sm:w-[300px] md:w-[350px] lg:w-[450px]">
                            <p className="mb-5 text-lg sm:text-xl font-semibold text-amber-500">Front-end Developer Intern</p>
                            <p className="mb-1 text-left text-white"><strong>Company:</strong> Seaversity</p>
                            <p className="mb-5 text-left text-white"><strong>Year:</strong> Feb – Mar 2023</p>
                            <p className="text-left text-sm text-white">
                                I switched to front-end development because my device couldn’t handle game dev at the time,
                                and I ended up enjoying coding a lot more anyway.
                            </p>
                        </div>
                        <div className="left-exp-arrow hidden sm:block absolute w-0 h-0 border-t-[16px] border-b-[16px] border-r-[20px] 
                    border-t-transparent border-b-transparent border-r-white 
                    left-[46%] -translate-x-[10px] top-7"></div>
                    </div>

                    <div className="relative w-full max-w-3xl mb-10 flex justify-center sm:justify-end">
                        <div className="right-exp p-4 rounded shadow bg-[#1F1F1F]
                    w-full max-w-xs sm:w-[300px] md:w-[350px] lg:w-[450px]">
                            <p className="mb-5 text-lg sm:text-xl font-semibold text-amber-500">Game Developer Intern</p>
                            <p className="mb-1 text-left text-white"><strong>Company:</strong> Seaversity</p>
                            <p className="mb-5 text-left text-white"><strong>Year:</strong> February 2022</p>
                            <p className="text-left text-sm text-white">
                                Learned how to use Unity and its fundamentals for UI/UX and game development.
                            </p>
                        </div>
                        <div className="right-exp-arrow hidden sm:block absolute w-0 h-0 border-t-[16px] border-b-[16px] border-l-[20px] 
                    border-t-transparent border-b-transparent border-l-white 
                    left-[52%] translate-x-[10px] top-7"></div>
                    </div>
                </div>
            </div>

            <div className="mb-30 mx-8 sm:mx-5">
                <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl mb-20 text-center">I Use These:</p>

                <div className="gap-6 grid grid-cols-4 sm:grid-cols-5 sm:gap-3 md:grid-cols-6 lg:grid-cols-7
                        justify-items-center">
                    {[
                        { src: '/assets/logos/html-icon.svg', label: 'HTML' },
                        { src: '/assets/logos/vue-js-icon.svg', label: 'Vue' },
                        { src: '/assets/logos/nuxt-js-icon.svg', label: 'Nuxt' },
                        { src: '/assets/logos/nextjs-icon.svg', label: 'Next' },
                        { src: '/assets/logos/php-programming-language-icon.svg', label: 'PHP' },
                        { src: '/assets/logos/laravel-icon.svg', label: 'Laravel' },
                        { src: '/assets/logos/css-icon.svg', label: 'CSS' },
                        { src: '/assets/logos/tailwind-css-icon.svg', label: 'TailwindCSS' },
                        { src: '/assets/logos/Veutify.svg', label: 'Vuetify' },
                        { src: '/assets/logos/javascript-programming-language-icon.svg', label: 'Javascript' },
                        { src: '/assets/logos/typescript-programming-language-icon.svg', label: 'Typescript' },
                        { src: '/assets/logos/visual-studio-code-icon.svg', label: 'VSCode' },
                        { src: '/assets/logos/canva-icon.svg', label: 'Canva' },
                        { src: '/assets/logos/figma-icon.svg', label: 'Figma' },
                        { src: '/assets/logos/github-icon.svg', label: 'GitHub' },
                        { src: '/assets/logos/chatgpt-icon.svg', label: 'ChatGPT' },
                        { src: '/assets/logos/claude-ai-icon.svg', label: 'Claude' },
                        { src: '/assets/logos/discord-round-color-icon.svg', label: 'Discord' },
                    ].map(({ src, label }, index) => (
                        <div key={label} className="flex flex-col items-center gap-2">
                            <div
                                className="tech-box h-14 w-16 rounded-xl flex items-center justify-center
                                    sm:h-16 sm:w-20 md:h-20 md:gap-2 md:w-20 lg:w-24 lg:h-24"
                                style={{ animationDelay: `${index * 2}s` }}
                            >
                                <img src={src} alt={`${label} Logo`} className="w-8 h-8 sm:h-8 sm:w-10 md:h-10 md:w-10 lg:w-12 lg:h-14 object-contain" />
                            </div>
                            <span className="text-xs">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="stats-text grid grid-cols-3">
                {[
                    { value: '2+', label: 'Years of experience' },
                    { value: '200k+', label: 'Lines of code written \n(Numbers for dramatic effect)' },
                    { value: '100+', label: "Trips to the bathroom\nbecause of all the coffee I've drunk" },
                ].map(({ value, label }, idx) => (
                    <div key={idx} className="flex items-center gap-3 sm:mx-3">
                        <div className="w-16 h-14
                                sm:w-20 sm:h-16
                                md:w-24 md:h-16
                                lg:w-20 lg:h-16
                                bg-[#1f1f1f] rounded-xl flex items-center justify-center gap-1 p-3">
                            <p className="text-center whitespace-nowrap text-xs">{value}</p>
                        </div>
                        <p className="text-left whitespace-pre-line text-xs">{label}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}