import { PropTypes } from "prop-types"

export const PrimerComponente = ({ titulo = 'mi primer componente props poer defecto', subtitulo = 5 }) => {
  console.log(titulo)
  console.log(subtitulo)
  return (
    <>
      <h1>Props:</h1>
      <h1>{titulo}</h1>
      <h1>{subtitulo + 1}</h1>
    </>
  )
}

PrimerComponente.prototype = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number.isRequired
}

