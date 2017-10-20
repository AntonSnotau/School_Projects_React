import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class GrandchildComponent extends React.Component {
    render(){
      return(
        <div>
          {this.props.children}
        </div>
      )
    }
  }
  class ChildComponent extends React.Component {
    render(){
      return(
        <GrandchildComponent>
          {this.props.children}
        </GrandchildComponent>
      )
    }
  }
  class ParentComponent extends React.Component {
    render(){
      return(
        <ChildComponent>
          {this.props.children}
        </ChildComponent>
      )
    }
  }
  class App extends React.Component {
    render(){
      return(
        <ParentComponent>
          <h1>To działa</h1>
        </ParentComponent>
      )
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
