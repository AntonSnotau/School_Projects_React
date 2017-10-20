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
          <h1>Hello, App</h1>
          <h2><Link to='/about/us'> O nas </Link></h2>
          <h2><Link to='/about/company'> O kompanii </Link></h2>
        </div>
      );
    }
  }
  class AboutUs extends  React.Component {
    render() {
      return(
        <h1>Trochę wiecej o nas</h1>
      );
    }
  }
  class AboutCompany extends  React.Component {
    render() {
      return(
        <h1>Trochę wiecej o kompanii</h1>
      );
    }
  }
    ReactDOM.render(
      <HashRouter>
        <Switch>
        <Route exact path='/' component={App}/>
          <Route exact path='/about/us' component={AboutUs}/>
          <Route exact path='/about/company' component={AboutCompany}/>
        </Switch>
      </HashRouter>,
      document.getElementById('app')
    );
});

//
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   HashRouter,
//   Link,
//   Route,
//   Switch
// } from 'react-router-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//
//   class App extends  React.Component {
//     render(){
//       return(
//         <div>
//           <h1>Hello, App</h1>
//           <Link to='/contact'> Contact </Link>
//         </div>
//       );
//     }
//   }
//   class Contact extends  React.Component {
//     render() {
//       return(
//         <h1>Hello, Contact</h1>
//       );
//     }
//   }
//
//     ReactDOM.render(
//       <HashRouter>
//         <Switch>
//         <Route exact path='/' component={App}/>
//         <Route exact path='/contact' component={Contact}/>
//         </Switch>
//       </HashRouter>,
//       document.getElementById('app')
//     );
// });
