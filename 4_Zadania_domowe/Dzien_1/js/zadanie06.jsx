import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie06';

document.addEventListener('DOMContentLoaded', function(){
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1 style={{textAlign: 'center'}}>{ person.name } { person.surname }</h1>
          <h2 style={{textAlign: 'center'}}>{ person.jobTitle }</h2>
          <hr></hr>
          <h2 style={{textAlign: 'center'}}> tel:{ person.telNumber }</h2>
        </div>
      );
    }
  }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
