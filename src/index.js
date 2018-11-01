import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { Provider } from './redux/custom.react-redux'

// import App from './app'
import App from './new.context'
import store from './redux/test.redux'

ReactDOM.render(

  <App />,
  document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'))

