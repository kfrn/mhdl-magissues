import React from 'react';
import { render } from 'react-dom'
import App from './App';
import initialState from './initialState'

const root = document.getElementById('root')

render (
  <App state={initialState}/>, root
)
