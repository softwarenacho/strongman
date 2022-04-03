import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Header } from '../../components/header'

const Admin: NextPage = () => {
  const [users, setUsers] = useState([])
  const [auth, setAuth] = useState(false)

  const getUsers = async () => {
    const endpoint = window.location.href.includes('localhost')
      ? 'http://localhost:3001/users'
      : 'https://strongames-api.herokuapp.com/users'
    const rawResponse = await fetch(endpoint)
    const response = await rawResponse.json()
    if (response.status === 200) {
      setUsers(response?.users)
    }
  }

  const checkPassword = (data: any) => {
    const pwd = data.target.value
    if (pwd === '066669') {
      setAuth(true)
    }
  }

  const formatDate = (date: string) => {
    const newDate = new Date(date)
    return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
  }

  const UsersTable = (users: any) => {
    return (
      <div className="w-full overflow-scroll p-4 md:p-8 flex flex-col">
        <h1 className="font-bold text-2xl text-strong-blue mb-8">
          Usuarios registrados:
        </h1>
        <table className="border-2 border-strong-blue">
          <thead className="p-2 border-b-2 border-strong-blue">
            <tr>
              <th className="p-2 border-r-2 border-strong-blue ">ID</th>
              <th className="p-2 border-r-2 border-strong-blue ">
                ¿Volovanes Fitness?
              </th>
              <th className="p-2 border-r-2 border-strong-blue ">Nombre</th>
              <th className="p-2 border-r-2 border-strong-blue ">Telefono</th>
              <th className="p-2 border-r-2 border-strong-blue ">CP</th>
              <th className="p-2 border-r-2 border-strong-blue ">Colonia</th>
              <th className="p-2 border-r-2 border-strong-blue ">
                ¿Participante?
              </th>
              <th className="p-2 border-r-2 border-strong-blue ">Gimnasio</th>
              <th className="p-2 border-r-2 border-strong-blue ">Peso</th>
              <th className="p-2 border-r-2 border-strong-blue ">Altura</th>
              <th className="p-2 border-r-2 border-strong-blue ">Medio</th>
              <th className="p-2 border-r-2 border-strong-blue ">Social</th>
              <th className="p-2 border-r-2 border-strong-blue ">Creado</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => (
              <tr
                key={`${user.phone}-${index}`}
                className={`text-center border-b-2 ${
                  index % 2 === 0 && 'bg-gray-300'
                }`}
              >
                <td className="p-2">{user.id}</td>
                <td
                  className={`p-2 ${
                    user.volovanTried ? 'text-strong-blue' : 'text-red-600'
                  }`}
                >
                  {user.volovanTried ? 'sí' : 'no'}
                </td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.phone}</td>
                <td className="p-2">{user.zip}</td>
                <td className="p-2">{user.neighborhood}</td>
                <td
                  className={`p-2 ${
                    user.volovanTried ? 'text-strong-blue' : 'text-red-600'
                  }`}
                >
                  {user.participant ? 'sí' : 'no'}
                </td>
                <td className="p-2">{user.gym}</td>
                <td className="p-2">{user.weight}</td>
                <td className="p-2">{user.height}</td>
                <td className="p-2">{user.medium}</td>
                <td className="p-2">{user.social}</td>
                <td className="p-2 min-w-[7rem]">
                  {formatDate(user.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Header />
      {auth && UsersTable(users)}
      {!auth && (
        <div className="w-full h-96 flex flex-col justify-center items-center">
          <h1 className="text-strong-blue text-xl font-bold mb-8">
            Zona privada, acceso restringido
          </h1>
          <input
            type="password"
            name="password"
            onChange={data => checkPassword(data)}
          />
        </div>
      )}
    </>
  )
}
export default Admin
