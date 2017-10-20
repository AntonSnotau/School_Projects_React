import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const name = prompt('Twoje imie');
    const age = prompt('Twoj wiek');
    ReactDOM.render(
        <div>{name} ma {age} lat </div>,
        document.getElementById('app')
    );
});
