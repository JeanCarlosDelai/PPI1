// Atividade 1.2

// import React from 'react';
// import ReactDOM from 'react-dom';
// //Importando o Primeiro Componente
// //import PrimeiroComponente from './components/PrimeiroComponente';
// //Como estamos importando dois componentes e não estão definidos com default, temos que colocar a nomemclatura do componente
// // Aqui estamos dando um apelido para a variável CompB
// //import { CompA, CompB as B } from './components/DoisComponentes';
// //Importando vários elementos HTML de uma vez só
// import MultiElementos from './components/MultiElementos';



// //ReactDOM.render é um método da biblioteca React DOM que é usado para renderizar elementos React na página da web.
// //Estou passando a informação "Bom dia" via props para o pai, para renderizar na tela
// //ReactDOM.render(<PrimeiroComponente valor="Bom dia" valor2={Math.random()} />,
// //document.getElementById('root') é um método JavaScript que seleciona um elemento HTML com o atributo id igual a "root". 
// //Este é o elemento onde o componente será renderizado.
// //document.getElementById('root'));
// //Em conjunto, essas duas linhas de código renderizam o componente "PrimeiroComponente" no elemento HTML 
// //com o atributo id igual a "root".


// // ReactDOM.render(
// //   <div>
// //     <CompA valor="Olá, eu sou A!" />
// //     <B valor="B está na área!" />
// //   </div>
// //   , document.getElementById('root'));

// const elemento = document.getElementById('root');
// ReactDOM.render(
//   <MultiElementos />
//   , elemento);

// Atividade 1.3.1 - Estados e Eventos

// import React from 'react';
// import ReactDOM from 'react-dom';
// //import ComponenteClasse from './componentes/ComponenteClasse';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';


// const elemento = document.getElementById('root');

// //ReactDOM.render(
// //<div>
// //  <ComponenteClasse />
// //</div>
// //, elemento)
// ReactDOM.render(
//   <div>
//     <ComponenteComFuncao />
//   </div>
//   , elemento);

// Atividade 1.3.2 - React Hooks

// import React from 'react';
// import ReactDOM from 'react-dom';
// import SemHookState from './componentes/SemHookState';

// const elemento = document.getElementById('root');
// ReactDOM.render(
//     <SemHookState />
//     , elemento);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ComHookState from './componentes/ComHookState';

// const elemento = document.getElementById('root');
// ReactDOM.render(
//     <ComHookState />
//     , elemento);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import SemHookStateEffect from './componentes/SemHookStateEffect';
// const elemento = document.getElementById('root');
// ReactDOM.render(
//     <SemHookStateEffect />
//     , elemento);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ComHookStateEffect from './componentes/ComHookStateEffect';
// const elemento = document.getElementById('root');
// ReactDOM.render(
//     <ComHookStateEffect />
//     , elemento);

// Atividade 1.3.3 - useReducer vs useState no React

// import React from 'react';
// import ReactDOM from 'react-dom';
// import CounterState from './componentes/CounterState'
// ReactDOM.render(
//  <CounterState />,
//  document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import CounterReducer from './componentes/CounterReducer'
// ReactDOM.render(
//     <CounterReducer />,
//     document.getElementById('root')
// );
