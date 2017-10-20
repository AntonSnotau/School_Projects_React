import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class LetsMakeButtons extends React.Component {
    constructor(props) {
      super(props);
      this.state = ({
        mapa: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
      })
    }
    createButton = () => {
      this.state.mapa.map(item => {
          <button name={item}>Klik!</button>
      };
    }
    handleClick = (event) => {

    }
    render() {
        return(
        <div>
        {this.createButton}
        </div>
        )
      })
      // return (
      //   <div>
      //     {this.createButton}
      //   </div>
      // )
  }
  class App extends React.Component {
    render(){
      return (
        <LetsMakeButtons/>
      )
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
