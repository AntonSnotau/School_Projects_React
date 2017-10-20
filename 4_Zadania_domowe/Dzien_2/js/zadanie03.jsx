import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class RandomNumbersList extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        tab: []
      }
    }
    Mathfunction = (min,max,count) => {
      for (var i = 0; i < count; i++) {
        let proc = min - 0.5 + Math.random() * (max - min + 1);
        let rez = Math.round(proc);
        this.state.tab.push(rez);
      }
      return this.state.tab
    }
    render() {
      return (
        <div min='1' max='9' count='3'>
        </div>
      );
    }
  }
  class RandomNumbersInfo extends React.Component {
    render() {
      return (
        <h2>
          {this.props.min}
          {this.props.max}
          {this.props.count}
        </h2>
      );
    }
  }
  class RandomNumbers extends React.Component {
    render() {
      return (
        <div min='1' max='9' count='3'>
          <RandomNumbersInfo/>

        </div>
      );
    }
  }
  class App extends React.Component {
    render() {
      return (
        <RandomNumbers/>
      )
  }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
