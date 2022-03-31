import { useState } from 'react'
import { SignUpModal } from '../components/signUpModal'

export const CTA = () => {
  const [openSignUpModal, setSignUpOpen] = useState<boolean>(false)
  return (
    <section className="py-16 px-8 md:px-16 md:py-32 flex justify-center items-center">
      <img
        className="w-48 sm:w-64 md:w-96 cursor-pointer hover:shadow-lg"
        src="/cta.png"
        alt="Quiero participar"
        onClick={() => setSignUpOpen(true)}
      />
      <SignUpModal open={openSignUpModal} setOpen={setSignUpOpen} />
    </section>
  )
}
