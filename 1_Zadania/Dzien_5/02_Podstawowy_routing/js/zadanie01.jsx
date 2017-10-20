import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Link,
  Route,
  Switch,
  IndexRoute
} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function(){

  class App extends  React.Component {
    render(){
      return(
        <div>
          <h1>Witaj na stronie</h1>
          <h2><Link to='/blog'> Blog </Link></h2>
          <h2><Link to='/pricing'> Cennik </Link></h2>
        </div>
      );
    }
  }
  class Blog extends  React.Component {
    render() {
      return(
        <h1>Blog</h1>
      );
    }
  }
  class Pricing extends  React.Component {
    render() {
      return(
        <h1>Cennik</h1>
      );
    }
  }
    ReactDOM.render(
      <HashRouter>
        <Switch>
        <Route exact path='/' component={App}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/pricing' component={Pricing}/>
        </Switch>
      </HashRouter>,
      document.getElementById('app')
    );
});
