import React from 'react'
import PicturePlayInfo from './components/PicturePlay'
import Footer from './components/Footer'
import MagIssue from './components/MagIssue'

const App = ({state}) => {
  let firstObj = state.magIssues[0]
  console.log(firstObj)
  console.log(state.magIssues.length)
  const availIssues = state.magIssues.filter(issue => issue.startPage)
  console.log(availIssues.length);
  return (
    <div className="App">
      <div className='header'></div>
      <PicturePlayInfo />
      <div className='info-box'>
        <h5>Issues</h5>
        {availIssues.map(issue => <p>{issue.bookID}</p>)}
      </div>
      <Footer />
    </div>
  )
}

export default App
