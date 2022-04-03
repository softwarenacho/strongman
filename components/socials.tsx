export const Socials = () => {
  const socialNetworks = [
    {
      src: 'facebook',
      url: 'https://www.facebook.com/Strongamesmx-104540758887055',
    },
    { src: 'instagram', url: 'https://www.instagram.com/strongamesmx/' },
    // { src: 'tiktok', url: '' },
    // { src: 'twitter', url: 'https://twitter.com/CanaCovarrubias' },
    {
      src: 'youtube',
      url: 'https://www.youtube.com/channel/UC4Kmv9rzQEvDa0A3jQz3_2g',
    },
  ]
  return (
    <section className="bg-black px-4 py-8 border-t-4 border-strong-blue flex flex-col justify-center items-center">
      <span className="text-white text-center mb-8 text-lg sm:text-xl md:text-2xl">
        Siguenos en nuestras redes sociales para mantenerte informado
      </span>
      <div className="flex justify-around items-center md:max-w-[48rem]">
        {socialNetworks.map(social => (
          <a
            href={social.url}
            key={social.url}
            className="flex justify-center items-center w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 mr-2 md:mr-4 last:mr-0 rounded-full transition-colors shadow cursor-pointer hover:shadow-xl"
          >
            <img
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
              src={`/socials/${social.src}.png`}
              alt={social.src}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
