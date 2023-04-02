// Atividade 1.3.1

import React from 'react';

//Criando uma função anonima
export default props => {
    // criando uma constante chamada aprovados que armazena um array de nomes.
    const aprovados = ['Maria', 'Ana', 'João', 'Roberto'];

    // define uma função chamada gerarItens que recebe um array de itens e 
    //retorna um array de elementos <li> contendo cada item do array itens.
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>);
    }
    return (
        //Retorna um elemento <ul> que contém a lista de itens gerada pela função gerarItens com o array aprovados como argumento.
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}
