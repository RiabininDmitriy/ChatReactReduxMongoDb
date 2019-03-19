import React, { Component } from 'react';

class ButtonComponent extends Component {
    render() {
      const  {disabled} = this.props
      console.log(disabled)
      return (
        <button id="btn">SEND</button>
      );
    }
  }


  export default ButtonComponent 