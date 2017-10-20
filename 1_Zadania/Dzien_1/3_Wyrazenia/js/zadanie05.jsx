import React from 'react';
import ReactDOM from 'react-dom';
import animals from './zadanie05';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>{ animals.join(' ') }, łącznie: { animals.length }</div>,
        document.getElementById('app')
    );
});
