import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class ShopItemHeader extends React.Component {
    render(){
      return (
        <div className='shoplist'>
            <h1>{this.props.title}</h1>
            <img src={this.props.image}/>
        </div>
      );
    }
  }
  class ShopList extends React.Component {
    render(){
      return (
        <div>
            {this.props.menu.map(function(item){
              return (
                <ShopItemHeader title={item.title} image={item.image}/>
              );
            })}
        </div>
      );
    }
  }
  class App extends React.Component {
      render(){
        return (
            <ShopList menu={[
                {
                    title   :   'Mysz komputerowa',
                    image   :   'https://upload.wikimedia.org/wikipedia/commons/a/aa/3-Tastenmaus_Microsoft.jpg'
                },
                {
                    title   :   'Klawiatura',
                    image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
                },
                {
                    title   :   'Laptop programisty',
                    image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
                }
            ]}/>
        );
      }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
