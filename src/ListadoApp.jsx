const Items = ({nombre, visto}) => {
  return (
    <li>{nombre} {visto ? '✅': '⛔' }</li>
  )
}

export const ListadoApp = () => {
  return (
    <>
      <h1>Listado de Cursos:</h1>
      <ol>
        <Items nombre="logica" visto={true}></Items>
        <Items nombre="variables" visto={true}></Items>
        <Items nombre="eventos" visto={true}></Items>
        <Items nombre="useState" visto={true}></Items>
        <Items nombre="hook" visto={false}></Items>
        <Items nombre="redux" visto={false}></Items>
        <Items nombre="customHook" visto={false}></Items>
        
      </ol>
    </>
  )
}
