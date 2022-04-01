export const Prizes = () => {
  const bigBox = 'w-30 h-40 sm:w-40 sm:h-64 md:w-64 md:h-96'
  const smallBox = 'w-20 h-30 sm:w-32 sm:h-48 md:w-48 md:h-64'
  const prizes = [
    { src: '/second.png', alt: 'Second', class: smallBox },
    { src: '/first.png', alt: 'First', class: bigBox },
    { src: '/third.png', alt: 'Third', class: smallBox },
  ]

  return (
    <section className="bg-black px-4 pb-8 pt-4 flex flex-col justify-center items-center">
      <div className="flex justify-around items-center md:max-w-[40rem] mb-4">
        {prizes.map(prize => (
          <img
            className={`${prize.class} sm:mr-4`}
            src={`/prizes/${prize.src}`}
            alt={prize.alt}
            key={prize.alt}
          />
        ))}
      </div>
    </section>
  )
}
