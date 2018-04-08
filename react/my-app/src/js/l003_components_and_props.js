import React from 'react';
import ReactDOM from 'react-dom';


//$$$ Components and Props.

function l003_1() {
    
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    class Welcome1 extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
    
    //The above two components are equivalent from React’s point of view.

    //Previously, we only encountered React elements that represent DOM tags:
    //const element = <div />;
    //However, elements can also represent user-defined components:
    const element = <Welcome1 name="Sara" />;

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
    
}

function l003_2() {
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    function App() {
        return (
            <div>
                <Welcome name = "Sara" />
                <Welcome name = "Cahal" />
                <Welcome name = "John" />
            </div>
        );
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );    
}

function l003_3() {
    function formatDate(date) {
        return date.toLocaleDateString();
    }

    function Avatar(props) {
        return (
            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
        );
    }

    function UserInfo(props) {
        return (
            <div className="UserInfo">
                <Avatar user={props.user} />
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
        );
    }

    function Comment(props) {
        return (
            <div className="Comment">
                <UserInfo user={props.author} />
                <div className="Comment-text">{props.text}</div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }

    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64',
        },
    };

    ReactDOM.render(
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
        />,
        document.getElementById('root')
    );
}






export {l003_1, l003_2, l003_3}























