


export default function Contact() {
  return (
    <div>
      <div id="contact" className="text-white">
        <div>
          <p className="text-5xl mb-20 text-center">Say Hi! </p>
        </div>

        <p className="text-center text-2xl max-w-xl mx-auto leading-relaxed">
          But don’t call me — I’ll panic and cry and just watch my phone ring.
        </p>
        <br /> <br />

        <p className="text-center text-2xl max-w-xl mx-auto">
          But do message me if you want to get in touch!
        </p>
        <br />
        <br />

        <div className="flex items-center justify-center mb-10">
          <img
            src="https://media.giphy.com/media/17fUif5AsJ7NALx8Uy/giphy.gif"
            alt="Non-clickable GIF"
            className="h-20 w-auto ml-20"
          />

          <p className="text-center text-2xl max-w-xl mx-auto">
            You can message me here:
          </p>

          <img
            src="https://media.giphy.com/media/17fUif5AsJ7NALx8Uy/giphy.gif"
            alt="Non-clickable GIF"
            className="h-20 w-auto mr-20"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-start gap-10 mb-10">
          {[{ src: '/assets/socials/facebook.svg', label: 'Send me a message', link: 'https://www.facebook.com/PapaFrankuuu/' },
          { src: '/assets/socials/instagram.svg', label: "Follow me on IG", link: 'https://www.instagram.com/janryagno/' },
          { src: '/assets/logos/guthib.png', label: 'My Github account', link: 'https://github.com/Janrylang' },
          { src: '/assets/socials/gmail.svg', label: 'Send me an email', link: 'janrydev@gmail.com' },
          { src: '/assets/logos/discord-round-color-icon.svg', label: 'Say hi to me in Discord', link: 'https://discord.com/users/janrythegreat' },
          { src: '/assets/socials/linkedin.svg', label: 'You can reach out to me here', link: 'https://www.linkedin.com/in/agno-janry-861643349/' },
          ].map(({ src, label, link }, idx) => (
            <div key={idx} className="w-110 h-20 bg-[#1f1f1f] rounded-xl flex items-center gap-1 max-w-xs">
              <div className="flex items-center justify-center px-3">
                <img src={src} alt={`${label} Logo`} className="w-10 h-10" />
              </div>
              <div className="socials-label justify-items-start">
                <div className="mb-1">
                  <p className="">{label}</p>
                </div>
                {/* or just make each logos clickable as link for socials */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 text-xs hover:underline break-all"
                >
                  {link}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}