import React from 'react';
import ReactDOM from 'react-dom';

/*
Handling events

Difference between HTML and React:
1. For events' name, HTML uses lowercase, React uses camelCase.
2. With JSX you pass a function as the event handler, rather than a string.
3. In React, you cannot return false to prevent default behavior. You must call preventDefault explicitly.
*/

function l005_1() {
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};
            
            //This binding is nessary to make 'this' work in the callback
            this.handleClick = this.handleClick.bind(this);
        }
        
        handleClick() {
            console.log("this.state.isToggleOn before click", this.state.isToggleOn);
            
            /*
            State Updates May Be Asynchronous, 
            setState function will receive the previous state as the first argument,
            do you remember it in l004?
            */
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }
        
        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
    }
    
    ReactDOM.render(
        <Toggle />,
        document.getElementById('root')
    );
}

/*
The bind is nessary.
->    this.handleClick = this.handleClick.bind(this);
If you don't want to use bind, there are two ways you can get around this.  
*/
function l005_2() {
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};
            
            //This binding is nessary to make 'this' work in the callback
            //this.handleClick = this.handleClick.bind(this); //just remove bind.
        }
        
        /// WAY 1
        //handleClick() {
        handleClick = () => {
            console.log("this.state.isToggleOn before click", this.state.isToggleOn);
            
            /*
            State Updates May Be Asynchronous, 
            setState function will receive the previous state as the first argument,
            do you remember it in l004?
            */
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }
        
        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
        /// WAY 2
        // <button onClick={(e) => this.handleClick(e)}>
    }
    
    ReactDOM.render(
        <Toggle />,
        document.getElementById('root')
    );
}



export {l005_1, l005_2}