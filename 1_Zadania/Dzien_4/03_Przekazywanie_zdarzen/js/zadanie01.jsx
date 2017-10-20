import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ShopItem extends React.Component {
      handleClick = () => {
        if ( typeof this.props.onBuy === 'function' ){
          this.props.onBuy(this.props.title, this.props.price)
        }
      }
      render(){
        return (
          <div onClick={this.handleClick}>{ this.props.title }</div>
        )
      }
    }
    class Shop extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          buyedItems: [],
          price: 0
        }
      }
     addItem = (title, price) => {
       let a = this.state.buyedItems;
       a.push(title);
       this.setState({
         buyedItems: a,
         price: this.state.price + price
       });
     }
      render(){
        const list = this.state.buyedItems.map((item)=>{
          return <li>{ item }</li>;
        })
        return (
          <div>
              <h2>Total price: { this.state.price }</h2>
              <ShopItem title="skarpetki" price={10.5} onBuy={this.addItem}/>
              <ShopItem title="koszula" price={40} onBuy={this.addItem}/>
              <ShopItem title="pończochy" price={18} onBuy={this.addItem}/>
              <ul>
                  {list}
              </ul>
          </div>
        );
      }
    }

    class App extends React.Component {
      render (){
        return (
          <Shop />
        )
      }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
