import React, { Component } from 'react';
import Message from '../Message/Message';
import './Checkpoints.css';


class Checkpoints extends Component {

    render() {
        let simplify = this.props.checkpoint_simplify;
        let data = this.props.checkpoints;
        let array = [];
        if(data.length === 0)
            return <div></div>;
        else if(simplify === false) {

            let size = data.length;
            let latest_date = data[size-1].date;
            array.push(<div class="checkpoints_date">{latest_date}</div>);
            for(let i=size-1 ; i>=0 ; i--){
                if( data[i].date !== latest_date){
                    array.push(<div class="checkpoints_date">{data[i].date}</div>);
                    latest_date = data[i].date;
                }
                array.push(<Message checkpoints={data[i]}/>)
            }
            return <div class="checkpoints_detail">{array}</div>;
        }
        else {

            let size = data.length;

            if(data[size-1].tag === 'OutForDelivery')
                array.push(
                    <div class="OutForDelivery">
                        Out For <br></br>
                        Delivery
                    </div>
                );
            else if(data[size-1].tag === 'Delivered')
                array.push(
                    <div class="Delivered">
                        Delivered
                    </div>
                );
            else if(data[size-1].tag === 'InTransit')
                array.push(
                    <div class="InTransit">
                            In <br></br>
                            Transit
                    </div>
                );
            else if(data[size-1].tag === 'InfoReceived')
                array.push(
                    <div class="InfoReceived">
                        Info <br></br>
                        Received
                    </div>
                );
            else if(data[size-1].tag === 'Exception')
                    array.push(
                    <div class="Exception">
                        Exception
                    </div>
            );
            else if(data[size-1].tag === 'AttemptFail')
                    array.push(
                    <div class="AttemptFail">
                        AttemptFail
                    </div>
            );
            else if(data[size-1].tag === 'Pending')
                    array.push(
                    <div class="Pending">
                        Pending
                    </div>
            );

            return (
                <div class="checkpoint">
                    <div>
                        <div class="checkpoint_date">{data[size-1].date}</div>
                        <div class="checkpoint_time">{data[size-1].time}</div>
                    </div>
                    <div class='table'>
                        <table class='message_table'>
                            {array}
                        </table>
                    </div>
                    <div>
                        <div class="checkpoint_message">{data[size-1].message}</div>
                        <div class="checkpoint_location">{data[size-1].location}</div>
                    </div>
                </div>
            );
        }
    }
}

export default Checkpoints;