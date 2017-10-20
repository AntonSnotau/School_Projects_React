import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class AddTwoNumbers extends React.Component {
    constructor(props) {
      super(props);
      this.state = ({
        error: 'Podaj dwie liczby',
        num1: '',
        num2: ''
      })
    }
    handleChange = (event) => {
      if (Number(event.target.value) === NaN) {
        return(
          this.setState({
            error: "Podaj dwie liczby"
          })
        );
      }
      else {
        this.setState ({
          [event.target.name]: Number(event.target.value)
        });
      }
    }
    render() {
      return (
        <div>
          <h1> {(Number{this.state.num1} === NaN || Number{this.state.num2}.isNaN()}) ? {this.state.error} : {this.state.num1 + this.state.num2}}</h1>
          <input type='text' name='num1' value={this.state.num1} onChange={this.handleChange}/>
          <input type='text' name='num2' value={this.state.num2} onChange={this.handleChange}/>
        </div>
      )
    }
  }
  class App extends React.Component {
    render(){
      return (
        <AddTwoNumbers/>
      )
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
