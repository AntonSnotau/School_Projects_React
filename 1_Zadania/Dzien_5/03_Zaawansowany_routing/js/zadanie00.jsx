import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1> Witaj na stronie! </h1>
      </div>
    )
  }
}

class HelloYou extends React.Component {
  render() {
    return (
      <h1>
        Hello {this.props.match.params.name}
      </h1>
    );
  }
}

class CheckAge extends React.Component {
  render() {
    return (
      <h1> {this.props.match.params.age > 18
        ? 'jestes pelnoletni'
        : 'jestes niepelnoletni'
      }
      </h1>
    );
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/hello/:name" component={HelloYou}/>
            <Route exact path="/checkage/:age" component={CheckAge}/>

          </Switch>
        </HashRouter>,
        document.getElementById('app')
    );
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   HashRouter,
//   Link,
//   Route,
//   Switch,
//   IndexRoute
// } from 'react-router-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//
//   class App extends  React.Component {
//     render(){
//       return(
//         <div>
//           <h1>Witaj na stronie</h1>
//           <Link to='/hello/Anton'>Moj profil</Link>
//         </div>
//       );
//     }
//   }
//   class CheckAge extends  React.Component {
//     render() {
//       return(
//         <h1> {this.props.match.params.age} > 18
//         ? 'jesteś pełnolietni'
//         : 'jesteś niepełnolietni'
//         </h1>
//       );
//     }
//   }
//   class HelloYou extends  React.Component {
//     render() {
//       return(
//         <h1>Hello {this.props.match.params.name}</h1>
//       );
//     }
//   }
//     ReactDOM.render(
//       <HashRouter>
//         <Switch>
//         <Route exact path='/' component={App}/>
//           <Route exact path='/hello/:name' component={HelloYou}/>
//         </Switch>
//       </HashRouter>,
//       document.getElementById('app')
//     );
// });
