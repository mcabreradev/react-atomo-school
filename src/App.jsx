function Hola({persona}) {
  return (
    <div>Hola {persona}</div>
  )
}

function EdadPermitida({edad}){
  return (
    <div>
      <p>{edad >= 18 ? 'Si puedes tomar': 'No podes tomar!'}</p>
    </div>
  )
}

function App() {
  return (
    <div className="centrar">

      <Hola persona="Daniel" />

      <EdadPermitida edad={40} />
    </div>
  )
}

export default App