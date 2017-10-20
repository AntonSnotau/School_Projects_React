import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const ur = Number(prompt('Rok urodzenia'));
    const year = (new Date()).getFullYear();
    ReactDOM.render(
        <h1>{ year - ur }</h1>,
        document.getElementById('app')
    );
});
