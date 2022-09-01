import React, { useState } from 'react'

function Click() {
  const [suma, setSuma] = useState(0)

  function eventHandlerSuma() {
   setSuma((prev) => prev + 1);
  }

  function eventHandlerResta() {
    setSuma(suma - 1);
   }

  return (
    <div>
      <button 
        type="button"
        onClick={eventHandlerResta}
        >-</button>

      {' '} {suma} {' '}

      <button 
        type="button"
        onClick={eventHandlerSuma}
        >+</button>
    </div>
  )
}

export default Click
