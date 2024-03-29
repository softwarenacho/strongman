export const Sponsors = () => {
  const sponsors = [
    {
      src: 'volovanes.jpeg',
      title: 'Volovanes Fitness',
      link: 'https://www.facebook.com/volovanesfitness',
    },
    {
      src: 'nonstop.jpeg',
      title: 'Non Stop FC',
      link: 'https://www.facebook.com/nonstop.fc',
    },
    {
      src: 'boca.jpeg',
      title: 'Gobierno de Boca del Rio',
      link: 'https://www.bocadelrio.gob.mx/',
    },
  ]
  return (
    <section className="px-4 py-8 pt-0 flex flex-col justify-center items-center bg-black">
      <h3 className="text-white text-center font-bold mb-16 text-xl sm:text-2xl md:text-4xl">
        Patrocinadores
      </h3>
      <div className="flex justify-around">
        {sponsors.map(sponsor => (
          <a
            href={sponsor.link}
            key={sponsor.title}
            className="flex flex-col justify-center items-center text-strong-blue font-bold text-center mr-4 last:mr-0"
          >
            <img
              className="w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-4 sm:mx-8 md:mx-16 mb-4"
              src={`/sponsors/${sponsor.src}`}
              alt={sponsor.title}
            />
            {sponsor.title}
          </a>
        ))}
      </div>
    </section>
  )
}
