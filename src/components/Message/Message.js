import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    render() {
        const messages = this.props.checkpoints;
        let array = [];
        if(messages.tag === 'OutForDelivery')
            array = (
                <div class='OutForDelivery'>
                    Out For <br></br>
                    Delivery
                </div>
            );
        else if(messages.tag === 'Delivered')
            array = (
                <div class='Delivered'>
                    Delivered
                </div>
            );
        else if(messages.tag === 'InTransit')
            array = (
                <div class='InTransit'>
                    In <br></br>
                    Transit
                </div>
            );
        else if(messages.tag === 'InfoReceived')
            array = (
                <div class='InfoReceived'>
                    Info <br></br>
                    Received
                </div>
            );
        else if(messages.tag === 'Exception')
            array = (
                <div class='Exception'>
                        Exception
                </div>
            );
        else if(messages.tag === 'AttemptFail')
            array = (
                <div class='AttemptFail'>
                    AttemptFail
                </div>
        );
        else if(messages.tag === 'Pending')
            array = (
                <div class='Pending'>
                    Pending
                </div>
        );
        return(
            <div class="checkpoint">
                <div>
                    <div class="checkpoint_time">{messages.time}</div>
                </div>
                <div class='table'>
                    <table class='message_table'>
                        {array}
                    </table>
                </div>
                <div>
                    <div class="checkpoint_message">{messages.message}</div>
                    <div class="checkpoint_location">{messages.location}</div>
                </div>
            </div>
        );
    };
}

export default Message;