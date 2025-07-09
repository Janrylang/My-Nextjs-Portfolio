


export default function About() {
    return (
        <div>
            <div id="about" className="mt-30 mb-30">
                <p className="container text-5xl mb-20 text-center">I Use These:</p>

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
                            <span className="text-xs text-white">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-6 mb-90">
                {[
                    { value: '2+', label: 'Years of experience' },
                    { value: '200k+', label: 'Lines of code written' },
                    { value: '100+', label: "Trips to the bathroom\nbecause of all the coffee I've drunk" },
                ].map(({ value, label }, idx) => (
                    <div key={idx} className="flex items-center gap-3 max-w-xs">
                        <div className="min-w-[48px] h-12 bg-[#1f1f1f] rounded-2xl flex items-center justify-center px-3">
                            <p className="text-white whitespace-nowrap text-xs">{value}</p>
                        </div>
                        <p className="text-white text-left whitespace-pre-line text-xs">{label}</p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}