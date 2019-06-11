import React, { Component } from 'react';


class LoginAdd extends Component {
    constructor(props) {
        super(props);
        this._onLoginClick = this._onLoginClick.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" ref="accountInput" />
                <br/>
                <input type="text" ref="passwordInput" />
                <br/>
                <button onClick={this._onLoginClick}>Login</button>
            </div>
        );
    }
    _onLoginClick() {
        const accountInput = this.refs.accountInput;
        const passwordInput = this.refs.passwordInput;
        this.props.loginTask(accountInput.value,passwordInput.value); //將value傳入父元件的addTask
        accountInput.value = '';
        passwordInput.value = '';
    }
}

export default LoginAdd;