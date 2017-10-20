import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej
    const a = genNumber();
    const b = genNumber();
    const ask = prompt('Jaki jest wynik dodawania tych liczb: ' + a + ' i ' + b);
    const sum = a + b;
    let checked;
    let st;
    if (ask == sum) {
      checked = 'Odpowiedź poprawna!';
      st = {backgroundColor: 'green'};
    }
    else {
      checked = 'Odpowiedź błedna :(';
      st = {backgroundColor: 'red'};
    };
    ReactDOM.render(
        <div style={ st }>{ checked }</div>,
        document.getElementById('app')
    );
});
