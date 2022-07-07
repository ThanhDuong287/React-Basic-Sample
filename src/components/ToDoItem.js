import React, { Component } from 'react';
import classNames from 'classnames';
import '../components/ToDoItem.css';
import '/Visual Studio Code/React-Base/react-basic-sample/src/components/ToDoItem.css';
import checkImg from '../img/user.png';
import checkVerifyImg from '../img/verified-user.png';
class ToDoItem extends Component {
    render() {
        const { onClick } = this.props;
        const item = this.props.data;
        let url = checkImg;
        if (item.isCompleted) {
            url = checkVerifyImg;
        }
        return (
            <div className={classNames('ToDoItem', { 'ToDoItem-complete': item?.isCompleted })}>
                <img onClick={onClick} src={url} width={32} height={32} />
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