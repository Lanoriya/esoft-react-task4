import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={'/esoft-react-task4/'}>
      <App />
    </Router>
  </React.StrictMode>
)
