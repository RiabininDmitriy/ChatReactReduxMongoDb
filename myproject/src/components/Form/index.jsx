import React, { Component } from 'react'
import Input from '../Input'
import ButtonComponent from '../Button'
import { sendApi } from '../../utils/index'
import SelectComponent from  '../Select'
import store from '../../store'
import {connect}   from 'react-redux';
import {POSTmessageState as POSTmessageStateAction} from '../../action/index'
import { checkPropTypes } from 'prop-types';

class Form extends Component {
    constructor(props) { 
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit(event) {
        event.preventDefault()
        const formValue = { nick: this.nickValue.state.value, message: this.messageValue.state.value , roomId : this.props.storePropsId}
        sendApi(formValue, "POST","message")
        .then(response => this.props.POSTmessageState(this.props.storePropsId,response))
        .then(()=>{this.nickValue.setState({value:""})
        this.messageValue.setState({value:""})})
    }
        
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <SelectComponent  ref = {select => this.select = select}/>
                    <Input name="nick" ref={(node) => this.nickValue = node} />
                    <Input name="message" ref={(node) => this.messageValue = node} />
                    <ButtonComponent  ref={(node)=> this.ButtonComponent = node} />
                </form>
            </div>
        )
    }
}


const mapStateToProps = function (store) {
    return {
      storePropsId: store.chatRoomState.id
    };
  }

const mapDispatchToProps = {
    POSTmessageState:POSTmessageStateAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Form) 

