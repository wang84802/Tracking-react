import React from "react"
import './Search.css';
import axios from 'axios';
import TrackingOutlines from '../TrackingOutlines/TrackingOutlines';
import { Get, AxiosProvider } from 'react-axios';
import { CSSTransitionGroup } from 'react-transition-group';


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
    }

    render() {

        const todos = this.props;
        console.log(todos);
        let track = todos.input[0].input;

        let track_array = track.split('\n');
        let size = track_array['length'];
        let url = test_url + track_array[0];

        let array = [];

        array.push(
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <AxiosProvider instance={axiosInstance}>
                    <Get url={url}>
                        {(error, response, isLoading) => {
                        if(error)
                            return (
                                <div>
                                <div class="button_back_to_index_error">
                            <icon class="arrow-left" onClick={this._BackClick}>&larr; Back to the index</icon>
                        </div>
                            <div class="error_message">Something bad happened: {error.message}</div>
                        </div>
                    );

                    else if(isLoading)
                            return (<img class="gif" alt="" src="processing.gif"></img>)

                    else if(response !== null) {
                            if(response.data.status === '400')
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
                        else
                            return (
                                <div>
                                <div class="button_back_to_index">
                                    <icon class="arrow-left" onClick={this._BackClick}>&larr; Back to the index</icon>
                                </div>
                                <TrackingOutlines response={response}/>
                            </div>
                                    )
                                }
                            return <div>Default message before request is made.</div>
                        }}
                    </Get>
                </AxiosProvider>
            </div>
        );
        for(let i=1 ; i<size ;i++){

            let url = test_url + track_array[i];
            array.push(
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <AxiosProvider instance={axiosInstance}>
                        <Get url={url}>
                            {(error, response, isLoading) => {
                                if(error)
                                    return (
                                        <div>
                                            <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
                                                <div class="error_message">Something bad happened: {error.message}</div>
                                            </CSSTransitionGroup>
                                        </div>
                                    );

                                else if(response !== null) {
                                    if(response.data.status === '400')
                                        return (
                                            <div>
                                                <div class="error_message">
                                                    {response.data.error[0].messages}
                                                </div>
                                            </div>
                                        );
                                    else
                                        return (
                                            <div>
                                                <TrackingOutlines response={response}/>
                                            </div>
                                        );
                                }
                                return <div></div>
                            }}
                        </Get>
                    </AxiosProvider>
                </div>
            );
        }
        return (<div>{array}</div>);
    }

    _BackClick() {
        const Input = this.props.input[0].input;
        this.props.authfalse(Input); //將value傳入父元件的addInput
    }

}
export default Search;