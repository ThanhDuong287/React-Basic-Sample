import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        return (
            <div className="ToDoItem">
                <h1>
                    Name: {this.props.name}
                </h1>
                <p>
                    Age: {this.props.age}
                </p>
                <p>
                    Country: {this.props.country}
                </p>
            </div>
        );
    }
}
export default ToDoItem;