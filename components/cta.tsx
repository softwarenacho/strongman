import { useState } from 'react'
import { SignUpModal } from '../components/signUpModal'

export const CTA = () => {
  const [openSignUpModal, setSignUpOpen] = useState<boolean>(false)
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
      <p className="text-white text-xs pb-1">- Sentadilla libre y profunda</p>
      <p className="text-white text-xs pb-1">- Peso muerto rumano</p>
      <p className="text-white text-xs pb-8">- Press de pecho en banco plano</p>

      <button
        className="w-full mt-4 mb-8 inline-flex justify-center rounded-lg shadow hover:shadow-lg border-2 md:border-4 border-strong-yellow px-8 py-4 bg-strong-blue font-black text-xl text-strong-yellow  hover:bg-strong-blue focus:outline-none md:w-auto"
        onClick={() => setSignUpOpen(true)}
      >
        Quiero Participar
      </button>

      {/* <img
        className="w-48 sm:w-64 md:w-96 cursor-pointer hover:shadow-lg"
        src="/cta.png"
        alt="Quiero participar"
        onClick={() => setSignUpOpen(true)}
      /> */}
      <SignUpModal open={openSignUpModal} setOpen={setSignUpOpen} />
    </section>
  )
}
