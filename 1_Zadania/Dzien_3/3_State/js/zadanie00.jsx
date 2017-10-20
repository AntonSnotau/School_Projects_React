import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class HelloWorld extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          hello: "Hello, World!",
          shouldShow: false
        }
      }

      componentDidMount(){
        console.log('zamonotowany');
        this.timer = setTimeout(() => {
          // this.state.hello = "hello everyone"; blleeeeeeee
          this.setState({
            hello: 'hello, can you hear me?'
          })
        },4000)
        this.timer2 = setTimeout(() => {
          // this.state.hello = "hello everyone"; blleeeeeeee
          this.setState({
            shouldShow:true
          })
        },8000)
      }
      componentWillMount(){
        console.log('componentWillMount');
      }
      componentWillUnmount(){
        clearInterval(this.timer);
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
        return this.state.shouldShow ? (
            <div>NI ma napisu ;)</div>
        ): (
          <h1>{this.state.hello}</h1>
        )
      }
    }

    class App extends React.Component {
      render(){
        return <HelloWorld/>;
      }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

    // setInterval(()=>{
    //   ReactDOM.render(
    //       <div>?</div>,
    //       document.getElementById('app')
    //   );
    // },8000)
});
