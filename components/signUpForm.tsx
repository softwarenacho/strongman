import { useForm } from 'react-hook-form'

export const SignUpForm = ({
  competitor,
  onSubmit,
}: {
  competitor: boolean
  onSubmit: (data: any) => void
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const mandatoryField = (
    <span className="w-full text-red-600">Este campo es obligatorio</span>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
      <div className="flex flex-wrap justify-around px-0 py-2">
        <span className="text-lg text-strong-blue font-bold">
          Haz probado los volovanes de Volovanes Fitness?
        </span>
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
        {errors.volovanTried && mandatoryField}
      </div>
      <label className="flex flex-col px-0 py-2">
        <span className="text-lg text-strong-blue font-bold mb-4">
          Cómo conociste los Volovanes Fitness?
        </span>
        <textarea
          className="border-2 border-strong-blue"
          {...register('volovanMedium')}
        />
      </label>
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
        <label className="flex flex-col px-0 py-2 mb-4">
          <span className="text-lg text-strong-blue font-bold">Gimnasio</span>
          <input
            type="text"
            className="border-0 border-b-2 border-strong-blue"
            {...register('gym')}
          />
        </label>
        <div className="flex px-0 py-2 justify-between mb-4">
          <label className="flex flex-col w-40 mr-8">
            <span className="text-lg text-strong-blue font-bold">Peso</span>
            <input
              type="number"
              className="border-0 border-b-2 border-strong-blue"
              {...register('weight')}
            />
          </label>
          <label className="flex flex-col w-40">
            <span className="text-lg text-strong-blue font-bold">Altura</span>
            <input
              type="number"
              className="border-0 border-b-2 border-strong-blue"
              {...register('height')}
            />
          </label>
        </div>
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
  )
}
