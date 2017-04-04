import initialState from './initialState'
import clone from 'clone'
import pictureplayData from '../data/pictureplay_data_imagefiles.js'

const reducer = (state = initialState, { type, payload = {} }) => {
  const newState = clone(state)
  switch (type) {
    case 'INIT':
      console.log("got here")
      console.log(newState.magIssues);
      newState.magIssues = 'updated state'
      console.log(newState.magIssues);
      // newState.magIssues = pictureplayData
      return newState
      break;
    default:
      return newState
  }
}

export default reducer
