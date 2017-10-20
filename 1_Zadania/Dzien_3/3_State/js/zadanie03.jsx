import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  class StrobeLight extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: this.props.color,
        frequency: this.props.fq
      }
    }
    componentDidMount() {
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
      render() {
        return (
          <div style={{width: '500px', height: '50px', backgroundColor: this.state.color }}></div>
        );
      }
    }
  class App extends React.Component {
    render() {
      return <StrobeLight color='red' fq={50}/>;
    }
  }
  ReactDOM.render(
    <App/>, document.getElementById('app'));
});
