


export default function Contact() {
  return (
    <div>
      <div id="contact">
        <div>
          <p className="text-5xl mb-20 text-center">Say Hi! </p>
        </div>

        <p className="text-center text-neutral-800 text-2xl max-w-xl mx-auto leading-relaxed">
          But don’t call me — I’ll panic and cry and just watch my phone ring.
        </p>
        <br /> <br />

        <p className="text-center text-neutral-800 text-2xl max-w-xl mx-auto">
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

          <p className="text-center text-neutral-800 text-2xl max-w-xl mx-auto">
            You can message me here:
          </p>

          <img
            src="https://media.giphy.com/media/17fUif5AsJ7NALx8Uy/giphy.gif"
            alt="Non-clickable GIF"
            className="h-20 w-auto mr-20"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-start gap-10 mb-10">
          {[{ src: '/assets/socials/facebook.svg', label: 'Send me a message', id: 'Janrythegreat' },
          { src: '/assets/socials/instagram.svg', label: "Follow me on IG", id: 'Janrythegreat' },
          { src: '/assets/logos/github-icon.svg', label: 'My Github account', id: 'Janrythegreat' },
          { src: '/assets/socials/gmail.svg', label: 'Send me an email', id: 'Janrythegreat' },
          { src: '/assets/logos/discord-round-color-icon.svg', label: 'Say hi to me in Discord', id: 'Janrythegreat' },
          { src: '/assets/socials/linkedin.svg', label: 'You can reach out to me here', id: 'Janrythegreat' },
          ].map(({ src, label, id }, idx) => (
            <div key={idx} className="flex items-center gap-3 max-w-xs">
              <div className="flex items-center justify-center px-3">
                <img src={src} alt={`${id} Logo`} className="w-10 h-10" />
              </div>
              <div className="socials-label justify-items-start">
              <div className="mb-1">
                <p className="">{label}</p>
                </div>
                <p className="">{id}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}