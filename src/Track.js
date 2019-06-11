import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TodoList from './components/TodoList';
import LoginAdd from  './components/LoginAdd';
import LoginList from  './components/LoginList';
import Input from './components/Input';
import { Home } from "./components/Home/Home";
import { Search } from "./components/Search/Search";
import { About } from "./components/About/About";
import './track.css';

const input = [];

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input,
            auth: false
        };
        this._addInput = this._addInput.bind(this);
        this._authfalse = this._authfalse.bind(this);
    }

    render() {
        const { data } = this.state;
        let component = null;
        if (this.state.auth == false) {
            this.state.input = [];
            component =
                <div>
                    <div class="area_search">
                        <div class="title_search">Search Trackings</div>
                        <p></p>
                            <Input addInput={this._addInput}/>
                    </div>
                </div>;
        } else {
            component =
                <div>
                    <div class="area_display">
                        <Search input={this.state.input} authfalse={this._authfalse}/>
                    </div>
                </div>
        }
        return (
            <div id="app">
                <div class="logo">
                    <img src="Continental_logo.jpg" alt="Continental"></img>
                </div>
                <div class="textarea_search">
                    {component}
                </div>
            </div>
        );
    }

    _addInput(val){
        let newInput = [...this.state.input];
        newInput.push(
            {
                input: val,
            });
        this.setState({ input: newInput,auth:true });
    }

    _authfalse(){
        this.setState({auth: false});
    }
}

export default Track;
