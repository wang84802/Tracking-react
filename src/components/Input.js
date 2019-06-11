import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this._onAddClick = this._onAddClick.bind(this);
    }

    render() {
        return (
            <div>
                <textarea rows="12" ref="Input"
                    placeholder="Enter one or more OLS BBCodes or Parcel IDs or Tracking Numbers (press ENTER to separate each number)">
                </textarea>
                <p></p>
                <div class="search_button" onClick={this._onAddClick}>Search</div>
            </div>
        );
    }
    _onAddClick() {
        const Input = this.refs.Input;
        this.props.addInput(Input.value); //將value傳入父元件的addInput
    }
}

export default Input;