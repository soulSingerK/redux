import PropTypes from 'prop-types'
import React from 'react'

class Provider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      store: this.props.store
    }
  }

  getChildContext() {
    return {
      store: this.state.store
    }
  }

  render() {
    return <p>{this.props.children}</p>
  }
}

function connect() {

}

export { Provider, connect }