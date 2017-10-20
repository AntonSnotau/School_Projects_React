import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  function AddNumbers(props) {
    return (
      <h1>Suma a + b = {props.a + props.b}</h1>
    )
  };
  // class AddNumbers extends React.Component {
  //   render(){
  //     return (
  //       <h1>Suma a + b = {this.props.a + this.props.b}</h1>
  //     )
  //   }
  // };
    ReactDOM.render(
        <AddNumbers a={4} b={9} />,
        document.getElementById('app')
    );
});
