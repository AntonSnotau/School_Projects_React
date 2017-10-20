import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class TextField extends React.Component {
      constructor(props) {
        super(props);
        this.state  = {
          text: '',
          maxLetters: 10
        }
      }
      handleText = (event)=>{
        this.setState({
          text: event.target.value
        })
      }
      handleSelect = (event)=>{
        this.setState({
          maxLetters: Number(event.target.value)
        })
      }

      render(){
        return (
          <div>
            max length:
            <select onChange={this.handleSelect}>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <br/>
            <textarea onChange={this.handleText} value={this.state.text} disabled={
              this.state.text.length >= this.state.maxLetters
            }/>
          </div>
        )
      }
    }
    ReactDOM.render(
        <TextField/>,
        document.getElementById('app')
    );
});
