import React from 'react' 

const context = React.createContext('light')

function ThemeButton(props) {
  return (
    <context.Consumer>
      { theme => <button {...props}>{theme}</button> }
    </context.Consumer>  
  )
}

function ToolBar(props) {
  return (
    <div>
      <ThemeButton></ThemeButton>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <context.Provider value="dark">
        <ToolBar />
      </context.Provider>
    )
  }
}

export default App