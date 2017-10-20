import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class ClockTimeHour extends React.Component {
    render(){
      return(
        <h2>{this.props.hour.getHours()}</h2>
      )
    }
  }
  class ClockTimeMinute extends React.Component {
    render(){
      return(
        <h2>{this.props.minute.getMinutes()}</h2>
      )
    }
  }
  class ClockTimeSecond extends React.Component {
    render(){
      return(
        <h2>{this.props.second.getSeconds()}</h2>
      )
    }
  }
  class ClockTime extends React.Component {
    render(){
      return(
        <div>
          <ClockTimeHour hour={ this.props.time } />
          <ClockTimeMinute minute={ this.props.time } />
          <ClockTimeSecond second={ this.props.time }/>
        </div>
      )
    }
  }
  class ClockDateYear extends React.Component {
    render(){
      return(
        <h2>{this.props.year.getFullYear()}</h2>
      )
    }
  }
  class ClockDateMonth extends React.Component {
    render(){
      return(
        <h2>{this.props.month.getMonth() + 1}</h2>
      )
    }
  }
  class ClockDateDay extends React.Component {
    render(){
      return(
        <h2>{this.props.day.getDate()}</h2>
      )
    }
  }
  class ClockDate extends React.Component {
    render(){
      return(
        <div>
          <ClockDateYear year={ this.props.date } />
          <ClockDateMonth month={ this.props.date } />
          <ClockDateDay day={ this.props.date }/>
        </div>
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
