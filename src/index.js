import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    //jsx explica como será o visual do componente
    //Esta sintaxe estranha de tags não é uma string, nem HTML
    // É chamada JSX e é uma extensão de sintaxe para JavaScript. Recomendamos usar JSX com o React para descrever como a UI deveria parecer. JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.
    return(
        //{} escape da expressão jsx
        <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
            <label htmlFor="nome" style={{display: 'block', marginBottom: 4}}>Nome:</label>
            <input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}/>
            <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}}>Enviar</button>
        </div>
    );

};

ReactDOM.render(
    //componente React podem ser usados como tags html
    <App/>,
    document.querySelector('#root')
);