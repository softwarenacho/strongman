import { SignUpForm } from './signUpForm'

type SignUpModalProps = {
  open: boolean
  setOpen: any
}

export const SignUpModal = ({ open, setOpen }: SignUpModalProps) => {
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

        <div className="relative bg-white inline-block align-bottom border-4 border-strong-blue rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div
              onClick={() => setOpen(false)}
              className="absolute top-2 cursor-pointer right-2 flex justify-center font-bold items-center"
            >
              <img className="w-6 h-6" src="/close.png" alt="Close" />
            </div>
            <div className="sm:flex sm:items-start mt-8">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center rounded-full sm:mx-0 sm:h-16 sm:w-16">
                <img className="h-16 w-16" src="/logos/blue.png" />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg mt-2 text-strong-blue leading-6 font-black">
                  Registrate ahora a StronGames Boca 2022
                </h3>
                <>
                  <SignUpForm setOpen={setOpen} />
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
