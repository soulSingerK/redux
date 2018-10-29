import React from 'react'
import { connect } from 'react-redux'
import { doAdd, doReduce } from './redux/test.redux'

@connect(
  state => state,
  { doAdd, doReduce }
)
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.doAdd}>加</button>
        <span>{this.props.num}</span>
        <button onClick={this.props.doReduce}>减</button>
      </div>
    )
  }
}

export default App