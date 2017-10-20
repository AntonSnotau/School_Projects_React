import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      }
    }
    componentDidMount () {
      fetch('https://www.metaweather.com/api/location/search/?query=Warsaw')
      .then(response => response.json())
      .then(data => {
        return fetch('https://www.metaweather.com/api/location/' + data[0].woeid);
      }).then(weather => {
        return weather.json()
      })
      .then (weatherData => {
        return (
          this.setState({
            items: weatherData.consolidated_weather
          })
        )
      })
    }
    render() {
      return (
        <div>
        {this.state.items.map((item, index) => {
          return (
            <div key={index}> //taki sposob jest spoko
              <p>temperatura: {item.the_temp}</p>
              <p>ciśnienie: {item.air_pressure}</p>
            </div>
          )
        })}
          <h1> Hej </h1>
        </div>
      );
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
