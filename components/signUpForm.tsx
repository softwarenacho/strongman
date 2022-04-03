import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const SignUpForm = ({ isParticipant }: { isParticipant: boolean }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const mandatoryField = (
    <span className="w-full text-red-600">Este campo es obligatorio</span>
  )

  const ErrorMsg = ({
    closeToast,
    messages,
  }: {
    closeToast: any
    messages: any
  }) => {
    return (
      <div>
        <div
          onClick={closeToast}
          className="absolute top-2 cursor-pointer right-2 flex justify-center font-bold items-center"
        >
          <img className="w-4 h-4" src="/close.png" alt="Close" />
        </div>
        <p className="font-bold text-red-600">Error al guardar tu registro.</p>
        {Object.keys(messages).map(key => (
          <p className="text-sm">{messages[key]}</p>
        ))}
      </div>
    )
  }

  const SuccessMsg = ({
    closeToast,
    message,
  }: {
    closeToast: any
    message: string
  }) => {
    return (
      <div>
        <div
          onClick={closeToast}
          className="absolute top-2 cursor-pointer right-2 flex justify-center font-bold items-center"
        >
          <img className="w-4 h-4" src="/close.png" alt="Close" />
        </div>
        <p className="font-bold text-strong-blue text-sm">{message}</p>
      </div>
    )
  }

  const onSubmit = async (data: any) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    const rawResponse = await fetch('http://localhost:3001/users', options)
    const response = await rawResponse.json()
    if (response?.status === 200) {
      toast.success(
        ({ closeToast }) =>
          SuccessMsg({ closeToast, message: response?.message }),
        {
          position: 'bottom-center',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        },
      )
    } else {
      toast.error(
        ({ closeToast }) =>
          ErrorMsg({ closeToast, messages: response?.messages }),
        {
          position: 'bottom-center',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        },
      )
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="flex flex-col flex-wrap justify-around px-0 py-2">
          <input
            type="hidden"
            value={isParticipant.toString()}
            {...register('participant')}
          />
          <span className="text-lg text-strong-blue font-bold">
            Haz probado los Volovanes Fitness?
          </span>
          <div className="w-full flex justify-around">
            <label className="px-0 py-2 font-bold text-lg mr-4">
              Sí
              <input
                type="radio"
                className="ml-2"
                value="yes"
                {...register('volovanTried', { required: true })}
              />
            </label>
            <label className="px-0 py-2 text-lg">
              No
              <input
                type="radio"
                className="ml-2"
                value="no"
                {...register('volovanTried', { required: true })}
              />
            </label>
          </div>
          {errors.volovanTried && mandatoryField}
        </div>
        <div className="flex flex-col justify-center px-0 py-4">
          <label className="flex flex-col px-0 py-2 mb-4">
            <span className="text-lg text-strong-blue font-bold">Nombre</span>
            <input
              type="text"
              className={`border-0 border-b-2 ${
                errors.name ? 'border-red-600' : 'border-strong-blue'
              } `}
              {...register('name', { required: true })}
            />
            {errors.name && mandatoryField}
          </label>
          <label className="flex flex-col px-0 py-2 mb-4">
            <span className="text-lg text-strong-blue font-bold">Telefono</span>
            <input
              type="tel"
              className={`border-0 border-b-2 ${
                errors.phone ? 'border-red-600' : 'border-strong-blue'
              } `}
              {...register('phone', { required: true })}
            />
            {errors.phone && mandatoryField}
          </label>
          <label className="flex flex-col px-0 py-2 mb-4">
            <span className="text-lg text-strong-blue font-bold">
              Código Postal
            </span>

            <input
              type="tel"
              className={`border-0 border-b-2 ${
                errors.zip ? 'border-red-600' : 'border-strong-blue'
              } `}
              {...register('zip', { required: true })}
            />
            {errors.zip && mandatoryField}
          </label>
          <label className="flex flex-col px-0 py-2 mb-4">
            <span className="text-lg text-strong-blue font-bold">Colonia</span>

            <input
              type="text"
              className={`border-0 border-b-2 ${
                errors.neighborhood ? 'border-red-600' : 'border-strong-blue'
              } `}
              {...register('neighborhood', { required: true })}
            />
            {errors.neighborhood && mandatoryField}
          </label>
          {isParticipant && (
            <>
              <label className="flex flex-col px-0 py-2 mb-4">
                <span className="text-lg text-strong-blue font-bold">
                  Gimnasio
                </span>
                <input
                  type="text"
                  className="border-0 border-b-2 border-strong-blue"
                  {...register('gym')}
                />
              </label>
              <div className="flex flex-col sm:flex-row px-0 py-2 justify-between mb-4">
                <label className="flex flex-col w-full md:w-40 mr-8">
                  <span className="text-lg text-strong-blue font-bold">
                    Peso (kg)
                  </span>
                  <input
                    type="number"
                    className="border-0 border-b-2 border-strong-blue"
                    {...register('weight')}
                  />
                </label>
                <label className="flex flex-col w-full md:w-40 mt-8 md:mt-0">
                  <span className="text-lg text-strong-blue font-bold">
                    Altura (cms)
                  </span>
                  <input
                    type="number"
                    className="border-0 border-b-2 border-strong-blue"
                    {...register('height')}
                  />
                </label>
              </div>
            </>
          )}
          <label className="flex flex-col px-0 py-2 mb-4">
            <span className="text-lg text-strong-blue font-bold">
              Compartenos el link a tus redes sociales
            </span>
            <input
              type="text"
              className="border-0 border-b-2 border-strong-blue"
              {...register('social')}
            />
          </label>
          <label className="flex flex-col px-0 py-2 mb-4">
            <span className="text-lg text-strong-blue font-bold mb-4">
              Cómo te enteraste de StrongMan Boca 2022?
            </span>
            <textarea
              className="border-2 border-strong-blue"
              {...register('medium')}
            />
          </label>
        </div>
        <input
          type="submit"
          value="REGISTRARME"
          className="w-full mt-4 inline-flex justify-center rounded-lg shadow hover:shadow-lg border-4 border-strong-blue px-8 py-4 bg-strong-yellow font-black text-xl text-strong-blue hover:text-white hover:bg-strong-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-strong-yellow md:w-auto"
          onClick={() => console.log}
        />
      </form>
      <ToastContainer />
    </>
  )
}
