import React, { Component } from 'react'


class Option extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const {value,id} = this.props
    return(
    <option value = {id}>
      {value}
    </option>
  )
  }
}
 export default Option
