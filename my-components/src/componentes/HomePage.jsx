
// Atividade 1.3.4 - Usando a Context API no React

import React, { useContext } from 'react';
import UserContext from './UserContext';

function HomePage() {
    const user = useContext(UserContext)
    return <div>{user.name}</div>
}

export default HomePage;