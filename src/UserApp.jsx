import { useState } from "react"
import { ListUser } from "./components/ListUser"

export const UserApp = () => {
    
    const [endPoint, setendPoint] = useState('users')
    const handleClick = () => {
        setendPoint(endPoint == 'users' ? 'comments'
        : 'users')
    }
    return (
        <>
            <div>
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mostrar {endPoint == 'users'? 'commetarios': 'usuarios'}</button>
            </div>
            
            <ListUser endPoint={endPoint}/>
        </>
  )
}
