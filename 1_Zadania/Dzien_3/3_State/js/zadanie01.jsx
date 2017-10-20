import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class TextTyper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: this.props.text[0]
      }
    }
    componentDidMount() {
      let a = 1;
      this.intervalId = setInterval(() => {
        if (a < this.props.text.length) {
          this.setState({
            text: this.state.text + this.props.text[a]
          })
          a++;
        }
        else {
          clearInterval(this.intervalId);
        }
      }, 200);
    }
    render() {
      return(
        <h1>{ this.state.text }</h1>
      );
    }
  }
  class App extends React.Component {
    render() {
      return <TextTyper text='Hejeczka!!'/>;
    }
  }
  ReactDOM.render(
      <App />,
      document.getElementById('app')
  );
});
