import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class SmthToDo extends React.Component {
    constructor (props){
      super(props);
      this.state = {
        info: []
      }
    }
    componentDidMount () {
      fetch('http://api.football-data.org/v1/competitions', {
        headers:{
            'X-Auth-Token':'2bae40ac69ef499e8f6b8fe18bfd39fb'
        }
      }),
      this.setState ({
        info: 0
      })
    }
    render() {
      return(
        <div>
        {this.state.info}
        </div>
      );
    }
  }
  class App extends React.Component {
    render() {
      return(
        <SmthToDo/>
      )
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
//nadal nie kumam, gdzie wziac response?
