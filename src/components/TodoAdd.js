import React, { Component } from 'react';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this._onAddClick = this._onAddClick.bind(this);
    }

    render() {
        return (
            <div>
                <textarea type="text" ref="addInput" />
                <button onClick={this._onAddClick}>Create</button>
            </div>
        );
    }

    _onAddClick() {
        const addInput = this.refs.addInput;

        this.props.addTask(addInput.value); //將value傳入父元件的addTask
        addInput.value = ''; //input欄位清空
    }
}

export default TodoAdd;
