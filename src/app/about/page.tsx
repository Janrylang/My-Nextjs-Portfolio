

    export default function About() {
        return (
            <div id="about" className="about-text mt-30 mb-30">

                <div className="mb-30">
                    <div className="mb-20">
                        <p className="text-4xl text-center">My Experiences</p>
                    </div>

                    <div className="relative min-h-screen flex flex-col items-center justify-center">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

                        <div className="relative w-full max-w-3xl mb-10 flex justify-start">
                            <div className="left-exp bg-white p-4 rounded shadow w-[350px]">
                                <p className="mb-5 text-xl font-semibold text-black"> Game Dev Intern</p>
                                <p className="mb-1 text-left text-gray-700"> <strong>Company:</strong> Seaversity </p>
                                <p className="mb-5 text-left text-gray-700"> <strong>Year:</strong> February 2022 </p>
                                <p className="text-left text-sm text-gray-700"> Learned how to use Unity and its fundamentals for UI/UX and game development. </p>
                            </div>
                            <div className="left-exp-arrow absolute w-0 h-0 border-t-[16px] border-b-[16px] border-r-[20px] border-t-transparent border-b-transparent border-r-white left-91.5 -translate-x-[10px] top-7"></div>
                        </div>

                        <div className="relative w-full max-w-3xl mb-10 flex justify-end">
                            <div className="right-exp bg-white p-4 rounded shadow w-[350px]">
                                <p className="mb-5 text-xl font-semibold text-black"> Front-end Dev Intern</p>
                                <p className="mb-1 text-left text-gray-700"> <strong>Company:</strong> Seaversity </p>
                                <p className="mb-5 text-left text-gray-700"> <strong>Year:</strong> February - March 2023 </p>
                                <p className="text-left text-sm text-gray-700">I switched to front-end development because my device couldn’t handle game dev at the time, and I ended up enjoying coding a lot more anyway. </p>
                            </div>
                            <div className="right-exp-arrow absolute w-0 h-0 border-t-[16px] border-b-[16px] border-l-[20px] border-t-transparent border-b-transparent border-l-white left-95.5 translate-x-[10px] top-7"></div>
                        </div>

                        <div className="relative w-full max-w-3xl mb-10 flex justify-start">
                            <div className="left-exp bg-white p-4 rounded shadow w-[350px]">
                            <p className="mb-5 text-xl font-semibold text-black"> Outsourced Developer </p>
                                <p className="mb-1 text-left text-gray-700"> <strong>Company:</strong> Seaversity </p>
                                <p className="mb-5 text-left text-gray-700"> <strong>Year:</strong> October 2023 - August 2024 </p>
                                <p className="text-left text-sm text-gray-700"> Finally landed my first professional job at the same company as front-end developer. I was part of the team that built a smart campus system project using Nuxt, Laravel, and Pinia as state management. </p>
                            </div>
                            <div className="left-exp-arrow absolute w-0 h-0 border-t-[16px] border-b-[16px] border-r-[20px] border-t-transparent border-b-transparent border-r-white left-91.5 -translate-x-[10px] top-7"></div>
                        </div>

                        <div className="relative w-full max-w-3xl mb-10 flex justify-end">
                            <div className="right-exp bg-white p-4 rounded shadow w-[350px]">
                            <p className="mb-5 text-xl font-semibold text-black"> Full-Time Front-End Developer</p>
                                <p className="mb-1 text-left text-gray-700"> <strong>Company:</strong> Seaversity </p>
                                <p className="mb-5 text-left text-gray-700"> <strong>Year:</strong> June 2024 - Present </p>
                                <p className="text-left text-sm text-gray-700"> The same company hired me as their full-time front-end developer employee.  I’ve been picking up some back-end basics thanks to my awesome workmates, and I’m still diving into new tech stacks to keep sharpening my skills.</p>
                            </div>
                            <div className="right-exp-arrow absolute w-0 h-0 border-t-[16px] border-b-[16px] border-l-[20px] border-t-transparent border-b-transparent border-l-white left-95.5 translate-x-[10px] top-7"></div>
                        </div>
                    </div>

                </div>

                <div className="mb-30">
                    <p className="text-4xl mb-20 text-center">I Use These:</p>

                    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-items-center">
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
                            { src: '/assets/logos/pictogrammers.svg', label: 'Pictogrammers' },
                            { src: '/assets/logos/github-icon.svg', label: 'GitHub' },
                            { src: '/assets/logos/chatgpt-icon.svg', label: 'ChatGPT' },
                            { src: '/assets/logos/claude-ai-icon.svg', label: 'Claude' },
                            { src: '/assets/logos/brave-browser-icon.svg', label: 'Brave' },
                            { src: '/assets/logos/discord-round-color-icon.svg', label: 'Discord' },
                        ].map(({ src, label }, index) => (
                            <div key={label} className="flex flex-col items-center gap-2">
                                <div
                                    className="tech-box w-20 h-20 bg-[#1f1f1f] rounded-xl flex items-center justify-center"
                                    style={{ animationDelay: `${index * 2}s` }}
                                >
                                    <img src={src} alt={`${label} Logo`} className="w-10 h-10 object-contain" />
                                </div>
                                <span className="text-xs">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="stats-text grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-6 mb-90">
                    {[
                        { value: '2+', label: 'Years of experience' },
                        { value: '200k+', label: 'Lines of code written' },
                        { value: '100+', label: "Trips to the bathroom\nbecause of all the coffee I've drunk" },
                    ].map(({ value, label }, idx) => (
                        <div key={idx} className="flex items-center gap-3 max-w-xs">
                            <div className="min-w-[48px] h-12 bg-[#1f1f1f] rounded-2xl flex items-center justify-center px-3">
                                <p className="whitespace-nowrap text-xs">{value}</p>
                            </div>
                            <p className="text-left whitespace-pre-line text-xs">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

        )
    }