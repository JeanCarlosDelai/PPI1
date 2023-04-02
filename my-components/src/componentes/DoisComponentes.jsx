// Atividade 1.2

import React from 'react';

//Definindo dois componetes com Arrow functions que receem dados atráves de props.
const CompA = props =>
    <h1>Primeiro diz: {props.valor}</h1>

const CompB = props =>
    <h1>Segundo diz: {props.valor}</h1>

//Exporta os dois componentes em um único arquivo, para em seguida serem usados em outro arquivo
export { CompA, CompB };
