import { useCountdown } from '../hooks/useCountdown'

export const Header = () => {
  const [days, hours, minutes, seconds] = useCountdown('2022/04/20 12:01:00')
  return (
    <header>
      <div className=" bg-strong-yellow p-2 md:p-4 border-b-4 border-strong-blue flex flex-col md:flex-row justify-center items-center md:justify-between">
        <img
          src="/logos/letter_blue.png"
          alt="Strong Games Boca 2022"
          className="max-w-[8rem] mb-2 md:mb-0"
        />
        <div className="text-center mt-2 md:mt-0">
          <h2 className="font-black text-lg md:text-xl text-strong-blue">
            Boca del Rio, Playa Punta Azul
          </h2>
          <h3 className="font-bold text-base md:text-lg text-strong-blue">
            20 de Abril de 2022
          </h3>
        </div>
        <div className="font-light text-gray-500 text-sm md:text-base max-w-logo text-center md:text-right">
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
