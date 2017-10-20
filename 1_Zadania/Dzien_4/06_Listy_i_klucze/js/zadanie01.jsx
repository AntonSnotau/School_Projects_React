import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie01.js'

document.addEventListener('DOMContentLoaded', function(){
  class PeopleList2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        persons: people
      };
    }
    reverseIt = () => {
      const reversed = this.state.persons;
      reversed.reverse();
      this.setState({
        persons: reversed
      })
    }
    render(){
      const renderPersons = this.state.persons.map((item,index)=>{
        return <li key={item.email}>{ item.name }</li>
      })
      return(
        <div>
          <ul>
            {renderPersons}
          </ul>
          <button onClick={this.reverseIt}>Reverse!</button>
        </div>
      )
    }
  }
  class App extends React.Component {
    render(){
      return(
        <PeopleList2/>
      )
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
