function Hola({persona}) {
  return (
    <div>Hola {persona}</div>
  )
}

function EdadPermitida({edad}){
  const css = {
    color: (edad < 18) ? 'red' : 'green'
  }

  return (
    <div>
      <p style={css}>
        {edad >= 18 ? 'Si puedes tomar': 'No podes tomar!'}
      </p>
    </div>
  )
}

export { Hola, EdadPermitida }