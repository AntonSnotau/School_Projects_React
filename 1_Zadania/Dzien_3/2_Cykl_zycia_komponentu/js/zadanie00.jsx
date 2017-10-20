import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class Promo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: 'Do końca promocji 5 sekund!'
      }
      console.log('constructor');
    }

    startTimer(){
      this.timer = setTimeout(()=>{
        this.setState({
          text: 'KOniec promocji!'
        })
      },this.props.time);
    }

    componentDidMount(){
      console.log('zamonotowany');
      this.startTimer();
    }
    componentWillMount(){
      console.log('componentWillMount');
    }
    componentWillUnmount(){
      clearInterval(this.timer)
    }
    componentWillUpdate(){
      console.log('componentWillUpdate');
    }
    componentDidUpdate(){
      console.log('componentDidUpdate');
    }
    componentWillReceiveProps(){
      console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(){
      return true;
    }


    render(){
      return <h1>{this.props.name}{this.state.text}</h1>;
    }
  }


    ReactDOM.render(
      <div>
        <Promo name="promo 1" time={1000} />
        <Promo name="promo 2"  time={3000}/>
        <Promo name="promo 3" time={5000} />
      </div>,
        document.getElementById('app')
    );
});
