import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class Bulb extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOn: false
      }
    }
    onOff = (event) => {
      this.setState({
        isOn: !this.state.isOn
      })
    }

    render() {
      return (
        <div style={{backgroundColor: this.state.isOn ? 'white' : 'yellow', width: '100%', height: '1000px'}}>
          <button onClick={this.onOff}>{this.state.isOn ? 'On' : 'Off'}</button>
        </div>
      )
    }
  }
  class App extends React.Component {
    render() {
      return <Bulb/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
