import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  function Menu(props) {
    return (
        <ul>
          {props.tab.map(item => {
            return (
              <li><a href={ item.urL }>{ item.text }</a></li>
            )
          })}
        </ul>
    )
  };
  // class Menu extends React.Component {
  //   render(){
  //     return (
  //         <ul>
  //           {this.props.tab.map(function(item){
  //             return (
  //               <li><a href={ item.urL }>{ item.text }</a></li>
  //             )
  //           })}
  //         </ul>
  //     )
  //   }
  // };
    ReactDOM.render(
        <Menu tab={[
            {
                urL     :   "/",
                text    :   "Strona główna"
            },
            {
                urL     :   "/blog",
                text    :   "Blog"
            },
            {
                urL     :   "/pricing",
                text    :   "Cennik"
            },
            {
                urL     :   "/contact",
                text    :   "Kontakt"
            }
        ]} />,
        document.getElementById('app')
    );
});
