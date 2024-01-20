import { useState } from "react"

export const AddTask = () => {
    const [inputValue, setInpuValue] = useState('')
    const onInputChange = (event) => {
        setInpuValue(event.target.value)      
    }
    const onSubmit = (event) => {
        event.preventDefault()
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
