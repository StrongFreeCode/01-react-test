import { useState } from "react"


export const ContadorApp = ({ value }) => {
    const [contador, setContador] = useState(value)
    const handleClick = () => {
        setContador(contador + 1)
    }
    return (
        <>
            <h1>Contador APP:</h1>
            <p>{contador}</p>
            <button onClick={handleClick}>click me</button>
        </>
    )
}