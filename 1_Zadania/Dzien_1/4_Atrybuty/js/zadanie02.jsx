import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej

    ReactDOM.render(
        <h1>Hello, World!</h1>,
        document.getElementById('app')
    );
});