// Atividade 1.3.2

import React from 'react';

//Usando componentes de classe
export default class SemHookState extends React.Component {

    // O construtor da classe define o estado inicial do componente com uma propriedade count definida como 0
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <p>Você clicou {this.state.count} vezes!</p>
                {/* É um botão que, quando clicado, atualiza o estado do componente incrementando a propriedade count em 1. */}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Clique aqui (sem hook)
                </button>
            </div>
        );
    }
}
