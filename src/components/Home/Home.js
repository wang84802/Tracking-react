import React from "react"
import LoginAdd from  '../LoginAdd';
import LoginList from  '../LoginList';

const todos = [
    {
        account: '',
        password: ''
    },
];

class Home extends React.Component{
    constructor(props) {
        super(props); //要宣告super才能用this
        this.state = {
            todos,
            auth: false
        };
        this._loginTask = this._loginTask.bind(this);
    }
    render(){
        let component = null;
        if (this.state.auth) {
            component = <h1>Login success!</h1>;
        } else {
            component = <div>
                <p>This is Login</p>
                <LoginAdd loginTask={this._loginTask} />
                <LoginList todos={this.state.todos} />
            </div>
        }
        return (
            <header className="App-header">
                <div>{component}</div>
            </header>
        );
    }

    _loginTask(account,pwd) {
        let newTodos = [...this.state.todos];
        newTodos.push(
            {
                account: account,
                password: pwd
            });
        this.setState({ todos: newTodos });
        if(account == 123 && pwd == 123)
            this.setState({ auth: true });
    }
}
export {Home}