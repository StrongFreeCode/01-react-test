import { useState } from "react"
import { UserList } from "./components/UserList"

export const UserApp = () => {
    
    const [endPoint, setEndPoint] = useState('users')
    const handleClick = () => {
        setEndPoint(endPoint == 'users' ? 'comments'
        : 'users')
    }
    return (
        <>
            <div>
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mostrar {endPoint == 'users'? 'commetarios': 'usuarios'}</button>
            </div>
            
            <UserList endPoint={endPoint}/>
        </>
  )
}
