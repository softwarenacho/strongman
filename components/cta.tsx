import Router from 'next/router'
import { useState } from 'react'
import { SignUpModal } from '../components/signUpModal'

export const CTA = () => {
  const [openSignUpModal, setSignUpOpen] = useState<boolean>(false)
  const goAdmin = () => {
    Router.push('/admin')
  }

  return (
    <section className="px-8 md:px-16 pt-4 flex flex-col justify-center items-center text-center bg-black">
      <p className="text-white md:text-xl font-bold pb-4">
        StronGames Boca 2022
      </p>
      <p className="text-white text-xs md:text-base text-center pb-4">
        Es la primer competencia abierta al público para poner a prueba la
        fuerza máxima de cada atleta basada en 3 ejercicios fundamentales para
        el levantamiento de potencia
      </p>
      <div className="flex flex-col md:flex-row justify-between max-w-[md] items-base md:items-center">
        <p className="text-white text-xs flex flex-col justify-center items-center mr-0 mb-4 md:mb-0 md:mr-8">
          <img
            src="/sports/deadlift.png"
            className="w-16 h-8 md:w-32 md:h-16"
            onClick={goAdmin}
          />
          Peso muerto rumano
        </p>
        <p className="text-white text-xs flex flex-col justify-center items-center mr-0 mb-4 md:mb-0 md:mr-8">
          <img src="/sports/squat.png" className="w-16 h-8 md:w-32 md:h-16" />
          Sentadilla libre y profunda
        </p>
        <p className="text-white text-xs flex flex-col justify-center items-center">
          <img src="/sports/press.png" className="w-8 h-8 md:w-16 md:h-16" />
          Press de pecho <br /> en banco plano
        </p>
      </div>

      <button
        className="w-full mt-8 mb-16 inline-flex justify-center rounded-lg shadow hover:shadow-lg border-2 md:border-4 border-strong-yellow px-8 py-4 bg-strong-blue font-black text-xl text-strong-yellow  hover:bg-strong-blue focus:outline-none md:w-auto"
        onClick={() => setSignUpOpen(true)}
      >
        Quiero Participar
      </button>
      <SignUpModal open={openSignUpModal} setOpen={setSignUpOpen} />
    </section>
  )
}
