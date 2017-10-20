import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class Receipt extends React.Component {
    render() {
      return (
        {props.items}
      );
    }
  }
    ReactDOM.render(
        <h1>Hello, World!</h1>,
        document.getElementById('app')
    );
});
