import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  const colors = 'yellow';
    ReactDOM.render(
        <div style={{color: colors}}>{ colors }</div>,
        document.getElementById('app')
    );
});
