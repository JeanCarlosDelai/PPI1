// Atividade 1.3.1

// Importando a classe component do pacote React
import React, { Component } from 'react';

//Criando uma classe de componente chama ComponenteClasse que estende a classe Component do REACT
export default class ComponenteClasse extends Component {
    // render() É um método REACT que retorna a saída a ser exibida na interface do usuário
    render() {
        return (
            //No  index.js é definido atraves de props o texto a ser exibido na tela
            <h1>{this.props.valor|| 'Padrão'}</h1>
        )
    }
}
