import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        item: ''
      }
    }
    componentDidMount () {
      fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + this.props.isbn)
      .then(response => response.json())
      .then(itemTab => {
          this.setState({
            item: itemTab.items[0].volumeInfo.title
          })
      })
    }
    render() {
      return (
          <div>
            <h1>{this.state.item}</h1>
          </div>
      );
    }
  }
    ReactDOM.render(
        <App isbn='0747532699'/>,
        document.getElementById('app')
    );
});
