import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class ButtonCounter extends React.Component {
    render() {
      return (
        <h1>{this.props.num}</h1>
      )
    }
  }
  class ButtonToClick extends React.Component {
    handleClick = (event) => {
      if(typeof this.props.increaseCounter === 'function'){
        this.props.increaseCounter()
      }
    }
    render() {
      return(
        <button onClick={this.handleClick}>{this.props.name}</button>
      )
    }
  }
  class ButtonManager extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        counter: 0,
        counterNumbers: [1,2,3]
      }
    }
    addCounter = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }
    render() {
      const renderButtons = this.state.counterNumbers.map(item => {
        return (
          <ButtonToClick name={ item } increaseCounter={this.addCounter}/>
        )
      })
      return (
        <div>
          <ButtonCounter num={this.state.counter}/>
          {renderButtons}
        </div>
      );
    }
  }
  class App extends React.Component {
    render() {
      return <ButtonManager/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
