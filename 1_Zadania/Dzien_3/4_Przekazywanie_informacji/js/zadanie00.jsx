import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class ClockTime extends React.Component {
    render(){
      return(
        <h2>{this.props.time.toLocaleTimeString()}</h2>
      )
    }
  }
  class ClockDate extends React.Component {
    render(){
      return(
        <h2>{this.props.date.toLocaleDateString()}</h2>
      )
    }
  }
  class Clock extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          timeCet: new Date()
        }
    }
    componentDidMount() {
      this.intervalID = setInterval(() => {
        this.setState({
          timeCet: new Date()
        })
      }, 1000);
    }
    render() {
      return (
        <div>
          <ClockTime time={this.state.timeCet}/>
          <ClockDate date={this.state.timeCet}/>
        </div>
      )
    }
  }
  class App extends React.Component {
    render() {
      return <Clock/>;
    }
  }
  ReactDOM.render(
      <App />,
      document.getElementById('app')
  );
});
