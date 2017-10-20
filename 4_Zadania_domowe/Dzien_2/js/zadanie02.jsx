import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class CardName extends React.Component {
    render() {
      return (
        <div style={{backgroundColor: color, height: '100px'}}>
        </div>
      );
    }
  }
  class CardGenerator extends React.Component {
    render() {
      return (
        <div style={{backgroundColor: color, height: '100px'}}>
        </div>
      );
    }
    red(){
      color = 'red';
    }
    setTimeout(red, 5000);
  }
    ReactDOM.render(
        <Div />,
        document.getElementById('app')
    );
});
