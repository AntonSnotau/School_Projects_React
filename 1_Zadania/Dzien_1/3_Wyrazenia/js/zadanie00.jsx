import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const a = Number(prompt('Give me number A'));
    const b = Number(prompt('Give me number B'));
    console.log(a, b);
    ReactDOM.render(
        <h1>{ a + b }</h1>,
        document.getElementById('app')
    );
});
