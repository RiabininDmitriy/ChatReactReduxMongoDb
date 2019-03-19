import React, { Component } from 'react'
import { sendApi } from '../../utils/index'
import Option from '../Options';
import { getChatRooms as getChatRoomsAction, chatRoomIdSetState as chatRoomIdSetStateAction } from '../../action/index'
import store from '../../store'
import { Provider, connect } from 'react-redux';

// export let ROOMID = 1;

class SelectComponent extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    const { getChatRooms } = this.props
    sendApi(null, "GET", "ChatRooms")
      .then(data => getChatRooms(data))
  }
  handleChange(event) {
    const { chatRoomIdSetState } = this.props

    chatRoomIdSetState(event.target.value)
  }

  render() {
    return (
      <select id="slct" onChange={this.handleChange}>
        {this.props.storePropsChatRoom.map(option => { return (<Option id={option.id} key={option.id} value={option.roomName}></Option>) })}
      </select>
    )
  }
}

const mapStateToProps = function (store) {
  return {
    storePropsChatRoom: store.chatRoomState.chatRoom,
    storePropsId: store.chatRoomState.id
  };
}

const mapDispatchToProps = {
  getChatRooms: getChatRoomsAction,
  chatRoomIdSetState: chatRoomIdSetStateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent) 
