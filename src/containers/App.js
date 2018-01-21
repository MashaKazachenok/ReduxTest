import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user
    return <div>
      <p>Hi from App, {name} {surname}!</p>
      <p>Are you {age} years old?</p>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(App)