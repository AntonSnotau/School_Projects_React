import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class SecretStuff extends React.Component {
    render(){
      return this.props.pwd === this.props.correctPwd && (
        <div>{ this.props.secret }</div>
      )
    }
  }
  class App extends React.Component {
    render() {
      return(
        <SecretStuff pwd='good' correctPwd='good' secret='wszystko będzie dobrze'/>
      )

    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
