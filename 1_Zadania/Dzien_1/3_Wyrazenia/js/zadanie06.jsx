import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const a = Number(prompt('Give your birth year'));
    function oldyoung(a){
      if (a < 18) {
        return 'young';
      }
      else {
        return 'adult';
      }
    };
    ReactDOM.render(
        <h1>{oldyoung(a)}</h1>,
        document.getElementById('app')
    );
});
