// Atividade 1.2

//Importando dependencias do React, sem isso não podemos usar o framework
import React from 'react';

//Função nomeada primeiro recebendo props, parametros do filho
function primeiro(props) {
    return <h1>Primeiro Componente! {props.valor} - {props.valor2} </h1>
}

//Retorna o que estiver no return da função
export default primeiro;
