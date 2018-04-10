import React from 'react';
import ReactDOM from 'react-dom';

function z1_5_1_a() {
    //Parent Component
    class GroceryList extends React.Component {
        render() {
            return (
                <ul>
                    <ListItem quantity="1" name="Bread" />
                    <ListItem quantity="6" name="Eggs" />
                    <ListItem quantity="2" name="Milk" />
                </ul>
            );
        }
    }
    
    //Child Component
    class ListItem extends React.Component {
        render() {
            return (
                <li>
                    {this.props.quantity} x {this.props.name}
                </li>
            );
        }
    }
    
    ReactDOM.render(<GroceryList />, document.getElementById("root"));
}

/*
除了使用命令props外，还可以通过props.children来引用位于前置标签和后置标签之间的内容。
*/
function z1_5_1_b() {
    //Parent Component
    class GroceryList extends React.Component {
        render() {
            return (
                <ul>
                    <ListItem quantity="1">Bread</ListItem>
                    <ListItem quantity="6">Eggs</ListItem>
                    <ListItem quantity="2">Milk</ListItem>
                </ul>
            );
        }
    }
    
    //Child Component
    class ListItem extends React.Component {
        render() {
            return (
                <li>
                    {this.props.quantity} xx {this.props.children}
                </li>
            );
        }
    }
    
    ReactDOM.render(<GroceryList />, document.getElementById("root"));
}


export {z1_5_1_a, z1_5_1_b}