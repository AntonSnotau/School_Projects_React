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
