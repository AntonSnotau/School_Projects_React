import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const rainbow = ['red', 'green', 'blue', 'yellow', 'pink'];
    ReactDOM.render(
      <div>{rainbow.join('\n')} </div>,
        document.getElementById('app')
    );
});
