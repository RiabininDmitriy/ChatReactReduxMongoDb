import React from 'react'
import { sendApi } from '../../utils/index'


class ChatElement extends React.Component{
    render(){
        const {mssObj} = this.props
                return(
      <div>
          <b id = "chatElem1"> {`${mssObj.nick} : `} </b>
          <b id = "chatElem">{mssObj.message}</b>
          <b>{`  :  ${mssObj.time}`}</b>
      </div>  
        )
    }
}

export default ChatElement