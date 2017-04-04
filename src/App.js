import React from 'react'
import PicturePlayInfo from './components/PicturePlay'
import Footer from './components/Footer'
import MagIssue from './components/MagIssue'

const App = ({state}) => {
  const availIssues = state.magIssues.filter(issue => issue.startPage)
  return (
    <div className="App">
      <div className='header'></div>
      <PicturePlayInfo />
      <div className='info-box'>
        <h5>Available Issues</h5>
        <div id='mag-issues'>
          {availIssues.map((issue, i) => <MagIssue key={i} props={issue} />)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
