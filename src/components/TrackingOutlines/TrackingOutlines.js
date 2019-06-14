import React, { useState,Component } from 'react';
import Checkpoints from '../Checkpoint/Checkpoints';

class TrackingOutlines extends Component {
    constructor(props) {
        super(props);
        this.SimplifyClick = this.SimplifyClick.bind(this);
        this.state = {
            checkpoint_simplify: false
        }
    }

    render() {
        let response = this.props.response;
        return (
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
         );
    }

    SimplifyClick(){
        this.setState({
            checkpoint_simplify:!this.state.checkpoint_simplify
        })
    }

}

export default TrackingOutlines;