// Atividade 1.2

import React from 'react';

export default props =>
    // juntando os dois elementos html utilizando DIV, assim criando uma DIV desnecessária
    //<div>
    //  <h1>Parte 1</h1>
    //  <h2>Parte 2</h2>
    // </div>

    // juntando os dois elementos html utilizando React.Fragment, com o fragment não criamos uma DIV descencessária
    <React.Fragment>
        <h1>Parte 1</h1>
        <h2>Parte 2</h2>
    </React.Fragment>

     // juntando os dois elementos html utilizando Fragment Short Syntaxe
     //<>
     //<h1>Parte 1</h1>
     //<h2>Parte 2</h2>
     //</>

     // Podemos também utilizar um array de elementos
     //[
     //<h1>Parte 1</h1>.
     //<h2>Parte 2</h2>
     //]
