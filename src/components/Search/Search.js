import React from "react"
import './Search.css';
import axios from 'axios';
import Checkpoints from '../Checkpoint/Checkpoints';
import { Get, AxiosProvider } from 'react-axios';

const axiosInstance = axios.create({
    baseURL: 'http://track-api.contin-web.com',
    timeout: 2000,
    headers: {'Api-Token': 'u2wW5v2dbrH98dApzZyDFS5xQuQvgvTP'}
});
const test_url = '/internal/trackings/';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this._BackClick = this._BackClick.bind(this);
        this.SimplifyClick = this.SimplifyClick.bind(this);
        this.state = {
            checkpoint_simplify: false
        }
    }

    render() {

        const todos = this.props;
        let track = todos.input[0].input;
        let url = test_url + track;
        return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <AxiosProvider instance={axiosInstance}>
                <Get url={url}>
                {(error, response, isLoading) => {
                if(error) {
                    return (
                        <div>
                            <div class="button_back_to_index_error">
                                <icon class="arrow-left" onClick={this._BackClick}>&larr; Back to the index</icon>
                            </div>
                            <div class="error_message">Something bad happened: {error.message}</div>
                        </div>
                    );
                }
                else if(isLoading) {
                    return (<img class="gif" alt="" src="processing.gif"></img>)
                }
                else if(response !== null) {
                    if(response.data.status === '400'){
                        return (
                            <div>
                                <div class="button_back_to_index_error">
                                    <icon class="arrow-left" onClick={this._BackClick}>&larr; Back to the index</icon>
                                </div>
                                <div class="error_message">
                                    {response.data.error[0].messages}
                                </div>
                            </div>
                        );
                    }
                    else{
                        return (
                            <div>
                                <div class="button_back_to_index">
                                    <icon class="arrow-left" onClick={this._BackClick}>&larr; Back to the index</icon>
                                </div>
                                <div class="tracking_outline">
                                    <span class="tracking_title">
                                        <div class="icon" onClick={this.SimplifyClick}>
                                            <i class={this.state.checkpoint_simplify ? "arrow right" : "arrow down"}></i>
                                        </div>
                                        <div class="tracking_info">
                                            <div class="tracking_info_label">OLS BBCode</div><div class="tracking_info_number">{response.data.data.ols_key}</div>
                                            <div class=""><div class="tracking_info_label">Sales Record Number</div><div class="tracking_info_number">{response.data.data.sales_record_number}</div></div>
                                            <div class=""><div class="tracking_info_label">Tracking Number</div><div class="tracking_info_number">{response.data.data.tracking_number}</div></div>
                                        </div>
                                    </span>
                                    <Checkpoints checkpoint_simplify={this.state.checkpoint_simplify} checkpoints={response.data.data.checkpoints}/>
                                </div>
                            </div>
                        )
                    }
                }
                return (<div>Default message before request is made.</div>)
                }}
                </Get>
            </AxiosProvider>
            </div>
        )
    }
    
    _BackClick() {
        const Input = this.props.input[0].input;
        this.props.authfalse(Input); //將value傳入父元件的addInput
    }

    SimplifyClick(){
        this.setState({
            checkpoint_simplify:!this.state.checkpoint_simplify
        })
    }


}
export default Search;