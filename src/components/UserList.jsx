
import { useFetchData } from "../hook/useFetchData.js"

export const UserList = ({ endPoint }) => {
  const {data, isLoading} = useFetchData(endPoint)
  return (
      <>
          <div className="flex-1">
                <h1 className="text-3xl font-bold underline">Lista de Usuarios:</h1>
                <ul>
                  {isLoading ? <p>Cargando..</p> 
                  :
                  endPoint == 'users' ? data.map(item => <li key={item.id}><span className="text-gray-300">Nombre:</span> {item.name} <span className="text-gray-300">email:</span>{item.email}</li>)
                                       : data.map(item => <li key={item.id}><span className="text-gray-300">Nombre:</span> {item.name} <span className="text-gray-300">Comment:</span>{ item.body}</li>)}     
                </ul>
            </div>
      </>
  )
}
