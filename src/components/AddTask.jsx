import { useState } from "react"

export const AddTask = ({addTask}) => {
    const [inputValue, setInpuValue] = useState('')
    const onInputChange = (event) => {
        setInpuValue(event.target.value)      
    }
    const onSubmit = (event) => {
      
        event.preventDefault()
        addTask(inputValue)
       
    }
    return (
        <form onSubmit={onSubmit} action="">
             <input className="rounded" type="text"
            placeholder="Ingresa Tarea"
            value={inputValue}
            onChange={onInputChange }
        />
        </form>  
  )
}
