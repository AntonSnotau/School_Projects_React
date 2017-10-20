import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  class Email extends React.Component {
    render() {
      return (
        <div>
            <h1>{this.props.subject}</h1>
            <div>{this.props.body}<hr />{this.props.footer}</div>
            <pre>{this.props.textBody}<hr />{this.props.footer}</pre>
        </div>
      );
    }
  }
  class App extends React.Component {
    render() {
      return (
        <Email
            subject = {
                <span>Witaj, oto treść maila</span>
            }
            body = {
                [<h1 key='body_head'>Promocja z e-maila!</h1>,
                <hr key='body_hr' />,
                <p key='body_p'>Witaj, oto Twój nowy e-mail...</p>]
            }
            textBody = {
                [<p key='body_prom'>Promocja z e-maila!</p>,
                <p key='body_hello'>Witaj, oto Twój nowy e-mail...</p>]
            }
            footer = {
                <p>Mail by my
                  <a href="http://example.com/unsubscripe">Kliknij tutaj, aby się wypisać</a>
                </p>
            }
        />
      )
    }
  }
  ReactDOM.render(
    <App/>, document.getElementById('app'));
});
