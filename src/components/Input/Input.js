import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this._onAddClick = this._onAddClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // event.target 是當前的 DOM elment
        // 從 event.target.value 取得 user 剛輸入的值
        // 將 user 輸入的值更新回 state
        // console.log(event.target.value);
        // this.setState({value: event.target.value});
    }

    render() {
        let Inital_input = null;
        if(this.props.input.length !== 0)
            Inital_input = this.props.input[0].input;
        
        return (
            <div>
                <textarea rows="12" ref="Input" defaultValue={Inital_input}
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

export default  Input ;