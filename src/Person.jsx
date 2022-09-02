const Person = ({user}) => {
  const {name, username, phone} = user;

  return <li className="person-container">
    <p>Nombre: {name}</p>
    <p>Usuario: {username}</p>
    <p>Phone: {phone}</p>
  </li>;
};
export default Person;

const Algo = () => {
  return (<p>Hola</p>)
}

export {Algo}