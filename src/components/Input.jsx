import { useState } from "react";

const Input = () => {
  const [texto, setText] = useState(null);

  const inputEventHandler = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input
      name="nombre"
      type="text"
      placeholder="Escribe algo"
      onChange={inputEventHandler} />
      <br />
      <br />

      {!!texto && (<p>Hola {texto}!</p>)}
      
    </div>
  );
};
export default Input;