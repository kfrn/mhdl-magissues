import React, { Component } from 'react'

const App = ({state, dispatch}) => {
  console.log("In the main app Component: ", state.magIssues)
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        {state.text}
      </p>
      <p>
        The magIssues value is {state.magIssues}
      </p>
    </div>
  )
}

export default App
