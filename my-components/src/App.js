
// Atividade 1.3.4 - Usando a Context API no React

import React from 'react';
import HomePage from './componentes/HomePage';
import { UserProvider } from './componentes/UserContext';

function App() {
  const user = { name: 'Tania', loggedIn: true }
  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  );
}

export default App;