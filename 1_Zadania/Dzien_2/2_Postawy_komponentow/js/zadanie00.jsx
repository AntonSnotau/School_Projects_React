import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  // function GoogleMe(){
  //   return (
  //     <div>
  //       <input type='text'/>
  //       <button> wyszukaj </button>
  //     </div>
  //   )
  // };

  class GoogleMe extends React.Component {
    render(){
      return (
       <div>
         <input type='text'/>
         <button> wyszukaj! </button>
       </div>
     );
    }
  };
    ReactDOM.render(
      <div>
        <GoogleMe />
        <GoogleMe />
        <GoogleMe />
      </div>,
        document.getElementById('app')
    );
});
