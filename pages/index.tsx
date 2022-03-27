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
        <div className="container">
          <h2>
            Strongman Boca 2022
            <p>
              {days + hours + minutes + seconds <= 0
                ? 'Espera información del siguiente evento'
                : `Inicia en ${days}d ${hours}h ${minutes}m ${seconds}s`}
            </p>
          </h2>
          <button>Quiero participar</button>
        </div>
      </header>

      <main>
        <section>Logo + BG animado</section>
        <section>Qué es? + Dónde es? + Premios</section>
        <section>Registrate + Formulario</section>
        <section>Patrocinadores + Logos</section>
        <section>Carrusel</section>
        <section>Otros</section>
      </main>

      <footer>Logo + Social + Links + CTA</footer>
    </>
  )
}

export default Home
