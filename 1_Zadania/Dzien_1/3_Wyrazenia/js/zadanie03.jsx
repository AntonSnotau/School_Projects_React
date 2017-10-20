import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie02';

document.addEventListener('DOMContentLoaded', function(){
  const a = Number(prompt('Give me number A'));
  const op = prompt('Give operation');
  const b = Number(prompt('Give me number B'));
  let rez;
  if (op == '+') {
    rez = <h1>{a + b}</h1>;
  }
  else if (op == '-') {
    rez = <h2>{a - b}</h2>;
  }
  else if (op == '*') {
    rez = <h3>{a * b}</h3>;
  }
  else if (op == '/') {
    rez = <h4>{a / b}</h4>;
  }
  ReactDOM.render(
    <div>{rez}</div>,
    document.getElementById('app')
  );
});
