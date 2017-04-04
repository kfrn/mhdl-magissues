import React from 'react'
import PicturePlay from './components/PicturePlay'

const App = ({state}) => {
  let firstObj = state.magIssues[0]
  console.log(firstObj)
  return (
    <div className="App">
      <div className='header'></div>
      <PicturePlay />
    </div>
  )
}

export default App
