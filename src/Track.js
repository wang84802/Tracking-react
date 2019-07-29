import React, { Component } from 'react';
import Input  from "./components/Input/Input";
import Search from "./components/Search/Search";
import './Track.css';

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
        let component = null;
        if (this.state.auth === false) {
            component =
                <div>
                    <div class="area_search">
                        <div class="title_search">Search Trackings</div>
                        <p></p>
                        <Input addInput={this._addInput} input={this.state.input}/>
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
        window.addEventListener('message', e => {

            if (e.origin !== 'http://erp.contin-testing-site.com') return
            else {
                let newInput = [];
                newInput.push(
                    {
                        input: e.data.tracking_number,
                    });
                this.setState({input: newInput,auth: true});
            }
        }, false)

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
        let newInput = [];
        newInput.push(
            {
                input: val,
            });
        this.setState({ input: newInput,auth: true });
    }

    _authfalse(val){
        let newInput = [];
        newInput.push(
            {
                input: val,
            });
        this.setState({input: newInput,auth: false});
    }
}

export default Track;
