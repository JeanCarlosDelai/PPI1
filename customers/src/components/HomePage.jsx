import React, { useContext } from 'react';
import UserContext from './UserContext';


function HomePage() {
  //Criando o state
  const user = useContext(UserContext);
  return <div>{user.name}</div>
}
export default HomePage;
