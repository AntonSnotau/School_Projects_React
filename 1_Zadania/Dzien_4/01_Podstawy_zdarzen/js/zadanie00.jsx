import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class MyButton extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        counter: 0
      }
    }

    clickMe = () => {
      console.log('clicked');
      console.log(this);
      this.setState({
        counter: this.state.counter + 1
      })
    }

    render(){
      return <button onClick={this.clickMe}>
      {this.state.counter}</button>
    }
  }
    ReactDOM.render(
        <MyButton/>,
        document.getElementById('app')
    );
});
