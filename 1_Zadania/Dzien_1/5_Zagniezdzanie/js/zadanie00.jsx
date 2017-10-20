import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02'

document.addEventListener('DOMContentLoaded', function(){
  const names = people.map((item) =>{
    return <div>{item.name} {item.surname}</div>
  });
  ReactDOM.render(
    <section>
      {names}
    </section>,
    document.getElementById('app')
    );
});
