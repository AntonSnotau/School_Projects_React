import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00.js'

document.addEventListener('DOMContentLoaded', function(){
  class PeopleList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        persons: people
      }
    }
    render(){
      const renderPersons = this.state.persons.map((item,index)=>{
        return <li key={ item.pesel }>{ item.name }</li>
      })
      return(
        <ul>
          {renderPersons}
        </ul>
      )
    }
  }
  class App extends React.Component {
    render(){
      return(
        <PeopleList/>
      )
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
