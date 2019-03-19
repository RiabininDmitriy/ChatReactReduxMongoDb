import React, { Component } from 'react';
import ChatElement from '../Chat-Element';
import { sendApi } from '../../utils/index'
import store from '../../store'
import { connect } from 'react-redux';
import { GETmessageState as GETmessageStateActtion} from '../../action/index'

class Chat extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }


    componentWillMount() {
       sendApi(null, "GET", `message/${this.props.storePropsId}`)
            .then(response => this.props.GETmessageState(this.props.storePropsId, response))
    }

    render() {
        return (
            <div id="chat">
                {this.props.ServerGetMessageProps.map(message => {return (<ChatElement mssObj={message}></ChatElement>) })}
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
        GETmessageState:GETmessageStateActtion
    }

export default connect(mapStateToProps,mapDispatchToProps)(Chat) 
