import React, { Component } from 'react';
import ChatElement from '../Chat-Element';
import {ActionFetchGET} from '../../action/index'
import { connect } from 'react-redux';
import { GETmessageState as GETmessageStateActtion} from '../../action/index'
// import store from '../../store'

class Chat extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }


    componentWillMount() {
    //    sendApi(null, "GET", `message/${this.props.storePropsId}`)
    //         .then(response => this.props.GETmessageState(this.props.storePropsId, response))
    this.props.ActionFetchGET(this.props.storePropsId)
    }

    render() {
        return (
            <div id="chat">
                {this.props.ServerGetMessageProps.map(message => {return (<ChatElement key={message._id} mssObj={message}></ChatElement>) })}
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        storePropsId: store.chatRoomState.id,
        ServerGetMessageProps: store.messageState.message[store.chatRoomState.id]
    };
}

const mapDispatchToProps = {
    ActionFetchGET:ActionFetchGET
    }

export default connect(mapStateToProps,mapDispatchToProps)(Chat) 
