import React, { Component } from 'react'
import { sendApi } from '../../utils/index'
import Option from '../Options';
import { getChatRooms as getChatRoomsAction, chatRoomIdSetState as chatRoomIdSetStateAction } from '../../action/index'
import {ActionFetchGETid} from '../../action/index'
import { connect } from 'react-redux';
import store from '../../store'

class SelectComponent extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    const { ActionFetchGETid } = this.props
    // sendApi(null, "GET", "ChatRooms")
    //   .then(data => getChatRooms(data))
    ActionFetchGETid()
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
  ActionFetchGETid: ActionFetchGETid
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent) 
