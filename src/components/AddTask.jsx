import { useState } from "react"

export const AddTask = ({addTask}) => {
    const [inputValue, setInpuValue] = useState('')
    const onInputChange = (event) => {
        setInpuValue(event.target.value)      
    }
    const onSubmit = (event) => {
        const envio = {
            nombre: inputValue,
            visto: false
        }
        event.preventDefault()
        addTask(task => [...task, envio])
        console.log(inputValue)
    }
    return (
        <form onSubmit={onSubmit} action="">
             <input type="text"
            placeholder="Ingresa Tarea"
            value={inputValue}
            onChange={onInputChange }
        />
        </form>  
  )
}
