// Atividade 1.3.3 - useReducer vs useState no React

import React, { useReducer } from 'react';

const myCounterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, count: state.count + 1 };
        case 'DECREASE':
            return { ...state, count: state.count - 1 };
        default:
            throw new Error();
    }
};
const CounterReducer = () => {
    const [state, dispatch] = useReducer(myCounterReducer, { count: 0 });
    return (
        <div>
            <h1>Contador com useReducer</h1>
            <p>Count: {state.count}</p>
            <div>
                <button type="button" onClick={() => dispatch({ type: 'INCREASE' })}>
                    +
                </button>
                <button type="button" onClick={() => dispatch({ type: 'DECREASE' })}>
                    -
                </button>
            </div>
        </div>
    );
};
export default CounterReducer;