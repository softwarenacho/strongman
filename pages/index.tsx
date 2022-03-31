import type { NextPage } from 'next'
import Head from 'next/head'
import { useCountdown } from '../hooks/useCountdown'

const Home: NextPage = () => {
  const [days, hours, minutes, seconds] = useCountdown('2022/04/16 12:01:00')

  return (
    <>
      <Head>
        <title>Strongman Boca 2022</title>
        <meta
          name="description"
          content="Participa en el evento Strongman Boca 2022 en Punta Azul en la ciudad de Veracruz"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className=" bg-strong-yellow p-2 md:p-4 border-b-4 border-strong-blue flex flex-col md:flex-row justify-center items-center md:justify-between">
          <img
            src="/letter_logo.png"
            alt="Strong Games Boca 2022"
            className="max-w-[8rem] mb-2 sm:mb-0"
          />
          <p className="text-center">
            <h2 className="font-black text-strong-blue">
              Boca del Rio, Playa Punta Azul
            </h2>
            <h3 className="font-bold text-strong-blue">20 de Abril de 2022</h3>
          </p>
          <div className="font-light max-w-logo text-center md:text-right">
            {days + hours + minutes + seconds <= 0 ? (
              'Espera información del siguiente evento'
            ) : (
              <p className="flex">
                <span className="mr-1 md:mr-0">Inicia en</span>
                <span>
                  {days}d {hours}h {minutes}m {seconds}s
                </span>
              </p>
            )}
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="h-[10rem] md:h-[32rem] overflow-hidden relative flex justify-center items-center border-b-4 border-strong-blue">
          <video
            id="background-video"
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
            className="w-full max-h-[10rem] md:max-h-[32rem] object-cover absolute -z-10"
          >
            <source
              src="https://static.videezy.com/system/resources/previews/000/020/188/original/hanteln1.mp4"
              type="video/mp4"
            />
          </video>
          <img
            src="/complete_logo.png"
            className="w-1/4"
            alt="Logo Strong Games Boca 2022"
          />
        </section>
        <section className="py-8 px-4 md:px-8 md:py-16 flex justify-center items-center">
          <img
            className="w-3/5 cursor-pointer hover:shadow-lg"
            src="/cta.png"
            alt="Quiero participar"
          />
        </section>
        <section className="p-4">
          <h3 className="text-strong-blue text-center font-bold mb-4">
            Premios
          </h3>
          <div className="flex justify-around items-center">
            <img className="w-22 h-32" src="/second.png" alt="Segundo" />
            <img className="w-32 h-42" src="/first.png" alt="Primero" />
            <img className="w-22 h-32" src="/third.png" alt="Tercero" />
          </div>
        </section>
        <section className="bg-strong-blue px-4 py-8 border-4 border-strong-yellow">
          <h3 className="text-strong-yellow text-center font-bold mb-8">
            Siguenos en nuestras redes sociales:
          </h3>
          <div className="flex justify-around">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-strong-yellow shadow cursor-pointer hover:shadow-xl">
              <img className="w-8 h-8" src="/facebook.png" alt="Facebook" />
            </div>
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-strong-yellow shadow cursor-pointer hover:shadow-xl">
              <img className="w-8 h-8" src="/instagram.png" alt="Instagram" />
            </div>
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-strong-yellow shadow cursor-pointer hover:shadow-xl">
              <img className="w-8 h-8" src="/tiktok.png" alt="Tik Tok" />
            </div>
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-strong-yellow shadow cursor-pointer hover:shadow-xl">
              <img className="w-8 h-8" src="/youtube.png" alt="Youtube" />
            </div>
          </div>
        </section>
        <section className="px-4 py-8">
          <h3 className="text-strong-blue text-center font-bold mb-4">
            Patrocinadores
          </h3>
          <div className="flex justify-around">
            <img className="w-20 h-20" src="/nonstop.jpeg" alt="Non Stop FC" />
            <img
              className="w-20 h-20"
              src="/volovanes.jpeg"
              alt="Volovanes Fitness"
            />
            <img className="w-20 h-20" src="/boca.jpeg" alt="Boca del Rio" />
          </div>
        </section>
      </main>

      <footer className="p-4 flex justify-between bg-strong-blue border-t-4 border-strong-yellow">
        <div className="flex flex-col">
          <img
            className="w-10 h-10 mb-1"
            src="/white_logo.png"
            alt="Strong Games Boca"
          />
          <img
            className="h-5 w-10"
            src="/white_letter_logo.png"
            alt="Strong Games Boca"
          />
        </div>
        <div className="flex flex-col text-right">
          <a className="text-xs text-white" href="">
            Qué es Strong Games?
          </a>
          <a className="text-xs text-white" href="">
            Dónde es Strong Games?
          </a>
          <a className="text-xs text-white" href="">
            Cómo participar en Strong Games?
          </a>
        </div>
      </footer>
    </>
  )
}

export default Home
