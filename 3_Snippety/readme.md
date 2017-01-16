<img src="http://coderslab.pl/wp-content/uploads/2016/03/logo-v2.png" align="right" style="width:150px; margin-top:45px"/>

# React - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

#### 1. Kompletny kod aplikacji z postami podzielony na komponenty
```JSX
class User extends React.Component {
    render() {
        return <div className="user">
            <img src={this.props.user.avatar}/>
            <strong>{this.props.user.name}</strong>
        </div>;
    }
}

class Post extends React.Component {
    render() {
        return <div className="post">
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.body}</p>
        </div>;
    }
}

class App extends React.Component{
    render() {
    return <div>
        <User user={ this.props.post.author }/>
        <Post post={ this.props.post }/>
    </div>;
    }
}

ReactDOM.render(
	<App post={post} />,
	document.getElementById('app')
);
```

#### 2. Przykładowy komponent ze stanem wewnętrznym oraz obsługą zdarzeń cyklu życia
```JSX
class Counter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        };
    }
    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
        return <h1>Jesteś tu {this.state.seconds} s.</h1>;
    }
}
```

#### 3. Aplikacja ToTo
```JSX
class ToDoItem extends React.Component{
    handleDoneClick = () => {
        //Pamiętaj o sprawdzeniu czy
        //atrybut istnieje i można go wywołać!
        if ( typeof this.props.onDone === 'function' ){
            this.props.onDone(this.props.title);
        }
    }
    render(){
        return <li><span>{this.props.title}</span>
            <button
                onClick={this.handleDoneClick}
            >Zakończ</button></li>;
    }
}

class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        };
    }
    handleItemDone = (title) => {
        const newItems = this.state.items.filter(item => {
            return item !== title;
        });
        this.setState({
            items: newItems
        });
    };
    render(){
        const items = this.state.items.map(item => {
            return <ToDoItem
                title={item}
                onDone={this.handleItemDone}
            />
        });
        return <ul>
            {items}
        </ul>;
    }
}

const items = ['Kupić bułki','Ugotować rosół',
    'Zrobić prezentację ze zdarzeń'];

ReactDOM.render(
    <ToDoList items={items} />,
    document.getElementById('app')
);
```

#### 4. Aplikacja żarówka
```JSX
class BulbOn extends React.Component{
    render(){
        return <strong>
            Żarówka świeci
            <button
                onClick={this.props.onClick}>
                Wyłącz
            </button>
        </strong>
    }
}

class BulbOff extends React.Component{
    render(){
        return <em>
            Żarówka zgaszona
            <button
                onClick={this.props.onClick}>
                Włącz
            </button>
        </em>
    }
}

class Bulb extends React.Component {
    //...
    constructor(props){
        super(props);

        this.state = {bulbOn:false};
    }
    handleTurnOffClick = () => {
        this.setState({bulbOn:false});
    }
    handleTurnOnClick = () => {
        this.setState({bulbOn:true});
    }
    //...
    render() {
        let bulb;
        if (this.state.bulbOn){
            bulb = <BulbOn
                onClick={this.handleTurnOffClick}
            />
        } else {
            bulb = <BulbOff
                onClick={this.handleTurnOnClick}
            />
        }

        return <div>
            <h1>Żarówka</h1>
            { bulb }
        </div>;
    }
}

ReactDOM.render(
    <Bulb />,
    document.getElementById('app')
);
```
