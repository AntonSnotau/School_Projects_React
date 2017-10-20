import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class LikeBox extends React.Component {
    render() {
      return (
        <div>
          <h1>Nas polubio: { this.props.likes }</h1>
          <button>Like!</button>
        </div>
      );
    }
  };
  // function LikeBox(props){
  //   return (
  //     <div>
  //       <h1>Nas polubiło: { props.likes }</h1>
  //       <button>Like!</button>
  //     </div>
  //   );
  // }
    ReactDOM.render(
        <LikeBox likes='1020302'/>,
        document.getElementById('app')
    );
});
