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
        <div className="p-4 border-b border-2 border-black flex justify-between">
          <img
            src="/letter_logo.png"
            alt="Strong Games Boca 2022"
            className="max-w-logo"
          />
          <p>
            <h2>Boca del Rio, Playa Punta Azul</h2>
            <h3>20 de Abril de 2022</h3>
          </p>
          <div className="font-light max-w-logo text-right">
            {days + hours + minutes + seconds <= 0 ? (
              'Espera información del siguiente evento'
            ) : (
              <>
                <p>Inicia en</p>
                <p>
                  {days}d {hours}h {minutes}m {seconds}s
                </p>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="h-video overflow-hidden relative flex justify-center items-center">
          <video
            id="background-video"
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
            className="w-full max-h-[32rem] object-cover absolute -z-10"
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
        <section className="px-8 py-16 flex justify-center items-center">
          <img className="w-3/5" src="/cta.png" alt="Quiero participar" />
        </section>
        <section>Premios</section>
      </main>

      <footer>Logo + Social + Links + CTA</footer>
    </>
  )
}

export default Home
