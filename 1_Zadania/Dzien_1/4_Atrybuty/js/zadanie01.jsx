import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej

    const redDiv = <div></div>;
    const greenDiv = <div></div>;
    const blueDiv = <div></div>;

    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});