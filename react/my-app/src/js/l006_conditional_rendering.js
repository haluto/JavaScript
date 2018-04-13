import React from 'react';
import ReactDOM from 'react-dom';

function l006_1() {
    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }
    
    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }
    
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
    
    ReactDOM.render(
        // Try changing to isLoggedIn={true}:
        <Greeting isLoggedIn={true} />,
        document.getElementById('root')
    );
}

/*
Element Variables

You can use variables to store elements. 
This can help you conditionally render a part of the component 
while the rest of the output doesn’t change.

*/

function l006_2() {
    class LoginControl extends React.Component {
        constructor(props) {
            super(props);
            this.handleLoginClick = this.handleLoginClick.bind(this);
            this.handleLogoutClick = this.handleLogoutClick.bind(this);
            this.state = {isLoggedIn: false};
        }
        
        handleLoginClick() {
            this.setState({isLoggedIn: true});
        }
        
        handleLogoutClick() {
            this.setState({isLoggedIn: false});
        }
        
        render() {
            const isLoggedIn = this.state.isLoggedIn;
            
            let button = null;
            if(isLoggedIn) {
                button = <LogoutButton onClick={this.handleLogoutClick} />;
            }else {
                button = <LoginButton onClick={this.handleLoginClick} />;
            }
            
            return (
                <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    {button}
                </div>
            );
        }
    }/*class LoginControl*/
    
    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }
    
    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }
    
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
    
    function LoginButton(props) {
        return (
            <button onClick={props.onClick}>
                Login
            </button>
        );
    }
    
    function LogoutButton(props) {
        return (
            <button onClick={props.onClick}>
                Logout
            </button>
        );
    }
    
    ReactDOM.render (
        <LoginControl />,
        document.getElementById('root')
    );
}


/*
Inline If with Logical && Operator

You may embed any expressions in JSX by wrapping them in curly braces. 
This includes the JavaScript logical && operator. 
It can be handy for conditionally including an element:
*/
function l006_3() {
    function Mailbox(props) {
        const unreadMessages = props.unreadMessages;
        return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
                }
            </div>
        );
    }

    const messages = ['React', 'Re: React', 'Re:Re: React'];
    //const messages = [];
    ReactDOM.render(
        <Mailbox unreadMessages={messages} />,
        document.getElementById('root')
    );

}


/*
Inline If-Else with Conditional Operator

Another method for conditionally rendering elements inline is to use the JavaScript conditional 
operator condition ? true : false.
*/

/*
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
*/

/*
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}
*/


/*
Preventing Component from Rendering
*/
function l006_4() {
    function WarningBanner(props) {
        if (!props.warn) {
            return null;
        }

        return (
            <div className="warning">
                Warning!
            </div>
        );
    }

    class Page extends React.Component {
        constructor(props) {
            super(props);
            this.state = {showWarning: true}
            this.handleToggleClick = this.handleToggleClick.bind(this);
        }

        handleToggleClick() {
            this.setState(prevState => ({
                showWarning: !prevState.showWarning
            }));
        }

        render() {
            return (
                <div>
                    <WarningBanner warn={this.state.showWarning} />
                    <button onClick={this.handleToggleClick}>
                        {this.state.showWarning ? 'Hide' : 'Show'}
                    </button>
                </div>
            );
        }
    }
    
    ReactDOM.render(
        <Page />,
        document.getElementById('root')
    );
}
/*
Returning null from a component’s render method does not affect the firing of the 
component’s lifecycle methods. For instance, componentWillUpdate and 
componentDidUpdate will still be called.
*/


export {l006_1, l006_2, l006_3, l006_4}















