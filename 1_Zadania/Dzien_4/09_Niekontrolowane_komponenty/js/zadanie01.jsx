import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class Sum extends React.Component {
    render(){
      return (
        <div>
          <input type="number" ref={input=>{this.input = input}/>
          <h1>{this.input.value} + { sum }</h1>
          <button onClick={this.checkPassword}>Check password</button>
        </div>
      )
    }
  }

  class App extends React.Component {
    render(){
      return <Sum/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
