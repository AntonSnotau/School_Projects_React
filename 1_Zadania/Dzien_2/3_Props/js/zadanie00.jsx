import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  function Hello(props){
    return (
      <h1 style={props.componentStyle}>Część, {props.name} {props.surname} jest {props.opinion}</h1>
    )
  };
    ReactDOM.render(
      <div>
        <Hello name="Zenek" surname="Martyniuk" opinion="fajny" componentStyle={{color: 'red'}}/>
        <Hello name="Tomasz" surname="Necik" opinion="arogancki" componentStyle={{color: 'blue'}}/>,
      </div>
        document.getElementById('app')
    );
});
