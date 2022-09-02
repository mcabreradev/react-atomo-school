import { useEffect, useState } from "react";
import Person, { Algo } from './Person';

import './App.css';

function App() {
  const [users, serUsers] = useState([]);

  const fetchApi = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    serUsers(await response.json())
  }

  useEffect(()=>{
    fetchApi();
  })

  return (
    <div className="centrar">
      <Algo />
      <ul>
        {!!users && users.map(user => <Person 
          key={user.id} 
          user={user}
          />)}
      </ul>
    </div>
  )
}

export default App