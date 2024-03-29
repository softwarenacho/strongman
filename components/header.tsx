import { useCountdown } from '../hooks/useCountdown'

export const Header = () => {
  const [days, hours, minutes, seconds] = useCountdown('2022/04/16 12:01:00')
  return (
    <header>
      <div className=" bg-black p-2 md:p-4 border-b-4 border-strong-blue flex flex-col md:flex-row justify-center items-center md:justify-between">
        <a href="/">
          <img
            src="/logos/letter_white.png"
            alt="Strong Games Boca 2022"
            className="max-w-[8rem] mb-2 md:mb-0"
          />
        </a>
        <div className="text-center mt-2 md:mt-0">
          <h2 className="font-black text-lg md:text-xl text-strong-blue">
            Boca del Rio, Playa Punta Azul
          </h2>
          <h3 className="font-bold text-base md:text-lg text-white">
            16 de Abril de 2022
          </h3>
        </div>
        <div className="font-light text-white text-xs md:text-base max-w-logo text-center md:text-right">
          {days + hours + minutes + seconds <= 0 ? (
            'Espera información del siguiente evento'
          ) : (
            <p className="flex md:flex-col">
              <span className="mr-1 md:mr-0">Inicia en</span>
              <span>
                {days}d {hours}h {minutes}m {seconds}s
              </span>
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
