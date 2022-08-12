import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    //jsx explica como será o visual do componente
    //Esta sintaxe estranha de tags não é uma string, nem HTML
    // É chamada JSX e é uma extensão de sintaxe para JavaScript. Recomendamos usar JSX com o React para descrever como a UI deveria parecer. JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.
    return <div>Meu primeiro componente ReactJS</div>
};

ReactDOM.render(
    //componente React podem ser usados como tags html
    <App/>,
    document.querySelector('#root')
);