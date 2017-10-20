import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  class TextTyper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: this.props.reversed
          ? this.props.text
          : this.props.text[0]
      }
    }
    componentDidMount() {
      if (this.props.reversed) {
        let a = this.props.text.length;
        this.intervalId = setInterval(() => {
          if (a >= 0) {
            this.setState({
              text: this.state.text.slice(0, a - 1)
            })
            a--;
          } else {
            clearInterval(this.intervalId);
          }
        }, 200);
      } else {
        let a = 1;
        this.intervalId = setInterval(() => {
          if (a < this.props.text.length) {
            this.setState({
              text: this.state.text + this.props.text[a]
            })
            a++;
          } else {
            clearInterval(this.intervalId);
          }
        }, 200);
      }
    }
      render() {
        return (
          <h1>{this.state.text}</h1>
        );
      }
    }
  class App extends React.Component {
    render() {
      return <TextTyper text='Hejeczka!! fdggfd' reversed={true}/>;
    }
  }
  ReactDOM.render(
    <App/>, document.getElementById('app'));
});
