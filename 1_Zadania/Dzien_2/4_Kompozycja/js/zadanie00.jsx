import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

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
    class ShopItemHeader extends React.Component {
      render(){
        return (
          <div>
              <h1>{this.props.title}</h1>
              <img src={this.props.image}/>
          </div>
        );
      }
    }
    class ShopItemPricing extends React.Component {
      render(){
        return (
          <div>
              Cena: {this.props.price} $uśmiechów
              <button>Kup!</button>
          </div>
        );
      }
    }
    class ShopItemDescription extends React.Component {
      render(){
        return (
          <article>
              <p>{this.props.desc}</p>
          </article>
        );
      }
    }
    class ShopItem extends React.Component {
      render(){
        console.log(this.props);
        return (
          <div>
              <ShopItemHeader title={this.props.product.title} image={this.props.product.image}/>
              <ShopItemDescription desc={this.props.product.description} />
              <ShopItemPricing price={this.props.product.price}/>
          </div>
        );
      }
    }
    class App extends React.Component {
      render(){
        return (
          <div>
            <ShopItem product={{
              title: "Garść Szczęścia",
              image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/1655A/production/_92928419_thinkstockphotos-508347326.jpg",
              description: "bo każdy zasluguje na szczęście :)",
              price: 1000500100900
            }} />
            <ShopItem product={{
              title: 'Prod 2',
              image: 'http://lorempixel.com/400/300',
              description: 'something ',
              price: 30
            }}/>
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
          </div>
        );
      }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
