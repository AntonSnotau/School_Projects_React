import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class GivePassword extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        passwordCorrect: false
      }
    }

    checkPassword = ()=>{
      if(this.props.pwd === this.input.value){
        this.setState({
          passwordCorrect: true
        })
      }
    }


    componentWillMount(){
      console.log(this);
    }
    componentDidMount(){
      console.log(this)
    }
    render(){
      return !this.state.passwordCorrect ? (
        <div>
          <input type="password" ref={
            (inputFromDom)=>{
              this.input = inputFromDom
            }
          }/>
          <button onClick={this.checkPassword}>Check password</button>
        </div>
      ) : (
        <h1>I'm in!</h1>
      )
    }
  }

  class App extends React.Component {
    render(){
      return <GivePassword pwd="abcd0987"/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
