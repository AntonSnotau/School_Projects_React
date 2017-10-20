import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class ChatHeader extends React.Component {
    render() {
      return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
      );
    }
  };
  class ChatMessages extends React.Component {
    render() {
      return (
        <ul></ul>
      );
    }
  };
  class ChatMessage extends React.Component {
    render() {
      return (
        <li>Wpis z chatu 1</li>
      );
    }
  };
  class NewChatMessage extends React.Component {
    render() {
      return (
        <footer>
            <input type="text"/>
            <button>Wyślij</button>
        </footer>
      );
    }
  };
    function Chat(props){
        return ( <div className="chat">
            <ChatHeader />
            <div>
                <ChatMessages>
                   <ChatMessage/>
                   <ChatMessage/>
                   <ChatMessage/>
                </ChatMessages>
            </div>
            <NewChatMessage/>
        </div>
    )}

    function App(props){
        return <div>
            <Chat />
        </div>;
    }

    // class Chat extends React.Component{
    //     render(){
    //         return <div className="chat">
    //             <header>
    //                 <h1>Chat prywatny</h1>
    //             </header>
    //             <div>
    //                 <ul>
    //                     <li>Wpis z chatu 1</li>
    //                     <li>Wpis z chatu 2</li>
    //                     <li>Wpis z chatu 3</li>
    //                 </ul>
    //             </div>
    //             <footer>
    //                 <input type="text"/>
    //                 <button>Wyślij</button>
    //             </footer>
    //         </div>
    //     }
    // }
    //
    // class App extends React.Component{
    //     render(){
    //         return <div>
    //             <Chat />
    //         </div>;
    //     }
    // }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
