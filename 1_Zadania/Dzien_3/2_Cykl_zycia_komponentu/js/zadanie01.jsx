import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class LifeCyclesTester extends React.Component {
    componentWillMount(){
      console.log('Komponent będzie zamontowany');
    }
    componentDidMount(){
      console.log('Komponent został zamontowany');
    }
    componentWillReceiveProps(nextProps) {
      console.log('Komponent będzie aktualizowany');
    }
    render(){
      console.log(this);
      return <h1>{ this.props.text }</h1>;
    }
  }
  ReactDOM.render(
    <div>
      <LifeCyclesTester text='Test 1' />
    </div>,
    document.getElementById('app')
  );
  setTimeout(()=>{
    ReactDOM.render(
      <div>
        <LifeCyclesTester text='Test 2' />
      </div>,
      document.getElementById('app')
    )}, 5000);

});
