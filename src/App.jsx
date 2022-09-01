import { Hola, EdadPermitida } from './components/Hola';
import Padre from './components/Padre';
import Click from './components/Click';

import './App.css';

function App() {


  return (
    <div className="centrar">
{/* 
      <Hola persona="Marcos" />

      <EdadPermitida edad={12} />

      <Padre>
        <p>lorem ipsum</p>
      </Padre> */}

      <Click />
    </div>
  )
}

export default App