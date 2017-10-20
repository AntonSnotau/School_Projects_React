import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class HellowKitty extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        longText: ''
      }
    }
    handleChange = (event) => {
      this.setState ({
        [event.target.name]: event.target.value
      })
    }
    render(){
      return(
        <div>
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
          <textarea name='longText' value={this.state.longText} onChange={this.handleChange}/>
          <h1>{this.state.name} + {this.state.longText}</h1>
        </div>
      )
    }
  }
  class App extends React.Component {
    render(){
      return(
        <HellowKitty/>
      )
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
