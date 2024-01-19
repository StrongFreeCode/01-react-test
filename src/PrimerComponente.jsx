const string = 'lorem insump'
const number = 123456
const array = ['curso numero 1', 'youtube', 4, 1000]
const bollean = true
const funcion = () => 1 + 1
const obeject = { nombre: 'Franklin', edad: 4 }
const date = new Date()

export const PrimerComponente = () => {
  return (
    <>
      <div>{string}</div>
      <div>{number}</div>
      <div>{array}</div>
      <div>{bollean}</div>
      <div>{funcion()}</div>
      <div>{JSON.stringify(obeject)}</div>
      <div>{JSON.stringify(date)}</div>
    </>
  )
}

