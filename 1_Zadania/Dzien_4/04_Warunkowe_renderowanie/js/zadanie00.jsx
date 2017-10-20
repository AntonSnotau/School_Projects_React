import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class MyCheckbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked: false
      }
    }
    changeState = () => {
      this.setState ({
        clicked: !this.state.clicked
      })
    }
    render() {
      return(
        <div>
          <input type="checkbox" name="" onClick={this.changeState} id=""/>
          <span>{this.state.clicked ? "TAK" : "NIE"}</span>
        </div>
      )
    }
  }
  class App extends React.Component {
    render() {
      return(
        <MyCheckbox/>
      )
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
