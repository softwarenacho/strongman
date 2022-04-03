import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const SignUpForm = ({ setOpen }: { setOpen: any }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isParticipant, setIsParticipant] = useState<boolean>(true)

  const mandatoryField = (
    <span className="w-full text-red-600">Este campo es obligatorio</span>
  )

  const ErrorMsg = (messages: any) => {
    return (
      <div>
        <p className="font-bold text-red-600">Error al guardar tu registro.</p>
        {Object.keys(messages).map(key => (
          <p className="text-sm">{messages[key]}</p>
        ))}
      </div>
    )
  }

  const SuccessMsg = (message: string) => {
    return (
      <div>
        <p className="font-bold text-strong-blue text-sm">{message}</p>
      </div>
    )
  }

  const sleep = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  const onSubmit = async (data: any) => {
    data.participant = data.participant === 'yes'
    data.volovanTried = data.volovanTried === 'yes'
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    if (!isLoading) {
      setIsLoading(true)
      try {
        const endpoint = window.location.href.includes('localhost')
          ? 'http://localhost:3001/users'
          : 'https://strongames-api.herokuapp.com/users'
        const rawResponse = await fetch(endpoint, options)
        const response = await rawResponse.json()
        if (response?.status === 200) {
          setIsLoading(false)
          toast.success(SuccessMsg(response?.message), {
            position: 'bottom-center',
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          })
          await sleep(2000)
          setOpen(false)
        } else {
          setIsLoading(false)
          toast.error(ErrorMsg(response?.messages), {
            position: 'bottom-center',
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          })
        }
      } catch (e) {
        setIsLoading(false)
        toast.error('Error en la aplicación', {
          position: 'bottom-center',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        })
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="w-full py-8 text-strong-blue text-center">
          <span
            onClick={() => setIsParticipant(true)}
            className={`w-1/2 py-4 px-4 sm:px-8 cursor-pointer border-strong-blue ${
              isParticipant
                ? 'border-2 border-strong-blue  border-b-0 font-bold'
                : 'border-b-2 border-gray-200 text-gray-400'
            } `}
          >
            Participante
          </span>
          <span
            onClick={() => setIsParticipant(false)}
            className={`w-1/2 py-4 px-4 sm:px-8 cursor-pointer  ${
              !isParticipant
                ? 'border-2 border-strong-blue border-b-0 font-bold'
                : 'border-b-2 border-gray-200 text-gray-400'
            } `}
          >
            Espectador
          </span>
          <input
            type="hidden"
            value={isParticipant ? 'yes' : 'no'}
            {...register('participant')}
          />
        </div>
        <div className="flex flex-col flex-wrap justify-around px-0 py-2">
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
          value={isLoading ? 'Enviando...' : 'Registrarme'}
          disabled={isLoading}
          className={`w-full mt-4 inline-flex justify-center rounded-lg shadow hover:shadow-lg border-4 border-strong-blue px-8 py-4 ${
            isLoading
              ? 'bg-strong-blue text-white cursor-wait'
              : 'bg-strong-yellow text-strong-blue cursor-pointer'
          } font-black text-xl  hover:text-white hover:bg-strong-blue focus:outline-none md:w-auto`}
        />
      </form>
      <ToastContainer />
    </>
  )
}
