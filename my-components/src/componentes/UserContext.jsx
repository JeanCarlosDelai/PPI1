
// Atividade 1.3.4 - Usando a Context API no React

import React from 'react'


const UserContext = React.createContext();

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;