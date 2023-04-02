// Atividade 1.3.3 - useReducer vs useState no React

import React, { useState } from 'react';

const CounterState = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Contador com useState</h1>
            <p>Count: {count}</p>
            <div>
                <button type="button"
                    onClick={() => { setCount(count => count + 1) }}>
                    +
                </button>
                <button type="button"
                    onClick={() => { setCount(count => count - 1) }}>
                    -
                </button>
            </div>
        </div>
    );
};
export default CounterState;

// De modo que:
// ● Ele retorna um valor (state) e uma função (setState) para atualizar o valor.
// ● Durante a renderização inicial, o estado retornado é o mesmo que o valor passado
// como argumento inicial de useState (initialState).
// ● A função setState é usada para atualizar o estado. Ela aceita um novo valor de
// estado e coloca na fila de re-renderização do componente.