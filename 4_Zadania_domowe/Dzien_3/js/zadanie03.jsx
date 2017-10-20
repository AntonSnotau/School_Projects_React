import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class TrafiicLights extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        numberOfLight: 1,
        colorRed: 'black',
        colorYellow: 'black',
        colorGreen: 'black'
      }
    }
    componentDidMount () {

      this.timerIdRed = setInterval(() => {
        if (this.state.colorRed == 'black') {
          this.setState ({
            colorRed: 'red'
          })
        }
        else {
          this.setState ({
            colorRed: 'black'
          })
        }
      }, (this.props.redTime * 1000));

      this.timerIdYellow = setInterval(() => {
        if (this.state.colorYellow == 'black') {
          this.setState ({
            colorYellow: 'yellow'
          })
        }
        else {
          this.setState ({
            colorYellow: 'black'
          })
        }
      }, (this.props.yellowTime * 1000));

      this.timerIdGreen = setInterval(() => {
        if (this.state.colorGreen == 'black') {
          this.setState ({
            colorGreen: 'green'
          })
        }
        else {
          this.setState ({
            colorGreen: 'black'
          })
        }
      }, (this.props.greenTime * 1000));
    }

    componentWillUnmount () {
      clearInterval(this.intervalIdRed);
      clearInterval(this.intervalIdYellow);
      clearInterval(this.intervalIdGreen);
    }

    render() {
      return (
        <div>
            <div style={{height:'100px', width:'100px', borderRadius:'50%', backgroundColor:this.state.colorRed}}></div>
            <div style={{height:'100px', width:'100px', borderRadius:'50%', backgroundColor:this.state.colorYellow}}></div>
            <div style={{height:'100px', width:'100px', borderRadius:'50%', backgroundColor:this.state.colorGreen}}></div>
        </div>
      );
    }
  }
    class App extends React.Component {
      render() {
        return (
          <div>
              <TrafiicLights redTime={3} yellowTime={1} greenTime={4} />
          </div>
        );
      }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
