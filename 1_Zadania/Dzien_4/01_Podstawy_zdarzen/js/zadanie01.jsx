import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class MyButtons extends React.Component {
    clickMe = () => {
      console.log('clicked');
    }
    mouseenterMe = () => {
      console.log('mouseentered');
    }
    mouseleaveMe = () => {
      console.log('mouseleaved');
    }
    render(){
      return (
        <div onClick={this.clickMe} onMouseEnter={this.mouseenterMe} onMouseLeave={this.mouseleaveMe}>
        sxdcfvgbhnm</div>
      )
    }
  }
    ReactDOM.render(
        <MyButtons/>,
        document.getElementById('app')
    );
});
