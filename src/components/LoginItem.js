import React, { Component } from 'react';

class LoginItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todo } = this.props;

        return (
            <tr>
                <td>
                    {todo.account}
                </td>
                <td>
                    {todo.password}
                </td>
            </tr>
        );
    }
}

export default LoginItem;