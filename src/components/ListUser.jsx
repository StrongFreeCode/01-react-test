import { useEffect, useState } from "react"

export const ListUser = ({ endPoint }) => {
    const [data, setData] = useState([])

    const fecthdata = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            console.log(data)
            setData(data)
           
        } catch (error) {
            console.error(error)
        }
        
    }
    useEffect(() => {
        fecthdata()
    }, [endPoint])
  return (
      <>
          <div className="flex-1">
                <h1 className="text-3xl font-bold underline">Lista de Usuarios:</h1>
                <ul>
                  {endPoint == 'users' ? data.map(item => <li key={item.id}><span className="text-gray-300">Nombre:</span> {item.name} <span className="text-gray-300">email:</span>{item.email}</li>)
                                       : data.map(item => <li key={item.id}><span className="text-gray-300">Nombre:</span> {item.name} <span className="text-gray-300">Comment:</span>{ item.body}</li>)}     
                </ul>
            </div>
      </>
  )
}
