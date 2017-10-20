import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  // class LikeBox extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>Nas polubio: </h1>
  //         <button>Like!</button>
  //       </div>
  //     );
  //   }
  // };
  function LikeBox(){
    return (
      <div>
        <h1>Nas polubiło: </h1>
        <button>Like!</button>
      </div>
    );
  }
    ReactDOM.render(
        <LikeBox />,
        document.getElementById('app')
    );
});
