import React, { Component } from 'react'

class About extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form action = "/about">
        <button type="submit"> ABOUT </button>
      </form>
    );
  }
}


export default About 