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
    { nombre: 'logica', visto: true },
    { nombre: 'variables', visto: true },
    { nombre: 'eventos', visto: true },
    { nombre: 'useState', visto: true },
    { nombre: 'hook', visto: true },
    { nombre: 'redux', visto: false },
    { nombre: 'customHook', visto: false }
   
  ]
  const [arreglo, setArreglo] = useState(listadoCursos)
  return (
    <>
      <h1>Listado de Cursos:</h1>
      <AddTask></AddTask>
      <ol>
       {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}        
      </ol>
      <button onClick={()=> addTask()}>Click Me</button>
    </>
  )
}
