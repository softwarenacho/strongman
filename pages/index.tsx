import type { NextPage } from 'next'
import Head from 'next/head'
import { CTA } from '../components/cta'
import { Header } from '../components/header'
import { Prizes } from '../components/prizes'
import { Socials } from '../components/socials'
import { Sponsors } from '../components/sponsors'
import { VideoCover } from '../components/videoCover'

const Home: NextPage = () => {
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
      <Header />
      <main className="relative">
        <VideoCover />
        <CTA />
        <Prizes />
        <Socials />
        <Sponsors />
      </main>

      {/* <footer className="p-4 flex items-center justify-between md:justify-around bg-black border-t-4 border-strong-blue">
        <div className="flex flex-col">
          <img
            className="w-10 h-10 mb-1"
            src="/logos/white.png"
            alt="Strong Games Boca"
          />
          <img
            className="h-5 w-10"
            src="/logos/letter_white.png"
            alt="Strong Games Boca"
          />
        </div>
        <div className="flex flex-col text-right">
          <a className="text-xs text-white" href="">
            ¿Qué es Strong Games?
          </a>
          <a className="text-xs text-white" href="">
            ¿Dónde es Strong Games?
          </a>
          <a className="text-xs text-white" href="">
            ¿Cómo participar en Strong Games?
          </a>
        </div>
      </footer> */}
    </>
  )
}

export default Home
