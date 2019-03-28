import React, { Component } from 'react'
import Option from '../Options';
import {ActionFetchGETid, chatRoomIdSetState,ActionFetchIdSetState} from '../../action/index'
import { connect } from 'react-redux';

class SelectComponent extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    const { ActionFetchGETid } = this.props
    ActionFetchGETid()
  }
  handleChange(event) {
    const { ActionFetchIdSetState } = this.props
    ActionFetchIdSetState(event.target.value)

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
  ActionFetchGETid: ActionFetchGETid,
  ActionFetchIdSetState:ActionFetchIdSetState
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent) 
