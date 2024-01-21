import { useEffect, useState } from "react"

export const UserApp = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
            setUsers(data)
           
        } catch (error) {
            console.error(error)
        }
        
    }
   /*  useEffect(() => {
        fetchUsers()
    }, []) */
    const handleClick = () => {
        fetchUsers()
    }
    return (
        <>
            <div className="flex-1">
                <h1 className="text-3xl font-bold underline">Lista de Usuarios:</h1>
                <ul>
                    {users.map(user => <li key={user.id}><span className="text-gray-300">Nombre:</span> {user.name} <span className="text-gray-300">email:</span>{ user.email}</li>)}     
                </ul>
            </div>
            <div>
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Actualizar</button>
            </div>
        </>
  )
}
