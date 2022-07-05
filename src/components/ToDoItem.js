import React, { Component } from 'react';
import '/Visual Studio Code/React-Base/react-basic-sample/src/components/ToDoItem.css';

class ToDoItem extends Component {
    render() {
        const { item } = this.props;
        let className = 'ToDoItem';
        if (item.isComplete) {
            className += ' ToDoItem-complete';
        }
        return (
            <div className={className}>
                <h1>
                    Name: {this.props.item.name}
                </h1>
                <p>
                    Age: {this.props.item.age}
                </p>
                <p>
                    Country: {this.props.item.country}
                </p>
            </div>
        );
    }
}
export default ToDoItem;