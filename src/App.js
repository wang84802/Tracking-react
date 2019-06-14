import React, { Component } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

const todos = [
    {
        task: 'Install packages',
        isCompleted: false
    },
    {
        task: 'Add webpack.config.js',
        isCompleted: false
    },
    {
        task: 'Break UI into components',
        isCompleted: false
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: 1};
        this.handleAdd = this.handleAdd.bind(this);
    }



    render() {
        return (
            <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
            <h1>Fading at Initial Mount</h1>
        </CSSTransitionGroup>
    );
    }
}




export default App;
