import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function(){

  class App extends  React.Component {
    render(){
      return(
        <div>
          <h1>Witaj na stronie</h1>
          <Link to='/hello/Anton'>Moj profil</Link>
        </div>
      );
    }
  }
  class HelloYou extends  React.Component {
    render() {
      return(
        <h1>Hello {this.props.match.params.name}</h1>
      );
    }
  }
    ReactDOM.render(
      <HashRouter>
        <Switch>
        <Route exact path='/' component={App}/>
          <Route exact path='/hello/:name' component={HelloYou}/>
        </Switch>
      </HashRouter>,
      document.getElementById('app')
    );
});
