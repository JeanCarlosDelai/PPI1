// Atividade 1.3.2

import React, { useState } from 'react';


// O componente é definido como uma função que recebe uma propriedade props como parâmetro, mas não a utiliza, 
// pois não há lógica adicional sendo adicionada. Em vez disso, ele utiliza o hook useState para definir uma 
// variável count e uma função setCount, que são equivalentes à propriedade de estado e o método setState 
// usados em classes do React.
export default props => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Você clicou {count} vezes!</p>
            {/* Ao clicar no botão, a função setCount é chamada com um novo valor para count. Como o React detecta a 
            mudança no estado, ele atualiza o valor do contador na tela com o novo valor de count. */}
            <button onClick={() => setCount(count + 1)}>
                Clique aqui (com hook)
            </button>
        </div>
    );
}
