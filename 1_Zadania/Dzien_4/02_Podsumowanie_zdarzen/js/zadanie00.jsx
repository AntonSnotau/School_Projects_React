import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class Buttons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: 'Button',
        width: 'auto'
      }
    }
    onClick1 = (event) => {
      console.log('Pierwszy przycisk kliknięty');
    }
    onClick2 = (event) => {
      this.setState({
        text: 'Click!'
      })
    }
    onClick3 = (event) => {
      this.setState({
        width: '300px'
      })
    }
    render() {
      return (
        <div>
          <button onClick={this.onClick1}>{ this.state.text }</button>
          <button onClick={this.onClick2}>{ this.state.text }</button>
          <button style={{width: this.state.width}} onClick={this.onClick3}>{ this.state.text }</button>
        </div>
      )
    }
  }
  class App extends React.Component {
    render() {
      return <Buttons/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
