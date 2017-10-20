import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  const size = '500px';
    ReactDOM.render(
        <div style={{width: size, height: size, backgroundColor: 'blue'}}></div>,
        document.getElementById('app')
    );
});
