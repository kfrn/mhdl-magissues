import React from 'react'
const getDateString = require('../utilities/getDateString')

const MagIssue = ({props}) => {
  const imgURL = `images/magazine-covers/${props.derivJPEG}`
  const dateString = getDateString(props.day, props.mo, props.year)
  return (
    <div className='magazine-issue'>
      <a href={props.startPage}><img src={imgURL} alt={`Picture Play ${dateString}`}/></a>
      <p>Vol {props.vol}, no. {props.number}</p>
      <p>{dateString}</p>
      <p><a href={props.startPage}>View issue</a></p>
    </div>
  )
}

export default MagIssue
