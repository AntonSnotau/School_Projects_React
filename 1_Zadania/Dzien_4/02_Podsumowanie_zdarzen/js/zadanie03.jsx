import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class SpeedClickGame {
    constructor(props) {
      super(props);
      this.state = {
        timems: this.props.time
      }
    }
    render() {
      return(
        <div>
          <button>Click me!</button>
          <h1></h1>
          <h2></h2>                    
        </div>
      )
    }
  }
    ReactDOM.render(
        <h1>Hello, World!</h1>,
        document.getElementById('app')
    );
});
