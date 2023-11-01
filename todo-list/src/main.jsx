import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import TodoContainer from './components/TodoContainer.jsx'
import TodoContainerLSU from './components/TodoContainerLSU'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContainerLSU />
  </React.StrictMode>,
)