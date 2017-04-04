import React from 'react'

const App = ({state, dispatch}) => {
  let firstObj = state.magIssues[0]
  console.log(firstObj)
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        Here are some things about the first object. BookID is {firstObj.bookID} and start page is {firstObj.startPage}.
      </p>
    </div>
  )
}

export default App
