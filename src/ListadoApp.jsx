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
      <h1>Listado de Cursos:</h1>
      <AddTask addTask={onEmitTask}></AddTask>
      <ol>
       {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}        
      </ol>
      <button onClick={()=> addTask()}>Click Me</button>
    </>
  )
}
