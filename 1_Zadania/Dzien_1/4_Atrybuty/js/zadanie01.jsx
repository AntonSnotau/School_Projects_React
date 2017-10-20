import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej
    const red = {
      height: '100px',
      backgroundColor: 'red'
    };
    const green = {
      height: '100px',
      backgroundColor: 'green'
    };
    const blue = {
      height: '100px',
      backgroundColor: 'blue'
    };
    const redDiv = <div style={red}></div>;
    const greenDiv = <div style={green}></div>;
    const blueDiv = <div style={blue}></div>;

    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});
