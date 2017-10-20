import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class Bubby extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOn: true
      }
    }
    onOff = (event) => {
      this.setState({
        isOn: !this.state.isOn
      })
    }
    render() {
      return (
        <div onMouseEnter={this.onOff} onMouseLeave={this.onOff} style={{backgroundColor: this.state.isOn ? 'green' : 'blue', width: '500px', height: this.state.isOn ? '200px' : '400px'}}>
        </div>
      )
    }
  }
  class App extends React.Component {
    render() {
      return <Bubby/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
