import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const messages = this.props.a;
        let array = [];

        array.push(<div class='table time'>{messages.time} </div>);
        if(messages.tag == 'OutForDelivery')
            array.push(
                <div class='table OutForDelivery'>
                    <table class='message-table'>
                        Out For <br></br>
                        Delivery
                    </table>
                </div>
            );
        else if(messages.tag == 'Delivered')
            array.push(
                <div class='table Delivered'>
                    <table class='message-table'>
                        Delivered
                    </table>
                </div>
            );
        else if(messages.tag == 'InTransit')
            array.push(
                <div class='table InTransit'>
                    <table class='message-table'>
                        In <br></br>
                        Transit
                    </table>
                </div>
            );
        else if(messages.tag == 'InfoReceived')
            array.push(
                <div class='table InfoReceived'>
                    <table class='message-table'>
                        Info <br></br>
                        Received
                    </table>
                </div>
        );
        array.push(<div class='table'>
                <table class='message_location_table'>
                    {messages.message}<br></br>
                    <div class="location">{messages.location}</div>
                </table>
            </div>
        );
        array.push(<br></br>);
        return(
            <div>{array}</div>
        );


    };


}

export default Message;