import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  // function Sum(props) {
  //   return (
  //     <h1>{props.tab.reduce(function fn(prev, curr){
  //       return prev + curr;
  //     }
  //     )}</h1>
  //   )
  // };
  class Sum extends React.Component {
    render(){
      return (
        <h1>{this.props.tab.reduce(function fn(prev, curr){
          return prev + curr;
        }
        )}</h1>
      )
    }
  };
    ReactDOM.render(
        <Sum tab={[7, 3, 6, 4]} />,
        document.getElementById('app')
    );
});
