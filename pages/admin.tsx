import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Header } from '../components/header'

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

  const UsersTable = (users: any) => {
    return (
      <table>
        <thead>
          <th>ID</th>
          <th>Volovanes Fitness?</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>CP</th>
          <th>Colonia</th>
          <th>Participante?</th>
          <th>Gimnasio</th>
          <th>Peso</th>
          <th>Altura</th>
          <th>Medio</th>
          <th>Social</th>
          <th>Creado</th>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.phone}>
              <td>{user.id}</td>
              <td>{user.volovanTried}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.zip}</td>
              <td>{user.neighborhood}</td>
              <td>{user.isParticipant}</td>
              <td>{user.gym}</td>
              <td>{user.weight}</td>
              <td>{user.height}</td>
              <td>{user.medium}</td>
              <td>{user.social}</td>
              <td>{user.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
