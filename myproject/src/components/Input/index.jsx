import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {

    this.setState({ value: event.target.value })
  }
  render() {
    const { name } = this.props
    return (
      <input type="text" placeholder = {name} value = {this.state.value} name={name} onChange={this.handleChange} id="inp"/>
    )
  }
}


export default Input