import React from 'react'
import PropTypes from 'prop-types'

class TabBar extends React.Component {
  static contextTypes = {
    user: PropTypes.string
  }
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    return <h1>{this.context.user}</h1>
  }
}

class NavBar extends React.Component {
  render() {
    return (
    <div>
      <TabBar></TabBar>
    </div>
    )
  }
} 

class App extends React.Component {
  static childContextTypes = {
    user: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = { user: 'shisan' }
  }

  getChildContext() {
    return {
      user: this.state.user
    }
  }

  render() {
    return (
      <NavBar></NavBar>
    )
  }
}

export default App