document.addEventListener('DOMContentLoaded', function(){
  class UpperCaseText extends React.Component {
    render() {
      return (
        <div>
            {props.text.toUpperCase()}
        </div>
      );
    }
  }
    class App extends React.Component {
      render() {
        return (
          <div>
              <UpperCaseText text="Ala ma kota!" />
          </div>
        );
      }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
