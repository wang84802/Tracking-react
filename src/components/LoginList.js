import React, { Component } from 'react';
import LoginItem from './LoginItem';


class LoginList extends Component {
    constructor(props) {
        super(props);
        this._renderItems = this._renderItems.bind(this);
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>account</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this._renderItems()}
                    </tbody>
                </table>
            </div>
    );
    }

    _renderItems() {
        const { todos } = this.props; //把props的saveTask 再傳給TodoItem

        let list = [];
        todos.forEach((todo) => {
            list.push(
            <LoginItem
            todo={todo}
            />);
        });
        return list;
    }
}

export default LoginList;