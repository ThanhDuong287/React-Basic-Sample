import React, { Component } from 'react';
import classNames from 'classnames';
import '/Visual Studio Code/React-Base/react-basic-sample/src/components/ToDoItem.css';

class ToDoItem extends Component {
    render() {
        const { onClick } = this.props;
        const item = this.props.data;
        return (
            <div onClick={onClick} className={classNames('ToDoItem', { 'ToDoItem-complete': item?.isCompleted })}>
                <h1>
                    Name: {item?.name}
                </h1>
                <p>
                    Age: {item?.age}
                </p>
                <p>
                    Country: {item?.country}
                </p>
            </div>
        );
    }
}
export default ToDoItem;