import React, { Component } from 'react';
import Message from './Message';
import './Checkpoints.css';


class Checkpoints extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let simplify = this.props.checkpoint_simplify;
        let data = this.props.checkpoints;
        let array = [];
        if(data.length === 0)
        {
            return <div></div>;
        }
        else if(simplify == false)
        {
            let array = [];
            let size = data.length;
            let latest_date = data[size-1].date;
            array.push(<div class="checkpoints_date">{latest_date}</div>);
            for(let i=size-1 ; i>=0 ; i--){
                if( data[i].date !== latest_date){
                    array.push(<div class="checkpoints_date">{data[i].date}</div>);
                    latest_date = data[i].date;
                }
                array.push(<Message a={data[i]}/>)
            }
            return <div class="checkpoints_detail">{array}</div>;
        }
        else {
            let array = [];
            let size = data.length;
            let latest_date = data[size-1].date;

            if(data[size-1].tag == 'OutForDelivery')
                array.push(
                    <div class='table OutForDelivery'>
                        <table class='message-table'>
                            Out For <br></br>
                            Delivery
                        </table>
                    </div>
                );
            else if(data[size-1].tag == 'Delivered')
                array.push(
                    <div class='table Delivered'>
                    <table class='message-table'>
                        Delivered
                    </table>
                </div>
                );
            else if(data[size-1].tag == 'InTransit')
                array.push(
                    <div class='table InTransit'>
                        <table class='message-table'>
                            In <br></br>
                            Transit
                        </table>
                    </div>
                );
            else if(data[size-1].tag == 'InfoReceived')
                array.push(
                    <div class='table InfoReceived'>
                        <table class='message-table'>
                            Info <br></br>
                            Received
                        </table>
                    </div>
                );

            return (
                <div class="checkpoint">
                    <div>
                        <div class="checkpoint_date">{data[size-1].date}</div>
                        <div class="checkpoint_time">{data[size-1].time}</div>
                    </div>
                        {array}
                    <div>
                        <div class="checkpoint_message">{data[size-1].message}</div>
                        <div class="checkpoint_location">{data[size-1].location}</div>
                    </div>
                </div>
                // <div class="checkpoints_detail">
                //     <div class="checkpoints_simplify_date">{latest_date}</div>
                //     <div>{data[size-1].time}</div>
                // </div>
            );
        }

    }

}

export default Checkpoints;