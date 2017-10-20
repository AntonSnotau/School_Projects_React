import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  let a = 0;
  class StrobeControl extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          onOff: false
        }
    }
    componentDidMount() {
      this.intervalID = setTimeout(() => {
        this.state.onOff = false
      }, 5000);
    }
    render(){
      return(
        <div>
          <StrobeLight color='red' fq={50} onOff={true}/>
          <StrobeLight color='green' fq={30} onOff={true}/>
          <StrobeLight color='blue' fq={40} onOff={true}/>
        </div>
      )
    }
  }
  class StrobeLight extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: this.props.color,
        frequency: this.props.fq,
        onOff: true
      }
    }
    componentDidMount() {
      if (this.props.onOff == true) {
        this.intervalId = setInterval(() => {
            if (this.state.color == 'white') {
              this.setState({
                color: this.props.color
              })
            } else {
              this.setState({
                color: 'white'
              })
            }
          }, this.props.fq);
        }
        else if (this.props.onOff == false) {
          a = 1;
        }
        else {
          clearInterval(this.intervalId)
        }
      }
    render() {
      return (
        <div style={{width: '500px', height: '50px', backgroundColor: this.state.color }}></div>
      );
    }
  }
  class App extends React.Component {
    render() {
      return <StrobeControl />;
    }
  }
  ReactDOM.render(
    <App/>, document.getElementById('app'));
});
