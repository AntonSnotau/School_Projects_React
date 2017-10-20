import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02'

document.addEventListener('DOMContentLoaded', function(){
  const names = people.map((item) =>{
    return <div className="person">
      <img src={ item.avatar }/>
      <div className="info">
         <h1>{ item.title + item.name + item.surname }</h1>
         <p>{ item.bio }</p>
      </div>
    </div>
  });
  ReactDOM.render(
    <section>
      {names}
    </section>,
    document.getElementById('app')
    );
});
