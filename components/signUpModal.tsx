import { SignUpForm } from './signUpForm'

type SignUpModalProps = {
  open: boolean
  setOpen: any
}

export const SignUpModal = ({ open, setOpen }: SignUpModalProps) => {
  const handleSubmit = (data: any) => {
    console.log('submit', data)
    setOpen(false)
  }
  return open ? (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative bg-white inline-block align-bottom border-4 border-strong-yellow rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <img src="/logos/blue.png" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg text-strong-blue leading-6 font-black">
                  Registrate a StronGames Boca 2022
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Participante / Expectador
                  </p>
                  <SignUpForm competitor={true} onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
