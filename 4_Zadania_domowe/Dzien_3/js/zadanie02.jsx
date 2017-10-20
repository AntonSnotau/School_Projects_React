import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class AnotherColor extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        color: 'yellow'
      }
    }
    componentDidMount () {
      console.log('zamontowany');
      this.timerId = setTimeout(() => {
        this.setState ({
          color: 'blue'
        })
      }, 5000);
    }
    render() {
      return (
        <div style={{backgroundColor: this.state.color, height: '100px'}}>
        </div>
      );
    }
  }
    class App extends React.Component {
      render() {
        return (
          <div>
              <AnotherColor />
          </div>
        );
      }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
