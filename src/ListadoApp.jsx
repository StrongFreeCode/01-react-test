import { useState } from "react"
import { AddTask } from "./components/AddTask"

const Items = ({nombre, visto}) => {
  return (
    <li className="rojito">{nombre} {visto ? '✅': '⛔' }</li>
  )
}

export const ListadoApp = () => {
  const addTask = ()=>{
    setArreglo([...arreglo, { nombre: 'nuevo', visto: true}])
  }
  let listadoCursos = [
    { id:1, nombre: 'logica', visto: true },
    { id:2, nombre: 'variables', visto: true },
    { id:3, nombre: 'eventos', visto: true },
    { id:4, nombre: 'useState', visto: true },
    { id:5, nombre: 'hook', visto: true },
    { id:6, nombre: 'redux', visto: false },
    { id:7, nombre: 'customHook', visto: false }
   
  ]
  const [arreglo, setArreglo] = useState(listadoCursos)
  const onEmitTask = (val) => {
    let valor = val.trim()
    if(valor<1) return
    const envio = {
            id: arreglo.length + 1,
            nombre: valor,
            visto: false
    }
    setArreglo([...arreglo, envio])

  }
  return (
    <>
      <div className="flex-1">
        <h1 className="text-3xl font-bold underline mb-2">Listado de Cursos:</h1>
        <AddTask addTask={onEmitTask}></AddTask>
        <ol>
         {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}        
        </ol>
       
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> addTask()}>Click Me</button>
      </div>
       
    </>
  )
}
